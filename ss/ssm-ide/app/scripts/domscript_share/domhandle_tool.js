/**
 * Created by gyj on 14-5-14.
 */
var singleton = function( fn ){
	var result;
	return function(){
		return result || ( result = fn .apply( this, arguments ) );
	}
};
var createEventlist = singleton( function(){
	return [];
});
var createDefaultjslist = singleton( function(){
	return [];
});
var createPagestate= singleton( function(){
	return "edit";
});
var createALabelHrefList= singleton( function(){
	return [];
});

