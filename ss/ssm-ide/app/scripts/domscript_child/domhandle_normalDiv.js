/**
 * Created by Administrator on 14-7-7.
 */
/**
 * Created by gyj
 */
/****************************************/
/* 描述：整行面板（normalDiv）、两列式面板（normalDivSplit）各种操作封装
 /****************************************/


(function ($) {


    /****************************************/
    /* 各种属性get函数
     /****************************************/
//获取当前id
    $.fn.getnormalDivid = function () {
        var _this=$(this),
            res='';

        res = _this.attr("id");


        return res;
    };
    //获取当前normalDiv是否带有边框Class
    $.fn.getHasBorder = function () {
        var _this=$(this);
        return _this.hasClass("normalDivBorder")?'yes':'no';
    };

    //获取当前整行面板高度
    $.fn.getDivHeight = function () {
        var _this=$(this),
            res;
        res = _this.height();

        return res;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/

    //切换整行面板的边框（有/无切换）
    $.fn.changeHasBorder = function (hasBorder) {
        var _this=$(this);
        _this.toggleCusClass(hasBorder,"normalDivBorder");
        sendMessage_funcpanelinit($(this));
    };

    //改变整行面板的高度
    $.fn.changeDivHeight = function (height) {

        var _this=$(this).children('div');
        _this.css("height",height+"px");
        sendMessage_funcpanelinit($(this));
    };
})(jQuery);