angular.module("exercicio", []);
angular.module("exercicio").controller("exercicioCtrl", function($scope, $http) {
	$scope.titulo = "Exercicio 05";
	$scope.pessoas = [];

    $scope.carregarContatos = function () {
      $http.get("/pessoas").then(function (ret) {
	if(ret.status!=200)
	  throw ret;	
        $scope.pessoas = ret.data;
      });
    };
	
    $scope.carregarContatos();	

    $scope.salvarPessoa = function(pessoa) {
        $http.post("/salvar", pessoa).then((data) => {
            alert("Salvo com sucesso!");
	     $scope.carregarContatos();
            delete $scope.pessoa;
        })
    };
});
