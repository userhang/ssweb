/**
 * Created by Jane Maple on 14-5-9.
 */
/****************************************/
/* 描述：柱形图（zhuxingtu）各种操作封装
 /****************************************/
var ssM = $.ssm();
(function ($) {

    /****************************************/
    /* 各种属性get函数
     /****************************************/
//
//
////	获取当前列表项内容
//    $.fn.getZhuxingtuTitle = function () {
//        var _this=$(this),
//            res='';
//        if(_this.find("a").length!=0){
//            res = _this.find("a").text();
//        }else{
//            var tmp= eval("/" + _this.find("small").text() + "/ig");
//            res = this.text().replace(tmp, '');
//        }
//        return res;
//    }


    /****************************************/
    /* 各种操作函数
     /****************************************/
    //刷新柱形图
    $.fn.refzhuxingtu = function () {
        var _this=$(this);
        //_this.parent().html("");
        _this.html("");
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };

    //改变柱形图选择的某列的名称
    $.fn.changeZhuxingtuItemName=function (zhuxingtuItemName){
        var args={
            zhuxingtuItemName:zhuxingtuItemName
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //改变柱形图某列的数值
    $.fn.changeZhuxingtuItemValue=function (zhuxingtuItemValue){
        var args={
            zhuxingtuItemValue:zhuxingtuItemValue
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

})(jQuery);
