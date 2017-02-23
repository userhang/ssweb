/**
 * Created by Administrator on 15-1-13.
 */
/**
 * Created by Jane Maple on 14-5-9.
 */
/***********************************************
 * 描述：普通图片（normalImage）各种操作封装
 ***********************************************/
var ssM = $.ssm();
(function ($) {

    /****************************************/
    /* 各种属性get函数
     /****************************************/
        //获取当前id
      $.fn.getnormalImageid = function () {
        var _this=$(this),
            res='';
        
            res = _this.attr("id");

      
        return res;
    };
    //获取当前图片路径
    $.fn.getNormalImageHref = function () {
        var _this=$(this);
        var hrefContent='';
        hrefContent=_this.find("img").attr('src');
        hrefContent = hrefContent.replace('../indeximg/','');
        return hrefContent;
    };

    //获取当前图片高度
    $.fn.getNormalImageHeight = function () {
        var _this=$(this),
            res;
        res = _this.height();
        return res;
    };

    //获取当前图片宽度
    $.fn.getNormalImageWidth = function () {
        var _this=$(this),
            res;
        res = _this.width();
        return res;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //改变路径（图片）
    $.fn.changeNormalImageHref = function (normalImageHref) {
        var _this=$(this);
        _this.find("img").attr('src','../indeximg/'+normalImageHref);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };

    //改变图片的高度
    $.fn.changeNormalImageHeight = function (height) {
        var _this=$(this);
        _this.css("height",height+"px");
        sendMessage_funcpanelinit($(this));
    };

    //改变图片的宽度
    $.fn.changeNormalImageWidth = function (width) {
        var _this=$(this);
        _this.css("width",width+"px");
        sendMessage_funcpanelinit($(this));
    };

    
    $.fn.addright = function () {
     
        var _this=$(this);
        _this.css("float","right");
        sendMessage_funcpanelinit($(this));
    };
    $.fn.addleft = function () {
     
        var _this=$(this);
        _this.css("float","left");
        sendMessage_funcpanelinit($(this));
    };
    $.fn.addcenter = function () {
       
        var _this=$(this);
        _this.css("margin","0px auto 0px auto");
        sendMessage_funcpanelinit($(this));
    };

})(jQuery);
