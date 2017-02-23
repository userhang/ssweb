/**
 * Created by Jane Maple on 14-5-15.
 */
/**
 * Created by Administrator on 14-4-19.
 */
/*********************************************
 * 描述：面板组（panel）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('panelCtrl', ['$scope', '$location',function panelCtrl($scope, $location) {
    if(typeof $scope.attr == 'undefined') {
        $location.url('/');
        return;
    }
    //打开窗口
    var initJs="";
    $scope.ajaxinitjs=function ajaxinitjs(){

        $.ajax({

            type: "post",

            url:"/initjs",
            data: {initjs:initJs},
            async: false,
            error: function (request) {
                alert("发送请求失败！");
            },
            success: function (data) {
                console.log(data);

            },
        });
        window.open("ace.html");
    };

    //面板项个数+1操作
    $scope.addPanelli=function addPanelli(){
        var data = {'seq':$scope.seq,'directive':'addPanelli'}
        sendMessage_funcdirective(data);
    };

    //面板项个数-1操作
    $scope.cutPanelli=function cutPanelli(){
        var data = {'seq':$scope.seq,'directive':'cutPanelli'}
        sendMessage_funcdirective(data);
    };

    //增加、删除小标注
    $scope.changePanelHasSmallText=function changePanelHasSmallText(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelHasSmallText',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelhasSmallText':$scope.panelhasSmallTextChecked}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前小标注内容
    $scope.changePanelHasSmallTextContent=function changePanelHasSmallTextContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelHasSmallTextContent',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelsmallTextContent':$scope.panelsmallTextContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //增加、删除小标题
    $scope.changePanelHasSmallTitle=function changePanelHasSmallTitle(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelHasSmallTitle',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelhasSmallTitle':$scope.panelhasSmallTitleChecked}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正操作列表项小标题内容
    $scope.changePanelHasSmallTitleContent=function changePanelHasSmallTitleContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelHasSmallTitleContent',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelsmallTitleContent':$scope.panelsmallTitleContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改面板类型
    $scope.changePanelType=function changePanelType(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelType',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelType':$scope.panelTypeSelected}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正操作的是第几个列表项
    $scope.changePanelItemNo=function changePanelItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelItemNo',
            'attr':{'panelItemNo':$scope.panelItemNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //更改选择的绑定事件
    $scope.changePaneleventselect=function changePaneleventselect(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePaneleventselect',
            'attr':{'panelevent':$scope.paneleventselect}
        };
        sendMessage_funcdirective(data);
    };

    //切换当前面板项是否含有箭头class
    $scope.changePanelHasArrow=function changePanelHasArrow(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelHasArrow',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelhasArrow':$scope.panelhasArrowChecked}
        };
        sendMessage_funcdirective(data);
    };

    //切换当前面板项是否含有向前class
    $scope.changePanelHasForward=function changePanelHasForward(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelHasForward',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelhasForward':$scope.panelhasForwardChecked}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正操作的列表项是否含有气泡数字
    $scope.changePanelHasSmallCounter=function changePanelHasSmallCounter(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelHasSmallCounter',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelhasSmallCounter':$scope.panelhasSmallCounterChecked}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正操作面板项气泡数字内容
    $scope.changePanelSmallCounterContent=function changePanelSmallCounterContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelSmallCounterContent',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelsmallCounterContent':$scope.panelsmallCounterContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正操作面板项文字内容
    $scope.changePanelItemContent=function changePanelItemContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelItemContent',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelItemContent':$scope.panelItemContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //删除当前面板项
    $scope.cutthisPli=function cutthisPli(){
        var data = {'seq':$scope.seq,'directive':'cutthisPli',
            'attr':{'panelItemNo':$scope.panelItemNoSelected}}
        sendMessage_funcdirective(data);
    };

    //切换是否有圆角
    $scope.changePanelHasBorderRadius=function changePanelHasBorderRadius(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelHasBorderRadius',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelhasBorderRadius':$scope.panelhasBorderRadiusChecked}
        };
        sendMessage_funcdirective(data);
    };

    //适配函数
    $scope.addinitjs=function addinitjs(){
        ace.require("ace/ext/language_tools");
        var editor = ace.edit("editor");
        editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/javascript");
        editor.setValue("将把你写的方法适配在该组件上，确定吗？");
        $('#editEvent').modal();
    }
    //新增js事件绑定
    $scope.addpanelevent=function addpanelevent(){

            tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{'panelItemNo':$scope.panelItemNoSelected},
                'funcType':$scope.paneleventselect,
                'funcContent':""
            }
        eventData=eventDataHandle.getEventContentFromEventlistViaElemEventListAndEventData($scope.elemEventList,tmpeventdata);
        if(eventData.funcContent!=""){
            initJs=eventData.funcContent;
        }else{
            initJs="$('[seq=\""+eventData.seq+"\"]')";
            if(!isEmpty(eventData.childattr)){
                for(var key in eventData.childattr){
                    switch (key){
                        case 'panelItemNo':
                            initJs+=".children().eq("+(eventData.childattr[key]-1)+")";
                    }
                }
            }
            if(eventData.funcType.name=="popoverright"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'right'};\r" +
                    "var p=ssM.popOver(setting);\r"+
                "p.setContent('这是提示箭头朝右的浮动提示框');\r});";
            }
            else if(eventData.funcType.name=="popovertop"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'top'};\r"+
                "var p=ssM.popOver(setting);\r"+
                "p.setContent('这是提示箭头朝上的浮动提示框');\r});";
            }
            else if(eventData.funcType.name=="popoverleft"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'left'};\r"+
                "var p=ssM.popOver(setting);\r"+
                "p.setContent('这是提示箭头朝左的浮动提示框');\r});";
            }
            else if(eventData.funcType.name=="popoverbottom"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'bottom'};\r"+
                "var p=ssM.popOver(setting);\r"+
                "p.setContent('这是提示箭头朝下的浮动提示框');\r});";
            }
            else if(eventData.funcType.name=="hintmsg"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "ssM.hintbox('提示框标题','提示框内容');\r});";
            }
            else if(eventData.funcType.name=="progressBox"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "var par = ssM.progressBox('进度条标题','进度条内容信息',true,onClickCal);\r"+
                    "par.update(100);"+
                    "function onClickCal(){ alert('canceled');}"+
                    "\r});";
            }
            else if(eventData.funcType.name=="showLoading"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "ssM.loader('show',{disableScreen:false,color:'#04AED9'});\r});";
            }
            else if(eventData.funcType.name=="hideLoading"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "ssM.loader('hide');\r});";
            }
            else if(eventData.funcType.name=="popmsg"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rssM.popwin('消息内容');\r});";
            }
            else if(eventData.funcType.name=="mdown"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rx1 = event.clientX;\r\r});";
            }

            else if(eventData.funcType.name=="mup"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rx2 = event.clientX;"+
                "if(x2-x1>50){"+
                    "UserswipeRDiv();"+
                "}"+
                "if(x1-x2>50){"+
                    "UserswipeLDiv();"+
                "}\r\r});";
            }
            else{
                initJs+=".on('"+eventData.funcType.val+"',function(){\r\r});";
            }

        }
        $scope.ajaxinitjs();
    };

    //编辑js事件绑定
    $scope.editpanelevent=function editpanelevent(elemEvent){
        console.log("elemEvent  :",elemEvent);
        var initJs="",
            eventData={
                'directive':'addeventbind',
                'eventid':elemEvent.eventid,
                'seq':$scope.seq,
                'childattr':elemEvent.childattr,
                'funcType':elemEvent.funcType,
                'funcContent':elemEvent.funcContent
            };
        initJs=eventData.funcContent;
        editor.setValue(initJs);
        $('#editEvent').modal();
    };

    //删除已绑定的js事件
    $scope.delpanelevent=function delpanelevent(elemEvent){
        eventData={
            'directive':'deleventbind',
            'eventid':elemEvent.eventid,
            'seq':$scope.seq,
            'childattr':elemEvent.childattr,
            'funcType':elemEvent.funcType,
            'funcContent':elemEvent.funcContent
        };
        sendMessage_funcdirective(eventData);
    };

    //修改面板组正文文字字体
    $scope.changePanelItemContentFontFamily=function changePanelItemContentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelItemContentFontFamily',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelItemContentFontFamily':$scope.panelItemContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };

    //修改面板组小标注文字字体
    $scope.changePanelHasSmallTextContentFontFamily=function changePanelHasSmallTextContentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelHasSmallTextContentFontFamily',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelsmallTextContentFontFamily':$scope.panelsmallTextContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };

    //修改面板组小标题文字字体
    $scope.changePanelHasSmallTitleContentFontFamily=function changePanelHasSmallTitleContentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelHasSmallTitleContentFontFamily',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelsmallTitleContentFontFamily':$scope.panelsmallTitleContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };

    //修改面板组高度
    $scope.changePanelHeight=function changePanelHeight(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelHeight',
            'attr':{'panelHeight':$scope.panelHeightInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改当前面板项正文文字颜色
    $scope.changePanelItemContentColor=function changePanelItemContentColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelItemContentColor',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelItemContentColor':$scope.panelItemContentColorInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改当前面板项小标注文字颜色
    $scope.changePanelHasSmallTextContentColor=function changePanelHasSmallTextContentColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelHasSmallTextContentColor',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelsmallTextContentColor':$scope.panelsmallTextContentColorInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改当前面板项小标题文字颜色
    $scope.changePanelHasSmallTitleContentColor=function changePanelHasSmallTitleContentColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelHasSmallTitleContentColor',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelsmallTitleContentColor':$scope.panelsmallTitleContentColorInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改当前面板项背景颜色
    $scope.changePanelBackgroundColor=function changePanelBackgroundColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePanelBackgroundColor',
            'attr':{'panelItemNo':$scope.panelItemNoSelected,'panelBackgroundColor':$scope.panelBackgroundColorInput}
        };
        sendMessage_funcdirective(data);
    };

    //列表类型数据
    $scope.panelType = [
        {name:'塑料面板',val:'suliaomianban'},
        {name:'金属面板',val:'jinshumianban'}
    ];

    //文本字体数据
    $scope.componentFontFamily = [
        {name:'默认',val:'defaultFontFamily'},
        {name:'黑体',val:'HeiTi'},
        {name:'宋体',val:'SongTi'},
        {name:'Arial',val:'Arial'},
        {name:'Arial Black',val:'ArialBlack'},
        {name:'Arial Narrow',val:'ArialNarrow'},
        {name:'Verdana',val:'Verdana'},
        {name:'Georgia',val:'Georgia'},
        {name:'Times New Roman',val:'TimesNewRoman'},
        {name:'Trebuchet MS',val:'TrebuchetMS'},
        {name:'Courier New',val:'CourierNew'},
        {name:'Impact',val:'Impact'},
        {name:'Comic Sans MS',val:'ComicSansMS'},
        {name:'Tahoma',val:'Tahoma'},
        {name:'Courier',val:'Courier'},
        {name:'Lucida Sans Unicode',val:'LucidaSansUnicode'},
        {name:'Symbol',val:'Symbol'},
        {name:'Palatino Linotype',val:'PalatinoLinotype'},
        {name:'Lucida Console',val:'LucidaConsole'},
        {name:'Garamond',val:'Garamond'},
        {name:'MS Sans Serif',val:'MSSansSerif'},
        {name:'MS Serif',val:'MSSerif'},
        {name:'Bookman Old Style',val:'BookmanOldStyle'}
    ];

    //面板项事件
    $scope.panelevent = [
        {name:'normaltap(单击事件)',val:'tap'},
        {name:'normaldoubletap(双击事件)',val:'doubleTap'},
        {name:'normallongtap(长按事件)',val:'longTap'},
        {name:'normalswipeleft(左划事件)',val:'swipeLeft'},
        {name:'normalswiperight(右划事件)',val:'swipeRight'},
        {name:'normalswipeup(上划事件)',val:'swipeUp'},
        {name:'normalswipedown(下划事件)',val:'swipeDown'},
        {name:'doubleclick(双击事件)',val:'dblclick'},
        {name:'popovertop(上箭头弹出框)',val:'tap'},
        {name:'popoverleft(左箭头弹出框)',val:'tap'},
        {name:'popoverright(右箭头弹出框)',val:'tap'},
        {name:'popoverbottom(下箭头弹出框)',val:'tap'},
        {name:'mousedown(鼠标按下)',val:'mousedown'},
        {name:'mouseup(鼠标松开)',val:'mouseup'},
        {name:'hintmsg(点击触发提示框)',val:'click'},
        {name:'showLoading(点击触发显示加载环)',val:'click'},
        {name:'hideLoading(点击触发隐藏加载环)',val:'click'},
        {name:'progressBox(点击触发进度条)',val:'click'}
    ];

    //默认事件选择为第一个
    $scope.paneleventselect=$scope.panelevent[0];

    //监听
    $scope.$watch('attr', function() {
        //列表类型
        if($scope.attr.panelType != null) {
            for (var i = 0; i < $scope.panelType.length; i++) {
                if ($scope.attr.panelType.val == $scope.panelType[i].val) {
                    $scope.panelTypeSelected = $scope.panelType[i];  //当前的列表类型 iframe传来的值
                    break;
                }
            }
        }
        //面板项个数
        $scope.panelItemNo=[];
        for(var i=1;i<=$scope.attr.childCount;i++){
            $scope.panelItemNo.push(i);
        }
        //当前选的是第N个面板项项
        $scope.panelItemNoSelected=$scope.attr.panelItemNo;
        //当前面板项文字内容
        $scope.panelItemContentInput=$scope.attr.panelItemContent;
        //当前面板项是否有箭头Class
        $scope.panelhasArrowChecked=$scope.attr.panelhasArrow;
        //当前面板项是否有向前Class
        $scope.panelhasForwardChecked=$scope.attr.panelhasForward;
        //当前面板项是否有气泡数字
        $scope.panelhasSmallCounterChecked=$scope.attr.panelhasSmallCounter;
        //当前面板项气泡数字内容
        $scope.panelsmallCounterContentInput=$scope.attr.panelsmallCounterContent;
        //当前面板项是否有小标注
        $scope.panelhasSmallTextChecked=$scope.attr.panelhasSmallText;
        //当前面板项小标注内容
        $scope.panelsmallTextContentInput=$scope.attr.panelsmallTextContent;
        //当前面板项是否有小标题
        $scope.panelhasSmallTitleChecked=$scope.attr.panelhasSmallTitle;
        //当前面板项小标题内容
        $scope.panelsmallTitleContentInput=$scope.attr.panelsmallTitleContent;
        //当前面板项正文文字字体
        //当前文本字体
        if($scope.attr.panelItemContentFontFamily != null){
            /*
            *$scope.attr是domhandle_main里面的对应的组件的属性
            *$scope.Component是当前总共有的字体的数据
            *$scope.panelItemContentFontFamilySelected是属性设置栏的select表单
            */
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.panelItemContentFontFamily.val == $scope.componentFontFamily[j].val){
                    $scope.panelItemContentFontFamilySelected = $scope.componentFontFamily[j];
                }
            }
        }
        //当前面板项小标注文字字体
        if($scope.attr.panelsmallTextContentFontFamily != null){
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.panelsmallTextContentFontFamily.val == $scope.componentFontFamily[j].val){
                    $scope.panelsmallTextContentFontFamilySelected = $scope.componentFontFamily[j];
                }
            }
        }
        //当前面板项小标题文字字体
        //$scope.panelsmallTitleContentFontFamilyInput=$scope.attr.panelsmallTitleContentFontFamily;
        if($scope.attr.panelsmallTitleContentFontFamily != null){
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.panelsmallTitleContentFontFamily.val == $scope.componentFontFamily[j].val){
                    $scope.panelsmallTitleContentFontFamilySelected = $scope.componentFontFamily[j];
                }
            }
        }
        //当前面板项高度
        $scope.panelHeightInput=$scope.attr.panelHeight;
        //当前面板项是否有圆角Class
        $scope.panelhasBorderRadiusChecked=$scope.attr.panelhasBorderRadius;
        //当前面板项正文文字颜色
        $scope.panelItemContentColorInput=$scope.attr.panelItemContentColor;
        //当前面板项小标注文字颜色
        $scope.panelsmallTextContentColorInput=$scope.attr.panelsmallTextContentColor;
        //当前面板项小标题文字颜色
        $scope.panelsmallTitleContentColorInput=$scope.attr.panelsmallTitleContentColor;
        //当前面板项背景颜色
        $scope.panelBackgroundColorInput=$scope.attr.panelBackgroundColor;
    },true);

    //界面分组的文字（第一组）
    $scope.PanelTitle = '面板组设置';
    //界面分组的文字（第二组）
    $scope.PanelitemTitle = '面板项设置';
    //界面分组的文字（第三组）
    $scope.paneleventbindTitle = '添加事件绑定';
    //界面分组的文字（第四组）
    $scope.paneleventeditTitle = '编辑事件绑定';
}]);
