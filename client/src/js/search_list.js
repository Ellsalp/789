//定义一个函数用来根据类名查找元素
function  getelemByCN(clas_name){
	var elem= document.getElementsByClassName(clas_name);
	return elem;
}
//定义一个函数，当传入类名的时候，得到获取到的元素的数组（用于不同类名的元素获取）
function get_up_arr(){
	var len=arguments.length;
	var arr=[];
	for(var i=0;i<len;i++){
		arr=arr.concat(Array.from(getelemByCN(arguments[i])));
	}
	return arr;
}
//调用get_up_arr()，让向下的图标在鼠标悬停的时候向上
get_up_arr("top-01-left","li1","sp3","p_up").forEach(function(elem,ind){
	var ind=ind;
	elem.onmouseover=function(){
		var changeup=getelemByCN("changeup")[ind];
		changeup.style.backgroundPosition="0 -57px";
	}
	elem.onmouseout=function(){
		var changeup=getelemByCN("changeup")[ind];
		changeup.style.backgroundPosition="0 -48px";
	}
})
//当点击li的时候切换城市
getelemByCN("top-01-left")[0].onclick=function(e){
	var el=e.target;
	if(el.nodeName=="A"){
		citychoose.innerHTML=el.innerHTML;
	}
}

//当点击商品或店铺的时候切换内容
getelemByCN("sp3")[0].onclick=function(e){
	var el=e.target;
	var sort2=getelemByCN("sort2")[0]
	if(el.nodeName=="LI"){
		sort2.innerHTML=el.innerHTML;
	}
}
//右边消息提示
get_up_arr("server","toTop").forEach(function(elem,ind){
	elem.onmouseover=function(){
		getelemByCN("alert")[ind].style.display="block";
		this.style.cursor="pointer";
	}
	elem.onmouseout=function(){
		getelemByCN("alert")[ind].style.display="none";
		this.style.cursor="";
	}
	document.querySelector("#body-right").onclick=function(e){
		var el=e.target;
		var str=el.className
		if(str=="toTop"||str=="iconfont"||str=="word"||str=="go_back"){
			document.documentElement.scrollTop=0;
		}
	}
})

//当点击搜索框下方的文字时，搜索框中的文字发生改变
var collect_a=such_as.children;
var a_len=collect_a.length;
for(var i=0;i<a_len;i++){
	collect_a[i].onclick=function(){
		sear_text.value=this.innerHTML;
	}
}

//当点击搜索的时候，跳转到列表页
good_search.onclick=function(){
	location.href="search_list.html?沙发"
}

//将url后面的数据显示在搜索框
var sear_c=decodeURIComponent(location.search.substring(1))
sear_text.value=sear_c;

//三级菜单
var flag1=1;
var flag2=1;
//list_01.onclick=function(){
//	if()
//	list_ul1.style.display="block";
//	list_01.innerHTML="&#xe6ca;";
//	list_02.onclick=function(){
//		list_ul2.style.display="block";
//		list_02.innerHTML="&#xe6ca;";
//	}
//}
list_01.onclick=function(){
	if(flag1){
		list_ul1.style.display="block";
		list_01.innerHTML="&#xe6ca;";
		flag1=0;
		list_02.onclick=function(){
			var bln2=list_02.innerHTML;
			if(flag2){
				list_ul2.style.display="block";
				list_02.innerHTML="&#xe6ca;";
				flag2=0;
			}else{
				list_ul2.style.display="none";
		        list_02.innerHTML="&#xe618;";
		        flag2=1;
			}
	    }	
	}else{
		list_ul1.style.display="none";
		list_01.innerHTML="&#xe618;";
		flag1=1;
	}	
}