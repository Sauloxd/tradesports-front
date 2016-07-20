import '!ng-cache!./product-item.html';

export default function productDirective($uibModal){
    return {
        restrict: 'E',
        templateUrl: 'product-item.html', // markup for template
        scope: {
            data: '='
        },
        link: function(scope, element, attr) {
        	scope.open = function (item) {
			    var modalInstance = $uibModal.open({
			      animation: true,
			      templateUrl: 'popup.html',
			      size: 'lg',
			      scope: scope
			    })			    
			}
        }
    };
}
