/**
 * Created by Administrator on 14-12-4.
 */
/*********************************************
 * 描述：图文展示【左右布局】（textphotoShow）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('textphotoShowCtrl', ['$scope','$http', '$location',function textphotoShowCtrl($scope,$http, $location) {
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

    //更改当前文字内容
    $scope.changeTextPhotoShowContent=function changeTextPhotoShowContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTextPhotoShowContent',
            'attr':{'textphotoShowContent':$scope.textphotoShowContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前文字字体
    $scope.changeTextPhotoShowFont=function changeTextPhotoShowFont(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTextPhotoShowFont',
            'attr':{'textphotoShowFont':$scope.textphotoShowFontSelected}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前文字大小
    $scope.changeTextPhotoShowFontWeight=function changeTextPhotoShowFontWeight(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTextPhotoShowFontWeight',
            'attr':{'textphotoShowFontWeight':$scope.textphotoShowFontWeightInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前图文位置
    $scope.changeTextPhotoPosition=function changeTextPhotoPosition(){
        var data = {'seq':$scope.seq,'directive':'changeTextPhotoPosition'};
        sendMessage_funcdirective(data);
    };

    //上传图片
    $scope.uploadimg=function uploadimg(){
        var myid = $(document.getElementById('bs-example-navbar-collapse-1'));
        var myida = myid.find("ul").eq(1).find("li").eq(2).text().replace(/\s+/g,"");
        if(myid.find("ul").eq(1).find("li").eq(2).hasClass("ng-hide")){
            alert("你还未登陆，请登录后上传图片");
        }else{
            var fileObj=document.getElementById("fileToUpload").files;

            var reader = new FileReader();
            reader.onload=function(e){
                var mydata={
                    "imgFile": e.target.result,
                    "username": myida
                };
                $http({
                    url: '/upload',
                    method: "POST",
                    dataType : 'json',
                    data:mydata
                }).success(function(data, status, headers, config) {
                    var iframeDocument=document.getElementById('mainIframe').contentDocument;
                    var mypage = $(iframeDocument);
                    mypage.find('div').find("[seq="+$scope.seq+"]").find('img').attr('src',data.file);
                    $scope.chooseimg();
                }).error(function(data, status, headers, config) {
                    if(status == '413'){
                        alert('上传文件过大，大小不能超过1M');
                    }else{
                        alert("发生错误！");
                    }
                });
            };
            reader.readAsDataURL(fileObj[0]);
        }
    };

    //选择图片
    $scope.chooseimg=function chooseimg(){
        var myid = $(document.getElementById('bs-example-navbar-collapse-1'));
        var myida = myid.find("ul").eq(1).find("li").eq(2).text().replace(/\s+/g,"");
        if(myid.find("ul").eq(1).find("li").eq(2).hasClass("ng-hide")){
            alert("你还未登陆，请登录后选择图片");
        }else{
            var mydata={
                "username": myida
            };
            $http({
                url: '/chooseimg',
                method: "POST",
                dataType : 'json',
                data:mydata
            }).success(function(data, status, headers, config) {
                var myselect = $(document.getElementById('myimgslist'));
                myselect.text('');
                for(var i=0;i<data.myimgs.length;i++){
                    myselect.append('<li class="ng-scope"><img style="width:70px;height:70px;" src="'+data.myimgs[i].filepath+'"/><p class="btn btn-success btn-xs">'+data.myimgs[i].filename+'</p></li>');
                }
                myselect.find("p").bind('click',function(){
                    var iframeDocument=document.getElementById('mainIframe').contentDocument;
                    var mypage = $(iframeDocument);
                    mypage.find('div').find("[seq="+$scope.seq+"]").find('img').attr('src','./img/'+myida+'/'+$(this).text());
                });
            }).error(function(data, status, headers, config) {
                alert("发生错误！");
            });
        }
    };

    //更换图片
    $scope.changemyimg=function changemyimg(){
        alert('ss');
    };

    //修改图文展示的高度
    $scope.changeTextPhotoShowHeight=function changeTextPhotoShowHeight(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTextPhotoShowHeight',
            'attr':{'textphotoShowHeight':$scope.textphotoShowHeightInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改图文展示的左右比例
    $scope.changeTextPhotoShowRatio=function changeTextPhotoShowRatio(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeTextPhotoShowRatio',
            'attr':{'textphotoShowRatio':$scope.textphotoShowRatioInput}
        };
        sendMessage_funcdirective(data);
    };

    //事件筛选
    $scope.isShow = function isShow(flag){

        var matchingText = $scope.seq + 'textphotoShowEventSelect';
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
    $scope.addtextphotoShowevent=function addtextphotoShowevent(){

            tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{'textphotoShowContent':$scope.textphotoShowContentInput},
                'funcType':$scope.textphotoShoweventselect,
                'funcContent':"",
                'flag':""

            };

        tmpeventdata.flag = $scope.seq + 'textphotoShowEventSelect';
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
    $scope.edittextphotoShowevent=function edittextphotoShowevent(elemEvent){
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
    $scope.deltextphotoShowevent=function deltextphotoShowevent(elemEvent){
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
    $scope.textphotoShowevent = [
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
    $scope.textphotoShoweventselect=$scope.textphotoShowevent[0];

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
        $scope.textphotoShowidInput=$scope.attr.textphotoShowid;
        //当前文字内容
        $scope.textphotoShowContentInput=$scope.attr.textphotoShowContent;
        //当前文字字体
        if($scope.attr.textphotoShowFont != null){
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.textphotoShowFont.val == $scope.componentFontFamily[j].val){
                    $scope.textphotoShowFontSelected = $scope.componentFontFamily[j];
                }
            }
        }
        //当前文字大小
        $scope.textphotoShowFontWeightInput=$scope.attr.textphotoShowFontWeight;
        //当前图文展示的高度
        $scope.textphotoShowHeightInput=$scope.attr.textphotoShowHeight;
        //当前图文展示左右比例
        $scope.textphotoShowRatioInput=$scope.attr.textphotoShowRatio;

    },true);

    // 界面分组的文字（第一组）
    $scope.textphotoShowTitle = '图文展示设置';
    //界面分组文字（第二组）
    $scope.textphotoShoweventbindTitle = '图文展示事件绑定';
    //界面分组文字（第三组）
    $scope.textphotoShoweventeditTitle = '图文展示事件编辑';
}]);