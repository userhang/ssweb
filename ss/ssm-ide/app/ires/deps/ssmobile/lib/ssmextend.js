/*
封装的js函数

*/
/*
//设置字体颜色

function color(id,color){
     document.getElementById(id).style.color=color;
}

//设置背景颜色

function backgroundColor(id,color){
     document.getElementById(id).style.backgroundColor=color;
}

//设置不可见
function  invisible(id){
document.getElementById(id).style.display= "none" ;

}

//设置可见
function  visible(id){
document.getElementById(id).style.display= "block" ;

}

//设置不可用
function disable(id)
{
document.getElementById(id).disabled=true;
}

//设置高宽度
function aspect(id,width,height)
{
document.getElementById(id).style.width=width;

document.getElementById(id).style.height=height;
}

//跳转链接
function urllocation(url)
{
 window.location.href="http://"+url; 
}
//设置div透明度
function alopacity(id,e)
{
var alpha = e; //透明度值变量 
var oDiv = document.getElementById(id); //获取DOM元素对象 
oDiv.style.filter = 'alpha(opacity:'+alpha+')'; //设置IE的透明度 
oDiv.style.opacity = alpha / 100; //设置fierfox等透明度，注意透明度值是小数 
}
//设置z-index
function zindex(id,e)
{
var oDiv = document.getElementById(id);
    oDiv.style.zIndex = e; 
}
//设置鼠标样式
function cursor(id,e)
{
document.getElementById(id).style.cursor=e; 
}
//像素滚动内容到指定位置
function scrollWindow(x,y){
	window.scrollTo(x,y);
}
//后退按钮
function goBack(){
	window.history.back()
}
//前进按钮
function goForward(){
	window.history.forward()
}
//打开新窗口
function openWin(){
	myWindow=window.open('','','width=200,height=100');
	myWindow.document.write("<p>这是新的窗口</p>");
}
//移动窗口
function moveWin(x,y){
	myWindow.moveBy(x,y);
	myWindow.focus();
}
//重置表单
function formReset(id){
	document.getElementById(id).reset();
}
//禁用下拉列表
function disableSelect(){
	document.getElementById("mySelect").disabled=true;
}

//恢复下拉列表
function enableSelect(){
	document.getElementById("mySelect").disabled=false;
}
//重新加载页面
 function reloadPage(){
  location.reload()
}
 //载入新文档替换当前页面
 function replaceDoc(url){
	window.location.replace("http://"+url);
}
//设置一段时间后弹窗
function wintime(text,time){
	setTimeout(function(){alert(text)},time);
}
//文本框内容逐个字的显示出来
function TeArray(id,text) { 

  var story = document.getElementById(id);
  
  var a = text;
  alert(a);
  var i = 0;
  timer=setInterval(function(){
   story.innerHTML=a.substring(0,i);
    i++;
    if(story.innerHTML==a){clearInterval(timer);};
  },500);

} 
//显示时间


function clock(id){
	var d=new Date();
	var t=d.toLocaleTimeString();
	document.getElementById(id).innerHTML=t;
}

//设置从顶部移动
function setTopEdge(id,max)
{
 var i = 0;
  timer=setInterval(function(){
  document.getElementById(id).style.top=i;
    i+=10;
    if(i==max){clearInterval(timer);};
  },100);

}
//验证表单是否为空
function validateForm(id){
var test = document.getElementById(id);
var inputs;
inputs=test.getElementsByTagName("input")[0];
//通过元素的属性获取值

var x=inputs.value;
if (x==null || x==""){
  alert("姓必须填写");
  return false;
  }
}

//验证邮件格式是否正确
function valiemailForm(id){
var test = document.getElementById(id);
var inputs;
inputs=test.getElementsByTagName("input")[0];
//通过元素的属性获取值
alert(inputs.value);
var x=inputs.value;
  var atpos=x.indexOf("@");
  var dotpos=x.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
    alert("不是一个有效的 e-mail 地址");
      return false;
  }
}

// JavaScript 值转换为 JSON 字符串
function TostringJSON(id)
{
 var test = document.getElementById(id);
var inputs;
inputs=test.getElementsByTagName("input")[0];
//通过元素的属性获取值

var x=inputs.value;
str_pretty1 = JSON.stringify(x);
alert(str_pretty1);

}

//为 JSON 字符串创建对象
function JSONtostring(id)
{
var test = document.getElementById(id);
var inputs;
inputs=test.getElementsByTagName("input")[0];
//通过元素的属性获取值

var x=inputs.value;
obj = JSON.parse(x);
alert(obj);

}

//JS实现点击Div闪烁效果
function  divvague(id)
{
  var oBox = document.getElementById(id);
 var timer = null;  
 oBox.onclick = function ()
 {   
 var i = 0; 
  clearInterval(timer);
  timer = setInterval(function () {
  oBox.style.display = i++ % 2 ? "none" : "block";
  i > 20 && (clearInterval(timer))
  }, 80)
 }

}

//JS实现点击文字闪烁效果
function  textvague(id,color1,color2)
{
  var flag = 0;
 var text = document.getElementById(id);
 if (!flag)
 {
 text.style.color = color1;
 text.style.background = color2;
 flag = 1;
 }else{
 text.style.color = "";
 text.style.background = "";
 flag = 0;
 }
 setTimeout("textvague()",500);

}

//文字变大
function chanTxt(id)

{
var n=12;
var obj = document.getElementById(id);
if(n <= 42)
{
obj.style.fontSize = n+"px";
}
n++;
}

//鼠标跟随效果
function mousetest(id)
{

 var oTop = document.getElementById(id);
 //document.getElementById("7A91D6E0-4616-465D-A510-90831BC8B4AD").style.position=absolute;
 oTop.style.position="absolute";
 document.onmousemove = function(evt){
  var oEvent = evt || window.event;
  var scrollleft = document.documentElement.scrollLeft || document.body.scrollLeft;
  var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
  oTop.style.left = oEvent.clientX + scrollleft +10 +"px";
  oTop.style.top = oEvent.clientY + scrolltop + 10 + "px";
 }
}
*/
//张航
function pagechange(toPage){
   $('body').find("div.CURRENT").removeClass("CURRENT");
        //这里用jQuery来替代$，就可以避免zepto的问题，jquery可以处理这里的问题find("#" + toPage)在zepto中会出错
        $('body').find("#" + toPage).addClass("CURRENT");
}


//changeicon

function changeiconstyle(id,style){
  
    if($("#" + id).find("div").length>0){
      $("#" + id).find("div").removeClass();
      $("#" + id).find("div").addClass(style);
    }
    else{
      $("#" + id).prepend("<div CLASS='"+style+"'></div>");;
      
     }
}

//陈


//罗联
//显示当前时间的插件
;(function($, window, document,undefined) {
    $.fn.showTime = function(dt,id) {
        this.each(function(){
            var elem = $(this);
            var demo=$.fn.showTime.sortable(dt);
            
            document.getElementById(id).innerHTML=demo;
            
        });
        return this;
    };
    
    $.fn.showTime.sortable = function(dt) {
        var year = dt.getFullYear();
        var month = dt.getMonth() + 1;     //js中的月份从0开始计算
        var day = dt.getDate();
        var hour = dt.getHours();
        var minute = dt.getMinutes();
        var second = dt.getSeconds();
        return time=year + "年/" + month + "月/" + day + "日" + hour + "时:" + minute + "分:" + second + "秒";
    };
})(Zepto, window, document);


//鼠标样式改变的插件
;(function($, window, document,undefined) {
  //定义Beautifier的构造函数
  var Beautifier = function(ele, opt) {
    this.$element = ele,
    this.defaults = {
      'color': 'gray',
      'fontSize': '12px',
      'textDecoration': 'none',
       'Cursor':'help'
    },
    this.options = $.extend({}, this.defaults, opt)
  }
  //定义Beautifier的方法
  Beautifier.prototype = {
    beautify: function() {
      return this.$element.css({
        'color': this.options.color,
        'fontSize': this.options.fontSize,
        'textDecoration': this.options.textDecoration,
        'cursor':this.options.Cursor
      });
    }
  }
  //在插件中使用Beautifier对象
  $.fn.cursor = function(options) {
    //创建Beautifier的实体
    var beautifier = new Beautifier(this, options);
    //调用其方法
    return beautifier.beautify();
  }
})(Zepto, window, document);


//显示邮箱格式的插件，其中验证了邮箱是否为空
;(function($, window, document,undefined) {
    $.fn.emailOne = function(id) {
        this.each(function(){
            var elem = $(this);
            var demo=$.fn.emailOne.inputText();
       
            document.getElementById(id).innerHTML=demo;   
        });
        return this;
    };
    
    $.fn.emailOne.inputText = function() {
       if($(".inputText input").val()=="")
            {
             alert("邮箱不能为空");
             $(".inputText input").focus();
            }
            var email=$(".inputText input").val();
            if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
            {
             alert("格式不正确！请重新输入");
             $(".inputText input").focus();
            }
            else{
              alert("格式正确");
             $(".inputText input").focus();
            } 
    };
})(Zepto, window, document);


//跳转链接
//郭
;(function($, window, document,undefined) {

var Beautifier2 = function(ele, opt) {
    this.$element = ele,
    this.defaults = {
    'web':'www.baidu.com'
    },
    this.options = $.extend({}, this.defaults, opt)
  }
  //定义Beautifier的方法
  Beautifier2.prototype = {
    beautify: function() {
      return window.location.href="http://"+this.options.web;
    }
  }
  //在插件中使用Beautifier对象
  $.fn.urllocation = function(options) {
    //创建Beautifier的实体
    var beautifier2= new Beautifier2(this, options);
    //调用其方法
    return beautifier2.beautify();
  
  }
})(Zepto, window, document);
//像素滚动到指定位置
;(function($, window, document,undefined) {

var Beautifier4= function(ele, opt) {
    this.$element = ele,
    this.defaults = {
    'x':'10',
    'y':'10'
    },
    this.options = $.extend({}, this.defaults, opt)
  }
  //定义Beautifier的方法
  Beautifier4.prototype = {
    beautify: function() {
      return window.scrollTo(this.options.x,this.options.y)
    }
  }
  //在插件中使用Beautifier对象
  $.fn.scrollWindow = function(options) {
    //创建Beautifier的实体
    var beautifier4= new Beautifier4(this, options);
    //调用其方法
    return beautifier4.beautify();
  
  }
})(Zepto, window, document);
//
;(function($, window, document,undefined) {
//javascript 值转换为JSON

var Beautifier5= function(ele, opt) {
    this.$element = ele,
    this.defaults = {
    'id' :'111'
    },
    this.options = $.extend({}, this.defaults, opt)
  }
  //定义Beautifier的方法
  Beautifier5.prototype = {
    beautify: function() {
  var test = document.getElementById(this.options.id);
      var inputs;
    inputs=test.getElementsByTagName("input")[0];
//通过元素的属性获取值

    var x=inputs.value;
    str_pretty1 = JSON.stringify(x);
    alert(str_pretty1);

      return alert(str_pretty1);
    }
  }
  //在插件中使用Beautifier对象
  $.fn.TostringJSON = function(options) {
    //创建Beautifier的实体
    var beautifier5= new Beautifier5(this, options);
    //调用其方法
    return beautifier5.beautify();
  
  }
})(Zepto, window, document);
//为JSON字符串创建对象
;(function($, window, document,undefined) {

var Beautifier6= function(ele, opt) {
    this.$element = ele,
    this.defaults = {
    'id' :'111'
    },
    this.options = $.extend({}, this.defaults, opt)
  }
  //定义Beautifier的方法
  Beautifier6.prototype = {
    beautify: function() {
  var test = document.getElementById(this.options.id);
var inputs;
inputs=test.getElementsByTagName("input")[0];
//通过元素的属性获取值

var x=inputs.value;
obj = JSON.parse(x);


      return alert(obj);
    }
  }
  //在插件中使用Beautifier对象
  $.fn.TostringJSON = function(options) {
    //创建Beautifier的实体
    var beautifier6= new Beautifier6(this, options);
    //调用其方法
    return beautifier6.beautify();
  
  }
})(Zepto, window, document);


//王
//改变字体颜色 背景颜色 字体大小
;(function($, window, document,undefined) {
    //定义Beautifier的构造函数
    var Beautifier = function(ele, opt) {
        this.$element = ele,
            this.defaults = {
                'color': '#000000',
                'fontSize': '12px',
                'backgroundColor':'#dddddd',
              'Cursor':'help'
            },
            this.options = $.extend({}, this.defaults, opt)
    }
    //定义Beautifier的方法
    Beautifier.prototype = {
        beautify: function() {
            return this.$element.css({
                'color': this.options.color,
                'fontSize': this.options.fontSize,
                'backgroundColor':this.options.backgroundColor,
          'cursor':this.options.Cursor
            });
        }
    }
    //在插件中使用Beautifier对象
    $.fn.cssVague = function(options) {
    //创建Beautifier的实体
        var beautifier = new Beautifier(this, options);
    //调用其方法
        return beautifier.beautify();
    }
})(Zepto, window, document);

//设置一段时间后弹窗
;(function($) {
    $.fn.typewriter = function() {
        var $ele = $(this), str = $ele.html(), index = 0;
        $ele.html('');
        var timer = setInterval(function() {
            var current = str.substr(index, 1);
            if (current == '<') {
                index = str.indexOf('>', index) + 1;
            } else {
                index++;
            }
            $ele.html(str.substring(0, index) + (index & 1 ? '_' : ''));
            if (index >= str.length) {
                clearInterval(timer);
            }
        }, 75);
    };
})(Zepto);

//文本框内容逐字显示
;(function($) {
    $.fn.wintime = function(element,option) {
        var $ele = element;
        var timer = setTimeout(function() {
            alert($ele);
        }, option);
    };
})(Zepto);


//兰
//封装的js函数
//定义Beautifier的构造函数
//*************************************************
;(function($, window, document,undefined) {
  var Beautifier = function(ele, opt) {
    this.$element = ele,
    this.defaults = {
      'color': 'red',
      'fontSize': '12px',
      'textDecoration': 'none'
    },
    this.options = $.extend({}, this.defaults, opt)
  }
  //定义Beautifier的方法
  Beautifier.prototype = {
    beautify: function() {
      return this.$element.css({
        'color': this.options.color,
        'fontSize': this.options.fontSize,
        'textDecoration': this.options.textDecoration
      });
    }
  }
  //在插件中使用Beautifier对象
  $.fn.myPlugin = function(options) {
    //创建Beautifier的实体
    var beautifier = new Beautifier(this, options);
    //调用其方法
    return beautifier.beautify();
  }
 //改变背景颜色
  var MybackgroundColor=function(id,opt){
    this.$element=id,
    this.defaults={
      'background-color': 'white'
    },
    this.options=$.extend({},this.defaults,opt)
  }
  MybackgroundColor.prototype={
    change:function(){
      return this.$element.css({
        'background-color':this.options.backgroundColor
      })
    }
  }
$.fn.mybackgroundColor=function(options){
      var mybackgroundColor=new MybackgroundColor(this,options);
      return mybackgroundColor.change();
    }
//改变指定元素字体的颜色
  var Changecolor=function(ele,opt){
    this.$element=ele,
    this.defaults={
      'color': 'red'
    }
    this.options=$.extend({},this.defaults,opt);
  }
  Changecolor.prototype={
    change:function(){
      return this.$element.css({
        'color': this.options.color
      })
    }
  }
  $.fn.changecolor=function(id,option){
    var changecolor=new Changecolor(id,option);
    return changecolor.change();
  }
  //让该元素none掉
    var Myinvisible=function(id){
    this.$element=id;
  }
  Myinvisible.prototype={
    change:function(){
      return this.$element.css('display','none');
    }
  }
$.fn.myinvisible=function(){
      var myinvisible=new Myinvisible(this);
      return myinvisible.change();
    }
    //让制定元素显示block
    var Myvisble=function(id){
  this.$element=id;
}
Myvisble.prototype={
  change:function(){
    return this.$element.css('display','block');
  }
}
$.fn.myvisble=function(id){
    var myvisble=new Myvisble(id);
    return myvisble.change();
  }
  //让制定元素不可用
  var Mydisble=function(id){
  this.$element=id;
}
Mydisble.prototype={
  change:function(){
    return this.$element.css('disabled','ture');
  }
}
$.fn.mydisble=function(id){
    var mydisble=new Mydisble(id);
    return mydisble.change();
  }
  //设置元素高宽
  var Myaspect=function(id,opt){
  this.$element=id;
  this.defaults={
    'width':'100px',
    'height':'50px'
  },
  this.options=$.extend({},this.defaults,opt);
}
Myaspect.prototype={
  change:function(){
    return this.$element.css({
      'width':this.options.width,
      'height':this.options.height
    })
  }
}
$.fn.myaspect=function(id,opt){
  var myaspect=new Myaspect(id,opt);
  return myaspect.change();
}
//点击超链接
var Myurllcation=function(id,url){
  this.$element=id;
  this.$url=url;
}
Myurllcation.prototype={
  change:function(){
    return  window.location.href="http://"+this.$url;
  }
}
$.fn.myurllcation=function(url){
  var myurllcation=new Myurllcation(this,url);
  return myurllcation.change();
}
var Myalopacity=function(id,e){
  this.$element=id;
  this.$o=e;
}
Myalopacity.prototype={
  change:function(){
    return this.$element.css('opacity',this.$o);
  }
}
$.fn.myalopacity=function(e){
  var myalopacity=new Myalopacity(this,e);
  return myalopacity.change();
}
var Myzindex=function(id,e){
  this.$element=id;
  this.$o=e;
}
Myzindex.prototype={
  change:function(){
    return this.$element.css('zIndex',this.$o);
  }
}
$.fn.myzindex=function(e){
  var myzindex=new Myzindex(this,e);
  return myzindex.change();
}
var Mycursor=function(id,e){
  this.$element=id;
  this.$o=e;
}
Mycursor.prototype={
  change:function(){
    return this.$element.css('cursor',this.$o);
  }
}
$.fn.mycursor=function(e){
  var mycursor=new Mycursor(this,e);
  return mycursor.change();
}
var MyscrollWindow=function(x,y){
  this.$x=x;
  this.$y=y;
}
MyscrollWindow.prototype={
  change:function(){
    return window.scrollTo(this.$x,this.$y);
  }
}
$.fn.myscrollWindow=function(x,y){
  var myscrollWindow=new MyscrollWindow(x,y);
  return myscrollWindow.change();
}
var MygoBack=function(){
}
MygoBack.prototype={
  change:function(){
    return window.history.back();
  }
}
$.fn.mygoBack=function(){
  var mygoBack=new MygoBack();
  return mygoBack.change();
}
var MyForward=function(){
}
MyForward.prototype={
  change:function(){
    return window.history.forward();
  }
}
$.fn.myForward=function(){
  var myForward=new MyForward();
  return myForward.change();
}
var MyopenWin=function(){
  myWindow=window.open('','','width=200,height=100');
}
MyopenWin.prototype={
  change:function(){
    return myWindow.document.write("<p>这是新的窗口</p>");
  }
}
$.fn.myopenWin=function(){
  var myopenWin=new MyopenWin();
  return myopenWin.change();
}
//移动窗口
var MymoveWin=function(x,y){
  this.$x=x;
  this.$y=y;
}
MymoveWin.prototype={
  change:function(){
    myWindow.moveBy(this.$x,this.$y);
    return myWindow.focus();
  }
}
$.fn.mymoveWin=function(x,y){
  var mymoveWin=new MymoveWin(x,y);
  return mymoveWin.change();
}
//*********************
var MyformReset=function(id){
  this.$element=id;
}
MyformReset.prototype={
  change:function(){
    return this.$element.reset();
  }
}
$.fn.myformReset=function(id){
    var myformReset=new MyformReset(id);
    return myformReset.change();
  }
  var MydisableSelect=function(){
}
MydisableSelect.prototype={
  change:function(){
    return $('#mySelect').css('disable','false');
  }
}
$.fn.mydisableSelect=function(){
    var mydisableSelect=new MydisableSelect();
    return mydisableSelect.change();
  }
  var MyenableSelect=function(){
}
MyenableSelect.prototype={
  change:function(){
    return $('#mySelect').css('disable','ture');
  }
}
$.fn.myenableSelect=function(){
    var myenableSelect=new MyenableSelect();
    return myenableSelect.change();
  }
  var MyreplaceDoc=function(url){
    this.$url=url;
}
MyreplaceDoc.prototype={
  change:function(){
    return window.location.replace("http://"+this.$url);
  }
}
$.fn.myreplaceDoc=function(url){
    var myreplaceDoc=new MyreplaceDoc(url);
    return myreplaceDoc.change();
  }
  //表单内容一个一个显示出来@@@@@@@@@@@@@@@@@@@@@@有错
  var MyTeArray=function(id){
  this.$element=id;
  }
MyTeArray.prototype={
  change:function(){
    alert(this);
    this.$a=this.$element.getElementsByTagName("input");
    this.$text=this.$a.value;
    alert(this.$text);
    var i = 0;
    timer=setInterval(function(){
    story.innerHTML=this.$text.substring(0,i);
    i++;
    if(story.innerHTML==this.$text){clearInterval(timer);};
  },500);
  }
}
$.fn.myTeArray=function(id){
  var myTeArray=new MyTeArray(id);
  return myTeArray.change();
}
//检验表单是否为空@@@@@@@@@@@@@@@@@@@@有错
var MyvalidateForm=function(id){
  this.$element=id;
}
MyvalidateForm.prototype={
  change:function(){
    var inputs;
    inputs=this.$element.getElementsByTagName("input")[0];
    //通过元素的属性获取值

    var x=inputs.value;
    if (x==null || x==""){
    alert("姓必须填写");
   return false;
   }
   }
}
$.fn.myvalidateForm=function(id){
  var myvalidateForm=new MyvalidateForm(id);
  return myvalidateForm.change();
}
})(Zepto, window, document);