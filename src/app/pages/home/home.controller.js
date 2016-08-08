var homeController = function ($rootScope, crudService) {
  var vm = this;

  crudService.get('produto')
    .then(function(response){
      vm.products = response.data.slice(0, 12);
    }, function(err) {
      console.log('error', err);
    });

    $rootScope.$on('rootScope:newProducts', function (event, data) {
    	console.log(data);
    	vm.products = data.slice(0,12)
  	});
}

export default homeController;
