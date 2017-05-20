var app = angular.module("myApp", []);


app.controller("myController", ["$scope", function($scope) {
	$scope.message = "My controller"
	$scope.companyName = "Techminds Pvt Ltd"
	$scope.userDetails = [
        {
            name : "Aravind",
		    address : "Bangalore"
        },
        
        {
            name : "Shiva",
            address : "Hyderabad"
        },
        
        {
            name : "Naveen",
            address : "Chennai"
        },
        
        {
            name : "Kanna",
            address : "Us"
        }
	]

	$scope.changeCompanyName = function() {
		$scope.companyName = "Qurater Technologies Pvt Ltd"
	}
}])



app.directive("myDirectiveCustomdirective" , function() {
	return {
		restrict : 'EACM',
		templateUrl :  'customerDetails.html' ,    
		replace : true,
		scope : {
			companyName : '@',
			change : '&',
            userDetails : '='
		}
	}
})