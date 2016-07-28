function cartService($http, crudService, $localStorage, $q) {
  var vm = this;
  vm.cart = {};
  vm.cart.items = [];
  vm.cart.itemsChanged = [];
  vm.cart.cpf_cliente;

  return {
    getCliente: function() {
      return vm.cart.cpf_cliente;
    },
    getItems: function() {
      return vm.cart.items;
    },
    init: function() {
      console.log('id do cliente',$localStorage.currentUser.cpf_id);
      vm.cart.cpf_cliente = $localStorage.currentUser.cpf_id;
      return crudService.getById('carrinho', vm.cart.cpf_cliente)
        .then(function(response){
          vm.cart.items = response.data;
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
