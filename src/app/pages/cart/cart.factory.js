function cartService($http, crudService, $localStorage, $q) {
  var vm = this;
  vm.cart = {};
  vm.cart.items = [];


  return {
    getCliente: function() {
      return vm.cart.cpf_cliente;
    },
    getItems: function() {
      return vm.cart.items;
    },
    init: function() {
      vm.cart.cpf_cliente = $localStorage.currentUser.cpf_id;
      return crudService.getById('carrinho', vm.cart.cpf_cliente)
        .then(function(response){
          $localStorage.currentUser.cart = vm.cart;
          vm.cart.items = response.data;
          console.log('vm.cart.items', vm.cart.items);
        }, function(err) {
          $q.reject(response.data);
          console.log('Failed to init Cart', err);
        });
    },
    update: function() {
      console.log('update cart');
      return crudService.getById('carrinho', $localStorage.currentUser.cpf_id)
        .then(function(response){
          if($localStorage.currentUser) {
            vm.cart.items = response.data;
            $localStorage.currentUser.cart = vm.cart;
            console.log('my cart: ', vm.cart.items);
          }
        }, function(err) {
          $q.reject(response.data);
          console.log('Failed to init Cart', err);
        });
    },
    destroy: function() {
      delete vm.cart;
    }
  };

}

export default cartService;
