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
get_up_arr("top-01-left","li1","sp3").forEach(function(elem,ind){
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
//轮播图
function Slide(_box,_ul,_ol,_width,_className){
	var olli=_ol.getElementsByTagName("li");
	var len=olli.length;
	var num=0;
	var nav=_box;
	var ul1=_ul;
	var w=_width
	olli[0].className=_className;
	Array.from(olli).forEach(function(li,ind){
		li.onclick=function(){
			num=ind;
			move();
		}
	})
	function move(){
		if(num==len){
			startMove(ul1,{"left":num*-w},function(){
				ul1.style.left="0px";
			})
			num=0;
        }else{
        	startMove(ul1,{"left":num*-w})
        }
        for(var i=0;i<len;i++){
				olli[i].className=""
			}
		olli[num].className=_className
    }
	function next(){
		num++;
		move()
	}
	var timer=setInterval(next,2000);
	nav.onmouseover=function(){
		clearInterval(timer);
	}
	nav.onmouseout=function(){
		timer=setInterval(next,2000);
	}	
}
//首页轮播
Slide(getelemByCN("nav")[0],getelemByCN("ul1")[0],getelemByCN("ol1")[0],1195,"nav_selected")
Slide(getelemByCN("b-m")[0],getelemByCN("ul2")[0],getelemByCN("ol2")[0],500,"");
Slide(getelemByCN("b-m")[1],getelemByCN("ul2")[1],getelemByCN("ol2")[1],500,"");
Slide(getelemByCN("b-m")[2],getelemByCN("ul2")[2],getelemByCN("ol2")[2],500,"");

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


//选项卡
        var btns=Array.from(cho.children);
		var divs=Array.from(document.getElementsByClassName("cho_ol"));
		var len=btns.length;
		for(var i in btns){
			var btn=btns[i];
			btn.ind=i;
			btn.onmouseover=function(){
				for(var j=0;j<len;j++){
					btns[j].className="";
					divs[j].className="";
				}
				btns[this.ind].className="li_selected";
				divs[this.ind].className="ol_selected";
			}
		}

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

list_01.onclick=function(){
	var bln1=list_01.innerHTML;
	console.log(bln1=="&#xe618;")
	if(bln1=="&#xe618;"){
		list_ul1.style.display="block";
		list_01.innerHTML="&#xe6ca;";
		list_02.onclick=function(){
			var bln2=list_02.innerHTML;
			if(bln2=="&#xe618;"){
				list_ul2.style.display="block";
				list_02.innerHTML="&#xe6ca;";
			}else{
				list_ul2.style.display="none";
		        list_02.innerHTML="&#xe618;";
			}
	    }	
	}else{
		list_ul1.style.display="none";
		list_01.innerHTML="&#xe618;";
	}	
}