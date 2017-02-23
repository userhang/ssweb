/**
 * Created by fd on 2015/10/28.
 */
/********************************************************
 * 描述：图片按钮集（iconButtonDiv）的设置方法的参数设置
 *******************************************************/
var app = angular.module('app');
app.controller('iconButtonDivCtrl', ['$scope', '$location', '$http','$compile', function iconButtonCtrl($scope, $location, $http, $compile) {
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
    //按钮个数+1操作
    $scope.addIconButtonDivNum=function addIconButtonDivNum(){
        var data = {'seq':$scope.seq,'directive':'addIconButtonDivNum'}
        sendMessage_funcdirective(data);
    };

    //面板项个数-1操作
    $scope.cutIconButtonDivNum=function cutIconButtonDivNum(){
        var data = {'seq':$scope.seq,'directive':'cutIconButtonDivNum'}
        sendMessage_funcdirective(data);
    };

    //更改当前正操作的是第几个按钮
    $scope.changeIconButtonDivItemNo=function changeIconButtonDivItemNo(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonDivItemNo',
            'attr':{'iconButtonDivItemNo':$scope.iconButtonDivNumSelected}
        };
        sendMessage_funcdirective(data);
    };
    //改变图标按钮id
    $scope.changeIconButtonDivid=function changeIconButtonDivid(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonDivid',
            'attr':{' iconButtonDivid':$scope.iconButtonDividInput,'iconButtonDivItemNo':$scope.iconButtonDivNumSelected}
        };

        sendMessage_funcdirective(data);
    };
    //改变图标按钮文字内容
    $scope.changeIconButtonDivContent=function changeIconButtonDivContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonDivContent',
            'attr':{'iconButtonDivContent':$scope.iconButtonDivContentInput,'iconButtonDivItemNo':$scope.iconButtonDivNumSelected}
        };
        alert($scope.iconButtonDivContentInput);
        sendMessage_funcdirective(data);
    };

    //改变图标按钮文字颜色   changeIconButtonDivColor
    $scope.changeIconButtonDivContentColor=function changeIconButtonDivContentColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonDivContentColor',
            'attr':{'iconButtonDivContentColor':$scope.iconButtonDivContentColorInput, 'iconButtonDivItemNo':$scope.iconButtonDivNumSelected}
        };
        sendMessage_funcdirective(data);
    };

    //改变图标按钮背景颜色   changeIconButtonDivBgColor
    $scope.changeIconButtonDivBgColor=function changeIconButtonDivBgColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonDivBgColor',
            'attr':{'iconButtonDivBgColor':$scope.iconButtonDivBgColorInput, 'iconButtonDivItemNo':$scope.iconButtonDivNumSelected}
        };
        sendMessage_funcdirective(data);
    };

    //切换当前按钮是否有图片
    $scope.changeIconButtonDivHasImg=function changeIconButtonDivHasImg(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonDivHasImg',
            'attr':{'iconButtonDivItemNo':$scope.iconButtonDivNumSelected,'iconButtonDivHasImg':$scope.iconButtonDivHasImgChecked}
        };
        sendMessage_funcdirective(data);
    };

    //修改图片按钮文字字体
    $scope.changeIconButtonDivContentFontFamily=function changeIconButtonDivContentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonDivContentFontFamily',
            'attr':{'iconButtonDivItemNo':$scope.iconButtonDivNumSelected,'iconButtonDivContentFontFamily':$scope.iconButtonDivContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };

    //修改图片按钮图片宽高
    $scope.changeIconButtonDivHeightAndWidth=function changeIconButtonDivHeightAndWidth(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonDivHeightAndWidth',
            'attr':{'iconButtonDivItemNo':$scope.iconButtonDivNumSelected,'iconButtonDivHeightAndWidth':$scope.iconButtonDivHeightAndWidthInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改图片按钮字体大小
    $scope.changeIconButtonDivFontSize=function changeIconButtonDivFontSize(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonDivFontSize',
            'attr':{'iconButtonDivItemNo':$scope.iconButtonDivNumSelected,'iconButtonDivFontSize':$scope.iconButtonDivFontSizeInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改图片按钮链接
    $scope.changeIconButtonDivHrefContent=function changeIconButtonDivHrefContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeIconButtonDivHrefContent',
            'attr':{'iconButtonDivItemNo':$scope.iconButtonDivNumSelected,'iconButtonDivHref':$scope.iconButtonDivHrefContentInput}
        };
        sendMessage_funcdirective(data);
    };

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
                console.log("mydata.imgFile : " + mydata.imgFile);
                console.log("mydata.username : " + mydata.username);
                $http({
                    url: '/upload',
                    method: "POST",
                    dataType : 'json',
                    data:mydata
                }).success(function(data, status, headers, config) {
                    var iframeDocument=document.getElementById('mainIframe').contentDocument;
                    var mypage = $(iframeDocument);
                    mypage.find('div').find("[seq="+$scope.seq+"]").find('a').eq($scope.iconButtonDivNumSelected-1).find('img').attr('src',data.file);
                    //存储数据到本地（好像没有用）
                    //store.storeDataToLocal();
                    $scope.chooseimg(0);
                }).error(function(data, status, headers, config) {
                    console.log("status : " + status);
                    console.log("headers : " + headers);
                    console.log("config : " + config);
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
        //$('#warningTitle').find('strong').html('提示');
        var myid = $(document.getElementById('bs-example-navbar-collapse-1'));
        var myida = myid.find("ul").eq(1).find("li").eq(2).text().replace(/\s+/g,"");
        var iframeDocument=document.getElementById('mainIframe').contentDocument;
        var mypage = $(iframeDocument);
        mypage.find('div').find("[seq="+$scope.seq+"]").find('a').eq($scope.iconButtonDivNumSelected-1).find("img").attr('src','./img/'+myida+'/'+img.filename);
    }
    //事件筛选
    $scope.isShow = function isShow(flag){

        var matchingText = $scope.seq + 'iconButtonDivEventSelect';
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
    $scope.addiconButtonDivevent=function addiconButtonDivevent(){

            tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{'iconButtonDivContent':$scope.iconButtonDivContentInput},
                'funcType':$scope.iconButtonDiveventselect,
                'funcContent':"",
                'flag':""

            };

        tmpeventdata.flag = $scope.seq + 'iconButtonDivEventSelect';
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
    $scope.editiconButtonDivevent=function editiconButtonDivevent(elemEvent){
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
    $scope.deliconButtonDivevent=function deliconButtonDivevent(elemEvent){
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
    $scope.iconButtonDivevent = [
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
    $scope.iconButtonDiveventselect=$scope.iconButtonDivevent[0];


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
        //id
        $scope.iconButtonDividInput=$scope.attr.iconButtonDivid;
        //按钮个数
        $scope.iconButtonDivItemNo=[];
        for(var i=1;i<=$scope.attr.iconButtonNum;i++){
            $scope.iconButtonDivItemNo.push(i);
        }
        //当前选的是第N个按钮
        $scope.iconButtonDivNumSelected=$scope.attr.iconButtonDivItemNo;
        //当前按钮文字内容
        $scope.iconButtonDivContentInput=$scope.attr.iconButtonDivContent;
        //当前按钮是否有图片
        $scope.iconButtonDivHasImgChecked=$scope.attr.iconButtonDivHasImg;
        //当前按钮图片文字颜色
        $scope.iconButtonDivContentColorInput=$scope.attr.iconButtonDivContentColor;
        //当前按钮图片背景颜色
        $scope.iconButtonDivBgColorInput=$scope.attr.iconButtonDivBgColor;
        //当前文本字体
        if($scope.attr.iconButtonDivContentFontFamily != null){
            /*
             *$scope.attr是domhandle_main里面的对应的组件的属性
             *$scope.Component是当前总共有的字体的数据
             *$scope.panelItemContentFontFamilySelected是属性设置栏的select表单
             */
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.iconButtonDivContentFontFamily.val == $scope.componentFontFamily[j].val){
                    $scope.iconButtonDivContentFontFamilySelected = $scope.componentFontFamily[j];
                }
            }
        }
        //图片宽高
        $scope.iconButtonDivHeightAndWidthInput = $scope.attr.iconButtonDivHeightAndWidth;
        //按钮链接
        $scope.iconButtonDivHrefContentInput = $scope.attr.iconButtonDivHref;
        //文字大小
        $scope.iconButtonDivFontSizeInput = $scope.attr.iconButtonDivFontSize;

    },true);

    //界面分组的文字（第一组）
    $scope.iconButtonDivTitle = '图片按钮总体设置';
    //界面分组的文字（第二组）
    $scope.iconButtonDivTitle2 = '图片按钮单独设置';
    //界面分组的文字（第三组）
    $scope.iconButtonDiveventeditTitle = '图标按钮事件编辑';
    //我的图片
    $scope.iconButtonDivTitle3 = '我的图片'

    $scope.iconButtonDiveventbindTitle = '按钮事件绑定';
    //界面分组文字（第三组）
    $scope.iconButtonDiveventeditTitle = '按钮事件编辑';
}]);