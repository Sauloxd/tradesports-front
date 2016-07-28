var cartController = function (crudService, $localStorage, $scope, promocaoService, $state, $rootScope) {
  console.log('the current user is: ', $localStorage.currentUser);

  var currentUser = $localStorage.currentUser;

  //TODO: REMOVE THIS :
  if(!currentUser){
    alert('loga ae parça!');
    $state.go('home');
    var currentUser = {};
  }

  //Sadly the events in $scope are not in this;
  var vm = this;
  vm.frete = {};
  vm.frete.isFree = false;
  //Get from API dos correios. E ai? calcular esse e dps ver as promocoes?
  vm.frete.price = 20.15;
  vm.promocao = 0;
  vm.subtotal = 0;
  vm.products = [];
  //TODO: implement for offline cart!!!!
  console.log('carrinho: ', currentUser.cart);
  vm.products = currentUser.cart.items;
  crudService.get('promocoes')
    .then(function(response){
      //TODO: Ta meio burro isso mas eu to bebado
      response.data.forEach((promocao) => {
        if(promocao.tipo == 0) {
          vm.promocao = promocaoService.produto[0];
        }else if(promocao.tipo == 1) {
          vm.promocao = promocaoService.produto[1];
        }else {
          vm.freteGratis = promocaoService.produto[2];
        };
      });
      updateTotal();

    }, function(err) {
      console.log('error', err);
    });


  vm.removeItem = function(index){
    vm.subtotal = (parseFloat(vm.subtotal) - (
      vm.products[index].cart_quantidade * vm.products[index].prod_valor
    )).toFixed(2);
    vm.products.splice(index, 1);
  }

  vm.updateQtd = function(index, qtd) {
    if (vm.products[index].cart_quantidade == '0' && qtd === -1) return;
    vm.products[index].cart_quantidade = qtd + parseInt(vm.products[index].cart_quantidade);
  };

  $scope.$on('child', function (event, data) {
    //O calculo do subtotal fica aqui, quando a directive filho for inserido/modificado!
    if (data.add) {
        vm.subtotal = (parseFloat(vm.subtotal) + data.valor).toFixed(2);
        updateTotal();
    } else {
      vm.subtotal = (parseFloat(vm.subtotal) - data.valor).toFixed(2);
      updateTotal();
    }

  });
  function updateTotal() {
    vm.total = (vm.subtotal - (vm.subtotal * vm.promocao /100) + vm.frete.price).toFixed(2);
  };

  vm.mockCheckout = function() {

    var data = {}
    data.cpf_cliente = currentUser.cpf_id
    data.valor = vm.total
    data.metodo_de_pagamento = 'cartao'
    data.imagemNF = 'imagem da nota'
    data.notaFiscal = 'nota'
    data.estado = 'legal'

    crudService.post('compra', data).then(function(response) {
      var idCompra = response.data[0].idcompra

      var dataent = {}
      dataent.idCompra = idCompra
      dataent.prazo = new Date()

      crudService.post('entrega', dataent).then(function(res) {
        var idEntrega = res.data[0].identrega

        for(var i = 0; i < vm.products.length; i++) {

          var datapc = {}
          datapc.idCompra = idCompra
          datapc.idProduto = vm.products[i].prod_idproduto
          datapc.quantidade = vm.products[i].cart_quantidade

          if(parseInt(datapc.quantidade) <= vm.products[i].prod_quantidade) {
            datapc.idEntrega = idEntrega

            var dataprod = {}
            dataprod.valor = vm.products[i].prod_valor
            dataprod.nome = vm.products[i].prod_nome
            dataprod.imagem = vm.products[i].prod_imagem
            dataprod.descricao = vm.products[i].prod_description
            dataprod.peso = vm.products[i].prod_peso
            dataprod.tamanho = vm.products[i].prod_tamanho
            dataprod.fabricante = vm.products[i].prod_fabricante
            dataprod.tipo = vm.products[i].prod_tipo
            dataprod.quantidade = vm.products[i].prod_quantidade - datapc.quantidade

            crudService.update('produto', vm.products[i].prod_idproduto, dataprod)
          }

          crudService.post('produtoCompra', datapc)
        }
      })

    }, function(err) {
      console.log('error', err);
    });
  }

  $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
    // if(fromState.name === 'carrinho'){
    //   if(currentUser.cart) {
    //     var formData = {};
    //     formData.item = [];
    //     vm.products.forEach((item)=>{
    //       formData.item.push({
    //         item_qtd: item.cart_quantidade,
    //         item_id: item.prod_idproduto,
    //         item_size: item.prod_tamanho
    //       });
    //     });
    //     console.log('vm.products: ', vm.products);
    //     formData.cpf_cliente = currentUser.cpf_id;
    //     console.log('formData:', formData);
    //     crudService.post('carrinho', formData).then(
    //       (response)=>{
    //       alert('sucesso! ', response);
    //     }, (err)=>{
    //       console.log('err', err);
    //     });
    //   }
    // }

  });

}

export default cartController;
