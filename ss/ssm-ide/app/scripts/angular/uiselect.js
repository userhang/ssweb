/**
 * Created by gyj on 14-4-19.
 */
var app = angular.module('app');
app.controller('uiselect', ['$scope',function uiselect($scope) {
	$scope.tabtoggle_theme = function () {
		$scope.themeislive = true;
		$scope.cssislive = false;
		$scope.tab_theme = true;
		$scope.tab_css = true;
	}
	$scope.tabtoggle_css = function () {
		$scope.themeislive = false;
		$scope.cssislive = true;
		$scope.tab_css = false;
		$scope.tab_theme = false;
	}
}]);

