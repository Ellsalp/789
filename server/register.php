<?php
include "conn.php";
$user=$_POST["user"];
$ps=$_POST["ps"];
$ip=$_SERVER["REMOTE_ADDR"];
$sql="select count(*) as num from user_info where username='$user'";
$result=$conn->query($sql);
$row=$result->fetch_assoc();
if($row["num"]>0){
	echo "用户名已存在！";
}else{
	$str="insert into user_info (username,password,regtime,ip) values 
	('$user','$ps',now(),'$ip')";
	$conn->query($str);
	echo "注册成功！";
}
?>