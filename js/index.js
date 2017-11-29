<<<<<<< HEAD

var app = angular.module('myapp',[]);
app.factory("tems",function(){
	return{
		getData:function(){
			return JSON.parse(localStorage.getItem("todos")||"[]")
		},
		saveData:function(data){
			return localStorage.setItem("todos",JSON.stringify(data))
		}
	}
})
app.controller('c',function($scope,tems){
	$scope.todos = tems.getData();

	$scope.tit = "";
	$scope.idx = 0; 
	 
	// add-tips 显示隐藏
	$scope.showTip = false;
	
	$scope.$watch("todos",function(newValue,oldValue){
		tems.saveData($scope.todos)
	},true)
	$scope.addItem = function() {
		$scope.showTip = !$scope.showTip;
	}
	//添加新的对象，给todos数组
	$scope.sure = function() {
		if($scope.tit == "" || $scope.tit == null){
			$scope.showTip = false;
			alert("未有添加分类标题，不可保存")
			return;
		}
		
		$scope.todos.push({
			tid: $scope.todos.length?$scope.todos[$scope.todos.length-1].tid+1:1,
			title : $scope.tit,
			todo : []
		})
		$scope.tit = "";
		$scope.showTip = false;
	}

	//  点击左侧 右侧呈现
	$scope.idx = 0;
	$scope.showData = "";
	$scope.passData = function(v){
		$scope.idx = v.tid-1;
		$showData = v;	
	}


	// 设置显示
	$scope.showSetting = false;
	//  设置title
	$scope.settingTit = ""
	$scope.changeTit = function(o) {
		$scope.settingTit = o.title;
		$scope.showSetting = true;
	}
	
	//  设置框点击确定
	$scope.sureSetting = function(o) {
		console.log($scope.settingTit);
		o.title = $scope.settingTit 
		$scope.showSetting = false;
	}


	//  修改内容

	$scope.id = 0;
	$scope.xiugai = function(ev,v) {
		$scope.id = v.id;
		console.log($scope.id)
		v.work = ev.srcElement.innerText ;
		console.log(ev,v)
	}

	//  列表显示/隐藏
	
	$scope.listHid = false;
	$scope.listHid1 = false;

	$scope.listHide = function() {
		$scope.listHid = !$scope.listHid;
		return $scope.flag = !$scope.flag;
	}
	$scope.flag2 = false;
	$scope.listHide1 = function() {
		$scope.listHid1 = !$scope.listHid1;
		return $scope.flag2 = !$scope.flag2;
	}

	//添加分类
	$scope.addDoing = function() {
		var len = $scope.todos[$scope.idx].todo.length;
		var id = len?$scope.todos[$scope.idx].todo[len-1].id+1:1;
		$scope.todos[$scope.idx].todo.push({
			id:id,
			work: "",
			status: false,
		})
	}


	//删除
	$scope.del=function(m){
		var id=m.id;
		var idx=$scope.idx;
		$scope.todos[idx].todo.forEach(function(val,index){
			if(id==val.id){
				$scope.todos[idx].todo.splice(index,1)
			}
		})
	}	
	
	//设置显示，分类
	$scope.delshow=false;
 	$scope.deltt=function(){
 		$scope.deltt1=!$scope.delshow;
 	}
 	$scope.delbig=function(m){
 		var d=$scope.todos;
 		d.splice(m,1);
 		$scope.deltt1=false;
 	}
 
})




=======

var app = angular.module('myapp',[]);
app.factory("tems",function(){
	return{
		getData:function(){
			return JSON.parse(localStorage.getItem("todos")||"[]")
		},
		saveData:function(data){
			return localStorage.setItem("todos",JSON.stringify(data))
		}
	}
})
app.controller('c',function($scope,tems){
	$scope.todos = tems.getData();

	$scope.tit = "";
	$scope.idx = 0; 
	 
	// add-tips 显示隐藏
	$scope.showTip = false;
	
	$scope.$watch("todos",function(newValue,oldValue){
		tems.saveData($scope.todos)
	},true)
	$scope.addItem = function() {
		$scope.showTip = !$scope.showTip;
	}
	//添加新的对象，给todos数组
	$scope.sure = function() {
		if($scope.tit == "" || $scope.tit == null){
			$scope.showTip = false;
			alert("未有添加分类标题，不可保存")
			return;
		}
		
		$scope.todos.push({
			tid: $scope.todos.length?$scope.todos[$scope.todos.length-1].tid+1:1,
			title : $scope.tit,
			todo : []
		})
		$scope.tit = "";
		$scope.showTip = false;
	}

	//  点击左侧 右侧呈现
	$scope.idx = 0;
	$scope.showData = "";
	$scope.passData = function(v){
		$scope.idx = v.tid-1;
		$showData = v;	
	}


	// 设置显示
	$scope.showSetting = false;
	//  设置title
	$scope.settingTit = ""
	$scope.changeTit = function(o) {
		$scope.settingTit = o.title;
		$scope.showSetting = true;
	}
	
	//  设置框点击确定
	$scope.sureSetting = function(o) {
		console.log($scope.settingTit);
		o.title = $scope.settingTit 
		$scope.showSetting = false;
	}


	//  修改内容

	$scope.id = 0;
	$scope.xiugai = function(ev,v) {
		$scope.id = v.id;
		console.log($scope.id)
		v.work = ev.srcElement.innerText ;
		console.log(ev,v)
	}

	//  列表显示/隐藏
	
	$scope.listHid = false;
	$scope.listHid1 = false;

	$scope.listHide = function() {
		$scope.listHid = !$scope.listHid;
		return $scope.flag = !$scope.flag;
	}
	$scope.flag2 = false;
	$scope.listHide1 = function() {
		$scope.listHid1 = !$scope.listHid1;
		return $scope.flag2 = !$scope.flag2;
	}

	//添加分类
	$scope.addDoing = function() {
		var len = $scope.todos[$scope.idx].todo.length;
		var id = len?$scope.todos[$scope.idx].todo[len-1].id+1:1;
		$scope.todos[$scope.idx].todo.push({
			id:id,
			work: "",
			status: false,
		})
	}


	//删除
	$scope.del=function(m){
		var id=m.id;
		var idx=$scope.idx;
		$scope.todos[idx].todo.forEach(function(val,index){
			if(id==val.id){
				$scope.todos[idx].todo.splice(index,1)
			}
		})
	}	
	
	//设置显示，分类
	$scope.delshow=false;
 	$scope.deltt=function(){
 		$scope.deltt1=!$scope.delshow;
 	}
 	$scope.delbig=function(m){
 		var d=$scope.todos;
 		d.splice(m,1);
 		$scope.deltt1=false;
 	}
 
})




>>>>>>> 3397cb9d087611e28dca50a82b469f12978b0a67
