import '!ng-cache!../modals/login.html';

var navbarCtrl = function ($rootScope, crudService, $uibModal, $localStorage, authService, $state) {
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

  vm.goToMyAcc = function () {
    if(vm.isLogged = !!$localStorage.currentUser) {
      $state.go('minha-conta');
    } else {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'login.html',
        controller: 'loginCtrl',
        controllerAs: 'login',
        size: 'md'
      });
    }
  }

  vm.filter = function(genero, tipo) {
    var data = {}
    data.genero = [genero]
    data.tipo = [tipo]
    crudService.getWithFilter('produto', data)
      .then(function(response) {
        console.log(response)
        $rootScope.$emit('rootScope:newProducts', response.data.slice(0, 10)); // $rootScope.$on
        console.log(vm.products)
      }, function(err) {
        console.log('error', err)
      })
  }

}

export default navbarCtrl;
