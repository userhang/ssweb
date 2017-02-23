/**
 * Created by fd on 2015/10/28.
 */
/******************************************************
 * 描述：对图片按钮集（iconButton）的功能的具体操作方法
 ****************************************************/
var ssM = $.ssm();
(function ($) {

    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //getIconButtonDivHasImg
    //获取当前id
    $.fn.geticonButtonDivid = function () {
        var _this=$(this),
            res='';

        res = _this.attr("id");


        return res;

    };
    //获按钮个数
    $.fn.getIconButtonNum = function () {
        var childCount=$(this).find("a").length;
        return childCount;
    };

    //获取图标按钮文字内容
    $.fn.getIconButtonDivContent = function () {
        var _this=$(this),
            res='';
        res = _this.text();
        if(res==""){
            res = "无";
        }
        return res;
    };


    //获取当前按钮是否有图片
    $.fn.getIconButtonDivHasImg = function () {
        var _this=$(this);
        //这里写判断是否有img
        if(_this.find(".iconButtonDivImg").length > 0){
            return 'yes';
        }else{
            return 'false';
        }
    };

    //获取当前图片宽高
    $.fn.getIconButtonDivHeightAndWidth = function () {
        var _this=$(this);
        if(_this.html() != undefined){
            var imgHeightAndWidth = _this.css("height");
            //去掉宽度中的px单位
            imgHeightAndWidth = imgHeightAndWidth.replace(/px/, '');
            //将string转换为int变量
            imgHeightAndWidth = parseInt(imgHeightAndWidth);
            return imgHeightAndWidth;
        }else{
            return 0;
        }
    };

    //获取当前按钮链接
    $.fn.getIconButtonDivHref = function () {
        var _this = $(this);
        aLabelHrefList.aLabelEffect();
        var href = _this.attr("href");
        console.log('href = ' + href);
        //去掉链接中的#单位
        //href = href.replace(/#/, '');
        aLabelHrefList.aLabelDisable();

        //如果有链接则返回链接，如果无链接，则返回无
        if(href == ""){
            return "无";
        }else{

            return href;
        }
    };



    /****************************************/
    /* 各种操作函数
     /****************************************/

    //按钮个数+1
    $.fn.addIconButtonDivNum = function (options) {
        var _this=$(this);


        _this.append(_this.children(':last')[0].outerHTML);
        _this.children(':last')[0].id=Math.uuid();

        sendMessage_funcpanelinit(_this);
    };

    //按钮个数-1
    $.fn.cutIconButtonDivNum = function (options) {
        var _this=$(this);
        if(_this.find("a").length>1){
            _this.children(':last').remove();
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    };

    //改变选的是第几项按钮
    $.fn.changeIconButtonDivItemNo = function (iconButtonDivItemNo) {
        console.log("当前选的是第几项：" + iconButtonDivItemNo);
        var _this=$(this);
        var args={
            iconButtonDivItemNo:iconButtonDivItemNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变图标按钮id
    $.fn.changeIconButtonDivid = function (num,  iconButtonDivid) {
        var _this=$(this).children().eq(num-1).find(".iconButtonDivid"),
            content= iconButtonDivid;
        _this.id=content;

        var args={
            iconButtonDivItemNo:num
        };

        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //改变图标按钮文字内容
    $.fn.changeIconButtonDivContent = function (num, iconButtonDivContent) {
        var _this=$(this).children().eq(num-1).find(".iconButtonDivContent"),
            content=iconButtonDivContent;

        _this.html(content);
        var args={
            iconButtonDivItemNo:num
        };

        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //切换图片有无
    $.fn.changeIconButtonDivHasImg = function (num,iconButtonHasImg) {
        var _this=$(this).find("a").eq(num-1);
        //如果有则删除，如果没有则添加
        if(_this.find(".iconButtonDivImg").length > 0){
            //有
            _this.find(".iconButtonDivImg").remove();
            _this.find("span").addClass("lineHeightWords");
        }else{
            //没有
            _this.find("span").before("<div class='iconButtonDivImg'><img src='./img/system/pic_1.jpg' class='iconButtonDivPic'></div>");
            //去掉span的line-height
            _this.find("span").removeClass("lineHeightWords");
        }
        var args={
            iconButtonDivItemNo:num
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //修改图片宽高
    $.fn.changeIconButtonDivHeightAndWidth = function (iconButtonDivHeightAndWidth, num) {
        console.log("修改图片宽高：" + iconButtonDivHeightAndWidth +"+"+ num);
        var _this=$(this).find("a").eq(num-1).find(".iconButtonDivImg");

        _this.css("height", iconButtonDivHeightAndWidth + "px");
        _this.css("width", iconButtonDivHeightAndWidth + "px");
        var args={
            iconButtonDivItemNo:num
        };

        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //修改按钮链接
    $.fn.changeIconButtonDivHrefContent = function (iconButtonDivHrefContent, num) {
        console.log("修改图片链接：" + iconButtonDivHrefContent +"+"+ num);
        var _this=$(this).find("a").eq(num-1);
        _this.attr("href", "#" + iconButtonDivHrefContent);
        var args={
            iconButtonDivItemNo:num
        };

        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };


})(jQuery);
