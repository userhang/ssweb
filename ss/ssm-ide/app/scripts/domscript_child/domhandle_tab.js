/**
 * Created by Jane Maple on 14-5-17.
 */
/**
 * Created by Jane Maple on 14-5-9.
 */
/***********************************************
 * 标签布局（tabview）各种操作封装
 ***********************************************/
(function ($) {


    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取标签布局标签个数
    $.fn.getTabChildCount = function () {
        var child=$(this).children("ul");
        var childCount=child.find("li").length;
        return childCount;
    };

    //获取当前元素是否为圆角
    /*$.fn.getIsWrapedCorner = function () {
        var _this=$(this).parent();
        return _this.hasClass("SCROLLVIEW")?'yes':'no';
    };*/

    //获取标签标题文字
    $.fn.getTabItemContent = function (tabItemNo) {
        var _this=$(this),
            res='';
        if(_this.find("li").eq(tabItemNo).length!=0){
            res = _this.find("li").eq(tabItemNo).text();
        }
        return res;
    };

    //获取当前标签文字内容
    $.fn.getTabContent = function (tabItemNo) {
        var _this=$(this),
            res='';
        if(_this.find(".INFO").eq(tabItemNo).length!=0){
            res = _this.find(".INFO").eq(tabItemNo).find(".tabinfo").text();
        }
        return res;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/

    ////标签个数+1
    $.fn.addtabli = function (tabItemNo) {
        var _this=$(this).children().eq(0);
        var _this2=$(this).children().eq(1);
        var num = _this.find("li").length;

        if(num<3){
            _this.find("li").eq(tabItemNo-1).after("<li>新标签</li>");
            _this2.find(".tabitem").eq(tabItemNo-1).after("<div CLASS='tabitem'><div CLASS='INFO sortable container'><p CLASS='tabinfo'>新内容</p></div></div>");
            sendMessage_funcpanelinit($(this));
        }
        else{
            alert("标签数不能大于3个");
        }
    };

    //改变圆角属性
    /*$.fn.changeIsWrapDivCorner = function (isWrapedCornerChecked) {
        var _this=$(this);
        if(isWrapedCornerChecked=='no'){
            _this.wrap("<div class='SCROLLVIEW'></div>");
        }else{
            _this.unwrap();
        }
        sendMessage_funcpanelinit(_this);
    }*/

    //标签布局标签个数-1
    $.fn.cuttabli = function (tabItemNo) {
        var _this=$(this).children().eq(0);
        var _this2=$(this).children().eq(1);
        if(_this.children().length>1){
            _this.children().eq(tabItemNo-1).remove();
            _this2.children().eq(tabItemNo-1).remove();
            _this.find(".SHOWING").removeClass("SHOWING");
            _this.children().eq(0).addClass("SHOWING");
            _this2.find(".SHOWING").removeClass("SHOWING");
            _this2.children().eq(0).addClass("SHOWING");
        }
        else{
            alert("标签数不能小于1个");
        }
        sendMessage_funcpanelinit($(this));
    };

    //改变选的是第几个标签时
    $.fn.changeTabItemNo = function (tabItemNo) {
        var _this=$(this);
        var s1=$(this).children().eq(0);
     
        $('[class="SHOWING"]').removeClass("SHOWING");
        s1.find("li").eq(tabItemNo-1).addClass("SHOWING");
       
       var s2=$(this).children().eq(1);
        $('[class="tabitem SHOWING"]').removeClass("SHOWING");
        s2.find(".tabitem").eq(tabItemNo-1).addClass("SHOWING");
        var args={
            tabItemNo:tabItemNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变标签标题内容
    $.fn.changeTabItemContent = function (tabItemNo,tabItemContent) {
        var _this=$(this).children().eq(0),
            content=tabItemContent,
            small='';
        _this.find("li").eq(tabItemNo-1).text(content);
        var args={
            tabItemNo:tabItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //改变标签内容
    $.fn.changeTabContent = function (tabItemNo,tabContent) {
        var _this=$(this).children().eq(1),
            content=tabContent,
            small='';
        _this.find(".INFO").eq(tabItemNo-1).find(".tabinfo").text(content);
        var args={
            tabItemNo:tabItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };
})(jQuery);
