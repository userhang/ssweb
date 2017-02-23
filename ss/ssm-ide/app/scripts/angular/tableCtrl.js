/**
 * Created by suhuifen on 14-5-18.
 */
/*********************************************
 * 描述：表格布局（table）的设置方法的参数设置
 *********************************************/

var app = angular.module('app');
app.controller('tableCtrl', ['$scope', '$location',function tableCtrl($scope, $location) {
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

    //增加、删除标题
    $scope.changeHasCaption=function changeHasCaption(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeHasCaption',
            'attr':{ 'hasCaption':$scope.hasCaptionChecked}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正操作的表格标题内容
    $scope.changeCaptionContent=function changeCaptionContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeCaptionContent',
            'attr':{ 'captionContent':$scope.captionContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //删除第N行
    $scope.deleteTableRowNo=function deleteTableRowNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'deleteTableRowNo',
            'attr':{'tableRowNo':$scope.tableRowNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //删除第N列
    $scope.deleteTableLineNo=function deleteTableLineNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'deleteTableLineNo',
            'attr':{'tableLineNo':$scope.tableLineNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //增加第N列
    $scope.addTableLineNo=function addTableLineNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'addTableLineNo',
            'attr':{'tableLineNo':$scope.tableLineNoSelected,'tableLineNo2':$scope.tableLineNoSelected2}
        };
        sendMessage_funcdirective(data);
    };

    //行数+1操作
    $scope.addrow=function addrow(){
        var data = {
            'seq':$scope.seq,
            'directive':'addrow'
        };
        sendMessage_funcdirective(data);
    };

    //行数-1操作
    $scope.cutrow=function cutrow(){
        var data = {
            'seq':$scope.seq,
            'directive':'cutrow'
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正操作的是第几行
    $scope.changeTableRowNo=function changeTableRowNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTableRowNo',
            'attr':{'tableRowNo':$scope.tableRowNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //单元格左-->右+1操作
    $scope.addCell=function addCell(){
        var data = {
            'seq':$scope.seq,
            'directive':'addCell',
            'attr':{'tableRowNo':$scope.tableRowNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //单元格右-->左+1操作
    $scope.addCell2=function addCell2(){
        var data = {
            'seq':$scope.seq,
            'directive':'addCell2',
            'attr':{'tableRowNo':$scope.tableRowNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //单元格右-->左-1操作
    $scope.cutCell=function cutCell(){
        var data = {
            'seq':$scope.seq,
            'directive':'cutCell',
            'attr':{'tableRowNo':$scope.tableRowNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //单元格左-->右-1操作
    $scope.cutCell2=function cutCell2(){
        var data = {
            'seq':$scope.seq,
            'directive':'cutCell2',
            'attr':{'tableRowNo':$scope.tableRowNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正在操作的是第几个单元格
    $scope.changeTableCellNo=function changeTableCellNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTableCellNo',
            'attr':{'tableRowNo':$scope.tableRowNoSelected,'tableCellNo':$scope.tableCellNoSelected}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正在操作的单元格内容
    $scope.changeTableCellContent=function changeTableCellContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTableCellContent',
            'attr':{'tableRowNo':$scope.tableRowNoSelected,'tableCellNo':$scope.tableCellNoSelected,'tableCellContent':$scope.tableCellContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正在操作的单元格长度
    $scope.changeTableCellLength=function changeTableCellLength(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTableCellLength',
            'attr':{'tableRowNo':$scope.tableRowNoSelected,'tableCellNo':$scope.tableCellNoSelected,'tableCellLength':$scope.tableCellLengthInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正在操作的单元格宽度
    $scope.changeTableCellWidth=function changeTableCellWidth(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTableCellWidth',
            'attr':{'tableRowNo':$scope.tableRowNoSelected,'tableCellNo':$scope.tableCellNoSelected,'tableCellWidth':$scope.tableCellWidthInput}
        };
        sendMessage_funcdirective(data);
    };

    //将当前正在操作的单元格更改为表头
    $scope.changeIsHeader=function changeIsHeader(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIsHeader',
            'attr':{'tableRowNo':$scope.tableRowNoSelected,'tableCellNo':$scope.tableCellNoSelected,'isHeader':$scope.isHeaderChecked}
        };
        sendMessage_funcdirective(data);
    };

    //事件筛选
    $scope.isShow = function isShow(flag){

        var matchingText = $scope.seq + 'tableEventSelect';
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
    $scope.addtableevent=function addtableevent(){

            tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{'buttonContent':$scope.tableContentInput},
                'funcType':$scope.tableeventselect,
                'funcContent':"",
                'flag':""

            };

        tmpeventdata.flag = $scope.seq + 'tableEventSelect';
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
    $scope.edittableevent=function edittableevent(elemEvent){
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
    $scope.deltableevent=function deltableevent(elemEvent){
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
    $scope.tableevent = [
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
    $scope.tableeventselect=$scope.tableevent[0];


    //界面分组的文字（第一组）
    $scope.tableContentTitle = '表格设置';
    //界面分组的文字（第二组）
    $scope.tableRowContentTitle = '表格行设置';
    //界面分组的文字（第三组）
    $scope.tableCellContentTitle = '单元格设置';
    //界面分组文字（第4组）
    $scope.tableeventbindTitle = '按钮事件绑定';
    //界面分组文字（第5组）
    $scope.tableeventeditTitle = '按钮事件编辑';


    //监听
    $scope.$watch('attr', function() {
        //当前id
        $scope.tableidInput=$scope.attr.tableid;
        //当前表格是否含有标题
        $scope.hasCaptionChecked=$scope.attr.hasCaption;
        //当前表格标题内容
        $scope.captionContentInput=$scope.attr.captionContent;
        //当前表格有多少行
        $scope.tableRowNo=[];
        for(var i=1;i<=$scope.attr.childNum;i++){
            $scope.tableRowNo.push(i);
        }
        //当前操作的第N行
        $scope.tableRowNoSelected=$scope.attr.tableRowNo;
        //当前这一行有多少列
        $scope.tableLineNo=[];
        for(var j=1;j<=$scope.attr.lineNum;j++){
            $scope.tableLineNo.push(j);
        }
        //当前操作的第N列
        $scope.tableLineNoSelected=$scope.attr.tableLineNo;
        //当前表格有多少行
        $scope.tableLineNo2=[];
        for(var k=2;k<=$scope.attr.lineNum + 1;k++){
            $scope.tableLineNo2.push(k);
        }
        //当前要增加的第N列
        $scope.tableLineNoSelected2=$scope.attr.tableLineNo2;
        //第N个单元格
        $scope.tableCellNo=[];
        for(var l=1;l<=$scope.attr.cellNum;l++){
            $scope.tableCellNo.push(l);
        }
        //当前操作的第N个单元格
        $scope.tableCellNoSelected=$scope.attr.tableCellNo;
        //当前操作的单元格内容
        $scope.tableCellContentInput=$scope.attr.tableCellContent;
        //当前操作的单元格长度
        $scope.tableCellLengthInput=$scope.attr.tableCellLength;
        //当前操作的单元格宽度
        $scope.tableCellWidthInput=$scope.attr.tableCellWidth;
        //当前操作的单元格是否为表头
        $scope.isHeaderChecked=$scope.attr.isHeader;
    },true);

}]);

