/**
 * Created by Administrator on 14-12-5.
 */


/**
 * Created by Administrator on 14-11-28.

 */
(function ($) {
    if ($.ssm) {
        $.ssm.addExtension(function ()  {
            function testbutton() {
              
				alert("aaa");


//                $navmenu.mousemove(function(){
//                    $(this).children("ul").show();
//
//                });
//                $navmenu.mouseout(function(){
//                    $(this).children("ul").hide();
//                });
                
				
           	}
            publicObj =
            {
                testbutton: testbutton
            }
            return publicObj;
        });
    }
})(Zepto)
