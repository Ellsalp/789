var img_sr=location.search.substring(1);
small_img.src=img_sr;
bigimg.src=small_img.src;
bigimg.style.width="1600px";
bigimg.style.height="1600px";
imgbox.onmousemove=function(e){
	var x=e.pageX-imgbox.offsetLeft-glass.offsetWidth/2;
	var y=e.pageY-imgbox.offsetTop-glass.offsetHeight/2;
	var maxX=imgbox.offsetWidth-glass.offsetWidth-2;
	var maxY=imgbox.offsetHeight-glass.offsetHeight-2;
	//边界设置
	if(x<0)x=0;
	if(y<0)y=0;
	if(x>maxX)x=maxX;
	if(y>maxY)y=maxY;
	//给放大镜定位
	glass.style.left=x+"px";
	glass.style.top=y+"px";
	//给大图片定位
	bigimg.style.left=-4*x+"px";
	bigimg.style.top=-4*y+"px";
}
imgbox.onmouseover=function(){
	//设置放大镜和大图片的显示隐藏
	glass.style.display="block"	;
	imgtobig.style.display="block";
	startMove(glass,{opacity:100});
	startMove(imgtobig,{opacity:100});
}
imgbox.onmouseout=function(){
	startMove(glass,{opacity:0},function(){
		glass.style.display="none";
	});
	startMove(imgtobig,{opacity:0},function(){
		imgtobig.style.display="none";
	});
}

//切换图片
var n=0;
go_right.onclick=function(){
	n++;
	var u_x=72*n;
	if(u_x>=504){
        n=7;
		ul_ch.style.left=-504+"px"
	}else{
		ul_ch.style.left=-u_x+"px";
	}
}
go_left.onclick=function(){
	if(n<=0){
		n=0;
		ul_ch.style.left=0+"px"
	}else{
		var le=parseInt(ul_ch.style.left)+72;
		ul_ch.style.left=le+"px";
		n--;
	}
}
var li_co=Array.from(ul_ch.children)
li_co.forEach(function(ele){
	ele.onclick=function(){
		var e_img=ele.children[0];
		var src=e_img.src;
		small_img.src=src;
		bigimg.src=small_img.src;
	}
})


