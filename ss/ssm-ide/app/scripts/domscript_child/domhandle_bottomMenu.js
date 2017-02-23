/**
 * Created by fd on 2014/12/31.
 */
/****************************************/
/* 描述：下边栏（bottomMenu）各种操作封装
 /****************************************/
(function($){
    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取子项个数
    $.fn.getBottomMenuChildNum = function () {
        $(this).children('div').wrap('<a class="wrap_bottomMenu_a" href="#aaa"></a>');
        var childNum=$(this).children().length;
       // alert(childNum);
        return childNum;
    };

    //获取当前子项文字内容
    $.fn.getBottomMenuContent = function () {
        var _this=$(this),
            res='';
        res = _this.children('div').children('small').text();
        return res;
    };

    //获取子项的链接
    $.fn.getBottomMenuItemHrefContent = function () {
        var _this=$(this);
        var hrefContent='';
        aLabelHrefList.aLabelEffect();
        hrefContent=_this.attr("href");
        console.log('fdfdfdfdfdfdf' + hrefContent);
        if(hrefContent){
            hrefContent=hrefContent.replace(/#/,"");
        }
        aLabelHrefList.aLabelDisable();
        return hrefContent;
    };

    //获取子项图标
    $.fn.getBottomMenuType = function () {
        var bottomMenuType;
        var _this=$(this).children('div');
        if(_this.hasClass("SDpanel")){
            bottomMenuType={
                name:'面板',
                val:'SDpanel'
            };
        }
        else if(_this.hasClass("SDpc")){
            bottomMenuType={
                name:'电脑',
                val:'SDpc'
            };
        }
        else if(_this.hasClass("SDcheck")){
            bottomMenuType={
                name:'对号',
                val:'SDcheck'
            };
        }
        else if(_this.hasClass("SDphone")){
            bottomMenuType={
                name:'手机',
                val:'SDphone'
            };
        }
        else if(_this.hasClass("SDhome")){
            bottomMenuType={
                name:'主页',
                val:'SDhome'
            };
        }
        else if(_this.hasClass("SDerror")){
            bottomMenuType={
                name:'错误',
                val:'SDerror'
            };
        }
        else if(_this.hasClass("SDadd")){
            bottomMenuType={
                name:'添加',
                val:'SDadd'
            };
        }
        else if(_this.hasClass("SDstar")){
            bottomMenuType={
                name:'星星',
                val:'SDstar'
            };
        }
        else if(_this.hasClass("SDmail")){
            bottomMenuType={
                name:'邮件',
                val:'SDmail'
            };
        }
        else if(_this.hasClass("SDheart")){
            bottomMenuType={
                name:'红心',
                val:'SDheart'
            };
        }
        else if(_this.hasClass("SDsetting")){
            bottomMenuType={
                name:'设置',
                val:'SDsetting'
            };
        }
        else if(_this.hasClass("SDnote")){
            bottomMenuType={
                name:'记录',
                val:'SDnote'
            };
        }
        else if(_this.hasClass("SDdate")){
            bottomMenuType={
                name:'日期',
                val:'SDdate'
            };
        }
        else if(_this.hasClass("SDearth")){
            bottomMenuType={
                name:'地球',
                val:'SDearth'
            };
        }
        else if(_this.hasClass("SDsound")){
            bottomMenuType={
                name:'声音',
                val:'SDsound'
            };
        }
        else if(_this.hasClass("SDitem")){
            bottomMenuType={
                name:'选项',
                val:'SDitem'
            };
        }
        else{
            bottomMenuType={
                name:'空',
                val:''
            };
        }
        return bottomMenuType;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //子项个数+1
    $.fn.addBottomMenuNum = function (options) {
        var _this=$(this);
        if(_this.children().length < 6){
            _this.append(_this.children(':last')[0].outerHTML);
        }
        sendMessage_funcpanelinit($(this));
    };

    //子项个数-1
    $.fn.cutBottomMenuNum = function (options) {
        var _this=$(this);
        if(_this.children().length>1){
            _this.children(':last').remove();
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    };

    //改变选的是第几项列表项时
    $.fn.changeBottomMenuItemNo = function (bottomMenuItemNo) {
        var _this=$(this);
        var args={
            bottomMenuItemNo:bottomMenuItemNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变子项文字内容
    $.fn.changeBottomMenuContent = function (num, bottomMenuContent) {

        var _this = $(this).children()[num-1];
        var content =bottomMenuContent;
        if($.nodeName(_this, 'DIV')){
            /*这里需要把html对象转换成jquery对象才能使用jquery方法
            $(_this)
            */

            $(_this).children('small').text(content);
        }
        else if($.nodeName(_this, 'a')){
            $(_this).children('div').children('small').text(content);
        }

        console.log('num = ' + num);
        sendMessage_funcpanelinit(_this, _this.getInitAttr(num));
    };

    //改变子项链接
    $.fn.changeBottomMenuItemHrefContent = function (num,bottomMenuItemHrefContent) {
        var _this=$(this).children('a').eq(num-1);

        aLabelHrefList.aLabelEffect();
        _this.attr("href","#"+bottomMenuItemHrefContent);
        aLabelHrefList.aLabelDisable();
        var args={
            bottomMenuItemNo:num
        };
        sendMessage_funcpanelinit($(this), $(this).getInitAttr(args));
    };

    //改变子项图标
    $.fn.changeBottomMenuType = function (type,bottomMenuItemNo) {
        var _this=$(this).children().eq(bottomMenuItemNo-1).find('.bottom_pic').children().eq(0);
        console.log(_this.html()+"ssss"+bottomMenuItemNo);
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
            bottomMenuItemNo:bottomMenuItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

})(jQuery);