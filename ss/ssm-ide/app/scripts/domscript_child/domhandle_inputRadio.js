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
 * 描述：表单-单选钮（inputRadio）各种操作封装
 ***********************************************/
var ssM = $.ssm();
(function ($) {
    /****************************************/
    /* 各种属性get函数
     /****************************************/
       //获取当前id
      $.fn.getinputRadioid = function () {
        var _this=$(this),
            res='';
        
            res = _this.attr("id");

      
            return res;
    };
    //获取单选钮标题文字内容
    $.fn.getInputRadioContent = function () {
      
        var _this=$(this),
            res='';
        res = _this.find("label").text();
        return res;
    };
   //获取单选按钮的name值
    $.fn.getInputRadioName= function () {

         var _this=$(this),
            res='';
         res = _this.find("input").attr("name");
           
         return res;

    };
    //获取单选钮高度
    $.fn.getInputRadioHeight = function () {
        var _this=$(this).find('label'),
            res;
        res = _this.height();
        return res;
    };

    //获取单选钮宽度
    $.fn.getInputRadioWidth = function () {
        var _this=$(this).find('label'),
            res;
        res = _this.width();
        return res;
    };

    //获取单选钮标题文字字体
    $.fn.getInputRadioContentFontFamily = function () {
        var _this=$(this),
            res='';
        res = _this.find("label").css("font-family");
        return res;
    };


    //获取单选钮状态
    $.fn.getInputRadioCheck = function () {
        var _this=$(this).find(':radio'),
            res;
        res = _this.val();
        return res;
    };

//修改单选钮选中
    $.fn.changeInputRadioChecked = function () {
        var _this=$(this).find('input');
        _this.attr('checked',true).prop("checked", true);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };

//修改单选钮未选中
    $.fn.changeInputRadioUnchecked = function () {
        var _this=$(this).find(':radio');
        _this.removeAttr("checked");
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };



    /****************************************/
    /* 各种操作函数
     /****************************************/
    //改变单选钮标题内容
    $.fn.changeInputRadioContent = function (inputRadioContent) {
     
        var _this=$(this),
            content=inputRadioContent;
        _this.find("label").text(content);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };

     //改变单选钮name
    $.fn.changeInputRadioName= function (inputRadioName) {
          
        var _this=$(this),
            name=inputRadioName;
        _this.find("input").attr("name",name);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };

    //修改单选钮高度
    $.fn.changeInputRadioHeight = function (height) {
        var _this=$(this).find('label');
        _this.css("height",height+"px");
        sendMessage_funcpanelinit($(this));
    };

    //修改单选钮宽度
    $.fn.changeInputRadioWidth = function (width) {
        var _this=$(this).find('label');
        _this.css("width",width+"px");
        sendMessage_funcpanelinit($(this));
    };

    //修改单选钮标题文字字体
    $.fn.changeInputRadioContentFontFamily = function (inputRadioContentFontFamily) {
        var _this=$(this),
            fontFamily=inputRadioContentFontFamily;
        _this.find("label").css("font-family", fontFamily);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };

    
})(jQuery);
