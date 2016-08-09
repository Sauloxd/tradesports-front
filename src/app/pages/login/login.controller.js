var loginCtrl = function (crudService, authService, $state, $uibModalInstance) {
  var vm = this;
  vm.error = false;

  vm.login = function() {
    authService.login(vm.user, vm.password, function (result) {
      if (result === true) {
          $state.reload()
          $uibModalInstance.dismiss('cancel');
      }
      vm.error = !result;
    });

  };

  vm.close = function() {
    $uibModalInstance.dismiss('cancel');
  };

  vm.signup = function() {

    var data = {}
    data.cpf = vm.cpf
    data.nome = vm.name
    data.login = vm.user
    data.senha = vm.password
    data.telefone = vm.tel
    data.email = vm.email

    crudService.post('cliente', data)
      .then(function(response) {
        vm.login()
      })

  };
};

export default angular.module('app.login', [])
  .controller('loginCtrl', loginCtrl)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
