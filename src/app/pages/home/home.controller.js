var homeController = function (crudService) {
  var vm = this;

  crudService.get('produto')
    .then(function(response){
      vm.products = response.data.slice(0, 10);
    }, function(err) {
      console.log('error', err);
    });

}

export default homeController;
