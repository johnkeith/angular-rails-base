var testController = function($scope, $compile, $http){
	$scope.testValue = "This is my second view test!"
};

testController.$inject = ['$scope', '$compile', '$http'];