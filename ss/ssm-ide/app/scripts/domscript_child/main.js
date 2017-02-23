/**
 * Created by gyj on 14-3-30.
 */
 jQuery.noConflict();

var ssM = $.ssm();
$(function(){
	neednotRefresh();
	main();

//	checkLog();
});

//不需要每次拖过来元素都需要更新的函数
function neednotRefresh(){
//	localStorage.removeItem("alldata");
	store.initFromLocalData();
	checkLog();
}

function main(){
	sortableevt();
	funclistener();
	confirmdelete();
}

function checkLog(){
	$.ajax({
		       url: "/checkLog",
		       type:'POST',
		       success: function(obj){
			       console.log("在SESSION中查询到已经登录的",obj);
			       var obj=JSON.parse(obj);
			       if(obj.success){
				       var data={'type':'loged','user':obj.user};
				       data = JSON.stringify(data);
				       messenger.targets['parent'].send(data);
				       console.log("在SESSION中查询到已经登录的");
			       }else{
				       console.log("在SESSION中现无用户信息");
			       }
				},
				error:function(){
					console.log("服务器错误");
				}
	       });
}

function confirmdelete(){
	jQuery("div").off('click','.ICON_DELETE');
	jQuery("div").on('click','.ICON_DELETE',function(){
		if (confirm("您确认要删除此元素吗？")){
			jQuery(this).parent().remove();
			page.sendMessage_pagefuncpanelinit();
		}
	})
}

function sortableevt(){
	var _pagestate=pagestate.getPagestate();

	if(_pagestate!='preview'){
		jQuery( ".sortable" ).sortable({
			                               placeholder: "moving" , //拖动时，用css
//        forcePlaceholderSize: true,
			                               cursor: "move",
		  cancel:".TOOLBAR,.FOOTBAR",
//			                               cancel:".FOOTBAR",
			                               opacity: 0.2,                       //拖动时，透明度为0.6
			                               connectWith:'.container, .doc',
			                               revert: false,                       //释放时，增加动画
                                           tolerance : 'intersect',
			                               items:".content,.extra",
                                           start: function( event, ui ) {
				                               aLabelHrefList.aLabelEffect();
			                               },
			                               create: function( event, ui ) {
				                               removeSelectDiv();
			                               },
			                               change: function( event, ui ) {
				                               removeSelectDiv();
			                               },
			                               stop: function( event, ui ) {
                                               console.log('uuuuuuuuuuuuuuuuuuuuu' + ui.item.html());
                                               console.log(ui.item.parents('.container').attr('class'));
                                               var insertItem = $("<div class='content line' style='width:100%; height:2px;'></div>");
                                               //$('.extra:last').append(insertItem);
                                               //$('.extra').append(insertItem);
                                               insertItem.insertAfter('.extra:last-child');
                                               $('.line').not(':last-child').remove();
				                               aLabelHrefList.aLabelDisable();
				                               page.sendMessage_pagefuncpanelinit();
			                               },
                                            update :function(event, ui){
                                                var parent = event.target.className;

                                                var child = ui.item.attr('class');

                                                var container =/container/;
                                                var extra = /extra/;
                                                var content = /content/;
                                                var doc = /doc/;
                                                if(container.test(parent)){
                                                    if(extra.test(child)){
                                                        $(window.parent.document).find('#warningTitle').find('strong').html('警告');
                                                        $(window.parent.document).find('#warningContent').find('span').html('错误：该操作禁止<br/>原因：容器不能包含容器<br/>');
                                                        jQuery(window.parent.document).find('#eventCtrlDiv').click();
                                                        //alert('错误：该操作禁止\n原因：容器不能包含容器\n');
                                                        ui.item.remove();
                                                        ui.item.insertAfter('.extra:last');
//                                                        aLabelHrefList.aLabelDisable();
//                                                        setInterval(page.sendMessage_pagefuncpanelinit(),1000);
                                                        refreshCurrentPage();
                                                    }
                                                    else if(content.test(child)){
//                                                        child = child.replace(/content/, 'none');
//                                                        child = child.replace(/sortable/, '');
//                                                        child = child.replace(/ui-sortable/, '');
//                                                        ui.item.attr("class", child);
//                                                        ui.item.removeAttr('seq');
                                                        console.log('parent:' + parent);
                                                        console.log('child:' + child);
                                                      //  console.log('child' + child);
                                                        console.log('replace 11111');
                                                        refreshCurrentPage();

                                                    }

//                                                    console.log('parent = ' + ui.item.parents('.container').attr('class')) || ui.item.parents('.doc').attr('class');
//                                                    console.log('child = ' + child);
                                                    if(ui.item.parents('.container').attr('class') != undefined){
                                                        //拖入容器中
                                                        //在当前iframe中选取iframe外的元素使用该方法
                                                        $(window.parent.document).find('#warningTitle').find('strong').html('警告');
                                                        $(window.parent.document).find('#warningContent').find('span').html('组件无法在容器中进行编辑，若要编辑请拖出后进行编辑');
                                                        jQuery(window.parent.document).find('#eventCtrlDiv').click();
                                                        //alert('组件无法在容器中进行编辑，若要编辑请拖出后进行编辑');
                                                    }
                                                }


                                            }
		                               });
	}else{
		jQuery( ".sortable" ).sortable({
			                               cancel:"*"
		                               });
	}
}

function funclistener(){
		page.sendMessage_pagefuncpanelinit();
        //var width1,width2,height1,height2;
    jQuery('body').children("div.CURRENT").children().on('click',function(event){

                        var _pagestate=pagestate.getPagestate();
                        if(_pagestate!='preview'){
                            var _this=jQuery(this);
                            removeSelectDiv();
                            var none = /none/;
                            if(none.test(_this.attr('class'))){
                                alert('该元素不能选取');
                                return false;
                            }
                            else if(_this.hasClass("sortable")||_this.hasClass("content")||_this.hasClass("container") || _this.hasClass("extra")){
                                addSelectDiv(_this);
                                    sendMessage_funcpanelinit(_this);
                            }
                            console.log(_this.html()+"aerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                            $("body").on("contextmenu",function(e){
                                removeSelectDiv();
                                page.sendMessage_pagefuncpanelinit();
                                return false;
                            });
                        }

    });


        jQuery('body').children("div.CURRENT").children(".content").on('mousedown',function(event){

            var width1,height1;
            width1=event.clientX;
            height1=event.clientY;
            jQuery(this).on('mouseup',function(event){
                var width2,height2;
                width2=event.clientX;
                height2=event.clientY;
                if(width1-width2<1&&width1-width2>-1&&height1-height2<1&&height1-height2>-1){
                    jQuery(this).on('mousedown',function(event){
                        var width3,height3;
                        width3=event.clientX;
                        height3=event.clientY;
                        if(width3-width2<1&&width3-width2>-1&&height3-height2<1&&height3-height2>-1){


                            var _pagestate=pagestate.getPagestate();
                            if(_pagestate!='preview'){
                                var _this=jQuery(this);
                                removeSelectDiv();
                                console.log(_this.html()+"Rssssssssssssssssssssssssssssssssssssssssssssssssss");
                                addSelectDiv(_this);
                                sendMessage_funcpanelinit(_this);
                                $("body").on("contextmenu",function(e){
                                    removeSelectDiv();
                                    page.sendMessage_pagefuncpanelinit();
                                    return false;
                                });
                            }
                        }
                    });
                }

            });
        });


}

function addSelectDiv(target){
	target.addClass("curselected").wrap("<div class='selected'></div>");
	jQuery(".selected").prepend("<div class='ICON_DELETE'></div>");
}
function removeSelectDiv(){
	jQuery(".curselected").unwrap().removeClass("curselected");
	jQuery(".ICON_DELETE").remove();
}
function changeTheme(theme){
	ssM.changeTheme(theme);
}



function changePagestate(tmppagestate){
	pagestate.setPagestate(tmppagestate);
	var data={'type':'pagestatechange','pagestate':tmppagestate};
	data = JSON.stringify(data);
	messenger.targets['parent'].send(data);
    console.log("sssssssssssssssssssssssssssssssssssssss change");
	removeSelectDiv();
	if(tmppagestate=="preview"){
		sortableevt();
//		var firstpage=$("body").children("div").eq(0).attr("id");
//		page.changeCurPage(firstpage);
		aLabelHrefList.aLabelEffect();
		eventDataHandle.executeBindedFunc();
		page.sendMessage_pagestateispreview();
	}
    else if(tmppagestate=="download"){
        sortableevt();
        //aLabelHrefList.aLabelDisable();
        page.sendMessage_pagefuncpanelinit();
        eventDataHandle.delBindedFunc();
        var allEventListFuncContent=eventDataHandle.getAllEventListFuncContent(),
            defaultjs=eventDataHandle.getAllDefaultjsContent(),
            data={'type':'download','bindfunc':allEventListFuncContent,'defaultjs':defaultjs};
        data = JSON.stringify(data);
        messenger.targets['parent'].send(data);
        aLabelHrefList.aLabelEffect();
    }else {
        aLabelHrefList.aLabelEffect();
        sortableevt();
        aLabelHrefList.aLabelDisable();
        page.sendMessage_pagefuncpanelinit();
        eventDataHandle.delBindedFunc();
    }
}


function defaultjsbind(msg){
	eventDataHandle.insertDefaultjsIntoDefaultjslist(msg);
	eventDataHandle.executeDefaultJs();
}

function historyVersionLoadin(project){
	console.log("historyVersionLoadin project",project);
	store.loadThisVersion(project);
}

//刷新当前页面，用于回滚之后刷新当前页面。
function refreshCurrentPage(){
    //先把当前页面保存到本地
    store.storeDataToLocal();
    //这一段是store.initFromLocalData();中的代码，加了一个args参数，使得页面可以拖动东西了
    var args={
        type:'init',
        curPageid:page.getCurPageid()
    }
    var alldata=JSON.parse(localStorage.getItem("alldata"));

    $("body").html(alldata.bodycode);
    eventDataHandle.setBindEventList(alldata.bindEventList);
    eventDataHandle.setDefaultjslist(alldata.defaultjslist);
    aLabelHrefList.setALabelHrefList(alldata.aLabelHrefList);
    aLabelHrefList.aLabelEffect();
    aLabelHrefList.aLabelDisable();
    removeSelectDiv();
    //ssM.main();
    eventDataHandle.executeDefaultJs();
    page.sendMessage_pagefuncpanelinit(args);
    console.log("init  alldata",alldata);

    //其他的基本按照本代码所在的大类的方法复制过了。——一个初始化的代码
    checkLog();
    main();
}














