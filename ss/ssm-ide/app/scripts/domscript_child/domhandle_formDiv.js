/**
 * Created by fd on 2015/11/11.
 */
/**
 * Created by Administrator on 14-7-8.
 */
/**
 * Created by Administrator on 14-7-7.
 */
/**
 * Created by gyj
 */
/****************************************/
/* listul各种操作封装
 /****************************************/


(function ($) {


    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取表单宽度
    $.fn.getFormDivWidth = function () {
        var _this=$(this),
            res='';
        var width1 = $(this).width();
        console.log('width1 = ' + width1);
        var width2 = $(this).find("form").width();
        console.log('width2 = ' + width2);
        //两数相除保留一位小数，获取当前表单所占宽度的百分比
        var res = ((width2/width1)*100).toFixed(1);
        console.log('百分比：' + res);
        res = parseInt(res);
        return res;
    };

    //获取form的method
    $.fn.getFormDivMethod = function () {
        var _this=$(this).find("form"),
            res='';
        var data;
       res = _this.attr('method');
        if(res == 'null'){
            data = {
                name:'无',
                val:'null'
            }
        }else if(res == "get"){
            data = {
                name: 'get',
                val: 'get'
            }
        }else if(res == 'post'){
            data = {
                name: 'post',
                val: 'post'
            }
        }
        return data;
    };

    //获取form的action
    $.fn.getFormDivAction = function () {
        var _this=$(this).find("form"),
            res='';
        res = _this.attr("action");
        if(res == undefined){
            return "无"
        }
        return res;
    };

    //获取搜索框个数 getSearchInputNum
    $.fn.getSearchInputNum = function () {
        var _this=$(this).find(".formDivSearchDiv");
        var res = _this.length;
        console.log('搜索框个数：' + res);
        return res;
    };

    //获取文本框个数 getTextInputNum
    $.fn.getTextInputNum = function () {
        var _this=$(this).find(".formDivTextDiv");
        var res = _this.length;
        console.log('文本框个数：' + res);
        return res;
    };

    //获取密码框个数 getPasswordInputNum
    $.fn.getPasswordInputNum = function () {
        var _this=$(this).find(".formDivPasswordDiv");
        var res = _this.length;
        console.log('密码框个数：' + res);
        return res;
    };

    //获取单选集个数 getRadioDivNum
    $.fn.getRadioDivNum = function () {
        var _this=$(this).find(".formDivRadioDiv");
        var res = _this.length;
        console.log('单选集个数：' + res);
        return res;
    };

    //获取复选集个数 getCheckBoxDivNum
    $.fn.getCheckBoxDivNum = function () {
        var _this=$(this).find(".formDivCheckBoxDiv");
        var res = _this.length;
        console.log('复选集个数：' + res);
        return res;
    };

    //获取当前搜索框是否有标题 getSearchInputHasTitle
    $.fn.getSearchInputHasTitle = function () {
        var _this=$(this);
        if(_this.find("label").length > 0){
            return 'yes';
        }else{
            return 'no';
        }
    };

    //获取当前文本框是否有标题 getTextInputHasTitle
    $.fn.getTextInputHasTitle = function () {
        var _this=$(this);
        if(_this.find("label").length > 0){
            return 'yes';
        }else{
            return 'no';
        }
    };

    //获取当前密码框是否有标题 getPasswordInputHasTitle
    $.fn.getPasswordInputHasTitle = function () {
        var _this=$(this);
        if(_this.find("label").length > 0){
            return 'yes';
        }else{
            return 'no';
        }
    };

    //获取当前单选集是否有标题 getRadioDivHasTitle
    $.fn.getRadioDivHasTitle = function () {
        var _this=$(this);
        if(_this.find("label").length > 0){
            return 'yes';
        }else{
            return 'no';
        }
    };

    //获取当前复选集是否有标题 getCheckBoxDivHasTitle
    $.fn.getCheckBoxDivHasTitle = function () {
        var _this=$(this);
        if(_this.find("label").length > 0){
            return 'yes';
        }else{
            return 'no';
        }
    };

    //获取当前搜索框标题内容 getSearchInputTitleContent
    $.fn.getSearchInputTitleContent = function () {
        var _this=$(this);
        var res;
        if(_this.find("label").length > 0){
            res = _this.find("label").text();
            return res;
        }else{
            return '无';
        }
    };

    //获取当前文本框标题内容 getTextInputTitleContent
    $.fn.getTextInputTitleContent = function () {
        var _this=$(this);
        var res;
        if(_this.find("label").length > 0){
            res = _this.find("label").text();
            return res;
        }else{
            return '无';
        }
    };

    //获取当前密码框标题内容 getPasswordInputTitleContent
    $.fn.getPasswordInputTitleContent = function () {
        var _this=$(this);
        var res;
        if(_this.find("label").length > 0){
            res = _this.find("label").text();
            return res;
        }else{
            return '无';
        }
    };

    //获取当前单选集标题内容 getRadioDivTitleContent
    $.fn.getRadioDivTitleContent = function () {
        var _this=$(this);
        var res;
        if(_this.find("label").length > 0){
            res = _this.find("label").text();
            return res;
        }else{
            return '无';
        }
    };

    //获取当前复选集标题内容 getCheckBoxDivTitleContent
    $.fn.getCheckBoxDivTitleContent = function () {
        var _this=$(this);
        var res;
        if(_this.find("label").length > 0){
            res = _this.find("label").text();
            return res;
        }else{
            return '无';
        }
    };

    //获取当前搜索框按钮内容 getSearchInputButtonContent
    $.fn.getSearchInputButtonContent = function () {
        var _this=$(this);
        var res;
        if(_this.find("button").length > 0){
            res = _this.find("button").text();
            return res;
        }else{
            return '无';
        }
    };

    //获取当前搜索框Placeholder getSearchInputPlaceholderContent
    $.fn.getSearchInputPlaceholderContent = function () {
        var _this=$(this);
        var res;
        if(_this.find("input").length > 0){
            res = _this.find("input").attr('placeholder');
            return res;
        }else{
            return '无';
        }
    };

    //获取当前文本框Placeholder getTextInputPlaceholderContent
    $.fn.getTextInputPlaceholderContent = function () {
        var _this=$(this);
        var res;
        if(_this.find("input").length > 0){
            res = _this.find("input").attr('placeholder');
            return res;
        }else{
            return '无';
        }
    };

    //获取当前密码框Placeholder getPasswordInputPlaceholderContent
    $.fn.getPasswordInputPlaceholderContent = function () {
        var _this=$(this);
        var res;
        if(_this.find("input").length > 0){
            res = _this.find("input").attr('placeholder');
            return res;
        }else{
            return '无';
        }
    };

    //获取单选项个数 getRadioNum
    $.fn.getRadioNum = function () {
        var _this=$(this).find("input");
        var res = _this.length;
        console.log('单选项个数：' + res);
        return res;
    };

    //获取复选项个数 getCheckBoxNum
    $.fn.getCheckBoxNum = function () {
        var _this=$(this).find("input");
        var res = _this.length;
        console.log('复选项个数：' + res);
        return res;
    };

    //获取搜索框的name getSearchInputNameContent
    $.fn.getSearchInputNameContent = function () {
        var _this=$(this).find("input");
        var res = _this.attr("name");
        console.log('搜索框name：' + res);
        if(res == undefined){
            return "无";
        }else{
            return res;
        }
    };

    //获取文本框的name getTextInputNameContent
    $.fn.getTextInputNameContent = function () {
        var _this=$(this).find("input");
        var res = _this.attr("name");
        console.log('文本框name：' + res);
        if(res == undefined){
            return "无";
        }else{
            return res;
        }
    };


    //获取密码框的name getPasswordInputNameContent
    $.fn.getPasswordInputNameContent = function () {
        var _this=$(this).find("input");
        var res = _this.attr("name");
        console.log('密码框name：' + res);
        if(res == undefined){
            return "无";
        }else{
            return res;
        }
    };

    //获取单选集的name getRadioDivNameContent
    $.fn.getRadioDivNameContent = function () {
        var _this=$(this).find("input").eq(0);
        var res = _this.attr("name");
        console.log('单选集name：' + res);
        return res;
    };

    //获取复选集的name getCheckBoxDivNameContent
    $.fn.getCheckBoxDivNameContent = function () {
        var _this=$(this).find("input").eq(0);
        var res = _this.attr("name");
        console.log('复选集name：' + res);
        return res;
    };

    //获取单选项value getRadioValue
    $.fn.getRadioValue = function () {
        var _this=$(this);
        var res = _this.attr("value");
        console.log('单选集name：' + res);
        if(res == undefined){
            return "无";
        }else{
            return res;
        }
    };

    //获取复选项value getCheckBoxValue
    $.fn.getCheckBoxValue = function () {
        var _this=$(this);
        var res = _this.attr("value");
        console.log('复选集name：' + res);
        if(res == undefined){
            return "无";
        }else{
            return res;
        }
    };



    /****************************************/
    /* 各种操作函数
     /****************************************/
    //搜索框个数+1
    $.fn.addSearchInput = function (options) {
        var _this=$(this).find("form");
        var content = "<div class='formDivGroup"+" "+"formDivSearchDiv'>"+
                        "<label class='formDivLabel'>搜索框</label>"+
                        "<div class='formDivInputDiv'>"+
                        "<input type='text' class='formDivInput"+" "+" formDivSearchInput' placeholder='search'>"+
                        "<span class='formDivSpan'>"+
                        "<button type='submit' class='formDivSearchButton'>查找</button>"+
                        "</span>"+
                        "</div>"+
                        "</div>";
        //在form的最后添加元素（添加到form的里面）
        _this.append(content);
        //console.log("要加入的this的html为：" + _this.html());
        sendMessage_funcpanelinit($(this));
    };

    //搜索框个数-1
    $.fn.cutSearchInput = function (options) {
        var _this=$(this).find(".formDivGroup");
        if(_this.length <= 1){
            //个数至少为1
            alert("无法删除，请至少保留一个input节点");
        }else{
            var child = $(this).find(".formDivSearchDiv");
            var parent = child.eq(child.length - 1);
            parent.remove();
        }
        //console.log("要加入的this的html为：" + _this.html());
        sendMessage_funcpanelinit($(this));
    };

    //文本框个数+1
    $.fn.addTextInput = function (options) {
        var _this=$(this).find("form");
        var content = "<div class='formDivGroup"+" "+"formDivTextDiv'>"+
            "<label class='formDivLabel'>文本框</label>"+
            "<input type='text' class='formDivInput"+" "+" formDivTextInput' placeholder='text'>"+
            "</div>";
        //在form的最后添加元素（添加到form的里面）
        _this.append(content);
        //console.log("要加入的this的html为：" + _this.html());
        sendMessage_funcpanelinit($(this));
    };

    //文本框个数-1
    $.fn.cutTextInput = function (options) {
        var _this=$(this).find(".formDivGroup");
        if(_this.length <= 1){
            //个数至少为1
            alert("无法删除，请至少保留一个input节点");
        }else{
            var child = $(this).find(".formDivTextDiv");
            var parent = child.eq(child.length - 1);
            parent.remove();
        }
        //console.log("要加入的this的html为：" + _this.html());
        sendMessage_funcpanelinit($(this));
    };

    //密码框个数+1
    $.fn.addPasswordInput = function (options) {
        var _this=$(this).find("form");
        var content = "<div class='formDivGroup"+ " " +"formDivPasswordDiv'>"+
            "<label class='formDivLabel'>密码框</label>"+
            "<input type='password' class='formDivInput"+" "+" formDivPasswordInput' placeholder='password'>"+
            "</div>";
        //在form的最后添加元素（添加到form的里面）
        _this.append(content);
        //console.log("要加入的this的html为：" + _this.html());
        sendMessage_funcpanelinit($(this));
    };

    //密码框个数-1
    $.fn.cutPasswordInput = function (options) {
        var _this=$(this).find(".formDivGroup");
        if(_this.length <= 1){
            //个数至少为1
            alert("无法删除，请至少保留一个input节点");
        }else{
            var child = $(this).find(".formDivPasswordDiv");
            var parent = child.eq(child.length - 1);
            parent.remove();
        }
        //console.log("要加入的this的html为：" + _this.html());
        sendMessage_funcpanelinit($(this));
    };

    //单选集个数+1
    $.fn.addRadioDivInput = function (options) {
        var _this=$(this).find("form");
        var content = "<div class='formDivGroup"+ " " +"formDivRadioDiv'>"+
            "<label class='formDivLabel'>单选集</label>"+
            "<p><input type='radio' name='default'><span>选项1</span></p>"+
            "<p><input type='radio' name='default'><span>选项2</span></p>"+
            "<p><input type='radio' name='default'><span>选项3</span></p>"+
            "<p><input type='radio' name='default'><span>选项4</span></p>"+
            "</div>";
        //在form的最后添加元素（添加到form的里面）
        _this.append(content);
        //console.log("要加入的this的html为：" + _this.html());
        sendMessage_funcpanelinit($(this));
    };

    //单选集个数-1
    $.fn.cutRadioDivInput = function (options) {
        var _this=$(this).find(".formDivGroup");
        if(_this.length <= 1){
            //个数至少为1
            alert("无法删除，请至少保留一个input节点");
        }else{
            var child = $(this).find(".formDivRadioDiv");
            var parent = child.eq(child.length - 1);
            parent.remove();
        }
        //console.log("要加入的this的html为：" + _this.html());
        sendMessage_funcpanelinit($(this));
    };

    //复选集个数+1
    $.fn.addCheckBoxDivInput = function (options) {
        var _this=$(this).find("form");
        var content = "<div class='formDivGroup"+ " " +"formDivCheckBoxDiv'>"+
            "<label class='formDivLabel'>复选集</label>"+
            "<p><input type='checkbox' name='default'><span>选项1</span></p>"+
            "<p><input type='checkbox' name='default'><span>选项2</span></p>"+
            "<p><input type='checkbox' name='default'><span>选项3</span></p>"+
            "<p><input type='checkbox' name='default'><span>选项4</span></p>"+
            "</div>";
        //在form的最后添加元素（添加到form的里面）
        _this.append(content);
        //console.log("要加入的this的html为：" + _this.html());
        sendMessage_funcpanelinit($(this));
    };

    //复选集个数-1
    $.fn.cutCheckBoxDivInput = function (options) {
        var _this=$(this).find(".formDivGroup");
        if(_this.length <= 1){
            //个数至少为1
            alert("无法删除，请至少保留一个input节点");
        }else{
            var child = $(this).find(".formDivCheckBoxDiv");
            var parent = child.eq(child.length - 1);
            parent.remove();
        }
        //console.log("要加入的this的html为：" + _this.html());
        sendMessage_funcpanelinit($(this));
    };

    //修改表单宽度 changeFormDivWidth
    $.fn.changeFormDivWidth = function (formDivWidth) {
        var _this=$(this).find("form"),
            width=formDivWidth;
        _this.css('width',width + '%');
        sendMessage_funcpanelinit($(this));
    };

    //修改method
    $.fn.changeFormDivMethod = function (formDivMethod) {
        var _this=$(this).find("form"),
            method=formDivMethod;
        _this.attr('method',method);
        sendMessage_funcpanelinit($(this));
    };

    //修改action changeFormDivAction
    $.fn.changeFormDivAction = function (formDivAction) {
        var _this=$(this).find("form"),
            action=formDivAction;
        _this.attr('action',action);
        sendMessage_funcpanelinit($(this));
    };

    //修改选择的是第几个搜索框 changeSearchInputItemNo
    $.fn.changeSearchInputItemNo = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum,radioNo, checkBoxNo) {
        var _this=$(this);
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改选择的是第几个文本框 changeTextInputItemNo
    $.fn.changeTextInputItemNo = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum,radioNo, checkBoxNo) {
        var _this=$(this);
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改选择的是第几个密码框 changePasswordInputItemNo
    $.fn.changePasswordInputItemNo = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum,radioNo, checkBoxNo) {
        var _this=$(this);
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改选择的是第几个单选集 changeRadioDivItemNo
    $.fn.changeRadioDivItemNo = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, checkBoxNo) {
        var _this=$(this);
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            checkBoxNo:checkBoxNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改选择的是第几个复选集 changeCheckBoxDivItemNo
    $.fn.changeCheckBoxDivItemNo = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum,radioNo) {
        var _this=$(this);
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改当前搜索栏是否有标题 changeSearchInputHasTitle
    $.fn.changeSearchInputHasTitle = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum,radioNo, checkBoxNo,searchInputHasTitle) {
        var _this=$(this).find(".formDivSearchDiv").eq(searchInputNum-1);
        //如果有则删除，如果没有则添加
        if(_this.find("label").length > 0 && searchInputHasTitle == 'no'){
            //有
            _this.find("label").remove();
        }else if(_this.find("label").length <= 0 && searchInputHasTitle == 'yes'){
            //没有
            _this.find(".formDivInputDiv").before("<label class='formDivLabel'>搜索框</label>");
        }
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改当前文本框是否有标题 changeTextInputHasTitle
    $.fn.changeTextInputHasTitle = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum,radioNo, checkBoxNo,textInputHasTitle) {
        var _this=$(this).find(".formDivTextDiv").eq(textInputNum-1);
        console.log("textInputHasTitle:" + textInputHasTitle);
        //如果有则删除，如果没有则添加
        if(_this.find("label").length > 0 && textInputHasTitle == 'no'){
            //有
            _this.find("label").remove();
        }else if(_this.find("label").length <= 0 && textInputHasTitle == 'yes'){
            //没有
            _this.find(".formDivInput").before("<label class='formDivLabel'>文本框</label>");
        }
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改当前密码框是否有标题 changePasswordInputHasTitle
    $.fn.changePasswordInputHasTitle = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum,radioNo, checkBoxNo,passwordInputHasTitle) {
        var _this=$(this).find(".formDivPasswordDiv").eq(passwordInputNum-1);
        console.log("passwordInputHasTitle:" + passwordInputHasTitle);
        //如果有则删除，如果没有则添加
        if(_this.find("label").length > 0 && passwordInputHasTitle == 'no'){
            //有
            _this.find("label").remove();
        }else if(_this.find("label").length <= 0 && passwordInputHasTitle == 'yes'){
            //没有
            _this.find(".formDivInput").before("<label class='formDivLabel'>密码框</label>");
        }
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改当前单选集是否有标题 changeRadioDivHasTitle
    $.fn.changeRadioDivHasTitle = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum,radioNo, checkBoxNo,radioDivHasTitle) {
        var _this=$(this).find(".formDivRadioDiv").eq(RadioDivNum-1);
        console.log("radioDivHasTitle:" + radioDivHasTitle);
        //如果有则删除，如果没有则添加
        if(_this.find("label").length > 0 && radioDivHasTitle == 'no'){
            //有
            _this.find("label").remove();
        }else if(_this.find("label").length <= 0 && radioDivHasTitle == 'yes'){
            //没有
            _this.find("p").eq(0).before("<label class='formDivLabel'>单选集</label>");
        }
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改当前复选集是否有标题 changeCheckBoxDivHasTitle
    $.fn.changeCheckBoxDivHasTitle = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo, checkBoxDivHasTitle) {
        var _this=$(this).find(".formDivCheckBoxDiv").eq(checkBoxDivNum-1);
        console.log("checkBoxDivHasTitle:" + checkBoxDivHasTitle);
        //如果有则删除，如果没有则添加
        if(_this.find("label").length > 0 && checkBoxDivHasTitle == 'no'){
            //有
            _this.find("label").remove();
        }else if(_this.find("label").length <= 0 && checkBoxDivHasTitle == 'yes'){
            //没有
            _this.find("p").eq(0).before("<label class='formDivLabel'>复选集</label>");
        }
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改搜索框标题内容 changeSearchInputTitleContent
    $.fn.changeSearchInputTitleContent = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo,searchInputTitleContent) {
        var _this=$(this).find(".formDivSearchDiv").eq(searchInputNum-1);
        console.log("searchInputTitleContent:" + searchInputTitleContent);
        //如果有则删除，如果没有则不管
        if(_this.find("label").length > 0){
            //有
            _this.find("label").text(searchInputTitleContent);
        }else{
            //没有
        }
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改文本框标题内容 changeTextInputTitleContent
    $.fn.changeTextInputTitleContent = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo,textInputTitleContent) {
        var _this=$(this).find(".formDivTextDiv").eq(textInputNum-1);
        console.log("textInputTitleContent:" + textInputTitleContent);
        //如果有则删除，如果没有则不管
        if(_this.find("label").length > 0){
            //有
            _this.find("label").text(textInputTitleContent);
        }else{
            //没有
        }
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改密码框标题内容 changePasswordInputTitleContent
    $.fn.changePasswordInputTitleContent = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo,passwordInputTitleContent) {
        var _this=$(this).find(".formDivPasswordDiv").eq(passwordInputNum-1);
        console.log("passwordInputTitleContent:" + passwordInputTitleContent);
        //如果有则删除，如果没有则不管
        if(_this.find("label").length > 0){
            //有
            _this.find("label").text(passwordInputTitleContent);
        }else{
            //没有
        }
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改单选集标题内容 changeRadioDivTitleContent
    $.fn.changeRadioDivTitleContent = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum,radioNo, checkBoxNo,radioDivTitleContent) {
        var _this=$(this).find(".formDivRadioDiv").eq(RadioDivNum-1);
        console.log("radioDivTitleContent:" + radioDivTitleContent);
        //如果有则删除，如果没有则不管
        if(_this.find("label").length > 0){
            //有
            _this.find("label").text(radioDivTitleContent);
        }else{
            //没有
        }
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改复选集标题内容 changeCheckBoxDivTitleContent
    $.fn.changeCheckBoxDivTitleContent = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum,radioNo, checkBoxNo,checkBoxDivTitleContent) {
        var _this=$(this).find(".formDivCheckBoxDiv").eq(checkBoxDivNum-1);
        console.log("checkBoxDivTitleContent:" + checkBoxDivTitleContent);
        //如果有则删除，如果没有则不管
        if(_this.find("label").length > 0){
            //有
            _this.find("label").text(checkBoxDivTitleContent);
        }else{
            //没有
        }
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改搜索框按钮内容 changeSearchInputButtonContent
    $.fn.changeSearchInputButtonContent = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum,radioNo, checkBoxNo,searchInputButtonContent) {
        var _this=$(this).find(".formDivSearchDiv").eq(searchInputNum-1);
        console.log("searchInputButtonContent:" + searchInputButtonContent);
        //如果有则删除，如果没有则不管
        if(_this.find("button").length > 0){
            //有
            _this.find("button").text(searchInputButtonContent);
        }else{
            //没有
        }
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改搜索框Placeholder changeSearchInputPlaceholderContent
    $.fn.changeSearchInputPlaceholderContent = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum,radioNo, checkBoxNo,searchInputPlaceholderContent) {
        var _this=$(this).find(".formDivSearchDiv").eq(searchInputNum-1);
        console.log("searchInputPlaceholderContent:" + searchInputPlaceholderContent);
        //如果有则删除，如果没有则不管
        if(_this.find("input").length > 0){
            //有
            _this.find("input").attr("placeholder", searchInputPlaceholderContent);
        }else{
            //没有
        }
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改文本框Placeholder changeTextInputPlaceholderContent
    $.fn.changeTextInputPlaceholderContent = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum,radioNo, checkBoxNo,textInputPlaceholderContent) {
        var _this=$(this).find(".formDivTextDiv").eq(textInputNum-1);
        console.log("textInputPlaceholderContent:" + textInputPlaceholderContent);
        //如果有则删除，如果没有则不管
        if(_this.find("input").length > 0){
            //有
            _this.find("input").attr("placeholder", textInputPlaceholderContent);
        }else{
            //没有
        }
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改密码框Placeholder changePasswordInputPlaceholderContent
    $.fn.changePasswordInputPlaceholderContent = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo, passwordInputPlaceholderContent) {
        var _this=$(this).find(".formDivPasswordDiv").eq(passwordInputNum-1);
        console.log("passwordInputPlaceholderContent:" + passwordInputPlaceholderContent);
        //如果有则删除，如果没有则不管
        if(_this.find("input").length > 0){
            //有
            _this.find("input").attr("placeholder", passwordInputPlaceholderContent);
        }else{
            //没有
        }
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //单选项+1 addRadioInput
    $.fn.addRadioInput = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo) {
        var _this=$(this).find(".formDivRadioDiv").eq(RadioDivNum-1);
        _this.append(_this.children(':last')[0].outerHTML);
        var args = {
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //单选项-1 cutRadioInput
    $.fn.cutRadioInput = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo) {
        var _this=$(this).find(".formDivRadioDiv").eq(RadioDivNum-1);
        if(_this.find("input").length <= 1){
            alert('请至少保留一个input');
        }else {
            _this.children(':last').remove();
            var args = {
                searchInputNo:searchInputNum,
                textInputNo:textInputNum,
                passwordInputNo:passwordInputNum,
                radioDivNo:RadioDivNum,
                checkBoxDivNo:checkBoxDivNum,

                radioNo:radioNo,
                checkBoxNo:checkBoxNo
            };
            _this = $(this).parents('.selected').find(".content");
            sendMessage_funcpanelinit(_this, _this.getInitAttr(args));
        }
    };

    //复选项+1 addCheckBoxInput
    $.fn.addCheckBoxInput = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo) {
        var _this=$(this).find(".formDivCheckBoxDiv").eq(checkBoxDivNum-1);
        _this.append(_this.children(':last')[0].outerHTML);
        var args = {
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //复选项-1 cutCheckBoxInput
    $.fn.cutCheckBoxInput = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo) {
        var _this=$(this).find(".formDivCheckBoxDiv").eq(checkBoxDivNum-1);
        if(_this.find("input").length <= 1){
            alert('请至少保留一个input');
        }else {
            _this.children(':last').remove();
            var args = {
                searchInputNo:searchInputNum,
                textInputNo:textInputNum,
                passwordInputNo:passwordInputNum,
                radioDivNo:RadioDivNum,
                checkBoxDivNo:checkBoxDivNum,

                radioNo:radioNo,
                checkBoxNo:checkBoxNo
            };
            _this = $(this).parents('.selected').find(".content");
            sendMessage_funcpanelinit(_this, _this.getInitAttr(args));
        }
    };

    //修改选择的是第几个单选项 changeRadioItemNo
    $.fn.changeRadioItemNo = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo) {
        var _this=$(this);
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改选择的是第几个复选项 changeCheckBoxItemNo
    $.fn.changeCheckBoxItemNo = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo) {
        var _this=$(this);
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改搜索框的name changeSearchInputNameContent
    $.fn.changeSearchInputNameContent = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo, searchInputNameContent) {
        var _this=$(this).find(".formDivSearchDiv").eq(searchInputNum-1);
        _this.find("input").attr("name", searchInputNameContent);

        console.log('修改的name：' + searchInputNameContent);
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改文本框的name changeTextInputNameContent
    $.fn.changeTextInputNameContent = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo, textInputNameContent) {
        var _this=$(this).find(".formDivTextDiv").eq(textInputNum-1);
        _this.find("input").attr("name", textInputNameContent);

        console.log('修改的name：' + textInputNameContent);
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改密码框的name changePasswordInputNameContent
    $.fn.changePasswordInputNameContent = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo, passwordInputNameContent) {
        var _this=$(this).find(".formDivPasswordDiv").eq(passwordInputNum-1);
        _this.find("input").attr("name", passwordInputNameContent);

        console.log('修改的name：' + passwordInputNameContent);
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改单选集name changeRadioDivNameContent
    $.fn.changeRadioDivNameContent = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo, radioDivNameContent) {
        var _this=$(this).find(".formDivRadioDiv").eq(RadioDivNum-1);
        for(var i = 0; i < _this.find("input").length; i++){
            _this.find("input").eq(i).attr("name", radioDivNameContent);
        }
        console.log('修改的name：' + radioDivNameContent);
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改复选集name changeCheckBoxDivNameContent
    $.fn.changeCheckBoxDivNameContent = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo, checkBoxDivNameContent) {
        var _this=$(this).find(".formDivCheckBoxDiv").eq(checkBoxDivNum-1);
        for(var i = 0; i < _this.find("input").length; i++){
            _this.find("input").eq(i).attr("name", checkBoxDivNameContent);
        }
        console.log('修改的name：' + checkBoxDivNameContent);
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改单选项value changeRadioValue
    $.fn.changeRadioValue = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo, radioValue) {
        var _this=$(this).find(".formDivRadioDiv").eq(RadioDivNum-1).find("input").eq(radioNo - 1);
        _this.attr("value", radioValue);
        console.log('修改的name：' + radioValue);
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //修改复选项value changeCheckBoxValue
    $.fn.changeCheckBoxValue = function (searchInputNum, textInputNum, passwordInputNum, RadioDivNum, checkBoxDivNum, radioNo, checkBoxNo, checkBoxValue) {
        var _this=$(this).find(".formDivCheckBoxDiv").eq(checkBoxDivNum-1).find("input").eq(checkBoxNo - 1);
        _this.attr("value", checkBoxValue);
        console.log('修改的name：' + checkBoxValue);
        var args={
            searchInputNo:searchInputNum,
            textInputNo:textInputNum,
            passwordInputNo:passwordInputNum,
            radioDivNo:RadioDivNum,
            checkBoxDivNo:checkBoxDivNum,

            radioNo:radioNo,
            checkBoxNo:checkBoxNo
        };
        _this = $(this).parents('.selected').find(".content");
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };
})(jQuery);
