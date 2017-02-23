/**
 * Created by Administrator on 14-9-11.
 */
/********************************************************
 * 描述：图标按钮（iconButton）的设置方法的参数设置
 *******************************************************/

var app = angular.module('app');
app.controller('iconButtonCtrl', ['$scope', '$location',function iconButtonCtrl($scope, $location) {
    if(typeof $scope.attr == 'undefined') {
        $location.url('/');
        return;
    }

    var initJs="";
    $scope.ajaxinitjs=function ajaxinitjs(){

        $.ajax({

            type: "post",

            url:"/initjs",
            data: {initjs:initJs},	//要发送的是ajaxFrm表单中的数据
            async: false,
            error: function (request) {
                alert("发送请求失败！");
            },
            success: function (data) {
                console.log(data);
                //将返回的结果显示到ajaxDiv中
            },
        });
        window.open("ace.html");
    };

    //修改图标按钮的高度
    $scope.changeIconButtonHeight=function changeIconButtonHeight(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonHeight',
            'attr':{'iconButtonHeight':$scope.iconButtonHeightInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改图标按钮的宽度
    $scope.changeIconButtonWidth=function changeIconButtonWidth(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonWidth',
            'attr':{'iconButtonWidth':$scope.iconButtonWidthInput}
        };
        sendMessage_funcdirective(data);
    };

    //改变图标按钮文字内容
    $scope.changeIconButtonContent=function changeIconButtonContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonContent',
            'attr':{'iconButtonContent':$scope.iconButtonContentInput}
        };
        sendMessage_funcdirective(data);
    };


    //改变图标按钮文字字体
    $scope.changeIconButtonContentFontFamily=function changeIconButtonContentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonContentFontFamily',
            'attr':{'iconButtonContentFontFamily':$scope.iconButtonContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };

    //更改图标按钮图标
    $scope.changeIconButtonType=function changeIconButtonType(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonType',
            'attr':{'iconButtonType':$scope.iconButtonTypeSelected}
        };
        sendMessage_funcdirective(data);
    };

    //更改图标按钮链接内容
    $scope.changeIconButtonHrefContent=function changeIconButtonHrefContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonHrefContent',
            'attr':{'iconButtonHrefContent':$scope.iconButtonHrefContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前选择的（是第几个）事件
    $scope.changeIconButtoneventselect=function changeIconButtoneventselect(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtoneventselect',
            'attr':{'iconButtonevent':$scope.iconButtoneventselect}
        };
        sendMessage_funcdirective(data);
    };

    //事件筛选
    $scope.isShow = function isShow(flag){

        var matchingText = $scope.seq + 'iconButtonEventSelect';
        if(flag.indexOf(matchingText) == 0){
            return true;
        }else {
            return false;
        }
    }

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

    //给图标按钮新增js事件（点击事件后的“新增”按钮之后的）
    $scope.addiconButtonevent=function addiconButtonevent(){

            tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{'iconButtonContent':$scope.iconButtonContentInput},
                'funcType':$scope.iconButtoneventselect,
                'funcContent':"",
                'flag':""
            };
        tmpeventdata.flag = $scope.seq + 'iconButtonEventSelect';
        eventData=eventDataHandle.getEventContentFromEventlistViaFlag($scope.elemEventList,tmpeventdata);
        if(eventData.funcContent!=""){
            initJs=eventData.funcContent;
        }else{
            initJs="$('[seq=\""+eventData.seq+"\"]')";
//            if(!isEmpty(eventData.childattr)){
//                for(var key in eventData.childattr){
//                    switch (key){
//                        case 'buttonItemNo':
//                            initJs+=".children().eq("+(eventData.childattr[key]-1)+")";
//                    }
//                }
//            }
            if(eventData.funcType.name=="popoverright(右箭头弹出框)"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'right'};\r" +
                    "var p=ssM.popOver(setting);\r"+
                    "p.setContent('这是提示箭头朝右的浮动提示框');\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="popovertop(上箭头弹出框)"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'top'};\r"+
                    "var p=ssM.popOver(setting);\r"+
                    "p.setContent('这是提示箭头朝上的浮动提示框');\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="popoverleft(左箭头弹出框)"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'left'};\r"+
                    "var p=ssM.popOver(setting);\r"+
                    "p.setContent('这是提示箭头朝左的浮动提示框');\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="popoverbottom(下箭头弹出框)"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'bottom'};\r"+
                    "var p=ssM.popOver(setting);\r"+
                    "p.setContent('这是提示箭头朝下的浮动提示框');\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="hintmsg(点击触发提示框)"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "ssM.hintbox('提示框标题','提示框内容');\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="progressBox(点击触发进度条)"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "var par = ssM.progressBox('进度条标题','进度条内容信息',true,onClickCal);\r"+
                    "par.update(100);"+
                    "function onClickCal(){ alert('canceled');}"+
                    "\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="showLoading(点击触发显示加载环)"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "ssM.loader('show',{disableScreen:false,color:'#04AED9'});\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="hideLoading(点击触发隐藏加载环)"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "ssM.loader('hide');\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="popmsg"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rssM.popwin('消息内容');\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="mdown"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rx1 = event.clientX;\r\r});";
                $scope.ajaxinitjs();
            }

            else if(eventData.funcType.name=="mup"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rx2 = event.clientX;"+
                    "if(x2-x1>50){"+
                    "UserswipeRDiv();"+
                    "}"+
                    "if(x1-x2>50){"+
                    "UserswipeLDiv();"+
                    "}\r\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="mouseover(鼠标移进事件)"){

                initJs+=".mouseover(function(){\r\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="mouseout(鼠标移出事件)"){

                initJs+=".onmouseout(function(){\r\r});";
                $scope.ajaxinitjs();
            }
            else{

                initJs+=".on('"+eventData.funcType.val+"',function(){\r\r});";
                $scope.ajaxinitjs();
            }
        }
    };

    //编辑已有的js事件
    $scope.editiconButtonevent=function editiconButtonevent(elemEvent){
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

    //删除已有的js事件
    $scope.deliconButtonevent=function deliconButtonevent(elemEvent){
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

    //所有可绑定事件的名称
    $scope.iconButtonevent = [
        {name:'normaltap(单击事件)',val:'tap'},
        {name:'normaldoubletap(双击事件)',val:'doubleTap'},
        {name:'normallongtap(长按事件)',val:'longTap'},
        {name:'normalswipeleft(左划事件)',val:'swipeLeft'},
        {name:'normalswiperight(右划事件)',val:'swipeRight'},
        {name:'normalswipeup(上划事件)',val:'swipeUp'},
        {name:'normalswipedown(下划事件)',val:'swipeDown'},
        {name:'doubleclick(双击事件)',val:'dblclick'},
        {name:'mouseover(鼠标移进事件)',val:'onmouseover'},
        {name:'mouseout(鼠标移出事件)',val:'onmouseout'},
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

    //默认事件是显示的第0个（select标签）
    $scope.iconButtoneventselect=$scope.iconButtonevent[0];

    //图标类型
    $scope.iconButtonType = [
        {name:'无',val:''},
        {name:'对号',val:'ICON ICON_CORRECT'},
        {name:'向左',val:'ICON ICON_LEFT'},
        {name:'向右',val:'ICON ICON_RIGHT'},
        {name:'向下',val:'ICON ICON_DOWN'},
        {name:'向上',val:'ICON ICON_UP'},
        {name:'主页',val:'ICON ICON_HOME'},
        {name:'设置',val:'ICON ICON_GEAR'},
        {name:'九宫格',val:'ICON ICON_GRID'},
        {name:'消息',val:'ICON ICON_I'},
        {name:'刷新',val:'ICON ICON_REFRESH'},
        {name:'查找',val:'ICON ICON_SEARCH'},
        {name:'警告',val:'ICON ICON_WARN'},
        {name:'右转',val:'ICON ICON_TURNRIGHT'},
        {name:'左转',val:'ICON ICON_TURNLEFT'},
        {name:'乘号',val:'ICON ICON_MULTIPLE'},
        {name:'加号',val:'ICON ICON_ADD'},
        {name:'减号',val:'ICON ICON_SUB'},
        {name:'星星',val:'ICON ICON_STAR'}
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

    //监听
    $scope.$watch('attr', function() {
        //当前id
        $scope.iconButtonidInput=$scope.attr.iconButtonid;
        //当前按钮文字内容
        $scope.iconButtonContentInput=$scope.attr.iconButtonContent;
        //当前按钮文字字体
        if($scope.attr.iconButtonContentFontFamily != null){
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.iconButtonContentFontFamily.val == $scope.componentFontFamily[j].val){
                    $scope.iconButtonContentFontFamilySelected = $scope.componentFontFamily[j];
                }
            }
        }
        //当前按钮链接内容
        $scope.iconButtonHrefContentInput=$scope.attr.iconButtonHrefContent;
        //当前按钮图标类型
        for(var i=0;i<$scope.iconButtonType.length;i++){
            if($scope.attr.iconButtonType.val==$scope.iconButtonType[i].val){
                $scope.iconButtonTypeSelected = $scope.iconButtonType[i];  //当前的列表类型 iframe传来的值
                break;
            }
        }
        //按钮高度
        $scope.iconButtonHeightInput=$scope.attr.iconButtonHeight;
        //按钮宽度
        $scope.iconButtonWidthInput=$scope.attr.iconButtonWidth;

    },true);

    //界面分组的文字（第一组）
    $scope.iconButtonTitle = '图标按钮设置';
    //界面分组的文字（第二组）
    $scope.iconButtoneventbindTitle = '图标按钮事件绑定';
    //界面分组的文字（第三组）
    $scope.iconButtoneventeditTitle = '图标按钮事件编辑';
}]);
