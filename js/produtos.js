var app = angular.module('loja',['ngRoute', 'angular-toArrayFilter', ,'ui.bootstrap']);

app.config( function($routeProvider) {
  
  $routeProvider
  .when( '/', {
    templateUrl: 'paginas/lista.html',
    controller:  'controller_list'  
  } )
  .when( '/produto/:id', {
    templateUrl: 'paginas/produto.html',
    controller:  'controller_prod'
  } )
  .when( '/produto', {
    templateUrl: 'paginas/produto.html',
    controller:  'controller_prod'
  });
});

app.controller('controller_list', ['$scope', function($scope) {
    $scope.produtos = meusProdutos;
    
    $scope.filtro = { nome: "" };
    $scope.ordem = "nome";
}]);

app.controller('controller_prod', ['$scope', '$routeParams', function($scope,$routeParams) {
    $scope.produto = meusProdutos[$routeParams.id||'01'];
	$scope.slides = meusProdutos[$routeParams.id].imagens;
	$scope.myInterval = 3000;
}]);