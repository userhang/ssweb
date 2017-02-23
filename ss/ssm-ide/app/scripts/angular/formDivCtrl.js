/**
 * Created by fd on 2015/11/11.
 */

var app = angular.module('app');
app.controller('formDivCtrl', ['$scope', '$location',function formDivCtrl($scope, $location) {
    if(typeof $scope.attr == 'undefined') {
        $location.url('/');
        return;
    }

    //搜索框个数+1操作
    $scope.addSearchInput=function addSearchInput(){
        var data = {'seq':$scope.seq,'directive':'addSearchInput'}
        sendMessage_funcdirective(data);
    };

    //搜索框个数-1操作
    $scope.cutSearchInput=function cutSearchInput(){
        var data = {'seq':$scope.seq,'directive':'cutSearchInput'}
        sendMessage_funcdirective(data);
    };

    //文本框个数+1
    $scope.addTextInput=function addTextInput(){
        var data = {'seq':$scope.seq,'directive':'addTextInput'}
        sendMessage_funcdirective(data);
    };

    //文本框个数-1
    $scope.cutTextInput=function cutTextInput(){
        var data = {'seq':$scope.seq,'directive':'cutTextInput'}
        sendMessage_funcdirective(data);
    };

    //密码框个数+1
    $scope.addPasswordInput=function addPasswordInput(){
        var data = {'seq':$scope.seq,'directive':'addPasswordInput'}
        sendMessage_funcdirective(data);
    };

    //密码框个数-1
    $scope.cutPasswordInput=function cutPasswordInput(){
        var data = {'seq':$scope.seq,'directive':'cutPasswordInput'}
        sendMessage_funcdirective(data);
    };

    //单选集个数+1
    $scope.addRadioDivInput=function addRadioDivInput(){
        var data = {'seq':$scope.seq,'directive':'addRadioDivInput'}
        sendMessage_funcdirective(data);
    };

    //单选集个数-1
    $scope.cutRadioDivInput=function cutRadioDivInput(){
        var data = {'seq':$scope.seq,'directive':'cutRadioDivInput'}
        sendMessage_funcdirective(data);
    };

    //复选集个数+1
    $scope.addCheckBoxDivInput=function addCheckBoxDivInput(){
        var data = {'seq':$scope.seq,'directive':'addCheckBoxDivInput'}
        sendMessage_funcdirective(data);
    };

    //复选集个数-1
    $scope.cutCheckBoxDivInput=function cutCheckBoxDivInput(){
        var data = {'seq':$scope.seq,'directive':'cutCheckBoxDivInput'}
        sendMessage_funcdirective(data);
    };

    //修改表单宽度 changeFormDivWidth
    $scope.changeFormDivWidth=function changeFormDivWidth(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeFormDivWidth',
            'attr':{'formDivWidth':$scope.formDivWidthInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改method
    $scope.changeFormDivMethod=function changeFormDivMethod(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeFormDivMethod',
            'attr':{'formDivMethod':$scope.formDivMethodSelected}
        };
        sendMessage_funcdirective(data);
    };

    //修改action
    $scope.changeFormDivAction=function changeFormDivAction(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeFormDivAction',
            'attr':{'formDivAction':$scope.formDivActionInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改文本字体
    $scope.changeComponentFontFamily=function changeComponentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeFormDivShowContentFontFamily',
            'attr':{'formDivContentFontFamily':$scope.formDivContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };

    //修改背景颜色 changeFormDivBgColor
    $scope.changeFormDivBgColor=function changeFormDivBgColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeFormDivBgColor',
            'attr':{'formDivBgColor':$scope.formDivBgColorInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改选择的是第几个搜索框 changeSearchInputItemNo
    $scope.changeSearchInputItemNo=function changeSearchInputItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeSearchInputItemNo',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected
            }
        };
        sendMessage_funcdirective(data);
    };

    //修改选择的是第几个文本框 changeTextInputItemNo
    $scope.changeTextInputItemNo=function changeTextInputItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTextInputItemNo',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected
            }
        };
        sendMessage_funcdirective(data);
    };

    //修改选择的是第几个密码框 changePasswordInputItemNo
    $scope.changePasswordInputItemNo=function changePasswordInputItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePasswordInputItemNo',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected
            }
        };
        sendMessage_funcdirective(data);
    };

    //修改选择的是第几个单选集 changeRadioDivItemNo
    $scope.changeRadioDivItemNo=function changeRadioDivItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeRadioDivItemNo',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'checkBoxNo':$scope.checkBoxNoSelected
            }
        };
        sendMessage_funcdirective(data);
    };

    //修改选择的是第几个复选集 changeCheckBoxDivItemNo
    $scope.changeCheckBoxDivItemNo=function changeCheckBoxDivItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeCheckBoxDivItemNo',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected
            }
        };
        sendMessage_funcdirective(data);
    };

    //搜索框是否有标题 changeSearchInputHasTitle
    $scope.changeSearchInputHasTitle=function changeSearchInputHasTitle(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeSearchInputHasTitle',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'searchInputHasTitle':$scope.searchInputHasTitleChecked}
        };
        sendMessage_funcdirective(data);
    };

    //文本框是否有标题 changeTextInputHasTitle
    $scope.changeTextInputHasTitle=function changeTextInputHasTitle(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTextInputHasTitle',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'textInputHasTitle':$scope.textInputHasTitleChecked
            }
        };
        sendMessage_funcdirective(data);
    };

    //密码框是否有标题 changePasswordInputHasTitle
    $scope.changePasswordInputHasTitle=function changePasswordInputHasTitle(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePasswordInputHasTitle',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'passwordInputHasTitle':$scope.passwordInputHasTitleChecked
            }
        };
        sendMessage_funcdirective(data);
    };

    //单选集是否有标题 changeRadioDivHasTitle
    $scope.changeRadioDivHasTitle=function changeRadioDivHasTitle(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeRadioDivHasTitle',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'radioDivHasTitle':$scope.radioDivHasTitleChecked
            }
        };
        sendMessage_funcdirective(data);
    };

    //复选集是否有标题 changeCheckBoxDivHasTitle
    $scope.changeCheckBoxDivHasTitle=function changeCheckBoxDivHasTitle(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeCheckBoxDivHasTitle',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'checkBoxDivHasTitle':$scope.checkBoxDivHasTitleChecked
            }
        };
        sendMessage_funcdirective(data);
    };

    //搜索框标题内容 changeSearchInputTitleContent
    $scope.changeSearchInputTitleContent=function changeSearchInputTitleContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeSearchInputTitleContent',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'searchInputTitleContent':$scope.searchInputTitleContentInput
            }
        };
        sendMessage_funcdirective(data);
    };

    //文本框标题内容 changeTextInputTitleContent
    $scope.changeTextInputTitleContent=function changeTextInputTitleContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTextInputTitleContent',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'textInputTitleContent':$scope.textInputTitleContentInput
            }
        };
        sendMessage_funcdirective(data);
    };

    //密码框标题内容 changePasswordInputTitleContent
    $scope.changePasswordInputTitleContent=function changePasswordInputTitleContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePasswordInputTitleContent',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'passwordInputTitleContent':$scope.passwordInputTitleContentInput
            }
        };
        sendMessage_funcdirective(data);
    };

    //单选集标题内容 changeRadioDivTitleContent
    $scope.changeRadioDivTitleContent=function changeRadioDivTitleContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeRadioDivTitleContent',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'radioDivTitleContent':$scope.radioDivTitleContentInput
            }
        };
        sendMessage_funcdirective(data);
    };

    //复选集标题内容 changeCheckBoxDivTitleContent
    $scope.changeCheckBoxDivTitleContent=function changeCheckBoxDivTitleContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeCheckBoxDivTitleContent',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'checkBoxDivTitleContent':$scope.checkBoxDivTitleContentInput
            }
        };
        sendMessage_funcdirective(data);
    };

    //搜索框按钮内容 changeSearchInputButtonTitleContent
    $scope.changeSearchInputButtonContent=function changeSearchInputButtonContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeSearchInputButtonContent',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'searchInputButtonContent':$scope.searchInputButtonContentInput
            }
        };
        sendMessage_funcdirective(data);
    };

    //搜索框placeholder changeSearchInputPlaceholderContent
    $scope.changeSearchInputPlaceholderContent=function changeSearchInputPlaceholderContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeSearchInputPlaceholderContent',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'searchInputPlaceholderContent':$scope.searchInputPlaceholderContentInput
            }
        };
        sendMessage_funcdirective(data);
    };

    //文本框Placeholder changeTextInputPlaceholderContent
    $scope.changeTextInputPlaceholderContent=function changeTextInputPlaceholderContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTextInputPlaceholderContent',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'textInputPlaceholderContent':$scope.textInputPlaceholderContentInput
            }
        };
        sendMessage_funcdirective(data);
    };

    //密码框Placeholder changePasswordInputPlaceholderContent
    $scope.changePasswordInputPlaceholderContent=function changePasswordInputPlaceholderContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePasswordInputPlaceholderContent',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'passwordInputPlaceholderContent':$scope.passwordInputPlaceholderContentInput
            }
        };
        sendMessage_funcdirective(data);
    };

    //单选项+1 addRadioInput
    $scope.addRadioInput=function addRadioInput(){
        var data = {
            'seq':$scope.seq,
            'directive':'addRadioInput',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected
            }
        };
        sendMessage_funcdirective(data);
    };

    //单选项-1 cutRadioInput
    $scope.cutRadioInput=function cutRadioInput(){
        var data = {
            'seq':$scope.seq,
            'directive':'cutRadioInput',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected
            }
        };
        sendMessage_funcdirective(data);
    };

    //复选项+1 addCheckBoxInput
    $scope.addCheckBoxInput=function addCheckBoxInput(){
        var data = {
            'seq':$scope.seq,
            'directive':'addCheckBoxInput',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected
            }
        };
        sendMessage_funcdirective(data);
    };

    //复选项-1 cutCheckBoxInput
    $scope.cutCheckBoxInput=function cutCheckBoxInput(){
        var data = {
            'seq':$scope.seq,
            'directive':'cutCheckBoxInput',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected
            }
        };
        sendMessage_funcdirective(data);
    };

    //修改选择的是第几个单选项 changeRadioItemNo
    $scope.changeRadioItemNo=function changeRadioItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeRadioItemNo',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected
            }
        };
        sendMessage_funcdirective(data);
    };

    //修改选择的是第几个复选项 changeCheckBoxItemNo
    $scope.changeCheckBoxItemNo=function changeCheckBoxItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeCheckBoxItemNo',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected
            }
        };
        sendMessage_funcdirective(data);
    };

    //修改搜索框name changeSearchInputNameContent
    $scope.changeSearchInputNameContent=function changeSearchInputNameContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeSearchInputNameContent',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'searchInputNameContent':$scope.searchInputNameContentInput
            }
        };
        sendMessage_funcdirective(data);
    };

    //修改文本框name changeTextInputNameContent
    $scope.changeTextInputNameContent=function changeTextInputNameContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTextInputNameContent',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'textInputNameContent':$scope.textInputNameContentInput
            }
        };
        sendMessage_funcdirective(data);
    };

    //修改密码框name changePasswordInputNameContent
    $scope.changePasswordInputNameContent=function changePasswordInputNameContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePasswordInputNameContent',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'passwordInputNameContent':$scope.passwordInputNameContentInput
            }
        };
        sendMessage_funcdirective(data);
    };

    //修改单选集的name changeRadioDivNameContent
    $scope.changeRadioDivNameContent=function changeRadioDivNameContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeRadioDivNameContent',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'radioDivNameContent':$scope.radioDivNameContentInput
            }
        };
        sendMessage_funcdirective(data);
    };

    //修改复选集name changeCheckBoxDivNameContent
    $scope.changeCheckBoxDivNameContent=function changeCheckBoxDivNameContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeCheckBoxDivNameContent',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'checkBoxDivNameContent':$scope.checkBoxDivNameContentInput
            }
        };
        sendMessage_funcdirective(data);
    };

    //修改单选项value changeRadioValue
    $scope.changeRadioValue=function changeRadioValue(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeRadioValue',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'radioValue':$scope.radioValueInput
            }
        };
        sendMessage_funcdirective(data);
    };

    //修改复选项value changeCheckBoxValue
    $scope.changeCheckBoxValue=function changeCheckBoxValue(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeCheckBoxValue',
            'attr':{
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected,

                'checkBoxValue':$scope.checkBoxValueInput
            }
        };
        sendMessage_funcdirective(data);
    };

    $scope.isShow = function isShow(flag,type){
        if(type == 'searchInput'){
            var matchingText = $scope.seq + 'searchInputEventSelect' + $scope.searchInputNoSelected;
            if(flag.indexOf(matchingText) == 0){
                return true;
            }else{
                return false;
            }
        }else if(type == 'searchInputButton'){
            var matchingText = $scope.seq + 'searchInputButtonEventSelect' + $scope.searchInputNoSelected;
            if(flag.indexOf(matchingText) == 0){
                return true;
            }else{
                return false;
            }
        }else if(type == 'textInput'){
            var matchingText = $scope.seq + 'textInputEventSelect' + $scope.textInputNoSelected;
            if(flag.indexOf(matchingText) == 0){
                return true;
            }else{
                return false;
            }
        }else if(type == 'passwordInput'){
            var matchingText = $scope.seq + 'passwordInputEventSelect' + $scope.passwordInputNoSelected;
            if(flag.indexOf(matchingText) == 0){
                return true;
            }else{
                return false;
            }
        }
    }


    //新增搜索框“查找”按钮js事件绑定
    $scope.addEvent=function addEvent(type){
        var initJs="";
        var tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{
                    //集合个数
                    'searchInputNo':$scope.searchInputNoSelected,
                    'textInputNo':$scope.textInputNoSelected,
                    'passwordInputNo':$scope.passwordInputNoSelected,
                    'radioDivNo':$scope.radioDivNoSelected,
                    'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                    //子节点
                    'radioNo':$scope.radioNoSelected,
                    'checkBoxNo':$scope.checkBoxNoSelected

//                    'searchInputButtonContent':$scope.searchInputButtonContentInput
                },
                'funcContent':"",
                'flag':""
            };
//        'funcType':$scope.searchInputButtonEventSelect,
        if(type == 'searchInputButtonEventSelect') {
            //在这里写需要绑定的地方 $scope.searchInputNoSelected
            //搜索框按钮
            tmpeventdata.funcType = $scope.searchInputButtonEventSelect;
            tmpeventdata.flag = $scope.seq + 'searchInputButtonEventSelect' + $scope.searchInputNoSelected + $scope.searchInputButtonEventSelect.val;
        }else if(type == 'searchInputEventSelect'){
            //搜索框
            tmpeventdata.funcType = $scope.searchInputEventSelect;
            tmpeventdata.flag = $scope.seq + 'searchInputEventSelect' + $scope.searchInputNoSelected + $scope.searchInputEventSelect.val;
        }else if(type == 'textInputEventSelect'){
            //文本框
            tmpeventdata.funcType = $scope.textInputEventSelect;
            tmpeventdata.flag = $scope.seq + 'textInputEventSelect' + $scope.textInputNoSelected + $scope.textInputEventSelect.val;
        }else if(type == 'passwordInputEventSelect'){
            //密码框
            tmpeventdata.funcType = $scope.passwordInputEventSelect;
            tmpeventdata.flag = $scope.seq + 'passwordInputEventSelect' + $scope.passwordInputNoSelected + $scope.passwordInputEventSelect.val;
        }

        //这里不能通过funcType来选定事件，而应该通过关键字来选定

        //从事件列表中获取事件内容通过事件列表和事件数据（从参数一种获取参数二对应的事件数据）
        eventData=eventDataHandle.getEventContentFromEventlistViaFlag($scope.elemEventList,tmpeventdata);
        //如果不为空，则意味着之前是有该事件的。
        if(eventData.funcContent!=""){
            initJs=eventData.funcContent;
        }else{
            //如果为空，则是新建的
            //为不同事件绑定写设置
            //这里是确定选择的是什么input
            if(type == 'searchInputButtonEventSelect') {
                //在这里写需要绑定的地方 $scope.searchInputNoSelected
                //搜索框按钮
                var num = $scope.searchInputNoSelected -1;
                initJs = "$('[seq=\"" + eventData.seq + "\"]').find('.formDivSearchDiv').eq("+num+").find('button')";
            }else if(type == 'searchInputEventSelect'){
                //搜索框
                var num = $scope.searchInputNoSelected -1;
                initJs = "$('[seq=\"" + eventData.seq + "\"]').find('.formDivSearchDiv').eq("+num+").find('input')";
            }else if(type == 'textInputEventSelect'){
                //文本框
                var num = $scope.textInputNoSelected -1;
                initJs = "$('[seq=\"" + eventData.seq + "\"]').find('.formDivTextDiv').eq("+num+").find('input')";
            }else if(type == 'passwordInputEventSelect'){
                var num = $scope.passwordInputNoSelected -1;
                initJs = "$('[seq=\"" + eventData.seq + "\"]').find('.formDivPasswordDiv').eq("+num+").find('input')";
            }


            //这里确定选择的是什么事件（在事件选项中选择的）
            if(eventData.funcType.name=="popoverright"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'right'};\r" +
                    "var p=ssM.popOver(setting);\r"+
                    "p.setContent('这是提示箭头朝右的浮动提示框');\r});";
                //把代码初始化到编辑器中
                editor.setValue(initJs);
                //呼出编辑器
                $('#editEvent').modal();
            }
            else if(eventData.funcType.name=="popovertop"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'top'};\r"+
                    "var p=ssM.popOver(setting);\r"+
                    "p.setContent('这是提示箭头朝上的浮动提示框');\r});";
                editor.setValue(initJs);
                $('#editEvent').modal();
            }
            else if(eventData.funcType.name=="popoverleft"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'left'};\r"+
                    "var p=ssM.popOver(setting);\r"+
                    "p.setContent('这是提示箭头朝左的浮动提示框');\r});";
                editor.setValue(initJs);
                $('#editEvent').modal();
            }
            else if(eventData.funcType.name=="popoverbottom"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'bottom'};\r"+
                    "var p=ssM.popOver(setting);\r"+
                    "p.setContent('这是提示箭头朝下的浮动提示框');\r});";
                editor.setValue(initJs);
                $('#editEvent').modal();
            }
            else if(eventData.funcType.name=="hintmsg"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "ssM.hintbox('提示框标题','提示框内容');\r});";
                editor.setValue(initJs);
                $('#editEvent').modal();
            }
            else if(eventData.funcType.name=="progressBox"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "var par = ssM.progressBox('进度条标题','进度条内容信息',true,onClickCal);\r"+
                    "par.update(100);"+
                    "function onClickCal(){ alert('canceled');}"+
                    "\r});";
                editor.setValue(initJs);
                $('#editEvent').modal();
            }
            else if(eventData.funcType.name=="showLoading"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "ssM.loader('show',{disableScreen:false,color:'#04AED9'});\r});";
                editor.setValue(initJs);
                $('#editEvent').modal();
            }
            else if(eventData.funcType.name=="hideLoading"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "ssM.loader('hide');\r});";
                editor.setValue(initJs);
                $('#editEvent').modal();
            }
            else if(eventData.funcType.name=="popmsg"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rssM.popwin('消息内容');\r});";
                editor.setValue(initJs);
                $('#editEvent').modal();
            }
            else if(eventData.funcType.name=="mdown"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rx1 = event.clientX;\r\r});";
                editor.setValue(initJs);
                $('#editEvent').modal();
            }

            else if(eventData.funcType.name=="mup"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rx2 = event.clientX;"+
                    "if(x2-x1>50){"+
                    "UserswipeRDiv();"+
                    "}"+
                    "if(x1-x2>50){"+
                    "UserswipeLDiv();"+
                    "}\r\r});";
                editor.setValue(initJs);
                $('#editEvent').modal();
            }
            else{
                initJs+=".on('"+eventData.funcType.val+"',function(){\r\r});";
                editor.setValue(initJs);
                $('#editEvent').modal();
            }
        }
    };

    //编辑js事件绑定
    $scope.editEvent=function editEvent(elemEvent){
        console.log("elemEvent  :",elemEvent);
        var initJs="",
            eventData={
                'directive':'addeventbind',
                'eventid':elemEvent.eventid,
                'seq':$scope.seq,
//                'childattr':elemEvent.childattr,
                'childattr': {
                    //集合个数
                    'searchInputNo':$scope.searchInputNoSelected,
                    'textInputNo':$scope.textInputNoSelected,
                    'passwordInputNo':$scope.passwordInputNoSelected,
                    'radioDivNo':$scope.radioDivNoSelected,
                    'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                    //子节点
                    'radioNo':$scope.radioNoSelected,
                    'checkBoxNo':$scope.checkBoxNoSelected
                },
                'funcType':elemEvent.funcType,
                'funcContent':elemEvent.funcContent
            };
        console.log('=============================编辑事件测试：');
        for(var i in eventData.childattr){
            console.log('【'+i+'】'+eventData.childattr[i]);
        }
        initJs=eventData.funcContent;
        editor.setValue(initJs);
        $('#editEvent').modal();
    };

    //删除js事件绑定
    $scope.delEvent=function delEvent(elemEvent){
        eventData={
            'directive':'deleventbind',
            'eventid':elemEvent.eventid,
            'seq':$scope.seq,
//            'childattr':elemEvent.childattr,
            'childattr': {
                //集合个数
                'searchInputNo':$scope.searchInputNoSelected,
                'textInputNo':$scope.textInputNoSelected,
                'passwordInputNo':$scope.passwordInputNoSelected,
                'radioDivNo':$scope.radioDivNoSelected,
                'checkBoxDivNo':$scope.checkBoxDivNoSelected,

                //子节点
                'radioNo':$scope.radioNoSelected,
                'checkBoxNo':$scope.checkBoxNoSelected
            },
            'funcType':elemEvent.funcType,
            'funcContent':elemEvent.funcContent
        };
        sendMessage_funcdirective(eventData);
    };


    //method数据
    $scope.formDivMethod = [
        {name:'get',val:'get'},
        {name:'post',val:'post'},
        {name:'无',val:'null'}
    ];

    //文本字体数据
    $scope.formDivContentFontFamily = [
        {name:'默认',val:'defaultFontFamily'},
        {name:'黑体',val:'HeiTi'},
        {name:'宋体',val:'SongTi'},
        {name:'Arial',val:'Arial'},
        {name:'Arial Black',val:'ArialBlack'},
        {name:'Arial Narrow',val:'ArialNarrow'},
        {name:'Verdana',val:'Verdana'},
        {name:'Georgia',val:'Georgia'},
        {name:'Times New Roman',val:'TimesNewRoman'},
        {name:'Trebuchet MS',val:'TrebuchetMS'},
        {name:'Courier New',val:'CourierNew'},
        {name:'Impact',val:'Impact'},
        {name:'Comic Sans MS',val:'ComicSansMS'},
        {name:'Tahoma',val:'Tahoma'},
        {name:'Courier',val:'Courier'},
        {name:'Lucida Sans Unicode',val:'LucidaSansUnicode'},
        {name:'Symbol',val:'Symbol'},
        {name:'Palatino Linotype',val:'PalatinoLinotype'},
        {name:'Lucida Console',val:'LucidaConsole'},
        {name:'Garamond',val:'Garamond'},
        {name:'MS Sans Serif',val:'MSSansSerif'},
        {name:'MS Serif',val:'MSSerif'},
        {name:'Bookman Old Style',val:'BookmanOldStyle'}
    ];

    //事件
    $scope.eventList = [
        {name:'normaltap(单击事件)',val:'tap'},
        {name:'normaldoubletap(双击事件)',val:'doubleTap'},
        {name:'normallongtap(长按事件)',val:'longTap'},
        {name:'normalswipeleft(左划事件)',val:'swipeLeft'},
        {name:'normalswiperight(右划事件)',val:'swipeRight'},
        {name:'normalswipeup(上划事件)',val:'swipeUp'},
        {name:'normalswipedown(下划事件)',val:'swipeDown'},
        {name:'doubleclick(双击事件)',val:'dblclick'},
        {name:'popovertop(上箭头弹出框)',val:'tap'},
        {name:'popoverleft(左箭头弹出框)',val:'tap'},
        {name:'popoverright(右箭头弹出框)',val:'tap'},
        {name:'popoverbottom(下箭头弹出框)',val:'tap'},
        {name:'mousedown(鼠标按下)',val:'mousedown'},
        {name:'mouseup(鼠标松开)',val:'mouseup'},
        {name:'hintmsg(点击触发提示框)',val:'click'},
        {name:'showLoading(点击触发显示加载环)',val:'click'},
        {name:'hideLoading(点击触发隐藏加载环)',val:'click'},
        {name:'progressBox(点击触发进度条)',val:'click'}
    ];

    //默认事件选择为第一个
    $scope.searchInputButtonEventSelect = $scope.eventList[0];
    $scope.searchInputEventSelect = $scope.eventList[0];
    $scope.textInputEventSelect = $scope.eventList[0];
    $scope.passwordInputEventSelect = $scope.eventList[0];


    //监听
    $scope.$watch('attr', function() {
        //表单宽度
        $scope.formDivWidthInput = $scope.attr.formDivWidth;
        //method
        if($scope.attr.formDivMethod.val != undefined) {
            for (var a = 0; a < $scope.formDivMethod.length; a++) {
                if ($scope.attr.formDivMethod.val == $scope.formDivMethod[a].val) {
                    $scope.formDivMethodSelected = $scope.formDivMethod[a];  //当前的列表类型 iframe传来的值
                    break;
                }
            }
        }
        //action
        $scope.formDivActionInput = $scope.attr.formDivAction;
        //搜索框个数
        $scope.searchInputNo=[];
        for(var i=1;i<=$scope.attr.searchInputNum;i++){
            $scope.searchInputNo.push(i);
        }
        //当前选的是第N个搜索框
        $scope.searchInputNoSelected=$scope.attr.searchInputNo;

        //文本框个数
        $scope.textInputNo=[];
        for(var j=1;j<=$scope.attr.textInputNum;j++){
            $scope.textInputNo.push(j);
        }
        //当前选的是第N个文本框
        $scope.textInputNoSelected=$scope.attr.textInputNo;

        //密码框个数
        $scope.passwordInputNo=[];
        for(var k=1;k<=$scope.attr.passwordInputNum;k++){
            $scope.passwordInputNo.push(k);
        }
        //当前选的是第N个密码框
        $scope.passwordInputNoSelected=$scope.attr.passwordInputNo;

        //单选集个数
        $scope.radioDivNo=[];
        for(var l=1;l<=$scope.attr.radioDivNum;l++){
            $scope.radioDivNo.push(l);
        }
        //当前选的是第N个单选集
        $scope.radioDivNoSelected=$scope.attr.radioDivNo;

        //复选集个数
        $scope.checkBoxDivNo=[];
        for(var m=1;m<=$scope.attr.checkBoxDivNum;m++){
            $scope.checkBoxDivNo.push(m);
        }
        //当前选的是第N个单选集
        $scope.checkBoxDivNoSelected=$scope.attr.checkBoxDivNo;

        //当前搜索框是否有标题
        $scope.searchInputHasTitleChecked=$scope.attr.searchInputHasTitle;
        //当前文本框是否有标题
        $scope.textInputHasTitleChecked=$scope.attr.textInputHasTitle;
        //当前密码框是否有标题
        $scope.passwordInputHasTitleChecked=$scope.attr.passwordInputHasTitle;
        //当前单选集是否有标题
        $scope.radioDivHasTitleChecked=$scope.attr.radioDivHasTitle;
        //当前复选集是否有标题
        $scope.checkBoxDivHasTitleChecked=$scope.attr.checkBoxDivHasTitle;
        //搜索框标题内容
        $scope.searchInputTitleContentInput=$scope.attr.searchInputTitleContent;
        //文本框标题内容
        $scope.textInputTitleContentInput=$scope.attr.textInputTitleContent;
        //密码框标题内容
        $scope.passwordInputTitleContentInput=$scope.attr.passwordInputTitleContent;
        //单选集标题内容
        $scope.radioDivTitleContentInput=$scope.attr.radioDivTitleContent;
        //复选集标题内容
        $scope.checkBoxDivTitleContentInput=$scope.attr.checkBoxDivTitleContent;
        //搜索框按钮内容
        $scope.searchInputButtonContentInput=$scope.attr.searchInputButtonContent;
        //搜索框Placeholder
        $scope.searchInputPlaceholderContentInput=$scope.attr.searchInputPlaceholderContent;
        //文本框Placeholder
        $scope.textInputPlaceholderContentInput=$scope.attr.textInputPlaceholderContent;
        //密码框Placeholder
        $scope.passwordInputPlaceholderContentInput=$scope.attr.passwordInputPlaceholderContent;
        //当前文本字体
        if($scope.attr.formDivContentFontFamily != null){
            for(var n = 0; n < $scope.formDivContentFontFamily.length; n++){
                if($scope.attr.formDivContentFontFamily.val == $scope.formDivContentFontFamily[n].val){
                    $scope.formDivContentFontFamilySelected = $scope.formDivContentFontFamily[n];
                }
            }
        }
        //背景颜色
        $scope.formDivBgColorInput=$scope.attr.formDivBgColor;
        //单选项个数
        $scope.radioNo=[];
        for(var o=1;o<=$scope.attr.radioNum;o++){
            $scope.radioNo.push(o);
        }
        //当前选的是第N个单选项
        $scope.radioNoSelected=$scope.attr.radioNo;
        //复选项个数
        $scope.checkBoxNo=[];
        for(var p=1;p<=$scope.attr.checkBoxNum;p++){
            $scope.checkBoxNo.push(p);
        }
        //当前选的是第N个复选项
        $scope.checkBoxNoSelected=$scope.attr.checkBoxNo;
        //搜索框name
        $scope.searchInputNameContentInput=$scope.attr.searchInputNameContent;
        //文本框name
        $scope.textInputNameContentInput=$scope.attr.textInputNameContent;
        //密码框name
        $scope.passwordInputNameContentInput=$scope.attr.passwordInputNameContent;
        //单选集name
        $scope.radioDivNameContentInput=$scope.attr.radioDivNameContent;
        //复选集name
        $scope.checkBoxDivNameContentInput=$scope.attr.checkBoxDivNameContent;
        //单选集value
        $scope.radioValueInput=$scope.attr.radioValue;
        //复选集value
        $scope.checkBoxValueInput=$scope.attr.checkBoxValue;

        //搜索框事件绑定标题
        $scope.formDivTitleSearchInputEventBind = '第'+ $scope.searchInputNoSelected +'个搜索框事件绑定';
        //搜索框事件编辑
        $scope.formDivTitleSearchInputEventEdit = '第'+ $scope.searchInputNoSelected +'个搜索框事件编辑';
        //搜索框按钮事件绑定标题
        $scope.formDivTitleSearchInputButtonEventBind = '第'+ $scope.searchInputNoSelected +'个搜索框按钮事件绑定';
        //搜索框按钮事件编辑
        $scope.formDivTitleSearchInputButtonEventEdit = '第'+ $scope.searchInputNoSelected +'个搜索框按钮事件编辑';
        //文本框事件绑定标题
        $scope.formDivTitleTextInputEventBind = '第'+ $scope.textInputNoSelected +'个文本框事件绑定';
        //文本框事件编辑
        $scope.formDivTitleTextInputEventEdit = '第'+ $scope.textInputNoSelected +'个文本框事件编辑';
        //密码框事件绑定标题
        $scope.formDivTitlePasswordInputEventBind = '第'+ $scope.passwordInputNoSelected +'个密码框事件绑定';
        //密码框事件编辑
        $scope.formDivTitlePasswordInputEventEdit = '第'+ $scope.passwordInputNoSelected +'个密码框事件编辑';


    },true);

    //  界面分组的文字
    $scope.formDivTitleAll = '表单项总设置';
    //搜索框工具栏标题
    $scope.formDivTitleSearchInput = '搜索框设置';
    //文本框工具栏标题
    $scope.formDivTitleTextInput = '文本框设置';
    //密码框工具栏标题
    $scope.formDivTitlePasswordInput = '密码框设置';
    //单选集工具栏标题
    $scope.formDivTitleRadioInput = '单选集设置';
    //复选集工具栏标题
    $scope.formDivTitleCheckBoxInput = '复选集设置';

}]);

