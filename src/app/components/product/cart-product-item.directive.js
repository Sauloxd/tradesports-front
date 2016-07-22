import '!ng-cache!./cart-product-item.html';

export default function cartDirective(){
    return {
        restrict: 'A',
        templateUrl: 'cart-product-item.html', // markup for template
        scope: {
          data: '='
        }
    };

}
