/**
 * Created by gyj on 14-4-19.
 */

var app = angular.module('app');
app.controller('funcPanelCtrl', ['$scope', '$location', function funcPanelCtrl($scope, $location) {
	messenger.listen(function (msg) {
		var msg = JSON.parse(msg);
		$scope.$apply(function () {
			$scope.seq=msg.seq;
			$scope.attr=msg.attr;
			$scope.elemEventList=msg.elemEventList;
			console.log("$scope.elemEventList   :",$scope.elemEventList);
			console.log("msg.type   :",msg.type);
			if(msg.type == 'page'){
				var args={
					oldPageid:msg.attr.oldPageid,
					pageid:msg.attr.curPageid
				}

				if(msg.attr.type=='init'){
					iframeinfo.setIframeBlock([])
					dragEvent(args);
				}else{
					setTimeout(function(){
						dragEvent(args);
					},2000);
				}
			}

			if(msg.type == 'pagestatechange'){
				iframeinfo.setPagestate(msg.pagestate);
			}
			$location.url('/' + msg.type);
		});
	});
}]);
