/**
 * Created by gyj on 14-3-30.
 */

function sendMessage_changetheme(event,name,directive,attr) {
	var theme_name=event.target.id;
	var data={'directive':directive,'attr':theme_name};
	data = JSON.stringify(data);
	messenger.targets[name].send(data);
}

function sendMessage_funcdirective(data) {
	data = JSON.stringify(data);
	messenger.targets['mainIframe'].send(data);
}