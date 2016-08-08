var homeController = function ($rootScope, crudService) {
  var vm = this;

  crudService.get('produto')
    .then(function(response){
      vm.products = response.data.slice(0, 10);
    }, function(err) {
      console.log('error', err);
    });

    $rootScope.$on('rootScope:newProducts', function (event, data) {
    	console.log(data); // 'Emit!'
    	vm.products = data
  	});
}

export default homeController;
