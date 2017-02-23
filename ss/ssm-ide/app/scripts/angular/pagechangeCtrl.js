/**
 * Created by Jane Maple on 14-8-10.
 */
/**
 * Created by gyj on 14-4-19.
 */
/*********************************************
 * 描述：翻页组件（pagechange）的设置方法的参数设置
 *********************************************/
var app = angular.module('app');
app.controller('pagechangeCtrl', ['$scope', '$location',function pagechangeCtrl($scope, $location) {
    if(typeof $scope.attr == 'undefined') {
        $location.url('/');
        return;
    }

    //更改"首页"链接内容
    $scope.changeFirstPageHrefContent=function changeFirstPageHrefContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeFirstPageHrefContent',
            'attr':{'firstPageHrefContent':$scope.firstPageHrefContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改"上一页"链接内容
    $scope.changePrePageHrefContent=function changePrePageHrefContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePrePageHrefContent',
            'attr':{'prePageHrefContent':$scope.prePageHrefContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改"下一页"链接内容
    $scope.changeNextPageHrefContent=function changeNextPageHrefContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeNextPageHrefContent',
            'attr':{'nextPageHrefContent':$scope.nextPageHrefContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改"尾页"链接内容
    $scope.changeLastPageHrefContent=function changeLastPageHrefContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changeLastPageHrefContent',
            'attr':{'lastPageHrefContent':$scope.lastPageHrefContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //更改"第几页"内容
    $scope.changePageNumItemContent=function changePageNumItemContent(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePageNumItemContent',
            'attr':{'pageNumItemContent':$scope.pageNumItemContentInput}
        };
        sendMessage_funcdirective(data);
    };

    //修改文字字体
    $scope.changePageNumItemContentFontFamily=function changePageNumItemContentFontFamily(){
        var data = {
            'seq':$scope.seq,
            'directive':'changePageNumItemContentFontFamily',
            'attr':{'pageNumItemContentFontFamily':$scope.pageNumItemContentFontFamilySelected}
        };
        sendMessage_funcdirective(data);
    };

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

    //界面分组的文字（第一组）
    $scope.pagechangeTitle = '翻页组件设置';

    //监听
    $scope.$watch('attr', function() {
        //"首页"链接连接到
        $scope.firstPageHrefContentInput=$scope.attr.firstPageHrefContent;
        //"上一页"链接连接到
        $scope.prePageHrefContentInput=$scope.attr.prePageHrefContent;
        //"下一页"链接连接到
        $scope.nextPageHrefContentInput=$scope.attr.nextPageHrefContent;
        //"尾页"链接连接到
        $scope.lastPageHrefContentInput=$scope.attr.lastPageHrefContent;
        //"第几页"文字内容
        $scope.pageNumItemContentInput=$scope.attr.pageNumItemContent;
        //文字字体
        if($scope.attr.pageNumItemContentFontFamily != null){
            for(var j = 0; j < $scope.componentFontFamily.length; j++){
                if($scope.attr.pageNumItemContentFontFamily.val == $scope.componentFontFamily[j].val){
                    $scope.pageNumItemContentFontFamilySelected = $scope.componentFontFamily[j];
                }
            }
        }
    },true);
}]);
