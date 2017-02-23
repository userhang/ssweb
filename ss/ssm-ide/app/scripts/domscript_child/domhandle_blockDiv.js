/**
 * Created by Administrator on 14-12-8.
 */
/**
 * Created by gyj
 */
/***********************************************
 * 描述：面板快（blockDiv）各种操作封装
 ***********************************************/


(function ($) {


    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取当前id
    $.fn.getblockDivid = function () {
        var _this=$(this),
            res='';

        res = _this.attr("id");


        return res;
    };
    //获取当前面板快高度
    $.fn.getBlockDivHeight = function () {
        var _this=$(this).children('div'),
            res='';
        res = _this.height();
        return res;
    };

    //获取当前面板快之间是否有边框
    $.fn.getHasBlockDivBorder = function () {
        var _this=$(this).children();
        return _this.hasClass("blockDivBorder")?'yes':'no';
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/

    //面板快个数+1
    $.fn.addblock = function (options) {
        var _this=$(this);
        var blocknum=_this.children().length;
        if(_this.find('.blockDivX').html()==null){
            switch (blocknum){
                case 2:{
                    _this.find(".blockDivA").addClass("blockDivB");
                    _this.find(".blockDivA").removeClass("blockDivA");
                    _this.append("<div class='blockDivB sortable blockDivBorder container'></div>");
                    break;
                }
                case 3:{
                    _this.find(".blockDivB").addClass("blockDivC");
                    _this.find(".blockDivB").removeClass("blockDivB");
                    _this.append("<div class='blockDivC sortable blockDivBorder container'></div>");
                    break;
                }
                case 4:{
                    alert("已达分割上限");
                }
            }
        }else{
            alert('已有合并表格不能将合并表格与普通表格合并');
        }
        sendMessage_funcpanelinit(_this);
    };

    //面板快个数-1
    $.fn.cutblock = function (options) {
        var _this=$(this);
        var blocknum=_this.children().length;
        if(_this.find('.blockDivX').html()==null){
            switch (blocknum){
                case 2:{
                    alert("已达合并上限");
                    break;
                }
                case 3:{
                    _this.children(':last').remove();
                    _this.find(".blockDivB").addClass("blockDivA");
                    _this.find(".blockDivB").removeClass("blockDivB");
                    break;
                }
                case 4:{
                    _this.children(':last').remove();
                    _this.find(".blockDivC").addClass("blockDivB");
                    _this.find(".blockDivC").removeClass("blockDivC");
                    break;
                }
            }
        }else{
            alert('已有合并表格不能将合并表格与普通表格合并');
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr());
    };

    //修改面板快高度
    $.fn.changeBlockDivHeight = function (blockDivHeight) {
        var _this=$(this).find('div');
        _this.css('height',blockDivHeight);
        var args = {
            blockDivHeight:blockDivHeight
        }
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //切换面板快边框的有无
    $.fn.changeHasBlockDivBorder = function (hasBlockDivBorder) {
        var _this=$(this);
        console.log("SWWWWWWWWWWWWWWWWWWWWWWWWWW"+hasBlockDivBorder);
        _this.toggleCusClass(hasBlockDivBorder,"blockDivBorder");
        _this.find("div").toggleCusClass(hasBlockDivBorder,"blockDivBorder");
        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };

    //合并面板快
    $.fn.combineBlockDiv = function (blockDivCombineA,blockDivCombineB) {
        var _this=$(this);
        var blocknum=_this.children().length;
     
        var num1=blockDivCombineA,num2=blockDivCombineB;
        var content1,content2;
        if (num1<=blocknum&&num1>=0)
        {
           if (num2<=blocknum&&num2>=0)
           {
        if(num2-num1!=1){
            alert("请输入两个相邻编号，第一个小第二个大");
        }else{
          
            switch (blocknum){
                case 2:{
                    alert("已达合并上限");
                    break;
                }
                case 3:{
                content1=_this.find('div').eq(num1-1).html();
                content2=_this.find('div').eq(num2-1).html();
                _this.find("div").eq(num2-1).after("<div class='blockDivX blockDivA sortable blockDivBorder container'>"+content1+content2+"</div>");
                _this.find("div").eq(num2-1).remove();
                _this.find("div").eq(num1-1).remove();
                _this.find(".blockDivB").addClass("blockDivA");
                _this.find(".blockDivB").removeClass("blockDivB");
                    break;
                }
                case 4:{
                content1=_this.find('div').eq(num1-1).html();
                content2=_this.find('div').eq(num2-1).html();
                _this.find("div").eq(num2-1).after("<div class='blockDivX blockDivC sortable blockDivBorder container'>"+content1+content2+"</div>");
                _this.find("div").eq(num2-1).remove();
                _this.find("div").eq(num1-1).remove();
                _this.find(".blockDivC").addClass("blockDivB");
                _this.find(".blockDivC").removeClass("blockDivC");
                    break;
                }
            }
        }
    }else{
         alert("第二个数请输入范围类的号数");
    }
        }else{
              alert("第一个数请输入范围类的号数");
        }

        sendMessage_funcpanelinit($(this),$(this).getInitAttr());
    };
})(jQuery);