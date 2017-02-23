
/***********************************************
 * 描述：面板组（panel）各种操作封装
 ***********************************************/


(function ($) {


    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获面板项个数
    $.fn.getPanelChildCount = function () {
        var childCount=$(this).children().length;
        return childCount;
    };

    //获取面板组样式类型
    $.fn.getPanelType = function () {
        var panelType;
        if($(this).hasClass("PLASTIC")){
            panelType={
                name:'塑料面板',
                val:'suliaomianban'
            };
        }else{
            panelType={
                name:'金属面板',
                val:'jinshumianban'
            };
        }
        return panelType;
    };

    //获取当前面板项文字内容
    $.fn.getPanelItemContent = function () {
        var _this=$(this),
            res='';
        res = _this.find("span").text();
        return res;
    };

    //获取当前面板项是否有箭头样式class
    $.fn.getPanelHasArrow = function () {
        var _this=$(this);
        return _this.hasClass("ARROW")?'yes':'no';
    };

    //获取当前面板项是否带有向前Class
    $.fn.getPanelHasForward = function () {
        var _this=$(this);
        return _this.hasClass("FORWARD")?'yes':'no';
    };

    //获取当前面板项是否有气泡数字class
    $.fn.getPanelHasSmallCounter = function () {
        var _this=$(this);
        return _this.find("small.COUNTER").length!=0?'yes':'no';
    };

    //获取当前面板项气泡数字内容
    $.fn.getPanelSmallCounterContent = function () {
        var _this=$(this),
            res='';
        if(_this.find("small.COUNTER").length!=0){
            res = _this.find("small.COUNTER").text();
        }
        return res;
    };

    //获取当前列表项是否有小标注
    $.fn.getPanelHasSmallText = function () {
        var _this=$(this);
        return _this.find("small").not(".COUNTER").length!=0?'yes':'no';
    };

    //获取当前小标注内容
    $.fn.getPanelSmallTextContent = function () {
        var _this=$(this),
            res='';
        if(_this.find("small").not(".COUNTER").length!=0){
            res = _this.find("small").not(".COUNTER").text();
        }
        return res;
    };

    //获取当前元素是否有小标题
    $.fn.getPanelHasSmallTitle = function () {
        var _this=$(this);
        return _this.find("em").length!=0?'yes':'no';
    };

    //获取当前面板组小标题内容
    $.fn.getPanelSmallTitleContent = function () {
        var _this=$(this),
            res='';
        if(_this.find("em").length!=0){
            res = _this.find("em").text();
        }
        return res;
    };

    //获取当前面板组正文文字字体
    $.fn.getPanelItemContentFontFamily = function () {
        var _this=$(this),
            res='';
        res = _this.find("span").css("font-family");
        return res;
    };

    //获取当前面板组小标注文字字体
    $.fn.getPanelSmallTextContentFontFamily = function () {
        var _this=$(this),
            res='';
        if(_this.find("small").not(".COUNTER").length!=0){
            res = _this.find("small").not(".COUNTER").css("font-family");
        }
        return res;
    };

    //获取当前面板组小标题文字字体
    $.fn.getPanelSmallTitleContentFontFamily = function () {
        var _this=$(this),
            res='';
        if(_this.find("em").length!=0){
            res = _this.find("em").css("font-family");
        }
        return res;
    };

    //获取当前面板组每个面板项的高度
    $.fn.getPanelHeight = function () {
        var height;
        var _this = $(this);
        height = _this.find("li").height();
        return height;
    };

    //获取当前面板组是否为圆角
    $.fn.getPanelHasBorderRadius = function () {
        var _this=$(this);
        if(_this.hasClass('radius')){
            return 'yes';
        }
        else{
            return 'no';
        }
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/

    //面板个数+1
    $.fn.addPanelli = function (options) {
        var _this=$(this);
        _this.append(_this.children(':last')[0].outerHTML);
        sendMessage_funcpanelinit(_this);
    };

    //面板个数-1
    $.fn.cutPanelli = function (options) {
        var _this=$(this);
        if(_this.children().length>1){
            _this.children(':last').remove();
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    };

    //面板项事件选择
    $.fn.changePaneleventselect = function (panelevent) {
        var _this=$(this);
        var args={
            panelevent:panelevent
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变选的是第几项面板项时
    $.fn.changePanelItemNo = function (panelItemNo) {
        var _this=$(this);
        var args={
            panelItemNo:panelItemNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变面板类型
    $.fn.changePanelType = function (panelItemNo,type) {
        var _this=$(this);
        switch(type){
            case 'suliaomianban':
                if(_this.hasClass("METAL")){
                    _this.removeClass("METAL");
                    _this.addClass("PLASTIC");
                }
                break;
            case 'jinshumianban':
                if(_this.hasClass("PLASTIC")){
                    _this.removeClass("PLASTIC");
                    _this.addClass("METAL")
                }
                break;
        }
        var args={
            panelItemNo:panelItemNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变面板项文字内容
    $.fn.changePanelItemContent = function (panelItemNo,panelItemContent) {
        var _this=$(this).children().eq(panelItemNo-1),
            content=panelItemContent;
        _this.find("span").text(content);
        var args={
            panelItemNo:panelItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //切换箭头的有无
    $.fn.changePanelHasArrow = function (panelItemNo,panelhasArrow) {
        var _this=$(this).children().eq(panelItemNo-1);
        _this.toggleCusClass(panelhasArrow,"ARROW");
        var args={
            panelItemNo:panelItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //切换向前样式
    $.fn.changePanelHasForward = function (panelItemNo,panelhasForward) {
        var _this=$(this).children().eq(panelItemNo-1);
        _this.toggleCusClass(panelhasForward,"FORWARD");
        var args={
            panelItemNo:panelItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //增加、删除小标注
    $.fn.changePanelHasSmallText = function (panelItemNo,panelhasSmallText) {
        var _this=$(this).children().eq(panelItemNo-1);
        if(panelhasSmallText=='yes'){
            if(_this.find("small").not(".COUNTER").length==0){
                if(_this.find("em").length==0){
                    _this.find("a").append('<small>小标注</small>');
                }
                else{
                    _this.find("em").before('<small>小标注</small>');
                }
            }
        }else{
            _this.find("small").not(".COUNTER").remove();
        }
        var args={
            panelItemNo:panelItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //改变小标注内容
    $.fn.changePanelHasSmallTextContent = function (panelItemNo,panelsmallTextContent) {
        var _this=$(this).children().eq(panelItemNo-1);
        _this.find("small").not(".COUNTER").text(panelsmallTextContent);
        var args={
            panelItemNo:panelItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //增加、删除小标题
    $.fn.changePanelHasSmallTitle = function (panelItemNo,panelhasSmallTitle) {
        var _this=$(this).children().eq(panelItemNo-1);
        if(panelhasSmallTitle=='yes'){
            if(_this.find("em").length==0){
                _this.find("a").append('<em>小标题</em>');
            }
        }else{
            _this.find("em").remove();
        }
        var args={
            panelItemNo:panelItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //改变小标题内容
    $.fn.changePanelHasSmallTitleContent = function (panelItemNo,panelsmallTitleContent) {
        var _this=$(this).children().eq(panelItemNo-1);
        _this.find("em").text(panelsmallTitleContent);
        var args={
            panelItemNo:panelItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //删除当前面板项
    $.fn.cutthisPli = function (panelItemNo) {
        var _this=$(this).children().eq(panelItemNo-1);
        if($(this).children().length>1){
            _this.remove();
            sendMessage_funcpanelinit($(this));
        }
        else{
            alert("面板项数不能小于1个");
        }
    };

    //修改面板组正文文字字体
    $.fn.changePanelItemContentFontFamily = function (panelItemNo,panelItemContentFontFamily) {
        var _this=$(this).children().eq(panelItemNo-1),
            content=panelItemContentFontFamily;
        _this.find("span").css("font-family", content);
        var args={
            panelItemNo:panelItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //修改面板组小标注文字字体
    $.fn.changePanelHasSmallTextContentFontFamily = function (panelItemNo,panelsmallTextContentFontFamily) {
        var _this=$(this).children().eq(panelItemNo-1);
        _this.find("small").not(".COUNTER").css("font-family", panelsmallTextContentFontFamily);
        var args={
            panelItemNo:panelItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //修改面板组小标题文字字体
    $.fn.changePanelHasSmallTitleContentFontFamily = function (panelItemNo,panelsmallTitleContentFontFamily) {
        var _this=$(this).children().eq(panelItemNo-1);
        _this.find("em").css("font-family", panelsmallTitleContentFontFamily);
        var args={
            panelItemNo:panelItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //改变面板组的高度
    $.fn.changePanelHeight = function (panelHeight) {
        var _this = $(this);
        height = _this.find("li").height(panelHeight);
        console.log("aaaaaaaaaaaaaaaa" + height);
        sendMessage_funcpanelinit($(this));
    };

    //切换是否有圆角
    $.fn.changePanelHasBorderRadius = function (panelhasBorderRadius) {
        var _this=$(this);
        console.log('111111111111111111' + _this.html())
        _this.toggleCusClass(panelhasBorderRadius,"radius");
        _this.find('li:first').toggleClass( 'radiusFirst');
        _this.find('li:last').toggleClass( 'radiusLast');
        sendMessage_funcpanelinit($(this));
    };
})(jQuery);/**
 * Created by Jane Maple on 14-5-15.
 */
