/**
 * Created by Administrator on 14-5-16.
 */
//事件列表
var eventList = (function(){
    //获取事件列表
	var _eventlist=createEventlist();
	var getEventlist=function(){
		return _eventlist;
	};
	var setEventlist = function(tmpeventlist){
		_eventlist = tmpeventlist;
	};
	return {
		getEventlist : getEventlist,
		setEventlist : setEventlist
	};
})();
var defaultjslist = (function(){
	var _defaultjslist=createDefaultjslist();
	var getDefaultjslist=function(){
		return _defaultjslist;
	};
	var setDefaultjslist = function(tmpdefaultjslist){
		_defaultjslist = tmpdefaultjslist;
	};
	return {
		getDefaultjslist : getDefaultjslist,
		setDefaultjslist : setDefaultjslist
	};
})();
var bindedFunc = (function(){
	var _bindedfunc="";
	var _unbindfunc="";
	var getBindedfunc=function(){
		return _bindedfunc;
	};
	var setBindedfunc = function(tmpbindedfunc){
		_bindedfunc = tmpbindedfunc;
	};
	var getUnbindfunc=function(){
		return _unbindfunc;
	};
	var setUnbindfunc = function(tmpUnbindfunc){
		_unbindfunc = tmpUnbindfunc;
	};
	return {
		getBindedfunc : getBindedfunc,
		setBindedfunc : setBindedfunc,
		getUnbindfunc:getUnbindfunc  ,
		setUnbindfunc:setUnbindfunc
	};
})();

var pagestate = (function(){
	var _pagestate=createPagestate();
	var getPagestate=function(){
		return _pagestate;
	};
	var setPagestate = function(tmppagestate){
		_pagestate = tmppagestate;
	};
	return {
		getPagestate : getPagestate,
		setPagestate : setPagestate
	};
})();
var aLabelHrefList = (function(){
	var _aLabelHrefList=createALabelHrefList();
	var getALabelHrefList=function(){
		return _aLabelHrefList;
	};
	var setALabelHrefList = function(tmpaLabelHrefList){
		_aLabelHrefList = tmpaLabelHrefList;
	};
	var insertIntoALabelHrefList = function(tmpaLabelHref){
		_aLabelHrefList.push("#"+tmpaLabelHref);
	};
	var aLabelEffect=function(){
		var tmpaLabelHrefList=getALabelHrefList();
		var $finda=$("body").children(".sortable").find("a");
		for(var i= 0,j=0;i<tmpaLabelHrefList.length;i++,j++){
			while($finda.eq(j).attr("href")==''){
				j++;
			}
			$finda.eq(j).attr("href",tmpaLabelHrefList[i]);
		}
	};
	var aLabelDisable=function (){
		var tmpaLabelHrefList=[];
		var $finda=$("body").children(".sortable").find("a");
		for(var i=0;i<$finda.length;i++){
			var thishref=$finda.eq(i).attr("href");
			if($finda.eq(i).attr("href")!=''&&!($finda.eq(i).hasClass("BACK"))){
				tmpaLabelHrefList.push(thishref);
				$finda.eq(i).attr("href","#");
			}
			if($finda.eq(i).hasClass("BACK")){
				$finda.eq(i).attr("href","javascript:void(0)");
				tmpaLabelHrefList.push("#");
			}
		}
		setALabelHrefList(tmpaLabelHrefList);
	};
	return {
		getALabelHrefList : getALabelHrefList,
		setALabelHrefList : setALabelHrefList,
		insertIntoALabelHrefList:insertIntoALabelHrefList,
		aLabelEffect:aLabelEffect,
		aLabelDisable:aLabelDisable
	};
})();