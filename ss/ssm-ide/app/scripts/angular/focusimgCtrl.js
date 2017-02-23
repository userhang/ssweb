/**
 * Created by Administrator on 14-9-9.
 */
/*********************************************
 * 描述：滚动焦点图（focusimg）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('focusimgCtrl', ['$scope','$http','$location',function focusimgCtrl($scope,$http,$location) {
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

    $scope.picHide = true;
    //上传图片
    $scope.uploadimg=function uploadimg(){

        var myid = $(document.getElementById('bs-example-navbar-collapse-1'));
        console.log("myid.html() : " + myid.html());
        var myida = myid.find("ul").eq(1).find("li").eq(2).text().replace(/\s+/g,"");
        console.log("myida : " + myida);
        if(myid.find("ul").eq(1).find("li").eq(2).hasClass("ng-hide")){
            alert("你还未登陆，请登录后上传图片");
        }else{
            var fileObj=document.getElementById("fileToUpload").files;
            console.log("file:" + fileObj);

            var reader = new FileReader();
            reader.onload=function(e){
                var mydata={
                    "imgFile": e.target.result,
                    "username": myida
                };
                console.log("mydata.imgFile : " + mydata.imgFile)
                alert("mydata.username : " + mydata.username);
                $http({
                    url: '/upload',
                    method: "POST",
                    dataType : 'json',
                    data:mydata
                }).success(function(data, status, headers, config) {
                    var iframeDocument=document.getElementById('mainIframe').contentDocument;
                    var mypage = $(iframeDocument);
                    mypage.find('div').find("[seq="+$scope.seq+"]").find('img').eq(0).attr('src',data.file);
                    //存储数据到本地（好像没有用）
                    store.storeDataToLocal();
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

    $scope.imgNum = 0;
    //选择图片
    $scope.chooseimg=function chooseimg(flag){
        var myid = $(document.getElementById('bs-example-navbar-collapse-1'));
        var myida = myid.find("ul").eq(1).find("li").eq(2).text().replace(/\s+/g,"");
        if(myid.find("ul").eq(1).find("li").eq(2).hasClass("ng-hide")){
            alert("你还未登陆，请登录后选择图片");
        }else{
            if(flag == 1){
                $scope.picHide = false;
            }
            var mydata={
                "username": myida
            };

            console.log("登录了，之后执行http行为");
            $http({
                url: '/chooseimg',
                method: "POST",
                dataType : 'json',
                data:mydata
            }).success(function(data, status, headers, config) {
                var myselect = $(document.getElementById('myimgslist'));
                $scope.img = data.myimgs;
                $scope.imgNum = data.myimgs.length;
            }).error(function(data, status, headers, config) {
                alert("发生错误！");
            });
        }
    };

    //根据显示的图片列表改变当前的图片
    $scope.changeImg = function changeImg(img){
        var a=$scope.changeImgItemNo();

        var imglength=$(this).children().find("li").length;
        var myid = $(document.getElementById('bs-example-navbar-collapse-1'));
        var myida = myid.find("ul").eq(1).find("li").eq(2).text().replace(/\s+/g,"");

        var iframeDocument=document.getElementById('mainIframe').contentDocument;
        var mypage = $(iframeDocument);
        mypage.find('div').find("[seq="+$scope.seq+"]").find("img").eq(a).attr('src','./img/'+myida+'/'+img.filename);
    }
    //f
    $scope.backToMenu = function backToMenu(){
        $scope.picHide = true;
    };

    //图片个数+1操作
    $scope.addimgli=function addimgli(){
        var data = {'seq':$scope.seq,'directive':'addimgli',
            'attr':{'imgItemNo':$scope.imgItemNoSelected}}

        var jsdata={
            'directive':'defaultjsbind',
            'objtype':"focusimg",
            'defaultjs':"ssM.imgSlider();"
        };
        jsdata = JSON.stringify(jsdata);
        sendMessage_funcdirective(data);
        messenger.targets['mainIframe'].send(jsdata);
    };

    //图片个数-1操作
    $scope.cutimgli=function cutimgli(){
        var data = {'seq':$scope.seq,'directive':'cutimgli',
            'attr':{'imgItemNo':$scope.imgItemNoSelected}}
        sendMessage_funcdirective(data);
    };

    //更改当前正操作的是第几个图片
    $scope.changeImgItemNo=function changeImgItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeImgItemNo',
            'attr':{'imgItemNo':$scope.imgItemNoSelected}
        };

        sendMessage_funcdirective(data);

        return $scope.imgItemNoSelected;
    };

    $scope.deleteimg=function deleteimg(){

        $("#myimgslist").empty();

    }
    //change id
    $scope.changefocusimgid=function changefocusimgid(){
        var data = {
            'seq':$scope.seq,
            'directive':'changefocusimgid',
            'attr':{' focusimgid':$scope.focusimgidInput,'focusimgItemNo':$scope.focusimgNumSelected}
        };

        sendMessage_funcdirective(data);
    };



    //事件筛选
    $scope.isShow = function isShow(flag){

        var matchingText = $scope.seq + 'focusimgEventSelect';
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
    $scope.addfocusimgevent=function addfocusimgevent(){

            tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{'focusimgContent':$scope.focusimgContentInput},
                'funcType':$scope.focusimgeventselect,
                'funcContent':"",
                'flag':""

            };

        tmpeventdata.flag = $scope.seq + 'focusimgEventSelect';
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
    $scope.editfocusimgevent=function editfocusimgevent(elemEvent){
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
    $scope.delfocusimgevent=function delfocusimgevent(elemEvent){
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
    $scope.focusimgevent = [
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
    $scope.focusimgeventselect=$scope.focusimgevent[0];

    //监听
    $scope.$watch('attr', function() {
        //id
        $scope.focusimgidInput=$scope.attr.focusimgid;
        $scope.normalImageHrefInput=$scope.attr.normalImageHref;
        //图片个数
        $scope.imgItemNo=[];
        for(var i=1;i<=$scope.attr.imgchildCount;i++){
            $scope.imgItemNo.push(i);
        }
        //当前选的正操作的第N个图片
        $scope.imgItemNoSelected=$scope.attr.imgItemNo;
    },true);


    //界面分组文字（第一组）
    $scope.ImgTitle = '滚动焦点图设置';
    //界面分组文字（第二组）
    $scope.focusimgeventbindTitle = '按钮事件绑定';
    //界面分组文字（第三组）
    $scope.focusimgeventeditTitle = '按钮事件编辑';

}]);
