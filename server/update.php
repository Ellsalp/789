<?php
include "conn.php";
$id=$_POST["id"];
$flag=$_POST["flag"];
//获取数据库中的商品数量
$sql1="select good_count from good_list where id='$id'";
$result=$conn->query($sql1);
$row=$result->fetch_assoc();
$a=$row["good_count"];
if($flag){
	$a=$a+1;
	//获取数据库中商品的最大库存
	$sql3="select number from good_list where id='$id'";
	$result=$conn->query($sql3);
	$row=$result->fetch_assoc();
	$max=$row["number"];
	//判断数量是否超出库存
	if($a>$max){
		echo "库存不足！";
	}else{
		$sql2="update good_list set good_count='$a' where id='$id'";
		$conn->query($sql2);
		$result=$conn->query($sql1);
		$row=$result->fetch_assoc();
		$add=$row["good_count"];
		echo $add;
	}
}else{
	$a=$a-1;
	//判断数量为0
	if($a==0){
		echo "您是否确定删除该商品？";
	}else{
		$sql2="update good_list set good_count='$a' where id='$id'";
		$conn->query($sql2);
		$result=$conn->query($sql1);
		$row=$result->fetch_assoc();
		$reduce=$row["good_count"];
		echo $reduce;
	}
}
?>