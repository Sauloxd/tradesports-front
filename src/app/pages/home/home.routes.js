import '!ng-cache!../../components/navbar/navbar.html';
// import '!ng-cache!../../components/flexslider/flexslider.html';
import '!ng-cache!../../components/banner/two-banner.html';
import '!ng-cache!../../components/filter-menu/filter-menu.html';
import '!ng-cache!./home.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    });

}
