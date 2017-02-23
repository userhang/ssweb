/**
 * Created by gyj on 14-5-7.
 */
var app = angular.module('app');
app.controller('editEventCtrl', ['$scope', '$location',function editEventCtrl($scope, $location) {
	$scope.saveEvent=function saveEvent(){
		var adata="";
		$.ajax({
			cache: false,
			type: "get",
			url:"ace.js",

			async: false,
			error: function(request) {
				alert("发送请求失败！");
			},
			success: function(data) {
				adata=data;
			}
		});
        //从编辑器获取代码

		var js=adata;
        //将代码赋值给evenData.funcContent
		eventData.funcContent=js;
		console.log("eventData      :",eventData);
        alert("保存完成");
		sendMessage_funcdirective(eventData);
	}
}]);
