/**
 * Created by gyj on 14-5-1.
 */
(function ($) {
    $.fn.getInitAttr = function getInitAttr(args) {
        var initattr = {};
        var _this = $(this);
        var type = _this.attr("type");
        switch (type) {
//普通图片（normalImage）
            case 'normalImage':
                initattr = {
                      //id
                    normalImageid: _this.getnormalImageid(),
                    //当前图片路径
                    normalImageHref: _this.getNormalImageHref(),
                    //图片高度
                    normalImageHeight: _this.getNormalImageHeight(),
                    //图片宽度
                    normalImageWidth: _this.getNormalImageWidth()
                };
                break;

//表单-复选框（inputCheckbox）
            case 'inputCheckbox':
                initattr = {
                      //id
                    inputCheckboxid: _this.getinputCheckboxid(),
                      //name
                    inputCheckboxName: _this.getInputCheckboxName(),
                    //标题高度
                    inputCheckboxHeight: _this.getInputCheckboxHeight(),
                    //标题宽度
                    inputCheckboxWidth: _this.getInputCheckboxWidth(),
                    //复选框标题内容
                    inputCheckboxContent: _this.getInputCheckboxContent(),
                    //复选框标题文字字体
                    inputCheckboxContentFontFamily: _this.find('label').getComponentFontFamily()
                };
                break;

//表单-文本域（inputText）
            case 'inputText':
                initattr = {
                     //id
                  inputTextid: _this.getinputTextid(),
                    //文本域外部高度
                    inputTextHeight: _this.getInputTextHeight(),
                    //文本域外部宽度
                    inputTextWidth: _this.getInputTextWidth(),
                    //文本域标题内容
                    inputTextContent: _this.getInputTextContent(),
                    //文本域标题文字字体
                    inputTextContentFontFamily: _this.find('label').getComponentFontFamily(),
                    //文本域文字字体
                    textAreaContentFontFamily: _this.find('input').getComponentFontFamily(),
                    //文本域input高度
                    inputTextContentHeight: _this.getInputTextContentHeight(),
                    //文本域input宽度
                    inputTextContentWidth: _this.getInputTextContentWidth()
                };
                break;

//表单-下拉列表（inputSelect）
            case 'inputSelect':
                initattr = {
                       //id
                    inputSelectid: _this.getinputSelectid(),
                    //下拉列表个数
                    selectChildCount: _this.getSelectChildCount(),
                    //当前选的是第几个下拉列表
                    selectItemNo: args ? args.selectItemNo : 1,
                    //当前第n个下拉列表的值
                    inputSelectValue: _this.find("option").eq(args ? args.selectItemNo - 1 : 0).getInputSelectValue(),
                    //当前第n个下拉列表的文字内容
                    inputSelectBoxContent: _this.find("option").eq(args ? args.selectItemNo - 1 : 0).getInputSelectBoxContent(),
                    //下拉列表的外部高度
                    inputSelectHeight: _this.getInputSelectHeight(),
                    //下拉列表的外部宽度
                    inputSelectWidth: _this.getInputSelectWidth(),
                    //下拉列表标题内容
                    inputSelectContent: _this.getInputSelectContent(),
                    //下拉列表标题文字字体
                    inputSelectContentFontFamily: _this.find('label').getComponentFontFamily(),
                    //下拉列表的文字字体
                    inputSelectBoxContentFontFamily: _this.find('select').getComponentFontFamily(),
                    //下拉列表的select高度
                    inputSelectContentHeight: _this.getInputSelectContentHeight(),
                    //下拉列表的select宽度
                    inputSelectContentWidth: _this.getInputSelectContentWidth()
                };
                break;

//表单-单选钮（inputRadio）
            case 'inputRadio':
                initattr = {
                     //id
                    inputRadioid: _this.getinputRadioid(),
                    //选中状态
                    inputRadioStatus1: _this.getInputRadioCheck(),
                    //未选中状态
                    inputRadioStatus2: _this.getInputRadioCheck(),
                    //name
                    inputRadioName: _this.getInputRadioName(),
                    //选中
                   // inputRadioCkecked: _this.getInputRadioChecked(),
                    //单选钮高度
                    inputRadioHeight: _this.getInputRadioHeight(),
                    //单选钮宽度
                    inputRadioWidth: _this.getInputRadioWidth(),
                    //单选钮标题内容
                    inputRadioContent: _this.getInputRadioContent(),
                    //单选钮标题文字字体
                    inputRadioContentFontFamily: _this.find('label').getComponentFontFamily()
                };
                break;

//整行面板（normalDiv）
            case 'normalDiv':
                initattr = {
                    //id
                    normalDivid: _this.getnormalDivid(),
                    //Div高度
                    divHeight: _this.getDivHeight(),
                    //边框样式
                    hasBorder: _this.getHasBorder(),
                    //背景颜色
                    divBgColor: _this.getComponentBackgroundColor()
                };
                break;

//两列式面板（normalDivSplit）
            case 'normalDivSplit':
                initattr = {
                    //id
                    normalDivid: _this.getnormalDivid(),
                    //高度
                    divHeight: _this.getDivHeight(),
                    //边框样式
                    hasBorder: _this.getHasBorder()
                };
                break;

//普通段落（normalPara）
            case 'normalPara':
                initattr = {
                    //id
                    normalParaid: _this.getnormalParaid(),
                    //段落文字
                    normalParaContent: _this.getNormalParaContent(),
                    //文字字体
                    normalParaContentFontFamily: _this.getComponentFontFamily(),
                    //段落高度
                    normalParaHeight: _this.getNormalParaHeight()
                };
                break;

//普通标题（normalLabel）
            case 'normalLabel':
                initattr = {
                    //id
                   normalLabelid: _this.getnormalLabelid(),
                    //标题内容
                    normalLabelContent: _this.getNormalLabelContent(),
                    //文字字体
                    normalLabelContentFontFamily: _this.getComponentFontFamily(),
                    //标题高度
                    normalLabelHeight: _this.getNormalLabelHeight(),
                    //标题宽度
                    normalLabelWidth: _this.getNormalLabelWidth()
                };
                break;

//普通分割线（normalLine）
            case 'normalLine':
                initattr = {
                    //分割线宽度
                    normalLineWidth: _this.getNormalLineWidth()
                };
                break;

//面板块（blockDiv）
            case 'blockDiv':
                initattr = {
                    //id
                    blockDivid: _this.getblockDivid(),
                    //面板快高度
                    blockDivHeight: _this.getBlockDivHeight(),
                    //是否有边框
                    hasBlockDivBorder: _this.getHasBlockDivBorder()
                };
                break;

//图文展示【左右布局】（textphotoShow）
            case 'textphotoShow':
                initattr = {
                    //id
                    textphotoShowid: _this.gettextphotoShowid(),
                    //文字内容
                    textphotoShowContent: _this.getTextPhotoShowContent(),
                    //文字字体
                    textphotoShowFont: _this.find('p').getComponentFontFamily(),
                    //文字大小
                    textphotoShowFontWeight: _this.getTextPhotoShowFontWeight(),
                    //图文展示高度
                    textphotoShowHeight: _this.getTextPhotoShowHeight(),
                    //左右比例
                    textphotoShowRatio: _this.getTextPhotoShowRatio()
                };
                break;

//图文展示【上下布局】（textphotoShow2）
            case 'textphotoShow2':
                initattr = {
                    //id
                    textphotoShow2id: _this.gettextphotoShow2id(),
                    //文字内容
                    textphotoShow2Content: _this.getTextPhotoShow2Content(),
                    //文字字体
                    textphotoShow2Font: _this.find('p').getComponentFontFamily(),
                    //文字大小
                    textphotoShow2FontWeight: _this.getTextPhotoShow2FontWeight(),
                    //图文展示2高度
                    textphotoShow2Height: _this.getTextPhotoShow2Height(),
                    //上下比例
                    textphotoShow2Ratio: _this.getTextPhotoShow2Ratio(),
                    //背景颜色
                    textphotoShow2BgColor: _this.getComponentBackgroundColor(),
                    //文本颜色
                    textphotoShow2Color: _this.getComponentContentColor()

                };
                break;

//文本展示（textShow）
            case 'textShow':
                initattr = {
                     //id
                   textShowid:_this.gettextShowid(),
                    //文本内容
                    textShowContent: _this.getTextShowContent(),
                    //文本对齐方式
                    textAlignType: _this.getTextAlignType(),
                    //文本字体
                    textContentFontFamily: _this.getComponentFontFamily(),
                    //文本高度
                    textShowHeight: _this.getTextShowHeight(),
                    //文本宽度
                    textShowWidth: _this.getTextShowWidth(),
                    //文本颜色
                    textShowColor: _this.getComponentContentColor(),
                    //背景颜色
                    textShowBgColor: _this.getComponentBackgroundColor(),
                    //文字大小
                    textShowFontWeight: _this.getTextShowFontWeight(),
                    //文字大小
                    textShowFontWeight1: _this.getTextShowFontWeight1()
                };
                break;

            case 'form':
                initattr = {
                    //					标题内容
                    formTitle: _this.getFormTitle(),
                    //					列表项个数
                    formItemNoSum: _this.getFormItemCount(),
                    //					第N个列表项
                    formItemNo: args ? args.formItemNo : 0,
                    //					文字内容
                    formItemContent: _this.getFormItemContent(args ? args.formItemNo : 0),
                    //					文字内容
                    formItemValue: _this.getFormItemValue(args ? args.formItemNo : 0),
                    //					文字内容
                    formItemName: _this.getFormItemName(args ? args.formItemNo : 0)
                };
                break;

//列表组（listul）
            case 'listul':
                initattr = {
                    //列表项个数
                    childCount: _this.getChildCount(),
                    //列表组类型
                    listType: _this.getListType(),
                    //列表组圆角属性
                    isRoundedCorner: _this.getIsRoundedCorner(),
                    //第N个列表项
                    listItemNo: args ? args.listItemNo : 1,
                    //列表项链接内容
                    listHrefContent: _this.children().eq(args ? args.listItemNo - 1 : 0).getListHrefContent(),
                    //列表项文字内容
                    listItemContent: _this.children().eq(args ? args.listItemNo - 1 : 0).getListItemContent(),
                    //当前列表项是否设为标题
                    isTitle: _this.children().eq(args ? args.listItemNo - 1 : 0).getIsTitle(),
                    //当前列表项是否有箭头样式
                    hasArrow: _this.children().eq(args ? args.listItemNo - 1 : 0).getHasArrow(),
                    //当前列表项是否有向前样式
                    hasForward: _this.children().eq(args ? args.listItemNo - 1 : 0).getHasForward(),
                    //当前列表项是否有气泡数字
                    hasSmallCounter: _this.children().eq(args ? args.listItemNo - 1 : 0).getHasSmallCounter(),
                    //当前列表项的气泡数字内容
                    smallCounterContent: _this.children().eq(args ? args.listItemNo - 1 : 0).getSmallCounterContent(),
                    //当前列表项是否有小标注
                    hasSmallText: _this.children().eq(args ? args.listItemNo - 1 : 0).getHasSmallText(),
                    //当前列表项小标注内容
                    smallTextContent: _this.children().eq(args ? args.listItemNo - 1 : 0).getSmallTextContent(),
                    //当前列表项文字字体
                    listItemContentFontFamily: _this.children().eq(args ? args.listItemNo - 1 : 0).find('a').getComponentFontFamily()
                };
                break;

//大按钮（button）
            case 'button':
                initattr = {
                    //id
                     buttonid: _this.getButtonid(),
                    //按钮文字
                    buttonContent: _this.getButtonContent(),
                    //文字字体
                    buttonContentFontFamily: _this.getComponentFontFamily(),
                    //转场动画
                    switchPageType: _this.getSwitchPageType(),
                    //链接内容
                    buttonHrefContent: _this.getButtonHrefContent(),
                    //文字颜色
                    buttonColor: _this.getComponentContentColor(),
                    //背景颜色
                    buttonBgColor: _this.getComponentBackgroundColor()
                };
                break;

            

//图标按钮(iconButton)
            case 'iconButton':
                initattr = {
                    //id
                    iconButtonid:_this.geticonButtonid(),
                    //图标类型
                    iconButtonType: _this.getIconButtonType(),
                    //按钮文字
                    iconButtonContent: _this.getIconButtonContent(),
                    //文字字体
                    iconButtonContentFontFamily: _this.getComponentFontFamily(),
                    //链接内容
                    iconButtonHrefContent: _this.getIconButtonHrefContent(),
                    //按钮高度
                    iconButtonHeight: _this.getIconButtonHeight(),
                    //按钮宽度
                    iconButtonWidth: _this.getIconButtonWidth()
                };
                break;

//图片按钮集(iconButtonDiv)
            case 'iconButtonDiv':
                initattr = {
                    //id
                    iconButtonDivid: _this.find("a").eq(args ? args.iconButtonDivItemNo - 1 : 0).geticonButtonDivid(),
                    //按钮数量
                    iconButtonNum: _this.getIconButtonNum(),
                    //当前选择的是第N个面板项
                    iconButtonDivItemNo: args ? args.iconButtonDivItemNo : 1,
                    //按钮文字
                    iconButtonDivContent: _this.find("a").eq(args ? args.iconButtonDivItemNo - 1 : 0).getIconButtonDivContent(),
                    //文字颜色
                    iconButtonDivContentColor: _this.find("a").eq(args ? args.iconButtonDivItemNo - 1 : 0).find("span").getComponentContentColor(),
                    //背景颜色
                    iconButtonDivBgColor: _this.find("a").eq(args ? args.iconButtonDivItemNo - 1 : 0).getComponentBackgroundColor(),
                    //文字字体
                    iconButtonDivContentFontFamily: _this.find("a").eq(args ? args.iconButtonDivItemNo - 1 : 0).find("span").getComponentFontFamily(),
                    //图片宽高
                    iconButtonDivHeightAndWidth: _this.find("a").eq(args ? args.iconButtonDivItemNo - 1 : 0).find(".iconButtonDivImg").getIconButtonDivHeightAndWidth(),
                    //按钮链接
                    iconButtonDivHref: _this.find("a").eq(args ? args.iconButtonDivItemNo - 1 : 0).getIconButtonDivHref(),
                    //文字大小
                    iconButtonDivFontSize: _this.find("a").eq(args ? args.iconButtonDivItemNo - 1 : 0).find("span").getComponentContentFontSize(),
                    //是否有图片
                    iconButtonDivHasImg: _this.find("a").eq(args ? args.iconButtonDivItemNo - 1 : 0).getIconButtonDivHasImg()
                };
                break;

//标题栏(toolbar)
            case 'toolbar':
                initattr = {
                       //id
                    toolbarid:_this.gettoolbarid(),
                    //标题栏内容
                    toolbarContent: _this.getToolbarContent(),
                    //是否有标题下拉框
                    hasHeadList: _this.getHasHeadList(),
                    //是否有"返回"按钮
                    hasBack: _this.children().getHasBack(),
                    //是否有"关于"按钮
                    hasButton: _this.children().getHasButton(),
                    //"返回"按钮内容
                    backContent: _this.getBackContent(),
                    //"关于"按钮内容
                    toolbarButtonContent: _this.getToolbarButtonContent(),
                    //下拉列表个数
                    headListCount: _this.children().getHeadListCount(),
                    //标题栏文字字体
                    toolbarContentFontFamily: _this.find("h1").getComponentFontFamily(),
                    //"返回"按钮内容
                    backContentFontFamily: _this.find(".back").getComponentFontFamily(),
                    //"关于"按钮文字字体
                    toolbarButtonContentFontFamily: _this.find(".button").getComponentFontFamily(),
                    //背景颜色
                    toolBarBgColor: _this.getComponentBackgroundColor(),
                    //标题颜色
                    toolBarTitleColor: _this.find('h1').getComponentContentColor(),
                    //返回钮颜色
                    toolBarBackColor: _this.find('.back').getComponentContentColor(),
                    //返回钮背景颜色
                    toolBarBackBgColor: _this.find('.back').getComponentBackgroundColor(),
                    //提示钮背景颜色
                    toolBarButtonBgColor: _this.find('.button').getComponentBackgroundColor(),
                    //提示钮颜色
                    toolBarButtonColor: _this.find('.button').getComponentContentColor()
                };
                break;

//表格组件（table）
            case 'table':
                initattr = {
                    //id
                    tableid:_this.gettableid(),
                    //行数
                    childNum: _this.getChildNum(),
                    //列数
                    lineNum: _this.getLineNum(),
                    //当前行的列数
                    cellNum: _this.getCellNum(args ? args.tableRowNo - 1 : null),
                    //是否有标题
                    hasCaption: _this.getHasCaption(),
                    //标题内容
                    captionContent: _this.getCaptionContent(),
                    //第N行
                    tableRowNo: args ? args.tableRowNo : null,
                    //第N列
                    tableLineNo: args ? args.tableLineNo : null,
                    //第N个单元格
                    tableCellNo: args ? args.tableCellNo : null,
                    //单元格内容
                    tableCellContent: _this.find("tr").eq(args ? args.tableRowNo - 1 : null).getTableCellContent(args ? args.tableCellNo - 1 : null),
                    //单元格长度
                    tableCellLength: _this.find("tr").eq(args ? args.tableRowNo - 1 : null).getTableCellLength(args ? args.tableCellNo - 1 : null),
                    //单元格宽度
                    tableCellWidth: _this.find("tr").eq(args ? args.tableRowNo - 1 : null).getTableCellWidth(args ? args.tableCellNo - 1 : null),
                    //单元格为表头
                    isHeader: _this.find("tr").eq(args ? args.tableRowNo - 1 : null).getIsHeader(args ? args.tableCellNo - 1 : null)
                };
                break;

//网格布局（）
            case 'grid':
                initattr = {
                    //网格类型
                    gridType: _this.getGridType(),
                    //网格行数
                    gridRow: _this.getGridRow(),
                    //格子高
                    gridCellHeight: _this.getGridCellHeight(),
                    //格子框
                    hasGridBoder: _this.getHasGridBoder()
                };
                break;

//面板组（panel）
            case 'panel':
                initattr = {
                    //面板组类型
                    panelType: _this.getPanelType(),
                    //面板项个数
                    childCount: _this.getChildCount(),
                    //是否含有箭头class
                    panelhasArrow: _this.children().eq(args ? args.panelItemNo - 1 : 0).getPanelHasArrow(),
                    //是否含有向前class
                    panelhasForward: _this.children().eq(args ? args.panelItemNo - 1 : 0).getPanelHasForward(),
                    //当前选择的是第N个面板项
                    panelItemNo: args ? args.panelItemNo : 1,
                    //面板项文字内容
                    panelItemContent: _this.children().eq(args ? args.panelItemNo - 1 : 0).getPanelItemContent(),
                    //是否含有小标注
                    panelhasSmallText: _this.children().eq(args ? args.panelItemNo - 1 : 0).getPanelHasSmallText(),
                    //小标注内容
                    panelsmallTextContent: _this.children().eq(args ? args.panelItemNo - 1 : 0).getPanelSmallTextContent(),
                    //显示小标题
                    panelhasSmallTitle: _this.children().eq(args ? args.panelItemNo - 1 : 0).getPanelHasSmallTitle(),
                    //小标题内容
                    panelsmallTitleContent: _this.children().eq(args ? args.panelItemNo - 1 : 0).getPanelSmallTitleContent(),
                    //面板组文字字体
                    panelItemContentFontFamily: _this.children().eq(args ? args.panelItemNo - 1 : 0).find('span').getComponentFontFamily(),
                    //面板组小标注字体
                    panelsmallTextContentFontFamily: _this.children().eq(args ? args.panelItemNo - 1 : 0).find('small').getComponentFontFamily(),
                    //面板组小标题字体
                    panelsmallTitleContentFontFamily: _this.children().eq(args ? args.panelItemNo - 1 : 0).find('em').getComponentFontFamily(),
                    //面板项高度
                    panelHeight: _this.getPanelHeight(),
                    //是否为圆角
                    panelhasBorderRadius: _this.getPanelHasBorderRadius(),
                    //面板项正文文字颜色
                    panelItemContentColor: _this.find('span').eq(args ? args.panelItemNo - 1 : 0).getComponentContentColor(),
                    //面板项小标注文字颜色
                    panelsmallTextContentColor: _this.find('small').eq(args ? args.panelItemNo - 1 : 0).getComponentContentColor(),
                    //面板项小标题文字颜色
                    panelsmallTitleContentColor: _this.find('em').eq(args ? args.panelItemNo - 1 : 0).getComponentContentColor(),
                    //面板项小标题文字颜色
                    panelBackgroundColor: _this.find('a').eq(args ? args.panelItemNo - 1 : 0).getComponentBackgroundColor()
                };
                break;

//标签布局（tabview）
            case 'tabview':
                initattr = {
                    //第N个标签
                    tabItemNo: args ? args.tabItemNo : 1,
                    //标签个数
                    tabchildCount: _this.getTabChildCount(),
                    //标签标题内容
                    tabItemContent: _this.children("ul").eq(0).getTabItemContent(args ? args.tabItemNo - 1 : 0),
                    //标签内容文字
                    tabContent: _this.children("div").eq(0).getTabContent(args ? args.tabItemNo - 1 : 0)
                    //列表圆角
                    //isWrapedCorner:_this.getIsWrapedCorner()
                };
                break;

//树形布局（tree）
            case 'tree':
                initattr = {
                    //树个数
                    treeCount: _this.getTreeCount(),
                    //列表项（子元素）个数
                    treeitemCount: _this.getTreeItemCount(),
                    //当前操作的是第N个树
                    treeNo: args ? args.treeNo : 1,
                    //当前操作的是第N个列表项
                    treeItemNo: args ? args.treeItemNo : 1,
                    //树标题内容
                    treeTitleContent: _this.getTreeTitleContent(args ? args.treeNo - 1 : 0),
                    //列表项文字内容
                    treeItemContent: _this.getTreeItemContent(args ? args.treeItemNo - 1 : 0)
                };
                break;

//隐藏侧边栏（swipeDiv）
            case 'swipeDiv':
                initattr = {
                    //id
                    swipeDivid: _this.find("div").find("a").eq(args ? args.swipeDivItemNo - 1 : 0).getswipeDivid(),
                    //当前选择的是第N个列表项
                    swipeDivItemNo: args ? args.swipeDivItemNo : 1,
                    //图标类型
                    swipeDivType: _this.getSwipeDivType(args ? args.swipeDivItemNo - 1 : 0),
                    //子项个数
                    swipeDivchildCount: _this.getSwipeDivChildCount(),
                    //子项链接内容
                    swipeDivItemHrefContent: _this.find("div").children().eq(args ? args.swipeDivItemNo - 1 : 0).getSwipeDivItemHrefContent()
                };
                break;

//柱形图（zhuxingtu）
            case 'zhuxingtu':
                initattr = {
                    //柱形图标题
                    zhuxingtuTitle: args ? args.zhuxingtuTitle : "无",
                    //柱形图列数
                    zhuxingtuItemSum: args ? args.zhuxingtuItemSum : 0,
                    //每列宽度
                    zhuxingtuWidth: args ? args.zhuxingtuWidth : 30,
                    //柱形图行标
                    zhuxingtuXais: args ? args.zhuxingtuXais : "未定义行标",
                    //柱形图列标
                    zhuxingtuYais: args ? args.zhuxingtuYais : "未定义列标",
                    //当前列的列名
                    zhuxingtuItemName: args ? args.zhuxingtuItemName : "未定义列名称",
                    //当前选择是第n列
                    zhuxingtuItemNoSelected: args ? args.zhuxingtuItemNo : 0,
                    //当前列的数值
                    zhuxingtuItemValue: args ? args.zhuxingtuItemValue : 0
                };
                break;

//翻页组件（pagechange）
            case 'pagechange':
                initattr = {
                    //"首页"链接内容
                    firstPageHrefContent: _this.getFirstPageHrefContent(),
                    //"尾页"链接内容
                    lastPageHrefContent: _this.getLastPageHrefContent(),
                    //"上一页"链接内容
                    prePageHrefContent: _this.getPrePageHrefContent(),
                    //"下一页"链接内容
                    nextPageHrefContent: _this.getNextPageHrefContent(),
                    //"第几页"文字内容
                    pageNumItemContent: _this.getPageNumItemContent(),
                    //文字字体
                    pageNumItemContentFontFamily: _this.find("label,a").getComponentFontFamily()
                };
                break;

            case 'twonav':
                initattr = {
//                  获取一级导航项的个数；
                    navCount: _this.getnavCount(),
//                  下拉框选中的数值
                    twonavItemNo: args ? args.twonavItemNo : null,
//                  获取一级菜单下二级菜单的个数
                    navziCount: _this.getnavziCount(args ? args.twonavItemNo - 1 : null),
//                  当前操作的一级菜单下的二级菜单的个数;
                    twonavziItemNo: args ? args.twonavziItemNo : null,
//					一级导航项内容
                    twonavContent: _this.gettwonavContent(args ? args.twonavItemNo - 1 : null),
//					二级导航项内容
                    twonavziContent: _this.gettwonavziContent(args ? args.twonavItemNo - 1 : null, args ? args.twonavziItemNo - 1 : null)
//                  二级导航项的链接;
//                    twonavziHrefContent:_this.gettwonavziHrefContent(args?args.twonavItemNo-1:null,args?args.twonavziItemNo-1:null)
                };
                break;

//滚动焦点图（focusimg）
            case 'focusimg':
                initattr = {
                    //id
                    focusimgid: _this.find("img").eq(args ? args.imgItemNo - 1 : 0).getfocusimgid(),
                    //当前选择的是第N个图片
                    imgItemNo: args ? args.imgItemNo : 1,
                    //图片个数
                    imgchildCount: _this.getImgChildCount()
                    //面板标题内容
                    //tabItemContent:_this.children("ul").eq(0).getTabItemContent(args?args.tabItemNo-1:0),
                };
                break;

//下边栏（bottomMenu）
            case 'bottomMenu':
                initattr = {
                    //子项个数
                    bottomMenuChildNum: _this.getBottomMenuChildNum(),
                    //当前选的是第N个列表项
                    bottomMenuItemNo: args ? args.bottomMenuItemNo : 1,
                    //子项文字内容
                    bottomMenuContent: _this.children('a').eq(args ? args.bottomMenuItemNo - 1 : 0).getBottomMenuContent(),
                    //子项链接地址
                    bottomMenuItemHrefContent: _this.children('a').eq(args ? args.bottomMenuItemNo - 1 : 0).getBottomMenuItemHrefContent(),
                    //子项图标类型
                    bottomMenuType: _this.children('a').eq(args ? args.bottomMenuItemNo - 1 : 0).children('div').children('div').getBottomMenuType()
                };
                break;

//时间组件（timeshow）
            case 'timeshow':
                initattr = {
                    //组件主题
                    timeshowType: _this.getTimeshowType(),
                    //背景颜色
                    FontNumColor: _this.getComponentColor(),
                    //高度
                    timeshowHeight: _this.getTimeshowHeight(),
                    //宽度
                    timeshowWidth: _this.getTimeshowWidth()
                };
                break;

//表单组件（formDiv）
            case 'formDiv':
                initattr = {
                    //表单宽度
                    formDivWidth: _this.getFormDivWidth(),
                    //method
                    formDivMethod: _this.getFormDivMethod(),
                    //action
                    formDivAction: _this.getFormDivAction(),
                    //搜索框个数
                    searchInputNum: _this.getSearchInputNum(),
                    //文本框个数
                    textInputNum: _this.getTextInputNum(),
                    //密码框个数
                    passwordInputNum: _this.getPasswordInputNum(),
                    //单选集个数
                    radioDivNum: _this.getRadioDivNum(),
                    //复选集个数
                    checkBoxDivNum: _this.getCheckBoxDivNum(),
                    //当前操作的第几个搜索框
                    searchInputNo: args ? args.searchInputNo : 1,
                    //当前操作的第几个文本框
                    textInputNo:args ? args.textInputNo : 1,
                    //当前操作的第几个密码框
                    passwordInputNo:args ? args.passwordInputNo : 1,
                    //当前操作的第几个单选集
                    radioDivNo:args ? args.radioDivNo : 1,
                    //当前操作的第几个复选框
                    checkBoxDivNo:args ? args.checkBoxDivNo : 1,
                    //搜索框是否有标题
                    searchInputHasTitle: _this.find(".formDivSearchDiv").eq(args ? args.searchInputNo - 1 : 0).getSearchInputHasTitle(),
                    //文本框是否有标题
                    textInputHasTitle: _this.find(".formDivTextDiv").eq(args ? args.textInputNo - 1 : 0).getTextInputHasTitle(),
                    //密码框是否有标题
                    passwordInputHasTitle: _this.find(".formDivPasswordDiv").eq(args ? args.passwordInputNo - 1 : 0).getPasswordInputHasTitle(),
                    //单选集是否有标题
                    radioDivHasTitle: _this.find(".formDivRadioDiv").eq(args ? args.radioDivNo - 1 : 0).getRadioDivHasTitle(),
                    //复选集是否有标题
                    checkBoxDivHasTitle: _this.find(".formDivCheckBoxDiv").eq(args ? args.checkBoxDivNo - 1 : 0).getCheckBoxDivHasTitle(),
                    //搜索框标题内容
                    searchInputTitleContent:_this.find(".formDivSearchDiv").eq(args ? args.searchInputNo - 1 : 0).getSearchInputTitleContent(),
                    //文本框标题内容
                    textInputTitleContent:_this.find(".formDivTextDiv").eq(args ? args.textInputNo - 1 : 0).getTextInputTitleContent(),
                    //密码框标题内容
                    passwordInputTitleContent:_this.find(".formDivPasswordDiv").eq(args ? args.passwordInputNo - 1 : 0).getPasswordInputTitleContent(),
                    //单选集标题内容
                    radioDivTitleContent:_this.find(".formDivRadioDiv").eq(args ? args.radioDivNo - 1 : 0).getRadioDivTitleContent(),
                    //复选集标题内容
                    checkBoxDivTitleContent:_this.find(".formDivCheckBoxDiv").eq(args ? args.checkBoxDivNo - 1 : 0).getCheckBoxDivTitleContent(),
                    //搜索框按钮内容 searchInputButtonTitleContent
                    searchInputButtonContent:_this.find(".formDivSearchDiv").eq(args ? args.searchInputNo - 1 : 0).getSearchInputButtonContent(),
                    //搜索框Placeholder searchInputPlaceholderContent
                    searchInputPlaceholderContent:_this.find(".formDivSearchDiv").eq(args ? args.searchInputNo - 1 : 0).getSearchInputPlaceholderContent(),
                    //文本框Placeholder textInputPlaceholderContent
                    textInputPlaceholderContent:_this.find(".formDivTextDiv").eq(args ? args.textInputNo - 1 : 0).getTextInputPlaceholderContent(),
                    //密码框Placeholder passwordInputPlaceholderContent
                    passwordInputPlaceholderContent:_this.find(".formDivPasswordDiv").eq(args ? args.passwordInputNo - 1 : 0).getPasswordInputPlaceholderContent(),
                    //表单文字字体
                    formDivContentFontFamily:_this.find("form").getComponentFontFamily(),
                    //表单背景颜色
                    formDivBgColor:_this.find("form").eq(0).getComponentBackgroundColor(),
                    //单选项个数
                    radioNum:_this.find(".formDivRadioDiv").eq(args ? args.radioDivNo - 1 : 0).getRadioNum(),
                    //当前操作的第几个单选项
                    radioNo:args ? args.radioNo : 1,
                    //复选项个数
                    checkBoxNum:_this.find(".formDivCheckBoxDiv").eq(args ? args.checkBoxDivNo - 1 : 0).getCheckBoxNum(),
                    //当前操作的第几个复选项
                    checkBoxNo:args ? args.checkBoxNo : 1,
                    //搜索框name值
                    searchInputNameContent:_this.find(".formDivSearchDiv").eq(args ? args.searchInputNo - 1 : 0).getSearchInputNameContent(),
                    //文本框name值
                    textInputNameContent:_this.find(".formDivTextDiv").eq(args ? args.textInputNo - 1 : 0).getTextInputNameContent(),
                    //密码框name值
                    passwordInputNameContent:_this.find(".formDivPasswordDiv").eq(args ? args.passwordInputNo - 1 : 0).getPasswordInputNameContent(),
                    //单选集name值
                    radioDivNameContent:_this.find(".formDivRadioDiv").eq(args ? args.radioDivNo - 1 : 0).getRadioDivNameContent(),
                    //复选集name值
                    checkBoxDivNameContent:_this.find(".formDivCheckBoxDiv").eq(args ? args.checkBoxDivNo - 1 : 0).getCheckBoxDivNameContent(),
                    //单选项value
                    radioValue:_this.find(".formDivRadioDiv").eq(args ? args.radioDivNo - 1 : 0).find("input").eq(args ? args.radioNo - 1 : 0).getRadioValue(),
                    //复选项value
                    checkBoxValue:_this.find(".formDivCheckBoxDiv").eq(args ? args.checkBoxDivNo - 1 : 0).find("input").eq(args ? args.checkBoxNo - 1 : 0).getCheckBoxValue()
                };
                break;
        }
        return initattr;
    }
})(jQuery);

