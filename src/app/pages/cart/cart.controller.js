var cartController = function (crudService, $localStorage, $scope, promocaoService) {
  //Sadly the events in $scope are not in this;
  var vm = this;
  vm.frete = {};
  vm.frete.isFree = false;
  //Get from API dos correios. E ai? calcular esse e dps ver as promocoes?
  vm.frete.price = 20.15;
  vm.promocao = 0;

  vm.subtotal = 0;
  //TODO: implement for offline cart!!!!
  crudService.getById('carrinho', $localStorage.currentUser.cpf_id)
    .then(function(response){
      vm.products = response.data;
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
    data.cpf_cliente = $localStorage.currentUser.cpf_id
    data.valor = vm.total
    data.metodo_de_pagamento = 'cartao'
    data.imagemNF = 'imagem da nota'
    data.notaFiscal = 'nota'
    data.estado = 'legal'

    crudService.post('compra', data).then(function(response) {
      console.log(response)
    }, function(err) {
      console.log('error', err);
    });
  }
}

export default cartController;
