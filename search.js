var app = angular.module('searchApp', []);

app.config([
  '$interpolateProvider', function($interpolateProvider) {
    return $interpolateProvider.startSymbol('{(').endSymbol(')}');
  }
]);

// criando o ng-controller="searchController"
app.controller('searchController', ['$scope', '$http', function($scope, $http){
  // criando a funcao "pesquiser(q)" que logo será usada em ng-keyup="pesquisar(search)"
  $scope.pesquisar = function(q) {
    $scope.posts = [];
    if (q != "" && q != undefined && q.length >= 1) {
      // no $http.get() que toda a mágica acontece...
      $http.get(GLOBAL_BASEURL + '/search.json', { "data" : q }).success(function(data) {
        // atribuindo os objetos em uma variável "posts"
        $scope.posts = data;
      }).error(function(data) {
        console.error('error...');
      });
    }
  };
}]);