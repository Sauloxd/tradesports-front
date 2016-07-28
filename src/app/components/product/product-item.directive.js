import '!ng-cache!./product-item.html';
import '!ng-cache!../modals/product-details.html';
import cs from 'imports?$=jquery!../custom-jquery-components/custom-select';


export default function productDirective($uibModal, crudService, $localStorage, prodConstants, $timeout){
    return {
        restrict: 'E',
        templateUrl: 'product-item.html', // markup for template
        scope: {
            data: '='
        },
        link: function(scope, element, attr) {
        	var modalInstance;
          var insertIntoCart = {};
          scope.cart_quantidade = 1;
          scope.tamanhosDisponiveis = prodConstants.tamanhos;

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
            }).opened.then(()=>{$timeout(()=>{cs();}, 0)});
          };

          scope.updateQtd = function(qtd) {
            if (scope.cart_quantidade == '0' && qtd === -1) return;
            scope.cart_quantidade = qtd + parseInt(scope.cart_quantidade);
          };

          scope.putInCart = function(){
            if($localStorage.currentUser) {
              insertIntoCart = {
                cpf: $localStorage.currentUser.cpf_id,
                idProduto: scope.data.idproduto,
                quantidade: scope.cart_quantidade,
                quantidade: scope.cart_quantidade,
            };
            crudService.post('carrinho', insertIntoCart).then((response)=>{
              alert('sucesso! ', response);
            }, (err)=>{
              console.log('err', err);
            });
            }else {
              //TODO: offline cart!
              alert('loga ae parça');
            }
          }

          scope.cancel = function () {
            modalInstance.dismiss('cancel');
          };
        }
    };

}
