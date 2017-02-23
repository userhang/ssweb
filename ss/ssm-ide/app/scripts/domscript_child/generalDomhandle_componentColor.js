/**
 * Created by fd on 2015/4/24.
 */
/******************************************************
 * 描述：通用修改颜色（changeComponentColor）的功能的具体操作方法
 ****************************************************/
(function ($) {
    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取文本颜色
    $.fn.getComponentContentColor = function () {
        var rgb=$(this).css('color'),
            res='';
//        console.log("文本颜色为：" + rgb);
//        if(rgb == undefined){
//            return '#ffffff';
//        }
        console.log('====================================获取文本颜色====================================');
        console.log('【1】选取的对象为：' + $(this).html());
        console.log('【2】文本颜色为:' + rgb);
        console.log('【3】rgb类型为：' + typeof(rgb));
        if($(this).html() == undefined){
            return;
        }
        if (rgb[0] == '#')
            return rgb;
        function zero_fill_hex(num, digits) {
            var s = num.toString(16);
            while (s.length < digits)
                s = "0" + s;
            return s;
        }
        var ds = rgb.split(/\D+/);
        var decimal = Number(ds[1]) * 65536 + Number(ds[2]) * 256 + Number(ds[3]);
        res = "#" + zero_fill_hex(decimal, 6);
        console.log('【4】转换之后的文本rgb:' + res);
        console.log('====================================获取文本颜色结束====================================');
        return res;
    };

    //获取背景颜色
    $.fn.getComponentBackgroundColor = function () {
        console.log('====================================获取背景颜色====================================');
        var rgb=$(this).css('background-color'),
            res='';
        console.log('【1】选取的对象为：' + $(this).html());
        console.log('【2】背景颜色为:' + rgb);
        console.log('【3】rgb类型为：' + typeof(rgb));
        if($(this).html() == undefined){
            return;
        }
        if (rgb[0] == '#')
            return rgb;
        function zero_fill_hex(num, digits) {
            var s = num.toString(16);
            while (s.length < digits)
                s = "0" + s;
            return s;
        }
        var ds = rgb.split(/\D+/);
        var decimal = Number(ds[1]) * 65536 + Number(ds[2]) * 256 + Number(ds[3]);
        res = "#" + zero_fill_hex(decimal, 6);
        console.log('【4】转换之后的背景rgb：' + res);
        console.log('====================================获取背景颜色结束====================================');
        return res;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //修改组件文字颜色
    $.fn.changeComponentContentColor = function (componentContentColor, num, name) {
        console.log('====================================修改组件文字颜色====================================');
        var _this=$(this),
            color=componentContentColor,
            small='';
        console.log('【1】选取的对象为：' + $(this).html());
        console.log('【2】要修改成的颜色为:' + color);
        console.log('【3】修改的序列号为:' + num);
        console.log('【4】属性的name为：' + name);

        //_this = _this.parents('.selected').find('.content');
        _this.css('color', color);
        _this = _this.parents('.selected').find(".content");
        if(num != undefined){
            //生成json数据对象
            //格式：  <数字>：序号
            var jsonName =name.toString();
            var args = {};
            args[jsonName] = num+1;
            console.log('====================================修改组件文字颜色结束1====================================');
//            console.log(_this.attr("type"));
            sendMessage_funcpanelinit(_this, _this.getInitAttr(args));
        }else{
            console.log('====================================修改组件文字颜色结束2====================================');
            sendMessage_funcpanelinit(_this);
        }
        //sendMessage_funcpanelinit(_this);

    };

    //修改组件背景颜色
    $.fn.changeComponentBackgroundColor = function (componentBackgroundColor, num, name) {
        console.log('====================================修改组件背景颜色====================================');
        var _this=$(this),
            color=componentBackgroundColor,
            small='';
        console.log('【1】选取的对象为：' + $(this).html());
        console.log('【2】要修改成的颜色为:' + color);
        console.log('【3】修改的序列号为:' + num);
        console.log('【4】属性的name为：' + name);

        _this.css('background-color', color);
        _this = _this.parents('.selected').find(".content");

        if(num != undefined){
            var jsonName =name.toString();
            var args = {};
            args[jsonName] = num + 1;
            console.log('====================================修改组件背景颜色结束1====================================');
            console.log("args = " + args);
            console.log(_this.attr("type"));
            sendMessage_funcpanelinit(_this, _this.getInitAttr(args));
        }else{

            //这里this应该是要current下面第一个元素
            console.log('====================================修改组件背景颜色结束2====================================');
            sendMessage_funcpanelinit($(this));
        }
        //sendMessage_funcpanelinit(_this);

    };



})(jQuery);