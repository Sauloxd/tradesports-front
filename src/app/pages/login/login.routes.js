import '!ng-cache!./login.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login.html',
      controller: 'loginCtrl',
      controllerAs: 'vm'
    });

}
