/**
 * Created by Jane Maple on 14-5-9.
 */
/***********************************************
 * 描述：大按钮（button）各种操作封装
 ***********************************************/
var ssM = $.ssm();
(function ($) {
    /****************************************/
    /* 各种属性get函数
     /****************************************/
     //获取当前id
      $.fn.getButtonid = function () {
        var _this=$(this),
            res='';
        
            res = _this.attr("id");

      
        return res;
    };
    //获取当前按钮内容
    $.fn.getButtonContent = function () {
        var _this=$(this),
            res='';
        if(_this.find("a").length!=0){
            res = _this.find("a").text();
        }else{
            var tmp= eval("/" + _this.find("small").text() + "/ig");
            res = this.text().replace(tmp, '');
        }
       
        return res;
    };

    //获取链接内容
    $.fn.getButtonHrefContent = function () {
        var _this=$(this);
        var hrefContent='';
        aLabelHrefList.aLabelEffect();
        hrefContent=_this.attr("href");
        //console.log(hrefContent);
        hrefContent=hrefContent.replace(/#/,"");
        aLabelHrefList.aLabelDisable();
        console.log('12345678901234567890' + hrefContent)
        return hrefContent;
    };


    //获取列表类型
    $.fn.getSwitchPageType = function () {
        var switchPageType;
        if($(this).hasClass("SLIDELEFT")){
            switchPageType={
                name:'SLIDELEFT',
                val:'SLIDELEFT'
            };
        }
        else if($(this).hasClass("SLIDEUP")){
            switchPageType={
                name:'SLIDEUP',
                val:'SLIDEUP'
            };
        }
        else if($(this).hasClass("FADE")){
            switchPageType={
                name:'FADE',
                val:'FADE'
            };
        }else if($(this).hasClass("FLIPLEFT")){
            switchPageType={
                name:'FLIPLEFT',
                val:'FLIPLEFT'
            };
        }else if($(this).hasClass("POP")){
            switchPageType={
                name:'POP',
                val:'POP'
            };
        }else if($(this).hasClass("SWITCH")){
            switchPageType={
                name:'SWITCH',
                val:'SWITCH'
            };
        }else if($(this).hasClass("ROTATE")){
            switchPageType={
                name:'ROTATE',
                val:'ROTATE'
            };
        }else{
            switchPageType={
                name:'无',
                val:''
            };
        }
        return switchPageType;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //改变链接内容
    $.fn.changeButtonHrefContent = function (buttonHrefContent) {
        var _this=$(this);
        console.log(_this.html() + '11111111111111111111111111111111111111' + buttonHrefContent);
        aLabelHrefList.aLabelEffect();
        _this.attr("href","#"+buttonHrefContent);
        aLabelHrefList.aLabelDisable();
        sendMessage_funcpanelinit($(this));
    };

    //改变按钮内容
   $.fn.changeButtonContent = function (buttonContent) {
        var _this=$(this),
            content=buttonContent,
            small='';

        if(_this.find('a').length==0){
            if(_this.find("small").length!=0){
                var tmp= eval("/" + _this.find("small").text() + "/ig");
                var tmpcontent= _this.text().replace(tmp, '');
                small = _this.children("small").parent().html();
                small = small.replace(tmpcontent, '')
            }
            content=content+small;
            _this.html(content);
        }else{
            _this.find("a").text(content);
        }
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };


    //改变转场动画
    $.fn.changeSwitchPageType = function (type) {
        var _this=$(this);
        if(_this.hasClass("SLIDELEFT")){
            _this.removeClass("SLIDELEFT");
        }
        if(_this.hasClass("SLIDEUP")){
            _this.removeClass("SLIDEUP");
        }
        if(_this.hasClass("FADE")){
            _this.removeClass("FADE");
        }
        if(_this.hasClass("FLIPLEFT")){
            _this.removeClass("FLIPLEFT");
        }
        if(_this.hasClass("POP")){
            _this.removeClass("POP");
        }
        if(_this.hasClass("SWITCH")){
            _this.removeClass("SWITCH");
        }
        if(_this.hasClass("ROTATE")){
            _this.removeClass("ROTATE");
        }
        switch(type){
            case 'SLIDELEFT':
                    _this.addClass("SLIDELEFT");
                break;
            case 'SLIDEUP':
                    _this.addClass("SLIDEUP");
                break;
            case 'FADE':
                    _this.addClass("FADE");
                break;
            case 'FLIPLEFT':
                    _this.addClass("FLIPLEFT");
                break;
            case 'POP':
                _this.addClass("POP");
                break;
            case 'SWITCH':
                _this.addClass("SWITCH");
                break;
            case 'ROTATE':
                _this.addClass("ROTATE");
                break;
            case '无':
                break;
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    }
})(jQuery);
