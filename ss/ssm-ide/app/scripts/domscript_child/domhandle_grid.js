/**
 * Created by suhuifen on 14-5-24.
 */

/****************************************/
/* grid各种操作封装
 /****************************************/


(function ($) {


    /****************************************/
    /* 各种属性get函数
     /****************************************/
//	获取网格类型
    $.fn.getGridType = function () {
        var _this = $(this);
        var gridType;
         if(_this.hasClass("UI-GRID-A")){
             gridType = {
                 name:'二列网格',
                 val:'2'
             };
         }else if(this.hasClass("UI-GRID-B")){
             gridType = {
                 name:'三列网格',
                 val:'3'
             };
         }else if(this.hasClass("UI-GRID-C")){
             gridType = {
                 name:'四列网格',
                 val:'4'
             };
         }else if(this.hasClass("UI-GRID-D")){
             gridType = {
                 name:'五列网格',
                 val:'5'
             };
         }
        return gridType;
    }
//	获取网格行数
    $.fn.getGridRow = function () {
        var _this = $(this),
            gridRow = 0;
        if(_this.attr("CLASS") == "UI-GRID-A curselected"){
            gridRow = parseInt(_this.children().length / 2) + 1;
        }else if(_this.attr("CLASS") == "UI-GRID-B curselected"){
            gridRow = parseInt(_this.children().length / 3) + 1;
        }else if(_this.attr("CLASS") == "UI-GRID-C curselected"){
            gridRow = parseInt(_this.children().length / 4) + 1;
        }else if(_this.attr("CLASS") == "UI-GRID-D curselected"){
            gridRow = parseInt(_this.children().length / 5) + 1;
        }
        return gridRow;

    }
//	获取格子高度
    $.fn.getGridCellHeight= function () {
        var _this = $(this),
            gridCellHeight;
        gridCellHeight = _this.children().height();
        return  gridCellHeight;
    }
//	获取是否有格子框
    $.fn.getHasGridBoder= function () {
        var _this = $(this);
        return _this.children().hasClass("HPOS")?'yes':'no';
    }
    /****************************************/
    /* 各种操作函数
     /****************************************/

//	改变列表类型
    $.fn.changeGridType = function (gridType) {
        var _this=$(this),
            type = null;
        type = _this.attr("CLASS")
        _this.removeClass(type);
        switch(gridType){
            case '2':
                _this.addClass("UI-GRID-A curselected");
                _this.html('<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' );
                break;
            case '3':
                _this.addClass("UI-GRID-B curselected");
                _this.html('<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable "></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>')
                 break;
            case '4':
                _this.addClass("UI-GRID-C curselected");
                _this.html( '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' )
                break;
            case '5':
                _this.addClass("UI-GRID-D curselected");
                _this.html( '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-E HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-E HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>')
                break;
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    }
//网格行+1
    $.fn.addgr = function (gridCellHeight) {
        var _this = $(this),
            type = null;
        type = _this.attr("CLASS");
        if(type == "UI-GRID-A curselected"){
            if(_this.children(":last").hasClass("UI-BLOCK-A")){
                _this.append('<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>')
            }else{
                _this.append ( '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>')
            }
        }else if(type == "UI-GRID-B curselected"){
            if(_this.children(":last").hasClass("UI-BLOCK-A")){
                _this.append('<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' )
            }else if(_this.children(":last").hasClass("UI-BLOCK-B")){
                _this.append (  '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>')
            }else {
                _this.append ('<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>')
            }
        }else if(type == "UI-GRID-C curselected"){
            if(_this.children(":last").hasClass("UI-BLOCK-A")){
                _this.append( '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>')
            }else if(_this.children(":last").hasClass("UI-BLOCK-B")){
                _this.append (  '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>')
            }else if(_this.children(":last").hasClass("UI-BLOCK-C")){
                _this.append ( '<div CLASS="UI-BLOCK-D HPOS "></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>')
            }
            else{
                _this.append (   '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>')
            }
        }else if(type == "UI-GRID-D curselected"){
            if(_this.children(":last").hasClass("UI-BLOCK-A")){
                _this.append( '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-E HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-E HPOS sortable"></div>')
            }else if(_this.children(":last").hasClass("UI-BLOCK-B")){
                _this.append (  '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-E HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-E HPOS sortable"></div>')
            }else if(_this.children(":last").hasClass("UI-BLOCK-C")){
                _this.append ( '<div CLASS="UI-BLOCK-D HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-E HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-E HPOS sortable"></div>')
            }
            else if(_this.children(":last").hasClass("UI-BLOCK-D")){
                _this.append ( '<div CLASS="UI-BLOCK-E HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-E HPOS sortable"></div>')
            }else{
                _this.append (  '<div CLASS="UI-BLOCK-A HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-B HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-C HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-D HPOS sortable"></div>' +
                    '<div CLASS="UI-BLOCK-E HPOS sortable"></div>')
            }
        }
        _this.children().height(gridCellHeight);
        var args={
            gridCellHeight:gridCellHeight
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    }
//网格行-1
    $.fn.cutgr = function () {
        var _this=$(this),
            type = _this.attr("CLASS"),
            num = 0;
        if(type == "UI-GRID-A curselected"){
            num = _this.children().length % 2;
            if(num == 0){
                num = 2;
            }
        }else if(type == "UI-GRID-B curselected"){
            num = _this.children().length % 3;
            if(num == 0){
                num = 3;
            }
        }else if(type == "UI-GRID-C curselected"){
            num = _this.children().length % 4;
            if(num == 0){
                num = 4;
            }
        }else if(type == "UI-GRID-D curselected"){
            num = _this.children().length % 5;
            if(num == 0){
                num = 5;
            }
        }
        for(var i = 0; i < num; i++){
            _this.children(":last").remove();
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    }
//网格列+1
    $.fn.addgl = function (gridCellHeight) {
        var _this = $(this),
            type = null;
        type = _this.attr("CLASS");
        if(type == "UI-GRID-A curselected"){
            _this.removeClass(type);
            _this.addClass("UI-GRID-B curselected");
            _this.children(".UI-BLOCK-B").after( '<div CLASS="UI-BLOCK-C HPOS sortable"></div>');
        }else if(type == "UI-GRID-B curselected"){
            _this.removeClass(type);
            _this.addClass("UI-GRID-C curselected");
            _this.children(".UI-BLOCK-C").after( '<div CLASS="UI-BLOCK-D HPOS sortable"></div>');

        }else if(type == "UI-GRID-C curselected"){
            _this.removeClass(type);
            _this.addClass("UI-GRID-D curselected");
            _this.children(".UI-BLOCK-D").after( '<div CLASS="UI-BLOCK-E HPOS sortable"></div>');
        }else if(type == "UI-GRID-D curselected"){
            alert("已为最大网格布局");
        }
        _this.children().height(gridCellHeight);
        var args={
            gridCellHeight:gridCellHeight
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    }
//网格列-1
    $.fn.cutgl = function () {
        var _this=$(this),
            type = _this.attr("CLASS"),
            num = 0;
        if(type == "UI-GRID-D curselected"){
            _this.children(".UI-BLOCK-E").remove();
            _this.removeClass(type);
            _this.addClass("UI-GRID-C curselected");
        }else if(type == "UI-GRID-C curselected"){
            _this.children(".UI-BLOCK-D").remove();
            _this.removeClass(type);
            _this.addClass("UI-GRID-B curselected");
        }else if(type == "UI-GRID-B curselected"){
            _this.children(".UI-BLOCK-C").remove();
            _this.removeClass(type);
            _this.addClass("UI-GRID-A curselected");
        }else if(type == "UI-GRID-A curselected"){
            alert("已为最小网格布局")
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    }

//网格+1
    $.fn.addgc = function (gridCellHeight ) {
        var _this=$(this),
            type = _this.attr("CLASS"),
            num = 0;
        if(type == "UI-GRID-A curselected"){
            num = _this.children().length % 2;
            if(num == 0){
                 _this.append('<div CLASS="UI-BLOCK-A HPOS sortable"></div>');
            }else{
                _this.append('<div CLASS="UI-BLOCK-B HPOS sortable"></div>');
            }
        }else if(type == "UI-GRID-B curselected"){
            num = _this.children().length % 3;
            if(num == 0){
                _this.append('<div CLASS="UI-BLOCK-A HPOS sortable"></div>');
            }else if(num == 1){
                _this.append('<div CLASS="UI-BLOCK-B HPOS sortable"></div>');
            }else{
                _this.append('<div CLASS="UI-BLOCK-C HPOS sortable"></div>');
            }
        }else if(type == "UI-GRID-C curselected"){
            num = _this.children().length % 4;
            if(num == 0){
                _this.append('<div CLASS="UI-BLOCK-A HPOS sortable"></div>');
            }else if(num == 1){
                _this.append('<div CLASS="UI-BLOCK-B HPOS sortable"></div>');
            }else if(num == 2){
                _this.append('<div CLASS="UI-BLOCK-C HPOS sortable"></div>');
            }else{
                _this.append('<div CLASS="UI-BLOCK-D HPOS sortable"></div>');
            }
        }else if(type == "UI-GRID-D curselected"){
            num = _this.children().length % 5;
            if(num == 0){
                _this.append('<div CLASS="UI-BLOCK-A HPOS sortable"></div>');
            }else if(num == 1){
                _this.append('<div CLASS="UI-BLOCK-B HPOS sortable"></div>');
            }else if(num == 2){
                _this.append('<div CLASS="UI-BLOCK-C HPOS sortable"></div>');
            }else if(num == 3){
                _this.append('<div CLASS="UI-BLOCK-D HPOS sortable"></div>');
            }else{
                _this.append('<div CLASS="UI-BLOCK-E HPOS sortable"></div>');
            }
        }
        _this.children().height(gridCellHeight);
        var args={
            gridCellHeight:gridCellHeight
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    }
//网格-1
    $.fn.cutgc = function () {
        var _this=$(this);
        _this.children(":last").remove();
        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    }
//格子框高度
    $.fn.changeGridCellHeight = function (gridCellHeight) {
        var _this=$(this);
        _this.children().height(gridCellHeight);
        var args={
            gridCellHeight:gridCellHeight
        }

        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    }
//格子框有无
    $.fn.changeHasGridBoder = function (hasGridBoder) {
        var _this=$(this);
        if(hasGridBoder == 'yes'){
            _this.children().addClass("HPOS");
        }
        if(hasGridBoder == 'no'){
            _this.children().removeClass("HPOS")
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    }

})(jQuery);