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
 * 描述：表单-文本域（inputText）各种操作封装
 ***********************************************/
var ssM = $.ssm();
(function ($) {
    /****************************************/
    /* 各种属性get函数
     /****************************************/
        //获取当前id
      $.fn.getinputTextid = function () {
        var _this=$(this),
            res='';
        
            res = _this.attr("id");

      
        return res;
    };
    //获取当前文本域标题文字内容
    $.fn.getInputTextContent = function () {
        var _this=$(this),
            res='';
        res = _this.find("label").text();
        return res;
    };

    //获取文本域标题高度
    $.fn.getInputTextHeight = function () {
        var _this=$(this).find('label'),
            res;
        res = _this.height();
        return res;
    };

    //获取文本域标题宽度
    $.fn.getInputTextWidth = function () {
        var _this=$(this).find('label'),
            res;
        res = _this.width();
        return res;
    };

    //获取文本域标题文字字体
    /*$.fn.getInputTextContentFontFamily = function () {
        var _this=$(this),
            res='';
        res = _this.find("label").css("font-family");
        return res;
    };*/

    //获取文本域文字字体
    /*$.fn.getTextAreaContentFontFamily = function () {
        var _this=$(this),
            res='';
        res = _this.find("input").css("font-family");
        return res;
    };*/

    //获取文本域高度
    $.fn.getInputTextContentHeight = function () {
        var _this=$(this),
            res='';
        res = _this.children("input").height();
        return res;
    };

    //获取文本域宽度
    $.fn.getInputTextContentWidth = function () {
        var _this=$(this),
            res='';
        res = _this.children("input").width();
        return res;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //改变文本域标题文字内容
    $.fn.changeInputTextContent = function (inputTextContent) {
        var _this=$(this),
            content=inputTextContent;
        _this.find("label").text(content);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };

    //修改文本域标题高度
    $.fn.changeInputTextHeight = function (height) {
        var _this=$(this).find('label');
        _this.css("height",height+"px");
        sendMessage_funcpanelinit($(this));
    };

    //修改文本域标题宽度
    $.fn.changeInputTextWidth = function (width) {
        var _this=$(this).find('label');
        _this.css("width",width+"px");
        sendMessage_funcpanelinit($(this));
    };

    //修改文本域标题文字字体
    /*$.fn.changeInputTextContentFontFamily = function (inputTextContentFontFamily) {
        var _this=$(this),
            fontFamily=inputTextContentFontFamily;
        _this.find("label").css("font-family", fontFamily);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };*/

    //修改文本域文字字体
    /*$.fn.changeTextAreaContentFontFamily = function (textAreaContentFontFamily) {
        var _this=$(this),
            fontFamily=textAreaContentFontFamily;
        _this.find("input").css("font-family", fontFamily);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };*/

    //修改文本域input高度
    $.fn.changeInputTextContentHeight = function (height) {
        var _this=$(this).find("input");
        _this.height(height);
        console.log('bbbbbbbbbbbbbbbbbbbbbbb' + height);
        sendMessage_funcpanelinit($(this));
    };

    //修改文本域input宽度
    $.fn.changeInputTextContentWidth = function (width) {
        var _this=$(this).find("input");
        _this.width(width);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };
})(jQuery);
