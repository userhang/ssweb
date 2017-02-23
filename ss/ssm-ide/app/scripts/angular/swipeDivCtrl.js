/*********************************************
 * 描述：隐藏侧边栏（swipeDiv）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('swipeDivCtrl', ['$scope', '$location',function swipeDivCtrl($scope, $location) {
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

    $scope.deleteswdiv=function deleteswdiv(){
        var data = {'seq':$scope.seq,'directive':'deleteswdiv'};
        sendMessage_funcdirective(data);

    };
    //子项个数+1操作
    $scope.addswipeDivli=function addswipeDivli(){
        var data = {'seq':$scope.seq,'directive':'addswipeDivli'}
        sendMessage_funcdirective(data);
    };

    //子项个数-1操作
    $scope.cutswipeDivli=function cutswipeDivli(){
        var data = {'seq':$scope.seq,'directive':'cutswipeDivli'}
        sendMessage_funcdirective(data);
    };

    //更改当前正操作的是第几个子项
    $scope.changeSwipeDivItemNo=function changeSwipeDivItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeSwipeDivItemNo',
            'attr':{'swipeDivItemNo':$scope.swipeDivItemNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //更改子项链接内容
    $scope.changeSwipeDivItemHrefContent=function changeSwipeDivItemHrefContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeSwipeDivItemHrefContent',
            'attr':{'swipeDivItemHrefContent':$scope.swipeDivItemHrefContentInput,'swipeDivItemNo':$scope.swipeDivItemNoSelected}
        };
        sendMessage_funcdirective(data);
    };
    //id
    $scope.changeswipeDivid=function changeswipeDivid(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeswipeDivid',
            'attr':{' swipeDivid':$scope.swipeDividInput,'swipeDivItemNo':$scope.swipeDivItemNoSelected}
        };

        sendMessage_funcdirective(data);
    };

    //删除当前子项
    $scope.cutthisSwipeDivli=function cutthisSwipeDivli(){
        var data = {'seq':$scope.seq,'directive':'cutthisSwipeDivli',
            'attr':{'swipeDivItemNo':$scope.swipeDivItemNoSelected}}
        sendMessage_funcdirective(data);
    };

    //子项个数+1操作
    $scope.refswipeDiv=function refswipeDiv(){
        var data = {'seq':$scope.seq,'directive':'refswipeDiv'}

        var jsdata={
            'directive':'defaultjsbind',
            'objtype':"swipeDiv",
            'defaultjs':
                'ssM.swipeDiv();'
        };
        jsdata = JSON.stringify(jsdata);

        sendMessage_funcdirective(data);
        messenger.targets['mainIframe'].send(jsdata);
    };

    //更改子项图标类型
    $scope.changeSwipeDivType=function changeSwipeDivType(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeSwipeDivType',
            'attr':{'swipeDivType':$scope.swipeDivTypeSelected,'swipeDivItemNo':$scope.swipeDivItemNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //事件筛选
    $scope.isShow = function isShow(flag){

        var matchingText = $scope.seq + 'swipeDivEventSelect';
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
    $scope.addswipeDivevent=function addswipeDivevent(){

            tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{'swipeDivContent':$scope.swipeDivContentInput},
                'funcType':$scope.swipeDiveventselect,
                'funcContent':"",
                'flag':""

            };

        tmpeventdata.flag = $scope.seq + 'swipeDivEventSelect';
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
    $scope.editswipeDivevent=function editswipeDivevent(elemEvent){
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
    $scope.delswipeDivevent=function delswipeDivevent(elemEvent){
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
    $scope.swipeDivevent = [
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
    $scope.swipeDiveventselect=$scope.swipeDivevent[0];
    //图表类型数据
    $scope.swipeDivType = [
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
        {name:'面板',val:'SDpanel'}
    ];

    //监听
    $scope.$watch('attr', function() {
        //id
        $scope.swipeDividInput=$scope.attr.swipeDivid;
        //当前选择的是第几个图表类型
        for(var i=0;i<$scope.swipeDivType.length;i++){
            if($scope.attr.swipeDivType.val==$scope.swipeDivType[i].val){
                $scope.swipeDivTypeSelected = $scope.swipeDivType[i];  //当前的图标类型 iframe传来的值
                break;
            }
        }
        //第n个列表项
        $scope.swipeDivItemNo=[];
        for(var j=1;j <= $scope.attr.swipeDivchildCount;j++){
            $scope.swipeDivItemNo.push(j);
        }
        //当前选的正操作的第N个子项
        $scope.swipeDivItemNoSelected=$scope.attr.swipeDivItemNo;
        //当前子项链接内容
        $scope.swipeDivItemHrefContentInput=$scope.attr.swipeDivItemHrefContent;
    },true);

    //界面分组的文字（第一组）
    $scope.swdivTitle = '隐藏侧边栏设置';
    //界面分组文字（第二组）
    $scope.swipeDiveventbindTitle = '隐藏侧边栏事件绑定';
    //界面分组文字（第三组）
    $scope.swipeDiveventeditTitle = '隐藏侧边栏事件编辑';


}]);
