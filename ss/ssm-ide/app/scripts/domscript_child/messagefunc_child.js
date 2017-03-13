/**
 * Created by gyj on 14-3-30.
 */
//组件功能面板初始化
function sendMessage_funcpanelinit(target,cusattr) {

    var type = target.attr("type");
    var seq = target.attr("seq");
    var initattr=target.getInitAttr();
    //把组件的属性合并到一个对象中
	var attr= $.extend({},initattr,cusattr);
    //通过组件的seq属性获取对应的事件
	var elemEventList=eventDataHandle.getElemEventListViaSeq(seq);
	var data={'type':type,'seq':seq,'attr':attr,'elemEventList':elemEventList};
//  打印功能面板属性初始化

	console.log('【messagefunc_child.js输出】：data = ' + data);
	data = JSON.stringify(data);
	messenger.targets['parent'].send(data);
	store.storeDataToLocal();
}

/**
 *  这里是接收父页面的指示，在这监听以作相应操作
 */
messenger.listen(function (msg) {
	var msg=JSON.parse(msg);
	console.log(msg);
	switch (msg.directive)  {

		//		系统 (main.js)
		case 'changeTheme':
			changeTheme(msg.attr);
			break;
		case 'main':
			main();
			break;
		case 'changePagestate':
			changePagestate(msg.pagestate);
			break;
		case 'defaultjsbind':
			defaultjsbind(msg);
			break;
		case 'historyVersionLoadin':
			historyVersionLoadin(msg.project);
			break;


		//		页面
		case 'initpage':
//			page.sendMessage_pagefuncpanelinit();
			break;
		case 'addpage':
			page.addpage();
			break;
		case 'changeCurPage':
			page.changeCurPage(msg.toPage);
			break;
		case 'changeCurPageidContent':
			page.changeCurPageidContent(msg);
			break;
		case 'delCurPage':
			page.delCurPage(msg.curPageid);
			break;
		case 'initPageContent':
			page.initPageContent();
			break;

//普通图片(normalImage)
        //更换当前路径（图片）
        case 'changeNormalImageHref':
            jQuery("[seq="+msg.seq+"]").changeNormalImageHref(msg.attr.normalImageHref);
            break;
        //修改高度
        case 'changeNormalImageHeight':
            jQuery("[seq="+msg.seq+"]").changeNormalImageHeight(msg.attr.normalImageHeight);
            break;
        //修改高度
        case 'changeNormalImageWidth':
            jQuery("[seq="+msg.seq+"]").changeNormalImageWidth(msg.attr.normalImageWidth);
            break;
            //修改左右布局
        case 'addright':
            jQuery("[seq="+msg.seq+"]").addright();
            break;
        case 'addleft':
            jQuery("[seq="+msg.seq+"]").addleft();
            break;
        case 'addcenter':
            jQuery("[seq="+msg.seq+"]").addcenter();
            break;

//表单-复选框（inputCheckbox）
        //修改复选框标题内容
        case 'changeInputCheckboxContent':
            jQuery("[seq="+msg.seq+"]").changeInputCheckboxContent(msg.attr.inputCheckboxContent);
            break;
             //修改复选框name
        case 'changeInputCheckboxName':
            jQuery("[seq="+msg.seq+"]").changeInputCheckboxName(msg.attr.inputCheckboxName);
            break;
        //修改复选框高度
        case 'changeInputCheckboxHeight':
            jQuery("[seq="+msg.seq+"]").changeInputCheckboxHeight(msg.attr.inputCheckboxHeight);
            break;
        //修改复选框宽度
        case 'changeInputCheckboxWidth':
            jQuery("[seq="+msg.seq+"]").changeInputCheckboxWidth(msg.attr.inputCheckboxWidth);
            break;
        //修改复选框标题文字字体
        case 'changeInputCheckboxContentFontFamily':
            jQuery("[seq="+msg.seq+"]").find('label').changeComponentFontFamily(msg.attr.inputCheckboxContentFontFamily.val);
            break;

//表单-下拉列表（inputSelect）
        //修改下拉列表标题文字内容
        case 'changeInputSelectContent':
            jQuery("[seq="+msg.seq+"]").changeInputSelectContent(msg.attr.inputSelectContent);
            break;
        //修改下拉列表外部高度
        case 'changeInputSelectHeight':
            jQuery("[seq="+msg.seq+"]").changeInputSelectHeight(msg.attr.inputSelectHeight);
            break;
        //修改下拉列表外部宽度
        case 'changeInputSelectWidth':
            jQuery("[seq="+msg.seq+"]").changeInputSelectWidth(msg.attr.inputSelectWidth);
            break;
        //修改选的是第几个下拉列表
        case 'changeSelectItemNo':
            jQuery("[seq="+msg.seq+"]").changeSelectItemNo(msg.attr.selectItemNo);
            break;
        //修改第n个下拉列表的文字内容
        case 'changeInputSelectBoxContent':
            jQuery("[seq="+msg.seq+"]").changeInputSelectBoxContent(msg.attr.selectItemNo,msg.attr.inputSelectBoxContent);
            break;
        //修改第n个下拉列表的值
        case 'changeInputSelectValue':
            jQuery("[seq="+msg.seq+"]").changeInputSelectValue(msg.attr.selectItemNo,msg.attr.inputSelectValue);
            break;
        //下拉列表个数+1
        case 'addoption':
            jQuery("[seq="+msg.seq+"]").addoption();
            break;
        //下拉列表个数-1
        case 'cutoption':
            jQuery("[seq="+msg.seq+"]").cutoption();
            break;
        //修改下拉列表标题文字字体
        case 'changeInputSelectContentFontFamily':
            jQuery("[seq="+msg.seq+"]").find('label').changeComponentFontFamily(msg.attr.inputSelectContentFontFamily.val);
            break;
        //修改第n个下拉列表的文字字体
        case 'changeInputSelectBoxContentFontFamily':
            jQuery("[seq="+msg.seq+"]").find('select').changeComponentFontFamily(msg.attr.inputSelectBoxContentFontFamily.val);
            break;
        //修改下拉列表select高度
        case 'changeInputSelectContentHeight':
            jQuery("[seq="+msg.seq+"]").changeInputSelectContentHeight(msg.attr.inputSelectContentHeight);
            break;
        //修改下拉列表select宽度
        case 'changeInputSelectContentWidth':
            jQuery("[seq="+msg.seq+"]").changeInputSelectContentWidth(msg.attr.inputSelectContentWidth);
            break;

//表单-单选钮（inputRadio）
        //修改单选钮标题文字内容
        case 'changeInputRadioContent':
            jQuery("[seq="+msg.seq+"]").changeInputRadioContent(msg.attr.inputRadioContent);
            break;
             //修改单选钮标题name
        case 'changeInputRadioName':
            jQuery("[seq="+msg.seq+"]").changeInputRadioName(msg.attr.inputRadioName);
            break;
        //修改单选钮高度
        case 'changeInputRadioHeight':
            jQuery("[seq="+msg.seq+"]").changeInputRadioHeight(msg.attr.inputRadioHeight);
            break;
        //修改单选钮宽度
        case 'changeInputRadioWidth':
            jQuery("[seq="+msg.seq+"]").changeInputRadioWidth(msg.attr.inputRadioWidth);
            break;
        //修改单选钮标题文字字体
        case 'changeInputRadioContentFontFamily':
            jQuery("[seq="+msg.seq+"]").find('label').changeComponentFontFamily(msg.attr.inputRadioContentFontFamily.val);
            break;
        case 'changeInputRadioChecked':
            jQuery("[seq="+msg.seq+"]").changeInputRadioChecked(msg.attr.inputRadioStatus1);
            break;
         //单选框未选中
        case 'changeInputRadioUnchecked':
            jQuery("[seq="+msg.seq+"]").changeInputRadioUnchecked(msg.attr.inputRadioStatus2);
            break;


//表单-文本域（inputText）
        //修改文本域标题内容
        case 'changeInputTextContent':
            jQuery("[seq="+msg.seq+"]").changeInputTextContent(msg.attr.inputTextContent);
            break;
        //修改文本域label高度
        case 'changeInputTextHeight':
            jQuery("[seq="+msg.seq+"]").changeInputTextHeight(msg.attr.inputTextHeight);
            break;
        //修改文本域label宽度
        case 'changeInputTextWidth':
            jQuery("[seq="+msg.seq+"]").changeInputTextWidth(msg.attr.inputTextWidth);
            break;
        //修改文本域标题文字字体
        case 'changeInputTextContentFontFamily':
            jQuery("[seq="+msg.seq+"]").find('label').changeComponentFontFamily(msg.attr.inputTextContentFontFamily.val);
            break;
        //修改文本域文字字体
        case 'changeTextAreaContentFontFamily':
            jQuery("[seq="+msg.seq+"]").find('input').changeComponentFontFamily(msg.attr.textAreaContentFontFamily.val);
            break;
        //修改文本域input高度
        case 'changeInputTextContentHeight':
            jQuery("[seq="+msg.seq+"]").changeInputTextContentHeight(msg.attr.inputTextContentHeight);
            break;
        //修改文本域input宽度
        case 'changeInputTextContentWidth':
            jQuery("[seq="+msg.seq+"]").changeInputTextContentWidth(msg.attr.inputTextContentWidth);
            break;

//整行面板(normalDiv)
        //修改边框样式
        case 'changeHasBorder':
            jQuery("[seq="+msg.seq+"]").changeHasBorder(msg.attr.hasBorder);
            break;
        //修改高度
        case 'changeDivHeight':
            jQuery("[seq="+msg.seq+"]").changeDivHeight(msg.attr.divHeight);
            break;
        //修改背景颜色
        case 'changeDivBgColor':
            jQuery("[seq="+msg.seq+"]").changeComponentBackgroundColor(msg.attr.divBgColor);
            break;

//普通段落（normalPara）
        //修改段落文字
        case 'changeNormalParaContent':
            jQuery("[seq="+msg.seq+"]").changeNormalParaContent(msg.attr.normalParaContent);
            break;
        //修改文字字体
        case 'changeNormalParaContentFontFamily':
            jQuery("[seq="+msg.seq+"]").changeComponentFontFamily(msg.attr.normalParaContentFontFamily.val);
            break;
        //修改段落文字
        case 'changeNormalParaHeight':
            jQuery("[seq="+msg.seq+"]").changeNormalParaHeight(msg.attr.normalParaHeight);
            break;

//普通标题(normalLabel)
        //修改标题内容
        case 'changeNormalLabelContent':
            jQuery("[seq="+msg.seq+"]").changeNormalLabelContent(msg.attr.normalLabelContent);
            break;
        //修改文字字体
        case 'changeNormalLabelContentFontFamily':
            jQuery("[seq="+msg.seq+"]").changeComponentFontFamily(msg.attr.normalLabelContentFontFamily.val);
            break;
        //修改标题高度
        case 'changeNormalLabelHeight':
            jQuery("[seq="+msg.seq+"]").changeNormalLabelHeight(msg.attr.normalLabelHeight);
            break;
        //修改标题高度
        case 'changeNormalLabelWidth':
            jQuery("[seq="+msg.seq+"]").changeNormalLabelWidth(msg.attr.normalLabelWidth);
            break;

//普通分割线（normalLine）
        //修改分割线宽度
        case 'changeNormalLineWidth':
            jQuery("[seq="+msg.seq+"]").changeNormalLineWidth(msg.attr.normalLineWidth);
            break;

//图文展示【左右布局】（textphotoShow）
        //更换文字内容
        case 'changeTextPhotoShowContent':
            jQuery("[seq="+msg.seq+"]").changeTextPhotoShowContent(msg.attr.textphotoShowContent);
            break;
        //更换文字字体
        case 'changeTextPhotoShowFont':
            jQuery("[seq="+msg.seq+"]").find('p').changeComponentFontFamily(msg.attr.textphotoShowFont.val);
            break;
        //交换图文位置
        case 'changeTextPhotoPosition':
            jQuery("[seq="+msg.seq+"]").changeTextPhotoPosition();
            break;
        //更换文字大小
        case 'changeTextPhotoShowFontWeight':
            jQuery("[seq="+msg.seq+"]").changeTextPhotoShowFontWeight(msg.attr.textphotoShowFontWeight);
            break;
        //修改高度
        case 'changeTextPhotoShowHeight':
            jQuery("[seq="+msg.seq+"]").changeTextPhotoShowHeight(msg.attr.textphotoShowHeight);
            break;
        //修改左右比例
        case 'changeTextPhotoShowRatio':
            jQuery("[seq="+msg.seq+"]").changeTextPhotoShowRatio(msg.attr.textphotoShowRatio);
            break;

//图文展示【上下布局】（textphotoShow2）
        //更换文字内容
        case 'changeTextPhotoShow2Content':
            jQuery("[seq="+msg.seq+"]").changeTextPhotoShow2Content(msg.attr.textphotoShow2Content);
            break;
        //更换文字字体
        case 'changeTextPhotoShow2Font':
            jQuery("[seq="+msg.seq+"]").find('p').changeComponentFontFamily(msg.attr.textphotoShow2Font.val);
            break;
        //交换图文位置
        case 'changeTextPhoto2Position':
            jQuery("[seq="+msg.seq+"]").changeTextPhoto2Position();
            break;
        //更换文字大小
        case 'changeTextPhotoShow2FontWeight':
            jQuery("[seq="+msg.seq+"]").changeTextPhotoShow2FontWeight(msg.attr.textphotoShow2FontWeight);
            break;
        //修改宽度
        case 'changeTextPhotoShow2Width':
            jQuery("[seq="+msg.seq+"]").changeTextPhotoShow2Width(msg.attr.textphotoShow2Width);
            break;

        //修改高度
        case 'changeTextPhotoShow2Height':
            jQuery("[seq="+msg.seq+"]").changeTextPhotoShow2Height(msg.attr.textphotoShow2Height);
            break;
        //修改上下比例
        case 'changeTextPhotoShow2Ratio':
            jQuery("[seq="+msg.seq+"]").changeTextPhotoShow2Ratio(msg.attr.textphotoShow2Ratio);
            break;
        //修改背景颜色
        case 'changeTextphotoShow2BgColor':
            jQuery("[seq="+msg.seq+"]").changeComponentBackgroundColor(msg.attr.textphotoShow2BgColor);
            break;
        //修改文本颜色
        case 'changeTextphotoShow2Color':
            jQuery("[seq="+msg.seq+"]").changeComponentContentColor(msg.attr.textphotoShow2Color);
            break;

//文本展示（textShow）
        //修改文本内容
        case 'changeTextShowContent':
            jQuery("[seq="+msg.seq+"]").changeTextShowContent(msg.attr.textShowContent);
            break;
        //修改文本对齐样式
        case 'changeTextAlignType':
            jQuery("[seq="+msg.seq+"]").changeTextAlignType(msg.attr.textAlignType.val);
            break;
        //修改文本字体
        case 'changeTextShowContentFontFamily':
            jQuery("[seq="+msg.seq+"]").changeComponentFontFamily(msg.attr.textContentFontFamily.val);
            break;
        //修改文本高度
        case 'changeTextShowHeight':
            jQuery("[seq="+msg.seq+"]").changeTextShowHeight(msg.attr.textShowHeight);
            break;
        //修改文本宽度
        case 'changeTextShowWidth':
            jQuery("[seq="+msg.seq+"]").changeTextShowWidth(msg.attr.textShowWidth);
            break;
        //修改文本颜色
        case 'changeTextShowColor':
            jQuery("[seq="+msg.seq+"]").changeComponentContentColor(msg.attr.textShowColor, undefined, "textShowColor");
            break;
        //修改背景颜色
        case 'changeTextShowBgColor':
            jQuery("[seq="+msg.seq+"]").changeComponentBackgroundColor(msg.attr.textShowBgColor, undefined, "textShowBgColor");
            break;
        //更换文字大小
        case 'changeTextShowFontWeight':
            jQuery("[seq="+msg.seq+"]").changeTextShowFontWeight(msg.attr.textShowFontWeight);
            break;
        //更换文字大小
        case 'changeTextShowFontWeight1':
            jQuery("[seq="+msg.seq+"]").changeTextShowFontWeight1(msg.attr.textShowFontWeight1);
            break;

//面板块（normalDiv）
        //面板块个数+1
        case 'addblock':
            jQuery("[seq="+msg.seq+"]").addblock();
            break;
        //面板块个数-1
        case 'cutblock':
            jQuery("[seq="+msg.seq+"]").cutblock();
            break;
        //修改面板块高度
        case 'changeBlockDivHeight':
            jQuery("[seq="+msg.seq+"]").changeBlockDivHeight(msg.attr.blockDivHeight);
            break;
        //切换面板块有无边框
        case 'changeHasBlockDivBorder':
            jQuery("[seq="+msg.seq+"]").changeHasBlockDivBorder(msg.attr.hasBlockDivBorder);
            break;
        //合并面板块
        case 'combineBlockDiv':
            jQuery("[seq="+msg.seq+"]").combineBlockDiv(msg.attr.blockDivCombineA,msg.attr.blockDivCombineB);
            break;

//列表组（listul）
        //列表项个数+1
		case 'addli':
			jQuery("[seq="+msg.seq+"]").addli();
			break;
        //列表项个数-1
		case 'cutli':
			jQuery("[seq="+msg.seq+"]").cutli();
			break;
        //修改列表组样式
		case 'changeListType':
			jQuery("[seq="+msg.seq+"]").changeListType(msg.attr.listItemNo,msg.attr.listType.val);
			break;
        //切换列表组圆角样式
		case 'changeIsRoundedCorner':
			jQuery("[seq="+msg.seq+"]").changeIsRoundedCorner(msg.attr.isRoundedCorner);
			break;
		//更改选择的是第几个列表项
		case 'changeListItemNo':
			jQuery("[seq="+msg.seq+"]").changeListItemNo(msg.attr.listItemNo);
			break;
        //修改当前列表项链接内容
        case 'changeListHrefContent':
            jQuery("[seq="+msg.seq+"]").changeListHrefContent(msg.attr.listItemNo,msg.attr.listHrefContent);
            break;
        //修改当前列表项文字内容
		case 'changeListItemContent':
			jQuery("[seq="+msg.seq+"]").changeListItemContent(msg.attr.listItemNo,msg.attr.listItemContent);
			break;
        //切换当前列表项是否为标题
		case 'changeIsTitle':
			jQuery("[seq="+msg.seq+"]").changeIsTitle(msg.attr.listItemNo,msg.attr.isTitle);
			break;
        //切换是否有箭头class
		case 'changeHasArrow':
			jQuery("[seq="+msg.seq+"]").changeHasArrow(msg.attr.listItemNo,msg.attr.hasArrow);
			break;
        //切换是否有向前class
		case 'changeHasForward':
			jQuery("[seq="+msg.seq+"]").changeHasForward(msg.attr.listItemNo,msg.attr.hasForward);
			break;
        //切换是否有气泡数字
		case 'changeHasSmallCounter':
			jQuery("[seq="+msg.seq+"]").changeHasSmallCounter(msg.attr.listItemNo,msg.attr.hasSmallCounter);
			break;
        //修改气泡数字内容
		case 'changeSmallCounterContent':
			jQuery("[seq="+msg.seq+"]").changeSmallCounterContent(msg.attr.listItemNo,msg.attr.smallCounterContent);
			break;
        //切换是否有小标注
		case 'changeHasSmallText':
			jQuery("[seq="+msg.seq+"]").changeHasSmallText(msg.attr.listItemNo,msg.attr.hasSmallText);
			break;
        //修改小标注文字内容
		case 'changeSmallTextContent':
			jQuery("[seq="+msg.seq+"]").changeSmallTextContent(msg.attr.listItemNo,msg.attr.smallTextContent);
			break;
        //修改当前列表项文字字体
        case 'changeListItemContentFontFamily':
            jQuery("[seq="+msg.seq+"]").children().eq(msg.attr.listItemNo-1).find("a").changeComponentFontFamily(msg.attr.listItemContentFontFamily.val, msg.attr.listItemNo, 'listItemNo');
            break;

//标题栏（toolbar）
        //修改标题栏内容
		case 'changeToolbarContent':
			jQuery("[seq="+msg.seq+"]").changeToolbarContent(msg.attr.toolbarContent);
			break;
        //增加、删除下拉框
        case 'changeHasHeadList':
            jQuery("[seq="+msg.seq+"]").changeHasHeadList(msg.attr.hasHeadList);
            break;
        //增加、删除返回按钮
        case 'changeHasBack':
            jQuery("[seq="+msg.seq+"]").changeHasBack(msg.attr.hasBack);
            break;
        //增加、删除关于按钮
        case 'changeHasButton':
            jQuery("[seq="+msg.seq+"]").changeHasButton(msg.attr.hasButton);
            break;
        //修改"返回"按钮内容
        case 'changBackContent':
            jQuery("[seq="+msg.seq+"]").changBackContent(msg.attr.backContent);
            break;
        //修改"关于"按钮内容
        case 'changeToolbarButtonContent':
            jQuery("[seq="+msg.seq+"]").changeToolbarButtonContent(msg.attr.toolbarButtonContent);
            break;
        //刷新标题栏
        case 'reftoolbar':
            jQuery("[seq="+msg.seq+"]").reftoolbar();
            break;
        //下拉列表个数+1
        case 'addhli':
            jQuery("[seq="+msg.seq+"]").addhli(msg.attr.hasHeadList);
            break;
        //下拉列表个数-1
        case 'cuthli':
            jQuery("[seq="+msg.seq+"]").cuthli(msg.attr.hasHeadList);
            break;
        //修改标题栏文字字体
        case 'changeToolbarContentFontFamily':
            jQuery("[seq="+msg.seq+"]").find('h1').changeComponentFontFamily(msg.attr.toolbarContentFontFamily.val);
            break;
        //修改"返回"按钮文字字体
        case 'changBackContentFontFamily':
            jQuery("[seq="+msg.seq+"]").find(".back").changeComponentFontFamily(msg.attr.backContentFontFamily.val);
            break;
        //修改"关于"按钮文字内容
        case 'changeToolbarButtonContentFontFamily':
            jQuery("[seq="+msg.seq+"]").find(".button").changeComponentFontFamily(msg.attr.toolbarButtonContentFontFamily.val);
            break;
        //修改背景颜色
        case 'changeToolBarBgColor':
            jQuery("[seq="+msg.seq+"]").changeComponentBackgroundColor(msg.attr.toolBarBgColor, undefined, "toolBarBgColor");
            break;
        //修改标题颜色
        case 'changeToolBarTitleColor':
            jQuery("[seq="+msg.seq+"]").children("h1").changeComponentContentColor(msg.attr.toolBarTitleColor, undefined, "toolBarTitleColor");
            break;
        //修改返回钮颜色
        case 'changeToolBarBackColor':
            jQuery("[seq="+msg.seq+"]").find(".back").changeComponentContentColor(msg.attr.toolBarBackColor, undefined, "toolBarBackColor");
            break;
        //修改返回钮背景颜色
        case 'changeToolBarBackBgColor':
            jQuery("[seq="+msg.seq+"]").find(".back").changeComponentBackgroundColor(msg.attr.toolBarBackBgColor, undefined, "toolBarBackBgColor");
            break;
        //修改提示钮颜色
        case 'changeToolBarButtonColor':
            jQuery("[seq="+msg.seq+"]").find(".button").changeComponentContentColor(msg.attr.toolBarButtonColor, undefined, "toolBarButtonColor");
            break;
        //修改提示钮背景颜色
        case 'changeToolBarButtonBgColor':
            jQuery("[seq="+msg.seq+"]").find(".button").changeComponentBackgroundColor(msg.attr.toolBarButtonBgColor, undefined, "toolBarButtonBgColor");
            break;

//表格组件（table）
        //增加、删除标题
		case 'changeHasCaption':
			jQuery("[seq="+msg.seq+"]").changeHasCaption(msg.attr.hasCaption);
			break;
        //修改标题内容
		case 'changeCaptionContent':
			jQuery("[seq="+msg.seq+"]").changeCaptionContent(msg.attr.captionContent);
			break;
        //删除第n行
		case 'deleteTableRowNo':
			jQuery("[seq="+msg.seq+"]").deleteTableRowNo(msg.attr.tableRowNo);
			break;
        //删除第n列
		case 'deleteTableLineNo':
			jQuery("[seq="+msg.seq+"]").deleteTableLineNo(msg.attr.tableLineNo);
			break;
        //增加第N列
		case 'addTableLineNo':
			jQuery("[seq="+msg.seq+"]").addTableLineNo(msg.attr.tableLineNo2);
			break;
        //表格行数+1
		case 'addrow':
			jQuery("[seq="+msg.seq+"]").addrow();
			break;
        //表格行数-1
		case 'cutrow':
			jQuery("[seq="+msg.seq+"]").cutrow();
			break;
        //改变选的是第几行
		case 'changeTableRowNo':
			jQuery("[seq="+msg.seq+"]").changeTableRowNo(msg.attr.tableRowNo);
			break;
        //单元格左-->右+1
		case 'addCell':
			jQuery("[seq="+msg.seq+"]").addCell(msg.attr.tableRowNo);
			break;
        //单元格右-->左+1
		case 'addCell2':
			jQuery("[seq="+msg.seq+"]").addCell2(msg.attr.tableRowNo);
			break;
        //单元格右-->左-1
		case 'cutCell':
			jQuery("[seq="+msg.seq+"]").cutCell(msg.attr.tableRowNo);
			break;
        //单元格左-->右-1
		case 'cutCell2':
			jQuery("[seq="+msg.seq+"]").cutCell2(msg.attr.tableRowNo);
			break;
        //改变选的是第几个单元格
		case 'changeTableCellNo':
			jQuery("[seq="+msg.seq+"]").changeTableCellNo(msg.attr.tableRowNo,msg.attr.tableCellNo);
			break;
        //改变当前操作的单元格内容
		case 'changeTableCellContent':
			jQuery("[seq="+msg.seq+"]").changeTableCellContent(msg.attr.tableRowNo,msg.attr.tableCellNo,msg.attr.tableCellContent);
			break;
        //改变当前操作的单元格长度
		case 'changeTableCellLength':
			jQuery("[seq="+msg.seq+"]").changeTableCellLength(msg.attr.tableRowNo,msg.attr.tableCellNo,msg.attr.tableCellLength);
			break;
        //修改当前操作的单元格宽度
		case 'changeTableCellWidth':
			jQuery("[seq="+msg.seq+"]").changeTableCellWidth(msg.attr.tableRowNo,msg.attr.tableCellNo,msg.attr.tableCellWidth);
			break;
        //改变当前操作的单元格是否为表头
		case 'changeIsHeader':
			jQuery("[seq="+msg.seq+"]").changeIsHeader(msg.attr.tableRowNo,msg.attr.tableCellNo,msg.attr.isHeader);
			break;

//网格布局（）
		case 'changeGridType':
			jQuery("[seq="+msg.seq+"]").changeGridType(msg.attr.gridType.val);
			break;
		case 'addgr':
			jQuery("[seq="+msg.seq+"]").addgr(msg.attr.gridCellHeight);
			break;
		case 'cutgr':
			jQuery("[seq="+msg.seq+"]").cutgr();
			break;
		case 'addgc':
			jQuery("[seq="+msg.seq+"]").addgc(msg.attr.gridCellHeight);
			break;
		case 'cutgc':
			jQuery("[seq="+msg.seq+"]").cutgc();
			break;
		case 'addgl':
			jQuery("[seq="+msg.seq+"]").addgl(msg.attr.gridCellHeight);
			break;
		case 'cutgl':
			jQuery("[seq="+msg.seq+"]").cutgl();
			break;
		case 'changeGridCellHeight':
			jQuery("[seq="+msg.seq+"]").changeGridCellHeight(msg.attr.gridCellHeight);
			break;
		case 'changeHasGridBoder':
			jQuery("[seq="+msg.seq+"]").changeHasGridBoder(msg.attr.hasGridBoder);
			break;

//面板组（panel）
        //面板项个数+1
		case 'addPanelli':
			jQuery("[seq="+msg.seq+"]").addPanelli();
			break;
        //面板项个数-1
		case 'cutPanelli':
			jQuery("[seq="+msg.seq+"]").cutPanelli();
			break;
        //更改当前选的是第几个面板项
		case 'changePanelItemNo':
			jQuery("[seq="+msg.seq+"]").changePanelItemNo(msg.attr.panelItemNo);
			break;
        //修改面板项文字内容
		case 'changePanelItemContent':
			jQuery("[seq="+msg.seq+"]").changePanelItemContent(msg.attr.panelItemNo,msg.attr.panelItemContent);
			break;
        //修改面板项样式
		case 'changePanelType':
			jQuery("[seq="+msg.seq+"]").changePanelType(msg.attr.panelItemNo,msg.attr.panelType.val);
			break;
        //切换是否有箭头class
		case 'changePanelHasArrow':
			jQuery("[seq="+msg.seq+"]").changePanelHasArrow(msg.attr.panelItemNo,msg.attr.panelhasArrow);
			break;
        //切换是否有向前class
		case 'changePanelHasForward':
			jQuery("[seq="+msg.seq+"]").changePanelHasForward(msg.attr.panelItemNo,msg.attr.panelhasForward);
			break;
        //切换是否有小标注
		case 'changePanelHasSmallText':
			jQuery("[seq="+msg.seq+"]").changePanelHasSmallText(msg.attr.panelItemNo,msg.attr.panelhasSmallText);
			break;
        //修改小标注文字内容
        case 'changePanelHasSmallTextContent':
            jQuery("[seq="+msg.seq+"]").changePanelHasSmallTextContent(msg.attr.panelItemNo,msg.attr.panelsmallTextContent);
            break;
        //切换是否有小标题
		case 'changePanelHasSmallTitle':
			jQuery("[seq="+msg.seq+"]").changePanelHasSmallTitle(msg.attr.panelItemNo,msg.attr.panelhasSmallTitle);
			break;
        //修改小标题文字内容
		case 'changePanelHasSmallTitleContent':
			jQuery("[seq="+msg.seq+"]").changePanelHasSmallTitleContent(msg.attr.panelItemNo,msg.attr.panelsmallTitleContent);
			break;
        //删除当前面板项
		case 'cutthisPli':
			jQuery("[seq="+msg.seq+"]").cutthisPli(msg.attr.panelItemNo);
			break;
        //修改选择绑定的事件
		case'changePaneleventselect':
			jQuery("[seq="+msg.seq+"]").changePaneleventselect(msg.attr.panelevent);
        //修改面板组文字字体
        case 'changePanelItemContentFontFamily':
            jQuery("[seq="+msg.seq+"]").children().eq(msg.attr.panelItemNo-1).find("span").changeComponentFontFamily(msg.attr.panelItemContentFontFamily.val, msg.attr.panelItemNo, 'panelItemNo');
            //console.log('tttttttttttttttttttt' + msg.attr.panelItemContentFontFamily.val);
            break;
        //修改面板组小标注文字字体
        case 'changePanelHasSmallTextContentFontFamily':
            jQuery("[seq="+msg.seq+"]").children().eq(msg.attr.panelItemNo-1).find("small").changeComponentFontFamily(msg.attr.panelsmallTextContentFontFamily.val, msg.attr.panelItemNo, 'panelItemNo');
            //console.log('tttttttttttttttttttt' + msg.attr.panelsmallTextContentFontFamily.val);
            break;
        //修改面板组小标题文字字体
        case 'changePanelHasSmallTitleContentFontFamily':
            jQuery("[seq="+msg.seq+"]").children().eq(msg.attr.panelItemNo-1).find("em").changeComponentFontFamily(msg.attr.panelsmallTitleContentFontFamily.val, msg.attr.panelItemNo, 'panelItemNo');
            break;
        //修改面板项高度
        case 'changePanelHeight':
            jQuery("[seq="+msg.seq+"]").changePanelHeight(msg.attr.panelHeight);
            break;
        //切换是否为圆角
        case 'changePanelHasBorderRadius':
            jQuery("[seq="+msg.seq+"]").changePanelHasBorderRadius(msg.attr.panelhasBorderRadius);
            break;
        //修改面板项正文文字颜色
        case 'changePanelItemContentColor':
            jQuery("[seq="+msg.seq+"]").find('span').eq(msg.attr.panelItemNo-1).changeComponentContentColor(msg.attr.panelItemContentColor, msg.attr.panelItemNo-1, 'panelItemNo');
            break;
        //修改面板项小标注文字颜色
        case 'changePanelHasSmallTextContentColor':
            jQuery("[seq="+msg.seq+"]").find('small').eq(msg.attr.panelItemNo-1).changeComponentContentColor(msg.attr.panelsmallTextContentColor, msg.attr.panelItemNo-1, 'panelItemNo');
            break;
        //修改面板项小标题文字颜色
        case 'changePanelHasSmallTitleContentColor':
            jQuery("[seq="+msg.seq+"]").find('em').eq(msg.attr.panelItemNo-1).changeComponentContentColor(msg.attr.panelsmallTitleContentColor, msg.attr.panelItemNo-1, 'panelItemNo');
            break;
        //修改面板项背景颜色
        case 'changePanelBackgroundColor':
            jQuery("[seq="+msg.seq+"]").find('a').eq(msg.attr.panelItemNo-1).changeComponentBackgroundColor(msg.attr.panelBackgroundColor, msg.attr.panelItemNo-1, 'panelItemNo');
            break;

//大按钮（button）
        //修改大按钮文字内容
		case 'changeButtonContent':
			jQuery("[seq="+msg.seq+"]").changeButtonContent(msg.attr.buttonContent);
			break;
        //修改按钮文字字体
        case 'changeButtonContentFontFamily':
            jQuery("[seq="+msg.seq+"]").changeComponentFontFamily(msg.attr.buttonContentFontFamily.val);
            break;
        //修改转场动画
        case 'changeSwitchPageType':
            jQuery("[seq="+msg.seq+"]").changeSwitchPageType(msg.attr.switchPageType.val);
            break;
        //修改事件选择
        case'changeButtoneventselect':
            jQuery("[seq="+msg.seq+"]").changeButtoneventselect(msg.attr.buttonevent);
            break;
        //修改按钮链接内容
        case 'changeButtonHrefContent':
            jQuery("[seq="+msg.seq+"]").changeButtonHrefContent(msg.attr.buttonHrefContent);
            break;
        //修改按钮文字颜色
        case 'changeButtonColor':
            jQuery("[seq="+msg.seq+"]").changeComponentContentColor(msg.attr.buttonColor);
            break;
        //修改按钮背景颜色
        case 'changeButtonBgColor':
            jQuery("[seq="+msg.seq+"]").changeComponentBackgroundColor(msg.attr.buttonBgColor);
            break;

//图标按钮（iconButton）
        //修改图标按钮右移
        case 'changeIconButtonMargin':
            jQuery("[seq="+msg.seq+"]").changeIconButtonMargin(msg.attr.iconButtonMargin);
            break;
        case 'changeTextShowBgColor':
            jQuery("[seq="+msg.seq+"]").changeComponentBackgroundColor(msg.attr.textShowBgColor, undefined, "textShowBgColor");
            break;
        //修改文本颜色
        case 'changeTextShowColor':
            jQuery("[seq="+msg.seq+"]").changeComponentContentColor(msg.attr.textShowColor, undefined, "textShowColor");
            break;
        //修改图标按钮文字内容
        case 'changeIconButtonContent':
            jQuery("[seq="+msg.seq+"]").changeIconButtonContent(msg.attr.iconButtonContent);
            break;
        //修改图标按钮文字字体
        case 'changeIconButtonContentFontFamily':
            jQuery("[seq="+msg.seq+"]").changeComponentFontFamily(msg.attr.iconButtonContentFontFamily.val);
            break;
        //修改图标按钮图标类型
        case 'changeIconButtonType':
            jQuery("[seq="+msg.seq+"]").changeIconButtonType(msg.attr.iconButtonType.val);
            break;
        //修改图标按钮事件选择
        case'changeIconButtoneventselect':
            jQuery("[seq="+msg.seq+"]").changeIconButtoneventselect(msg.attr.iconButtonevent);
            break;
        //修改图标按钮连接
        case 'changeIconButtonHrefContent':
            jQuery("[seq="+msg.seq+"]").changeIconButtonHrefContent(msg.attr.iconButtonHrefContent);
            break;
        //修改图标按钮高度
        case 'changeIconButtonHeight':
            jQuery("[seq="+msg.seq+"]").changeIconButtonHeight(msg.attr.iconButtonHeight);
            break;
        //修改图标按钮宽度
        case 'changeIconButtonWidth':
            jQuery("[seq="+msg.seq+"]").changeIconButtonWidth(msg.attr.iconButtonWidth);
            break;

//图片按钮集（iconButtonDiv）
        //面板项个数+1
        case 'addIconButtonDivNum':
            jQuery("[seq="+msg.seq+"]").addIconButtonDivNum();
            break;
        //面板项个数-1
        case 'cutIconButtonDivNum':
            jQuery("[seq="+msg.seq+"]").cutIconButtonDivNum();
            break;
        //更改当前选的是第几个按钮
        case 'changeIconButtonDivItemNo':
            jQuery("[seq="+msg.seq+"]").changeIconButtonDivItemNo(msg.attr.iconButtonDivItemNo);
            break;
        //修改图标按钮文字内容
        case 'changeIconButtonDivContent':
            jQuery("[seq="+msg.seq+"]").changeIconButtonDivContent(msg.attr.iconButtonDivItemNo, msg.attr.iconButtonDivContent);
            break;
        //修改按钮是否有图片
        case 'changeIconButtonDivHasImg':
            jQuery("[seq="+msg.seq+"]").changeIconButtonDivHasImg(msg.attr.iconButtonDivItemNo, msg.attr.iconButtonDivHasImg);
            break;
        //修改按钮文字颜色
        case 'changeIconButtonDivContentColor':
            jQuery("[seq="+msg.seq+"]").find("a").eq(msg.attr.iconButtonDivItemNo-1).find("span").changeComponentContentColor(msg.attr.iconButtonDivContentColor, msg.attr.iconButtonDivItemNo-1, 'iconButtonDivItemNo');
            break;
        //修改按钮背景颜色
        case 'changeIconButtonDivBgColor':
            jQuery("[seq="+msg.seq+"]").find("a").eq(msg.attr.iconButtonDivItemNo-1).changeComponentBackgroundColor(msg.attr.iconButtonDivBgColor, msg.attr.iconButtonDivItemNo-1, 'iconButtonDivItemNo');
            break;
        //修改文字字体
        case 'changeIconButtonDivContentFontFamily':
            jQuery("[seq="+msg.seq+"]").find("a").eq(msg.attr.iconButtonDivItemNo-1).find("span").changeComponentFontFamily(msg.attr.iconButtonDivContentFontFamily.val, msg.attr.iconButtonDivItemNo, 'iconButtonDivItemNo');
            break;
        //修改图片宽高
        case 'changeIconButtonDivHeightAndWidth':
            jQuery("[seq="+msg.seq+"]").changeIconButtonDivHeightAndWidth(msg.attr.iconButtonDivHeightAndWidth, msg.attr.iconButtonDivItemNo);
            break;
        //修改按钮链接
        case 'changeIconButtonDivHrefContent':
            jQuery("[seq="+msg.seq+"]").changeIconButtonDivHrefContent(msg.attr.iconButtonDivHref, msg.attr.iconButtonDivItemNo);
            break;
        //修改文字大小
        case 'changeIconButtonDivFontSize':
            jQuery("[seq="+msg.seq+"]").find("a").eq(msg.attr.iconButtonDivItemNo-1).find("span").changeComponentContentFontSize(msg.attr.iconButtonDivFontSize, msg.attr.iconButtonDivItemNo, 'iconButtonDivItemNo');
            break;

//翻页组件（pagechange）
        //修改“首页”链接内容
        case 'changeFirstPageHrefContent':
            jQuery("[seq="+msg.seq+"]").changeFirstPageHrefContent(msg.attr.firstPageHrefContent);
            break;
        //修改“尾页”链接内容
        case 'changeLastPageHrefContent':
            jQuery("[seq="+msg.seq+"]").changeLastPageHrefContent(msg.attr.lastPageHrefContent);
            break;
        //修改“上一页”链接内容
        case 'changePrePageHrefContent':
            jQuery("[seq="+msg.seq+"]").changePrePageHrefContent(msg.attr.prePageHrefContent);
            break;
        //修改“下一页”链接内容
        case 'changeNextPageHrefContent':
            jQuery("[seq="+msg.seq+"]").changeNextPageHrefContent(msg.attr.nextPageHrefContent);
            break;
        //修改“第几页”文字内容
        case 'changePageNumItemContent':
            jQuery("[seq="+msg.seq+"]").changePageNumItemContent(msg.attr.pageNumItemContent);
            break;
        //修改字体
        case 'changePageNumItemContentFontFamily':
            jQuery("[seq="+msg.seq+"]").find("label,a").changeComponentFontFamily(msg.attr.pageNumItemContentFontFamily.val);
            break;

//标签布局（tabview）
        //修改当前选的是第几个标签
		case 'changeTabItemNo':
			jQuery("[seq="+msg.seq+"]").changeTabItemNo(msg.attr.tabItemNo);
			break;
        //增加标签
		case 'addtabli':
			jQuery("[seq="+msg.seq+"]").addtabli(msg.attr.tabItemNo);
			break;
        //删除标签
		case 'cuttabli':
			jQuery("[seq="+msg.seq+"]").cuttabli(msg.attr.tabItemNo);
			break;
        //修改标签标题内容
		case 'changeTabItemContent':
			jQuery("[seq="+msg.seq+"]").changeTabItemContent(msg.attr.tabItemNo,msg.attr.tabItemContent);
			break;
        //修改标签内容文字
        case 'changeTabContent':
            jQuery("[seq="+msg.seq+"]").changeTabContent(msg.attr.tabItemNo,msg.attr.tabContent);
            break;
        //修改标签圆角操作
		/*case 'changeIsWrapDivCorner':
			jQuery("[seq="+msg.seq+"]").changeIsWrapDivCorner(msg.attr.isWrapedCorner);
			break;*/

//树形布局（tree）
        //改变选的是第几个树
        case 'changeTreeNo':
            jQuery("[seq="+msg.seq+"]").changeTreeNo(msg.attr.treeNo);
            break;
        //改变选的是第几个列表项（元素）
		case 'changeTreeItemNo':
			jQuery("[seq="+msg.seq+"]").changeTreeItemNo(msg.attr.treeItemNo);
			break;
        //树个数+1
        case 'addtree':
            jQuery("[seq="+msg.seq+"]").addtree(msg.attr.treeNo);
            break;
        //树个数-1
        case 'cuttree':
            jQuery("[seq="+msg.seq+"]").cuttree(msg.attr.treeNo);
            break;
        //列表项个数+1
		case 'addtreeli':
			jQuery("[seq="+msg.seq+"]").addtreeli(msg.attr.treeNo);
			break;
        //列表项个数-1
		case 'cuttreeli':
			jQuery("[seq="+msg.seq+"]").cuttreeli(msg.attr.treeItemNo);
			break;
        //改变树的标题内容
        case 'changeTreeTitleContent':
            jQuery("[seq="+msg.seq+"]").changeTreeTitleContent(msg.attr.treeNo,msg.attr.treeTitleContent);
            break;
        //改变列表项内容
		case 'changeTreeItemContent':
			jQuery("[seq="+msg.seq+"]").changeTreeItemContent(msg.attr.treeItemNo,msg.attr.treeItemContent);
			break;

        //柱形图
        case 'refzhuxingtu':
            jQuery("[seq="+msg.seq+"]").refzhuxingtu();
            break;
        case 'changeZhuxingtuItemName':
            jQuery("[seq="+msg.seq+"]").changeZhuxingtuItemName();
            break;
        case 'changeZhuxingtuItemValue':
            jQuery("[seq="+msg.seq+"]").changeZhuxingtuItemValue();
            break;

//隐藏侧边栏（swipeDiv）
        //子项个数+1
        case 'addswipeDivli':
            jQuery("[seq="+msg.seq+"]").addswipeDivli();
            break;
        //子项个数-1
        case 'cutswipeDivli':
            jQuery("[seq="+msg.seq+"]").cutswipeDivli();
            break;
        //修改当前选的是第几个子项
        case 'changeSwipeDivItemNo':
            jQuery("[seq="+msg.seq+"]").changeSwipeDivItemNo(msg.attr.swipeDivItemNo);
            break;
        //修改当前子项的链接内容
        case 'changeSwipeDivItemHrefContent':
            jQuery("[seq="+msg.seq+"]").changeSwipeDivItemHrefContent(msg.attr.swipeDivItemNo,msg.attr.swipeDivItemHrefContent);
            break;
        //删除当前子项
        case 'cutthisSwipeDivli':
            jQuery("[seq="+msg.seq+"]").cutthisSwipeDivli(msg.attr.swipeDivItemNo);
            break;
        //修改当前子项的图标类型
        case 'changeSwipeDivType':
            jQuery("[seq="+msg.seq+"]").changeSwipeDivType(msg.attr.swipeDivType.val,msg.attr.swipeDivItemNo);
            break;
         case 'deleteswdiv':
            jQuery("[seq="+msg.seq+"]").deleteswdiv();
            break;
        

//滚动焦点图（focusimg）
        //修改当前选择的是第几张图片
        case 'changeImgItemNo':
            jQuery("[seq="+msg.seq+"]").changeImgItemNo(msg.attr.imgItemNo);
            break;
        //图片个数+1
        case 'addimgli':
            jQuery("[seq="+msg.seq+"]").addimgli(msg.attr.imgItemNo);
            break;
        //图片个数-1
        case 'cutimgli':
            jQuery("[seq="+msg.seq+"]").cutimgli(msg.attr.imgItemNo);
            break;

//二级菜单
        case 'twonavadd':
            jQuery("[seq="+msg.seq+"]").twonavadd();
            break;
        case 'twonavcut':
            jQuery("[seq="+msg.seq+"]").twonavcut();
            break;
        case 'changetwonavItemNo':
            jQuery("[seq="+msg.seq+"]").changetwonavItemNo(msg.attr.twonavItemNo);
            break;
        case 'changetwonavContent':
            jQuery("[seq="+msg.seq+"]").changetwonavContent(msg.attr.twonavItemNo,msg.attr.twonavContent);
            break;
        case 'twonavziadd':
            jQuery("[seq="+msg.seq+"]").twonavziadd(msg.attr.twonavItemNo);
            break;
        case 'twonavzicut':
            jQuery("[seq="+msg.seq+"]").twonavzicut(msg.attr.twonavItemNo);
            break;
        case 'changetwonavziItemNo':
            jQuery("[seq="+msg.seq+"]").changetwonavziItemNo(msg.attr.twonavItemNo,msg.attr.twonavziItemNo);
            break;
        case 'changetwonavziContent':
            jQuery("[seq="+msg.seq+"]").changetwonavziContent(msg.attr.twonavItemNo,msg.attr.twonavziItemNo,msg.attr.twonavziContent);
            break;
       

//下边栏（bottomMenu）
        //节点个数+1
        case 'addBottomMenuNum':
            jQuery("[seq="+msg.seq+"]").addBottomMenuNum();
            break;
        //节点个数-1
        case 'cutBottomMenuNum':
            jQuery("[seq="+msg.seq+"]").cutBottomMenuNum();
            break;
        //更改当前选择的节点是第几个
        case 'changeBottomMenuItemNo':
            jQuery("[seq="+msg.seq+"]").changeBottomMenuItemNo(msg.attr.bottomMenuItemNo);
            break;
        //修改当前节点的文字内容
        case 'changeBottomMenuContent':
            jQuery("[seq="+msg.seq+"]").changeBottomMenuContent(msg.attr.bottomMenuItemNo, msg.attr.bottomMenuContent);
            break;
        //修改当前节点的链接
        case 'changeBottomMenuItemHrefContent':
            jQuery("[seq="+msg.seq+"]").changeBottomMenuItemHrefContent(msg.attr.bottomMenuItemNo,msg.attr.bottomMenuItemHrefContent);
            break;
        //修改当前节点的图片
        case 'changeBottomMenuType':
            jQuery("[seq="+msg.seq+"]").changeBottomMenuType(msg.attr.bottomMenuType.val,msg.attr.bottomMenuItemNo);
            break;

//时间组件（timeshow）
        //修改背景颜色
        case 'changeTimeshowNumColor':
            jQuery("[seq="+msg.seq+"]").changeComponentColor(msg.attr.FontNumColor.val);
            break;
        //修改高度
        case 'changeTimeshowHeight':
            jQuery("[seq="+msg.seq+"]").changeTimeshowHeight(msg.attr.timeshowHeight);
            break;
        //修改宽度
        case 'changeTimeshowWidth':
            jQuery("[seq="+msg.seq+"]").changeTimeshowWidth(msg.attr.timeshowWidth);
            break;
        //修改主题
        case 'changeTimeshowType':
            jQuery("[seq="+msg.seq+"]").changeTimeshowType(msg.attr.timeshowItemNo, msg.attr.timeshowType.val);
            break;
//        case 'changeTabItemContent':
//            jQuery("[seq="+msg.seq+"]").changeTabItemContent(msg.attr.tabItemNo,msg.attr.tabItemContent);
//            break;

//表单组件（formDiv）
        //搜索框个数+1
        case 'addSearchInput':
            jQuery("[seq="+msg.seq+"]").addSearchInput();
            break;
        //搜索框个数-1
        case 'cutSearchInput':
            jQuery("[seq="+msg.seq+"]").cutSearchInput();
            break;
        //文本框个数+1
        case 'addTextInput':
            jQuery("[seq="+msg.seq+"]").addTextInput();
            break;
        //文本框个数-1
        case 'cutTextInput':
            jQuery("[seq="+msg.seq+"]").cutTextInput();
            break;
        //密码框个数+1
        case 'addPasswordInput':
            jQuery("[seq="+msg.seq+"]").addPasswordInput();
            break;
        //密码框个数-1
        case 'cutPasswordInput':
            jQuery("[seq="+msg.seq+"]").cutPasswordInput();
            break;
        //单选集个数+1
        case 'addRadioDivInput':
            jQuery("[seq="+msg.seq+"]").addRadioDivInput();
            break;
        //单选集个数-1
        case 'cutRadioDivInput':
            jQuery("[seq="+msg.seq+"]").cutRadioDivInput();
            break;
        //复选集个数+1
        case 'addCheckBoxDivInput':
            jQuery("[seq="+msg.seq+"]").addCheckBoxDivInput();
            break;
        //复选集个数-1
        case 'cutCheckBoxDivInput':
            jQuery("[seq="+msg.seq+"]").cutCheckBoxDivInput();
            break;
        //修改表单宽度 changeFormDivWidth
        case 'changeFormDivWidth':
            jQuery("[seq="+msg.seq+"]").changeFormDivWidth(msg.attr.formDivWidth);
            break;
        //修改method
        case 'changeFormDivMethod':
            jQuery("[seq="+msg.seq+"]").changeFormDivMethod(msg.attr.formDivMethod.val);
            break;
        //修改action changeFormDivAction
        case 'changeFormDivAction':
            jQuery("[seq="+msg.seq+"]").changeFormDivAction(msg.attr.formDivAction);
            break;
        //修改选择的第几个搜索框 changeSearchInputItemNo
        case 'changeSearchInputItemNo':
            jQuery("[seq="+msg.seq+"]").changeSearchInputItemNo(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo);
            break;
        //修改选择的第几个文本框 changeTextInputItemNo
        case 'changeTextInputItemNo':
            jQuery("[seq="+msg.seq+"]").changeTextInputItemNo(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo);
            break;
        //修改选择的是第几个密码框 changePasswordInputItemNo
        case 'changePasswordInputItemNo':
            jQuery("[seq="+msg.seq+"]").changePasswordInputItemNo(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo);
            break;
        //修改选择的是第几个单选集 changeRadioDivItemNo
        case 'changeRadioDivItemNo':
            jQuery("[seq="+msg.seq+"]").changeRadioDivItemNo(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.checkBoxNo);
            break;
        //修改选择的是第几个复选集 changeCheckBoxDivItemNo
        case 'changeCheckBoxDivItemNo':
            jQuery("[seq="+msg.seq+"]").changeCheckBoxDivItemNo(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo);
            break;
        //修改当前搜索框是否有标题 changeSearchInputHasTitle
        case 'changeSearchInputHasTitle':
            jQuery("[seq="+msg.seq+"]").changeSearchInputHasTitle(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo,msg.attr.searchInputHasTitle);
            break;
        //修改当前文本框是否有标题 changeTextInputHasTitle
        case 'changeTextInputHasTitle':
            jQuery("[seq="+msg.seq+"]").changeTextInputHasTitle(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo,msg.attr.textInputHasTitle);
            break;
        //修改当前密码框是否有标题 changePasswordInputHasTitle
        case 'changePasswordInputHasTitle':
            jQuery("[seq="+msg.seq+"]").changePasswordInputHasTitle(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo,msg.attr.passwordInputHasTitle);
            break;
        //修改当前单选集是否有标题 changeRadioDivHasTitle
        case 'changeRadioDivHasTitle':
            jQuery("[seq="+msg.seq+"]").changeRadioDivHasTitle(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo,msg.attr.radioDivHasTitle);
            break;
        //修改当前复选集是否有标题 changeCheckBoxDivHasTitle
        case 'changeCheckBoxDivHasTitle':
            jQuery("[seq="+msg.seq+"]").changeCheckBoxDivHasTitle(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo, msg.attr.checkBoxDivHasTitle);
            break;
        //修改当前搜索框标题内容 changeSearchInputTitleContent
        case 'changeSearchInputTitleContent':
            jQuery("[seq="+msg.seq+"]").changeSearchInputTitleContent(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo,msg.attr.searchInputTitleContent);
            break;
        //修改当前文本框标题内容 changeTextInputTitleContent
        case 'changeTextInputTitleContent':
            jQuery("[seq="+msg.seq+"]").changeTextInputTitleContent(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo,msg.attr.radioNo, msg.attr.checkBoxNo, msg.attr.textInputTitleContent);
            break;
        //修改当前密码框标题内容 changePasswordInputTitleContent
        case 'changePasswordInputTitleContent':
            jQuery("[seq="+msg.seq+"]").changePasswordInputTitleContent(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo,msg.attr.passwordInputTitleContent);
            break;
        //修改当前单选集标题内容 changeRadioDivTitleContent
        case 'changeRadioDivTitleContent':
            jQuery("[seq="+msg.seq+"]").changeRadioDivTitleContent(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo,msg.attr.radioDivTitleContent);
            break;
        //修改当前复选集标题内容 changeCheckBoxDivTitleContent
        case 'changeCheckBoxDivTitleContent':
            jQuery("[seq="+msg.seq+"]").changeCheckBoxDivTitleContent(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo,msg.attr.checkBoxDivTitleContent);
            break;
        //修改当前搜索框按钮内容 changeSearchInputButtonContent
        case 'changeSearchInputButtonContent':
            jQuery("[seq="+msg.seq+"]").changeSearchInputButtonContent(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo,msg.attr.searchInputButtonContent);
            break;
        //修改当前搜索框Placeholder changeSearchInputPlaceholderContent
        case 'changeSearchInputPlaceholderContent':
            jQuery("[seq="+msg.seq+"]").changeSearchInputPlaceholderContent(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo,msg.attr.searchInputPlaceholderContent);
            break;
        //修改当前文本框Placeholder changeTextInputPlaceholderContent
        case 'changeTextInputPlaceholderContent':
            jQuery("[seq="+msg.seq+"]").changeTextInputPlaceholderContent(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo,msg.attr.textInputPlaceholderContent);
            break;
        //修改当前密码框Placeholder changePasswordInputPlaceholderContent
        case 'changePasswordInputPlaceholderContent':
            jQuery("[seq="+msg.seq+"]").changePasswordInputPlaceholderContent(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo, msg.attr.passwordInputPlaceholderContent);
            break;
        //修改当前表单字体 changeFormDivShowContentFontFamily
        case 'changeFormDivShowContentFontFamily':
            jQuery("[seq="+msg.seq+"]").find('form').changeComponentFontFamily(msg.attr.formDivContentFontFamily.val);
            break;
        //修改当前表单背景颜色 changeFormDivBgColor
        case 'changeFormDivBgColor':
            jQuery("[seq="+msg.seq+"]").find('form').changeComponentBackgroundColor(msg.attr.formDivBgColor);
            break;
        //单选项+1 addRadioInput
        case 'addRadioInput':
            jQuery("[seq="+msg.seq+"]").addRadioInput(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo);
            break;
        //单选项-1 cutRadioInput
        case 'cutRadioInput':
            jQuery("[seq="+msg.seq+"]").cutRadioInput(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo);
            break;
        //复选项+1 addCheckBoxInput
        case 'addCheckBoxInput':
            jQuery("[seq="+msg.seq+"]").addCheckBoxInput(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo);
            break;
        //复选项-1 cutCheckBoxInput
        case 'cutCheckBoxInput':
            jQuery("[seq="+msg.seq+"]").cutCheckBoxInput(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo);
            break;
        //修改选择的是第几个单选集 changeRadioItemNo
        case 'changeRadioItemNo':
            jQuery("[seq="+msg.seq+"]").changeRadioItemNo(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo);
            break;
        //修改选择的是第几个复选项 changeCheckBoxItemNo
        case 'changeCheckBoxItemNo':
            jQuery("[seq="+msg.seq+"]").changeCheckBoxItemNo(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo);
            break;
        //修改搜索框的name changeSearchInputNameContent
        case 'changeSearchInputNameContent':
            jQuery("[seq="+msg.seq+"]").changeSearchInputNameContent(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo, msg.attr.searchInputNameContent);
            break;
        //修改文本框的name changeTextInputNameContent
        case 'changeTextInputNameContent':
            jQuery("[seq="+msg.seq+"]").changeTextInputNameContent(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo, msg.attr.textInputNameContent);
            break;
        //修改密码框的name changePasswordInputNameContent
        case 'changePasswordInputNameContent':
            jQuery("[seq="+msg.seq+"]").changePasswordInputNameContent(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo, msg.attr.passwordInputNameContent);
            break;
        //修改单选集的name changeRadioDivNameContent
        case 'changeRadioDivNameContent':
            jQuery("[seq="+msg.seq+"]").changeRadioDivNameContent(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo, msg.attr.radioDivNameContent);
            break;
        //修改复选集的name changeCheckBoxDivNameContent
        case 'changeCheckBoxDivNameContent':
            jQuery("[seq="+msg.seq+"]").changeCheckBoxDivNameContent(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo, msg.attr.checkBoxDivNameContent);
            break;
        //修改单选项value changeRadioValue
        case 'changeRadioValue':
            jQuery("[seq="+msg.seq+"]").changeRadioValue(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo, msg.attr.radioValue);
            break;
        //修改复选项value changeCheckBoxValue
        case 'changeCheckBoxValue':
            jQuery("[seq="+msg.seq+"]").changeCheckBoxValue(msg.attr.searchInputNo, msg.attr.textInputNo, msg.attr.passwordInputNo, msg.attr.radioDivNo, msg.attr.checkBoxDivNo, msg.attr.radioNo, msg.attr.checkBoxNo, msg.attr.checkBoxValue);
            break;

//事件绑定处理 (domhandle_tool.js）
		case 'addeventbind':
			jQuery("[seq="+msg.seq+"]").addorediteventbind(msg);
			break;
		case 'deleventbind':
			jQuery("[seq="+msg.seq+"]").deleventbind(msg);
			break;
	}
	store.storeDataToLocal();
});
