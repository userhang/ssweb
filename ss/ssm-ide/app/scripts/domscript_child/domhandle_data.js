/**
 * Created by Administrator on 14-6-9.
 */
/**
 * Created by gyj on 14-5-23.
 */
var store = (function(){
	var initFromLocalData=function(){
		var alldata=JSON.parse(localStorage.getItem("alldata"));

        $("body").html(alldata.bodycode);
        eventDataHandle.setBindEventList(alldata.bindEventList);
        eventDataHandle.setDefaultjslist(alldata.defaultjslist);
        aLabelHrefList.setALabelHrefList(alldata.aLabelHrefList);





		aLabelHrefList.aLabelEffect();
		aLabelHrefList.aLabelDisable();
		removeSelectDiv();
		ssM.main();
		eventDataHandle.executeDefaultJs();
		page.sendMessage_pagefuncpanelinit();
		console.log("init  alldata",alldata);
	};

	var initOriginally=function(){
		$("body").load("../scripts/domscript_child/initPageBodycode.html",function(){
			eventDataHandle.setBindEventList([]);
			eventDataHandle.setDefaultjslist([]);
			aLabelHrefList.setALabelHrefList([]);
			aLabelHrefList.aLabelEffect();
			aLabelHrefList.aLabelDisable();
			removeSelectDiv();
			ssM.main();
			eventDataHandle.executeDefaultJs();
			main();
			var args={
				type:'init',
				curPageid:'page0'
			}
			page.sendMessage_pagefuncpanelinit(args);
		});
	};


	var storeDataToLocal=function(){
		if (typeof(localStorage) == 'undefined' ) {
			alert('Your browser does not support HTML5 localStorage. Try upgrading.');
		} else {
			var bodycode=$("body").html(),
				tmpbindEventList=eventDataHandle.getWholeBindEventList(),
				tmpdefaultjslist=eventDataHandle.getWholeDefaultjslist(),
				tmpaLabelHrefList=aLabelHrefList.getALabelHrefList(),
				data = {
					'bodycode':bodycode,
					'bindEventList':tmpbindEventList,
					'defaultjslist':tmpdefaultjslist,
					'aLabelHrefList':tmpaLabelHrefList
				};
			try {
				localStorage.setItem("alldata", JSON.stringify(data)); //saves to the database, "key", "value"
			} catch (e) {
				if (e == QUOTA_EXCEEDED_ERR) {
					alert('Quota exceeded!'); //data wasn't successfully saved due to quota exceed so throw an error
				}
			}
			var alldata=JSON.parse(localStorage.getItem("alldata"));
			console.log("get    alldata    :",alldata); //Hello World!
		}
	};

	var loadThisVersion=function(thisVersion){
		var alldata=thisVersion;
		$("body").html(alldata.bodycode);
		eventDataHandle.setBindEventList(alldata.bindEventList);
		eventDataHandle.setDefaultjslist(alldata.defaultjslist);
		aLabelHrefList.setALabelHrefList(alldata.aLabelHrefList);
		aLabelHrefList.aLabelEffect();
		aLabelHrefList.aLabelDisable();
		removeSelectDiv();
		ssM.main();
		eventDataHandle.executeDefaultJs();
		main();
		var args={
			type:'init',
			curPageid:page.getCurPageid()
		}
		page.sendMessage_pagefuncpanelinit(args);
	};

	return {
		initFromLocalData:initFromLocalData,
		storeDataToLocal:storeDataToLocal,
		initOriginally:initOriginally,
		loadThisVersion:loadThisVersion
	};
})();
