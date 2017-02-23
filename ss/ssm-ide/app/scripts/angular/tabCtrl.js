/**
 * Created by Jane Maple on 14-5-17.
 */
/*********************************************
 * 描述：标签布局（tabview）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('tabCtrl', ['$scope', '$location',function tabCtrl($scope, $location) {
    if(typeof $scope.attr == 'undefined') {
        $location.url('/');
        return;
    }
    //标签个数+1操作
    $scope.addtabli=function addtabli(){
        var data = {'seq':$scope.seq,'directive':'addtabli',
            'attr':{'tabItemNo':$scope.tabItemNoSelected}};

        var jsdata={
            'directive':'defaultjsbind',
            'objtype':"tabview",
            'defaultjs':"ssM.tab();"
        };
        jsdata = JSON.stringify(jsdata);
        sendMessage_funcdirective(data);
        messenger.targets['mainIframe'].send(jsdata);

    };

    //更改标签圆角操作
    /*$scope.changeIsWrapDivCorner=function changeIsWrapDivCorner(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIsWrapDivCorner',
            'attr':{'isWrapedCorner':$scope.isWrapedCornerChecked}
        };
        sendMessage_funcdirective(data);
    };*/

    //标签个数-1操作
    $scope.cuttabli=function cuttabli(){
        var data = {'seq':$scope.seq,'directive':'cuttabli',
            'attr':{'tabItemNo':$scope.tabItemNoSelected}}
        sendMessage_funcdirective(data);
    };

    //更改当前正操作的是第几个标签
    $scope.changeTabItemNo=function changeTabItemNo(){
     
        var data = {
            'seq':$scope.seq,
            'directive':'changeTabItemNo',
            'attr':{'tabItemNo':$scope.tabItemNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //改变标签标题文字内容
    $scope.changeTabItemContent=function changeTabItemContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTabItemContent',
            'attr':{'tabItemNo':$scope.tabItemNoSelected,'tabItemContent':$scope.tabItemContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //改变标签文字内容
    $scope.changeTabContent=function changeTabContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTabContent',
            'attr':{'tabItemNo':$scope.tabItemNoSelected,'tabContent':$scope.tabContentInput}
        };
        sendMessage_funcdirective(data);
    };
    //监听
    $scope.$watch('attr', function() {
        //第n个标签
        $scope.tabItemNo=[];
        for(var i=1;i<=$scope.attr.tabchildCount;i++){
            $scope.tabItemNo.push(i);
        }

        //列表圆角
        //$scope.isWrapedCornerChecked=$scope.attr.isWrapedCorner;

        //当前标签题目文字内容
        $scope.tabItemContentInput=$scope.attr.tabItemContent;

        //当前标签内容文字内容
        $scope.tabContentInput=$scope.attr.tabContent;

        //当前正操作的第N个标签
        $scope.tabItemNoSelected=$scope.attr.tabItemNo;
    },true);

    //界面分组的文字（第一组）
    $scope.TabTitle = '标签布局设置';

}]);
