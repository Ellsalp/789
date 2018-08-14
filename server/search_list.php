<?php
include "conn.php";
$p=$_POST["p"];
$num=8;
$min=($p-1)*$num;
if(isSet($_POST["good_name"])){
	$good_name= $_POST["good_name"];
	$sql="select * from good_list where good_name='$good_name' order by id asc limit $min, $num";
}else{
	$user ="";
	$sql="select * from good_list order by id asc limit $min, $num";
}
$result=$conn->query($sql);
while($row=$result->fetch_assoc()){
	$id=$row["id"].",";
	$arr_price=$row["price"].",";
	$arr_his_price=$row["his_price"].",";
	$arr_detail=$row["detail"].",";
	$arr_number=$row["number"].",";
	$arr_gonum=$row["good_count"].",";
	$arr_images_src=$row["images_src"].";";
	$object=array("price"=>$arr_price,"his_price"=>$arr_his_price,"detail"=>$arr_detail,"number"=>$arr_number,"id"=>$id,"arr_gonum"=>$arr_gonum,"src"=>$arr_images_src);
	foreach ($object as $key=>$val) {
		echo $val;
	}		
}


?>