/**
 * Created by Administrator on 14-6-16.
 */
/**
 * Created by Jane Maple on 14-5-15.
 */
/**
 * Created by Administrator on 14-4-19.
 */
/*********************************************
 * 描述：柱形图（zhuxingtu）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('zhuxingtuCtrl', ['$scope', '$location',function zhuxingtuCtrl($scope, $location) {
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

    //刷新柱形图
    $scope.refzhuxingtu=function refzhuxingtu(){
        var data = {'seq':$scope.seq,'directive':'refzhuxingtu'};
        sendMessage_funcdirective(data);
        var zxtName=[];
        var zxtValue=[];
        if($scope.zhuxingtuItemSumSelected==null){
            alert("列数项不能为空");
        }
        var zxtMyName;
        for(var i=0;i<$scope.zhuxingtuItemSumSelected.val;i++){
            zxtName.push($scope.zhuxingtuItemName[i].val);
            zxtValue.push($scope.zhuxingtuItemValue[i].val);
            if(i==0){
                zxtMyName='"'+$scope.zhuxingtuItemName[i].val+'"';
            }
            else{
                zxtMyName=zxtMyName+',"'+$scope.zhuxingtuItemName[i].val+'"';
            }
        }
        var jsdata={
            'directive':'defaultjsbind',
            'objtype':"zhuxingtu",
            'objid':"chart2",
            'defaultjs':
            'ssM.chartBar("chart2",'+'['+zxtValue.toString()+']'+
            ',{"title":"'+$scope.zhuxingtuTitleInput+'","item_width":'+$scope.zhuxingtuWidthInput+',' +
            'xaixs_tick:'+'[' +zxtMyName+']'+
            ',xaixs_label:"'+$scope.zhuxingtuXaisInput+'",yaixs_label:"'+$scope.zhuxingtuYaisInput+'"});'
        };
        jsdata = JSON.stringify(jsdata);
        messenger.targets['mainIframe'].send(jsdata);
    };

    //修改柱形图标题
    $scope.changeZhuxingtuTitle=function changeZhuxingtuTitle(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeZhuxingtuTitle',
            'attr':{'zhuxingtuTitle':$scope.zhuxingtuTitleInput}
        };
        sendMessage_funcdirective(data);
    };

    //改变柱形图列数
    $scope.changeZhuxingtuItemSum=function changeZhuxingtuItemSum(){
        $scope.zhuxingtuItemNo=[];
        for(var i=0;i<$scope.zhuxingtuItemSumSelected.val;i++){
            $scope.zhuxingtuItemNo.push({name:i,val:i});
        }
        $scope.zhuxingtuItemName=[];
        for(var j=0;j<$scope.zhuxingtuItemSumSelected.val;j++){
            $scope.zhuxingtuItemName.push({name:j,val:'未命名列'+j});
        }
        var data = {
            'seq':$scope.seq,
            'directive':'changeZhuxingtuItemSum',
            'attr':{'zhuxingtuItemSum':$scope.zhuxingtuItemSumSelected}
        };
        sendMessage_funcdirective(data);
    };

    //改变柱形图的每列宽度
    $scope.changeZhuxingtuWidth=function changeZhuxingtuWidth(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeZhuxingtuWidth',
            'attr':{'zhuxingtuWidth':$scope.zhuxingtuWidthInput}
        };
        sendMessage_funcdirective(data);
    };

    //改变柱形图的行标
    $scope.changeZhuxingtuXais=function changeZhuxingtuXais(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeZhuxingtuXais',
            'attr':{'zhuxingtuXais':$scope.zhuxingtuXaisInput}
        };
        sendMessage_funcdirective(data);
    };

    //改变柱形图的列标
    $scope.changeZhuxingtuYais=function changeZhuxingtuYais(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeZhuxingtuYais',
            'attr':{'zhuxingtuYais':$scope.zhuxingtuYaisInput}
        };
        sendMessage_funcdirective(data);
    };

    //改变柱形图选择的列数
    $scope.changeZhuxingtuItemNo=function changeZhuxingtuItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeZhuxingtuItemNo',
            'attr':{'zhuxingtuItemNo':$scope.zhuxingtuItemNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //改变柱形图选择的某列的名称
    $scope.changeZhuxingtuItemName=function changeZhuxingtuItemName(){
        $scope.zhuxingtuItemName[$scope.zhuxingtuItemNoSelected.val]={name:$scope.zhuxingtuItemNoSelected.val,val:$scope.zhuxingtuItemNameInput};
        var data = {
            'seq':$scope.seq,
            'directive':'changeZhuxingtuItemName',
            'attr':{'zhuxingtuItemName':$scope.zhuxingtuItemNameInput}
        };
        sendMessage_funcdirective(data);
    };

    //改变柱形图某列的数量
    $scope.changeZhuxingtuItemValue=function changeZhuxingtuItemValue(){
        $scope.zhuxingtuItemValue[$scope.zhuxingtuItemNoSelected.val]={name:$scope.zhuxingtuItemNoSelected.val,val:$scope.zhuxingtuItemValueInput};
        var data = {
            'seq':$scope.seq,
            'directive':'changeZhuxingtuItemValue',
            'attr':{'zhuxingtuItemValue':$scope.zhuxingtuItemValueInput}
        };
        sendMessage_funcdirective(data);
    };

//事件筛选
    $scope.isShow = function isShow(flag){

        var matchingText = $scope.seq + 'zhuxingtuEventSelect';
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
    $scope.addzhuxingtuevent=function addzhuxingtuevent(){

            tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{'zhuxingtuContent':$scope.zhuxingtuContentInput},
                'funcType':$scope.zhuxingtueventselect,
                'funcContent':"",
                'flag':""

            };

        tmpeventdata.flag = $scope.seq + 'zhuxingtuEventSelect';
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
    $scope.editzhuxingtuevent=function editzhuxingtuevent(elemEvent){
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
    $scope.delzhuxingtuevent=function delzhuxingtuevent(elemEvent){
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
    $scope.zhuxingtuevent = [
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
    $scope.zhuxingtueventselect=$scope.zhuxingtuevent[0];
    //列表类型数据
    $scope.zhuxingtuItemSum = [
        {name:'0',val:'0'},
        {name:'1',val:'1'},
        {name:'2',val:'2'},
        {name:'3',val:'3'},
        {name:'4',val:'4'},
        {name:'5',val:'5'}
    ];

    //列表名称数据
    $scope.zhuxingtuItemName=[
        {name:'0',val:'未命名列0'},
        {name:'1',val:'未命名列1'},
        {name:'2',val:'未命名列2'},
        {name:'3',val:'未命名列3'},
        {name:'4',val:'未命名列4'},
        {name:'5',val:'未命名列5'}
    ];

    //列表数据
    $scope.zhuxingtuItemValue=[
        {name:'0',val:'20'},
        {name:'1',val:'20'},
        {name:'2',val:'20'},
        {name:'3',val:'20'},
        {name:'4',val:'20'},
        {name:'5',val:'20'}
    ];

    //监听
    $scope.$watch('attr', function() {
        //当前柱形图标题
        $scope.zhuxingtuTitleInput=$scope.attr.zhuxingtuTitle;
        //当前选择的柱形图列数
        for(var i=0;i<$scope.zhuxingtuItemSum.length;i++){
            if($scope.attr.zhuxingtuItemSum.val==$scope.zhuxingtuItemSum[i].val){
                $scope.zhuxingtuItemSumSelected = $scope.zhuxingtuItemSum[i];  //当前的列表类型 iframe传来的值
                break;
            }
        }
        //当前柱形图每列的宽度
        $scope.zhuxingtuWidthInput=$scope.attr.zhuxingtuWidth;
        //当前柱形图行标
        $scope.zhuxingtuXaisInput=$scope.attr.zhuxingtuXais;
        //当前柱形图列标
        $scope.zhuxingtuYaisInput=$scope.attr.zhuxingtuYais;
        //第n个列表项
        for(var j=0;j<$scope.zhuxingtuItemSumSelected;j++){
            if($scope.attr.zhuxingtuItemNo.val==$scope.zhuxingtuItemNo[j].val){
                $scope.zhuxingtuItemNoSelected = $scope.zhuxingtuItemNo[j];  //当前的列表类型 iframe传来的值
                break;
            }
        }
        //某列的序号
        //$scope.zhuxingtuItemNoSelected=$scope.attr.zhuxingtuItemNo;
        //当前柱形图某列的名称
        $scope.zhuxingtuItemNameInput=$scope.attr.zhuxingtuItemName;
        //某列的数量
        $scope.zhuxingtuItemValueInput=$scope.attr.zhuxingtuItemValue;

    },true);

    //界面分组的文字（第一组）
    $scope.zxtTitle = '柱形图设置';
    //界面分组的文字（第二组）
    $scope.zxtItemTitle = '柱形图某列设置';
    //界面分组文字（第三组）
    $scope.zhuxingtueventbindTitle = '柱形图事件绑定';
    //界面分组文字（第四组）
    $scope.zhuxingtueventeditTitle = '柱形图事件编辑';

}]);
