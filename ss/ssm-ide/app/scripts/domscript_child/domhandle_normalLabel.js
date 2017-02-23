/**
 * Created by Administrator on 14-12-5.
 */
/***********************************************
 * 描述：普通标题（normalLabel）各种操作封装
 ***********************************************/
(function ($) {


    /****************************************/
    /* 各种属性get函数
     /****************************************/
        //获取当前id
      $.fn.getnormalLabelid = function () {
        var _this=$(this),
            res='';
        
            res = _this.attr("id");

      
        return res;
    };
    //获取当前普通标题标题文字
    $.fn.getNormalLabelContent = function () {
        var _this=$(this),
            res='';
        res = _this.text();
        return res;
    };

    //获取当前普通标题标题高度
    $.fn.getNormalLabelHeight = function () {
        var _this=$(this),
            res='';
        res = _this.height();
        return res;
    };

    //获取当前普通标题标题宽度
    $.fn.getNormalLabelWidth = function () {
        var _this=$(this),
            res='';
        res = _this.width();
        return res;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //改变标题文字内容
    $.fn.changeNormalLabelContent = function (normalLabelContent) {
        var _this=$(this),
            content=normalLabelContent,
            small='';
        _this.text(content);
        sendMessage_funcpanelinit($(this));
    };

    //改变标题高度
    $.fn.changeNormalLabelHeight = function (normalLabelHeight) {
        var _this=$(this),
            height=normalLabelHeight,
            small='';
        _this.height(height);
        sendMessage_funcpanelinit($(this));
    };

    //改变标题宽度
    $.fn.changeNormalLabelWidth = function (normalLabelWidth) {
        var _this=$(this),
            width=normalLabelWidth,
            small='';
        _this.width(width);
        sendMessage_funcpanelinit($(this));
    };

})(jQuery);