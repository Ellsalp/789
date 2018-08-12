form_sunmit.onclick=function(){
	var username=input1.value;
	var password=input2.value;
	if(username!=""&&password!=""){
		post("../../server/login.php","username="+username+"&password="+password,
		function(str){
				if(str=="ok"){
					var i=document.createElement("i");
					i.innerHTML="恭喜您登录成功！2s后将跳转页面...";
					i.style.cssText = "color:green;position: absolute;top:300px;left:20px";
					myform.appendChild(i);
					var timer=setTimeout(function(){
						myform.removeChild(i);
						location.href="index.html";
					},2000)
				}else{
					var i=document.createElement("i");
					i.innerHTML="登录失败：用户名或密码不正确!";
					i.style.cssText = "color:red;position: absolute;top:300px;left:20px";
					myform.appendChild(i);
					var timer=setTimeout(function(){
						myform.removeChild(i)
					},1200)
				}
			})
		}else{
			alert("用户名或密码不能为空！")
		}
}