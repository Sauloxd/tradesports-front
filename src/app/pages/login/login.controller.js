var loginCtrl = function (crudService, authService, $state, $uibModalInstance) {
  var vm = this;
  vm.error = false;

  vm.login = function() {
    authService.login(vm.user, vm.password, function (result) {
      if (result === true) {
          $state.go('carrinho');
          $uibModalInstance.dismiss('cancel');
      }
      vm.error = !result;
    });

  };

  vm.close = function() {
    $uibModalInstance.dismiss('cancel');
  };
};

export default angular.module('app.login', [])
  .controller('loginCtrl', loginCtrl)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
