var homeController = function (crudService) {
  var vm = this;

  vm.teste = function() {
  	var data = {}
  	data.genero = [1,2]
  	crudService.getWithFilter('produto', data)
  		.then(function(response) {
  			console.log(response)
  			vm.products = response.data.slice(0, 10)
  			console.log(vm.products)
  		}, function(err) {
  			console.log('error', err)
  		})
  }

  crudService.get('produto')
    .then(function(response){
      vm.products = response.data.slice(0, 10);
    }, function(err) {
      console.log('error', err);
    });

}

export default homeController;
