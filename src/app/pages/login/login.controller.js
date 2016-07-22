var loginCtrl = function (crudService, authService, $state, $uibModalInstance) {
  var vm = this;
  vm.error = false;
  vm.login = function() {
    console.log('clicked');
    console.log(vm.user, vm.password);
    authService.login(vm.user, vm.password, function (result) {
      console.log('result: ', result);
      if (result === true) {
          console.log('vai pro cart');
          $state.go('cart');
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
