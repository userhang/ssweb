/**
 * Created by Administrator on 14-7-9.
 */
/**
 * Created by Administrator on 14-7-8.
 */
/**
 * Created by Administrator on 14-7-7.
 */
/**
 * Created by gyj
 */
/****************************************/
/* 描述：普通段落（normalPara）各种操作封装
 /****************************************/


(function ($) {


    /****************************************/
    /* 各种属性get函数
     /****************************************/
      //获取当前id
      $.fn.getnormalParaid = function () {
        var _this=$(this),
            res='';
        
            res = _this.attr("id");

      
        return res;
    };
    //获取段落文字
    $.fn.getNormalParaContent = function () {
        var _this=$(this),
            res='';
        res = _this.text();
        return res;
    };

    //获取段落高度
    $.fn.getNormalParaHeight = function () {
        var _this=$(this),
            res='';
        res = _this.height();
        return res;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //改变段落内容
    $.fn.changeNormalParaContent = function (normalParaContent) {
        var _this=$(this),
            content=normalParaContent,
            small='';
        _this.text(content);
        sendMessage_funcpanelinit($(this));
    };

    //修改段落高度
    $.fn.changeNormalParaHeight = function (normalParaHeight) {
        var _this=$(this),
            height=normalParaHeight,
            small='';
        _this.height(height);
        sendMessage_funcpanelinit($(this));
    };

})(jQuery);