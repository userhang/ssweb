/**
 * Created by gyj on 14-3-13.
 */
if (document.readyState=="complete")
{
//	checkLog();
	dragEvent();
}
else
{
	document.onreadystatechange = function()
	{
		if (document.readyState == "complete")
		{
//			checkLog();
			dragEvent();
		}
	}
}





var iframeinfo=(function(){
	var pageid="page0",
		pagestate="edit",
		iframeDocument=document.getElementById('mainIframe').contentDocument,
		iframeblock=[{
			pageid:pageid
		}];
	var getPageid=function(){
		return pageid;
	}
	var setPageid=function(tmppageid){
		pageid=tmppageid;
	}
	var getPagestate=function(){
		return pagestate;
	}
	var setPagestate=function(tmppagestate){
		pagestate=tmppagestate;
	}
	var getIframeBlock=function(){
		return  iframeblock;
	}
	var setIframeBlock=function(tmpIframeBlock){
		 iframeblock=tmpIframeBlock;
	}
	var getIframeDocument=function(){
		return  iframeDocument;
	}
	var getNewIframeBlockid=function(){
		return  iframeblock[iframeblock.length-1].pageid;
	}
	var getNewIframeBlockobj=function(){
		var thisiframeDocument=getIframeDocument();
		return thisiframeDocument.getElementById(getNewIframeBlockid());
	}
	var getSpeIframeBlockobj=function(pageid){
		var thisiframeDocument=getIframeDocument();
		return thisiframeDocument.getElementById(pageid);
	}
	var setNewIframeBlock=function(tmpPageid){
		tmpdata={
			pageid:tmpPageid,
			obj:iframeDocument.getElementById(tmpPageid)
		}
		iframeblock.push(tmpdata);
		setPageid(tmpPageid);
	}
	return{
		getPageid:getPageid,
		setPageid:setPageid,
		getPagestate:getPagestate,
		setPagestate:setPagestate,
		getIframeBlock:getIframeBlock,
		setIframeBlock:setIframeBlock,
		setNewIframeBlock:setNewIframeBlock,
		getNewIframeBlockid:getNewIframeBlockid,
		getIframeDocument:getIframeDocument,
		getNewIframeBlockobj:getNewIframeBlockobj,
		getSpeIframeBlockobj:getSpeIframeBlockobj
	};
})();
function dragEvent(args){
	if(args){
		iframeinfo.setPageid(args.pageid);
		for(var i=0;i<iframeinfo.getIframeBlock().length;i++){
			var thisIframeblock=iframeinfo.getIframeBlock()[i];
			if(thisIframeblock.pageid==args.pageid){
//				找到绑定过的东西返回
				return;
			}
			else if(thisIframeblock.pageid==args.oldPageid){
				thisIframeblock.pageid=args.pageid;
				return
			}
		}
//		将当前页面id添加进绑定的list
		iframeinfo.setNewIframeBlock(args.pageid);
	}

	addEvent(iframeinfo.getNewIframeBlockobj(), 'drop', onDrop);
	addEvent(iframeinfo.getNewIframeBlockobj(), 'dragover', onDragOver);
    //addEvent(iframeinfo.getNewIframeBlockobj(), 'dblclick', onDblclick);

	function addEvent(element, event, delegate ) {

		element.addEventListener(event, delegate, false);
	}
//    function onDblclick(event){
//        console.log("dblclick...............................................");
//        if(event.preventDefault) event.preventDefault();
//        if (event.stopPropagation) event.stopPropagation();
//        else event.cancelBubble = true;
//        return false;
//    }
	function onDragOver(event){
        console.log("onDragOver...............................................");
		if(event.preventDefault) event.preventDefault();
		if (event.stopPropagation) event.stopPropagation();
		else event.cancelBubble = true;
		return false;
	}
	function onDrop(event){
        console.log("onDrop...............................................");
		if(event.preventDefault) event.preventDefault();
		if (event.stopPropagation) event.stopPropagation();
		else event.cancelBubble = true;

		var id = event.dataTransfer.getData("Text");
		var item = document.getElementById(id);
        var pageid=iframeinfo.getPageid();
        
       

		addtores(item, id,pageid);
		return false;
	}
	function addtores(item, id,pageid) {
        if(id=='inputText'){
            var iframeDocument=document.getElementById('mainIframe').contentDocument.getElementById(pageid);
            //创建标签
            var clone=document.createElement("input");
            //
            var item =$('.'+id+'obj')[0],clone2 = item.cloneNode(true);
         
            clone.type = "text";
            clone2.appendChild(clone);
            $(clone2).removeClass(id+'obj').attr({id:Math.uuid(),type:id,seq:Math.uuid()});
            iframeDocument.appendChild(clone2);
            var objdata={'directive':'main'};
            objdata = JSON.stringify(objdata);
            messenger.targets['mainIframe'].send(objdata);

       }else if(id=='inputRadio'){
            var iframeDocument=document.getElementById('mainIframe').contentDocument.getElementById(pageid);
            var clone=document.createElement("input");
             clone.setAttribute("name", "excalibur");
            
            var item =$('.'+id+'obj')[0],clone2 = item.cloneNode(true);
            clone.type = "radio";
            clone2.appendChild(clone);
            $(clone2).removeClass(id+'obj').attr({id:Math.uuid(),type:id,seq:Math.uuid()});
            iframeDocument.appendChild(clone2);
            var objdata={'directive':'main'};
            objdata = JSON.stringify(objdata);
            messenger.targets['mainIframe'].send(objdata);
       }else if(id=='inputCheckbox'){
            var iframeDocument=document.getElementById('mainIframe').contentDocument.getElementById(pageid);
            var clone=document.createElement("input");
            clone.setAttribute("name", "excalibur");
            var item =$('.'+id+'obj')[0],clone2 = item.cloneNode(true);
            clone.type = "checkbox";
           
            clone2.appendChild(clone);
            $(clone2).removeClass(id+'obj').attr({id:Math.uuid(),type:id,seq:Math.uuid()});
            iframeDocument.appendChild(clone2);
            var objdata={'directive':'main'};
            objdata = JSON.stringify(objdata);
            messenger.targets['mainIframe'].send(objdata);
           
        }else if(id=='inputSelect'){
            var iframeDocument=document.getElementById('mainIframe').contentDocument.getElementById(pageid);
            var clone=document.createElement("select");
            var op = document.createElement("option")
            var item =$('.'+id+'obj')[0],clone2 = item.cloneNode(true);
            op.setAttribute('value','aaa');
            clone.setAttribute('id','mySelect');
            op.innerHTML='aaa';
            clone.appendChild(op);
            clone2.appendChild(clone);
            $(clone2).removeClass(id+'obj').attr({id:Math.uuid(),type:id,seq:Math.uuid()});
            iframeDocument.appendChild(clone2);
            var objdata={'directive':'main'};
            objdata = JSON.stringify(objdata);
            messenger.targets['mainIframe'].send(objdata);
        }else if(id == 'formDiv'){
            var iframeDocument = document.getElementById('mainIframe').contentDocument.getElementById(pageid);
            //最外层的form
            var clone = document.createElement("form");
            //通过这样的方式设置其class属性
            clone.setAttribute("class", "formDivForm"+" "+"defaultFontFamily");
            clone.setAttribute("method", "null");
            //form下的div
            var child0 = document.createElement("div");
            child0.setAttribute("class", "formDivGroup"+" "+"formDivSearchDiv");
            //其次的label标签
            var child1 = document.createElement("label");
            child1.innerHTML = '搜索框';
            child1.setAttribute("class", "formDivLabel");
            //label并列的div
            var child2 = document.createElement("div");
            child2.setAttribute("class", "formDivInputDiv");
            //div下面的input
            var child3 = document.createElement("input");
            child3.type = "text";
            child3.setAttribute("class", "formDivSearchInput" + " "+ "formDivInput");
            child3.placeholder = "search";
            //与input并列的span
            var child4 = document.createElement("span");
            child4.setAttribute("class", "formDivSpan");
            //span下面的button
            var child5 = document.createElement("button");
            child5.type = "submit";
            child5.setAttribute("class", "formDivSearchButton");
            child5.innerHTML = "查找";
            //合并
            var item =$('.'+id+'obj')[0],clone2 = item.cloneNode(true);
            //把button合并到span中
            child4.appendChild(child5);
            //把input合并到div中
            child2.appendChild(child3);
            //再把span合并到div中
            child2.appendChild(child4);
            //把label合并到div中
            child0.appendChild(child1);
            //把div合并到div中
            child0.appendChild(child2);
            //把div合并到form中
            clone.appendChild(child0);
            //把form合并到最外层的div中
            clone2.appendChild(clone);
            //合并完成
            $(clone2).removeClass(id+'obj').attr({id:itemid,type:id,seq:Math.uuid()});
            iframeDocument.appendChild(clone2);
            var objdata={'directive':'main'};
            objdata = JSON.stringify(objdata);
            messenger.targets['mainIframe'].send(objdata);
        }else if(id == 'normalDivFrom'){
            var iframeDocument = document.getElementById('mainIframe').contentDocument.getElementById(pageid);

            var clone0 = document.createElement("div");
            //通过这样的方式设置其class属性
            clone0.setAttribute("class", "inputText"+" "+"content");
            clone0.setAttribute("type", "inputText");
            clone0.setAttribute("id", Math.uuid());
            clone0.setAttribute("seq", Math.uuid());


            var child0_0 = document.createElement("label");
            child0_0.innerHTML = '账号';
            child0_0.setAttribute("class", "defaultFontFamily");
            //其次的label标签
            var child0_1 = document.createElement("input");
            child0_1.type = "text";

            var clone1 = document.createElement("div");
            clone1.setAttribute("class", "inputText"+" "+"content");
            clone1.setAttribute("type", "inputText");
            clone1.setAttribute("id", Math.uuid());
            clone1.setAttribute("seq", Math.uuid());


            var child1_0 = document.createElement("label");
            child1_0.innerHTML = '密码';
            child1_0.setAttribute("class", "defaultFontFamily");
            //其次的label标签
            var child1_1 = document.createElement("input");
            child1_1.type = "text";

            var clone2 = document.createElement("a");
            clone2.setAttribute("class", "BUTTON"+" "+"sortable"+" "+"content"+" "+"defaultFontFamily"+" "+"ui-sortable");
            clone2.setAttribute("type", "iconButton");
            clone2.setAttribute("id", Math.uuid());
            clone2.setAttribute("seq", Math.uuid());
            clone2.setAttribute("href", "#default");
            clone2.innerHTML = "登入";

            var clone3 = document.createElement("div");
            clone3.setAttribute("class", "normalDiv"+" "+"sortable"+" "+"container"+" "+" ui-sortable");

            //合并
            var item =$('.'+id+'obj')[0],clone = item.cloneNode(true);



            clone0.appendChild(child0_0);
            clone0.appendChild(child0_1);
            clone1.appendChild(child1_0);
            clone1.appendChild(child1_1);
            //把form合并到最外层的div中
            clone3.appendChild(clone0);
            clone3.appendChild(clone1);
            clone3.appendChild(clone2);
            clone.appendChild(clone3);
            //合并完成
            $(clone).removeClass(id+'obj').attr({id:itemid,type:id,seq:Math.uuid()});
            iframeDocument.appendChild(clone);
            var objdata={'directive':'main'};
            objdata = JSON.stringify(objdata);
            messenger.targets['mainIframe'].send(objdata);
        }
        else if(id == 'iconButtonDiv'){
            var iframeDocument = document.getElementById('mainIframe').contentDocument.getElementById(pageid);

            var clone = document.createElement("a");
            //通过这样的方式设置其class属性
            clone.setAttribute("class", "iconButtonDivA");
            clone.setAttribute("href", "#default");
            clone.setAttribute("id", Math.uuid());
            //form下的div
            var child0 = document.createElement("span");
            child0.innerHTML = '文字';
            child0.setAttribute("class", "iconButtonDivContent"+" "+"lineHeightWords"+" "+"defaultFontFamily");

            //合并
            var item =$('.'+id+'obj')[0],clone2 = item.cloneNode(true);


            clone.appendChild(child0);
            //把form合并到最外层的div中
            clone2.appendChild(clone);
            //合并完成
            $(clone2).removeClass(id+'obj').attr({id:itemid,type:id,seq:Math.uuid()});
            iframeDocument.appendChild(clone2);
            var objdata={'directive':'main'};
            objdata = JSON.stringify(objdata);
            messenger.targets['mainIframe'].send(objdata);
        }else if(id == 'focusimg'){
            var iframeDocument = document.getElementById('mainIframe').contentDocument.getElementById(pageid);

            var clone = document.createElement("ul");

            var child0 = document.createElement("li");
            var child0_1 = document.createElement("a");
            child0_1.setAttribute("href", "#");
            var child0_2 = document.createElement("img");
            child0_2.setAttribute("src", "./img/system/pic_1.jpg");
            child0_2.setAttribute("id", Math.uuid());

            var child1 = document.createElement("li");
            var child1_1 = document.createElement("a");
            child1_1.setAttribute("href", "#");
            var child1_2 = document.createElement("img");
            child1_2.setAttribute("src", "./img/system/pic_2.png");
            child1_2.setAttribute("id", Math.uuid());

            var child2 = document.createElement("li");
            var child2_1 = document.createElement("a");
            child2_1.setAttribute("href", "#");
            var child2_2 = document.createElement("img");
            child2_2.setAttribute("src", "./img/system/pic_3.png");
            child2_2.setAttribute("id", Math.uuid());

            var child3 = document.createElement("li");
            var child3_1 = document.createElement("a");
            child3_1.setAttribute("href", "#");
            var child3_2 = document.createElement("img");
            child3_2.setAttribute("src", "./img/system/pic_4.jpg");
            child3_2.setAttribute("id", Math.uuid());
            //合并
            var item =$('.'+id+'obj')[0],
                itemid=$('.'+id+'id').html(),
                itemjs=$('.'+id+'js').html(),
                clone4 = item.cloneNode(true);

            clone.appendChild(child0);
            child0.appendChild(child0_1);
            child0_1.appendChild(child0_2);

            clone.appendChild(child1);
            child1.appendChild(child1_1);
            child1_1.appendChild(child1_2);

            clone.appendChild(child2);
            child2.appendChild(child2_1);
            child2_1.appendChild(child2_2);


            clone.appendChild(child3);
            child3.appendChild(child3_1);
            child3_1.appendChild(child3_2);
            //把form合并到最外层的div中
            clone4.appendChild(clone);
            //合并完成
            $(clone4).removeClass(id+'obj').attr({id:itemid,type:id,seq:Math.uuid()});
            iframeDocument.appendChild(clone4);
            var objdata={'directive':'main'};
            objdata = JSON.stringify(objdata);
            messenger.targets['mainIframe'].send(objdata);
            var jsdata={
                'directive':'defaultjsbind',
                'objtype':id,
                'objid':itemid?itemid:'',
                'defaultjs':itemjs
            };
            jsdata = JSON.stringify(jsdata);
            console.log("jsdata",jsdata);
            messenger.targets['mainIframe'].send(jsdata);

        }
        else if(id == 'swipeDiv'){
            var iframeDocument = document.getElementById('mainIframe').contentDocument.getElementById(pageid);

            var child = document.createElement("a");
            //通过这样的方式设置其class属性
            child.setAttribute("class", "swipeArrowLeft"+" "+"swipeDButton");

            //form下的div
            var child0 = document.createElement("div");
            child0.setAttribute("class", "SWIPEDIV");

            var child1 = document.createElement("a");
            child1.setAttribute("class", "SDpanel");
            child1.setAttribute("href", "#test");
            child1.setAttribute("id", Math.uuid());

            var child2 = document.createElement("a");
            child2.setAttribute("class", "SDpc");
            child2.setAttribute("href", "#test");
            child2.setAttribute("id", Math.uuid());

            //合并
            var item =$('.'+id+'obj')[0],
                itemid=$('.'+id+'id').html(),
                itemjs=$('.'+id+'js').html(),
                clone = item.cloneNode(true);


            child0.appendChild(child1);

            child0.appendChild(child2);
            clone.appendChild(child);
            clone.appendChild(child0);

            //合并完成
            $(clone).removeClass(id+'obj').attr({id:itemid,type:id,seq:Math.uuid()});
            iframeDocument.appendChild(clone);
            var objdata={'directive':'main'};
            objdata = JSON.stringify(objdata);
            messenger.targets['mainIframe'].send(objdata);
            var jsdata={
                'directive':'defaultjsbind',
                'objtype':id,
                'objid':itemid?itemid:'',
                'defaultjs':itemjs
            };
            jsdata = JSON.stringify(jsdata);
            console.log("jsdata",jsdata);
            messenger.targets['mainIframe'].send(jsdata);
        }
        else if(id == 'twonav'){
            var iframeDocument = document.getElementById('mainIframe').contentDocument.getElementById(pageid);

            var clone0 = document.createElement("ul");
            //通过这样的方式设置其class属性
            clone0.setAttribute("class", "box");

            //form下的div
            var child0 = document.createElement("li");
            child0.setAttribute("class", "navmenu");
            var child0_1 = document.createElement("a");
            child0_1.innerHTML = '课程大厅';
            child0_1.setAttribute("href", "#aaa");
            var child0_2 = document.createElement("ul");
            var child0_3 = document.createElement("li");
            child0_3.setAttribute("id", Math.uuid());
            var child0_4 = document.createElement("a");
            child0_4.innerHTML = 'JavaScript';
            child0_4.setAttribute("href", "#aaa");


            var child1 = document.createElement("li");
            child1.setAttribute("class", "navmenu");
            var child1_1 = document.createElement("a");
            child1_1.innerHTML = '课程大厅';
            child1_1.setAttribute("href", "#aaa");
            var child1_2 = document.createElement("ul");
            var child1_3 = document.createElement("li");
            child1_3.setAttribute("id", Math.uuid());
            var child1_4 = document.createElement("a");
            child1_4.innerHTML = 'JavaScript';
            child1_4.setAttribute("href", "#aaa");
            var child1_5 = document.createElement("li");
            child1_5.setAttribute("id", Math.uuid());
            var child1_6 = document.createElement("a");
            child1_6.innerHTML = 'jQuery';
            child1_6.setAttribute("href", "#aaa");

            var child2 = document.createElement("li");
            child2.setAttribute("class", "navmenu");
            var child2_1 = document.createElement("a");
            child2_1.innerHTML = '课程大厅';
            child2_1.setAttribute("href", "#aaa");
            var child2_2 = document.createElement("ul");
            var child2_3 = document.createElement("li");
            child2_3.setAttribute("id", Math.uuid());
            var child2_4 = document.createElement("a");
            child2_4.innerHTML = 'JavaScript';
            child2_4.setAttribute("href", "#aaa");
            var child2_5 = document.createElement("li");
            child2_5.setAttribute("id", Math.uuid());
            var child2_6 = document.createElement("a");
            child2_6.innerHTML = 'jQuery';
            child2_6.setAttribute("href", "#aaa");
            //合并
            var item =$('.'+id+'obj')[0],
                itemid=$('.'+id+'id').html(),
                itemjs=$('.'+id+'js').html(),
                clone = item.cloneNode(true);


            child0_3.appendChild(child0_4);
            child0_2.appendChild(child0_3);
            child0.appendChild(child0_1);
            child0.appendChild(child0_2);

            child1_3.appendChild(child1_4);
            child1_5.appendChild(child1_6);
            child1_2.appendChild(child1_3);
            child1_2.appendChild(child1_5);
            child1.appendChild(child1_1);
            child1.appendChild(child1_2);

            child2_3.appendChild(child2_4);
            child2_5.appendChild(child2_6);
            child2_2.appendChild(child2_3);
            child2_2.appendChild(child2_5);
            child2.appendChild(child2_1);
            child2.appendChild(child2_2);

            clone0.appendChild(child0);
            clone0.appendChild(child1);
            clone0.appendChild(child2);
            clone.appendChild(clone0);


            //合并完成
            $(clone).removeClass(id+'obj').attr({id:itemid,type:id,seq:Math.uuid()});
            iframeDocument.appendChild(clone);
            var objdata={'directive':'main'};
            objdata = JSON.stringify(objdata);
            messenger.targets['mainIframe'].send(objdata);
            var jsdata={
                'directive':'defaultjsbind',
                'objtype':id,
                'objid':itemid?itemid:'',
                'defaultjs':itemjs
            };
            jsdata = JSON.stringify(jsdata);
            console.log("jsdata",jsdata);
            messenger.targets['mainIframe'].send(jsdata);
        }
        else{
             var item =$('.'+id+'obj')[0],
                itemid=$('.'+id+'id').html(),
                itemjs=$('.'+id+'js').html(),
                clone = item.cloneNode(true);
               
            console.log(item);
            if(itemid!=undefined){
               
                $(clone).removeClass(id+'obj').attr({id:itemid,type:id,seq:Math.uuid()});
            }else{
               
                $(clone).removeClass(id+'obj').attr({id:Math.uuid(),type:id,seq:Math.uuid()});
            }
//		将拖拽的东西添加到iframe中当前的页面
            iframeinfo.getSpeIframeBlockobj(iframeinfo.getPageid()).appendChild(clone);
//	---	触发sortable and funclistener BEGIN ---
            var objdata={'directive':'main'};
            objdata = JSON.stringify(objdata);
            messenger.targets['mainIframe'].send(objdata);
//	---	触发sortable and funclistener END ---
            if(itemjs!=undefined){
                var jsdata={
                    'directive':'defaultjsbind',
                    'objtype':id,
                    'objid':itemid?itemid:'',
                    'defaultjs':itemjs
                };
                jsdata = JSON.stringify(jsdata);
                console.log("jsdata",jsdata);
                messenger.targets['mainIframe'].send(jsdata);
            }
        }

	}
}
function drag(ev)
{
	if(iframeinfo.getPagestate()!="preview"){
		ev.dataTransfer.setData("Text",ev.target.id);
	}else{
		alert("预览状态不可添加组件！~");
	}
}
function isEmpty(obj)
{
	for (var name in obj)
	{
		return false;
	}
	return true;
};






