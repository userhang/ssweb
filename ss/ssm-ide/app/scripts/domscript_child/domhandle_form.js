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
    //	获取子项个数
    $.fn.getFormItemCount = function () {
        var childCount=$(this).find("input").length;
        if($(this).find("form").length<1){
            $(this).append("<form></form>");
        }
        return childCount;
    }

//	获取当前元素是否为圆角
    $.fn.getFormTitle = function () {
        var _this=$(this).find("p").first();

        //$(this).wrap("<form></form>");
        return _this.text();
    }

    //	获取当前列表项内容
    $.fn.getFormItemContent = function (formItemNo) {
        var _this=$(this).find("form").children("label").eq(formItemNo-1),
            res='';
            res = _this.text();
        return res;
    }

    //	获取当前列表项内容
    $.fn.getFormItemValue = function (formItemNo) {
        var _this=$(this).find("form").children("input").eq(formItemNo-1),
            res='';
        res = _this.val();
        return res;
    }

    //	获取当前列表项内容
    $.fn.getFormItemName = function (formItemNo) {
        var _this=$(this).find("form").children("input").eq(formItemNo-1),
            res='';
        res = _this.attr("name");
        return res;
    }
    /****************************************/
    /* 各种操作函数
     /****************************************/
    //	列表项个数+1
    $.fn.addsubmit = function (formItemNo) {
        if(formItemNo==0){
            $(this).find("form").append("<input type='submit'/>");
        }else{
            $(this).find("form").children("input").eq(formItemNo-1).after("<input type='submit'/>");
        }
        sendMessage_funcpanelinit($(this));
    }
    //	列表项个数+1
    $.fn.addradio = function (formItemNo) {
        if(formItemNo==0){
            $(this).find("form").append("<label>单选钮说明</label><input type='radio'/>");
        }else{
            $(this).find("form").children("input").eq(formItemNo-1).after("<label>单选钮说明</label><input type='radio'/>");
        }
        sendMessage_funcpanelinit($(this));
    }
    //	列表项个数+1
    $.fn.addcheckbox = function (formItemNo) {
        if(formItemNo==0){
            $(this).find("form").append("<label>多选钮说明</label><input type='checkbox'/>");
        }else{
            $(this).find("form").children("input").eq(formItemNo-1).after("<label>多选钮说明</label><input type='checkbox'/>");
        }
        sendMessage_funcpanelinit($(this));
    }
    //	列表项个数+1
    $.fn.addtext = function (formItemNo) {
        if(formItemNo==0){
            $(this).find("form").append("<label>文本框说明</label><input type='text'/>");
        }else{
            $(this).find("form").children("input").eq(formItemNo-1).after("<label>文本框说明</label><input type='text'/>");
        }
        sendMessage_funcpanelinit($(this));
    }
    //	列表项个数+1
    $.fn.addtextarea = function (formItemNo) {
        if(formItemNo==0){
            $(this).find("form").append("<label>文本域说明</label><input type='textarea'/>");
        }else{
            $(this).find("form").children("input").eq(formItemNo-1).after("<label>文本域说明</label><input type='textarea'/>");
        }
        sendMessage_funcpanelinit($(this));
    }
    //	列表项个数+1
    $.fn.addpassword = function (formItemNo) {
        if(formItemNo==0){
            $(this).find("form").append("<label>密码框说明</label><input type='password'/>");
        }else{
            $(this).find("form").children("input").eq(formItemNo-1).after("<label>密码框说明</label><input type='password'/>");
        }
        sendMessage_funcpanelinit($(this));
    }
    //	列表项个数+1
    $.fn.addbr = function (formItemNo) {
        if(formItemNo==0){
            $(this).find("form").append("<br>");
        }else{
            $(this).find("form").children("input").eq(formItemNo-1).after("<br>");
        }
        sendMessage_funcpanelinit($(this));
    }
    $.fn.cutformitem = function (formItemNo) {
        if(formItemNo==0){
            alert("请选中一项组件删除");
        }else{
            if($(this).find("form").children("input").eq(formItemNo-1).attr("type")=='submit'){
                $(this).find("form").children("input").eq(formItemNo-1).remove();
            }else{
                $(this).find("form").children("input").eq(formItemNo-1).remove();
                $(this).find("form").children("label").eq(formItemNo-1).remove();
            }
        }
        sendMessage_funcpanelinit($(this));
    }
    //	改变选的是第几项列表项时
    $.fn.changeFormItemNo = function (formItemNo) {
        var _this=$(this);
        var args={
            formItemNo:formItemNo
        }
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    }
//	改变标题内容
    $.fn.changeFormTitle = function (formTitle) {
        var _this=$(this).find("p").first();
        _this.text(formTitle);
        var args={
            formTitle:formTitle
        }
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    }
    //	改变列表项内容
    $.fn.changeFormItemContent = function (formItemNo,formItemContent) {
        var _this=$(this).find("form").children("label").eq(formItemNo-1),
            content=formItemContent,
            small='';
        _this.text(content);
        var args={
            formItemNo:formItemNo
        }
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    }
    //	改变列表项内容
    $.fn.changeFormItemValue = function (formItemNo,formItemValue) {
        var _this=$(this).find("form").children("input").eq(formItemNo-1),
            content=formItemValue,
            small='';
        _this.val(content);
        var args={
            formItemNo:formItemNo
        }
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    }
    //	改变列表项内容
    $.fn.changeFormItemName = function (formItemNo,formItemName) {
        var _this=$(this).find("form").children("input").eq(formItemNo-1),
            content=formItemName,
            small='';
        _this.attr("name",formItemName);
        var args={
            formItemNo:formItemNo
        }
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    }
})(jQuery);