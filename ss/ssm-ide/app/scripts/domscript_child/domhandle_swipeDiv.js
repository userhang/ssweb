/**
 * Created by Administrator on 14-6-21.
 */
/**
 * Created by gyj
 */
/****************************************/
/* 描述：隐藏侧边栏（swipeDiv）各种操作封装
 /****************************************/


(function ($) {
    /****************************************/
    /* 各种属性get函数
     /****************************************/
    $.fn.getswipeDivid = function () {
        var _this=$(this);
        res='';

        res = _this.attr("id");


        return res;
    };
    //删除当前侧边栏
    $.fn.deleteswdiv = function () {
        var _this=$(this);
        //_this.parent().html("");
        _this.html("");
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };
    //获取子项个数
    $.fn.getSwipeDivChildCount = function () {
        var childCount=$(this).find("div").children().length;
        return childCount;
    };

    //获取子项图标类型
    $.fn.getSwipeDivType = function (num) {
        var swipeDivType;
        var _this=$(this).find("div").find("a").eq(num);
        if(_this.hasClass("SDpanel")){
            swipeDivType={
                name:'面板',
                val:'SDpanel'
            };
        }
        else if(_this.hasClass("SDpc")){
            swipeDivType={
                name:'电脑',
                val:'SDpc'
            };
        }
        else if(_this.hasClass("SDcheck")){
            swipeDivType={
                name:'对号',
                val:'SDcheck'
            };
        }
        else if(_this.hasClass("SDphone")){
            swipeDivType={
                name:'手机',
                val:'SDphone'
            };
        }
        else if(_this.hasClass("SDhome")){
            swipeDivType={
                name:'主页',
                val:'SDhome'
            };
        }
        else if(_this.hasClass("SDerror")){
            swipeDivType={
                name:'错误',
                val:'SDerror'
            };
        }
        else if(_this.hasClass("SDadd")){
            swipeDivType={
                name:'添加',
                val:'SDadd'
            };
        }
        else if(_this.hasClass("SDstar")){
            swipeDivType={
                name:'星星',
                val:'SDstar'
            };
        }
        else if(_this.hasClass("SDmail")){
            swipeDivType={
                name:'邮件',
                val:'SDmail'
            };
        }
        else if(_this.hasClass("SDheart")){
            swipeDivType={
                name:'红心',
                val:'SDheart'
            };
        }
        else if(_this.hasClass("SDsetting")){
            swipeDivType={
                name:'设置',
                val:'SDsetting'
            };
        }
        else if(_this.hasClass("SDnote")){
            swipeDivType={
                name:'记录',
                val:'SDnote'
            };
        }
        else if(_this.hasClass("SDdate")){
            swipeDivType={
                name:'日期',
                val:'SDdate'
            };
        }
        else if(_this.hasClass("SDearth")){
            swipeDivType={
                name:'地球',
                val:'SDearth'
            };
        }
        else if(_this.hasClass("SDsound")){
            swipeDivType={
                name:'声音',
                val:'SDsound'
            };
        }
        else if(_this.hasClass("SDitem")){
            swipeDivType={
                name:'选项',
                val:'SDitem'
            };
        }
        return swipeDivType;
    };

    //获取子项链接内容
    $.fn.getSwipeDivItemHrefContent = function () {
        var _this=$(this);
        var hrefContent='';

        aLabelHrefList.aLabelEffect();
        hrefContent=_this.attr("href");
        hrefContent=hrefContent.replace(/#/,"");
        aLabelHrefList.aLabelDisable();
        return hrefContent;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //子项个数+1
    $.fn.addswipeDivli = function (options) {
        var _this=$(this).find("div");
        _this.append(_this.children(':last')[0].outerHTML);
        _this.children(':last')[0].id=Math.uuid();
        sendMessage_funcpanelinit($(this));
    };

    //子项个数-1
    $.fn.cutswipeDivli = function (options) {
        var _this=$(this);
        if(_this.find("div").children().length>1){
            _this.find("div").children(':last').remove();
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    };
    //id
    $.fn.changeswipeDivid = function (num,  swipeDivid) {
        var _this=$(this).children().eq(num-1).find(".swipeDivid"),
            content= focusimgid;
        _this.id=content;

        var args={
            focusimgItemNo:num
        };

        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };
    //改变选的是第几项子项
    $.fn.changeSwipeDivItemNo = function (swipeDivItemNo) {
        var _this=$(this);
        var args={
            swipeDivItemNo:swipeDivItemNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变子项链接内容
    $.fn.changeSwipeDivItemHrefContent = function (swipeDivItemNo,swipeDivItemHrefContent) {
        var _this=$(this).find("div").find("a").eq(swipeDivItemNo-1);
        aLabelHrefList.aLabelEffect();
//		aLabelHrefList.insertIntoALabelHrefList(listItemLinkHrefContent);
        _this.attr("href","#"+swipeDivItemHrefContent);
        aLabelHrefList.aLabelDisable();
        var args={
            swipeDivItemNo:swipeDivItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //删除当前列表项
    $.fn.cutthisSwipeDivli = function (swipeDivItemNo) {
        var _this=$(this).find("div").children().eq(swipeDivItemNo-1);
        if($(this).find("div").children().length>1){
            _this.remove();
            sendMessage_funcpanelinit($(this));
        }
        else{
            alert("列表项数不能小于1个");
        }
    };

    //改变子项图标
    $.fn.changeSwipeDivType = function (type,swipeDivItemNo) {
        var _this=$(this).find("div").find("a").eq(swipeDivItemNo-1);
        _this.removeClass();
        switch(type){
            case 'SDpc':
                _this.addClass("SDpc");
                break;
            case 'SDpanel':
                _this.addClass("SDpanel");
                break;
            case 'SDcheck':
                _this.addClass("SDcheck");
                break;
            case 'SDphone':
                _this.addClass("SDphone");
                break;
            case 'SDhome':
                _this.addClass("SDhome");
                break;
            case 'SDerror':
                _this.addClass("SDerror");
                break;
            case 'SDadd':
                _this.addClass("SDadd");
                break;
            case 'SDstar':
                _this.addClass("SDstar");
                break;
            case 'SDmail':
                _this.addClass("SDmail");
                break;
            case 'SDheart':
                _this.addClass("SDheart");
                break;
            case 'SDsetting':
                _this.addClass("SDsetting");
                break;
            case 'SDnote':
                _this.addClass("SDnote");
                break;
            case 'SDdate':
                _this.addClass("SDdate");
                break;
            case 'SDearth':
                _this.addClass("SDearth");
                break;
            case 'SDsound':
                _this.addClass("SDsound");
                break;
            case 'SDitem':
                _this.addClass("SDitem");
                break;

        }
        var args={
            swipeDivItemNo:swipeDivItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };
})(jQuery);
