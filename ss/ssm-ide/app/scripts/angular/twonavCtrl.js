/**
 * Created by Administrator on 14-10-6.
 */
/**
 * Created by gyj on 14-4-19.
 */
/*********************************************
 * 描述：二级菜单（twonav）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('twonavCtrl', ['$scope', '$location',function twonavCtrl($scope, $location) {
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

    //导航项个数+1操作
    $scope.twonavadd=function twonavadd(){
        var data = {
            'seq':$scope.seq,
            'directive':'twonavadd'
        };
        sendMessage_funcdirective(data);
    };

    //导航项个数-1 操作;
    $scope.twonavcut=function twonavcut(){
        var data = {
            'seq':$scope.seq,
            'directive':'twonavcut'
        };
        sendMessage_funcdirective(data);
    };

    //选择第N个导航项;
    $scope.changetwonavItemNo=function changetwonavItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changetwonavItemNo',
            'attr':{'twonavItemNo':$scope.twonavItemNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //改变一级菜单的文字内容;
    $scope.changetwonavContent=function changenavItemContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changetwonavContent',
            'attr':{
                'twonavContent':$scope.twonavContentInput,
                'twonavItemNo':$scope.twonavItemNoSelected
            }
        };
        sendMessage_funcdirective(data);
    };

    //增加一级导航栏下的二级导航项的个数
    $scope.twonavziadd=function twonavziadd(){
        var data = {
            'seq':$scope.seq,
            'directive':'twonavziadd',
            'attr':{
                'twonavItemNo':$scope.twonavItemNoSelected
            }
        };
        sendMessage_funcdirective(data);
    };

    //减少一级导航栏下的二级导航项的个数
    $scope.twonavzicut=function twonavzicut(){
        var data = {
            'seq':$scope.seq,
            'directive':'twonavzicut',
            'attr':{
                'twonavItemNo':$scope.twonavItemNoSelected
            }
        };
        sendMessage_funcdirective(data);
    };

    //选择第N个子菜单项;
    $scope.changetwonavziItemNo=function changetwonavziItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changetwonavziItemNo',
            'attr':{'twonavItemNo':$scope.twonavItemNoSelected,'twonavziItemNo':$scope.twonavziItemNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //改变二级菜单的内容;
    $scope.changetwonavziContent=function changetwonavziContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changetwonavziContent',
            'attr':{
                'twonavziContent':$scope.twonavziContentInput,
                'twonavItemNo':$scope.twonavItemNoSelected,
                'twonavziItemNo':$scope.twonavziItemNoSelected
            }
        };
//        alert(data.attr.twonavziContent);
        sendMessage_funcdirective(data);
    };
    //change id
    $scope.changetwonavid=function changetwonavid(){
        var data = {
            'seq':$scope.seq,
            'directive':'changetwonavid',
            'attr':{'twonavid':$scope.twonavidInput,'twonavziItemNo':$scope.twonavziItemNoSelected}
        };

        sendMessage_funcdirective(data);
    };
    //改变二级导航的链接值;
    $scope.changetwonavziHrefContent=function changetwonavziHrefContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changetwonavziHrefContent',
            'attr':{
                'twonavziHrefContent':$scope.twonavziHrefContentInput,
                'twonavItemNo':$scope.twonavItemNoSelected,
                'twonavziItemNo':$scope.twonavziItemNoSelected
            }
        };
        sendMessage_funcdirective(data);
    };

    //事件筛选
    $scope.isShow = function isShow(flag){

        var matchingText = $scope.seq + 'twonavEventSelect';
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
    $scope.addtwonavevent=function addtwonavevent(){

            tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{'focusimgContent':$scope.twonavContentInput},
                'funcType':$scope.twonaveventselect,
                'funcContent':"",
                'flag':""

            };

        tmpeventdata.flag = $scope.seq + 'twonavEventSelect';
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
    $scope.edittwonavevent=function edittwonavevent(elemEvent){
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
    $scope.deltwonavevent=function deltwonavevent(elemEvent){
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
    $scope.twonavevent = [
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
    $scope.twonaveventselect=$scope.twonavevent[0];

    //界面分组的文字（第一组）
    $scope.TwoNav1 = '导航栏数目设置';
    //界面分组的文字（第二组）
    $scope.TwoNav2 = '导航栏一级细节设置';
    //界面分组的文字（第三组）
    $scope.TwoNav3 = '导航栏二级细节设置';
    //界面分组文字（第四组）
    $scope.twonaveventbindTitle = '导航栏事件绑定';
    //界面分组文字（第五组）
    $scope.twonaveventeditTitle = '导航栏事件编辑';

    //监听
    $scope.$watch('attr', function() {
        //id
        $scope.twonavidInput=$scope.attr.twonavid;
        //一级导航栏的个数
        $scope.twonavItemNo=[];
        for(var i = 0; i < $scope.attr.navCount; i++){
            $scope.twonavItemNo[i] = i + 1;
        }
        //当前一级导航栏的二级导航栏个数
        $scope.twonavziItemNo=[];
        for(var j = 0; j < $scope.attr.navziCount; j++){
            $scope.twonavziItemNo[j] = j + 1;
        }
        //当前选择的是第几个一级导航栏
        $scope.twonavItemNoSelected=$scope.attr.twonavItemNo;
        //当前选择的一级导航栏的文字内容
        $scope.twonavContentInput=$scope.attr.twonavContent;
        //当前选择的二级导航栏
        $scope.twonavziItemNoSelected=$scope.attr.twonavziItemNo;
        //当前选择的二级导航栏的文字内容
        $scope.twonavziContentInput=$scope.attr.twonavziContent;
        //当前选择的二级导航栏的链接内容
        $scope.twonavziHrefContentInput=$scope.attr.twonavziHrefContent;
    },true);
}]);
