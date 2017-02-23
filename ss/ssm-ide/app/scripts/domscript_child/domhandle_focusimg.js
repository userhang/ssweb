/**
 * Created by Administrator on 14-9-9.
 */
/****************************************/
/* 描述：滚动焦点图（focusimg）各种操作封装
 /****************************************/
(function ($) {


    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取当前id
    $.fn.getfocusimgid = function () {
        var _this=$(this),
            res='';

        res = _this.attr("id");


        return res;
    };
    //获取图片个数
    $.fn.getImgChildCount = function () {

        var childCount=$(this).find("img").length;
        return childCount;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //图片个数+1
    $.fn.addimgli = function (imgItemNo) {
        var childCount=$(this).find("img").length;
        if(childCount>=7){
            alert("已达到最大图片数");
        }
        else{
            var _this=$(this).children().find("li").eq(imgItemNo-1);


            _this.after("<li><a href='#'><img src='./img/system/pic_1.jpg'/></a></li>");
            sendMessage_funcpanelinit($(this));
        }

    };

    //图片个数-1
    $.fn.cutimgli = function (imgItemNo) {
        var _this=$(this).children().eq(0);
        var _this2=$(this).parent();

        if(_this.children().length>1){
            _this.find("li").eq(imgItemNo-1).remove();
            _this2.find("span").eq(imgItemNo-1).remove();

        }
        else{
            alert("图片数不能小于1个");
        }
        sendMessage_funcpanelinit($(this));
    };
    //id
    $.fn.changefocusimgid = function (num,  focusimgid) {
        var _this=$(this).children().eq(num-1).find(".focusimgid"),
            content= focusimgid;
        _this.id=content;

        var args={
            focusimgItemNo:num
        };

        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //改变选的是第几个图片
    $.fn.changeImgItemNo = function (imgItemNo) {

        var _this=$(this);
        var args={
            imgItemNo:imgItemNo
        };

        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };
})(jQuery);
