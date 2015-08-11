var app = angular.module("weatherServicingly",["ngRoute"]);


app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                title: 'Weather list',
                templateUrl: 'searchLocation.html',                
                controller: 'searchLocationController'
            });
            
    }])
localStorage.weatherHistoryTemp = [];
localStorage.weatherHistoryName = [];
app.controller('searchLocationController', function($scope,$http) {
$scope.searchLoc = function(){
	 $http.get('http://api.worldweatheronline.com/free/v2/weather.ashx?q='+$scope.locationText+'&format=json&key=a1715a9cc7aec6edb9f9a68799173').then(function(response) {
	 	localStorage.weatherHistoryTemp.push(response.data.data.current_condition[0].temp_C);
	 	localStorage.weatherHistoryName.push(response.data.data.request[0].query);

    
    });
	}
});