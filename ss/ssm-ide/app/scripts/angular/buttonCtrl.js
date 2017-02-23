/**
 * Created by Jane Maple on 14-5-5.
 */
/*********************************************
 * 描述：大按钮（button）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('buttonCtrl', ['$scope', '$location',function buttonCtrl($scope, $location) {
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

    //改变按钮内容
    $scope.changeButtonid=$scope.id;
    $scope.changeButtonContent=function changeButtonContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeButtonContent',
            'attr':{'buttonContent':$scope.buttonContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //改变文字字体
    $scope.changeButtonContentFontFamily=function changeButtonContentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeButtonContentFontFamily',
            'attr':{'buttonContentFontFamily':$scope.buttonContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };



    //修改转场动画
    $scope.changeSwitchPageType=function changeSwitchPageType(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeSwitchPageType',
            'attr':{'switchPageType':$scope.switchPageTypeSelected}
        };
        sendMessage_funcdirective(data);
    };

    //更改链接内容
    $scope.changeButtonHrefContent=function changeButtonHrefContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeButtonHrefContent',
            'attr':{'buttonHrefContent':$scope.buttonHrefContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改事件选择
    $scope.changeButtoneventselect=function changeButtoneventselect(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeButtoneventselect',
            'attr':{'buttonevent':$scope.buttoneventselect}
        };
        sendMessage_funcdirective(data);
    };

    //修改文字颜色
    $scope.changeButtonColor=function changeButtonColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeButtonColor',
            'attr':{'buttonColor':$scope.buttonColorInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改背景颜色
    $scope.changeButtonBgColor=function changeButtonBgColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeButtonBgColor',
            'attr':{'buttonBgColor':$scope.buttonBgColorInput}
        };
        sendMessage_funcdirective(data);
    };

    //事件筛选
    $scope.isShow = function isShow(flag){

            var matchingText = $scope.seq + 'buttonEventSelect';
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
    $scope.addbuttonevent=function addbuttonevent(){

            tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{'buttonContent':$scope.buttonContentInput},
                'funcType':$scope.buttoneventselect,
                'funcContent':"",
                'flag':""
             
            };
          
        tmpeventdata.flag = $scope.seq + 'buttonEventSelect';
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
                /*
                ace.require("ace/ext/language_tools");
                var editor = ace.edit("editor");
                editor.setOptions({
                    enableBasicAutocompletion: true,
                    enableSnippets: true,
                    enableLiveAutocompletion: true
                });
                editor.setTheme("ace/theme/monokai");
                editor.getSession().setMode("ace/mode/javascript");
                editor.setValue(initJs);
               // $('#editEvent').modal();
               */
                $scope.ajaxinitjs();
            }
        }
    };


    //编辑js事件绑定
    $scope.editbuttonevent=function editbuttonevent(elemEvent){
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
    $scope.delbuttonevent=function delbuttonevent(elemEvent){
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
    $scope.buttonevent = [
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
    $scope.buttoneventselect=$scope.buttonevent[0];



    //专场动画数据
    $scope.switchPageType = [
        {name:'SLIDELEFT',val:'SLIDELEFT'},
        {name:'SLIDEUP',val:'SLIDEUP'},
        {name:'FADE',val:'FADE'},
        {name:'POP',val:'POP'},
        {name:'SWITCH',val:'SWITCH'},
        {name:'ROTATE',val:'ROTATE'},
        {name:'FLIPLEFT',val:'FLIPLEFT'},
        {name:'无',val:''}
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
        //当前按钮文字内容
        $scope.buttonContentInput=$scope.attr.buttonContent;
        //当前id
         $scope.buttonidInput=$scope.attr.buttonid;
        //链接内容
        $scope.buttonHrefContentInput=$scope.attr.buttonHrefContent;

        //转场动画
        if($scope.attr.switchPageType!=null){
            for(var k=0;k<$scope.switchPageType.length;k++){
                if($scope.attr.switchPageType.val==$scope.switchPageType[k].val){
                    $scope.switchPageTypeSelected = $scope.switchPageType[k];  //当前的列表类型 iframe传来的值
                    break;
                }
            }
        }
        //文字字体
        if($scope.attr.buttonContentFontFamily != null){
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.buttonContentFontFamily.val == $scope.componentFontFamily[j].val){
                    $scope.buttonContentFontFamilySelected = $scope.componentFontFamily[j];
                }
            }
        }

        //文字颜色
        $scope.buttonColorInput = $scope.attr.buttonColor;

        //背景颜色
        $scope.buttonBgColorInput = $scope.attr.buttonBgColor;


    },true);

    //界面分组文字（第一组）
    $scope.buttonTitle = '按钮设置';
    //界面分组文字（第二组）
    $scope.buttoneventbindTitle = '按钮事件绑定';
    //界面分组文字（第三组）
    $scope.buttoneventeditTitle = '按钮事件编辑';
}]);
