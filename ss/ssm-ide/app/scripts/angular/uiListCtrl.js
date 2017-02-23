/**
 * Created by gyj on 14-4-19.
 */
var app = angular.module('app');
app.controller('uiListCtrl', ['$scope',function uiListCtrl($scope, $resource) {
    /********************************************
     * 复合组件
     ********************************************/
	$scope.csselem_components =
		[
//            {
//                'show': {
//                    'id':      'form',
//                    'comment': '普通表单'
//                },
//                'hide':
//                    "<div CLASS='normalDiv sortable formobj content'>"+
//                        "<form><p>表单标题</p></form>"
//                        +
//                        "</div>"
//            },

//文本展示（textShow）
            {
                'show':{
                  'id':'textShow',
                  'comment':'文本展示'
                },
                'hide':"<div class='textShow sortable textShowobj content textAlignRight defaultFontFamily'>aaa</div>"
            },

//图文展示【左右布局】（textphotoShow）
            {
                'show': {
                    'id':      'textphotoShow',
                    'comment': '图文展示（左右布局）'
                },
                'hide': "<div CLASS='textphotoShow sortable textphotoShowobj content' >"+
                    "<div class='textphotoShowL'><img src='./img/system/pic_1.jpg'/></div>"+
                    "<div class='textphotoShowR'><p class='defaultFontFamily'>aaaaaaaaaa</p></div>"+
                    "</div>"
            },

//图文展示【上下布局】（textphotoShow2）
            {
                'show': {
                    'id':      'textphotoShow2',
                    'comment': '图文展示（上下布局）'
                },
                'hide': "<div CLASS='textphotoShow2 sortable textphotoShow2obj content' >"+
                    "<div class='textphotoShowUp'><img src='./img/system/pic_1.jpg'/></div>"+
                    "<div class='textphotoShowDown'><p class='defaultFontFamily'>aaaaaaaaaa</p></div>"+
                    "</div>"
            },

//面板组（panel）
			{
				'show': {
					'id':      'panel',
					'comment': '面板组',
					'icon': '&#xe602'
				},
				'hide': '<ul CLASS="METAL panelobj content">'+
					        '<li CLASS="ARROW"><a href="#">'+
					        '<small class="defaultFontFamily">AM</small>'+
					        '<span  class="defaultFontFamily">9:40</span> <em class="defaultFontFamily">内容A</em></a></li>'+
					        '<li CLASS="ARROW"><a href="#">'+
					        '<small class="defaultFontFamily">PM</small>'+
					        '<span class="defaultFontFamily">19:40</span> <em class="defaultFontFamily">内容B</em></a></li>'+
					'</ul>'
			},

//列表组（listul）
			/*{
				'show': {
					'id':      'listul',
					'comment': '列表组',
					'icon': '&#xe602'
				},
				'hide': '<ul CLASS="ROUNDED listulobj content">' +
					        '<li CLASS="ARROW"><a href="#aa" class="defaultFontFamily">列表行一</a></li>' +
					        '<li CLASS="ARROW"><a href="#" class="defaultFontFamily">列表行二</a></li>' +
					'</ul>'
			},*/

//标题栏（toolbar）
			{
				'show': {
					'id':      'toolbar',
					'comment': '标题栏'

				},
				'hide': "<div CLASS='toolbar content toolbarobj sortable'>" +
					        "<h1 class='defaultFontFamily'>标题栏</h1>" +
					"</div>"
			},

//翻页组件（pagechange）
            {
                'show': {
                    'id':      'pagechange',
                    'comment': '翻页组件'
                },
                'hide': "<div CLASS='pagechange pagechangeobj content'>" +
                    "<a href='#11' CLASS='firstpage defaultFontFamily'>首页</a>" +
                    "<a href='#11' CLASS='prepage defaultFontFamily'>上一页</a>" +
                    "<label CLASS='pagenum defaultFontFamily'>第一页</label>"+
                    "<a href='#11' CLASS='nextpage defaultFontFamily'>下一页</a>" +
                    "<a href='#11' CLASS='lastpage defaultFontFamily'>尾页</a>" +
                    "</div>"
            },

//下边栏（bottomMenu）
        {
            'show': {
                'id':      'bottomMenu',
                'comment': '下边栏'
            },
            'hide': "<div CLASS='bottomMenu bottomMenuobj content'>" +

                "<div class='bottom_menu_a'>" +
                "<div class='bottom_pic'>"+
                "<div class='menu_real_pic pic_a'></div>"+
                "</div>"+
                "<small class='bottom_words'>主页1</small>"+
                "</div>"+

                "<div class='bottom_menu_a'>"+
                "<div class='bottom_pic'>"+
                "<div class='menu_real_pic pic_a'></div>"+
                "</div>"+
                "<small class='bottom_words'>主页2</small>"+
                "</div>"+

                "<div class='bottom_menu_a'>"+
                "<div class='bottom_pic'>"+
                "<div class='menu_real_pic pic_a'></div>"+
                "</div>"+
                "<small class='bottom_words'>主页3</small>"+
                "</div>"+
                "</div>",
            'js':'<span CLASS="bottomMenujs" >' +
                'ssM.bottomMenu();' +
                '</span>'
        },

//时间组件（timeshow）
        {
            'show': {
                'id':      'timeshow',
                'comment': '时间组件'
            },
            'hide': "<div class='WHITETIMESHOW timeshowobj content'>" +
                "<a class='timeYear timeNum'>0000</a>" +
                "<a class='timeWord'>年</a>"+
                "<a class='timeMonth timeNum'>00</a>"+
                "<a class='timeWord'>月</a>"+
                "<a class='timeDay timeNum'>00</a>"+
                "<a class='timeWord'>日</a>"+
                "<hr/>"+
                "<a class='timeHour timeNum'>00</a>"+
                "<a class='timeWord'>:</a>"+
                "<a class='timeMinute timeNum'>00</a>"+
                "<a class='timeWord'>:</a>"+
                "<a class='timeSecond timeNum'>00</a>"+
                "</div>",
            'js':'<span CLASS="timeshowjs" >' +
                'ssM.timeshow();' +
                '</span>'
        },

//图片按钮集(iconButtonDiv)
        {
            'show': {
                'id':      'iconButtonDiv',
                'comment': '图片按钮集'
            },
            'hide': "<div class='iconButtonDiv sortable iconButtonDivobj content defaultFontFamily'>" +

                "</div>"
        },

//表单组件（formDiv）
        {
            'show': {
                'id':      'formDiv',
                'comment': '表单组件'
            },
            'hide': "<div class='formDiv sortable formDivobj content defaultFontFamily'>"+
                "</div>"
        },


//表格组件（table）
        {
            'show': {
                'id':      'table',
                'comment': '表格组件',
                'icon':'&#xe606'
            },
            'hide': '<table CLASS="TABLE tableobj content">' +
                '<caption>标题</caption>' +
                '<tr>' +
                '<th>横表头1</th>' +
                '<th>横表头2</th>' +
                '<th>横表头3</th>' +
                '<th>横表头4</th>' +
                '</tr>' +
                '<tr>' +
                '<th>纵表头</th>' +
                '<td>单元格</td>' +
                '<td>单元格</td>' +
                '<td>单元格</td>' +
                '</tr>' +
                '</table>'
        }
		];

    /********************************************
     * 布局设置
     ********************************************/
	$scope.csselem_layouts =
		[
//			{
//				'show': {
//					'id':      'grid',
//					'comment': '网格布局',
//					'icon': '&#xe602'
//				},
//				'hide': '<div CLASS="UI-GRID-B gridobj " >' +
//					        '<div CLASS="UI-BLOCK-A HPOS sortable container"></div>' +
//					        '<div CLASS="UI-BLOCK-B HPOS sortable container"></div>' +
//					        '<div CLASS="UI-BLOCK-C HPOS sortable container"></div>' +
//					        '<div CLASS="UI-BLOCK-A HPOS sortable container"></div>' +
//					        '<div CLASS="UI-BLOCK-B HPOS sortable container"></div>' +
//					        '<div CLASS="UI-BLOCK-C HPOS sortable container"></div>' +
//					        '<div CLASS="UI-BLOCK-A HPOS sortable container"></div>' +
//					'</div>'
//			},



//标签布局（tabview）
			{
				'show': {
					'id':      'tabview',
					'comment': '标签布局',
			        'icon': '&#xe608'
				},
				'hide': '<div CLASS="TABVIEW tabviewobj sortable extra">' +
					        '<ul>' +
					            '<li>标签A</li>' +
					            '<li>标签B</li>' +
					        '</ul>' +
					        '<div CLASS="tabitem ">' +
					            '<div CLASS="tabitem">' +
					                '<div  CLASS="INFO sortable container">' +
					                    '<p CLASS="tabinfo">信息类的普通内容</p>' +
					                '</div>' +
					            '</div>' +
					            '<div CLASS="tabitem">' +
                                    '<div  CLASS="INFO sortable container">' +
                                        '<p CLASS="tabinfo">信息类的普通内容</p>' +
                                    '</div>' +
					            '</div>' +
					        '</div>' +
					    '</div>',
				'js':'<span CLASS="tabviewjs" >' +
					        'ssM.tab();' +
					'</span>'
			},

           
//树形布局（tree）
			{
				'show': {
					'id':      'tree',
					'comment': '树形布局',
			        'icon':'&#xe60f'
				},
				'hide': '<ul CLASS="TREE OPENNING treeobj sortable extra">' +
					        '<li CLASS="treetitle">标题A</li>' +
                            '<li CLASS="treeitem sortable container">内容3</li>' +
					        '<li CLASS="TREENODE">' +
					            '<ul CLASS="TREE OPENNING">' +
					                '<li CLASS="treetitle">标题A_A</li>' +
					                '<li CLASS="treeitem sortable container">内容1</li>' +
					                '<li CLASS="treeitem sortable container">内容2</li>' +
					            '</ul>' +
					        '</li>' +

					    '</ul>',
				'js':'<span CLASS="treejs" >' +
					        'ssM.tree();' +
					'</span>'
			}

		];


    /********************************************
     * 容器
     ********************************************/
    $scope.csselem_containers =
        [
//整行面板(normalDiv)
            {
                'show': {
                    'id':      'normalDiv',
                    'comment': '整行面板',
                    'icon':''
                },
                'hide': "<div CLASS='normalDiv normalDivBorder  normalDivobj extra'>"+
                    "<div class='normalDiv sortable container'></div>"+
                    "</div>"
            },

//面板快（blockDiv）
            {
                'show': {
                    'id':      'blockDiv',
                    'comment': '面板块'
                },
                'hide': "<div CLASS='blockDiv sortable blockDivobj extra'>"+
                    "<div class='blockDivB sortable blockDivBorder container'></div>"+
                    "<div class='blockDivB sortable blockDivBorder container'></div>"+
                    "<div class='blockDivB sortable blockDivBorder container'></div>"+
                    "</div>"

            },

//两列式面板（normalDivSplit）
            {
                'show': {
                    'id':      'normalDivSplit',
                    'comment': '两列式面板'
                },
                'hide':
                    "<div CLASS='normalDivSplitobj normalDivBorder normalDiv sortable extra'>"+
                        "<div CLASS=' normalDivSplitL  sortable container'></div>"+
                        "<div CLASS=' normalDivSplitR  sortable container'></div>"+
                        "</div>"
            },
//常用表单容器
        {
            'show': {
                'id':      'normalDivFrom',
                'comment': '表单容器',
                'icon':''
            },
            'hide': "<div CLASS='normalDiv normalDivBorder  normalDivFromobj extra'>"+

            "</div>"
        },
        ];

    /********************************************
     * 交互组件
     ********************************************/
	$scope.csselem_mutuals =
		[
//滚动焦点图（focusimg）
			{
				'show': {
					'id':      'focusimg',
					'comment': '滚动焦点图',
					'icon': '&#xe602'
				},
				'hide': '<div CLASS="FOCUS focusimgobj content" >' +

					'</div>',
				'js':'<span CLASS="focusimgjs" >' +
					        'ssM.imgSlider();' +
					'</span>'
			},

//隐藏侧边栏（swipeDiv）
            {
                'show': {
                    'id':      'swipeDiv',
                    'comment': '隐藏侧边栏'
                },
                'hide': '<div CLASS="tbox swipeDivobj content">'+

                    '</div>',
                'js':'<span CLASS="swipeDivjs" >' +
                    'ssM.swipeDiv();' +

                    '</span>'
            },

            

//二级菜单（twonav）
              {
                'show': {
                    'id':      'twonav',
                    'comment': '二级菜单'
                },
                'hide':'<div CLASS="twonav twonavobj content">' +

                    '</div>',
                'js':'<span CLASS="twonavjs" >' +
                    'ssM.TwoNav();' +
                    '</span>'
            },


//柱形图（zhuxingtu）
			{
				'show': {
					'id':      'zhuxingtu',
					'comment': '柱形图',
					'icon': '&#xe602'
				},
				'hide':
                
                '<div CLASS="zhuxingtuobj content"></div>',
               
				'id':'<span CLASS="zhuxingtuid" >' +
					        'chart2' +
					'</span>',
				'js':'<span CLASS="zhuxingtujs">' +
					        'ssM.chartBar("chart2",[20,15,3,22,43,11],' +
					        '{"title":"选课人数统计","item_width":30,' +
					        'xaixs_tick:["语文","数学","英语","物理","化学","生物"]' +
					        ',xaixs_label:"学科",yaixs_label:"选课人数"});' +
					'</span>'
			}
          
		];

    /********************************************
     * HTML基本组件
     ********************************************/
    $scope.csselem_htmlcomponents =
        [
//大按钮(button)
            {
                'show': {
                    'id':      'button',
                    'comment': '大按钮',
                    'icon': '&#xe602'
                },
                'hide': "<a CLASS='WHITEBUTTON sortable buttonobj content defaultFontFamily' href='#default' >" +
                    "button" +
                    "</a>"

            },


            //demo1
           

           
             
//图标按钮(iconButton)
            {
                'show': {
                    'id':      'iconButton',
                    'comment': '图标按钮'
                },
                'hide': 
                "<a CLASS='BUTTON  sortable iconButtonobj content defaultFontFamily' href='#default'>图标按钮</a>"
            },



           

//普通段落（normalPara）
            {
                'show': {
                    'id':      'normalPara',
                    'comment': '普通段落'
                },
                'hide': "<p CLASS='normalPara sortable normalParaobj content defaultFontFamily' >段落文字</p>"
            },

//普通标题（normalLabel）
            {
                'show': {
                    'id':      'normalLabel',
                    'comment': '普通标题'
                },
                'hide': "<label CLASS='normalLabel sortable normalLabelobj content defaultFontFamily'>标题"+
                    "</label>"
            },

//普通图片（normalImage）
            {
                'show': {
                    'id':      'normalImage',
                    'comment': '普通图片'
                },
                'hide': "<div CLASS='normalImage sortable normalImageobj content'><img src='./img/system/pic_1.jpg'>"+
                    "</div>"
            },

//普通分割线（normalLine）
            {
                'show': {
                    'id':      'normalLine',
                    'comment': '普通分割线'
                },
                'hide': "<div CLASS='normalLine sortable normalLineobj content'><hr>"+
                    "</hr></div>"
            },

//表单-文本域（inputText）
            {
                'show': {
                    'id':      'inputText',
                    'comment': '表单-文本域'
                },
                "hide":"<div class='inputText inputTextobj content'><label class='defaultFontFamily'>文本域</label></div>"
            },

//表单-单选钮（inputRadio）
            {
                'show': {
                    'id':      'inputRadio',
                    'comment': '表单-单选钮'
                },
                "hide":"<div class='inputRadio inputRadioobj content'><label>单选钮</label></div>"
            },

//表单-复选框（inputCheckbox）
            {
                'show': {
                    'id':      'inputCheckbox',
                    'comment': '表单-复选框'
                },
                "hide":"<div class='inputCheckbox sortable inputCheckboxobj content'><label>复选框</label></div>"
            },

//表单-下拉列表（inputSelect）
            {
                'show': {
                    'id':      'inputSelect',
                    'comment': '表单-下拉列表'
                },
                "hide":"<a class='inputSelect inputSelectobj content' href='#default'><label>下拉列表</label></div>"
            }
    ];

    /********************************************
     * 主题
     ********************************************/
	$scope.themes = [
		{'name': 'theme', 'comment': '黑色'} ,
		{'name': 'blue', 'comment': '深蓝'} ,
		{'name': 'lightblue', 'comment': '天蓝'} ,
		{'name': 'treeGreen', 'comment': '树绿'}
	];

    /********************************************
     * 分类栏标题
     ********************************************/
	$scope.layoutTitle = '布局设置';
	$scope.componentTitle = '复合组件';
    $scope.HtmlComponentTitle = 'html基本组件';
	$scope.mutualTitle = '交互组件';
    $scope.containerTitle='容器';
}]);

