var loginCtrl = function (crudService, authService, $state, $uibModalInstance) {
  var vm = this;

  vm.login = function() {
    authService.login(vm.user, vm.password, function (result) {
      console.log('result: ', result);
      if (result === true) {
          console.log('vai pro cart');
          $state.go('cart');
          $uibModalInstance.dismiss('cancel');
      } else {
          vm.error = '';
      }
    });
  };

  vm.close = function() {
    $uibModalInstance.dismiss('cancel');
  };
};

export default angular.module('app.login', [])
  .controller('loginCtrl', loginCtrl)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
