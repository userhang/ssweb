/**
 * Created by fd on 2014/10/14.
 */
/*********************************************
 * 描述：时间组件（timeshow）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('timeshowCtrl', ['$scope', '$location',function timeshowCtrl($scope, $location) {
    if(typeof $scope.attr == 'undefined') {
        $location.url('/');
        return;
    }

    //改变背景颜色
    $scope.changeTimeshowNumColor=function changeTimeshowNumColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTimeshowNumColor',
            'attr':{'FontNumColor':$scope.FontNumColorSelect}
        };
        sendMessage_funcdirective(data);
    };

    //修改高度
    $scope.changeTimeshowHeight=function changeTimeshowHeight(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTimeshowHeight',
            'attr':{'timeshowHeight':$scope.timeshowHeightInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改宽度
    $scope.changeTimeshowWidth=function changeTimeshowWidth(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTimeshowWidth',
            'attr':{'timeshowWidth':$scope.timeshowWidthInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改主题
    $scope.changeTimeshowType=function changeTimeshowType(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTimeshowType',
            'attr':{'timeshowItemNo':$scope.timeshowItemNoSelected,'timeshowType':$scope.timeshowTypeSelected}
        };
        sendMessage_funcdirective(data);
    };

    //背景颜色数据
    $scope.FontNumColor = [
        {name:'白色',val:'white'},
        {name:'绿色',val:'green'},
        {name:'灰色',val:'gray'},
        {name:'红色',val:'red'},
        {name:'蓝色',val:'blue'},
        {name:'黄色',val:'yellow'}
    ];

    //主题类型数据
    $scope.timeshowType = [
        {name:'悬浮',val:'xuanfu'},
        {name:'扁平',val:'keji'}
    ];

    //监听
    $scope.$watch('attr', function() {
        //背景颜色
        for(var i=0;i<$scope.FontNumColor.length;i++){
            if($scope.attr.FontNumColor.val==$scope.FontNumColor[i].val){
                $scope.FontNumColorSelect = $scope.FontNumColor[i];  //当前的列表类型 iframe传来的值
                break;
            }
        }
        //高度
        $scope.timeshowHeightInput=$scope.attr.timeshowHeight;
        //宽度
        $scope.timeshowWidthInput=$scope.attr.timeshowWidth;
        //主题
        for(var i=0;i<$scope.timeshowType.length;i++){
            if($scope.attr.timeshowType.val==$scope.timeshowType[i].val){
                $scope.timeshowTypeSelected = $scope.timeshowType[i];  //当前的列表类型 iframe传来的值
                break;
            }
        }
    },true);



    //界面分组的文字（第一组）
    $scope.timeshowTitle = '颜色设置';
}]);