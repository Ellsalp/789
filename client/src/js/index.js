
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


