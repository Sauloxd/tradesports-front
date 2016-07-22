import '!ng-cache!./cart-product-item.html';

export default function cartDirective(){
    return {
        restrict: 'A',
        templateUrl: 'cart-product-item.html', // markup for template
        scope: {
          item: '=',
          index: '=',
          removeItem: '&',
          updateQtd: '&'
        },
        link: function(scope, element) {
          console.log('the index is :', scope.index);
        }
    };

}
