/**
 * Created by gyj on 14-5-10.
 */

var module1 = (function(){
	var _count = 222;
	var setcount = function(a){
		_count = a;
		return _count;
	};
	var getcount = function(){
		return _count;
	};return {
		setcount : setcount,
		getcount : getcount
	};
})();
console.info(module1._count);
console.log(module1.getcount());
console.log(module1.setcount(111));
console.log(module1.getcount());
/**
 * test 对module2中_count操作
 */
var module2 = (function(){
	var _count = 222;
	var setcount = function(a){
		_count = a;
		return _count;
	};
	var getcount = function(){
		return _count;
	};
	return {
		setcount : setcount,
		getcount : getcount
	};
})();
var module3 = (function(){
	var event1 = function(){
		console.log("event1中:");
		console.log(module2.getcount());
		console.log(module2.setcount(33333));
		console.log(module2.getcount());
	};
	var event2 = function(){
		console.log("event2中:");
		console.log(module2.getcount());
		console.log(module2.setcount(111));
		console.log(module2.getcount());
	};
	return {
		event1 : event1,
		event2 : event2
	};
})();
module3.event1();
module3.event2();
module3.event1();
module3.event2();
//event1中: VM11291:18
//222 VM11291:19
//33333 VM11291:20
//33333 VM11291:21
//event2中: VM11291:24
//33333 VM11291:25
//111 VM11291:26
//111 VM11291:27
//event1中: VM11291:18
//111 VM11291:19
//33333 VM11291:20
//33333 VM11291:21
//event2中: VM11291:24
//33333 VM11291:25
//111 VM11291:26
//111
