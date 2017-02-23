/**
 * Created by suhuifen on 14-5-23.
 */

var app = angular.module('app');
app.controller('gridCtrl', ['$scope', '$location',function gridCtrl($scope, $location) {
    if(typeof $scope.attr == 'undefined') {
        $location.url('/');
        return;
    }

//  网格行数
    $scope.changeGridType=function changeGridType(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeGridType',
            'attr':{'gridType':$scope.gridTypeSelected}
        }
        sendMessage_funcdirective(data);
    }
//  网格行+1操作
    $scope.addgr=function addgr(){
        var data = {'seq':$scope.seq,
            'directive':'addgr',
            'attr':{ 'gridCellHeight':$scope.gridCellHeightInput}}
        sendMessage_funcdirective(data);
    }
//  网格行-1操作
    $scope.cutgr=function cutgr(){
        var data = {'seq':$scope.seq,
            'directive':'cutgr'}
        sendMessage_funcdirective(data);
    }
//  网格列+1操作
    $scope.addgl=function addgl(){
        var data = {'seq':$scope.seq,
            'directive':'addgl',
            'attr':{ 'gridCellHeight':$scope.gridCellHeightInput}}
        sendMessage_funcdirective(data);
    }
//  网格列-1操作
    $scope.cutgl=function cutgl(){
        var data = {'seq':$scope.seq,
            'directive':'cutgl'}
        sendMessage_funcdirective(data);
    }
//  网格+1操作
    $scope.addgc=function addgc(){
        var data = {'seq':$scope.seq,
            'directive':'addgc',
            'attr':{ 'gridCellHeight':$scope.gridCellHeightInput}}
        sendMessage_funcdirective(data);
    }
//  网格-1操作
    $scope.cutgc=function cutgr(){
        var data = {'seq':$scope.seq,
            'directive':'cutgc'}
        sendMessage_funcdirective(data);
    }
//  格子高度
    $scope.changeGridCellHeight=function changeGridCellHeight(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeGridCellHeight',
            'attr':{ 'gridCellHeight':$scope.gridCellHeightInput}
        }
        sendMessage_funcdirective(data);
    }
//  是否有格子框
    $scope.changeHasGridBoder=function changeHasGridBoder(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeHasGridBoder',
            'attr':{ 'hasGridBoder':$scope.hasGridBoderChecked}
        }
        sendMessage_funcdirective(data);
    }
//  界面分组的文字
    $scope.gridTitle = '网格布局设置';

//	列表类型数据
    $scope.gridType = [
        {name:'二列网格',val:'2'},
        {name:'三列网格',val:'3'},
        {name:'四列网格',val:'4'},
        {name:'五列网格',val:'5'}
    ];
    $scope.$watch('attr', function() {

//		网格类型
        for(var  i = 0; i < $scope.gridType.length;  i++)
        {
            if($scope.attr.gridType.val==$scope.gridType[i].val){
                $scope.gridTypeSelected = $scope.gridType[i];  //当前的列表类型 iframe传来的值
                break;
            }
        }
//		是否含有格子框
        $scope.hasGridBoderChecked=$scope.attr.hasGridBoder;
//		格子高度
        $scope.gridCellHeightInput=$scope.attr.gridCellHeight;
    },true);

}]);
