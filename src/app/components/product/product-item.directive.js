import '!ng-cache!./product-item.html';
import '!ng-cache!../modals/product-details.html';

export default function productDirective($uibModal, crudService, $localStorage){
    return {
        restrict: 'E',
        templateUrl: 'product-item.html', // markup for template
        scope: {
            data: '='
        },
        link: function(scope, element, attr) {
        	var modalInstance;
          scope.cart_quantidade = 1;
          scope.open = function (item) {

            var insertIntoCart = {};
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

            scope.updateQtd = function(qtd) {
              if (scope.cart_quantidade == '0' && qtd === -1) return;
              scope.cart_quantidade = qtd + parseInt(scope.cart_quantidade);
            };

            scope.putInCart = function(){
              insertIntoCart = {
                  id_produto: scope.data.idproduto,
                  quantidade: scope.cart_quantidade
              };
              crudService.update('carrinho', $localStorage.currentUser.cpf_id, insertIntoCart);
            }

          };
          
          scope.cancel = function () {
            modalInstance.dismiss('cancel');
          };
        }
    };

}
