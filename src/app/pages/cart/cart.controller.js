var cartController = function (crudService, $localStorage) {
  var vm = this;

  crudService.getById('carrinho', $localStorage.currentUser.cpf_id)
    .then(function(response){
      vm.products = response.data.results;
      vm.total = response.data.total;
    }, function(err) {
      console.log('error', err);
    });

}

export default cartController;
