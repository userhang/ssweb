/**
 * Created by gyj on 14-4-2.
 */
var messenger = new Messenger('mainIframe');
messenger.addTarget(window.parent, 'parent');