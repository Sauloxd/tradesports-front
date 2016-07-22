import '!ng-cache!./product-item.html';
import '!ng-cache!../modals/product-details.html';

export default function productDirective($uibModal){
    return {
        restrict: 'E',
        templateUrl: 'product-item.html', // markup for template
        scope: {
            data: '='
        },
        link: function(scope, element, attr) {
        	var modalInstance;

          scope.open = function (item) {

          	scope.emEstoque = scope.data.quantidade > 0
          	scope.semEstoque = scope.data.quantidade === 0

          	if(scope.emEstoque) {
          		scope.data.estoque = 'em estoque'
          	} else {
          		scope.data.estoque = 'sem estoque'
          	};

            modalInstance = $uibModal.open({
              animation: true,
              templateUrl: 'product-details.html',
              size: 'lg',
              scope: scope
            });
          };
          scope.cancel = function () {
            modalInstance.dismiss('cancel');
          };
        }
    };

}
