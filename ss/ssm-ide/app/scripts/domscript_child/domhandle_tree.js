/**
 * Created by Jane Maple on 14-5-24.
 */
/**
 * Created by Jane Maple on 14-5-17.
 */
/**
 * Created by Jane Maple on 14-5-9.
 */
/***********************************************
 * 描述：标签布局（tabview）各种操作封装
 ***********************************************/
(function ($) {
    /****************************************/
    /* 各种属性get函数
     /****************************************/
    //获取树（集合）的个数
    $.fn.getTreeCount = function () {

        var child=$(this);
        var childCount=child.find(".treetitle").length;
        return childCount;
    };

    //获取子树（元素）个数
    $.fn.getTreeItemCount = function () {

        var child=$(this);
        var childCount=child.find(".treeitem").length;
        return childCount;
    };

    //获取当前树（集合）标题内容
    $.fn.getTreeTitleContent = function (treeNo) {
        var _this=$(this).find(".treetitle"),
            res='';
        if(treeNo){
            res=_this.eq(treeNo).text();

        }else{
            res = _this.eq(0).text();
        }
        return res;
    };

    //获取当前列表项（元素）内容
    $.fn.getTreeItemContent = function (treeItemNo) {
        var _this=$(this).find(".treeitem"),
            res='';
        if(treeItemNo){
            res=_this.eq(treeItemNo).text();
        }else{
            res = _this.eq(0).text();
        }
        return res;
    };

    /****************************************/
    /* 各种操作函数
     /****************************************/
    //树个数+1
    $.fn.addtree = function (treeNo) {
        var _this=$(this);
        console.log(treeNo+"WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
        _this.parent().find("ul").eq(treeNo-1).append("<ul CLASS='TREE OPENNING'><li CLASS='treetitle'>标题</li><li CLASS='treeitem sortable container'>新内容</li></ul>");
        var args={
            treeNo:treeNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //树个数-1
    $.fn.cuttree = function (treeNo) {
        var _this=$(this).parent().find("ul").eq(treeNo-1);
        if(treeNo==1){
            alert("请直接点击组件右上角叉号删除本组件");
        }else{
            _this.remove();
        }
        var args={
            treeNo:treeNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //列表项（元素）个数+1
    $.fn.addtreeli = function (treeNo) {
        var _this=$(this);
        _this.parent().find("ul").eq(treeNo-1).append('<li CLASS="treeitem sortable container">新内容</li>');
        var args={
            treeNo:treeNo
        };
        sendMessage_funcpanelinit(_this, _this.getInitAttr(args));
    };

    //列表项（元素）个数-1
    $.fn.cuttreeli = function (treeItemNo) {
        var _this=$(this);
        _this.find(".treeitem").eq(treeItemNo-1).remove();
        var args={
            treeNo:treeNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变选的是第几个树
    $.fn.changeTreeNo = function (treeNo) {
        var _this=$(this);
        var args={
            treeNo:treeNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变选的是第几个子树（元素）时
    $.fn.changeTreeItemNo = function (treeItemNo) {
        var _this=$(this);
        var args={
            treeItemNo:treeItemNo
        };
        sendMessage_funcpanelinit(_this,_this.getInitAttr(args));
    };

    //改变树（集合）标题内容
    $.fn.changeTreeTitleContent = function (treeNo,treeTitleContent) {
        var _this=$(this),
            content=treeTitleContent,
            small='';
        _this.find(".treetitle").eq(treeNo-1).text(content);
        var args={
            treeNo:treeNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };

    //改变列表项（元素）内容
    $.fn.changeTreeItemContent = function (treeItemNo,treeItemContent) {

        var _this=$(this),
            content=treeItemContent,
            small='';
        _this.find(".treeitem").eq(treeItemNo-1).text(content);
        var args={
            treeItemNo:treeItemNo
        };
        sendMessage_funcpanelinit($(this),$(this).getInitAttr(args));
    };
})(jQuery);
