/**
 * Created by gyj on 14-4-19.
 */
/*********************************************
 * 描述：列表组（listul）的设置方法的参数设置
 *********************************************/

var app = angular.module('app');
app.controller('listultplCtrl', ['$scope', '$location',function listulCtrl($scope, $location) {
	if(typeof $scope.attr == 'undefined') {
		$location.url('/');
		return;
	}
    // 列表项个数+1操作
	$scope.addli=function addli(){
		var data = {'seq':$scope.seq,'directive':'addli'}
		sendMessage_funcdirective(data);
	};

    //列表项个数-1操作
	$scope.cutli=function cutli(){
		var data = {'seq':$scope.seq,'directive':'cutli'}
		sendMessage_funcdirective(data);
	};

    //更改列表组类型操作
	$scope.changeListType=function changeListType(){
		var data = {
			'seq':$scope.seq,
			'directive':'changeListType',
			'attr':{'listItemNo':$scope.listItemNoSelected,'listType':$scope.listTypeSelected}
		};
		sendMessage_funcdirective(data);
	};

    //更改列表组圆角样式
	$scope.changeIsRoundedCorner=function changeIsRoundedCorner(){
		var data = {
			'seq':$scope.seq,
			'directive':'changeIsRoundedCorner',
			'attr':{'isRoundedCorner':$scope.isRoundedCornerChecked}
		};
		sendMessage_funcdirective(data);
	};

    //更改当前正操作的是第几个列表项
	$scope.changeListItemNo=function changeListItemNo(){
		var data = {
			'seq':$scope.seq,
			'directive':'changeListItemNo',
			'attr':{'listItemNo':$scope.listItemNoSelected}
		};
		sendMessage_funcdirective(data);
	};

    //更改列表项链接内容
    $scope.changeListHrefContent=function changeListHrefContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeListHrefContent',
            'attr':{'listItemNo':$scope.listItemNoSelected,'listHrefContent':$scope.listHrefContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改当前正操作列表项文字内容
	$scope.changeListItemContent=function changeListItemContent(){
		var data = {
			'seq':$scope.seq,
			'directive':'changeListItemContent',
			'attr':{'listItemNo':$scope.listItemNoSelected,'listItemContent':$scope.listItemContentInput}
		};
		sendMessage_funcdirective(data);
	};

    //更改当前正操作的列表项是否为标题（标题只对通栏列表有效）
	$scope.changeIsTitle=function changeIsTitle(){
		var data = {
			'seq':$scope.seq,
			'directive':'changeIsTitle',
			'attr':{'listItemNo':$scope.listItemNoSelected,'isTitle':$scope.isTitleChecked}
		};

		sendMessage_funcdirective(data);
	};

    //更改当前正操作的列表项是否含有箭头Class
	$scope.changeHasArrow=function changeHasArrow(){
		var data = {
			'seq':$scope.seq,
			'directive':'changeHasArrow',
			'attr':{'listItemNo':$scope.listItemNoSelected,'hasArrow':$scope.hasArrowChecked}
		};
		sendMessage_funcdirective(data);
	};

    //更改当前正操作的列表项是否含有向前Class
	$scope.changeHasForward=function changeHasForward(){
		var data = {
			'seq':$scope.seq,
			'directive':'changeHasForward',
			'attr':{'listItemNo':$scope.listItemNoSelected,'hasForward':$scope.hasForwardChecked}
		};
		sendMessage_funcdirective(data);
	};

    //更改当前正操作的列表项是否含有气泡数字
	$scope.changeHasSmallCounter=function changeHasSmallCounter(){
		var data = {
			'seq':$scope.seq,
			'directive':'changeHasSmallCounter',
			'attr':{'listItemNo':$scope.listItemNoSelected,'hasSmallCounter':$scope.hasSmallCounterChecked}
		};
		sendMessage_funcdirective(data);
	};

    //更改当前正操作列表项气泡数字内容
	$scope.changeSmallCounterContent=function changeSmallCounterContent(){
		var data = {
			'seq':$scope.seq,
			'directive':'changeSmallCounterContent',
			'attr':{'listItemNo':$scope.listItemNoSelected,'smallCounterContent':$scope.smallCounterContentInput}
		};
		sendMessage_funcdirective(data);
	};

    //更改当前正操作的列表项是否含有小标注
	$scope.changeHasSmallText=function changeHasSmallText(){
		var data = {
			'seq':$scope.seq,
			'directive':'changeHasSmallText',
			'attr':{'listItemNo':$scope.listItemNoSelected,'hasSmallText':$scope.hasSmallTextChecked}
		};
		sendMessage_funcdirective(data);
	};

    //更改当前正操作列表项小标注内容
	$scope.changeSmallTextContent=function changeSmallTextContent(){
		var data = {
			'seq':$scope.seq,
			'directive':'changeSmallTextContent',
			'attr':{'listItemNo':$scope.listItemNoSelected,'smallTextContent':$scope.smallTextContentInput}
		};
		sendMessage_funcdirective(data);
	};

    //新增js事件绑定
	$scope.addevent=function addevent(){
		var initJs="",
			tmpeventdata={
			'directive':'addeventbind',
			'eventid':Math.uuid(),
			'seq':$scope.seq,
			'childattr':{'listItemNo':$scope.listItemNoSelected},
			'funcType':$scope.listuleventselect,
			'funcContent':""
		};
		eventData=eventDataHandle.getEventContentFromEventlistViaElemEventListAndEventData($scope.elemEventList,tmpeventdata);
		if(eventData.funcContent!=""){
			initJs=eventData.funcContent;
		}else{
			initJs="$('[seq=\""+eventData.seq+"\"]')";
			if(!isEmpty(eventData.childattr)){
				for(var key in eventData.childattr){
					switch (key){
						case 'listItemNo':
							initJs+=".children().eq("+(eventData.childattr[key]-1)+")";
					}
				}
			}
			initJs+=".on('"+eventData.funcType.val+"',function(){\r\r});";
		}
		editor.setValue(initJs);
		$('#editEvent').modal();
	};

    //编辑已绑定的js事件
	$scope.editevent=function editevent(elemEvent){
		console.log("elemEvent  :",elemEvent);
		var initJs="",
		eventData={
			'directive':'addeventbind',
			'eventid':elemEvent.eventid,
			'seq':$scope.seq,
			'childattr':elemEvent.childattr,
			'funcType':elemEvent.funcType,
			'funcContent':elemEvent.funcContent
		};
		initJs=eventData.funcContent;
		editor.setValue(initJs);
		$('#editEvent').modal();
	};

    //删除已绑定的js事件
	$scope.delevent=function delevent(elemEvent){
		eventData={
			'directive':'deleventbind',
			'eventid':elemEvent.eventid,
			'seq':$scope.seq,
			'childattr':elemEvent.childattr,
			'funcType':elemEvent.funcType,
			'funcContent':elemEvent.funcContent
		};
		sendMessage_funcdirective(eventData);
	};

    //修改列表项字体
    $scope.changeListItemContentFontFamily=function changeListItemContentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeListItemContentFontFamily',
            'attr':{'listItemNo':$scope.listItemNoSelected,'listItemContentFontFamily':$scope.listItemContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };

    //界面分组的文字（第一组）
	$scope.listulgroupTitle = '列表组设置';
    //界面分组的文字（第二组）
	$scope.listulitemTitle = '列表项设置';
    //界面分组的文字（第三组）
	$scope.listuleventbindTitle = '添加事件绑定';
    //界面分组的文字（第四组）
	$scope.listuleventeditTitle = '编辑事件绑定';

    //列表类型数据
	$scope.listType = [
		{name:'普通列表',val:'putongliebiao'},
		{name:'通栏列表',val:'tonglanliebiao'}
	];

    //绑定事件数据
	$scope.listulevent = [
		{name:'click',val:'click'},
		{name:'doubleclick',val:'dblclick'}
	];

    //文本字体数据
    $scope.componentFontFamily = [
        {name:'默认',val:'defaultFontFamily'},
        {name:'黑体',val:'HeiTi'},
        {name:'宋体',val:'SongTi'},
        {name:'Arial',val:'Arial'},
        {name:'Arial Black',val:'ArialBlack'},
        {name:'Arial Narrow',val:'ArialNarrow'},
        {name:'Verdana',val:'Verdana'},
        {name:'Georgia',val:'Georgia'},
        {name:'Times New Roman',val:'TimesNewRoman'},
        {name:'Trebuchet MS',val:'TrebuchetMS'},
        {name:'Courier New',val:'CourierNew'},
        {name:'Impact',val:'Impact'},
        {name:'Comic Sans MS',val:'ComicSansMS'},
        {name:'Tahoma',val:'Tahoma'},
        {name:'Courier',val:'Courier'},
        {name:'Lucida Sans Unicode',val:'LucidaSansUnicode'},
        {name:'Symbol',val:'Symbol'},
        {name:'Palatino Linotype',val:'PalatinoLinotype'},
        {name:'Lucida Console',val:'LucidaConsole'},
        {name:'Garamond',val:'Garamond'},
        {name:'MS Sans Serif',val:'MSSansSerif'},
        {name:'MS Serif',val:'MSSerif'},
        {name:'Bookman Old Style',val:'BookmanOldStyle'}
    ];

    //默认选择事件为第一个
	$scope.listuleventselect=$scope.listulevent[0];

    //监听
	$scope.$watch('attr', function() {
        //列表类型
		for(var i=0;i<$scope.listType.length;i++){
			if($scope.attr.listType.val==$scope.listType[i].val){
                //当前的列表类型 iframe传来的值
				$scope.listTypeSelected = $scope.listType[i];
				break;
			}
		}
        //列表圆角
		$scope.isRoundedCornerChecked=$scope.attr.isRoundedCorner;
        //第n个列表项
		$scope.listItemNo=[];
		for(var i=1;i<=$scope.attr.childCount;i++){
			$scope.listItemNo.push(i);
		}
        //当前选的是第N个列表项
		$scope.listItemNoSelected=$scope.attr.listItemNo;
        //当前列表项的链接内容
        $scope.listHrefContentInput=$scope.attr.listHrefContent;
        //当前列表项文字内容
		$scope.listItemContentInput=$scope.attr.listItemContent;
        //当前列表项是否为标题
		$scope.isTitleChecked=$scope.attr.isTitle;
        //当前列表项是否有箭头Class
		$scope.hasArrowChecked=$scope.attr.hasArrow;
        //当前列表项是否有向前Class
		$scope.hasForwardChecked=$scope.attr.hasForward;
        //当前列表项是否有气泡数字
		$scope.hasSmallCounterChecked=$scope.attr.hasSmallCounter;
        //当前列表项气泡数字内容
		$scope.smallCounterContentInput=$scope.attr.smallCounterContent;
        //当前列表项是否有小标注
		$scope.hasSmallTextChecked=$scope.attr.hasSmallText;
        //当前列表项小标注内容
		$scope.smallTextContentInput=$scope.attr.smallTextContent;
        //当前列表项正文字体
        if($scope.attr.listItemContentFontFamily != null){
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.listItemContentFontFamily.val == $scope.componentFontFamily[j].val){
                    $scope.listItemContentFontFamilySelected = $scope.componentFontFamily[j];
                }
            }
        }
	},true);
}]);
