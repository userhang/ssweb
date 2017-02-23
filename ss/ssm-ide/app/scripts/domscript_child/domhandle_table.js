/**
 * Created by suhuifen on 14-5-18.
 */


/****************************************/
/* 描述：表格组件（table）各种操作封装
 /****************************************/


(function ($) {


    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取当前id
    $.fn.gettableid = function () {
        var _this=$(this),
            res='';

        res = _this.attr("id");


        return res;
    };
    //获取表格行的个数
    $.fn.getChildNum = function () {
        var _this = $(this);
        var childNum=_this.find("tr").length;
        return childNum;
    };

    //获取表格列的个数
    $.fn.getLineNum = function () {
        var _this = $(this),
            lineNum;
        lineNum = _this.find("tr").eq(0).children().length;
        return lineNum;
    };

    //获取当前操作的行的列数
    $.fn.getCellNum = function (tableRowNo) {
        var _this = $(this);
        return _this.find("tr").eq(tableRowNo).children().length;
    };

    //获取当前表格是否有标题
    $.fn.getHasCaption = function () {
        var _this=$(this);
        if(_this.find('caption').html()==null){
            return 'no';
        }else{
            return 'yes'
        }
    };

    //获取当前表格标题内容
    $.fn.getCaptionContent = function () {
        var _this=$(this);
        return _this.find("caption").text();
    };

    //获取当前操作单元格内容
    $.fn.getTableCellContent = function (tableCellNo) {
        var _this = $(this),
            tccontent = null;
        tccontent = _this.children().eq(tableCellNo).text();
        return tccontent;

    };

    //获取当前操作行单元格宽度
    $.fn.getTableCellLength = function (tableCellNo) {
        var _this = $(this),
            width = 0;
        width = _this.children().eq(tableCellNo).width();
        return width;

    };

    //获取当前操作行单元格高度
    $.fn.getTableCellWidth = function (tableCellNo) {
        var _this = $(this);
        return _this.children().eq(tableCellNo).height();

    };

    //获取当前单元格是否为表头
    $.fn.getIsHeader = function (tableCellNo) {
        var _this=$(this);
        return _this.children().eq(tableCellNo).is("th")?'yes':'no';
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //增加、删除标题
    $.fn.changeHasCaption = function (hasCaption) {
        var _this=$(this);
        if(hasCaption == 'yes'){
            _this.append('<caption>标题</caption>');
        }
        if(hasCaption == 'no'){
            $('caption').remove();
        }
        sendMessage_funcpanelinit(_this);
    };

    //改变标题内容
    $.fn.changeCaptionContent = function (captionContent) {
        var _this=$(this),
            content = captionContent;
        _this.children().eq(0).html(content);
        sendMessage_funcpanelinit(_this);
    };

    //删除第N行
    $.fn.deleteTableRowNo = function (tableRowNo) {
        var _this=$(this);
        if(confirm("确定删除第"+tableRowNo+"行吗?"))
        {
            _this.find("tr").eq(tableRowNo-1).remove();
        }
        else
        {
            return;
        }
        var args={
            tableRowNo:tableRowNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //删除第N列
    $.fn.deleteTableLineNo = function (tableLineNo) {
        var _this=$(this);
        if(confirm("确定删除第"+tableLineNo+"列吗?"))
        {
            for(var i = 0; i < _this.find("tr").length; i++){
                _this.find("tr").eq(i).children().eq(tableLineNo-1).remove();
            }
        }
        else
        {
            return;
        }
        var args={
            tableLineNo:tableLineNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //增加第N列
    $.fn.addTableLineNo = function (tableLineNo2) {
        var _this=$(this);
        if(confirm("确定增加第"+tableLineNo2+"列吗?"))
        {
            if(tableLineNo2 <= _this.find("tr").eq(0).children().length){
                for(var i = 0; i < _this.find("tr").length; i++){
                    if(i == 0){
                        _this.find("tr").eq(i).children().eq(tableLineNo2-1).before("<th>横表头</th>");
                    } else{
                        _this.find("tr").eq(i).children().eq(tableLineNo2-1).before("<td>单元格</td>");
                    }

                }
            }else{
                for(var j = 0; j < _this.find("tr").length; j++){
                    if(j == 0){
                        _this.find("tr").eq(j).children().eq(tableLineNo2-2).after("<th>横表头</th>");
                    } else{
                        _this.find("tr").eq(j).children().eq(tableLineNo2-2).after("<td>单元格</td>");
                    }
                }
            }
        }
        else
        {
            return;
        }
        var args={
            tableLineNo2:tableLineNo2
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //表格行数+1
    $.fn.addrow = function (options) {
        var _this=$(this);
        if(_this.find("tr").length == 0){
            _this.append( '<tr>' +

                '<th>横表头1</th>'+
                '<th>横表头2</th>' +
                '<th>横表头3</th>' +
                '<th>横表头4</th>' +
                '</tr>' )
        }else if(_this.find("tr").length == 1){
            _this.append(  '<tr>' +
                '<th>纵表头</th>' +
                '<td>单元格</td>' +
                '<td>单元格</td>' +
                '<td>单元格</td>' +
                '</tr>' );
            if(_this.find("tr").eq(0).children().length > 4){
                for(var i = 4; i <_this.find("tr").eq(0).children().length; i++){
                    _this.find("tr").eq(1).append("<td>单元格</td>");
                }
            }
        }else{
            _this.append( _this.find("tr").last().prop('outerHTML'));
        }
        sendMessage_funcpanelinit(_this);
    };

    //表格行数-1
    $.fn.cutrow = function (options) {
        var _this=$(this);
        _this.find("tr").last().remove();
        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    };

    //改变选的是第几行
    $.fn.changeTableRowNo = function (tableRowNo) {
        var _this=$(this);
        var args={
            tableRowNo:tableRowNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //单元格左-->右+1
    $.fn.addCell = function (tableRowNo) {
        var _this=$(this).find("tr").eq(tableRowNo-1);
        if(tableRowNo == 1){
            _this.append("<th>横表头</th>");
        }else{
            if(_this.children().length == 0){
                _this.append("<th>纵表头</th>");
            }else{
                _this.append("<td>单元格</td>");
            }
        }
        var args={
            tableRowNo:tableRowNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //单元格右-->左-1
    $.fn.cutCell = function (tableRowNo) {
        var _this=$(this).find("tr").eq(tableRowNo-1);
        _this.children(':last').remove();
        var args={
            tableRowNo:tableRowNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //单元格右-->左+1
    $.fn.addCell2 = function (tableRowNo) {
        var _this=$(this).find("tr").eq(tableRowNo-1);
        if(tableRowNo == 1){
            _this.prepend("横表头");
        }else{
            _this.prepend("<td>单元格</td>")
        }
        var args={
            tableRowNo:tableRowNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //单元格左-->右-1
    $.fn.cutCell2 = function (tableRowNo) {
        var _this=$(this).find("tr").eq(tableRowNo-1);
        _this.children(':first').remove();
        var args={
            tableRowNo:tableRowNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //改变选的是第几个单元格
    $.fn.changeTableCellNo = function (tableRowNo,tableCellNo) {
        var _this=$(this);
        var args={
            tableRowNo:tableRowNo,
            tableCellNo:tableCellNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变当前操作的单元格内容
    $.fn.changeTableCellContent = function (tableRowNo,tableCellNo,tableCellContent) {
        var _this=$(this),
            content = tableCellContent;
        _this.find("tr").eq(tableRowNo-1).children().eq(tableCellNo-1).html(content);
        var args={
            tableRowNo:tableRowNo,
            tableCellNo:tableCellNo,
            tableCellContent:tableCellContent
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变当前操作的单元格长度
    $.fn.changeTableCellLength = function (tableRowNo,tableCellNo,tableCellLength) {
        var _this=$(this),
            length = tableCellLength;
        _this.find("tr").eq(tableRowNo-1).children().eq(tableCellNo-1).width(length);
        var args={
            tableRowNo:tableRowNo,
            tableCellNo:tableCellNo,
            tableCellLength:tableCellLength
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变当前操作的单元格宽度
    $.fn.changeTableCellWidth = function (tableRowNo,tableCellNo,tableCellWidth) {
        var _this=$(this),
            width = parseInt(tableCellWidth) + 2;
        _this.find("tr").eq(tableRowNo-1).children().eq(tableCellNo-1).height(width);
        var args={
            tableRowNo:tableRowNo,
            tableCellNo:tableCellNo,
            tableCellWidth:tableCellWidth
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变当前操作的单元格是否为表头
    $.fn.changeIsHeader = function (tableRowNo,tableCellNo,isHeader) {
        var _this=$(this);
        if(isHeader == 'yes'){
            _this.find("tr").eq(tableRowNo-1).children().eq(tableCellNo-1).replaceWith("<th>表头</th>")
        }
        if(isHeader == 'no'){
            _this.find("tr").eq(tableRowNo-1).children().eq(tableCellNo-1).replaceWith("<td>单元格</td>")
        }
        var args={
            tableRowNo:tableRowNo,
            tableCellNo:tableCellNo,
            isHeader:isHeader
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    }
})(jQuery);