/**
 * Created by gyj on 14-4-2.
 */
var messenger = new Messenger('parent'),
	mainIframe = document.getElementById('mainIframe');
messenger.addTarget(mainIframe.contentWindow, 'mainIframe');