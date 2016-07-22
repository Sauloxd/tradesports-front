var loginCtrl = function (crudService) {
  var vm = this;

  console.log('login loaded');
};

export default angular.module('app.login', [])
  .controller('loginCtrl', loginCtrl)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
