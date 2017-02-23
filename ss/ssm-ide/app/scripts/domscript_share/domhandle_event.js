/**
 * Created by gyj on 14-5-9.
 */
var eventDataHandle = (function(){
//		 将新增的事件绑定加入eventlist
    //这里是添加和编辑公用的方法
	var insertEventjsIntoEventlist = function(msg){
        //获取事件列表，这里是一个数组，每个事件是数组里的一个元素
		 var _eventlist=eventList.getEventlist();
		 var addedNewFuncIntoFunclist=false;
        var eventListContent = [];

//        console.log('测试thislist');
//        console.log('_eventlist.length = ' + _eventlist.length);
        for(var i in _eventlist){
//            console.log(i +"="+_eventlist[i]);
//            console.log('_eventlist[i]测试');
//            for(var abc in _eventlist[i]){
//                console.log(abc + '==' + _eventlist[i][abc]);
//            }
//            console.log('_eventlist[i].funclist测试');
            for(var abc in _eventlist[i].funclist){
//                console.log(abc + '===' + _eventlist[i].funclist[abc]);
//                console.log('_eventlist[i].funclist[abc]测试');
//                for(var a in _eventlist[i].funclist[abc]){
//                    console.log(a + '====' + _eventlist[i].funclist[abc][a]);
//                }
                var word = _eventlist[i].funclist[abc].funcContent;
//                console.log('funcContent = ' + word);
                var indexWord = "function";
                //获取function的位置，然后把function之前的字符串全部截取
                var index = word.indexOf(indexWord);
//                console.log('index = ' + index);
                var words = word.substring(0, index);
//                console.log('截取的部分：' + words);
                eventListContent.push(words);
            }
        }

//        console.log('===============================结束');
//        for(var i in eventListContent){
//            console.log(i + '###########' + eventListContent[i]);
//        }


        //遍历事件列表
		 for(var i = 0;i<_eventlist.length;i++){
			 var thislist=_eventlist[i];

//             console.log('==================================事件调试');

             var thisfunc = thislist.funclist[j];
//             console.log('【' + i + '】thisfunc:' + thisfunc);
//             console.log('=======thisfunc测试');
             //thisfunc测试
//             for (var abc in thisfunc) {
//                 console.log('《' + abc + '》' + thisfunc[abc]);
//             }
             //thisfunc.childattr测试
//             console.log('=======thisfunc.childattr测试');
//             for (var abc in thisfunc.childattr) {
//                 console.log('[' + abc + ']' + thisfunc.childattr[abc]);
//             }
             //msg测试
//             console.log('========msg测试');
//             for (var abc in msg) {
//                 console.log('《' + abc + '》' + "+" + msg[abc]);
//             }
//             //msg.childattr测试
//             console.log('========msg.childattr测试');
//             for (var abc in msg.childattr) {
//                 console.log('[' + abc + ']' + msg.childattr[abc]);
//             }


             //这里如果相同则是一个组件
             //thislist = _eventlist[i]
             //thisfunc = _eventlist[i].funclist[j]
             //funclist 存储当前组件的事件

             //这里通过seq选取对应的组件（从组件中获取该组件的事件）
			 if(thislist.seq==msg.seq){
                 //子元素属性相同
				 var childattrAreSame=false,
                     //子元素属性相同标记
					 CHILDATTRARESAMEFLAG=false,
					 funcindex=0;
				 for(var j=0;j<thislist.funclist.length;j++){
					 var thisfunc=thislist.funclist[j];
//					 对于新增的这个事件和原来funclist里的事件们，判断他们的functype是否相同
//                      如果相同则判断是否操作在funclist里面同一个子元素,
//                          如果相同就替换funcContent
//                          如果不相同就添加新事件进funclist
//					    如果functype找不到相同的就直接添加新事件进funclist


                     //如果该组件中有这个js方法
					 if(thisfunc.flag==msg.flag){
                         //检查之前的该方法和现在该方法的区别
                         console.log('=========================domhandle_event.js两个方法val一样')
						 for(var key in thisfunc.childattr){
							 var tmp1=msg.childattr[key],
								 tmp2=thisfunc.childattr[key];
							 if(tmp1==tmp2){
								 childattrAreSame=true;
							 }else{
                                 //如果有区别就直接不用比较后面的了
								 childattrAreSame=false;
								 break;
							 }
						 }
                         //如果之前的方法和当前的方法没区别
						 if(childattrAreSame){
                             //什么也不用做
							 CHILDATTRARESAMEFLAG=true;
							 funcindex = j;
							 break;
						 }
					 }
				 }


//                 console.log("domhandle_event测试:" + thislist.seq);
//                 console.log("domhandle_event测试:" + msg.seq);
//                 console.log('-------------');
//                 for(var m in thisfunc){
//                     console.log(m +"+"+thisfunc[m]);
//                 }
//                 for(var m in thisfunc.childattr){
//                     console.log(m + "+" + thisfunc.childattr[m]);
//                 }
//                 console.log('=========================');
//                 for(var m in thisfunc.funcType){
//                     console.log(m + "+" + thisfunc.funcType[m]);
//                 }
//                 console.log("**********************");
//
//                 for(var m in msg.childattr){
//                     console.log(m + "+" + msg.childattr[m]);
//                 }
//                 console.log('=========================');
//                 for(var m in msg.funcType){
//                     console.log(m + "+" + msg.funcType[m]);
//                 }

//                 //这里应该通过funcContent来比较
//                 var word = thisfunc.funcContent;
//                 console.log('word = ' + word);
//                 var indexWord = "function";
//                 //获取function的位置，然后把function之前的字符串全部截取
//                 var index = word.indexOf(indexWord);
//                 console.log('index = ' + index);
//                 var words = word.substring(0, index);
//                 console.log('截取的部分：' + words);
//
//                 var word1 = msg.funcContent;
//                 var index1 = word1.indexOf(indexWord);
//                 var words1 = word1.substring(0, index1);
//
//                 if(words1 == words){
//                     console.log('一样');
//                 }

                 //如果之前的方法和当前的方法没区别
				 if(CHILDATTRARESAMEFLAG){
					 _eventlist[i].funclist[funcindex].funcContent=msg.funcContent;
					 addedNewFuncIntoFunclist=true;
					 break;
				 }

                 //如果之前的方法和当前的方法有区别，则添加
				 if(!addedNewFuncIntoFunclist){
                     //将当前方法的属性存储
					 var tmpfunc={
						 eventid:msg.eventid,
						 childattr:msg.childattr,
						 funcType:msg.funcType,
						 funcContent:msg.funcContent,
                         flag:msg.flag
					 }
                     console.log('=====================_eventlist[i].funclist.push测试');
                     for(var abcd in _eventlist[i].funclist){
                         console.log(abcd + '|||||' + _eventlist[i].funclist[abcd]);
                         for(var abcde in _eventlist[i].funclist[abcd]){
                             console.log(abcde + '------' + _eventlist[i].funclist[abcd][abcde]);
                         }
                     }
                     console.log('输出结束');

                     //添加的事件全部存在_eventlist[i].funclist中
					 _eventlist[i].funclist.push(tmpfunc);


                     for(var abcd in _eventlist[i].funclist){
                         console.log(abcd + '|||||' + _eventlist[i].funclist[abcd]);
                         for(var abcde in _eventlist[i].funclist[abcd]){
                             console.log(abcde + '------' + _eventlist[i].funclist[abcd][abcde]);
                         }
                     }
					 addedNewFuncIntoFunclist=true;
					 break;
				 }
			 }
		 }
		if(!addedNewFuncIntoFunclist){
			var tmpevent={
				seq:msg.seq,
				funclist:[{
					eventid:msg.eventid,
					childattr:msg.childattr,
					funcType:msg.funcType,
					funcContent:msg.funcContent,
                    flag:msg.flag
				}]
			}
			_eventlist.push(tmpevent);
		}
		eventList.setEventlist(_eventlist);
	};

    //从事件列表中通过事件列表和事件数据获取事件内容
	var getEventContentFromEventlistViaElemEventListAndEventData = function(elemEventList,tmpeventdata){
		if(elemEventList.length==0){
			return tmpeventdata;
		}
		var thislist=elemEventList,
			childattrAreSame=false,
			CHILDATTRARESAMEFLAG=false,
			funcindex=0;
        //遍历事件列表
		for(var j=0;j<thislist.funclist.length;j++){
			var thisfunc=thislist.funclist[j];
            //如果事件列表中有与之对应的事件数据
			if(thisfunc.funcType.val==tmpeventdata.funcType.val){
                //遍历，要求事件列表中选择出来的事件和当前事件所有属性都相同
				for(var key in thisfunc.childattr){
					var tmp1=tmpeventdata.childattr[key],
						tmp2=thisfunc.childattr[key];
					if(tmp1==tmp2){
                        //子属性完全相同
						childattrAreSame=true;
					}else{
                        //子属性有不相同的
						childattrAreSame=false;
						break;
					}
				}
                //如果子属性完全相同
				if(childattrAreSame){
                    //标记为true
					CHILDATTRARESAMEFLAG=true;
                    //把匹配的事件的下表记录下来
					funcindex = j;
					break;
				}
			}
		}
        //如果标记为true
		if(CHILDATTRARESAMEFLAG){
            //将当前事件的js内容变更为事件列表中匹配的事件的js内容
			tmpeventdata.funcContent=thislist.funclist[funcindex].funcContent;
		}
		return tmpeventdata;
	};

    //根据标记从事件列表中选取事件
    var getEventContentFromEventlistViaFlag = function(elemEventList,tmpeventdata){
        console.log('===================================进入该函数');
        //如果事件列表为空，则直接返回
        if(elemEventList.length==0){
            return tmpeventdata;
        }
        var thislist=elemEventList,
            childattrAreSame=false,
            CHILDATTRARESAMEFLAG=false,
            funcindex=0;
        //遍历事件列表
        for(var j=0;j<thislist.funclist.length;j++){
            var thisfunc = thislist.funclist[j];
            //如果事件列表中有与之对应的事件数据
            if (thisfunc.flag == tmpeventdata.flag) {
                childattrAreSame = true;
            }
            //如果子属性完全相同
            if (childattrAreSame) {
                //标记为true
                CHILDATTRARESAMEFLAG = true;
                //把匹配的事件的下表记录下来
                funcindex = j;
                break;
            }
        }
        //如果标记为true
        if(CHILDATTRARESAMEFLAG){
            //将当前事件的js内容变更为事件列表中匹配的事件的js内容
            tmpeventdata.funcContent=thislist.funclist[funcindex].funcContent;
        }
        return tmpeventdata;
    };


	var getElemEventListViaSeq=function(seq){
		var _eventlist=eventList.getEventlist();
		for(var i = 0;i<_eventlist.length;i++){
			var thislist=_eventlist[i];
			if(thislist.seq==seq){
				return thislist;
			}
		}
		return [];
	}
	var getAllEventListFuncContent=function(){
		var _eventlist=eventList.getEventlist(),
			tmpbindedfunc="";

		for(var i=0;i<_eventlist.length;i++){
			var thislist=_eventlist[i];
			for(var j=0;j<thislist.funclist.length;j++){
				var thisfunc=thislist.funclist[j];
				tmpbindedfunc+=thisfunc.funcContent;
			}
		}
		return tmpbindedfunc;
	}
	var getAllDefaultjsContent=function(){
		var	_defaultjslist=defaultjslist.getDefaultjslist(),
			tmpdefaultjs="";
		for(var i=0;i<_defaultjslist.length;i++){
			var thislist=_defaultjslist[i];
			tmpdefaultjs+=thislist.defaultjs;
		}
		return tmpdefaultjs;
	}
	var removeEventjsIntoEventlist = function(msg){
		var _eventlist=eventList.getEventlist();
		for(var i = 0;i<_eventlist.length;i++){
			var thislist=_eventlist[i];
			if(thislist.seq==msg.seq){
				for(var j=0;j<thislist.funclist.length;j++){
					var thisfunc=thislist.funclist[j];
					if(thisfunc.eventid==msg.eventid){
						thislist.funclist.splice(j,1);
						eventList.setEventlist(_eventlist);
						return ;
					}
				}
			}
		}
	}
	var executeBindedFunc=function(){
		var	_eventlist=eventList.getEventlist(),
			tmpbindedfunc="",
			tmpUnbindfunc="";
		for(var i=0;i<_eventlist.length;i++){
			var thislist=_eventlist[i];
			for(var j=0;j<thislist.funclist.length;j++){
				var thisfunc=thislist.funclist[j],
					unbindfunc=thisfunc.funcContent;
				unbindfunc = unbindfunc.replace(/on[\s\S]*/, 'unbind();');
				tmpUnbindfunc+=unbindfunc;
				tmpbindedfunc+=thisfunc.funcContent;
			}
		}
		bindedFunc.setUnbindfunc(tmpUnbindfunc);
		bindedFunc.setBindedfunc(tmpbindedfunc);
		eval(bindedFunc.getBindedfunc());
	}
	var delBindedFunc=function(){
		eval(bindedFunc.getUnbindfunc());
	}

	var insertDefaultjsIntoDefaultjslist = function(msg){
		var _defaultjslist=defaultjslist.getDefaultjslist(),
			addedNewDefaultjsIntoDefaultjslist=false;
		for(var i = 0;i<_defaultjslist.length;i++){
			var thislist=_defaultjslist[i];
			if(thislist.objtype==msg.objtype&&thislist.objid==msg.objid){
				addedNewDefaultjsIntoDefaultjslist=true;
				if(thislist.objid!=''&&thislist.objid!=undefined){
					thislist.defaultjs=msg.defaultjs;
				}
				break;
			}
		}
		if(!addedNewDefaultjsIntoDefaultjslist){
			var tmpdefaultjs={
				'objtype':msg.objtype,
				'objid':msg.objid,
				'defaultjs':msg.defaultjs
			}
			_defaultjslist.push(tmpdefaultjs);
		}
		defaultjslist.setDefaultjslist(_defaultjslist);
	};
	var executeDefaultJs=function(){
		var	_defaultjslist=defaultjslist.getDefaultjslist(),
			tmpdefaultjs="";
		for(var i=0;i<_defaultjslist.length;i++){
			var thislist=_defaultjslist[i];
			tmpdefaultjs+=thislist.defaultjs;
		}
		console.log("执行了的默认js :"+tmpdefaultjs);
		eval(tmpdefaultjs);
	}
	var getWholeBindEventList=function(){
		var	_eventlist=eventList?eventList.getEventlist():[];
		return _eventlist;
	}
	var setBindEventList=function(tmpEventlist){
		eventList.setEventlist(tmpEventlist);
	}

	var setDefaultjslist=function(tmpDefaultjslist){
		defaultjslist.setDefaultjslist(tmpDefaultjslist);
	}
	var getWholeDefaultjslist=function(){
		var	_defaulteventlist=defaultjslist?defaultjslist.getDefaultjslist():[];
		return _defaulteventlist;
	}
	return {
		insertEventjsIntoEventlist: insertEventjsIntoEventlist,
		getEventContentFromEventlistViaElemEventListAndEventData:getEventContentFromEventlistViaElemEventListAndEventData,
		getElemEventListViaSeq:getElemEventListViaSeq,
		getAllEventListFuncContent:getAllEventListFuncContent,
		getAllDefaultjsContent:getAllDefaultjsContent,
		removeEventjsIntoEventlist:removeEventjsIntoEventlist,
		executeBindedFunc:executeBindedFunc,
		delBindedFunc:delBindedFunc,
		insertDefaultjsIntoDefaultjslist:insertDefaultjsIntoDefaultjslist,
		executeDefaultJs:executeDefaultJs,
		getWholeBindEventList:getWholeBindEventList,
		setBindEventList:setBindEventList,
		getWholeDefaultjslist:getWholeDefaultjslist,
		setDefaultjslist:setDefaultjslist,
        getEventContentFromEventlistViaFlag:getEventContentFromEventlistViaFlag
	}
})();



