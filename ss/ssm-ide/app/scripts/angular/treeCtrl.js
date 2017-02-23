/**
 * Created by Jane Maple on 14-5-24.
 */
/**
 * Created by gyj on 14-4-19.
 */
/*********************************************
 * 描述：树形布局（tree）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('treeCtrl', ['$scope', '$location',function treeCtrl($scope, $location) {
    if(typeof $scope.attr == 'undefined') {
        $location.url('/');
        return;
    }
    //树（集合）个数+1操作
    $scope.addtree=function addtree(){
        var data = {'seq':$scope.seq,'directive':'addtree',
            'attr':{'treeNo':$scope.treeNoSelected}};
        var jsdata={
            'directive':'defaultjsbind',
            'objtype':"tree",
            'defaultjs':"ssM.tree();"
        };
        jsdata = JSON.stringify(jsdata);
        sendMessage_funcdirective(data);
        messenger.targets['mainIframe'].send(jsdata);
    };

    //树（集合）个数-1操作
    $scope.cuttree=function cuttree(){
        var data = {'seq':$scope.seq,'directive':'cuttree',
            'attr':{'treeNo':$scope.treeNoSelected}};
        sendMessage_funcdirective(data);
    };

    //列表项（元素）个数+1操作
    $scope.addtreeli=function addtreeli(){
        var data = {'seq':$scope.seq,'directive':'addtreeli',
            'attr':{'treeNo':$scope.treeNoSelected}};
        sendMessage_funcdirective(data);
    };

    //列表项（元素）个数-1操作
    $scope.cuttreeli=function cuttreeli(){
        var data = {'seq':$scope.seq,'directive':'cuttreeli',
            'attr':{'treeItemNo':$scope.treeItemNoSelected}};
        sendMessage_funcdirective(data);
    };


    //更改当前正操作的是第几个树
    $scope.changeTreeNo=function changeTreeNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTreeNo',
            'attr':{'treeNo':$scope.treeNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正操作的是第几个列表项
    $scope.changeTreeItemNo=function changeTreeItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTreeItemNo',
            'attr':{'treeItemNo':$scope.treeItemNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //改变树标题内容
    $scope.changeTreeTitleContent=function changeTreeTitleContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTreeTitleContent',
            'attr':{'treeNo':$scope.treeNoSelected,'treeTitleContent':$scope.treeTitleContentInput}
        };
        sendMessage_funcdirective(data);
    };
    //改变列表项内容
    $scope.changeTreeItemContent=function changeTreeItemContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTreeItemContent',
            'attr':{'treeItemNo':$scope.treeItemNoSelected,'treeItemContent':$scope.treeItemContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //界面分组的文字(第一组)
    $scope.treeTitle1 = '树';

    //界面分组的文字(第二组)
    $scope.treeTitle2 = '列表项';

    //监听
    $scope.$watch('attr', function() {
        //第n个树
        $scope.treeNo=[];
        for(var i=1;i<=$scope.attr.treeCount;i++){
            $scope.treeNo.push(i);
        }

        //当前正操作的是第N个树
        $scope.treeNoSelected=$scope.attr.treeNo;

        //第n个列表项
        $scope.treeItemNo=[];
        for(var j=1;j<=$scope.attr.treeitemCount;j++){
            $scope.treeItemNo.push(j);
        }

        //当前正操作的是第N个列表项
        $scope.treeItemNoSelected=$scope.attr.treeItemNo;

        //当前树标题文字内容
        $scope.treeTitleContentInput=$scope.attr.treeTitleContent;

        //当前列表项文字内容
        $scope.treeItemContentInput=$scope.attr.treeItemContent;
    },true);
}]);
