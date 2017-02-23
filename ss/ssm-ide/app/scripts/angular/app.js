/**
 * Created by gyj
 */
var app = angular.module('app', ['ngResource','ngSanitize','ngRoute']);
//这里将evenData设置为全局变量
app.constant('eventData', {
//	指令
	'directive':'addeventbind',
//	事件id
	'eventid':0,
//	元素序列号
	'seq': "",
//	关于子元素的相关属性
	'childattr':{},
//	绑定事件的类型
	'funcType':"",
//	绑定事件的具体代码
	'funcContent':"",
//  标记
    'flag':""
});
app.config(['$routeProvider', '$locationProvider',
	         function($routeProvider, $locationProvider) {
	             $routeProvider
                     .when('/normalImage', {
                         controller:'normalImageCtrl',
                         templateUrl:'views/tpl/normalImage.html'
                     })
                     .when('/normalDiv', {
                         controller:'normalDivCtrl',
                         templateUrl:'views/tpl/normalDiv.html'
                     })
                     .when('/inputText', {
                         controller:'inputTextCtrl',
                         templateUrl:'views/tpl/inputText.html'
                     })
                     .when('/inputRadio', {
                         controller:'inputRadioCtrl',
                         templateUrl:'views/tpl/inputRadio.html'
                     })
                     .when('/inputCheckbox', {
                         controller:'inputCheckboxCtrl',
                         templateUrl:'views/tpl/inputCheckbox.html'
                     })
                     .when('/inputSelect', {
                         controller:'inputSelectCtrl',
                         templateUrl:'views/tpl/inputSelect.html'
                     })
                     .when('/normalLine', {
                         controller:'normalLineCtrl',
                         templateUrl:'views/tpl/normalLine.html'
                     })
                     .when('/normalLabel', {
                         controller:'normalLabelCtrl',
                         templateUrl:'views/tpl/normalLabel.html'
                     })
                     .when('/normalDivSplit', {
                         controller:'normalDivCtrl',
                         templateUrl:'views/tpl/normalDiv.html'
                     })
                     .when('/textphotoShow', {
                         controller:'textphotoShowCtrl',
                         templateUrl:'views/tpl/textphotoShow.html'
                     })
                     .when('/textphotoShow2', {
                         controller:'textphotoShow2Ctrl',
                         templateUrl:'views/tpl/textphotoShow2.html'
                     })
                     .when('/textShow', {
                         controller:'textShowCtrl',
                         templateUrl:'views/tpl/textShow.html'
                     })
                     .when('/form', {
                         controller:'formCtrl',
                         templateUrl:'views/tpl/form.html'
                     })
                     .when('/blockDiv', {
                         controller:'blockDivCtrl',
                         templateUrl:'views/tpl/blockDiv.html'
                     })
                     .when('/normalPara', {
                         controller:'normalParaCtrl',
                         templateUrl:'views/tpl/normalPara.html'
                     })
	                 .when('/listul', {
	                           controller:'listultplCtrl',
	                           templateUrl:'views/tpl/listul.html'
	                       })
	                 .when('/page', {
                                controller:'pagetplCtrl',
                                templateUrl:'views/tpl/pages.html'
	                       })
	                 .when('/preview', {
                                templateUrl:'views/tpl/preview.html'
	                       })
		             .when('/tabview', {
			                   controller:'tabCtrl',
			                   templateUrl:'views/tpl/tab.html'
		                   })
		             .when('/button', {
			                   controller:'buttonCtrl',
			                   templateUrl:'views/tpl/button.html'
		                   })
		             .when('/panel', {
			                   controller:'panelCtrl',
			                   templateUrl:'views/tpl/panel.html'
		                   })
		             .when('/tree', {
			                   controller:'treeCtrl',
			                   templateUrl:'views/tpl/tree.html'
		                   })
		             .when('/toolbar', {
			                   controller:'toolbarCtrl',
			                   templateUrl:'views/tpl/toolbar.html'
		                   })
		             .when('/table', {
			                   controller:'tableCtrl',
			                   templateUrl:'views/tpl/table.html'
		                   })
		             .when('/grid', {
			                   controller:'gridCtrl',
			                   templateUrl:'views/tpl/grid.html'
		                   })
                     .when('/swipeDiv', {
                         controller:'swipeDivCtrl',
                         templateUrl:'views/tpl/swipeDiv.html'
                     })
                     .when('/zhuxingtu', {
                         controller:'zhuxingtuCtrl',
                         templateUrl:'views/tpl/zhuxingtu.html'
                     })
                     .when('/pagechange', {
                         controller:'pagechangeCtrl',
                         templateUrl:'views/tpl/pagechange.html'
                     })
                     .when('/focusimg', {
                         controller:'focusimgCtrl',
                         templateUrl:'views/tpl/focusimg.html'
                     })
                    .when('/iconButton', {
                        controller:'iconButtonCtrl',
                        templateUrl:'views/tpl/iconButton.html'
                    })
                     .when('/twonav', {
                         controller:'twonavCtrl',
                         templateUrl:'views/tpl/twonav.html'
                     })
                     .when('/bottomMenu', {
                         controller:'bottomMenuCtrl',
                         templateUrl:'views/tpl/bottomMenu.html'
                     })
                     .when('/timeshow', {
                         controller:'timeshowCtrl',
                         templateUrl:'views/tpl/timeshow.html'
                     })
                     .when('/iconButtonDiv', {
                         controller:'iconButtonDivCtrl',
                         templateUrl:'views/tpl/iconButtonDiv.html'
                     })
                     .when('/formDiv', {
                         controller:'formDivCtrl',
                         templateUrl:'views/tpl/formDiv.html'
                     })

			         .otherwise({
				                    redirectTo:'/page'
			                    });

	             // configure html5 to get links working on jsfiddle
//	             $locationProvider.html5Mode(true);
         }]);

//app.directive()方法在模块中注册一个新的指令
app.directive('ngShowuipane',function() {
	return {
		link : function($scope, $element) {
			$($element).bind('click',function(){
					var menuLeft = $( '#cbp-spmenu-s1' )[0],
						body = document.body;
					classie.toggle( this, 'active' );
					classie.toggle( body, 'cbp-spmenu-push-toright' );
					classie.toggle( menuLeft, 'cbp-spmenu-open' );
			})
		}
	};
});

app.directive('ngShowfuncpane',function() {
	return {
		link : function($scope, $element) {
			$($element).bind('click',function(){
				var menuRight = $( '#cbp-spmenu-s2' )[0];
				classie.toggle( this, 'active' );
				classie.toggle( menuRight, 'cbp-spmenu-open' );
			})
		}
	};
});

app.directive('accordionmenu',function() {
	return {
		restrict:'EA',
		replace:true,
		transclude:true,
		scope:{title:'=accordionmenuTitle',show:'=accordionmenuShow'},
		template:'<div>'+
			'<li class="accordionmenu_title" ng-click="toggle()">{{title}}</li>' +
			'<div ng-show="showMe" ng-transclude></div>' +
			'</div>',
		link : function($scope, $element,$attrs) {
				$scope.showMe=$scope.show;
				$scope.toggle=function toggle(){
				$scope.showMe=!$scope.showMe;
			}
		}
	}
});

app.directive('ngScrollbar',function($timeout) {
	return {
		link : function($scope, $element) {
//			$($element).mCustomScrollbar("update");
			$timeout(function(){
				$element.mCustomScrollbar({theme:"light"});
			}, 3000);
		}
	};
});

//app.directive('ngCheckLog',function($timeout) {
//	return {
//		link : function checkLog($scope){
//			alert("!!!!!!");
//			$http({
//				       url: '/checkLog',
//				       method: "POST"
//			       }).success(function(data, status, headers, config) {
//	                  if(data.success){
//		                  $scope.user=data.obj;
//		                  $scope.notlogin=false;
//		                  $scope.loginUsername='';
//		                  $scope.loginPassword='';
//		                  $scope.loginsuccess=true;
//		                  console.log("最初时Session存在用户信息:",data.obj);
//	                  }else{
//		                  console.log("最初时Session不存在用户信息");
//	                  }
//                  }).error(function(data, status, headers, config) {
//                           alert("服务器发生错误！");
//                   });
//		}
//
//	};
//});
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

