/**
 * Created by Administrator on 15-1-13.
 */
/**
 * Created by Jane Maple on 14-5-5.
 */
/*********************************************
 * 描述：普通图片（normalImage）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('normalImageCtrl', ['$scope','$http', '$location',function normalImageCtrl($scope,$http, $location) {
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
     //事件筛选
    $scope.isShow = function isShow(flag){

            var matchingText = $scope.seq + 'normalImageEventSelect';
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
    $scope.addnormalImageevent=function addnormalImageevent(){

            tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{'buttonContent':$scope.buttonContentInput},
                'funcType':$scope.normalImageeventselect,
                'funcContent':"",
                'flag':""
             
            };
          
        tmpeventdata.flag = $scope.seq + 'normalImageEventSelect';
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
    $scope.editnormalImageevent=function editnormalImageevent(elemEvent){
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
    $scope.delnormalImageevent=function delnormalImageevent(elemEvent){
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
    $scope.normalImageevent = [
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
    $scope.normalImageeventselect=$scope.normalImageevent[0];

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
                console.log("mydata.username : " + mydata.username);
                $http({
                    url: '/upload',
                    method: "POST",
                    dataType : 'json',
                    data:mydata
                }).success(function(data, status, headers, config) {
                       // var iframeDocument=document.getElementById('mainIframe').contentDocument;
                       // var mypage = $(iframeDocument);
                       // mypage.find('div').find("[seq="+$scope.seq+"]").find('img').attr('src',data.file);
                        alert("上传成功，请点击我的图片预览，并修改图片");
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
        
        var myid = $(document.getElementById('bs-example-navbar-collapse-1'));
        var myida = myid.find("ul").eq(1).find("li").eq(2).text().replace(/\s+/g,"");
        alert(myida);
        var iframeDocument=document.getElementById('mainIframe').contentDocument;
        var mypage = $(iframeDocument);
        mypage.find('div').find("[seq="+$scope.seq+"]").find("img").attr('src','./img/'+myida+'/'+img.filename);
    }

    //修改普通图片的高度
    $scope.changeNormalImageHeight=function changeNormalImageHeight(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeNormalImageHeight',
            'attr':{'normalImageHeight':$scope.normalImageHeightInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改普通图片的宽度
    $scope.changeNormalImageWidth=function changeNormalImageWidth(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeNormalImageWidth',
            'attr':{'normalImageWidth':$scope.normalImageWidthInput}
        };
        sendMessage_funcdirective(data);
    };
    //修改普通图片的right
    $scope.addright=function addright(){
        var data = {
            'seq':$scope.seq,
            'directive':'addright',
            'attr':{'normalImageWidth':$scope.normalImageWidthInput}
        };
        sendMessage_funcdirective(data);
    };
     //修改普通图片的left
    $scope.addleft=function addleft(){
        var data = {
            'seq':$scope.seq,
            'directive':'addleft',
            'attr':{'normalImageWidth':$scope.normalImageWidthInput}
        };
        sendMessage_funcdirective(data);
    };
     //修改普通图片的center
    $scope.addcenter=function addcenter(){
        var data = {
            'seq':$scope.seq,
            'directive':'addcenter',
            'attr':{'normalImageWidth':$scope.normalImageWidthInput}
        };
        sendMessage_funcdirective(data);
    };

    //返回
    $scope.backToMenu = function backToMenu(){
        $scope.picHide = true;
    };

    $scope.start = 0;
    $scope.showLimit = 5;
    //隐藏
    $scope.picPage = function picPage(index){
        if(index >= $scope.start && index < ($scope.start+$scope.showLimit)){
            return false;
        }else{
            return true;
        }
    }

    //图片页面转换
    $scope.clickPage = function clickPage(flag){
        if(flag == 'first'){
            //首页
            $scope.start = 0;
        }
        else if(flag == 'next'){
            //下一页
            if($scope.start+$scope.showLimit > $scope.imgNum){
                return;
            }
            $scope.start = $scope.start+$scope.showLimit;
        }
        else if(flag == 'pre'){
            if($scope.start-$scope.showLimit < 0){
                return;
            }
            $scope.start = $scope.start - $scope.showLimit;
        }
        else if(flag == 'last'){
            $scope.start = parseInt($scope.imgNum/$scope.showLimit)*$scope.showLimit;
        }
    };

    //监听
    $scope.$watch('attr', function() {
          //当前id
         $scope.normalImageidInput=$scope.attr.normalImageid;
        //当前图片路径
        $scope.normalImageHrefInput=$scope.attr.normalImageHref;
        //当前图片高度
        $scope.normalImageHeightInput=$scope.attr.normalImageHeight;
        //当前图片宽度
        $scope.normalImageWidthInput=$scope.attr.normalImageWidth;
    },true);

    //界面分组的文字（第一组）
    $scope.normalImageTitle = '图片设置';
    //界面分组的文字（第二组）
    $scope.normalImageTitle1 = '我的图片';
     //界面分组文字（第二组）
    $scope.normalImageeventbindTitle = '图片事件绑定';
    //界面分组文字（第三组）
    $scope.normalImageeventeditTitle = '图片事件编辑';

}]);
