 function copytext(e)
  {
  
 var Url2=document.getElementById(e);
 Url2.select(); // 选择对象
 document.execCommand("Copy"); // 执行浏览器复制命令
 alert("已复制好，可贴粘。");
 }