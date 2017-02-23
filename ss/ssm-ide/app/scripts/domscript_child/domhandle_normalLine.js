/**
 * Created by Administrator on 14-12-5.
 */
/****************************************/
/* 描述：普通分割线（normalLine）各种操作封装
 /****************************************/
(function ($) {
    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取分割线宽度
    $.fn.getNormalLineWidth = function () {
        var _this=$(this),
            res='';
        res = _this.width();
        return res;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //改变分割线宽度
    $.fn.changeNormalLineWidth = function (normalLineWidth) {
        var _this=$(this),
            content=normalLineWidth,
            small='';
        _this.css("width", content);
        sendMessage_funcpanelinit(_this);
    };

})(jQuery);