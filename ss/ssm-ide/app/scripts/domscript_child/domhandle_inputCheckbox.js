/**
 * Created by Administrator on 14-12-29.
 */
/**
 * Created by Jane Maple on 14-5-9.
 */
/***********************************************
 * 描述：表单-复选框（inputCheckbox）各种操作封装
 ***********************************************/
var ssM = $.ssm();
(function ($) {
    /****************************************/
    /* 各种属性get函数
     /****************************************/
       //获取当前id
      $.fn.getinputCheckboxid = function () {
        var _this=$(this),
            res='';
        
            res = _this.attr("id");

      
        return res;
    };
    //获取复选框标题内容
    $.fn.getInputCheckboxContent = function () {
        var _this=$(this),
            res='';
        res = _this.find("label").text();
        return res;
    };
     //获取复选框的name值
    $.fn.getInputCheckboxName= function () {

         var _this=$(this),
            res='';
         res = _this.find("input").attr("name");
          
         return res;

    };
    //获取标题高度
    $.fn.getInputCheckboxHeight = function () {
        var _this=$(this).find('label'),
            res;
        res = _this.height();
        return res;
    };

    //获取标题宽度
    $.fn.getInputCheckboxWidth = function () {
        var _this=$(this).find('label'),
            res;
        res = _this.width();
        return res;
    };

    //获取复选框标题字体
    /*$.fn.getInputCheckboxContentFontFamily = function () {
        var _this=$(this),
            res='';
        res = _this.find("label").css("font-family");
        return res;
    };*/

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //修改复选框标题文字内容
    $.fn.changeInputCheckboxContent = function (inputCheckboxContent) {
        var _this=$(this),
            content=inputCheckboxContent;
        _this.find("label").text(content);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };
   //改变复选框name
    $.fn.changeInputCheckboxName= function (inputCheckboxName) {
          
        var _this=$(this),
            name=inputCheckboxName;
        _this.find("input").attr("name",name);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };
    //修改标题高度
    $.fn.changeInputCheckboxHeight = function (height) {
        var _this=$(this).find('label');
        _this.css("height",height+"px");
        sendMessage_funcpanelinit($(this));
    };

    //修改标题宽度
    $.fn.changeInputCheckboxWidth = function (width) {
        var _this=$(this).find('label');
        _this.css("width",width+"px");
        sendMessage_funcpanelinit($(this));
    };

    //修改复选框标题文字字体
    /*$.fn.changeInputCheckboxContentFontFamily = function (inputCheckboxContentFontFamily) {
        var _this=$(this),
            fontFamily=inputCheckboxContentFontFamily;
        _this.find("label").css("font-family", fontFamily);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };*/

})(jQuery);
