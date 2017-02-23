ssMobile = function (options)
{
	// 初始化变量
	var $body,
		$head = $('head'),
		history = [],
		newPageCount = 0,
		ssMSettings = {},
		$currentPage = '',
		orientation = 'PORTRAIT',
		touchSelectors = [],
		publicObj = {},
		tapBuffer = 100, // High click delay = ~350, quickest animation (slide) = 250
		extensions = ssMobile.prototype.extensions,
		animations = [],
		hairExtensions = '',
		defaults =
		{
			funpanel_show:        false,
			backSelector:         '.BACK, .CANCEL, .GOBACK',
			cacheGetRequests:     true,
			debug:                true,
			defaultAnimation:     'SLIDELEFT',
			fixedViewport:        true,
			formSelector:         'form',
			fullScreen:           true,
			fullScreenClass:      'FULLSCREEN',
			icon:                 null,
			icon4:                null, // available in iOS 4.2 and later.
			preloadImages:        false,
			startupScreen:        null,
			statusBar:            'DEFAULT', // other options: black-translucent, black
			submitSelector:       '.SUBMIT',
			touchSelector:        'a, .TOUCH',
			trackScrollPositions: true,
			useAnimations:        true,
			useFastTouch:         true,
//			useTouchScroll:       true,
			animations:           [ // highest to lowest priority
				{name: 'CUBELEFT', selector: '.CUBELEFT, .CUBE', is3d: true},
				{name: 'CUBERIGHT', selector: '.CUBERIGHT', is3d: true},
				{name: 'FADE', selector: '.FADE'},
				{name: 'FLIPLEFT', selector: '.FLIPLEFT, .FLIP', is3d: true},
				{name: 'FLIPRIGHT', selector: '.FLIPRIGHT', is3d: true},
				{name: 'POP', selector: '.POP', is3d: true},
				{name: 'SWAPLEFT', selector: '.SWAP', is3d: true},
				{name: 'SLIDEDOWN', selector: '.SLIDEDOWN'},
				{name: 'SLIDERIGHT', selector: '.SLIDERIGHT'},
				{name: 'SLIDEUP', selector: '.SLIDEUP'},
				{name: 'SWITCH', selector: '.SWITCH', is3d: true},
				{name: 'ROTATE', selector: '.ROTATE'},
				{name: 'SLIDELEFT', selector: '.SLIDELEFT, .SLIDE, #ssm > * > ul li a'}
			]
		}; // end defaults
	function warnprint(message)
	{
		if (window.console !== undefined && ssMSettings.debug === true)
			console.warn(message);
	}

	function logprint(message)
	{
		if (window.console != undefined && ssMSettings.debug === true)
			console.log(message);
	}

//	animations数组添加动画信息
    /**
     * animations数组添加动画信息
     * @param animation 动画信息
     */
	function addAnimation(animation)
	{
		if (typeof(animation.selector) === 'string' && typeof(animation.name) === 'string')
			animations.push(animation);
	}

//	记录页面访问
	function addPageToHistory(page, animation)
	{
		history.unshift({
			                page:      page,
			                animation: animation,
			                hash:      '#' + page.attr('id'),
			                id:        page.attr('id')
		                });
	}

	//body标签的点击事件
	//阻止内部链接的默认动作，对于不支持触摸的浏览器触发tap事件
	function clickHandler(e)    //e：MouseEvent
	{

		// Figure out whether to prevent default -查看是否需要阻止默认事件
		var $el = $(e.target);//点中的元素
		// Find the nearest tappable ancestor
		if (!$el.is(touchSelectors.join(', ')))//touchSelectors在ssRun中赋的值
			$el = $(e.target).closest(touchSelectors.join(', '));//如果点击元素本身不属于touchSelectors范围，则寻找最小包含此元素的元素
		// Prevent default if we found an internal link (relative or absolute)-如果不存在外部链接则阻止默认动作
		if ($el && $el.attr('href') && !$el.isExternalLink())
			e.preventDefault();
		// Trigger a tap event if touchstart is not on the job -如果浏览器不支持触摸则触发tap事件
		if (!$.support.touch)
			$(e.target).trigger('tap', e);
	}

	function doNavigation(fromPage, toPage, animation, goingBack)
	{
		goingBack = goingBack ? goingBack : false;
		// Error check for target page
		if (toPage === undefined || toPage.length === 0)
		{
			$.fn.unselect();
			return false;
		}
		// Error check for fromPage===toPage
		if (toPage.hasClass('CURRENT'))
		{
			$.fn.unselect();
			return false;
		}
		// Collapse the keyboard
		$(':focus').trigger('blur');
		fromPage.trigger('pageAnimationStart', { direction: 'out', back: goingBack });
		toPage.trigger('pageAnimationStart', { direction: 'in', back: goingBack });
		if ($.support.animationEvents && animation && ssMSettings.useAnimations)
		{
			// Fail over to 2d animation if need be
			if (!$.support.transform3d && animation.is3d)
			{
				animation.name = ssMSettings.defaultAnimation;
			}
			// Reverse animation if need be
			var finalAnimationName = animation.name,
				is3d = animation.is3d ? 'ANIMATING3D' : '';
			if (goingBack)
			{
				finalAnimationName = finalAnimationName.replace(/LEFT|RIGHT|UP|DOWN|IN|OUT/, reverseAnimation);
			}
			// Bind internal "cleanup" callback
			fromPage.bind('webkitAnimationEnd', navigationEndHandler);
			// Trigger animations
			$body.addClass('ANIMATING ' + is3d);
			var lastScroll = window.pageYOffset;
			// Position the incoming page so toolbar is at top of viewport regardless of scroll position on from page
			if (ssMSettings.trackScrollPositions === true)
			{
				toPage.css('top', window.pageYOffset - (toPage.data('lastScroll') || 0));
			}
			toPage.addClass(finalAnimationName + ' IN CURRENT');
			fromPage.addClass(finalAnimationName + ' OUT');
			if (ssMSettings.trackScrollPositions === true)
			{
				fromPage.data('lastScroll', lastScroll);
				$('.SCROLL', fromPage).each(function ()
				                            {
					                            $(this).data('lastScroll', this.scrollTop);
				                            });
			}
		}
		else {
			toPage.addClass('CURRENT IN');
			navigationEndHandler();
		}
		// Private navigationEnd callback
		function navigationEndHandler(event)
		{
			var bufferTime = tapBuffer;
			if ($.support.animationEvents && animation && ssMSettings.useAnimations)
			{
				fromPage.unbind('webkitAnimationEnd', navigationEndHandler);
				fromPage.removeClass('CURRENT ' + finalAnimationName + ' OUT');
				toPage.removeClass(finalAnimationName);
				$body.removeClass('ANIMATING ANIMATING3D');
				if (ssMSettings.trackScrollPositions === true)
				{
					toPage.css('top', -toPage.data('lastScroll'));
					// Have to make sure the scroll/style resets
					// are outside the flow of this function.
					setTimeout(function ()
					           {
						           toPage.css('top', 0);
						           window.scroll(0, toPage.data('lastScroll'));
						           $('.SCROLL', toPage).each(function () {
							           this.scrollTop = -$(this).data('lastScroll');
						           });
					           }, 0);
				}
			}
			else {
				fromPage.removeClass(finalAnimationName + ' OUT CURRENT');
				bufferTime += 260;
			}
			// In class is intentionally delayed, as it is our ghost click hack
			setTimeout(function ()
			           {
				           toPage.removeClass('IN');
			           }, bufferTime);
			// Housekeeping
			$currentPage = toPage;
			if (goingBack)
			{
				history.shift();
			}
			else {
				addPageToHistory($currentPage, animation);
			}
			fromPage.unselect();
			setHash($currentPage.attr('id'));
			// Trigger custom events
			toPage.trigger('pageAnimationEnd', { direction: 'in', animation: animation});
			fromPage.trigger('pageAnimationEnd', { direction: 'out', animation: animation});
		}

		return true;
	}

    /**
     * 翻页动画
     * @param animation
     * @returns {*}
     */
	function reverseAnimation(animation)
	{
		var opposites = {
			'UP':    'DOWN',
			'DOWN':  'UP',
			'LEFT':  'RIGHT',
			'RIGHT': 'LEFT',
			'IN':    'OUT',
			'OUT':   'IN'
		};
		return opposites[animation] || animation;
	}

	function getOrientation()
	{
		return orientation;
	}

	function goBack()
	{

		// Error checking
		if (history.length < 1)
		{
		}
		if (history.length === 1)
		{
			window.history.go(-1);
		}
		var from = history[0],
			to = history[1];
		if (doNavigation(from.page, to.page, from.animation, true))
		{
			return publicObj;
		}
		else {
			return false;
		}
	}

	function goTo(toPage, animation)
	{
		var fromPage = history[0].page;
		if (typeof animation === 'string')
		{
			for (var i = 0, max = animations.length; i < max; i++)
			{
				if (animations[i].name === animation)
				{
					animation = animations[i];
					break;
				}
			}
		}
		if (typeof toPage === 'string')
		{
			var nextPage = $(toPage);
			if (nextPage.length < 1)
			{
				showPageByHref(toPage, {
					animation: animation
				});
				return;
			}
			else {
				toPage = nextPage;
			}
		}
		if (doNavigation(fromPage, toPage, animation))
		{
			return publicObj;
		}
		else {
			return false;
		}
	}

	function hashChangeHandler(e)
	{
		if (location.hash === history[0].hash)
		{
			return true;
		}
		else if (location.hash === '')
		{
			goBack();
			return true;
		}
		else {
			if ((history[1] && location.hash === history[1].hash))
			{
				goBack();
				return true;
			}
			else {
				// Lastly, just try going to the ID...
				goTo($(location.hash), ssMSettings.defaultAnimation);
			}
		}
	}

	function init(options)
	{
		ssMSettings = $.extend({}, defaults, options);
		// 图像预先载入
		if (ssMSettings.preloadImages)
		{
			for (var i = ssMSettings.preloadImages.length - 1; i >= 0; i--)
			{
				(new Image()).src = ssMSettings.preloadImages[i];
			}
		}
		// 图标设置
		if (ssMSettings.icon)
			hairExtensions += '<link rel="apple-touch-icon' + '" href="' + ssMSettings.icon + '" />';
		if (ssMSettings.icon4)
			hairExtensions += '<link rel="apple-touch-icon' + '" sizes="114x114" href="' + ssMSettings.icon4 + '" />';
		//启动屏图像
		if (ssMSettings.startupScreen)
			hairExtensions += '<link rel="apple-touch-startup-image" href="' + ssMSettings.startupScreen + '" />';
		//viewport
		if (ssMSettings.fixedViewport)
			hairExtensions += '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>';
		// 全屏设置
		if (ssMSettings.fullScreen)
		{
			hairExtensions += '<meta name="apple-mobile-web-app-capable" content="yes" />';
			if (ssMSettings.statusBar)
				hairExtensions += '<meta name="apple-mobile-web-app-status-bar-style" content="' + ssMSettings.statusBar + '" />';
		}
		// 添加到head
		if (hairExtensions)
			$head.prepend(hairExtensions);
	}

	//寻找该页面的动画
	function getAnimation(el)
	{
		var animation;
		for (var i = 0, max = animations.length; i < max; i++) {
			if (el.is(animations[i].selector)) {
				animation = animations[i];
				break;
			}
		}
		if (!animation)
			animation = ssMSettings.defaultAnimation;
		return animation;
	}

	function insertPages(nodes, animation)
	{
		var targetPage = null;
		// Call dom.createElement element directly instead of relying on $(nodes),
		// to work around: https://github.com/madrobby/zepto/issues/312
		var div = document.createElement('div');
		div.innerHTML = nodes;
		$(div).children().each(function (index, node)
		                       {
			                       var $node = $(this);
			                       if (!$node.attr('id'))
				                       $node.attr('id', 'page-' + (++newPageCount));
			                       // Remove any existing instance
			                       $('#' + $node.attr('id')).remove();
			                       $body.append($node);
			                       $body.trigger('pageInserted', {page: $node});
			                       if ($node.hasClass('CURRENT') || !targetPage)
			                       {
				                       targetPage = $node;
			                       }
		                       });
		if (targetPage !== null)
		{
			goTo(targetPage, animation);
			return targetPage;
		}
		else {
			return false;
		}
	}

	//body的横竖屏幕切换事件
	//重新设置屏幕高度，触发turn事件
	function orientationChangeHandler()
	{
		$body.css('minHeight', 1000);
		scrollTo(0, 0);
		var bodyHeight = window.innerHeight;
		$body.css('minHeight', bodyHeight);
		orientation = Math.abs(window.orientation) == 90 ? 'LANDSCAPE' : 'PORTRAIT';
		$body.removeClass('PORTRAIT LANDSCAPE').addClass(orientation).trigger('turn', {orientation: orientation});
	}

	function setHash(hash)
	{
		// Sanitize
		location.hash = '#' + hash.replace(/^#/, '');
	}

	function showPageByHref(href, options)
	{
		var defaults =
		{
			data:      null,
			method:    'GET',
			animation: null,
			callback:  null,
			$referrer: null
		};
		var settings = $.extend({}, defaults, options);
		if (href != '#')
		{
			$.ajax({
				       url:     href,
				       data:    settings.data,
				       type:    settings.method,
				       success: function (data)
				       {
					       var firstPage = insertPages(data, settings.animation);
					       if (firstPage)
					       {
						       if (settings.method == 'GET' && ssMSettings.cacheGetRequests === true && settings.$referrer)
						       {
							       settings.$referrer.attr('href', '#' + firstPage.attr('id'));
						       }
						       if (settings.callback) {
							       settings.callback(true);
						       }
					       }
				       },
				       error:   function (data)
				       {
					       if (settings.$referrer)
					       {
						       settings.$referrer.unselect();
					       }
					       if (settings.callback)
					       {
						       settings.callback(false);
					       }
				       }
			       });
		}
		else if (settings.$referrer)
		{
			settings.$referrer.unselect();
		}
	}

	//body标签中form的提交操作
//	阻止默认动作，切换到action中的设置页面
	function submitHandler(e, callback)
	{
		$(':focus').trigger('blur');//失去焦点
		e.preventDefault();//阻止默认动作
		var $form = (typeof(e) === 'string') ? $(e).eq(0) : (e.target ? $(e.target) : $(e));
		if ($form.length && $form.is(ssMSettings.formSelector) && $form.attr('action'))
		{
			showPageByHref($form.attr('action'),
			               {
				               data:      $form.serialize(),
				               method:    $form.attr('method') || "POST",
				               animation: getAnimation($form),
				               callback:  callback
			               });
			return false;
		}
		return true;
	}

	function submitParentForm($el)
	{
		var $form = $el.closest('form');
		if ($form.length === 0)
		{
		}
		else {
			$form.trigger('submit');
			return false;
		}
		return true;
	}

	//测试浏览器是否支持3D
	function supportForTransform3d()
	{
		var head, body, style, div, result;
		head = document.getElementsByTagName('head')[0];
		body = document.body;
		style = document.createElement('style');
		style.textContent = '@media (transform-3d),(-o-transform-3d),(-moz-transform-3d),(-webkit-transform-3d){#ssm-3dtest{height:3px}}';
		div = document.createElement('div');
		div.id = 'ssm-3dtest';
		// Add to the page
		head.appendChild(style);
		body.appendChild(div);
		// Check the result
		result = div.offsetHeight === 3;
		// Clean up
		style.parentNode.removeChild(style);
		div.parentNode.removeChild(div);
		// Pass back result
		return result;
	}

//	body标签的开始触摸事件
	function touchStartHandler(e)
	{
		var $el = $(e.target),
			selectors = touchSelectors.join(', ');
		// Find the nearest tappable ancestor
		if (!$el.is(selectors))
		{
			$el = $el.closest(selectors);
		}
		// Make sure we have a tappable element
		if ($el.length && $el.attr('href'))
		{
			$el.addClass('ACTIVE');
		}
		// Remove our active class if we move
		$el.on($.support.touch ? 'touchmove' : 'mousemove', function ()
		{
			$el.removeClass('ACTIVE');
		});
		$el.on('touchend', function () {
			$el.unbind('touchmove mousemove');
		});
	}

	//body标签的tap事件
	function tapHandler(e)
	{

		// Grab the target element
		var $el = $(e.target);
		// Find the nearest tappable ancestor
		if (!$el.is(touchSelectors.join(', '))) {
			$el = $el.closest(touchSelectors.join(', '));
		}
		// Make sure we have a tappable element-如果没有href目的地，则返回
		if (!$el.length || !$el.attr('href'))
			return false;
		// Init some vars
		var target = $el.attr('target'),
			hash = $el.prop('hash'),
			href = $el.attr('href'),
			animation = null;
		if ($el.isExternalLink())//如果是外部链接则返回
		{
			$el.unselect();
			return true;
		}
		else if ($el.is(ssMSettings.backSelector)) //如果有返回标记则返回到历史记录中的上一个页面
		{
			// User clicked or tapped a back button
			goBack(hash);
		}
		else if ($el.is(ssMSettings.submitSelector)) //如果有submit标记则调用提交函数
		{
			// User clicked or tapped a submit element
			submitParentForm($el);
		}
		else if (target === '_webapp')//在原窗口中打开新页面
		{
			// User clicked or tapped an internal link, fullscreen mode
			window.location = href;
			return false;
		}
		else if (href === '#')//空目的地
		{
			// Allow tap on item with no href
			$el.unselect();
			return true;
		}
		else {
			animation = getAnimation($el);
			if (hash && hash !== '#')
			{
				// Internal href
				$el.addClass('ACTIVE');
				goTo($(hash).data('referrer', $el), animation, $el.hasClass('REVERSE'));
				return false;
			}
			else {
				// External href
				$el.addClass('LOADING ACTIVE');
				showPageByHref($el.attr('href'), {
					animation: animation,
					callback:  function ()
					{
						$el.removeClass('LOADING');
						setTimeout($.fn.unselect, 250, $el);
					},
					$referrer: $el
				});
				return false;
			}
		}
	}

//	初始化弹出式功能面板
	function init_funpanel()
	{
		if ($(".FUNPANEL").length == 0)//如果没有面板则返回
			return;
		$(".FUNPANEL").bind("click", funpanelClick);
		function funpanelClick()
		{
			if (!ssMSettings.funpanel_show)
			{
				$(".FUNPANEL .TITLE").hide();
				$(this).addClass("SHOW");
				ssMSettings.funpanel_show = true;
			}
			else {
//				$(".funpanel").each(function()
//				                    {
//					                   this.scrollTop=0;//用这一句代码也可
//				                    });
				$(".FUNPANEL").get(0).scrollTop = 0;
				$(".FUNPANEL .TITLE").show();
				$(this).removeClass("SHOW");
				ssMSettings.funpanel_show = false;
			}
		}
	}

//弹出式消息窗
	function popwin(setting)
	{
        //属性设置
        var defaults={msg:"默认消息",time:1000},
            settings=$.extend({},defaults,setting);


		$("<div class='POPWIN'></div>").appendTo("#ssm > .CURRENT");
		$(".POPWIN").addClass("SHOW");
		$(".POPWIN").html(settings.msg);
		setTimeout(closePopwin, settings.time);
		function closePopwin()
		{
			$(".POPWIN").removeClass("SHOW");
			setTimeout(function () {$(".POPWIN").remove();}, settings.time);
		}
	}

//非阻塞式提示框
	function hintbox(setting)
	{
        //属性设置
        var defaults={title:"默认提示框标题",hintbox:"默认提示框内容",disableScreen:false},
            settings=$.extend({},defaults,setting);

		if ($(".HINTBOX").length != 0)
			return;
		$("<div class='HINTBOX'><div class='TITLE'></div><div class='CONTENT'></div><div class='OKBTN'>确定</div></div>").appendTo("#ssm > .CURRENT");
		$(".HINTBOX .TITLE").html(settings.title);
		$(".HINTBOX .CONTENT").html(settings.hintbox);
		$(".HINTBOX .OKBTN").bind("click", onOkClick);
		if (settings.disableScreen != false)//只要disableScreen不为true，则屏蔽屏幕
		{
            coverScreen();
		}
		function onOkClick()
		{
			$(".HINTBOX").remove();
			$(".COVERSCREEN").remove();
		}
	}

	//屏蔽或解除屏蔽当前屏幕内容
	function coverScreen()
	{
		if ($(".COVERSCREEN").length == 0)
		{
			$("<div class='COVERSCREEN'></div>").appendTo("#ssm > .CURRENT");
		}
		else {
			$(".COVERSCREEN").remove();
		}
	}

	//processBar Dialog
	//建立进度条对话框,公共接口
	function progressBox(setting, onCanceled)
	{
        //属性设置
        var defaults={title:"默认进度条标题",msg:"默认进度条提示内容",useCancelButton:false},
            settings=$.extend({},defaults,setting);

		var $progressBox = $("<div id='progressBox' class='PROGRESS-BAR'></div>"),
			onCanceled = onCanceled;
		if ($(".HINTBOX").length != 0)
			return;
		$("<div class='HINTBOX'><div class='TITLE'></div><div class='CONTENT PROGRESS'></div></div>").appendTo("#ssm > .CURRENT");
		$(".HINTBOX .TITLE").html(settings.title);
		$(".HINTBOX .CONTENT").html(settings.msg);
		$(".HINTBOX").append($progressBox);
		proInit.call($progressBox);
		if (settings.useCancelButton)
		{
			$("<div class='OKBTN'>取消</div>").appendTo(".HINTBOX").bind("click", onOkClick);
		}
		coverScreen();
		function onOkClick()
		{
			$(".HINTBOX").remove();
			$(".COVERSCREEN").remove();
			if (onCanceled) {
				onCanceled();
			}
		}

		//更新进度条的值，公共接口
		function progressBar(id, value)
		{
			var $prBar = $(id),
				max = $prBar.attr("max");
			max = max ? max : 100;
			value = (value > max) ? max : value;
			value = (value / max) * 100 + "%";
			$prBar.children('.PROGRESS-VALUE').width(value);
		}

		//关闭对话框的接口
		this.stop = function ()
		{
			$(".HINTBOX").remove();
			$(".COVERSCREEN").remove();
		}
		//更新进度的接口
		this.update = function (value)
		{
			progressBar("#progressBox", value);
		}
		return this;
	}

	//进度条的初始化
	function proInit()
	{
		var $node = $(this),
			max = $node.attr("max"),
			value = $node.attr("value"),
			width = $node.attr("width"),
			height = $node.attr("height"),
			valueBar = $node.children(".PROGRESS-VALUE");
		max = max ? max : 100;
		if (width)
		{
			$node.width(width);
		}
		if (height)
		{
			$node.height(heigth);
		}
		if (valueBar.length == 0)
		{
			valueBar = $("<div class='PROGRESS-VALUE'></div>");
			$node.append(valueBar);
		}
		else {
			valueBar = valueBar.first();
		}
		valueBar.width((value / max) * 100 + "%");
	}

	//tab控件
	function tabHandler(e)
	{
		var $title = $(e.target),
			$titleParent = $title.parent(),
			$contentParent = $titleParent.parent().children("div"),
			index = $title.index(),
			$oldTitle = $title.siblings(".SHOWING");
		e.preventDefault();
		if ($oldTitle.length > 0)
		{
			$oldTitle.removeClass("SHOWING");
			$contentParent.children("div.SHOWING").removeClass("SHOWING");
		}
		$title.addClass("SHOWING");
		$contentParent.children("div").eq(index).addClass("SHOWING");
	}

//tab初始化
	function tabInit()
	{
        var $el = $(".TABVIEW>ul>li");
        $el.on('tap', tabHandler);//绑定tabview点击事件
        if ($el.length > 0)
            $el.first().trigger("tap");
        this.getTabStatus = function(id,num){
            var num=num-1;
            if($("#"+id).hasClass("TABVIEW")){
                if($("#"+id).find("li").eq(num).hasClass("SHOWING")){
                    return true;
                }else{
                    return false;
                }
            }
        }
        this.setTabStatus = function(id,num1,status,num2){
            var num1 = num1-1,
                num2 = num2-1;
            if(status){
                if($("#"+id).find("li").eq(num1).hasClass("SHOWING")){
                }else{
                    $("#"+id).find(".SHOWING").removeClass("SHOWING");
                    $("#"+id).find("li").eq(num1).addClass("SHOWING");
                    $("#"+id).find(".tabitem").eq(num1).addClass("SHOWING");
                }
            }else{
                if($("#"+id).find("li").eq(num1).hasClass("SHOWING")){
                    $("#"+id).find(".SHOWING").removeClass("SHOWING");
                    $("#"+id).find("li").eq(num2).addClass("SHOWING");
                    $("#"+id).find(".tabitem").eq(num2).addClass("SHOWING");
                }
            }
        }
        this.TabShowing = function(id,num,onShow){
            var onShow = onShow,
                num=num-1;
            $("#"+id).find("li").eq(num).bind("tap",function(){
                onShow();
            });
        }
        return this;
	}

    function treeInit()
    {
        $("#ssm ul.TREE > li:first-child").off("click",treeHandler);
        $("#ssm ul.TREE > li:first-child").on("click",treeHandler);
        this.getTreeStatus = function(id){
            if($("#"+id).hasClass("OPENNING")){
                return true;
            }else{
                return false;
            }
        }
        this.setTreeStatus = function (id,status){
            if($("."+id).hasClass("TREE")){
                if(status){
                    if($("."+id).hasClass("OPENNING")){
                    }else{
                        $("."+id).addClass("OPENNING");
                    }
                }else{
                    if($("."+id).hasClass("OPENNING")){
                        $("."+id).removeClass("OPENNING");
                    }
                }
            }
        }
        this.toTreeOpen = function(id,onClickOpen){
            var onClickOpen = onClickOpen;
            $("#"+id).bind("tap",function(){
                if($("#"+id).hasClass("OPENNING")){
                    onClickOpen();
                }
            });
        }
        this.toTreeClose = function(id,onClickClose){
            var onClickClose = onClickClose;
            $("#"+id).bind("tap",function(){
                if($("#"+id).hasClass("OPENNING")){
                }else{
                    onClickClose();
                }
            });
        }
        return this;
    }

//	树形控件处理
	function treeHandler(e)
	{
		$(this).parent().toggleClass("OPENNING");
	}

	//滚动视图
	function scrollView()
	{
		var defaults =
		{
			width: '100%',
			height: '20px',
			scrollV: true,
			scrollH: false
		};

		init();

		function init()
		{
			$("div.SCROLLVIEW").each(function(index, node){
				var $node = $(this);
				var contents = $node.children();
				var $contentView = $(document.createElement("div"));
				var settingStr = $node.attr('data-settings');
				var data_settings = eval('(' + settingStr + ')');
				var settings = $.extend({}, defaults, data_settings);
				//大小初始化
				setSize(settings.width, settings.height, $node);
				//重构节点
				$contentView.addClass("CONTENT").appendTo($node);
				contents.appendTo($contentView);
				//保存相关数据
				var scrollData =
				{
					scrollPoint: {"x": 0, "y": 0},
					isScrollV: settings.scrollV,
					isScrollH: settings.scrollH,
					isBarShowing: false,
					barHidden: false,
					held: false
				};
				$contentView.get(0).data = $.extend({}, $contentView.get(0).data, scrollData);
				//绑定事件
				$contentView
					.on($.support.touch ? 'touchstart.SCROLL' : 'mousedown.SCROLL', scrollOnStartHandler)
					.on($.support.touch ? 'touchmove.SCROLL' : 'mousemove.SCROLL', scrollOnMoveHandler)
					.on($.support.touch ? 'touchend.SCROLL' : 'mouseup.SCROLL', scrollOnEndHandler)
					.on('mouseout.SCROLL', scrollOnOutHandler);
			});
		}
		//设置控件大小
		function setSize(width, height, $node)
		{
			$node.css({"width": width, "height": height});
		}
		//设置垂直滚动条
		function setScrollV($node, contentHeight)
		{
			var $scrollBar = $(document.createElement("div"));
			var $innerBar = $(document.createElement("div"));
			var wrapHeight = $node.height();
			var length = (wrapHeight >= contentHeight ? '100' : wrapHeight / contentHeight * 100) + "%";

			$innerBar.css("height", length);
			$scrollBar.addClass("SCROLLBARV").append($innerBar).appendTo($node);
		}
		//设置横向滚动条
		function setScrollH($node, contentWidth)
		{
			var $scrollBar = $(document.createElement("div"));
			var $innerBar = $(document.createElement("div"));
			var wrapWidth = $node.width()
			var length = (wrapWidth >= contentWidth ? '100' : wrapWidth / contentWidth * 100) + "%";

			$innerBar.css("width", length);
			$scrollBar.addClass("SCROLLBARH").append($innerBar).appendTo($node);
		}
		//触摸开始时的逻辑处理
		function scrollOnStartHandler(e)
		{
			var $el = $(this),
				$scroll = $el.parent(),
				scrollData = this.data,
				barHidden = scrollData.barHidden;

			event.preventDefault();
			//设置滚动条
			if (scrollData.isScrollV && !scrollData.isScrollVSeted)
			{
				setScrollV($scroll, $el.height());
				scrollData.isScrollVSeted = true;
			}
			if (scrollData.isScrollH && !scrollData.isScrollHSeted)
			{
				setScrollH($scroll, $el.width());
				scrollData.isScrollHSeted = true;
			}
			if (barHidden)
			{
				clearTimeout(barHidden);
			}

			updateDragData(scrollData, e);
			scrollData.held = true;
			//this.data = scrollData;
			$el.css("-webkit-transition", "-webkit-transform 0ms");
			$el.siblings().children().css("-webkit-transition", "-webkit-transform 0ms");
		}
		//触摸移动时的逻辑处理
		function scrollOnMoveHandler(e)
		{

			var $el = $(this),
				scrollData = this.data;

			e.preventDefault();
			if (scrollData && scrollData.held)
			{
				var movePoint = scrollData.movePoint,
					$wrap = $el.parent(),
					$scrollBar = $el.siblings(".SCROLLBARV,.SCROLLBARH"),
					lastMovePoint = scrollData.lastMovePoint,
					scrollPoint = scrollData.scrollPoint;

				if (!scrollData.isBarShowing)
				{
					$scrollBar.show();
					scrollData.isBarShowing = true;
				}

				updateDragData(scrollData, e);

				if (scrollData.isScrollV)
				{
					var dy = movePoint.y - lastMovePoint.y,
						$scrollbarV = $scrollBar.filter(".SCROLLBARV"),
						contentHeight = $el.height();

					scrollPoint.y = scrollPoint.y > 0 || scrollPoint.y < ($wrap.height() - contentHeight)
						? scrollPoint.y + dy / 2
						: scrollPoint.y + dy;
					vBarPosition = - $scrollbarV.height() * scrollPoint.y / contentHeight;
					//$el.css("-webkit-transform", "translate(0px, " + scrollData.scrollPoint.y + "px) translateZ(0px)");
					$scrollbarV.children().css("-webkit-transform", "translate(0px, " + vBarPosition + "px) translateZ(0px)");
				}

				if (scrollData.isScrollH)
				{
					var dx = movePoint.x - lastMovePoint.x,
						contentWidth = $el.width(),
						$scrollbarH = $scrollBar.filter(".ScrollBarH");

					scrollPoint.x = scrollPoint.x > 0 || scrollPoint.x < ($wrap.width() - contentWidth)
						? scrollPoint.x + dx / 2
						: scrollPoint.x + dx;
					hBarPosition = - $scrollbarH.width() * scrollPoint.x / contentWidth;
					$scrollbarH.children().css("-webkit-transform", "translate(" + hBarPosition + "px, 0px) translateZ(0px)");
				}

				$el.css("-webkit-transform", "translate(" + scrollPoint.x + "px, " + scrollPoint.y + "px) translateZ(0px)");
				scrollData.scrollPoint = scrollPoint;
			}
		}
		//触摸结束时的逻辑处理
		function scrollOnEndHandler(e)
		{
			var $el = $(this),
				scrollData = this.data;

			if (!scrollData.held) return;

			var $wrap = $el.parent(),
				$scrollBar = $el.siblings(".SCROLLBARV,.SCROLLBARH"),
				scrollPoint = scrollData.scrollPoint;

			if (scrollData.isBarShowing)
			{
				scrollData.barHidden = setTimeout(function(){$scrollBar.hide();}, 500);
				scrollData.isBarShowing = false;
			}

			if (scrollData.isScrollV)
			{
				var bottomLimit = $wrap.height() - $el.height(),
					$scrollbarV = $scrollBar.filter(".SCROLLBARV");
				vBarPosition;

				if (scrollPoint.y > 0)
				{
					scrollPoint.y = 0;
					vBarPosition = 0;
				}
				else if (scrollPoint.y < bottomLimit)
				{
					scrollPoint.y = bottomLimit;
					vBarPosition  =  - $scrollbarV.height() * scrollPoint.y / $el.height();
				}

				$scrollbarV.children().css({
					                           "-webkit-transition": "-webkit-transform 250ms ease-in",
					                           "-webkit-transform" : "translate(0px, " + vBarPosition + "px) translateZ(0px)"
				                           });
			}

			if (scrollData.isScrollH)
			{
				var rightLimit = $wrap.width() - $el.width(),
					$scrollbarH = $scrollBar.filter(".SCROLLBARH");
					hBarPosition;

				if (scrollPoint.x > 0)
				{
					scrollPoint.x = 0;
					hBarPosition = 0;
				}
				else if (scrollPoint.x < rightLimit)
				{
					scrollPoint.x = rightLimit;
//					hBarPosition = - $scrollbarH.height() * scrollPoint.x / $el.height();
					hBarPosition = - $scrollbarH.width() * scrollPoint.x / $el.width();
				}

				$scrollbarH.children().css({
					                           "-webkit-transition": "-webkit-transform 250ms ease-in",
					                           "-webkit-transform" : "translate(" + hBarPosition + "px, 0px) translateZ(0px)"
				                           });
			}

			$el.css({
				        "-webkit-transition": "-webkit-transform 250ms ease-in",
				        "-webkit-transform" : "translate(" + scrollPoint.x + "px, " + scrollPoint.y + "px) translateZ(0px)"
			        });
			scrollData.scrollPoint = scrollPoint;

			$.extend(scrollData, {
				"startPoint": null,
				"startDate": null,
				"movePoint": null,
				"moveDate": null,
				"lastMovePoint": null,
				"lastMoveDate": null,
				"held": false
			});
		}
		//鼠标划出窗口时的逻辑处理
		function scrollOnOutHandler(e)
		{
			var isMouseLeave = false,
				$this = $(this);

			if (e.currentTarget) {
				var node = e.relatedTarget;

				if (node != this) {
					while (node.parentNode)
					{
						node = node.parentNode;

						if (this == node) break;
					}

					if (!node.parentNode) isMouseLeave = true;
				}
			}

			if (isMouseLeave)
				scrollOnEndHandler.call(this);
		}
	}
	//处理触摸移动时的数据
	updateDragData = function (data, e)
	{
		var timeStamp = e.timeStamp,
			position = {
				"x": $.support.touch ? e.touches[0].pageX : e.pageX,
				"y": $.support.touch ? e.touches[0].pageY : e.pageY
			};

		ensureSingularStartData(data, position, timeStamp);

		if ( data.held){
			$.extend(data, {
				lastMoveDate: data.moveDate || data.startDate,
				lastMovePoint: data.movePoint ? data.movePoint : data.startPoint,
				moveDate: timeStamp,
				movePoint: {
					"x": position.x,
					"y": position.y
				}
			});
		}else {
			$.extend(data, {
				lastMoveDate: 0,
				lastMovePoint: data.startPoint,
				moveDate: 0,
				movePoint: data.startPoint
			});
		}

		function ensureSingularStartData(data, position, timeStamp) {
			if (!data.startPoint) {
				data.startPoint = {
					"x": position.x,
					"y": position.y
				};
			}
			if (!data.startDate) {
				data.startDate = timeStamp;
			}
		};
	};

	//List类
	//服务器返回数据格式
	//data{
	//	count,   总页数
	//	current, 当前页
	//	data: {
	//			small,    small标签中的内容
	// 			text,	  a标签中的内容
	// 			em,		  em标签中的内容
	// 			href      链接
	//		}
	//}
	var List = {
		//构造方法
		//id:元素id，length:每页长度, requestType:请求方式'POST'或'GET', url,param:发往服务器的数据
		//dataParser: 将服务器发来的数据转换为要求的数据格式,默认function(data){return data};
		getInstance: function(id, length, requestType, url, param, dataParser){
			var list = {};				//取得存储区
		
			/*私有属性*/
			var _id 			= id,							 //列表id
				_len 		= length,						 //每页长度
				_requestType	= requestType,					 //请求方法,'POST'或'GET', ajax
				_url 			= url,							 //服务器地址, ajax
				_param 			= {},							 //发送至服务器的数据, ajax
				_count   		= -1,							 //总页数
				_current 		= -1,							 //当前页号
				_data   		= null,							 //返回的数据
				_dataParser     = function(data){ return data},  //数据转换方法
				_success 		= function(data, status){},		 //访问成功时的回调函数
				_error			= function(xhr, errotype){};	 //访问失败时的回调函数

			if (param){
				if ($.isFunction(param))
					_dataParser = param;
				else{
					_param = param;

					if (dataParser) _dataParser = dataParser;
				}
			}

			update(1);

			/*私有方法*/
			//更新数据和视图
			function update(pageNum){
				$.extend(_param, {len: _len, pageNum: pageNum});
				$.ajax({
					type: 		(_requestType === 'POST') ? 'POST' : 'GET',
					url: 		_url,
					data: 		_param,
					dataType: 	'json',
					context: 	$('#' + _id),
					success: 	function(data, status){
						//data{
						//	count,   总页数
						//	current, 当前页
						//	data	 数据
						//}
						if (!data) return; 
						//更新数据
						var jsObj = data,
							$node = this;
						_count   = jsObj.count;
						_current = jsObj.current;
						_data    = _dataParser(jsObj.data);

						//更新视图
						$.each(_data, function(index, value){
							// value{
							// 	small,
							// 	text,
							// 	em,
							// 	href
							// }
							var newNode = '<li class="ARROW">' +
											'<a href="' + (value.href ? value.href : '#') + '">' +
            									'<small>' + value.small + '</small>' +
            									value.text + 
            									'<em>' + value.em + '</em>' +
            								'</a>' +
            							'</li>';


            				$node.append(newNode);
						});
						_success.call(this, data, status);
					},
					error:    	function(xhr, errotype){
						_error.call(this, xhr, errotype);
					}
				});
			}	

			/*公共方法*/
			//下一页
			list.next = function(){
				update(_current + 1);
			};
			//上一页
			list.previous = function(){
				update(_current - 1);
			};
			//跳至pageNum页
			list.jumpTo = function(pageNum){
				update(pageNum);
			};
			//取得总页数
			list.getCount = function(){
				return _count;
			};
			//取得每页长度
			list.getLength = function(){
				return _len;
			};
			//取得但前页号
			list.getCurrent = function(){
				return _current;
			};
			//取得视图对象
			list.getView = function(){
				return $('#' + _id)
			}
			//取得返回的数据
			list.getData = function(){
				return _data;
			}
			//添加回调函数1
			list.addListener = function(callbacks){
				if (callbacks.success)
					_success = callbacks.success;
				if (callbacks.error)
					_error = callbacks.error;

				return list;
			}
			//添加回调函数2
			list.addListener = function(type, callback){
				switch(type){
					case "success": 
						_success = callback;
						break;
					case "error":
						_error = callback;
						break;
				}
				return list;
			}

			return list;
		}
	}

    var Table = {
        //构造方法
        //id:元素id，length:每页长度, requestType:请求方式'POST'或'GET', url,param:发往服务器的数据
        //dataParser: 将服务器发来的数据转换为要求的数据格式,默认function(data){return data};
        getInstance: function(id, length, requestType, url, param, dataParser){
            var table = {};				//取得存储区

            /*私有属性*/
            var _id 			= id,							 //列表id
                _len 		= length,						 //每页长度
                _requestType	= requestType,					 //请求方法,'POST'或'GET', ajax
                _url 			= url,							 //服务器地址, ajax
                _param 			= {},							 //发送至服务器的数据, ajax
                _count   		= -1,							 //总页数
                _current 		= -1,							 //当前页号
                _data   		= null,							 //返回的数据
                _dataParser     = function(data){ return data},  //数据转换方法
                _success 		= function(data, status){},		 //访问成功时的回调函数
                _error			= function(xhr, errotype){};	 //访问失败时的回调函数

            if (param){
                if ($.isFunction(param))
                    _dataParser = param;
                else{
                    _param = param;

                    if (dataParser) _dataParser = dataParser;
                }
            }

            update(1);

            /*私有方法*/
            //更新数据和视图
            function update(pageNum){
                $.extend(_param, {len: _len, pageNum: pageNum});
                $.ajax({
                    type: 		(_requestType === 'POST') ? 'POST' : 'GET',
                    url: 		_url,
                    data: 		_param,
                    dataType: 	'json',
                    context: 	$('#' + _id),
                    success: 	function(data, status){
                        //data{
                        //	count,   总页数
                        //	current, 当前页
                        //	data	 数据
                        //}
                        if (!data) return;
                        //更新数据
                        var jsObj = data,
                            $node = this;
                        _count   = jsObj.count;
                        _current = jsObj.current;
                        _data    = _dataParser(jsObj.data);

                        //更新视图
                        $.each(_data, function(index, value){
                            // value{
                            // 	small,
                            // 	text,
                            // 	em,
                            // 	href
                            // }
                            var newNode = '<tr>' +value.xinput+
                                '</tr>';


                            $node.append(newNode);
                        });
                        _success.call(this, data, status);
                    },
                    error:    	function(xhr, errotype){
                        _error.call(this, xhr, errotype);
                    }
                });
            }

//            /*公共方法*/
//            //下一页
//            list.next = function(){
//                update(_current + 1);
//            };
//            //上一页
//            list.previous = function(){
//                update(_current - 1);
//            };
//            //跳至pageNum页
//            list.jumpTo = function(pageNum){
//                update(pageNum);
//            };
//            //取得总页数
//            list.getCount = function(){
//                return _count;
//            };
//            //取得每页长度
//            list.getLength = function(){
//                return _len;
//            };
//            //取得但前页号
//            list.getCurrent = function(){
//                return _current;
//            };
//            //取得视图对象
//            list.getView = function(){
//                return $('#' + _id)
//            }
//            //取得返回的数据
//            list.getData = function(){
//                return _data;
//            }
//            //添加回调函数1
//            list.addListener = function(callbacks){
//                if (callbacks.success)
//                    _success = callbacks.success;
//                if (callbacks.error)
//                    _error = callbacks.error;
//
//                return list;
//            }
//            //添加回调函数2
//            list.addListener = function(type, callback){
//                switch(type){
//                    case "success":
//                        _success = callback;
//                        break;
//                    case "error":
//                        _error = callback;
//                        break;
//                }
//                return list;
//            }

            return table;
        }
    }

//标题下拉框
	var headSelect={
		init:function(){
		    var $elem=$('.HEADSELECT');

			if($elem.length==0) return;

			$elem.each(function(index,el){
				var $glass=$('.GLASS');

				var $el=$(this),
					$option_ul=$el.children('ul'),
					$option_li=$option_ul.children('li'),
					$option_h1=$el.children('h1'),
					$count=$option_ul.children('li').length;
					if($count>10) $count=10      //只允许添加10项

					var glass=document.createElement("div");
					$glass=$(glass);
					$glass.addClass("GLASS").appendTo($el);

				var height = 0,ul_height= 0, display = false, timer;

				var step = function() {
					height = display? (height + 5): (height - 5);
					ul_height = display? ((height+21)*$count): 0;
					if (height < 0) {
						height = 0;
					} else if (height > 20) {
						height = 20;
					}
					$option_li.height(height + "px");
					$option_ul.height( ul_height+ "px");
					if (height > 0 && height < 20) {
						timer = setTimeout(step, 40);
					}
				};
				$el.on("click",function(event){
					event.preventDefault();
					if (timer) clearTimeout(timer)
					display = !display;
					if(display==false){
						$option_ul.css("display","none");
//						$option_h1.css({"background-image":"url(../lib/ssm/themes/img/down.png)","color":"#fff"});
						$option_h1.removeClass('close');
						$option_h1.addClass('open');

					}else if(display==true){
						$option_ul.css("display","block");
//						$option_h1.css({"background-image":"url(../lib/ssm/themes/img/up.png)","color":"Gainsboro"});
                        $option_h1.removeClass('open');
                        $option_h1.addClass('close');
                    }
					step();
					$glass.toggle();
				});
			});
		},
		addListener: function(elem, callback){
			var $elem  = $(elem),
				$list = $elem.children('ul');

			$list.on('click', function(event) {
				event.preventDefault();

				var target = event.target,
					$target = $(target);
				if ($target.is('li')||$target.parent().is('li'))
				{
					callback.call(elem, target);
				}

			});
		}
	};
//滚动焦点图
	function imgSlider() {
		var defaults=
		{
			interval:'4000',
//					preNextBtn:'false',
			height:'150px'
		};
//				取焦点图的div
		var $elem=$(".FOCUS");
//				取屏幕宽度
		var liWidth=$(window).width();
//				遍历每个带有.FOCUS的
		$elem.each(function(index,el){
//					取该FOCUS
			var $el=$(this);
//					取data-settings设置
			var settingStr=$el.attr('data-settings');
			var data_settings=eval('('+settingStr+')');
			var settings= $.extend({},defaults,data_settings);
//					设置高度
			$el.css("height",settings.height);

//					取每项（其中添加了图）
			var $li=$el.children('ul').children('li');
//					图个数
			var $len=$el.children('ul').children('li').length;
//					图下标
			var picIndex=0;
//					将每项的图的宽度都设置成屏幕的宽度
			$li.each(function(){
				$(this).find("img").css("width",liWidth);
				$(this).css("height",settings.height);
			});
//					将列表的宽度设置成屏幕宽度*图个数
			$(".FOCUS ul").css("width",liWidth*$len);
//					html中添加加了CLASS的div用来显示焦点图上的图片下标指示框和向前后箭头
			var addHtml="<div CLASS='btnBg'></div><div CLASS='btn'>";
			for(var i=0;i<$len;i++){
				addHtml=addHtml+"<span></span>";
			}
			addHtml=addHtml+"</div>";
//					if(settings.preNextBtn=="true"){
//						addHtml=addHtml+"<div CLASS='preNext pre'>" +
//							"</div><div CLASS='preNext next'>";
//					}
			addHtml=addHtml+"</div>";
			$el.append(addHtml);

//					设定了每4秒就显示下张图
			var picTimer=setInterval(function(){
				showPics(picIndex);
				picIndex++;
				if(picIndex==$len){
					picIndex=0;
				}
			},settings.interval);

//					点击向前显示前一张图
			$(".FOCUS").on("tap",".pre",function(){
				picIndex--;
				if(picIndex<0)
				{
					picIndex=$len-1;
				}
				showPics(picIndex);
			});
//					点击向后显示下一张图
			$(".FOCUS").on("click",".next",function(){
				picIndex++;
				if(picIndex==$len)
				{
					picIndex=0;
				}
				showPics(picIndex);
			});
//					向左滑显示下一张图||向右滑显示上一张图
			$(".FOCUS").on({
				               swipeLeft:function(){
					               picIndex++;
					               if(picIndex==$len)
					               {
						               picIndex=0;
					               }
					               showPics(picIndex);

				               },
				               swipeRight:function(){
					               picIndex--;
					               if(picIndex<0)
					               {
						               picIndex=$len-1;
					               }
					               showPics(picIndex);
				               }
			               });
		})
//				显示图片的函数
		var showPics=function(picIndex){
//					通过图片的下标*屏幕宽度指定ul应向左滑动的像素
			var nowLeft=-picIndex*liWidth;
//					ul向左滑动的动画
			$(".FOCUS ul").animate({"left":nowLeft},300);
//					btn图片下标指示框的动画
			$(".FOCUS .btn span").animate({"background":"rgba(170, 170, 170, 0.28)"},300);
			$(".FOCUS .btn span").eq(picIndex).animate({"background":"rgba(170, 170, 170, 0.8)"},300);
//					以上也可这样写
//                  $(".FOCUS .btn span").animate({"background":"rgba(170, 170, 170, 0.28)"},300).eq(picIndex).animate({"background":"rgba(170, 170, 170, 0.8)"},300);
		}
    }
//浮动提示框
	var popOver=function(setting){
//	               申请个存储空间
		var pop=new Object();
//	               获取点击元素
		var src_elem=event.target;
//	               获取点击元素离顶部的像素
		var $offsetTop=src_elem.offsetTop;
//	               获取点击元素离左边的像素
		var $offsetLeft=src_elem.offsetLeft;
//	               获取点击元素的高
		var $offsetHeight=src_elem.offsetHeight;
//	               获取点击元素的宽
		var $offsetWidth=src_elem.offsetWidth;
//	               用来存放浮动框离顶部的像素
		var $top;
//	               用来存放浮动框离左边的像素
		var $left;

		//属性默认值
		var defaults={
			height:'80',       //浮动框的高
			width:'150',       //浮动框的宽
			to:'top',          //浮动框尖角的指向
			interval:'4000',    //浮动框多久后消失
            content:'默认内容'
		}
        console.log(setting.content,setting.width);
//	               讲传过来的属性参数与默认合并
		var settings= $.extend({},defaults,setting);
//	               如果尖角朝上则应显示在点击元素的下方
		if(settings.to=="top"){
			$top=$offsetTop+$offsetHeight+10;
			$left=$offsetLeft;
		}
//	               如果尖角朝右则应显示在点击元素的左方
		else if(settings.to=="right"){
			$top=$offsetTop;
			$left=$offsetLeft-settings.width-20;
		}
//	               如果尖角朝下则应显示在点击元素的上方
		else if(settings.to=="bottom"){
			$top=$offsetTop-settings.height-20;
			$left=$offsetLeft;
		}
//	               如果尖角朝左则应显示在点击元素的右方
		else if(settings.to=="left"){
			$top=$offsetTop;
			$left=$offsetLeft+$offsetWidth+10;
		}
//	               此段代码用来构造一个浮动提示框
		var $insertElem=$("<div CLASS='POPOVER' style=\"height:"+settings.height+";width:"+settings.width+";top:"+$top+";left:"+$left+"\">" +
			                  "<div CLASS='CONTENT'>"+settings.content+"</div>"+
			                  "<s CLASS="+settings.to+"><i></i></s>"+
			                  "</div>");
//                 获取浮动提示框的存放内容的div
		pop.elemContent=$insertElem.children(".CONTENT");
//                 将浮动提示框添加到当前界面
		$insertElem.appendTo("#ssm > .CURRENT");
//                 显示浮动提示框
		$(".POPOVER").show();
//                 设置时间间隔调用closePopOver让他消失
		setTimeout(closePopOver, settings.interval);
//                 点击浮动提示框也将使他消失
		$(".POPOVER").on("tap",function(){
			closePopOver();
		});
//	               浮动提示框消失及销毁的方法
		function closePopOver()
		{
			$(".POPOVER").animate({opacity:0},500);
			setTimeout(function () {$(".POPOVER").remove();}, 1000);
		}
////	               给浮动提示框添加内容的方法
//		pop.setContent=function(content)
//		{
//			this.elemContent.text(content);
//		}
//	               将存储区返回
		return pop;
	}
//	加载中动画
	var loader=function(showOrHide,settings){
		var load=new Object();
		//属性默认值
		var defaults={
			height:'50',       //加载中动画的高
			width:'50',       //加载中动画的宽
			color:'black',
			disableScreen:true //是否屏蔽屏幕
		}
		if(showOrHide=="hide")
		{
			$(".LOADING").remove();
			$(".COVERSCREEN").remove();
			return ;
		}
		else if(showOrHide=="show")
		{
			if ($(".LOADING").length != 0)
				return;
			var $insertHtml=$("<div class='loading'>" +
				                  "<div><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>" +
				                  "</div>");
			$insertHtml.appendTo("#ssm > .CURRENT");
			var $setting= $.extend({},defaults,settings);
			$(".LOADING").css({height:$setting.height,width:$setting.width});
			$(".LOADING div span").css({background:$setting.color});
			if ($setting.disableScreen != false)//只要disableScreen不为true，则屏蔽屏幕
			{
				coverScreen();
			}
		}
//		function coverScreen()
//		{
//			if ($(".COVERSCREEN").length == 0)
//			{
//				$("<div class='COVERSCREEN'></div>").appendTo("#ssm > .CURRENT");
//			}
//			else {
//				$(".COVERSCREEN").remove();
//			}
//		}
		return load;
	}


    //new
    var changeNormalSetting=function(id,settings){
        var changeNormalSetting=new Object();
        var defaults={
            height:'50',       //高
            width:'50'       //宽
        }
        var settings=$.extend({},defaults,settings);
        $("#"+id).css({width:settings.width,height:settings.height});
        return changeNormalSetting;
    }


	//processBar Dialog end
	// 开始点
	init(options);

    var main=function(){
        // 部分属性存储
        if (!$.support)
            $.support = {};
        $.support.animationEvents = (typeof window.WebKitAnimationEvent != 'undefined');
        $.support.touch = (typeof window.TouchEvent != 'undefined') && (window.navigator.userAgent.indexOf('Mobile') > -1) && ssMSettings.useFastTouch;
        $.support.transform3d = supportForTransform3d();
//		  $.support.ios5 = /OS (5(_\d+)*) like Mac OS X/i.test(window.navigator.userAgent);
        // 定义public函数

        //scrollView处理函数
        scrollView();

//		  是否新打开窗口的外部链接
        $.fn.isExternalLink = function ()
        {
            var $el = $(this);
            return ($el.attr('target') == '_blank' || $el.attr('rel') == 'external' || $el.is('a[href^="http://maps.google.com"], a[href^="mailto:"], a[href^="tel:"], a[href^="javascript:"], a[href*="youtube.com/v"], a[href*="youtube.com/watch"]'));
        };
        $.fn.makeActive = function ()
        {
            return $(this).addClass('ACTIVE');
        };
        $.fn.unselect = function (obj)
        {
            if (obj)
                obj.removeClass('ACTIVE');
            else
                $('.ACTIVE').removeClass('ACTIVE');
        };
        //添加扩展
        for (var i = 0, max = extensions.length; i < max; i++)
        {
            var fn = extensions[i];
            if ($.isFunction(fn))
                $.extend(publicObj, fn(publicObj));
        }
        //添加动画
        for (var j = 0, max_anims = defaults.animations.length; j < max_anims; j++)
        {
            var animation = defaults.animations[j];
            if (ssMSettings[animation.name + 'Selector'] !== undefined)
            {
                animation.selector = ssMSettings[animation.name + 'Selector'];
                alert('animation selector');
            }
            addAnimation(animation);
        }
        //禁止touchSelectors中类名相关的元素触摸后默认菜单弹出(-webkit-touch-callout),选择菜单弹出用-webkit-user-select: none;
        touchSelectors.push(ssMSettings.touchSelector);
        touchSelectors.push(ssMSettings.backSelector);
        touchSelectors.push(ssMSettings.submitSelector);
        $(touchSelectors.join(', ')).css('-webkit-touch-callout', 'none');
        // 添加ssm元素
        $body = $('#ssm');
        var anatomy_lessons = [];
        if ($body.length === 0)
            $body = $(document.body).attr('id', 'ssm');
        // 为body指定一些默认的属性和方法
        if ($.support.transform3d)
            anatomy_lessons.push('SUPPORTS3D');
//		  if ($.support.ios5 && ssMSettings.useTouchScroll)
//			  anatomy_lessons.push('touchscroll');
        if (ssMSettings.fullScreenClass && window.navigator.standalone === true)
            anatomy_lessons.push(ssMSettings.fullScreenClass, ssMSettings.statusBar);
        // Bind events
        $body
            .addClass(anatomy_lessons.join(' '))
            .bind('click', clickHandler)//点击
            .bind('orientationchange', orientationChangeHandler)//横竖屏幕切换
            .bind('submit', submitHandler) //表单提交
            .bind('tap', tapHandler) //tap事件
            .bind($.support.touch ? 'touchstart' : 'mousedown', touchStartHandler) //touch事件
            .trigger('orientationchange');
        $(window).bind('hashchange', hashChangeHandler);
        var startHash = location.hash;//锚点id号
        // 最初显示的屏幕
        if ($('#ssm > .CURRENT').length === 0)
            $currentPage = $('#ssm > *:first-child').addClass('CURRENT');
        else
            $currentPage = $('#ssm > .CURRENT');
        if ($currentPage.length == 0)
        {
            warnprint("null node,it requires one node at least!");
            return;
        }
        setHash($currentPage.attr('id'));
        addPageToHistory($currentPage);
        if ($(startHash).length === 1)
            goTo(startHash);
        init_funpanel();//初始化弹出式功能面板
        tabInit();//初始化tab控件
        $("#ssm ul.TREE > li:first-child").on("click",treeHandler);//树形控件添加事件
        headSelect.init(); //初始化标题下拉框
    }
	// 主函数
	$(function ssRun()
	  {
          main();

	  });
	// 暴露public属性和方法
	publicObj =
	{
        main:   main,
		addAnimation:   addAnimation,
		animations:     animations,
		getOrientation: getOrientation,
		goBack:         goBack,
		insertPages:    insertPages,
		goTo:           goTo,
		history:        history,
		settings:       ssMSettings,
		submitForm:     submitHandler,
		warnprint:      warnprint,
		logprint:       logprint,
		popwin:         popwin,
		hintbox:        hintbox,
		progressBox:    progressBox,
		List: 			List.getInstance,  //初始化list
        Table: 			Table.getInstance,  //new
		addSelectListener: headSelect.addListener, //标题下拉框添加事件的函数监听
		imgSlider: imgSlider, //滚动焦点图
		popOver:popOver,   //浮动提示框
		loader:loader,   //加载中动画
//        以下由于IDE的原因更改by gyj
        funpanel:init_funpanel,
        tab:tabInit,
        tree:treeInit,
        changeNormalSetting:changeNormalSetting
	};
	return publicObj;
};
ssMobile.prototype.extensions = [];
(function ($)
{
	$.ssm = function (options)
	{
		return ssMobile(options);
	};
	$.fn.prop = $.fn.attr;
	// Extensions directly manipulate the ssm object, before it's initialized.
	$.ssm.addExtension = function (extension)
	{
		ssMobile.prototype.extensions.push(extension);
	};
})(Zepto);

