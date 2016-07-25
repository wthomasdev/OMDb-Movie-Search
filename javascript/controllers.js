movieApp.controller('httpController', function($scope, $http, $state, $stateParams) {
	if ($stateParams.query) {
		$scope.resultArray = []
		$scope.movie = {};
		$http.get('https://www.omdbapi.com/?s=' + $stateParams.query).then(function(data) {
			$scope.resultArray = data.data.Search;
			$state.go('search', reload=true);
		});
	}
});
movieApp.controller('showController', function($scope, $http, $stateParams) {
	$http.get('https://www.omdbapi.com/?i=' + $stateParams.i).then(function(data) {
		// console.log(data);
		$scope.movie = data.data;



	});
});
// movieApp.controller('ImmediateResults', function($scope, $http, $stateParams) {
// 	$http.get('https://www.omdbapi.com/?s=' + $stateParams.title).then(function(data) {
// 		$scope.view.results = data.data.Search
// 		console.log($scope.view.results)
// 	})
// })
