import '!ng-cache!../modals/login.html';

var navbarCtrl = function (crudService, $uibModal) {
  var vm = this;

  vm.openLogin = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'login.html',
      controller: 'loginCtrl',
      controllerAs: 'login',
      size: 'md'
    });
  };

}

export default navbarCtrl;
