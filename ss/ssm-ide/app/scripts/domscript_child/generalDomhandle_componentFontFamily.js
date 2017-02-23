/*
 * Created by fd on 2015/4/24.
 */
/***********************************************
 * 描述：组件文字修改（componentFontFamily）各种操作封装
 ***********************************************/
(function ($) {

    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取当前组件字体
    $.fn.getComponentFontFamily = function () {
        var _this=$(this),
            res='';
        //1
        if(_this.hasClass('defaultFontFamily')){
            res = {
                name:'默认',
                val:'defaultFontFamily'
            };
        }
        //2
        else if(_this.hasClass('HeiTi')){
            res = {
                name:'黑体',
                val:'HeiTi'
            };
        }
        //3
        else if(_this.hasClass('SongTi')){
            res = {
                name:'宋体',
                val:'SongTi'
            };
        }
        //4
        else if(_this.hasClass('Arial')){
            res = {
                name:'Arial',
                val:'Arial'
            };
        }
        //5
        else if(_this.hasClass('ArialBlack')){
            res = {
                name:'ArialBlack',
                val:'ArialBlack'
            };
        }
        //6
        else if(_this.hasClass('ArialNarrow')){
            res = {
                name:'ArialNarrow',
                val:'ArialNarrow'
            };
        }
        //7
        else if(_this.hasClass('Verdana')){
            res = {
                name:'Verdana',
                val:'Verdana'
            };
        }
        //8
        else if(_this.hasClass('Georgia')){
            res = {
                name:'Georgia',
                val:'Georgia'
            };
        }
        //9
        else if(_this.hasClass('TimesNewRoman')){
            res = {
                name:'TimesNewRoman',
                val:'TimesNewRoman'
            };
        }
        //10
        else if(_this.hasClass('TrebuchetMS')){
            res = {
                name:'TrebuchetMS',
                val:'TrebuchetMS'
            };
        }
        //11
        else if(_this.hasClass('CourierNew')){
            res = {
                name:'CourierNew',
                val:'CourierNew'
            };
        }
        //12
        else if(_this.hasClass('Impact')){
            res = {
                name:'Impact',
                val:'Impact'
            };
        }
        //13
        else if(_this.hasClass('ComicSansMS')){
            res = {
                name:'ComicSansMS',
                val:'ComicSansMS'
            };
        }
        //14
        else if(_this.hasClass('Tahoma')){
            res = {
                name:'Tahoma',
                val:'Tahoma'
            };
        }
        //15
        else if(_this.hasClass('Courier')){
            res = {
                name:'Courier',
                val:'Courier'
            };
        }
        //16
        else if(_this.hasClass('LucidaSansUnicode')){
            res = {
                name:'LucidaSansUnicode',
                val:'LucidaSansUnicode'
            };
        }
        //17
        else if(_this.hasClass('Symbol')){
            res = {
                name:'Symbol',
                val:'Symbol'
            };
        }
        //18
        else if(_this.hasClass('PalatinoLinotype')){
            res = {
                name:'PalatinoLinotype',
                val:'PalatinoLinotype'
            };
        }

        //19
        else if(_this.hasClass('LucidaConsole')){
            res = {
                name:'LucidaConsole',
                val:'LucidaConsole'
            };
        }
        //20
        else if(_this.hasClass('Garamond')){
            res = {
                name:'Garamond',
                val:'Garamond'
            };
        }
        //21
        else if(_this.hasClass('MSSansSerif')){
            res = {
                name:'MSSansSerif',
                val:'MSSansSerif'
            };
        }
        //22
        else if(_this.hasClass('MSSerif')){
            res = {
                name:'MSSerif',
                val:'MSSerif'
            };
        }
        //23
        else if(_this.hasClass('BookmanOldStyle')){
            res = {
                name:'BookmanOldStyle',
                val:'BookmanOldStyle'
            };
        }
        else{
            res = {
                name:'默认',
                val:'defaultFontFamily'
            }
        }
        //res = _this.css("font-family");
        console.log('eeeeeeeeeeeeeeeeeeeeee' + res.name +''+ _this.html());
        return res;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //修改组件字体
    //参数：类型参数、第几个、名字
    $.fn.changeComponentFontFamily = function (type, num, name) {
        if(num == undefined){
            num = -10;
        }
        console.log("修改文字type:" + type);
        //console.log('wwwwwwwwwwwwwwwwwwwwwwww' + type);
        //console.log('wwwwwwwwwwwwwwwwwwwwwwww1+' + num);
        var _this=$(this);
        //console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrr1111+' + _this.html());
        //1
        if(_this.hasClass("defaultFontFamily")){
            _this.removeClass("defaultFontFamily");
        }
        //2
        if(_this.hasClass("HeiTi")){
            _this.removeClass("HeiTi");
        }
        //3
        if(_this.hasClass("SongTi")){
            _this.removeClass("SongTi");
        }
        //4
        if(_this.hasClass("Arial")){
            _this.removeClass("Arial");
        }
        //5
        if(_this.hasClass("ArialBlack")){
            _this.removeClass("ArialBlack");
        }
        //6
        if(_this.hasClass("ArialNarrow")){
            _this.removeClass("ArialNarrow");
        }
        //7
        if(_this.hasClass("Verdana")){
            _this.removeClass("Verdana");
        }
        //8
        if(_this.hasClass("Georgia")){
            _this.removeClass("Georgia");
        }
        //9
        if(_this.hasClass("TimesNewRoman")){
            _this.removeClass("TimesNewRoman");
        }
        //10
        if(_this.hasClass("TrebuchetMS")){
            _this.removeClass("TrebuchetMS");
        }
        //11
        if(_this.hasClass("CourierNew")){
            _this.removeClass("CourierNew");
        }
        //12
        if(_this.hasClass("Impact")){
            _this.removeClass("Impact");
        }
        //13
        if(_this.hasClass("ComicSansMS")){
            _this.removeClass("ComicSansMS");
        }
        //14
        if(_this.hasClass("Tahoma")){
            _this.removeClass("Tahoma");
        }
        //15
        if(_this.hasClass("Courier")){
            _this.removeClass("Courier");
        }
        //16
        if(_this.hasClass("LucidaSansUnicode")){
            _this.removeClass("LucidaSansUnicode");
        }
        //17
        if(_this.hasClass("Symbol")){
            _this.removeClass("Symbol");
        }
        //18
        if(_this.hasClass("PalatinoLinotype")){
            _this.removeClass("PalatinoLinotype");
        }
        //19
        if(_this.hasClass("LucidaConsole")){
            _this.removeClass("LucidaConsole");
        }
        //20
        if(_this.hasClass("Garamond")){
            _this.removeClass("Garamond");
        }
        //21
        if(_this.hasClass("MSSansSerif")){
            _this.removeClass("MSSansSerif");
        }
        //22
        if(_this.hasClass("MSSerif")){
            _this.removeClass("MSSerif");
        }
        //23
        if(_this.hasClass("BookmanOldStyle")){
            _this.removeClass("BookmanOldStyle");
        }

        switch(type){
            //1
            case 'defaultFontFamily':
                _this.addClass("defaultFontFamily");
                break;
            //2
            case 'HeiTi':
                _this.addClass("HeiTi");
                break;
            //3
            case 'SongTi':
                _this.addClass("SongTi");
                break;
            //4
            case 'Arial':
                _this.addClass("Arial");
                break;
            //5
            case 'ArialBlack':
                _this.addClass("ArialBlack");
                break;
            //6
            case 'ArialNarrow':
                _this.addClass("ArialNarrow");
                break;
            //7
            case 'Verdana':
                _this.addClass("Verdana");
                break;
            //8
            case 'Georgia':
                _this.addClass("Georgia");
                break;
            //9
            case 'TimesNewRoman':
                _this.addClass("TimesNewRoman");
                break;
            //10
            case 'TrebuchetMS':
                _this.addClass("TrebuchetMS");
                break;
            //11
            case 'CourierNew':
                _this.addClass("CourierNew");
                break;
            //12
            case 'Impact':
                _this.addClass("Impact");
                break;
            //13
            case 'ComicSansMS':
                _this.addClass("ComicSansMS");
                break;
            //14
            case 'Tahoma':
                _this.addClass("Tahoma");
                break;
            //15
            case 'Courier':
                _this.addClass("Courier");
                break;
            //16
            case 'LucidaSansUnicode':
                _this.addClass("LucidaSansUnicode");
                break;
            //17
            case 'Symbol':
                _this.addClass("Symbol");
                break;
            //18
            case 'PalatinoLinotype':
                _this.addClass("PalatinoLinotype");
                break;
            //19
            case 'LucidaConsole':
                _this.addClass("LucidaConsole");
                break;
            //20
            case 'Garamond':
                _this.addClass("Garamond");
                break;
            //21
            case 'MSSansSerif':
                _this.addClass("MSSansSerif");
                break;
            //22
            case 'MSSerif':
                _this.addClass("MSSerif");
                break;
            //23
            case 'BookmanOldStyle':
                _this.addClass("BookmanOldStyle");
                break;

        }
        if(num == -10){
            //这里不需要参数也可以实现，不知道有没有参数会有什么影响
            //console.log('fdfdfdfd' + _this.parents('.selected').find('.content').attr('seq'));
            _this = _this.parents('.selected').find('.content');
            sendMessage_funcpanelinit(_this);
        }
        else{
            //使用关联让json对象的键为一个字符串变量
            var jsonName =name.toString();
            var args = {};
            args[jsonName] = num;
            console.log(args);
            console.log(_this.parents('.content').html());
            sendMessage_funcpanelinit(_this.parents('.content'), _this.parents('.content').getInitAttr(args));
            //sendMessage_funcpanelinit(_this.parents('.content'));
        }


    };




})(jQuery);
