/**
 * Created by fd on 2015/11/5.
 */
/******************************************************
 * 描述：通用修改文字大小（changeComponentFontSize）的功能的具体操作方法
 ****************************************************/
(function($){
    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取字体大小
    $.fn.getComponentContentFontSize = function () {
        var res = $(this).css('font-size');
        res = res.replace("px", "");
        res = parseInt(res);
        return res;
    };


    /****************************************/
    /* 各种操作函数
     /****************************************/
    $.fn.changeComponentContentFontSize = function (componentContentFontSize, num, name) {
        var _this = $(this);
        var size = componentContentFontSize;
        _this.css('font-size', size);
        _this = _this.parents('.selected').find(".content");
        if(num != undefined){
            //生成json数据对象
            //格式：  <数字>：序号
            var jsonName =name.toString();
            var args = {};
            args[jsonName] = num+1;
            sendMessage_funcpanelinit(_this, _this.getInitAttr(args));
        }else{
            sendMessage_funcpanelinit(_this);
        }

    };
})(jQuery);