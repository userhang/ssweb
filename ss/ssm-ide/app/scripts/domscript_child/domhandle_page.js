/**
 * Created by gyj on 14-5-23.
 */

var page;
page = (function () {

    var sendMessage_pagefuncpanelinit = function (cusattr) {
        var initattr = getPageInitAttr();
        var attr = $.extend({}, initattr, cusattr);
        var data = {'type': 'page', 'attr': attr};
//  打印功能面板属性初始化
        console.log("pagedata :", data);
        data = JSON.stringify(data);
        messenger.targets['parent'].send(data);
//		store.storeDataToLocal();
    };
    var sendMessage_pagestateispreview = function () {
        var data = {'type': 'preview'};
        data = JSON.stringify(data);
        messenger.targets['parent'].send(data);
    };
    var getPageInitAttr = function () {
        var initattr = {};
        initattr = {
//				页面个数
            pageCount: getPageCount(),
//				当前页面id
            curPageid: getCurPageid(),
//				获取所有页面id的数组
            pageidList: getPageidList()
        }
        return initattr;
    }
    var getCurPageid = function () {
        var curpageid = jQuery('.CURRENT').attr("id");

        return curpageid;
    }
    var getPageidList = function () {
        var pagenum = getPageCount(),
            pageidList = [];
        for (var i = 0; i < pagenum; i++) {
            var tmppageid = jQuery('body').children("div").eq(i).attr("id");
            pageidList.push(tmppageid);
        }
        return pageidList;
    }
    var getPageCount = function () {
        return jQuery('body').children('div').length;
    }
    //这里增加页面会出现ID有问题
    var addpage = function () {
        var pagenum = getPageCount();
        var pageidflag = false;
        var newpageid = '';
        jQuery('body').find("div.CURRENT").removeClass("CURRENT");
        for (var i = pagenum; i > 0; i--) {
            var lastpageid = jQuery('body').children("div").eq(i - 1).attr("id");
            if (lastpageid.match(/\d+/) != null) {
                newpageid = eval(1 + parseInt(lastpageid.match(/\d+/)[0]));
                pageidflag = true;
                break;
            }
        }
        if (!pageidflag) {
            newpageid = 0;
        }

        jQuery('body').children("div").eq(pagenum - 1).after('<div id="page' + newpageid + '" class="sortable CURRENT">' +
           '<div class="TOOLBAR content" seq="toolbar' + Math.uuid() + '" type="toolbar">' +
           '<h1>这是page' + newpageid + '</h1>' +
   //        '<a CLASS="BACK" href="javascript:void(0)">返回</a>' +
          '</div>' +
            '</div>');
        var args = {
            curPageid: "page" + newpageid
        }
        sendMessage_pagefuncpanelinit(args);
        main();
    }
    var changeCurPage;
    changeCurPage = function (toPage) {
        console.log('=======================跳转页面开始=======================');
        //var toPage = "div#" + toPage;
        console.log('【1】将要跳转的页面id为：' + toPage);


        jQuery('body').find("div.CURRENT").removeClass("CURRENT");
        //这里用jQuery来替代$，就可以避免zepto的问题，jquery可以处理这里的问题find("#" + toPage)在zepto中会出错
        jQuery('body').find("#" + toPage).addClass("CURRENT");
        removeSelectDiv();
        var args = {
            curPageid: toPage
        }
        console.log('=======================跳转页面结束=======================');
        sendMessage_pagefuncpanelinit(args);
    };
    var changeCurPageidContent = function (msg) {
        var oldPageid = msg.oldPageid;
        var newPageid = msg.newPageid;
        jQuery('.CURRENT').attr("id", newPageid);
        jQuery('.CURRENT').find(".TOOLBAR>h1").html("这是" + newPageid);
        var args = {
            oldPageid: oldPageid,
            curPageid: newPageid
        }
        sendMessage_pagefuncpanelinit(args);
    }
    var delCurPage = function (tmpcurpageid) {
        var pageCount = getPageCount();
        if (pageCount == 1) {
            alert("这是唯一页面不可删除！");
        }
        else if (confirm("您确认要删除此页面吗？")) {
//			方案一
            var beginPage;
            for (var i = 0; i < jQuery('body').children("div").length; i++) {
                beginPage = jQuery('body').children("div").eq(i).attr("id");
//				找到除了删除的页面的第一页
                if (beginPage == tmpcurpageid) {
                    continue;
                } else {
                    break;
                }
            }
            jQuery('body').children("div#" + tmpcurpageid).remove();
            jQuery('body').find("div#" + beginPage).addClass("CURRENT");
            sendMessage_pagefuncpanelinit();
        }
    }
    var initPageContent = function () {
        store.initOriginally();
//		main();
    }
    return {
        sendMessage_pagefuncpanelinit: sendMessage_pagefuncpanelinit,
        sendMessage_pagestateispreview: sendMessage_pagestateispreview,
        addpage: addpage,
        getCurPageid: getCurPageid,
        getPageInitAttr: getPageInitAttr,
        getPageidList: getPageidList,
        changeCurPage: changeCurPage,
        changeCurPageidContent: changeCurPageidContent,
        delCurPage: delCurPage,
        initPageContent: initPageContent
    };
})();