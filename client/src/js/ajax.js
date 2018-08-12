function get(url,fn){
	var  xhr;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject("Msxml2.XMLHTTP");
	};
	xhr.open("GET",url,true);
	xhr.send();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			if(fn){
				fn(xhr.responseText);
			}
		}
	}
}

function post(url,data,fn){
	var  xhr;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject("Msxml2.XMLHTTP");
	};
	xhr.open("POST",url,true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send(data);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			if(fn){
				fn(xhr.responseText);
			}
		}
	}
}
