/**
 * Created by Administrator on 14-12-29.
 */
/**
 * Created by Administrator on 14-12-29.
 */
/**
 * Created by Jane Maple on 14-5-9.
 */
/***********************************************
 * 描述：表单-下拉列表（inputSelect）各种操作封装
 ***********************************************/
var ssM = $.ssm();
(function ($) {
    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取当前下拉列表标题文字内容
      //获取当前id
      $.fn.getinputSelectid = function () {
        var _this=$(this),
            res='';
        
            res = _this.attr("id");

      
        return res;
    };
    $.fn.getInputSelectContent = function () {
        var _this=$(this),
            res='';
        res = _this.find("label").text();
        return res;
    };

    //获取下拉列表外部高度
    $.fn.getInputSelectHeight = function () {
        var _this=$(this),
            res;
        res = _this.height();
        return res;
    };

    //获取下拉列表外部宽度
    $.fn.getInputSelectWidth = function () {
        var _this=$(this),
            res;
        res = _this.width();
        return res;
    };

    //获取下拉列表个数
    $.fn.getSelectChildCount = function () {
        var _this=$(this),
            res;
        res = _this.find("select").children().length;
        return res;
    };

    //获取第n个下拉列表值（value）
    $.fn.getInputSelectValue = function () {
        var _this=$(this),
            res;
        res = _this.val();
        return res;
    };

    //获取第n个下拉列表内容
    $.fn.getInputSelectBoxContent = function () {
        var _this=$(this),
            res;
        res = _this.html();
        return res;
    };

    //获取下拉列表标题文字字体
    $.fn.getInputSelectContentFontFamily = function () {
        var _this=$(this),
            res='';
        res = _this.find("label").css("font-family");
        return res;
    };

    //获取下拉列表文字字体
    $.fn.getInputSelectBoxContentFontFamily = function () {
        var _this=$(this).find("select"),
            res;
        res = _this.css("font-family");
        return res;
    };

    //获取下拉列表select高度
    $.fn.getInputSelectContentHeight = function () {
        var _this=$(this).children("select"),
            res;
        res = _this.height();
        return res;
    };

    //获取下拉列表外部宽度
    $.fn.getInputSelectContentWidth = function () {
        var _this=$(this).children("select"),
            res;
        res = _this.width();
        return res;
    };


    /****************************************/
    /* 各种操作函数
     /****************************************/
    //下拉列表个数+1
    $.fn.addoption = function () {
        var _this=$(this).find("select");
        _this.append(_this.children(':last')[0].outerHTML);
        sendMessage_funcpanelinit($(this));
    };

    //下拉列表个数-1
    $.fn.cutoption = function () {
        var _this=$(this).find("select");
        if(_this.children().length>1){
            _this.children(':last').remove();
        }else{
            alert("仅剩一个下拉框不能减少");
        }
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };

    //修改下拉列表标题内容
    $.fn.changeInputSelectContent = function (inputSelectContent) {
        var _this=$(this),
            content=inputSelectContent;
        _this.find("label").text(content);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };

    //修改下拉列表外部高度
    $.fn.changeInputSelectHeight = function (height) {
        var _this=$(this);
        _this.css("height",height+"px");
        sendMessage_funcpanelinit($(this));
    };

    //修改下拉列表外部宽度
    $.fn.changeInputSelectWidth = function (width) {
        var _this=$(this);
        _this.css("width",width+"px");
        sendMessage_funcpanelinit($(this));
    };

    //修改当前选的是第几个下拉列表
    $.fn.changeSelectItemNo = function (selectItemNo) {
        var _this=$(this);
        var args={
            selectItemNo:selectItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //修改下拉列表文字内容
    $.fn.changeInputSelectBoxContent = function (selectItemNo,inputSelectBoxContent) {
        var _this=$(this).find("option").eq(selectItemNo-1);
        _this.text(inputSelectBoxContent);
        var args={
            selectItemNo:selectItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //修改下拉列表值
    $.fn.changeInputSelectValue = function (selectItemNo,inputSelectValue) {
        var _this=$(this).find("option").eq(selectItemNo-1);
        _this.attr("value",inputSelectValue);
        var args={
            selectItemNo:selectItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //修改下拉列表标题文字字体
   /* $.fn.changeInputSelectContentFontFamily = function (inputSelectContentFontFamily) {
        var _this=$(this),
            fontFamily=inputSelectContentFontFamily;
        _this.find("label").css("font-family", fontFamily);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };*/

    //修改下拉列表文字字体
    /*$.fn.changeInputSelectBoxContentFontFamily = function (inputSelectBoxContentFontFamily) {
        var _this=$(this).find("select");
        _this.css("font-family", inputSelectBoxContentFontFamily);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };*/

    //修改下拉列表select高度
    $.fn.changeInputSelectContentHeight = function (height) {
        var _this=$(this).children("select");
        _this.height(height);
        sendMessage_funcpanelinit($(this));
    };

    //修改下拉列表select宽度
    $.fn.changeInputSelectContentWidth = function (width) {
        var _this=$(this).children("select");
        _this.width(width);
        sendMessage_funcpanelinit($(this));
    };

})(jQuery);
