/**
 * Created by Administrator on 14-7-8.
 */

var app = angular.module('app');
app.controller('formCtrl', ['$scope', '$location',function formCtrl($scope, $location) {
    if(typeof $scope.attr == 'undefined') {
        $location.url('/');
        return;
    }
    //	更改表单标题
    $scope.changeFormTitle=function changeFormTitle(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeFormTitle',
            'attr':{'formTitle':$scope.formTitleInput}
        }
        sendMessage_funcdirective(data);
    }
    //  提交按钮+1操作
    $scope.addsubmit=function addsubmit(){
        var data = {'seq':$scope.seq,'directive':'addsubmit','attr':{'formItemNo':$scope.formItemNoSelected}}
        sendMessage_funcdirective(data);
    }
    //  单选钮+1操作
    $scope.addradio=function addradio(){
        var data = {'seq':$scope.seq,'directive':'addradio','attr':{'formItemNo':$scope.formItemNoSelected}}
        sendMessage_funcdirective(data);
    }

    //  多选钮+1操作
    $scope.addcheckbox=function addcheckbox(){
        var data = {'seq':$scope.seq,'directive':'addcheckbox','attr':{'formItemNo':$scope.formItemNoSelected}}
        sendMessage_funcdirective(data);
    }

    //  文本框+1操作
    $scope.addtext=function addtext(){
        var data = {'seq':$scope.seq,'directive':'addtext','attr':{'formItemNo':$scope.formItemNoSelected}}
        sendMessage_funcdirective(data);
    }

    //  文本域+1操作
    $scope.addtextarea=function addtextarea(){
        var data = {'seq':$scope.seq,'directive':'addtextarea','attr':{'formItemNo':$scope.formItemNoSelected}}
        sendMessage_funcdirective(data);
    }

    //  密码框+1操作
    $scope.addpassword=function addpassword(){
        var data = {'seq':$scope.seq,'directive':'addpassword','attr':{'formItemNo':$scope.formItemNoSelected}}
        sendMessage_funcdirective(data);
    }

    //  换行操作
    $scope.addbr=function addbr(){
        var data = {'seq':$scope.seq,'directive':'addbr','attr':{'formItemNo':$scope.formItemNoSelected}}
        sendMessage_funcdirective(data);
    }

    //  删除操作
    $scope.cutformitem=function cutformitem(){
        var data = {'seq':$scope.seq,'directive':'cutformitem','attr':{'formItemNo':$scope.formItemNoSelected}}
        sendMessage_funcdirective(data);
    }

    //	更改当前正操作的是第几个表单项
    $scope.changeFormItemNo=function changeFormItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeFormItemNo',
            'attr':{'formItemNo':$scope.formItemNoSelected}
        }
        sendMessage_funcdirective(data);
    }

    //	更改当前正操作表单项的说明文字
    $scope.changeFormItemContent=function changeFormItemContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeFormItemContent',
            'attr':{'formItemNo':$scope.formItemNoSelected,'formItemContent':$scope.formItemContentInput}
        }
        sendMessage_funcdirective(data);
    }

    //	更改当前正操作表单项的值
    $scope.changeFormItemValue=function changeFormItemValue(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeFormItemValue',
            'attr':{'formItemNo':$scope.formItemNoSelected,'formItemValue':$scope.formItemValueInput}
        }
        sendMessage_funcdirective(data);
    }


    //	更改当前正操作表单项名字
    $scope.changeFormItemName=function changeFormItemName(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeFormItemName',
            'attr':{'formItemNo':$scope.formItemNoSelected,'formItemName':$scope.formItemNameInput}
        }
        sendMessage_funcdirective(data);
    }
    $scope.$watch('attr', function() {
        //		第n个列表项
        $scope.formItemNo=[];
        for(var i=1;i<=$scope.attr.formItemNoSum;i++){
            $scope.formItemNo.push(i);
        }
        //      表单项标题
        $scope.formTitleInput = $scope.attr.formTitle;
        //      选中的表单项
        $scope.formItemNoSelected = $scope.attr.formItemNo;
        //		当前表单组件说明文字内容
        $scope.formItemContentInput=$scope.attr.formItemContent;
        //		当前表单组件value
        $scope.formItemValueInput=$scope.attr.formItemValue;
        //		当前表单组件name
        $scope.formItemNameInput=$scope.attr.formItemName;
    },true);

    //  界面分组的文字
    $scope.formTitle = '表单项设置';
}]);
