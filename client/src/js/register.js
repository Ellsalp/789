var btns=Array.from(cho2.children);
var divs=Array.from(document.getElementsByClassName("myform"));
divs[2].style.display=divs[1].style.display="none";
next.onclick=function(){
	var user=input1.value;
	if(user!=""){
		btns[0].className=divs[0].className="";
		divs[2].style.display=divs[0].style.display="none";
		btns[1].className="de";
		divs[1].style.display="block";
	}else{
		var noti=document.createElement("span");
		noti.innerHTML="用户名不能为空！";
		noti.style.cssText="color:red;position: absolute;left:490px;top:330px";
		center_b.appendChild(noti);
		var timer=setTimeout(function(){
				center_b.removeChild(noti);
			},1000)
	}
	form_sub.onclick=function(){
		var ps=input2.value;
	    var ps_chk=input3.value;
		if(ps==""||ps_chk==""){
			alert("密码不能为空！")
		}else{
			if(ps==ps_chk){
				post("../../server/register.php","user="+user+"&ps="+ps,
				function(str){
					if(str=="注册成功！"){
						btns[1].className=divs[1].className="";
						divs[1].style.display=divs[0].style.display="none";
						btns[2].className="de";
						divs[2].style.display="block";
						var timer=setTimeout(function(){
							location.href="index.html"
						},1000)
					}else{
						alert("用户名已存在！")
						location.href="register.html"
					}
				})	
			}else{
				var noti=document.createElement("span");
				noti.innerHTML="两次密码输入不一致或密码不能为空！";
				noti.style.cssText="color:red;position: absolute;left:490px;top:330px";
				center_b.appendChild(noti);
				var timer=setTimeout(function(){
					center_b.removeChild(noti);
				},1000)
		   }
		}
	}
}
//input1.onkeyup=input2.onkeyup=function(){
//	infi();
//}
//function infi(){
//	span1.className="";
//	span1.innerHTML="";
//}


//next.onclick=function(){
//			var user=input1.value;
//			var ps=input2.value;
//			if(user!=""&&ps!=""){
//				post("register.php","user="+user+"&ps="+ps,
//				function(str){
//					span1.innerHTML=str;
//				})
//			}else{
//				span1.innerHTML="用户名或密码不能为空！";
//				span1.className="error";
//			}
//		}
//input1.onkeyup=input2.onkeyup=function(){
//	infi();
//}
//function infi(){
//	span1.className="";
//	span1.innerHTML="";
//}
