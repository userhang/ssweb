/**
 * Created by Jane Maple on 14-8-10.
 */
/***********************************************
 * 描述：翻页组件（pagechange）各种操作封装
 ***********************************************/


(function ($) {
    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取"首页"链接内容
    $.fn.getFirstPageHrefContent = function () {
        var _this=$(this);
        var hrefContent='';
        aLabelHrefList.aLabelEffect();
        hrefContent=_this.find("a.firstpage").attr("href");
        hrefContent=hrefContent.replace(/#/,"");
        aLabelHrefList.aLabelDisable();
        return hrefContent;
    };

    //获取"尾页"链接内容
    $.fn.getLastPageHrefContent = function () {
        var _this=$(this);
        var hrefContent='';
        aLabelHrefList.aLabelEffect();
        hrefContent=_this.find("a.lastpage").attr("href");
        hrefContent=hrefContent.replace(/#/,"");
        aLabelHrefList.aLabelDisable();
        return hrefContent;
    };

    //获取"上一页"链接内容
    $.fn.getPrePageHrefContent = function () {
        var _this=$(this);
        var hrefContent='';
        aLabelHrefList.aLabelEffect();
        hrefContent=_this.find("a.prepage").attr("href");
        hrefContent=hrefContent.replace(/#/,"");
        aLabelHrefList.aLabelDisable();
        return hrefContent;
    };

    //获取"下一页"链接内容
    $.fn.getNextPageHrefContent = function () {
        var _this=$(this);
        var hrefContent='';
        aLabelHrefList.aLabelEffect();
        hrefContent=_this.find("a.nextpage").attr("href");
        hrefContent=hrefContent.replace(/#/,"");
        aLabelHrefList.aLabelDisable();
        return hrefContent;
    };

    //获取"第几页"内容
    $.fn.getPageNumItemContent = function () {
        var _this=$(this),
            res='';
        res = _this.find("label.pagenum").text();
        return res;
    };

    //获取文字字体
    /*$.fn.getPageNumItemContentFontFamily = function () {
        var _this=$(this),
            res='';
        res = _this.find("label.pagenum").css("font-family");
        return res;
    };*/

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //改变"首页"链接内容
    $.fn.changeFirstPageHrefContent = function (firstPageHrefContent) {
        var _this=$(this);
        aLabelHrefList.aLabelEffect();
        _this.find("a.firstpage").attr("href","#"+firstPageHrefContent);
        aLabelHrefList.aLabelDisable();

        sendMessage_funcpanelinit($(this));
    };

    //改变"上一页"链接内容
    $.fn.changePrePageHrefContent = function (prePageHrefContent) {
        var _this=$(this);
        aLabelHrefList.aLabelEffect();
        _this.find("a.prepage").attr("href","#"+prePageHrefContent);
        aLabelHrefList.aLabelDisable();
        sendMessage_funcpanelinit($(this));
    };

    //改变"下一页"链接内容
    $.fn.changeNextPageHrefContent = function (nextPageHrefContent) {
        var _this=$(this);
        aLabelHrefList.aLabelEffect();
        _this.find("a.nextpage").attr("href","#"+nextPageHrefContent);
        aLabelHrefList.aLabelDisable();
        sendMessage_funcpanelinit($(this));
    };

    //改变"尾页"链接内容
    $.fn.changeLastPageHrefContent = function (lastPageHrefContent) {
        var _this=$(this);
        aLabelHrefList.aLabelEffect();
        _this.find("a.lastpage").attr("href","#"+lastPageHrefContent);
        aLabelHrefList.aLabelDisable();
        sendMessage_funcpanelinit($(this));
    };

    //改变"第几页"文字内容
    $.fn.changePageNumItemContent = function (pageNumItemContent) {
        var _this=$(this),
            content=pageNumItemContent,
            small='';
        _this.find("label.pagenum").text(pageNumItemContent);
        sendMessage_funcpanelinit($(this));
    };

    //修改文字字体
    /*$.fn.changePageNumItemContentFontFamily = function (pageNumItemContentFontFamily) {
        var _this=$(this),
            fontFamily=pageNumItemContentFontFamily;
        _this.find("label,a").css("font-family", fontFamily);
        sendMessage_funcpanelinit($(this));
    };*/
})(jQuery);