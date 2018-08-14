
//
var p=1;
var cb;
var good_name="床";
function infi(){
//	good_name=sear_text.value;
	post("../../server/search_list.php","p="+p+"&good_name="+good_name,function(str){
		var arr_tol=str.split(";");
		arr_tol.pop();
		console.log(arr_tol)
		var count=0;
		arr_tol.forEach(function(val){
			count++;
			var arr_ban=val.split(",");
			//图片
            var src="images/"+arr_ban[6]+".jpg";
            //描述
            var de_p=arr_ban[2];
            //价格
            var l_sp=arr_ban[0];
            //数量
            var num=arr_ban[5];
            //总价
            var total=parseInt(num)*parseFloat(l_sp.slice(1));
            //商品ID
            var id=arr_ban[4]
            //新建行
            var st=`<tr def="${id}">
            		<td><img src="${src}"/></td>
            		<td>${de_p}</td>
            		<td>${l_sp}</td>
            		<td><input type="button" value="-"/><input type="text" value="${num}" class="num_c"/><input type="button" value="+"/></td>
            		<td class="td_co">¥${total}</td>
            		<td><input type="button" value="删除"/></td>
            `
            tbody1.innerHTML+=st;
		})
		//获取总计
		var price_arr=get_up_arr("td_co");
		var res=0;
		price_arr.forEach(function(val){
			res+=parseFloat(val.innerHTML.slice(1));
		})
		var to_p="¥"+res;
		total_p.innerHTML=to_p;
	})
}
infi();//初始化页面,获取列表
function update_statu(){
	tbody1.onclick=function(e){
		var el=e.target;
		var tr=el.parentNode.parentNode;
		var id=tr.getAttribute("def");
		if(el.nodeName=="INPUT"&&el.value=="-"){
			var flag=0;
			post("../../server/update.php","id="+id+"&flag="+flag,function(str){
				if(str=="您是否确定删除该商品？"){
					if(confirm(str)){
						post("../../server/del.php","id="+id,function(str){
							if(str=="ok"){
								alert("删除商品成功！");
								location.reload();
							}
						})	
					}
				}else{
					location.reload()
				}
			})
		}
		if(el.nodeName=="INPUT"&&el.value=="+"){
			var flag=1;
			post("../../server/update.php","id="+id+"&flag="+flag,function(str){
				if(str=="库存不足！"){
					alert(str)
				}else{
					location.reload()
				}
			})
		}
		if(el.nodeName=="INPUT"&&el.value=="删除"){
			if(confirm("是否删除该商品？")){
				post("../../server/del.php","id="+id,function(str){
					if(str=="ok"){
						alert("删除商品成功！");
						location.reload();
					}
				})
			}
		}
	}
}
update_statu();

go_shopping.onclick=function(){
	location.href="index.html"
}
