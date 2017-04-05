angular.module("exercicio", []);
angular.module("exercicio").controller("exercicioCtrl", function($scope, $http) {
	$scope.titulo = "Exercicio 05";
	$scope.pessoas = [];

    var carregarContatos = function () {
        $http.get("http://localhost:2017/pessoas").success(function (data) {
            $scope.pessoas = data;
        })};    

    $scope.salvarPessoa = function(pessoa) {
        $http.post("http://localhost:2017/pessoas", pessoa).success((data) => {
            alert("Salvo com sucesso!");
            $scope.pessoas.push(angular.copy(data));
            delete $scope.pessoa;
    }
});
