var homeController = function (crudService) {
  var vm = this;
  vm.teste = 'oi';
  crudService.get('produto')
    .then(function(response){
      console.log('this are the products: ', response.data[0]);
      vm.products = response.data.slice(0, 10);
    }, function(err) {
      console.log('error', err);
    });
}

export default homeController;
