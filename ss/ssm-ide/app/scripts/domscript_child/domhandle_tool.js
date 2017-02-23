/**
 * Created by Administrator on 14-5-15.
 */
(function($){
	$.fn.toggleCusClass = function (judgeCondition,classname) {
		var _this=$(this);
		switch(judgeCondition){
			case 'yes':
				if(!_this.hasClass(classname)){
					_this.addClass(classname);
				}
				break;
			case 'no':
				if(_this.hasClass(classname)){
					_this.removeClass(classname);
				}
				break;
		}
	}
	$.fn.addorediteventbind = function (msg) {
		var _this=$(this);
        console.log('====================================domhandletool.js测试addorediteventbind');
        console.log('_this = ' + _this.html());
		eventDataHandle.insertEventjsIntoEventlist(msg);
		sendMessage_funcpanelinit(_this,_this.getInitAttr(msg.childattr));
	}
	$.fn.deleventbind = function (msg) {
		var _this=$(this);
		eventDataHandle.removeEventjsIntoEventlist(msg);
		sendMessage_funcpanelinit(_this,_this.getInitAttr(msg.childattr));
	}
})(jQuery);
