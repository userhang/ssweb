/**
 * Created by gyj
 */
/***********************************************
 * 描述：列表项（listul）各种操作封装
 ***********************************************/


(function ($) {


	/****************************************/
	/* 各种属性get函数
	/****************************************/
    //获取列表项个数
	$.fn.getChildCount = function () {
		var childCount=$(this).children().length;
		return childCount;
	};

    //获取列表组类型
	$.fn.getListType = function () {
		var listType;
		if($(this).hasClass("EDGETOEDGE")){
			 listType={
				 name:'通栏列表',
				 val:'tonglanliebiao'
			 };
		}else{
			listType={
				name:'普通列表',
				val:'putongliebiao'
			};
		}
		return listType;
	};

    //获取当前列表组是否为圆角
	$.fn.getIsRoundedCorner = function () {
		var _this=$(this);
		return _this.hasClass("ROUNDED")?'yes':'no';
	};

    //获取当前列表项链接内容
    $.fn.getListHrefContent = function () {
        var _this=$(this).find("a");
        var hrefContent='';
        aLabelHrefList.aLabelEffect();
        hrefContent=_this.attr("href");
        hrefContent=hrefContent.replace(/#/,"");
        aLabelHrefList.aLabelDisable();
        return hrefContent;
    };

    //获取当前列表项文字内容
	$.fn.getListItemContent = function () {
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

    //获取当前元素是否为标题（通栏列表特有）
	$.fn.getIsTitle = function () {
		var _this=$(this);
		return _this.hasClass("SEP")?'yes':'no';
	};

    //获取当前列表项是否带有箭头Class
	$.fn.getHasArrow = function () {
		var _this=$(this);
		return _this.hasClass("ARROW")?'yes':'no';
	};

    //获取当前列表项是否带有向前Class
	$.fn.getHasForward = function () {
		var _this=$(this);
		return _this.hasClass("FORWARD")?'yes':'no';
	};

    //获取当前列表项是否有气泡数字
	$.fn.getHasSmallCounter = function () {
		var _this=$(this);
		return _this.find("small.COUNTER").length!=0?'yes':'no';
	};

    //获取当前列表项气泡数字内容
	$.fn.getSmallCounterContent = function () {
		var _this=$(this),
			res='';
		if(_this.find("small.COUNTER").length!=0){
			res = _this.find("small.COUNTER").text();
		}
		return res;
	};

    //获取当前列表项是否含有小标注
	$.fn.getHasSmallText = function () {
		var _this=$(this);
		return _this.find("small").not(".COUNTER").length!=0?'yes':'no';

	};

    //获取当前列表项小标注文字内容
	$.fn.getSmallTextContent = function () {
		var _this=$(this),
			res='';
		if(_this.find("small").not(".COUNTER").length!=0){
			res = _this.find("small").not(".COUNTER").text();
		}
		return res;
	};

    //获取当前列表项文字字体
    /*$.fn.getListItemContentFontFamily = function () {
        var _this=$(this),
            res='';
        res = _this.find("a").css("font-family");
        return res;
    };*/

	/****************************************/
	/* 各种操作函数
	/****************************************/
    //列表项个数+1
	$.fn.addli = function (options) {
		var _this=$(this);
		_this.append(_this.children(':last')[0].outerHTML);
		sendMessage_funcpanelinit(_this);
	};

    //列表项个数-1
	$.fn.cutli = function (options) {
		var _this=$(this);
		if(_this.children().length>1){
			_this.children(':last').remove();
		}
		sendMessage_funcpanelinit(_this,_this.getInitAttr());
	};

    //改变列表组类型
	$.fn.changeListType = function (listItemNo,type) {
		var _this=$(this);
		switch(type){
			case 'putongliebiao':
				if(_this.hasClass("EDGETOEDGE")){
					_this.removeClass("EDGETOEDGE");
				}
				break;
			case 'tonglanliebiao':
				if(!_this.hasClass("EDGETOEDGE")){
					_this.addClass("EDGETOEDGE");
				}
				break;
		}
		var args={
			listItemNo:listItemNo
		};
		sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
	};

    //切换圆角样式
	$.fn.changeIsRoundedCorner = function (isRoundedCornerChecked) {
		var _this=$(this);
		_this.toggleCusClass(isRoundedCornerChecked,"ROUNDED");
		sendMessage_funcpanelinit(_this);
	};

    //改变选的是第几项列表项
	$.fn.changeListItemNo = function (listItemNo) {
		var _this=$(this);
		var args={
			listItemNo:listItemNo
		};
		sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
	};

    //改变列表项链接内容
    $.fn.changeListHrefContent = function (listItemNo,listHrefContent) {
        var _this=$(this).children().eq(listItemNo-1);
        aLabelHrefList.aLabelEffect();
        _this.find("a").attr("href","#"+listHrefContent);
        aLabelHrefList.aLabelDisable();
        //sendMessage_funcpanelinit($(this));
    };

    //改变列表项文字内容
	$.fn.changeListItemContent = function (listItemNo,listItemContent) {
		var _this=$(this).children().eq(listItemNo-1),
			content=listItemContent,
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
		var args={
			listItemNo:listItemNo
		};
		sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
	};

    //改变标题class属性SEP
	$.fn.changeIsTitle = function (listItemNo,isTitle) {
		var _this=$(this).children().eq(listItemNo-1);
		_this.toggleCusClass(isTitle,"SEP");
		var args={
			listItemNo:listItemNo
		};
		sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
	};

    //切换箭头class的有无
	$.fn.changeHasArrow = function (listItemNo,hasArrow) {
		var _this=$(this).children().eq(listItemNo-1);
		_this.toggleCusClass(hasArrow,"ARROW");
		var args={
			listItemNo:listItemNo
		};
		sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
	};

    //切换向前class的有无
	$.fn.changeHasForward = function (listItemNo,hasForward) {
		var _this=$(this).children().eq(listItemNo-1);
		_this.toggleCusClass(hasForward,"FORWARD");
		var args={
			listItemNo:listItemNo
		};
		sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
	};

    //增加气泡数字
	$.fn.changeHasSmallCounter = function (listItemNo,hasSmallCounter) {
		var _this=$(this).children().eq(listItemNo-1);
		if(hasSmallCounter=='yes'){
			if(_this.find("small.COUNTER").length==0){
				_this.append('<small CLASS="COUNTER">1</small>');
			}
		}else{
			_this.find("small.COUNTER").remove();
		}
		var args={
			listItemNo:listItemNo
		};
		sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
	};

    //改变气泡数字内容
	$.fn.changeSmallCounterContent = function (listItemNo,smallCounterContent) {
		var _this=$(this).children().eq(listItemNo-1);
		_this.find("small.COUNTER").text(smallCounterContent);
		var args={
			listItemNo:listItemNo
		};
		sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
	};

    //增加小标注
	$.fn.changeHasSmallText = function (listItemNo,hasSmallText) {
		var _this=$(this).children().eq(listItemNo-1);
		if(hasSmallText=='yes'){
			if(_this.find("small").not(".COUNTER").length==0){
				_this.append('<small>小标注</small>');
			}
		}else{
			_this.find("small").not(".COUNTER").remove();
		}
		var args={
			listItemNo:listItemNo
		};
		sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
	};

    //改变小标注内容
	$.fn.changeSmallTextContent = function (listItemNo,smallTextContent) {
		var _this=$(this).children().eq(listItemNo-1);
		_this.find("small").not(".COUNTER").text(smallTextContent);
		var args={
			listItemNo:listItemNo
		};
		sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
	};

    //改变列表项字体
    /*$.fn.changeListItemContentFontFamily = function (listItemNo,listItemContentFontFamily) {
        var _this=$(this).children().eq(listItemNo-1),
            content=listItemContentFontFamily,
            small='';
         _this.find("a").css("font-family", content);
        var args={
            listItemNo:listItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };*/
})(jQuery);