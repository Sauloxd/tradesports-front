var cartController = function ($scope, crudService, $localStorage) {
  var vm = this;
  var total = 0;
  crudService.getById('carrinho', $localStorage.currentUser.cpf_id)
    .then(function(response){
      vm.products = response.data;
      vm.products.forEach(function(prod) {
        total += prod.prod_valor * prod.cart_quantidade;
      });
      vm.total = total.toFixed(2);
    }, function(err) {
      console.log('error', err);
    });

  vm.removeItem = function(index){
    vm.products.splice(index, 1);
  }
  vm.updateQtd = function(index, qtd) {
    console.log('index: ', index);
    console.log('qtd: ', qtd);
    vm.products[index].cart_quantidade = qtd + parseInt(vm.products[index].cart_quantidade);
  };
}

export default cartController;
