var checkoutCtrl = function (crudService, $localStorage) {
  var vm = this;
  vm.showAddress = false;
  crudService.getById('endereco', $localStorage.currentUser.cpf_id)
    .then((response)=>{
      vm.enderecos = response.data;
      console.log('user> ', vm.enderecos);
    });

  vm.radioSelected = function(index) {
    vm.endereco = vm.enderecos[index];
    vm.showAddress = true;
  }

}

export default checkoutCtrl;
