//将url后面的数据显示在搜索框
var sear_c=decodeURIComponent(location.search.substring(1))
sear_text.value=sear_c;

//三级菜单
var flag1=1;
var flag2=1;
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
//
var p=1;
var cb;
var good_name;
function infi(){
	good_name=sear_text.value;
	post("../../server/search_list.php","p="+p+"&user="+good_name,function(str){
		var arr_tol=str.split(";");
		arr_tol.pop();
		console.log(arr_tol)
		var count=0;
		arr_tol.forEach(function(val){
			count++;
			var arr_ban=val.split(",");
            var label_div=document.createElement("div");
            var label_img=document.createElement("img");
            label_img.src="images/"+arr_ban[5]+".jpg";
            var label_p=document.createElement("p");
            label_p.innerHTML=arr_ban[2];
            var label_h5=document.createElement("h5");
            var label_span=document.createElement("span");
            label_span.innerHTML=arr_ban[0];
            var label_em=document.createElement("em");
            label_em.innerHTML=arr_ban[1];
            var label_h4=document.createElement("h4");
            label_h4.innerHTML="库存"+arr_ban[3];
            var label_input=document.createElement("input");
            label_input.value="加入购物车";
            label_h5.appendChild(label_span);
            label_h5.appendChild(label_em);
            label_div.appendChild(label_img);
            label_div.appendChild(label_p);
            label_div.appendChild(label_h5);
            label_div.appendChild(label_h4); 
            label_div.appendChild(label_input); 
            label_input.type="button";
            label_input.style.cssText="width:92px;height:30px;border:1px solid #EEEEEE;padding-left:2px;border-radius:4px;margin:0 0 10px 10px"
            //给每个input的标签增加类名
            label_input.className="creat_";
            //给每个input标签增加自定义属性(将每个商品在数据库中id存在input标签的自定义属性上)
            label_input.define_e=arr_ban[4];
            con_box.appendChild(label_div);
            label_div.style.cssText="float:left;width:22%;margin:10px 12px;text-align:left;background-color:white";
		})
		//获取页面上所有类名为creat_的input
		var input_arr=get_up_arr("creat_");
		input_arr.forEach(function(elem){
			elem.onclick=function(){
				alert(elem.define_e)
			}
		})

	})
}
infi();//初始化页面,获取列表
function get_count(){
	post("../../server/count.php","count=0"+"&good_name="+good_name,function(str){
		total.innerHTML=str;
	})
}
get_count();//初始化页面,获取列表总页数
//上一页
last_p.onclick=function(){
	con_box.innerHTML="";
	p--;
	if(p<1){
		alert("已经是当前第一页了！");
		location.reload();
	}else{
		infi();
	}
	return false;
}
//下一页
next_p.onclick=function(){
	con_box.innerHTML="";
	p++;
	if(p>total.innerHTML){
		alert("已经是最后一页！");
		location.reload();
	}else{
		infi();
	}
	return false;
}
	