/**
 * Created by fd on 2015/9/29.
 */
//$(document).ready(function(){
//    console.log('admin页面加载完成');
//    //传到这里的localStorage是一个键值对的形式（字符串数组），需要给他转换为json格式
//    var user = JSON.parse(localStorage.getItem("user"));
//    //把localStorage中的数据赋值给js中的变量后，删除localStorage中的数据，毕竟是用户数据，localStorage是本地存储，会造成数据的泄漏
//    localStorage.removeItem("user");
//
//    for(var i in user){
//        console.log(i);
//        console.log('username:' + user[i].username);
//        console.log('password:' + user[i].password);
//        console.log('register_time:' + user[i].register_time);
//        console.log('limit:' + user[i].limit);
//        console.log('register_confirm:' + user[i].register_confirm);
//        console.log('admin:' + user[i].admin);
//        console.log('===========================================');
//    }
//
//})

/**
 * Created by Administrator on 14-5-17.
 */
var app = angular.module('admin', []);
app.controller('adminCtrl', ['$scope', '$location','$http','$window',function adminCtrl($scope, $location,$http,$window) {
    $scope.start = 0;
    $scope.showLimit = 9;
    $scope.user = JSON.parse(localStorage.getItem("admin"));


    $scope.changepassword = function changepassword() {
        var currentUser = {
            'username': $scope.user.username,
            'password': $scope.changepasswordPassword
        }
        if ($scope.changepasswordPassword == ''
            || $scope.changepasswordPasswordRepeat == ''
            || typeof $scope.changepasswordPassword == 'undefined'
            || typeof $scope.changepasswordPasswordRepeat == 'undefined') {
            $scope.changepasswordsuccess = false;
            $scope.changepasswordfaildinfo = "修改密码和确认密码不能为空！";
        } else if ($scope.changepasswordPassword != $scope.changepasswordPasswordRepeat) {
            $scope.changepasswordsuccess = false;
            $scope.changepasswordfaildinfo = "两次输入的密码不一致！";
        } else {
            $http({
                url: '/changeCurrentUserPassword',
                method: "POST",
                data: currentUser
            }).success(function (data, status, headers, config) {
                if (data.success) {
                    $('#changepassword').modal('hide');
                    $scope.changepasswordPassword = '';
                    $scope.changepasswordPasswordRepeat = '';
                    $scope.changepasswordsuccess = true;
                    alert("用户密码修改成功！");
                    console.log("用户密码修改成功！");
                } else {
                    alert("用户密码修改失败！");
                    console.log("用户密码修改失败");
                }
            }).error(function (data, status, headers, config) {
                alert("用户密码修改发生错误！");
            });
        }
    }

    $scope.manageAllUserData = function manageAllUserData() {
        console.log('3');
        $http({
            url: '/getAllUserInfo',
            method: "POST"
        }).success(function (data, status, headers, config) {
            if (data.success) {
                console.log("data.allUser  :", data.allUser);
                $scope.allUser = data.allUser;
                //localStorage.user = data.allUser;
                //$("#manageUser").modal();
                var url = 'http://' + window.location.host + '/admin';
                //这里使用localStorage是键值对的形式，所以需要一一对应地进行存储。
                //把json转换为字符串然后存储到localStorage中
                //localStorage.setItem("user", JSON.stringify(data.allUser));(不用localStorage了，这句不要了)
                //document.write(localStorage.user);这一句仅供测试
                //console.log('localStorage.user:' + localStorage.user);
                console.log("获取全部用户信息成功");
                console.log('4')
                console.log("allUser的类型为:" + typeof(data.allUser));
                console.log('allUser长度 : ' + $scope.allUser.length);
                $scope.length = $scope.allUser.length;
                console.log('length:' + $scope.length);
                //可以实现页面的跳转
                //window.location.href = url;
                //$scope.userPage();
                //$scope.createTable();
            } else {
                alert("获取全部用户信息失败！");
                console.log("获取全部用户信息失败");
            }
        }).error(function (data, status, headers, config) {
            alert("获取全部用户信息时发生错误！");
        });
    }

    $scope.manageUserSaveChange = function manageUserSaveChange(thisUser) {
        $http({
            url: '/changeOneUserInfo',
            method: "POST",
            data: thisUser
        }).success(function (data, status, headers, config) {
            if (data.success) {
                $("#manageUser").modal('hide');
                alert("用户信息修改成功！");
                console.log("用户信息修改成功！");
            } else {
                alert("用户信息修改失败！");
                console.log("用户信息修改失败");
            }
        }).error(function (data, status, headers, config) {
            alert("用户信息修改时发生错误！");
        });
    }

    $scope.manageUserDelUser = function manageUserDelUser(thisUser) {
        if (confirm("确定要删除此用户吗?删除后将不可撤销！")) {
            $http({
                url: '/delOneUser',
                method: "POST",
                data: thisUser
            }).success(function (data, status, headers, config) {
                if (data.success) {
                    $("#manageUser").modal('hide');
                    alert("删除用户成功！");
                    console.log("删除用户成功！");
                } else {
                    alert("删除用户失败！");
                    console.log("删除用户失败");
                }
            }).error(function (data, status, headers, config) {
                alert("删除用户时发生错误！");
            });
        }
    }

    $scope.go_back = function go_back(){
        var url = 'http://' + window.location.host;
        window.location.href = url;
    };

    $scope.hide = function (index){
        if(index >= $scope.start && index < ($scope.start+$scope.showLimit)){
            return false;
        }else{
            return true;
        }
    };

    $scope.page = function (flag) {
        if(flag == 'first'){
            //首页
            $scope.start = 0;
        }
        else if(flag == 'next'){
            //下一页
            if($scope.start+$scope.showLimit > $scope.allUser.length){
                return;
            }
            $scope.start = $scope.start+$scope.showLimit;
        }
        else if(flag == 'pre'){
            if($scope.start-$scope.showLimit < 0){
                return;
            }
            $scope.start = $scope.start - $scope.showLimit;
        }
        else if(flag == 'last'){
            $scope.start = parseInt($scope.allUser.length/$scope.showLimit)*$scope.showLimit;
        }
    }

    $scope.$watch('$scope.manageAllUserData',function(){
        $scope.manageAllUserData();
    })
}]);



