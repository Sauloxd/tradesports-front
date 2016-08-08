var smoothScroll = require('smoothscroll');
var homeController = function ($rootScope, crudService, $window) {
  var vm = this;

  crudService.get('produto')
	.then(function(response){
		vm.page = 1
		vm.allProducts = response.data
	  vm.products = vm.allProducts.slice(0, 12);
	}, function(err) {
	  console.log('error', err);
	});

	$rootScope.$on('rootScope:newProducts', function (event, data) {
		vm.page = 1
		vm.allProducts = data
		vm.products = vm.allProducts.slice(0,12)
	});

	vm.nextPage = function() {
		vm.products = vm.allProducts.slice(vm.page * 12, (vm.page + 1) * 12)
		vm.page++
		smoothScroll(200, 800)
	}

	vm.lastPage = function() {
		vm.products = vm.allProducts.slice((vm.page - 1) * 12, vm.page * 12)
		vm.page--
		smoothScroll(200, 800)
	}
}

export default homeController;
