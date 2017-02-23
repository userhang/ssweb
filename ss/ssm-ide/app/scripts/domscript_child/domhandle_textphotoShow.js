/**
 * Created by Administrator on 14-12-4.
 */
/***********************************************
 * 描述：图文展示【左右布局】（textphotoShow）各种操作封装
 ***********************************************/
(function ($) {
    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取当前id
    $.fn.gettextphotoShowid = function () {
        var _this=$(this),
            res='';

        res = _this.attr("id");


        return res;
    };
    //获取文字内容
    $.fn.getTextPhotoShowContent = function () {
        var _this=$(this).find('p'),
            res='';
        res = _this.text();
        return res;
    };

    //获取文字字体
    /*$.fn.getTextPhotoShowFont = function () {
     var _this=$(this).find('p'),
     res='';
     res = _this.css('font-family');
     return res;
     };*/

    //获取文字大小
    $.fn.getTextPhotoShowFontWeight = function () {
        var _this=$(this).find('.textphotoShowR'),
            res='';
        res = _this.css('font-size');
        res = parseInt(res);
        return res;
    };

    //获取当前图文展示高度
    $.fn.getTextPhotoShowHeight = function () {
        var _this=$(this).children('.textphotoShowL'),
            res;
        res = _this.height();
        return res;
    };

    //获取当前左右比例
    $.fn.getTextPhotoShowRatio = function () {
        var _thisL = $(this).find('img'),
            _thisR = $(this).find('p'),
            res;
        var ratioL = _thisL.width()/(_thisR.width() + _thisL.width());
        console.log('ffffffffffffffffffff'+(_thisR.width() + _thisL.width()));
        res = parseFloat(ratioL.toFixed(2));
        return res;
    };


    /****************************************/
    /* 各种操作函数
     /****************************************/
    //改变文字内容
    $.fn.changeTextPhotoShowContent = function (textphotoShowContent) {
        var _this=$(this),
            content=textphotoShowContent,
            small='';
        _this.find('p').text(content);
        sendMessage_funcpanelinit($(this));
    };

    //改变图文位置
    $.fn.changeTextPhotoPosition = function () {
        var _this=$(this),
            childhtml='',flag;

        childhtml=_this.children().eq(0).html();
        _this.children().eq(0).remove();

        if(_this.children().eq(0).hasClass("textphotoShowL")){
            flag=1;
            _this.eq(0).append('<div class="textphotoShowR">'+childhtml+'</div>');
        }else{
            flag=0;
            _this.eq(0).append('<div class="textphotoShowL">'+childhtml+'</div>');
        }

        console.log("SSSSSSSSSSSSSSSSSS+WW"+childhtml+flag);
        alert("图文对调之后，请重新设置图片比例");

        sendMessage_funcpanelinit($(this));
    };

    //改变文字字体
    /*$.fn.changeTextPhotoShowFont = function (textphotoShowFont) {
     var _this=$(this),
     content=textphotoShowFont,
     small='';
     _this.find('.textphotoShowR').css('font-family',content);
     sendMessage_funcpanelinit($(this));
     };*/

    //改变文字大小
    $.fn.changeTextPhotoShowFontWeight = function (textphotoShowFontWeight) {
        var _this=$(this),
            content=textphotoShowFontWeight,
            small='';
        _this.find('.textphotoShowR').css('font-size',content);
        sendMessage_funcpanelinit($(this));
    };

    //改变图文展示的高度
    $.fn.changeTextPhotoShowHeight = function (height) {
        var _this=$(this).children('div');
        _this.css("height",height+"px");
        sendMessage_funcpanelinit($(this));
    };

    //修改当前左右比例
    $.fn.changeTextPhotoShowRatio = function (ratio) {
        var _thisL = $(this).children('.textphotoShowL');
        var _thisR = $(this).children('.textphotoShowR');
        ratio = ratio * 100;
        _thisL.css("width", ratio + "%");
        _thisR.css("width", (100-ratio) + "%");
        var args = {
            textphotoShowRatio:ratio
        };
        sendMessage_funcpanelinit($(this), $(this).getInitAttr(args));
    };

})(jQuery);