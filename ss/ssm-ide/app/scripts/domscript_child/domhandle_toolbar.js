/**
 * Created by suhuifen on 14-5-17.
 */
/***********************************************
 * 描述：标题栏（toolbar）各种操作封装
 ***********************************************/

(function ($) {
/****************************************/
/* 各种属性get函数
/****************************************/
  //获取当前id
      $.fn.gettoolbarid = function () {
        var _this=$(this),
            res='';
        
            res = _this.attr("id");

      
        return res;
    };
    //获取当前标题栏内容
    $.fn.getToolbarContent = function () {
        var _this=$(this),
            res='';
         res = _this.find("h1").text();
        return res;
    };

    //获取当前标题栏是否有标题下拉框
    $.fn.getHasHeadList = function () {
        var _this=$(this);
        return _this.find("h1").next().is("ul")?'yes':'no';
    };

    //获取当前标题栏是否有返回按钮
    $.fn.getHasBack = function () {
        var _this=$(this);
        return _this.hasClass("BACK")?'yes':'no';
    };

    //获取当前标题栏是否有关于按钮
    $.fn.getHasButton = function () {
        var _this=$(this);
        return _this.hasClass("BUTTON")?'yes':'no';
    };

    //获取“返回”按钮内容
    $.fn.getBackContent = function () {
        var _this=$(this),
            res='';
        res = _this.find(".BACK").text();
        return res;
    };

    //获取“关于”按钮内容
    $.fn.getToolbarButtonContent = function () {
        var _this=$(this),
            res='';
        res = _this.find(".BUTTON").text();
        return res;
    };

    //获取下拉列表个数
    $.fn.getHeadListCount = function () {
            var headListCount=$(this).find("ul").children().length;
            return headListCount;
    };

    //获取标题文字字体
    /*$.fn.getToolbarContentFontFamily = function () {
        var _this=$(this),
            res='';
        res = _this.find("h1").css("font-family");
        return res;
    };*/

    //获取“返回”按钮文字字体
    /*$.fn.getBackContentFontFamily = function () {
        var _this=$(this),
            res='';
        res = _this.find(".BACK").css("font-family");
        return res;
    };*/

    //获取“关于”按钮文字字体
   /* $.fn.getToolbarButtonContentFontFamily = function () {
        var _this=$(this),
            res='';
        res = _this.find(".BUTTON").css("font-family");
        return res;
    };*/

    /****************************************/
    /* 各种操作函数
    /****************************************/
    //改变标题栏内容
    $.fn.changeToolbarContent = function (toolbarContent) {
        var _this=$(this) ,
            content=toolbarContent;
        _this.find("h1").html(content);
        sendMessage_funcpanelinit($(this));
    };

    //增加、删除下拉框
    $.fn.changeHasHeadList = function (hasHeadList) {
        var _this=$(this);
        if(hasHeadList == 'yes'){
            _this.find("h1").wrap(' <div CLASS="HEADSELECT" id="homeTitle" type="xialaguang"></div>');
            _this.find("h1").after('<ul>' +
                '<li><a href="#">item1</a></li>' +
                '<li><a href="#">item2</a></li>' +
                '<li><a href="#">item3</a></li>' +
                '<li><a href="#">item4</a></li>' +
                '</ul>');
        }
        if(hasHeadList == 'no'){
            $('#homeTitle').remove();
            _this.append('<h1>标题栏</h1>');
        }
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };

    //增加、删除"返回"按钮；
    $.fn.changeHasBack = function (hasBack) {
        var _this=$(this);
        if(hasBack == 'yes'){
            _this.append('<a href="#" CLASS="BACK">返回</a>');
        }
        if(hasBack == 'no'){
            $('a').remove('.BACK');
        }
        sendMessage_funcpanelinit($(this));
    };

    //增加、删除"关于"按钮；
    $.fn.changeHasButton = function (hasButton) {
        var _this=$(this);
        if(hasButton == 'yes'){
            _this.append('<a CLASS="BUTTON" href="#">按钮</a>');
        }
        if(hasButton == 'no'){
            _this.find('.BUTTON').remove();
        }
        sendMessage_funcpanelinit($(this));
    };

    //改变"返回"按钮内容
    $.fn.changBackContent = function (backContent) {
        var _this=$(this) ,
            content=backContent;
        _this.find(".BACK").html(content);
        sendMessage_funcpanelinit($(this));
    };

    //改变"关于"按钮内容
    $.fn.changeToolbarButtonContent = function (buttonContent) {
        var _this=$(this) ,
            content=buttonContent;
        _this.find(".BUTTON").html(content);
        sendMessage_funcpanelinit($(this));
    };

    //刷新标题栏
    $.fn.reftoolbar = function () {
        var _this=$(this);
        //_this.parent().html("");
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR1");
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };

    //下拉框列表+1
    $.fn.addhli = function (hasHeadList) {
        var _this=$(this);
        if(hasHeadList == "yes"){
            var content = new Array();
            for(i = 0; i < _this.find("li").length ; i++){
                content[i] = _this.find("ul").children().eq(i).text();
            }
            var toolcontent = _this.find("h1").text();
            var list = '';
            for(i=0; i <= _this.find("li").length; i++){
                if(i <  _this.find("li").length){
                    list += "<li>"  +content[i] + "</li>";
                }else{
                    var num = i+1;
                    list += '<li>item'+num + '</li>';
                }
            }
            $('#homeTitle').remove();
            _this.append('<h1>'+ toolcontent +'</h1>');
            _this.find("h1").wrap(' <div CLASS="HEADSELECT" id="homeTitle" type="xialaguang"></div>');
            _this.find("h1").after('<ul>' +
                list +
                '</ul>')
        }else{
            alert("请添加标题下拉框")
        }

        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    };

    //下拉框列表-1
    $.fn.cuthli = function (hasHeadList) {
        var _this=$(this);
        if(hasHeadList == "yes"){
            var content = new Array();
            for(i = 0; i < _this.find("li").length - 1 ; i++){
                content[i] = _this.find("ul").children().eq(i).text();
            }
            var toolcontent = _this.find("h1").text();
            var list = '';
            for(i=0; i < _this.find("li").length - 1; i++){
                list += "<li>"  +content[i] + "</li>";
            }
            $('#homeTitle').remove();
            _this.append('<h1>'+ toolcontent +'</h1>');
            _this.find("h1").wrap(' <div CLASS="HEADSELECT" id="homeTitle" type="xialaguang"></div>');
            _this.find("h1").after('<ul>' +
                list +
                '</ul>')
        }else{
            alert("请添加标题下拉框")
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    };

    //修改标题文字字体
    /*$.fn.changeToolbarContentFontFamily = function (toolbarContentFontFamily) {
        var _this=$(this) ,
            fontFamily=toolbarContentFontFamily;
        _this.find("h1").css("font-family", fontFamily);
        sendMessage_funcpanelinit($(this));
    };*/

    //修改“返回”按钮文字字体
    /*$.fn.changBackContentFontFamily = function (backContentFontFamily) {
        var _this=$(this) ,
            fontFamily=backContentFontFamily;
        _this.find(".BACK").css("font-family", fontFamily);
        sendMessage_funcpanelinit($(this));
    };*/

    //修改“关于”按钮文字字体
    /*$.fn.changeToolbarButtonContentFontFamily = function (buttonContentFontFamily) {
        var _this=$(this) ,
            fontFamily=buttonContentFontFamily;
        _this.find(".BUTTON").css("font-family", fontFamily);
        sendMessage_funcpanelinit($(this));
    };*/

})(jQuery);