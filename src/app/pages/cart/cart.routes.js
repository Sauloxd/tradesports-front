import '!ng-cache!../../components/navbar/navbar.html';
import '!ng-cache!../../components/footer/footer.html';
import '!ng-cache!./cart.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('cart', {
      url: '/cart',
      templateUrl: 'cart.html',
      controller: 'cartController',
      controllerAs: 'vm'
    });

}
