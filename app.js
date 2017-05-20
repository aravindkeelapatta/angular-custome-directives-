var app = angular.module("myApp", []);


app.controller("myController", ["$scope", function($scope) {
	$scope.message = "My controller"
}])



app.directive("myDirectiveCustomdirective" , function() {
	return {
		restrict : 'EACM',
		template : "<h3>This is my custom directive for second time</h3>",
		replace : true
	}
})