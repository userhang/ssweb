/**
 * Created by Administrator on 14-12-5.
 */


/**
 * Created by Administrator on 14-11-28.

 */
(function ($) {
    if ($.ssm) {
        $.ssm.addExtension(function ()  {
            function demobutton() {
               var $twomenu = $(".twonav");
                var $navmenu = $(".navmenu");
                $twomenu.each(function(){
                    var $ul = $(this).children(".box");
                    var $li = $ul.children();
                    var length = $li.length;
                    var liwidth =1/ length;
                    var liW = (liwidth * 100) + "%";
                    $li.css("width",liW );
                });

                $navmenu.on("onclick",function(){

                    $(this).children("ul").toggle();

                    
                });
                $navmenu.on("tap",function(){

                    $(this).children("ul").toggle();
                });

            }
               
            publicObj =
            {
                demobutton: demobutton
            }
            return publicObj;
        });
    }
})(Zepto)
