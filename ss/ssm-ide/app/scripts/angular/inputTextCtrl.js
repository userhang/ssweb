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
 * 描述：表单-文本域（inputText）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('inputTextCtrl', ['$scope', '$location',function inputTextCtrl($scope, $location) {
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

    //改变文本域标题文字内容
    $scope.changeInputTextContent=function changeInputTextContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeInputTextContent',
            'attr':{'inputTextContent':$scope.inputTextContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改文本域label高度
    $scope.changeInputTextHeight=function changeInputTextHeight(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeInputTextHeight',
            'attr':{'inputTextHeight':$scope.inputTextHeightInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改文本域label宽度
    $scope.changeInputTextWidth=function changeInputTextWidth(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeInputTextWidth',
            'attr':{'inputTextWidth':$scope.inputTextWidthInput}
        };
        sendMessage_funcdirective(data);
    };

    //改变文本域标题文字字体
    $scope.changeInputTextContentFontFamily=function changeInputTextContentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeInputTextContentFontFamily',
            'attr':{'inputTextContentFontFamily':$scope.inputTextContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };

    //改变文本域文字字体
    $scope.changeTextAreaContentFontFamily=function changeTextAreaContentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTextAreaContentFontFamily',
            'attr':{'textAreaContentFontFamily':$scope.textAreaContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };

    //修改文本域input高度
    $scope.changeInputTextContentHeight=function changeInputTextContentHeight(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeInputTextContentHeight',
            'attr':{'inputTextContentHeight':$scope.inputTextContentHeightInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改文本域input宽度
    $scope.changeInputTextContentWidth=function changeInputTextContentWidth(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeInputTextContentWidth',
            'attr':{'inputTextContentWidth':$scope.inputTextContentWidthInput}
        };
        sendMessage_funcdirective(data);
    };

     //事件筛选
    $scope.isShow = function isShow(flag){

            var matchingText = $scope.seq + 'inputTextEventSelect';
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
    $scope.addinputTextevent=function addinputTextevent(){

            tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{'buttonContent':$scope.buttonContentInput},
                'funcType':$scope.inputTexteventselect,
                'funcContent':"",
                'flag':""
             
            };
          
        tmpeventdata.flag = $scope.seq + 'inputTextEventSelect';
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
            else{
               
                initJs+=".on('"+eventData.funcType.val+"',function(){\r\r});";
               $scope.ajaxinitjs();
            }
        }
    };

    //编辑js事件绑定
    $scope.editinputTextevent=function editinputTextevent(elemEvent){
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
    $scope.delinputTextevent=function delinputTextevent(elemEvent){
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
    $scope.inputTextevent = [
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

    //默认事件选择为第一个
    $scope.inputTexteventselect=$scope.inputTextevent[0];

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
         $scope.inputTextidInput=$scope.attr.inputTextid;
        //当前文本域标题内容
        $scope.inputTextContentInput=$scope.attr.inputTextContent;
        //文本域label高度
        $scope.inputTextHeightInput=$scope.attr.inputTextHeight;
        //文本域label宽度
        $scope.inputTextWidthInput=$scope.attr.inputTextWidth;
        //当前文本域标题文字字体
        //$scope.inputTextContentFontFamilyInput=$scope.attr.inputTextContentFontFamily;
        if($scope.attr.inputTextContentFontFamily != null){
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.inputTextContentFontFamily.val == $scope.componentFontFamily[j].val){
                    $scope.inputTextContentFontFamilySelected = $scope.componentFontFamily[j];
                }
            }
        }
        //当前文本域文字字体
        //$scope.textAreaContentFontFamilyInput=$scope.attr.textAreaContentFontFamily;
        if($scope.attr.textAreaContentFontFamily != null){
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.textAreaContentFontFamily.val == $scope.componentFontFamily[j].val){
                    $scope.textAreaContentFontFamilySelected = $scope.componentFontFamily[j];
                }
            }
        }
        //文本域input高度
        $scope.inputTextContentHeightInput=$scope.attr.inputTextContentHeight;
        //文本域input宽度
        $scope.inputTextContentWidthInput=$scope.attr.inputTextContentWidth;
    },true);

    //界面分组的文字（第一组）
    $scope.inputTextTitle = '文本框设置';
     //界面分组文字（第二组）
    $scope.inputTexteventbindTitle = '按钮事件绑定';
    //界面分组文字（第三组）
    $scope.inputTexteventeditTitle = '按钮事件编辑';
}]);
