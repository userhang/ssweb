/**
 * Created by fd on 2014/12/31.
 */
/*********************************************
 * 描述：下边栏（bottomMenu）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('bottomMenuCtrl', ['$scope', '$location',function bottomMenuCtrl($scope, $location) {
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

    //子项个数+1操作
    $scope.addBottomMenuNum=function addBottomMenuNum(){
        var data = {'seq':$scope.seq,'directive':'addBottomMenuNum'}
        sendMessage_funcdirective(data);
    };

    //子项个数-1操作
    $scope.cutBottomMenuNum=function cutBottomMenuNum(){
        var data = {'seq':$scope.seq,'directive':'cutBottomMenuNum'}
        sendMessage_funcdirective(data);
    };

    //更改当前正操作的是第几个子项
    $scope.changeBottomMenuItemNo=function changeBottomMenuItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeBottomMenuItemNo',
            'attr':{'bottomMenuItemNo':$scope.bottomMenuItemNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正操作子项文字内容
    $scope.changeBottomMenuContent=function changeBottomMenuContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeBottomMenuContent',
            'attr':{'bottomMenuItemNo':$scope.bottomMenuItemNoSelected,'bottomMenuContent':$scope.bottomMenuContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改子项链接内容
    $scope.changeBottomMenuItemHrefContent=function changeBottomMenuItemHrefContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeBottomMenuItemHrefContent',
            'attr':{'bottomMenuItemNo':$scope.bottomMenuItemNoSelected,'bottomMenuItemHrefContent':$scope.bottomMenuItemHrefContentInput}
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
    $scope.addBottomMenuEvent=function addBottomMenuEvent(){

            tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{'bottomMenuContent':$scope.bottomMenuContentInput},
                'funcType':$scope.bottomMenueventselect,
                'funcContent':""
            };
        //console.log("aaaaaaaaaaaaaaaaaaaa" + tmpeventdata.seq);
        eventData=eventDataHandle.getEventContentFromEventlistViaElemEventListAndEventData($scope.elemEventList,tmpeventdata);

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
            if(eventData.funcType.name=="popoverright"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'right'};\r" +
                    "var p=ssM.popOver(setting);\r"+
                    "p.setContent('这是提示箭头朝右的浮动提示框');"+
                    "$(this).children().eq(0).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第一个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(1).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第二个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(2).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第三个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(3).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第四个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(4).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第五个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(5)on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第六个子节点事件绑定\r\r'+
                    '});\r'+
                    "\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="popovertop"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'top'};\r"+
                    "var p=ssM.popOver(setting);\r"+
                    "p.setContent('这是提示箭头朝上的浮动提示框');"+
                    "$(this).children().eq(0).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第一个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(1).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第二个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(2).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第三个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(3).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第四个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(4).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第五个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(5)on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第六个子节点事件绑定\r\r'+
                    '});\r'+
                    "\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="popoverleft"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'left'};\r"+
                    "var p=ssM.popOver(setting);\r"+
                    "p.setContent('这是提示箭头朝左的浮动提示框');"+
                    "$(this).children().eq(0).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第一个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(1).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第二个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(2).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第三个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(3).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第四个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(4).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第五个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(5)on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第六个子节点事件绑定\r\r'+
                    '});\r'+
                    "\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="popoverbottom"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rvar setting={to:'bottom'};\r"+
                    "var p=ssM.popOver(setting);\r"+
                    "p.setContent('这是提示箭头朝下的浮动提示框');"+
                    "$(this).children().eq(0).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第一个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(1).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第二个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(2).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第三个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(3).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第四个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(4).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第五个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(5)on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第六个子节点事件绑定\r\r'+
                    '});\r'+
                    "\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="hintmsg"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "ssM.hintbox('提示框标题','提示框内容');"+
                    "$(this).children().eq(0).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第一个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(1).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第二个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(2).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第三个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(3).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第四个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(4).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第五个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(5)on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第六个子节点事件绑定\r\r'+
                    '});\r'+
                    "\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="progressBox"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "var par = ssM.progressBox('进度条标题','进度条内容信息',true,onClickCal);\r"+
                    "par.update(100);"+
                    "function onClickCal(){ alert('canceled');}"+
                    "$(this).children().eq(0).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第一个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(1).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第二个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(2).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第三个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(3).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第四个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(4).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第五个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(5)on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第六个子节点事件绑定\r\r'+
                    '});\r'+
                    "\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="showLoading"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "ssM.loader('show',{disableScreen:false,color:'#04AED9'});"+
                    "$(this).children().eq(0).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第一个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(1).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第二个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(2).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第三个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(3).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第四个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(4).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第五个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(5)on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第六个子节点事件绑定\r\r'+
                    '});\r'+
                    "\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="hideLoading"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\r"+
                    "ssM.loader('hide');"+
                    "$(this).children().eq(0).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第一个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(1).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第二个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(2).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第三个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(3).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第四个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(4).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第五个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(5)on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第六个子节点事件绑定\r\r'+
                    '});\r'+
                    "\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="popmsg"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rssM.popwin('消息内容');"+
                    "$(this).children().eq(0).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第一个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(1).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第二个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(2).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第三个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(3).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第四个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(4).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第五个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(5)on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第六个子节点事件绑定\r\r'+
                    '});\r'+
                    "\r});";
                $scope.ajaxinitjs();
            }
            else if(eventData.funcType.name=="mdown"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rx1 = event.clientX;\r"+
                    "$(this).children().eq(0).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第一个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(1).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第二个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(2).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第三个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(3).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第四个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(4).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第五个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(5)on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第六个子节点事件绑定\r\r'+
                    '});\r'+
                    "\r});";
                $scope.ajaxinitjs();
            }

            else if(eventData.funcType.name=="mup"){
                initJs+=".on('"+eventData.funcType.val+"',function(){\rx2 = event.clientX;"+
                    "if(x2-x1>50){"+
                    "UserswipeRDiv();"+
                    "}"+
                    "if(x1-x2>50){"+
                    "UserswipeLDiv();"+
                    "}\r"+
                    "$(this).children().eq(0).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第一个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(1).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第二个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(2).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第三个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(3).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第四个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(4).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第五个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(5)on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第六个子节点事件绑定\r\r'+
                    '});\r'+
                    "\r});";
                $scope.ajaxinitjs();
            }
            else {
                initJs += ".on('" + eventData.funcType.val + "',function(){\r" +
                    "$(this).children().eq(0).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第一个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(1).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第二个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(2).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第三个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(3).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第四个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(4).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第五个子节点事件绑定\r\r'+
                    '});\r'+
                    "$(this).children().eq(5).on('" + eventData.funcType.val +
                    "',function(){\r" +
                    '//第六个子节点事件绑定\r\r'+
                    '});\r'+
                    "\r});";
                $scope.ajaxinitjs();
            }

        }

    };

    //编辑js事件绑定
    $scope.editBottomMenuEvent=function editBottomMenuEvent(elemEvent){
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

    //	删除js事件绑定
    $scope.delBottomMenuEvent=function delBottomMenuEvent(elemEvent){
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

    //更改子项图标
    $scope.changeBottomMenuType=function changeBottomMenuType(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeBottomMenuType',
            'attr':{'bottomMenuType':$scope.bottomMenuTypeSelected,'bottomMenuItemNo':$scope.bottomMenuItemNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //事件数据
    $scope.bottomMenuevent = [
        {name:'normaldoubletap',val:'doubleTap'},
        {name:'normallongtap',val:'longTap'},
        {name:'normalswipeleft',val:'swipeLeft'},
        {name:'normalswiperight',val:'swipeRight'},
        {name:'normalswipeup',val:'swipeUp'},
        {name:'normaldown',val:'swipeDown'},
        {name:'doubleclick',val:'dblclick'},
        {name:'popovertop',val:'tap'},
        {name:'popoverleft',val:'tap'},
        {name:'popoverright',val:'tap'},
        {name:'popoverbottom',val:'tap'},
        {name:'mdown',val:'mousedown'},
        {name:'mup',val:'mouseup'},
        {name:'hintmsg',val:'click'},
        {name:'showLoading',val:'click'},
        {name:'hideLoading',val:'click'},
        {name:'progressBox',val:'click'},
        {name:'fanye',val:'tap'}
    ];

    //默认选择的数据是第几个
    $scope.bottomMenueventselect=$scope.bottomMenuevent[0];

    //图标种类数据
    $scope.bottomMenuType = [
        {name:'电脑',val:'SDpc'},
        {name:'对号',val:'SDcheck'},
        {name:'手机',val:'SDphone'},
        {name:'主页',val:'SDhome'},
        {name:'错误',val:'SDerror'},
        {name:'添加',val:'SDadd'},
        {name:'星星',val:'SDstar'},
        {name:'邮件',val:'SDmail'},
        {name:'红心',val:'SDheart'},
        {name:'设置',val:'SDsetting'},
        {name:'记录',val:'SDnote'},
        {name:'日期',val:'SDdate'},
        {name:'地球',val:'SDearth'},
        {name:'声音',val:'SDsound'},
        {name:'选项',val:'SDitem'},
        {name:'面板',val:'SDpanel'},
        {name:'空',val:''}

    ];

    //监听
    $scope.$watch('attr', function() {
        //类型
        for(var i=0;i<$scope.bottomMenuType.length;i++){
            if($scope.attr.bottomMenuType.val==$scope.bottomMenuType[i].val){
                $scope.bottomMenuTypeSelected = $scope.bottomMenuType[i];  //当前的图标类型 iframe传来的值
                break;
            }
        }
        //		当前段落说明文字内容
        $scope.bottomMenuContentInput=$scope.attr.bottomMenuContent;
        //		第n个列表项
        $scope.bottomMenuItemNo=[];
        for(var i=1;i<=$scope.attr.bottomMenuChildNum;i++){
            $scope.bottomMenuItemNo.push(i);
        }
        //		当前选的正操作的第N个列表项
        $scope.bottomMenuItemNoSelected=$scope.attr.bottomMenuItemNo;
        //		当前列表项文字链接连接到
        $scope.bottomMenuItemHrefContentInput=$scope.attr.bottomMenuItemHrefContent;

    },true);





    $scope.btMnTitle = '下边栏属性设置';
    $scope.bottomMenuEventbindTitle = '节点事件绑定';
    $scope.bottomMenuEventEditTitle = '节点事件编辑';
}]);