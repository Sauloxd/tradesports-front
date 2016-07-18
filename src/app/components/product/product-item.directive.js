import '!ng-cache!./product-item.html';

export default function productDirective(){
    return {
        restrict: 'E',
        templateUrl: 'product-item.html', // markup for template
        scope: {
            data: '='
        },
        link: function(scope, element, attr) {

        }
    };
}
