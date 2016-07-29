import '!ng-cache!../modals/login.html';

var navbarCtrl = function (crudService, $uibModal, $localStorage, authService, $state) {
  var vm = this;
  vm.cart = {};
  if(vm.isLogged = !!$localStorage.currentUser) {
    vm.nome = $localStorage.currentUser.nome;
    vm.cart.qtd = $localStorage.currentUser.cart.length || 0; //TODO: ou usuario anonimo
  }

  vm.openLogin = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'login.html',
      controller: 'loginCtrl',
      controllerAs: 'login',
      size: 'md'
    });
  };

  vm.logout = function () {
      authService.logout();
      vm.isLogged = false;
  };

}

export default navbarCtrl;
