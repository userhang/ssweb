/**
 * Created by Administrator on 14-12-29.
 */
/**
 * Created by Administrator on 14-12-29.
 */
/**
 * Created by Jane Maple on 14-5-5.
 */
/*********************************************
 * 描述：表单-下拉列表（inputSelect）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('inputSelectCtrl', ['$scope', '$location',function inputSelectCtrl($scope, $location) {
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

    //下拉列表个数+1操作
    $scope.addoption=function addoption(){
        var data = {'seq':$scope.seq,'directive':'addoption'}
        sendMessage_funcdirective(data);
    };

    //下拉列表个数-1操作
    $scope.cutoption=function cutoption(){
        var data = {'seq':$scope.seq,'directive':'cutoption'}
        sendMessage_funcdirective(data);
    };

    //修改下拉列表标题内容
    $scope.changeInputSelectContent=function changeInputSelectContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeInputSelectContent',
            'attr':{'inputSelectContent':$scope.inputSelectContentInput}
        };
        sendMessage_funcdirective(data);
    };

  
    //修改下拉列表外部高度
    $scope.changeInputSelectHeight=function changeInputSelectHeight(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeInputSelectHeight',
            'attr':{'inputSelectHeight':$scope.inputSelectHeightInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改下拉列表外部宽度
    $scope.changeInputSelectWidth=function changeInputSelectWidth(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeInputSelectWidth',
            'attr':{'inputSelectWidth':$scope.inputSelectWidthInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正操作的是第几个下拉列表
    $scope.changeSelectItemNo=function changeSelectItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeSelectItemNo',
            'attr':{'selectItemNo':$scope.selectItemNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //修改第n个下拉列表的文字内容
    $scope.changeInputSelectBoxContent=function changeInputSelectBoxContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeInputSelectBoxContent',
            'attr':{'selectItemNo':$scope.selectItemNoSelected,'inputSelectBoxContent':$scope.inputSelectBoxContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改第n个下拉列表的值
    $scope.changeInputSelectValue=function changeInputSelectValue(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeInputSelectValue',
            'attr':{'selectItemNo':$scope.selectItemNoSelected,'inputSelectValue':$scope.inputSelectValueInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改下拉列表标题文字字体
    $scope.changeInputSelectContentFontFamily=function changeInputSelectContentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeInputSelectContentFontFamily',
            'attr':{'inputSelectContentFontFamily':$scope.inputSelectContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };

    //修改下拉列表文字字体
    $scope.changeInputSelectBoxContentFontFamily=function changeInputSelectBoxContentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeInputSelectBoxContentFontFamily',
            'attr':{'inputSelectBoxContentFontFamily':$scope.inputSelectBoxContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };

    //修改下拉列表select高度
    $scope.changeInputSelectContentHeight=function changeInputSelectContentHeight(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeInputSelectContentHeight',
            'attr':{'inputSelectContentHeight':$scope.inputSelectContentHeightInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改下拉列表select宽度
    $scope.changeInputSelectContentWidth=function changeInputSelectContentWidth(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeInputSelectContentWidth',
            'attr':{'inputSelectContentWidth':$scope.inputSelectContentWidthInput}
        };
        sendMessage_funcdirective(data);
    };

     //事件筛选
    $scope.isShow = function isShow(flag){

            var matchingText = $scope.seq + 'inputSelectEventSelect';
            if(flag.indexOf(matchingText) == 0){
                return true;
            }else {
                return false;
            }
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
    $scope.addinputSelectevent=function addinputSelectevent(){

            tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{'inputSelectContent':$scope.inputSelectContentInput},
                'funcType':$scope.inputSelecteventselect,
                'funcContent':"",
                'flag':""
             
            };
          
        tmpeventdata.flag = $scope.seq + 'inputSelectEventSelect';
        //在这里全局变量就已经被改变了
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
             else if(eventData.funcType.name=="SelectedIndexChanged(改变响应事件)"){
               
                     var sinit= "var select=document.getElementById();"+
                          "var selectch=select.lastChild;"+
                     "selectch.onchange = function(){};";
                   
                initJs+=".onmouseout(function(){\r\r});";
                $scope.ajaxinitjs();
            }
            else{
               
                initJs+=".on('"+eventData.funcType.val+"',function(){\r\r});";
                $scope.ajaxinitjs();
            }
        }
    };

    //编辑js事件绑定
    $scope.editinputSelectevent=function editinputSelectevent(elemEvent){
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

    //删除js事件绑定
    $scope.delinputSelectevent=function delinputSelectevent(elemEvent){
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
 
    //面板项事件
    $scope.inputSelectevent = [
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
        {name:'progressBox(点击触发进度条)',val:'click'},
        {name:'SelectedIndexChanged(改变响应事件)',val:'onchange'}
    ];

    //默认事件选择为第一个
    $scope.inputSelecteventselect=$scope.inputSelectevent[0];

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
         $scope.inputSelectidInput=$scope.attr.inputSelectid;
        //拉列表个数
        $scope.selectItemNo=[];
        for(var i=1;i<=$scope.attr.selectChildCount;i++){
            $scope.selectItemNo.push(i);
        }
        //当前选的正操作的第N个下拉列表
        $scope.selectItemNoSelected=$scope.attr.selectItemNo;
        //第n个下拉列表的值
        $scope.inputSelectValueInput=$scope.attr.inputSelectValue;
        //第n个下拉列表的文字内容
        $scope.inputSelectBoxContentInput=$scope.attr.inputSelectBoxContent;
        //下拉列表标题内容
        $scope.inputSelectContentInput=$scope.attr.inputSelectContent;
        //下拉列表外部高度
        $scope.inputSelectHeightInput=$scope.attr.inputSelectHeight;
        //下拉列表外部宽度
        $scope.inputSelectWidthInput=$scope.attr.inputSelectWidth;
        //下拉列表标题文字字体
        //$scope.inputSelectContentFontFamilyInput=$scope.attr.inputSelectContentFontFamily;
        if($scope.attr.inputSelectContentFontFamily != null){
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.inputSelectContentFontFamily.val == $scope.componentFontFamily[j].val){
                    $scope.inputSelectContentFontFamilySelected = $scope.componentFontFamily[j];
                }
            }
        }
        //下拉列表的文字字体
        //$scope.inputSelectBoxContentFontFamilyInput=$scope.attr.inputSelectBoxContentFontFamily;
        if($scope.attr.inputSelectBoxContentFontFamily != null){
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.inputSelectBoxContentFontFamily.val == $scope.componentFontFamily[j].val){
                    $scope.inputSelectBoxContentFontFamilySelected = $scope.componentFontFamily[j];
                }
            }
        }
        //下拉列表select高度
        $scope.inputSelectContentHeightInput=$scope.attr.inputSelectContentHeight;
        //下拉列表select宽度
        $scope.inputSelectContentWidthInput=$scope.attr.inputSelectContentWidth;
         $scope.buttonColorInput = $scope.attr.buttonColor;
    },true);

    //界面分组的文字（第一组）
    $scope.inputSelectTitle = '下拉列表设置';
    //界面分组文字（第二组）
    $scope.inputSelecteventbindTitle = '下拉列表事件绑定';
    //界面分组文字（第三组）
    $scope.inputSelecteventeditTitle = '下拉列表事件编辑';
}]);
