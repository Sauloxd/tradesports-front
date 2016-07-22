import '!ng-cache!../../components/navbar/navbar.html';
import '!ng-cache!../../components/footer/footer.html';
import '!ng-cache!./cart.html';
import '!ng-cache!./cart-recently.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('cart', {
      url: '/cart',
      templateUrl: 'cart.html',
      controller: 'cartController',
      controllerAs: 'cart'
    });

}
