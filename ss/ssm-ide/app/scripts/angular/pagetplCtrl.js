/**
 * Created by Administrator on 14-5-23.
 */
/**
 * Created by gyj on 14-4-19.
 */
var app = angular.module('app');
app.controller('pagetplCtrl', ['$scope', '$location',function pagetplCtrl($scope, $location) {
//  新增页面的操作
	$scope.addpage=function addpage(){
		var data = {
			'directive':'addpage'
		}
		sendMessage_funcdirective(data);
	}
	$scope.changeCurPage=function changeCurPage(){
		var data = {
			'toPage':$scope.curPageid,
			'directive':'changeCurPage'
		}
		sendMessage_funcdirective(data);
	}
	$scope.changeCurPageidContent=function changeCurPageidContent(){
		var data = {
			'oldPageid':$scope.oldPageid,
			'newPageid':$scope.curPageid,
			'directive':'changeCurPageidContent'
		}
		sendMessage_funcdirective(data);
	}
	$scope.init=function init(){
		var data = {
			'directive':'initPageContent'
		}
		sendMessage_funcdirective(data);
	}
	$scope.delCurPage=function delCurPage(){
		var data = {
			'curPageid':$scope.curPageid,
			'directive':'delCurPage'
		}
		sendMessage_funcdirective(data);
	}
	$scope.wholePageConfigTitle='总页面设置';
	$scope.eachPageConfigTitle='本页面设置';
	$scope.$watch('attr', function() {
		if(typeof $scope.attr == 'undefined'||typeof $scope.attr.curPageid == 'undefined') {
			var data = {'directive':'initpage'}
			sendMessage_funcdirective(data);
		}else{
			$scope.curPageid=$scope.attr.curPageid;
			$scope.oldPageid=$scope.curPageid;
		}
	},true);
}]);
