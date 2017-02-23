/**
 * Created by suhuifen on 14-5-17.
 */
/*********************************************
 * 描述：标题栏（toolbar）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('toolbarCtrl', ['$scope', '$location',function toolbarCtrl($scope, $location) {
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

    //更改当前正操作标题栏内容
    $scope.changeToolbarContent=function changeToolbarContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeToolbarContent',
            'attr':{'toolbarContent':$scope.toolbarContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正操作的标题栏是否含有标题下拉框
    $scope.changeHasHeadList=function changeHasHeadList(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeHasHeadList',
            'attr':{ 'hasHeadList':$scope.hasHeadListChecked}
        };
        sendMessage_funcdirective(data);
//        var jsdata={
//            'directive':'defaultjsbind',
//            'objtype':"xialaguang",
//            'objid':"homeTitle",
//            'defaultjs':"ssM.addSelectListener('#homeTitle', function(selection){" +
//                "var $this = $(this)," +
//                "$selection = $(selection);" +
//                "$this.children('h1').text($selection.text());" +
//                "});"
//        };
//        jsdata = JSON.stringify(jsdata);
//        messenger.targets['mainIframe'].send(jsdata);
    };

    //更改当前正操作的标题栏是否含有返回按钮
    $scope.changeHasBack=function changeHasBack(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeHasBack',
            'attr':{ 'hasBack':$scope.hasBackChecked}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正操作的标题栏是否含有关于按钮
    $scope.changeHasButton=function changeHasButton(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeHasButton',
            'attr':{ 'hasButton':$scope.hasButtonChecked}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正操作的“返回”按钮内容
    $scope.changBackContent=function changBackContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changBackContent',
            'attr':{ 'backContent':$scope.backContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正操作的“关于”按钮内容
    $scope.changeToolbarButtonContent=function changeToolbarButtonContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeToolbarButtonContent',
            'attr':{ 'toolbarButtonContent':$scope.toolbarButtonContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //下拉框刷新操作
    $scope.reftoolbar=function reftoolbar(){
        var data = {'seq':$scope.seq,'directive':'reftoolbar'};
        sendMessage_funcdirective(data);
        var jsdata={
            'directive':'defaultjsbind',
            'objtype':"xialaguang",
            'objid':"homeTitle",
            'defaultjs':"ssM.addSelectListener('#homeTitle', function(selection){" +
                "var $this = $(this)," +
                "$selection = $(selection);" +
                "$this.children('h1').text($selection.text());" +
                "});"
        };
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        jsdata = JSON.stringify(jsdata);
        messenger.targets['mainIframe'].send(jsdata);
    };

    //下拉框列表+1操作
    $scope.addhli=function addhli(){
        var data = {'seq':$scope.seq,
            'directive':'addhli',
            'attr':{ 'hasHeadList':$scope.hasHeadListChecked}
        };
        sendMessage_funcdirective(data);
    };

    //下拉框列表-1操作
    $scope.cuthli=function cuthli(){
        var data = {'seq':$scope.seq,
            'directive':'cuthli',
            'attr':{ 'hasHeadList':$scope.hasHeadListChecked}
        };
        sendMessage_funcdirective(data);
//        var jsdata={
//            'directive':'defaultjsbind',
//            'objtype':"xialaguang",
//            'objid':"homeTitle",
//            'defaultjs':"ssM.addSelectListener('#homeTitle', function(selection){" +
//                "var $this = $(this)," +
//                "$selection = $(selection);" +
//                "$this.children('h1').text($selection.text());" +
//                "});"
//        };
//        jsdata = JSON.stringify(jsdata);
//        messenger.targets['mainIframe'].send(jsdata);
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
    $scope.addevent=function addevent(){

            tmpeventdata={
                'directive':'addeventbind',
                'eventid':Math.uuid(),
                'seq':$scope.seq,
                'childattr':{ 'hasBack':$scope.hasBackChecked,'hasButton':$scope.hasButtonChecked, 'hasHeadList':$scope.hasHeadListChecked},
                'funcType':$scope.toolbareventselect,
                'funcContent':""
            };
        eventData=eventDataHandle.getEventContentFromEventlistViaElemEventListAndEventData($scope.elemEventList,tmpeventdata);
        if(eventData.funcContent!=""){
            initJs=eventData.funcContent;
        }else{
            if(eventData.funcType.val == "click"){
                initJs="$('[seq=\""+eventData.seq+"\"]')";
                if(eventData.childattr.hasButton == 'yes'){
                    initJs+=".children('.BUTTON')";
                }
                initJs+=".on('click',function(){\r\tif(event.target == this){" +
                    "\r\t\talert(1234)" +
                    "\r\t}\r});";
 /*               if(eventData.childattr.hasHeadList == 'yes'){
                    initJs = '';
                    initJs = "var ssM = $.ssm();\r";
                    initJs+= " $(function (){" +
                        "\r\tssM.addSelectListener('#homeTitle', function(selection){" +
                        "\r\t\tvar $this = $(this)," +
                        "\r\t\t$selection = $(selection);" +
                        "\r\t\t$this.children('h1').text($selection.text());" +
                        "\r\t});" +
                        "\r});";
                }*/
            }else if(eventData.funcType.val == "dblclick"){
                initJs="$('[seq=\""+eventData.seq+"\"]')";
                if(eventData.childattr.hasButton == 'yes'){
                    initJs+=".children('.BUTTON')";
                }
                initJs+=".on('click',function(){\r\tif(event.target == this){" +
                    "\r\t\talert(1234)" +
                    "\r\t}\r});";
   /*             if(eventData.childattr.hasHeadList == 'yes'){
                    initJs = '';
                    initJs = "标题下拉框不绑定该事件";
                }*/
            }else if(eventData.funcType.val == "bubble"){

                initJs = "var ssM = $.ssm();\r"
                initJs+= "$('[seq=\""+eventData.seq+"\"]')";
                if(eventData.childattr.hasButton == 'yes'){
                    initJs+=".children('.BUTTON')";
                }
                initJs+=".on('click',function(){\r\tif(event.target == this){" +
                    "\r\t\tssM.popwin('气泡式消息');" +
                    "\r\t}\r});";
 /*               if(eventData.childattr.hasHeadList == 'yes'){
                    initJs = '';
                    initJs = "标题下拉框不绑定该事件";
                }*/

            }else if(eventData.funcType.val == "popOvertop"){

                initJs = "var ssM = $.ssm();\r"
                initJs+= "$('[seq=\""+eventData.seq+"\"]')";
                if(eventData.childattr.hasButton == 'yes'){
                    initJs+=".children('.BUTTON')";
                }
                initJs+=".on('click',function(){\r\tif(event.target == this){" +
                    "\r\t\tvar t=ssM.popOver();" +
                    "\r\t\tt.setContent('这是提示箭头朝上的浮动提示框，这里使用了默认的属性值');" +
                    "\r\t}\r});";
    /*            if(eventData.childattr.hasHeadList == 'yes'){
                    initJs = '';
                    initJs = "标题下拉框不绑定该事件";
                }*/
            }else if(eventData.funcType.val == "popOverright"){

                initJs = "var ssM = $.ssm();\r"
                initJs+= "$('[seq=\""+eventData.seq+"\"]')";
                if(eventData.childattr.hasButton == 'yes'){
                    initJs+=".children('.BUTTON')";
                }
                initJs+=".on('click',function(){\r\tif(event.target == this){" +
                    "\r\t\tvar setting={height:'60',width:'120',to:'right'}" +
                    "\r\t\tvar r=ssM.popOver(setting);" +
                    "\r\t\tr.setContent('这是提示箭头朝右的浮动提示框，这里修改了浮动提示框的高和宽，尖角指向');" +
                    "\r\t}\r});";
             /*   if(eventData.childattr.hasHeadList == 'yes'){
                    initJs = '';
                    initJs = "标题下拉框不绑定该事件";
                }*/

            }else if(eventData.funcType.val == "popOverbottom"){

                initJs = "var ssM = $.ssm();\r"
                initJs+= "$('[seq=\""+eventData.seq+"\"]')";
                if(eventData.childattr.hasButton == 'yes'){
                    initJs+=".children('.BUTTON')";
                }
                initJs+=".on('click',function(){\r\tif(event.target == this){" +
                    "\r\t\tvar setting={to:'bottom',interval:'10000'}" +
                    "\r\t\tvar b=ssM.popOver(setting);" +
                    "\r\t\tb.setContent('这是提示箭头朝下的浮动提示框,这里修改了提示框的停留时间，尖角指向');" +
                    "\r\t}\r});";
        /*        if(eventData.childattr.hasHeadList == 'yes'){
                    initJs = '';
                    initJs = "标题下拉框不绑定该事件";
                }*/

            }else if(eventData.funcType.val == "popOverleft"){

                initJs = "var ssM = $.ssm();\r"
                initJs+= "$('[seq=\""+eventData.seq+"\"]')";
                if(eventData.childattr.hasButton == 'yes'){
                    initJs+=".children('.BUTTON')";
                }
                initJs+=".on('click',function(){\r\tif(event.target == this){" +
                    "\r\t\tvar setting={to:'left'}" +
                    "\r\t\tvar l=ssM.popOver(setting);" +
                    "\r\t\tl.setContent('这是提示箭头朝左的浮动提示框，这里只修改了尖角指向');" +
                    "\r\t}\r});";
         /*       if(eventData.childattr.hasHeadList == 'yes'){
                    initJs = '';
                    initJs = "标题下拉框不绑定该事件";
                }*/
            }else if(eventData.funcType.val == "progress"){
                initJs = "var ssM = $.ssm();\r"
                initJs+= "$('[seq=\""+eventData.seq+"\"]')";
                if(eventData.childattr.hasButton == 'yes'){
                    initJs+=".children('.BUTTON')";
                }
                initJs+=".on('click',function(){\r\tif(event.target == this){" +
                    "\r\t\tvar par=ssM. progressBox('进度条对话框标题','进度条对话框中可以添加文本信息',true,onClickCal); " +
                    "\r\t\t//progressBox(title(进度条对话框标题), msg（进度条对话框中文本信息）, " +
                    "\r\t\t//useCancelButton（是否使用取消按钮）, onCanceled（取消按钮绑定的函数）)" +
                    "\r\t\tpar.update(90); " +
                    "\r\t\tfunction onClickCal(){\r\r}" +
                    "\r\t}\r});";
         /*       if(eventData.childattr.hasHeadList == 'yes'){
                    initJs = '';
                    initJs = "标题下拉框不绑定该事件";
                }*/
            }else if(eventData.funcType.val == "prompt"){

                initJs = "var ssM = $.ssm();\r"
                initJs+= "$('[seq=\""+eventData.seq+"\"]')";
                if(eventData.childattr.hasButton == 'yes'){
                    initJs+=".children('.BUTTON')";
                }
                initJs+=".on('click',function(){\r\tif(event.target == this){" +
                    "\r\t\tssM.hintbox('提示框标题', '通过设置参数，我可以是阻塞式或非阻塞式的提示框');" +
                    "\r\t\t//hintbox(title（提示框标题）, hintbox（提示框内容）, disableScreen（是否为阻塞式）)" +
                    "\r\t\t//只要disableScreen不为itrue，则屏蔽屏幕" +
                    "\r\t}\r});";
            /*    if(eventData.childattr.hasHeadList == 'yes'){
                    initJs = '';
                    initJs = "标题下拉框不绑定该事件";
                }*/
            }else if(eventData.funcType.val == "loading"){

                initJs = "var ssM = $.ssm();\r"
                initJs+= "$('[seq=\""+eventData.seq+"\"]')";
                if(eventData.childattr.hasButton == 'yes'){
                    initJs+=".children('.BUTTON')";
                }
                initJs+=".on('click',function(){\r\tif(event.target == this){" +
                    "\r\t\tssM.loader('show',{disableScreen:false,color:'#04AED9'});" +
                    "\r\t\tvar date = new Date();" +
                    "\r\t\talert('3秒后加载中动画消失');" +
                    "\r\t\tsetTimeout(function(){" +
                    "\r\t\tssM.loader('hide');" +
                    "\r\t\t},3000);" +
                    "\r\t}\r});";
       /*         if(eventData.childattr.hasHeadList == 'yes'){
                    initJs = '';
                    initJs = "标题下拉框不绑定该事件";
                }*/
            }
        }
        $scope.ajaxinitjs();
    };

    //编辑js事件绑定
    $scope.editoolbarevent=function editoolbarevent(elemEvent){
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
    $scope.deletoolbarvent=function editoolbarevent(elemEvent){
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

    //更改标题文字字体
    $scope.changeToolbarContentFontFamily=function changeToolbarContentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeToolbarContentFontFamily',
            'attr':{'toolbarContentFontFamily':$scope.toolbarContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };

    //更改“返回”按钮文字字体
    $scope.changBackContentFontFamily=function changBackContentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changBackContentFontFamily',
            'attr':{ 'backContentFontFamily':$scope.backContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };

    //更改“关于”按钮文字字体
    $scope.changeToolbarButtonContentFontFamily=function changeToolbarButtonContentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeToolbarButtonContentFontFamily',
            'attr':{ 'toolbarButtonContentFontFamily':$scope.toolbarButtonContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };

    //更改背景颜色
    $scope.changeToolBarBgColor=function changeToolBarBgColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeToolBarBgColor',
            'attr':{'toolBarBgColor':$scope.toolBarBgColorInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改标题颜色
    $scope.changeToolBarTitleColor=function changeToolBarTitleColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeToolBarTitleColor',
            'attr':{'toolBarTitleColor':$scope.toolBarTitleColorInput}
        };
        sendMessage_funcdirective(data);
    };


    //更改返回钮颜色
    $scope.changeToolBarBackColor=function changeToolBarBackColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeToolBarBackColor',
            'attr':{'toolBarBackColor':$scope.toolBarBackColorInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改返回钮背景颜色
    $scope.changeToolBarBackBgColor=function changeToolBarBackBgColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeToolBarBackBgColor',
            'attr':{'toolBarBackBgColor':$scope.toolBarBackBgColorInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改提示钮颜色
    $scope.changeToolBarButtonColor=function changeToolBarButtonColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeToolBarButtonColor',
            'attr':{'toolBarButtonColor':$scope.toolBarButtonColorInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改提示钮背景颜色
    $scope.changeToolBarButtonBgColor=function changeToolBarButtonBgColor(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeToolBarButtonBgColor',
            'attr':{'toolBarButtonBgColor':$scope.toolBarButtonBgColorInput}
        };
        sendMessage_funcdirective(data);
    };


    //界面分组的文字（第一组）
    $scope.toolbarContentTitle = '标题栏内容设置';
    //界面分组的文字（第二组）
    $scope.toolbarModuleTitle = '标题栏组件设置';
    //界面分组的文字（第三组）
    $scope.moduleContentTitle = '组件内容设置';
    //界面分组的文字（第四组）
    $scope.headListContentTitle = '标题下拉框设置';
    //界面分组的文字（第四_1组）
    $scope.toolbareventbindTitle = '添加事件绑定';
    //界面分组的文字（第四_2组）
    $scope.toolbareventeditTitle = '编辑事件绑定';

    //绑定的事件类型
    $scope.toolbarevent = [
        {name:'click',val:'click'},
        {name:'doubleclick',val:'dblclick'},
        {name:'bubble',val:'bubble'},
        {name:'popOvertop',val:'popOvertop'},
        {name:'popOverright',val:'popOverright'},
        {name:'popOverbottom',val:'popOverbottom'},
        {name:'popOverleft',val:'popOverleft'},
        {name:'progress',val:'progress'},
        {name:'prompt',val:'prompt'},
        {name:'loading',val:'loading'}
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

    //默认选择的绑定事件
    $scope.toolbareventselect=$scope.toolbarevent[0];

    //监听
    $scope.$watch('attr', function() {
          //当前id
         $scope.toolbaridInput=$scope.attr.toolbarid;
        //当前标题栏文字内容
        $scope.toolbarContentInput=$scope.attr.toolbarContent;
        //当前标题栏是否含有标题下拉框
        $scope.hasHeadListChecked=$scope.attr.hasHeadList;
        //当前标题栏是否含有返回按钮
        $scope.hasBackChecked=$scope.attr.hasBack;
        //当前标题栏是否含有关于按钮
        $scope.hasButtonChecked=$scope.attr.hasButton;
        //“返回”按钮内容
        $scope.backContentInput=$scope.attr.backContent;
        //“关于”按钮内容
        $scope.toolbarButtonContentInput=$scope.attr.toolbarButtonContent;
        //下拉列表个数
        $scope.headListItemNo=$scope.attr.headListCount;
        //当前标题栏文字字体
        //$scope.toolbarContentFontFamilyInput=$scope.attr.toolbarContentFontFamily;
        if($scope.attr.toolbarContentFontFamily != null){
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.toolbarContentFontFamily.val == $scope.componentFontFamily[j].val){
                    $scope.toolbarContentFontFamilySelected = $scope.componentFontFamily[j];
                }
            }
        }

        //当前“返回”按钮文字字体
        //$scope.toolbarContentFontFamilyInput=$scope.attr.toolbarContentFontFamily;
        if($scope.attr.backContentFontFamily != null){
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.backContentFontFamily.val == $scope.componentFontFamily[j].val){
                    $scope.backContentFontFamilySelected = $scope.componentFontFamily[j];
                }
            }
        }
        //“返回”按钮文字字体
        //$scope.backContentFontFamilyInput=$scope.attr.backContentFontFamily;
        //“关于”按钮文字字体
        //$scope.toolbarButtonContentFontFamilyInput=$scope.attr.toolbarButtonContentFontFamily;
        if($scope.attr.toolbarButtonContentFontFamily != null){
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.toolbarButtonContentFontFamily.val == $scope.componentFontFamily[j].val){
                    $scope.toolbarButtonContentFontFamilySelected = $scope.componentFontFamily[j];
                }
            }
        }

        //背景颜色
        $scope.toolBarBgColorInput=$scope.attr.toolBarBgColor;
        //标题颜色
        $scope.toolBarTitleColorInput=$scope.attr.toolBarTitleColor;
        //返回钮颜色
        $scope.toolBarBackColorInput=$scope.attr.toolBarBackColor;
        //返回钮背景颜色
        $scope.toolBarBackBgColorInput=$scope.attr.toolBarBackBgColor;
        //提示钮颜色
        $scope.toolBarButtonColorInput=$scope.attr.toolBarButtonColor;
        //提示钮背景颜色
        $scope.toolBarButtonBgColorInput=$scope.attr.toolBarButtonBgColor;
    },true);

}]);
