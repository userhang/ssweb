/**
 * Created by fd on 2014/10/14.
 */
/****************************************/
/* 描述：时间组件（timeshow）各种操作封装
 /****************************************/
//var ssM = $.ssm();
(function ($) {
    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取背景颜色
   /* $.fn.getFontColor = function () {
        var FontNumColor;
        if($(this).hasClass("WHITETIMESHOW")){
            FontNumColor={
                name:'白色',
                val:'white'
            };
        }
        else if($(this).hasClass("GREENTIMESHOW")){
            FontNumColor={
                name:'绿色',
                val:'green'
            };
        }
        else if($(this).hasClass("GRAYTIMESHOW")){
            FontNumColor={
                name:'灰色',
                val:'gray'
            };
        }else if($(this).hasClass("REDTIMESHOW")){
            FontNumColor={
                name:'红色',
                val:'red'
            };
        }else if($(this).hasClass("BLUETIMESHOW")){
            FontNumColor={
                name:'蓝色',
                val:'blue'
            };
        }else if($(this).hasClass("YELLOWTIMESHOW")){
            FontNumColor={
                name:'黄色',
                val:'yellow'
            };
        }
        return FontNumColor;
    };*/

    //获取高度
    $.fn.getTimeshowHeight = function () {
        var _this=$(this),
            res;
        res = _this.height();
        return (res);
    };

    //获取宽度
    $.fn.getTimeshowWidth = function () {
        var _this=$(this),
            res;
        res = _this.width();
        return (res);
    };

    //获取主题
    $.fn.getTimeshowType = function () {
        var timeshowType;
        if($(this).hasClass("timeShow_1")){
            timeshowType={
                name:'科技',
                val:'keji'
            };
        }else{
            timeshowType={
                name:'悬浮',
                val:'xuanfu'
            };
        }
        return timeshowType;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //改变背景颜色
   /* $.fn.changeTimeshowNumColor = function (type) {
        var _this=$(this);
        switch(type){
            case 'white':
                if(_this.hasClass("REDTIMESHOW")){
                    _this.removeClass("REDTIMESHOW");
                    _this.addClass("WHITETIMESHOW");
                }
                else if(_this.hasClass("GRAYTIMESHOW")){
                    _this.removeClass("GRAYTIMESHOW");
                    _this.addClass("WHITETIMESHOW");
                }
                else if(_this.hasClass("GREENTIMESHOW")){
                    _this.removeClass("GREENTIMESHOW");
                    _this.addClass("WHITETIMESHOW");
                }
                else if(_this.hasClass("BLUETIMESHOW")){
                    _this.removeClass("BLUETIMESHOW");
                    _this.addClass("WHITETIMESHOW");
                }
                else if(_this.hasClass("YELLOWTIMESHOW")){
                    _this.removeClass("YELLOWTIMESHOW");
                    _this.addClass("WHITETIMESHOW");
                }
                break;
            case 'gray':
                if(_this.hasClass("REDTIMESHOW")){
                    _this.removeClass("REDTIMESHOW");
                    _this.addClass("GRAYTIMESHOW");
                }
                else if(_this.hasClass("WHITETIMESHOW")){
                    _this.removeClass("WHITETIMESHOW");
                    _this.addClass("GRAYTIMESHOW");
                }
                else if(_this.hasClass("GREENTIMESHOW")){
                    _this.removeClass("GREENTIMESHOW");
                    _this.addClass("GRAYTIMESHOW");
                }
                else if(_this.hasClass("BLUETIMESHOW")){
                    _this.removeClass("BLUETIMESHOW");
                    _this.addClass("GRAYTIMESHOW");
                }
                else if(_this.hasClass("YELLOWTIMESHOW")){
                    _this.removeClass("YELLOWTIMESHOW");
                    _this.addClass("GRAYTIMESHOW");
                }
                break;
            case 'green':
                if(_this.hasClass("REDTIMESHOW")){
                    _this.removeClass("REDTIMESHOW");
                    _this.addClass("GREENTIMESHOW");
                }
                else if(_this.hasClass("WHITETIMESHOW")){
                    _this.removeClass("WHITETIMESHOW");
                    _this.addClass("GREENTIMESHOW");
                }
                else if(_this.hasClass("GRAYTIMESHOW")){
                    _this.removeClass("GRAYTIMESHOW");
                    _this.addClass("GREENTIMESHOW");
                }
                else if(_this.hasClass("BLUETIMESHOW")){
                    _this.removeClass("BLUETIMESHOW");
                    _this.addClass("GREENTIMESHOW");
                }
                else if(_this.hasClass("YELLOWTIMESHOW")){
                    _this.removeClass("YELLOWTIMESHOW");
                    _this.addClass("GREENTIMESHOW");
                }
                break;
            case 'red':
                if(_this.hasClass("GRAYTIMESHOW")){
                    _this.removeClass("GRAYTIMESHOW");
                    _this.addClass("REDTIMESHOW");
                }
                else if(_this.hasClass("WHITETIMESHOW")){
                    _this.removeClass("WHITETIMESHOW");
                    _this.addClass("REDTIMESHOW");
                }
                else if(_this.hasClass("GREENTIMESHOW")){
                    _this.removeClass("GREENTIMESHOW");
                    _this.addClass("REDTIMESHOW");
                }
                else if(_this.hasClass("BLUETIMESHOW")){
                    _this.removeClass("BLUETIMESHOW");
                    _this.addClass("REDTIMESHOW");
                }
                else if(_this.hasClass("YELLOWTIMESHOW")){
                    _this.removeClass("YELLOWTIMESHOW");
                    _this.addClass("REDTIMESHOW");
                }
                break;
            case 'blue':
                if(_this.hasClass("GRAYTIMESHOW")){
                    _this.removeClass("GRAYTIMESHOW");
                    _this.addClass("BLUETIMESHOW");
                }
                else if(_this.hasClass("WHITETIMESHOW")){
                    _this.removeClass("WHITETIMESHOW");
                    _this.addClass("BLUETIMESHOW");
                }
                else if(_this.hasClass("GREENTIMESHOW")){
                    _this.removeClass("GREENTIMESHOW");
                    _this.addClass("BLUETIMESHOW");
                }
                else if(_this.hasClass("REDTIMESHOW")){
                    _this.removeClass("REDTIMESHOW");
                    _this.addClass("BLUETIMESHOW");
                }
                else if(_this.hasClass("YELLOWTIMESHOW")){
                    _this.removeClass("YELLOWTIMESHOW");
                    _this.addClass("BLUETIMESHOW");
                }
                break;
            case 'yellow':
                if(_this.hasClass("GRAYTIMESHOW")){
                    _this.removeClass("GRAYTIMESHOW");
                    _this.addClass("YELLOWTIMESHOW");
                }
                else if(_this.hasClass("WHITETIMESHOW")){
                    _this.removeClass("WHITETIMESHOW");
                    _this.addClass("YELLOWTIMESHOW");
                }
                else if(_this.hasClass("GREENTIMESHOW")){
                    _this.removeClass("GREENTIMESHOW");
                    _this.addClass("YELLOWTIMESHOW");
                }
                else if(_this.hasClass("REDTIMESHOW")){
                    _this.removeClass("REDTIMESHOW");
                    _this.addClass("YELLOWTIMESHOW");
                }
                else if(_this.hasClass("BLUETIMESHOW")){
                    _this.removeClass("BLUETIMESHOW");
                    _this.addClass("YELLOWTIMESHOW");
                }
                break;
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    };*/

    //修改高度
    $.fn.changeTimeshowHeight = function (height) {
        var _this=$(this);
        _this.css("height",height);
        sendMessage_funcpanelinit($(this));
    };

    //修改宽度
    $.fn.changeTimeshowWidth = function (width) {
        var _this=$(this);
        _this.css("width",width);
        sendMessage_funcpanelinit($(this));
    };

    //改变主题
    $.fn.changeTimeshowType = function (timeshowItemNo,type) {
        var _this=$(this);
        switch(type){
            case 'xuanfu':
                if(_this.hasClass("timeShow_1") && _this.children('.timeNum').hasClass('timeNum_1')){
                    _this.removeClass("timeShow_1");
                    _this.children('.timeNum').removeClass("timeNum_1");
                }
                break;
            case 'keji':
                _this.addClass('timeShow_1');
                _this.children('.timeNum').addClass('timeNum_1');
                break;
        }
        var args={
            timeshowItemNo:timeshowItemNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    }
})(jQuery);