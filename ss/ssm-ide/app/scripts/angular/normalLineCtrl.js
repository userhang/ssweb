/**
 * Created by Administrator on 14-12-5.
 */
/*********************************************
 * 描述：普通分割线（normalLine）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('normalLineCtrl', ['$scope', '$location',function normalLineCtrl($scope, $location) {
    if(typeof $scope.attr == 'undefined') {
        $location.url('/');
        return;
    }
    //更改分割线宽度
    $scope.changeNormalLineWidth=function changeNormalLineWidth(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeNormalLineWidth',
            'attr':{'normalLineWidth':$scope.normalLineWidthInput}
        };
        sendMessage_funcdirective(data);
    };

    //监听
    $scope.$watch('attr', function() {
        //分割线宽度
        $scope.normalLineWidthInput=$scope.attr.normalLineWidth;

    },true);

    //界面分组的文字（第一组）
    $scope.nparaTitle = '分割线设置';
}]);