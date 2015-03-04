var uploadsController = function($scope, $upload){
	$scope.upload = function(files) {
		angular.forEach(files, function(file, index){
			$upload.upload({
        url: '/api/upload_spreadsheet',
        method: 'POST',
        file: file,
      });
		})
	}
};

uploadsController.$inject = ['$scope', '$upload'];
