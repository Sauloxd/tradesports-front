var cartController = function (crudService, $localStorage, $scope) {
  //Sadly the events in $scope are not in this;
  var vm = this;
  vm.total = 0;
  crudService.getById('carrinho', $localStorage.currentUser.cpf_id)
    .then(function(response){
      vm.products = response.data;
    }, function(err) {
      console.log('error', err);
    });

  vm.removeItem = function(index){
    vm.total = (parseFloat(vm.total) - (
      vm.products[index].cart_quantidade * vm.products[index].prod_valor
    )).toFixed(2);
    vm.products.splice(index, 1);
  }

  vm.updateQtd = function(index, qtd) {
    if (vm.products[index].cart_quantidade == '0' && qtd === -1) return;
    vm.products[index].cart_quantidade = qtd + parseInt(vm.products[index].cart_quantidade);
  };

  $scope.$on('child', function (event, data) {
    //O calculo do total fica aqui, quando a directive filho for inserido/modificado!
    if (data.add) {
        vm.total = (parseFloat(vm.total) + data.valor).toFixed(2);
    } else {
      vm.total = (parseFloat(vm.total) - data.valor).toFixed(2);
    }

  });

}

export default cartController;
