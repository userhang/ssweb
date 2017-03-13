/**
 * Created by Administrator on 14-9-11.
 */
/******************************************************
 * 描述：对图标按钮（iconButton）的功能的具体操作方法
 ****************************************************/
var ssM = $.ssm();
(function ($) {

    /****************************************/
    /* 各种属性get函数
     /****************************************/
      //获取当前id
    $.fn.geticonButtonid = function () {
        var _this=$(this),
            res='';
        
            res = _this.attr("id");

      
        return res;
    };

    //获取图标按钮高度
    $.fn.getIconButtonHeight = function () {
        var _this=$(this),
            res;
        res = _this.height();
        return res;
    };
//获取图标按钮右移
    $.fn.getIconButtonHeight = function () {
        var reg=/\d+/;
        return $(this).css('marginLeft').match(reg)[0];
    };

    //获取图标按钮宽度
    $.fn.getIconButtonWidth = function () {
        var _this=$(this),
            res;
        res = _this.width();
        return res;
    };

    //获取图标按钮文字内容
    $.fn.getIconButtonContent = function () {
        var _this=$(this),
            res='';
        res = _this.text();
        if(res==""){
            res = "无";
        }
        return res;
    };

    //获取图标按钮链接内容
    $.fn.getIconButtonHrefContent = function () {
        var _this=$(this);
        var hrefContent='';
        aLabelHrefList.aLabelEffect();
        hrefContent=_this.attr("href");
        hrefContent=hrefContent.replace(/#/,"");
        aLabelHrefList.aLabelDisable();
        return hrefContent;
    };

    //获取图标按钮图标类型
    $.fn.getIconButtonType = function () {
        var iconButtonType;
        var _this = $(this).find("div");
        if(_this.hasClass("ICON ICON_CORRECT")){
            iconButtonType={
                name:'对号(ICON ICON_CORRECT)',
                val:'ICON ICON_CORRECT'
            };
        }else if(_this.hasClass("ICON ICON_LEFT")){
            iconButtonType={
                name:'向左(ICON ICON_LEFT)',
                val:'ICON ICON_LEFT'
            };
        }else if(_this.hasClass("ICON ICON_RIGHT")){
            iconButtonType={
                name:'向右(ICON ICON_RIGHT)',
                val:'ICON ICON_RIGHT'
            };
        }else if(_this.hasClass("ICON ICON_DOWN")){
            iconButtonType={
                name:'向下(ICON ICON_DOWN)',
                val:'ICON ICON_DOWN'
            };
        }else if(_this.hasClass("ICON ICON_UP")){
            iconButtonType={
                name:'向上(ICON ICON_UP)',
                val:'ICON ICON_UP'
            };
        }else if(_this.hasClass("ICON ICON_HOME")){
            iconButtonType={
                name:'主页(ICON ICON_HOME)',
                val:'ICON ICON_HOME'
            };
        }else if(_this.hasClass("ICON ICON_GEAR")){
            iconButtonType={
                name:'设置(ICON ICON_GEAR)',
                val:'ICON ICON_GEAR'
            };
        }else if(_this.hasClass("ICON ICON_GRID")){
            iconButtonType={
                name:'九宫格(ICON ICON_GRID)',
                val:'ICON ICON_GRID'
            };
        }else if(_this.hasClass("ICON ICON_I")){
            iconButtonType={
                name:'消息(ICON ICON_I)',
                val:'ICON ICON_I'
            };
        }else if(_this.hasClass("ICON ICON_REFRESH")){
            iconButtonType={
                name:'刷新(ICON ICON_REFRESH)',
                val:'ICON ICON_REFRESH'
            };
        }else if(_this.hasClass("ICON ICON_SEARCH")){
            iconButtonType={
                name:'查找(ICON ICON_SEARCH)',
                val:'ICON ICON_SEARCH'
            };
        }else if(_this.hasClass("ICON ICON_WARN")){
            iconButtonType={
                name:'警告(ICON ICON_WARN)',
                val:'ICON ICON_WARN'
            };
        }else if(_this.hasClass("ICON ICON_TURNRIGHT")){
            iconButtonType={
                name:'右转(ICON ICON_TURNRIGHT)',
                val:'ICON ICON_TURNRIGHT'
            };
        }else if(_this.hasClass("ICON ICON_TURNLEFT")){
            iconButtonType={
                name:'左转(ICON ICON_TURNLEFT)',
                val:'ICON ICON_TURNLEFT'
            };
        }else if(_this.hasClass("ICON ICON_MULTIPLE")){
            iconButtonType={
                name:'乘号(ICON ICON_MULTIPLE)',
                val:'ICON ICON_MULTIPLE'
            };
        }else if(_this.hasClass("ICON ICON_RIGHT")){
            iconButtonType={
                name:'查找(ICON ICON_RIGHT)',
                val:'ICON ICON_RIGHT'
            };
        }else if(_this.hasClass("ICON ICON_ADD")){
            iconButtonType={
                name:'加号(ICON ICON_ADD)',
                val:'ICON ICON_ADD'
            };
        }else if(_this.hasClass("ICON ICON_SUB")){
            iconButtonType={
                name:'减号(ICON ICON_SUB)',
                val:'ICON ICON_SUB'
            };
        }else if(_this.hasClass("ICON ICON_STAR")){
            iconButtonType={
                name:'星星(ICON ICON_STAR)',
                val:'ICON ICON_STAR'
            };
        }else{
            iconButtonType={
                name:'无',
                val:''
            }
        }
        return iconButtonType;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/

    //改变图标按钮文字内容
    $.fn.changeIconButtonContent = function (iconButtonContent) {
        var _this=$(this),
            content=iconButtonContent,
            res1='',
            res2='',
            res3='';

        if($(this).find("div").length>0){
            res1=$(this).html();
            res2=$(this).text();
            res3=res1.replace(res2,content);
        }else{
            res3=content;
        }
        _this.html(res3);
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };

    //改变图标按钮链接
    $.fn.changeIconButtonHrefContent = function (iconButtonHrefContent) {
        var _this=$(this);
        aLabelHrefList.aLabelEffect();
        _this.attr("href","#"+iconButtonHrefContent);
        aLabelHrefList.aLabelDisable();
        sendMessage_funcpanelinit($(this));
    };
  //修改图标按钮右移距离
    $.fn.changeIconButtonMargin = function (marginLeft) {
        var _this=$(this);
        _this.css("marginLeft",marginLeft+"px");
        sendMessage_funcpanelinit($(this));
    };

    //改变图标安钮图标类型
    $.fn.changeIconButtonType = function (type) {
        var _this=$(this).find("div");
        if($(this).find("div").length>0){
            //如果存在这个图片div的话
            _this.removeClass();
            switch(type){
                case 'ICON ICON_CORRECT':
                    _this.addClass("ICON ICON_CORRECT");
                    break;
                case 'ICON ICON_LEFT':
                    _this.addClass("ICON ICON_LEFT");
                    break;
                case 'ICON ICON_RIGHT':
                    _this.addClass("ICON ICON_RIGHT");
                    break;
                case 'ICON ICON_DOWN':
                    _this.addClass("ICON ICON_DOWN");
                    break;
                case 'ICON ICON_UP':
                    _this.addClass("ICON ICON_UP");
                    break;
                case 'ICON ICON_HOME':
                    _this.addClass("ICON ICON_HOME");
                    break;
                case 'ICON ICON_GEAR':
                    _this.addClass("ICON ICON_GEAR");
                    break;
                case 'ICON ICON_GRID':
                    _this.addClass("ICON ICON_GRID");
                    break;
                case 'ICON ICON_I':
                    _this.addClass("ICON ICON_I");
                    break;
                case 'ICON ICON_REFRESH':
                    _this.addClass("ICON ICON_REFRESH");
                    break;
                case 'ICON ICON_SEARCH':
                    _this.addClass("ICON ICON_SEARCH");
                    break;
                case 'ICON ICON_WARN':
                    _this.addClass("ICON ICON_WARN");
                    break;
                case 'ICON ICON_TURNRIGHT':
                    _this.addClass("ICON ICON_TURNRIGHT");
                    break;
                case 'ICON ICON_TURNLEFT':
                    _this.addClass("ICON ICON_TURNLEFT");
                    break;
                case 'ICON ICON_MULTIPLE':
                    _this.addClass("ICON ICON_MULTIPLE");
                    break;
                case 'ICON ICON_ADD':
                    _this.addClass("ICON ICON_ADD");
                    break;
                case 'ICON ICON_SUB':
                    _this.addClass("ICON ICON_SUB");
                    break;
                case 'ICON ICON_STAR':
                    _this.addClass("ICON ICON_STAR");
                    break;
            }
        }else{
            $(this).prepend("<div CLASS='"+type+"'></div>");
        }

        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };

    //选择事件
    $.fn.changeIconButtoneventselect = function (iconButtonevent) {
        var _this=$(this);
        var args={
            iconButtonevent:iconButtonevent
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改图标按钮高度
    $.fn.changeIconButtonHeight = function (height) {
        var _this=$(this);
        _this.css("height",height+"px");
        sendMessage_funcpanelinit($(this));
    };

    //修改图标按钮宽度
    $.fn.changeIconButtonWidth = function (width) {
        var _this=$(this);
        _this.css("width",width+"px");
        sendMessage_funcpanelinit($(this));
    };
})(jQuery);
