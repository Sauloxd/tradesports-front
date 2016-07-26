import '!ng-cache!../modals/login.html';

var navbarCtrl = function (crudService, $uibModal, $localStorage, authService) {
  var vm = this;
  vm.cart = {};
  if(vm.isLogged = !!$localStorage.currentUser) {
    vm.nome = $localStorage.currentUser.nome;
    crudService.getById('carrinho', $localStorage.currentUser.cpf_id)
      .then(function(response){
        vm.cart.qtd = response.data.length;

      }, function(err) {
        console.log('error', err);
      });

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
  };

}

export default navbarCtrl;
