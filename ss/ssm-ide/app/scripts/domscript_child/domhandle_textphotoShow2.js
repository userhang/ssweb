/**
 * Created by Administrator on 14-12-4.
 */
/***********************************************
 * 描述：图文展示【上下布局】（textphotoShow2）各种操作封装
 ***********************************************/
(function ($) {


    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取当前id
    $.fn.gettextphotoShow2id = function () {
        var _this=$(this),
            res='';

        res = _this.attr("id");


        return res;
    };
    //获取当前文字内容
    $.fn.getTextPhotoShow2Content = function () {
        var _this=$(this).find('p'),
            res='';
        res = _this.text();
        return res;
    };

    //获取当前文字字体
    /*$.fn.getTextPhotoShow2Font = function () {
     var _this=$(this).find('p'),
     res='';
     res = _this.css('font-family');
     return res;
     };*/

    //获取当前文字大小
    $.fn.getTextPhotoShow2FontWeight = function () {
        var _this=$(this).find('.textphotoShowDown'),
            res='';
        res = _this.css('font-size');
        res = parseInt(res);
        return res;
    };

    //获取当前图文展示2高度
    $.fn.getTextPhotoShow2Height = function () {
        var _this=$(this),
            res;
        res = _this.height();
        return res;
    };

    //获取当前上下比例
    $.fn.getTextPhotoShow2Ratio = function () {
        var _thisUp = $(this).children('.textphotoShowUp'),
            _thisDown = $(this).children('.textphotoShowDown'),
            res;
        //console.log('ffffffffffffffffffff' + _thisUp.height());
        //console.log('dddddddddddddddddddd' + _thisDown.height());
        res = _thisUp.height()/(_thisUp.height() + _thisDown.height());
        res = parseFloat(res.toFixed(2));
        //console.log('zzzzzzzzzzzzzzzzzz' + res);
        return res;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //改变文字内容
    $.fn.changeTextPhotoShow2Content = function (textphotoShow2Content) {
        var _this=$(this),
            content=textphotoShow2Content,
            small='';
        _this.find('p').text(content);
        sendMessage_funcpanelinit($(this));
    };

    //交换图文位置
    $.fn.changeTextPhoto2Position = function () {
        var _this=$(this),
            childhtml='',flag;

        childhtml=_this.children().eq(0).html();
        _this.children().eq(0).remove();

        if(_this.children().eq(0).hasClass("textphotoShowUp")){
            flag=1;
            _this.eq(0).append('<div class="textphotoShowDown">'+childhtml+'</div>');
        }else{
            flag=0;
            _this.eq(0).append('<div class="textphotoShowUp">'+childhtml+'</div>');
        }

        console.log("SSSSSSSSSSSSSSSSSS+WW"+childhtml+flag);

        sendMessage_funcpanelinit($(this));
    };

    //改变文字字体
    /*$.fn.changeTextPhotoShow2Font = function (textphotoShow2Font) {
     var _this=$(this),
     content=textphotoShow2Font,
     small='';
     _this.find('.textphotoShowDown').css('font-family',content);
     sendMessage_funcpanelinit($(this));
     };*/

    //改变文字大小
    $.fn.changeTextPhotoShow2FontWeight = function (textphotoShow2FontWeight) {
        var _this=$(this),
            content=textphotoShow2FontWeight,
            small='';
        _this.find('.textphotoShowDown').css('font-size',content);
        sendMessage_funcpanelinit($(this));
    };

    //改变图文展示2的高度
    $.fn.changeTextPhotoShow2Height = function (height) {
        var _this=$(this);
        _this.css("height",height+"px");
        sendMessage_funcpanelinit($(this));
    };

    //修改当前上下比例
    $.fn.changeTextPhotoShow2Ratio = function (ratio) {
        var _thisUp = $(this).children('.textphotoShowUp');
        var _thisDown = $(this).children('.textphotoShowDown');
        ratio  = ratio * 100;
        _thisUp.css("height", ratio + "%");
        _thisDown.css("height", (100-ratio) + "%");
        sendMessage_funcpanelinit($(this));
    };
})(jQuery);