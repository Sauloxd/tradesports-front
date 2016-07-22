import '!ng-cache!../modals/login.html';

var navbarCtrl = function (crudService, $uibModal, $localStorage, authService) {
  var vm = this;
  if(vm.isLogged = !!$localStorage.currentUser) {
    vm.nome = $localStorage.currentUser.nome;
  }

  console.log('is logged? ', vm.isLogged);

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
  };

}

export default navbarCtrl;
