/**
 * Created by Administrator on 14-10-7.
 */
/****************************************/
/* 描述：二级菜单（twonav）各种操作封装
 /****************************************/

(function ($) {
    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //id
    $.fn.gettwonavid = function (twonavItemNo,twonavziItemNo) {
        var _this= $(this);
        var $ul = _this.children("ul");
        var $li = $ul.children("li").eq(twonavItemNo);
        var $ulzi = $li.find("li"),
            res='';
        res = $ulzi.eq(twonavziItemNo).attr("id");
        return res;

    };
    //获取导航栏的个数;

    $.fn.getnavCount = function () {
        var _this=$(this);
        var $ul = _this.children("ul");
        var $li = $ul.children();
        var length = $li.length;
        return length;
    };

    //获取当前一级菜单栏下的导航栏的个数;
    $.fn.getnavziCount = function (twonavItemNo) {
        var _this= $(this);
        var $ul = _this.children("ul");
        var $li = $ul.children("li").eq(twonavItemNo);
        var $ulzi = $li.find("li")
        return  $ulzi.length;
    };

    //获取导航项的内容;
    $.fn.gettwonavContent = function (twonavItemNo) {
        var _this= $(this);
        var $ul = _this.children("ul");
        var $li1 = $ul.children("li"),
            res='';
        res = $li1.eq(twonavItemNo).children("a").text();
        return res;
    };

    //获取二级导航项的内容;
    $.fn.gettwonavziContent = function (twonavItemNo,twonavziItemNo) {
        var _this= $(this);
        var $ul = _this.children("ul");
        var $li = $ul.children("li").eq(twonavItemNo);
        var $ulzi = $li.find("li"),
            res='';
        res = $ulzi.eq(twonavziItemNo).children("a").text();
        return res;
    };

    //获取二级导航项的链接内容
    $.fn.gettwonavziHrefContent = function (twonavItemNo,twonavziItemNo) {
        var _this= $(this);
        var $ul = _this.children("ul");
        var $li = $ul.children("li").eq(twonavItemNo);
        var $ulzi = $li.find("li");
        var $a =  $ulzi.eq(twonavziItemNo).children("a");
        //alert($a.html());
        var hrefContent='';
        aLabelHrefList.aLabelEffect();
        hrefContent=$a.attr("href");
        hrefContent=hrefContent.replace(/#/,"");
        aLabelHrefList.aLabelDisable();
        return hrefContent;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //导航项个数+1+1
    $.fn.twonavadd = function () {
        alert("aaa");
        var _this=$(this);
        var $ul = _this.children("ul");
        $ul.append("<li CLASS='navmenu'><a href='#aaa' >课程大厅</a>" +
            "<ul>" +
            "<li><a href='#aaa'>JavaScript</a></li>" +
            "</ul>"+
            "</li>");
        var $li = $ul.children();
        var length = $li.length;
        var liwidth =1/ length;
        var liW = (liwidth * 100) + "%";
        $li.css("width",liW );
        sendMessage_funcpanelinit(_this);
    };

    //导航项个数 -1
    $.fn.twonavcut = function () {
        var _this=$(this);
        var $ul = _this.children("ul");
        if($ul.children().length>1){
            $ul.children(':last').remove();
        }
        var $li = $ul.children();
        var length = $li.length;
        var liwidth =1/ length;
        var liW = (liwidth * 100) + "%";
        $li.css("width",liW );
        sendMessage_funcpanelinit(_this);
    };

    //选择第N个导航项
    $.fn.changetwonavItemNo = function (twonavItemNo) {
        var _this=$(this);
        var args={
            twonavItemNo:twonavItemNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变导航项的内容;
    $.fn.changetwonavContent = function (twonavItemNo,twonavContent) {
        var _this=$(this),
            content = twonavContent;
        var $ul = _this.children("ul");
        $ul.children("li").eq(twonavItemNo-1).children("a").text(content);
        var args={
            twonavItemNo:twonavItemNo,
            twonavContent:twonavContent
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //增加一级菜单下的二级导航项的个数
    $.fn.twonavziadd = function (twonavItemNo) {
        var _this=$(this);
        var $ul = _this.children("ul");

        var $li = $ul.children("li").eq(twonavItemNo-1);
        var $ul1 = $li.children("ul");

        if($ul1.html() === undefined){
            $li.children("a").after(
                "<ul>" +
                "<li><a href='#aaa'>二级菜单</a></li>"+
                "</ul>")
            //alert($li.html())
            // $li.append();
            $li.children(':last')[0].id=Math.uuid();
        }
        else{
            $ul1.append("<li><a href='#aaa' >二级菜单</a></li>");
            $ul1.children(':last')[0].id=Math.uuid();
        }

        var args={
            twonavItemNo:twonavItemNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //减少一级菜单下的二级导航项的个数
    $.fn.twonavzicut = function (twonavItemNo) {
        var _this=$(this)
        var $ul = _this.children("ul");
        var $li = $ul.children("li").eq(twonavItemNo-1);
        var $ul1 = $li.children("ul");
        $ul1.children(':last').remove();
        var args={
            twonavItemNo:twonavItemNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //选择操作当前一级菜单的二级菜单的N项|| 选中下拉框的值；
    $.fn.changetwonavziItemNo = function (twonavItemNo,twonavziItemNo) {
        var _this=$(this);
        var args={
            twonavItemNo:twonavItemNo,
            twonavziItemNo:twonavziItemNo

        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变二级菜单的内容;
    $.fn.changetwonavziContent = function (twonavItemNo,twonavziItemNo,twonavziContent) {
        var _this= $(this),
            content = twonavziContent;
        var $ul = _this.children("ul");
        var $li = $ul.children("li").eq(twonavItemNo-1);
        var $ulzi = $li.find("li");

        $ulzi.eq(twonavziItemNo-1).children("a").text(content);

        var args={
            twonavziContent:twonavziContent,
            twonavItemNo:twonavItemNo,
            twonavziItemNo:twonavziItemNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };
    //二级id
    $.fn.changetwonavid = function (twonavItemNo,twonavziItemNo,twonavid) {
        var _this= $(this),
            content =twonavid;
        var $ul = _this.children("ul");
        var $li = $ul.children("li").eq(twonavItemNo-1);
        var $ulzi = $li.find("li");

        $ulzi.id=content ;

        var args={
            twonavid:twonavid,
            twonavItemNo:twonavItemNo,
            twonavziItemNo:twonavziItemNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };
    //改变二级菜单的链接内容
    $.fn.changetwonavziHrefContent = function (twonavItemNo,twonavziItemNo,twonavziHrefContent) {
        var _this=$(this);
        var $ul = _this.children("ul");
        var $li = $ul.children("li").eq(twonavItemNo-1);
        var $ulzi = $li.find("li");
        var $a = $ulzi.eq(twonavziItemNo-1).children("a");
        aLabelHrefList.aLabelEffect();
        $a.attr("href","#"+twonavziHrefContent);
        aLabelHrefList.aLabelDisable();
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };
})(jQuery);