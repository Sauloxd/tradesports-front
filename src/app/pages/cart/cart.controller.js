var cartController = function (crudService, $localStorage) {
  var vm = this;
  //TODO: Implemenet Login then this.
  //TODO: OR implement offline cart withouth accessing the psql/
  console.log('curr user ',$localStorage.currentUser);
  crudService.getById('carrinho', $localStorage.currentUser.cpf_id)
    .then(function(response){
      console.log('this are the products: ', response.data);
      vm.products = response.data.slice(0, 10);
    }, function(err) {
      console.log('error', err);
    });

}

export default cartController;
