/**
 * Created by Administrator on 14-12-5.
 */
/***********************************************
 * 描述：文本展示（textShow）各种操作封装
 ***********************************************/
(function ($) {


    /****************************************/
    /* 各种属性get函数
     /****************************************/
       //获取当前id
      $.fn.gettextShowid = function () {
        var _this=$(this),
            res='';
        
            res = _this.attr("id");

      
        return res;
    };
    //获取文本内容
    $.fn.getTextShowContent = function () {
        var _this=$(this),
            res='';
        res = _this.text();
        return res;
    };

    //获取文字对齐方式
    $.fn.getTextAlignType = function () {
        var textAlignType;
        if($(this).hasClass("textAlignCenter")){
            textAlignType={
                name:'居中',
                val:'textAlignCenter'
            };
        }
        else if($(this).hasClass("textAlignLeft")){
            textAlignType={
                name:'左对齐',
                val:'textAlignLeft'
            };
        }else{
            textAlignType={
                name:'右对齐',
                val:'textAlignRight'
            };
        }
        return textAlignType;
    };

    //获取文本高度
    $.fn.getTextShowHeight = function () {
        var _this=$(this),
            res='';
        res = _this.height();
        return res;
    };

    //获取文本宽度
    $.fn.getTextShowWidth = function () {
        var _this=$(this),
            res='';
        res = _this.width();
        return res;
    };

    //获取文字大小
    $.fn.getTextShowFontWeight = function () {
        var _this=$(this),
            res='';
        res = _this.css("font-size");
        res = res.replace("px", "");
        res = parseInt(res);
        console.log("文本展示的字体大小为1："  + res);
        console.log(_this.html());
        console.log(typeof(res));
        //console.log($(this).get(0).tagName);
        return res;
    };

    //获取文字大小1
    $.fn.getTextShowFontWeight1 = function () {
        //转换成js对象
        var _this=$(this),
            res='';
        res = _this.css("font-size");
        res = res.replace("px", "");
        res = parseInt(res);
        console.log("文本展示的字体大小为1："  + res);
        console.log(_this.html());
        console.log(typeof(res));
        //console.log($(this).get(0).tagName);
        return res;
    };
    //获取文本颜色

    //获取背景颜色

    //获取字体——在generalDomhandle_componentFontFamily.js中


    /****************************************/
    /* 各种操作函数
     /****************************************/
    //改变文本内容
    $.fn.changeTextShowContent = function (normalParaConten) {
        var _this=$(this),
            content=normalParaConten,
            small='';
        _this.text(content);
        sendMessage_funcpanelinit($(this));
    };

    //修改对齐方式
    $.fn.changeTextAlignType = function (type) {
        var _this=$(this);
        if(_this.hasClass("textAlignCenter")){
            _this.removeClass("textAlignCenter");
        }
        if(_this.hasClass("textAlignLeft")){
            _this.removeClass("textAlignLeft");
        }
        if(_this.hasClass("textAlignRight")){
            _this.removeClass("textAlignRight");
        }
        switch(type){
            case 'textAlignCenter':
                _this.addClass("textAlignCenter");
                break;
            case 'textAlignLeft':
                _this.addClass("textAlignLeft");
                break;
            case 'textAlignRight':
                _this.addClass("textAlignRight");
                break;
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    };

    //字体修改——在generalDomhandle_componentFontFamily.js中

    //改变文本高度
    $.fn.changeTextShowHeight = function (normalParaHeight) {
        var _this=$(this),
            height=normalParaHeight,
            small='';
        _this.height(height);
        sendMessage_funcpanelinit($(this));
    };

    //改变文本宽度
    $.fn.changeTextShowWidth = function (normalParaWidth) {
        var _this=$(this),
            width=normalParaWidth,
            small='';
        _this.width(width);
        sendMessage_funcpanelinit($(this));
    };

    //改变文字大小
    $.fn.changeTextShowFontWeight = function (textShowFontWeight) {
        var _this=$(this),
            content=textShowFontWeight,
            small='';
        _this.css('font-size',content);
        sendMessage_funcpanelinit($(this));
    };

    //改变文字大小1
    $.fn.changeTextShowFontWeight1 = function (textShowFontWeight) {
        var _this=$(this).closest(".selected").find(".textShow"),
            content=textShowFontWeight,
            small='';
        _this.css('font-size',content);
        sendMessage_funcpanelinit($(this));
    };

    //修改文本颜色
//    $.fn.changeTextShowColor = function (normalParaColor) {
//        var _this=$(this),
//            color=normalParaColor,
//            small='';
//        console.log(normalParaColor);
//        _this.css('color', color);
//        sendMessage_funcpanelinit($(this));
//    };

//    //修改背景颜色
//    $.fn.changeTextShowBgColor = function (normalParaBgColor) {
//        var _this=$(this),
//            color=normalParaBgColor,
//            small='';
//        console.log(normalParaBgColor);
//        _this.css('background-color', color);
//        sendMessage_funcpanelinit($(this));
//    };


})(jQuery);