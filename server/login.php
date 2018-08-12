<?php
include "conn.php";
$username=$_POST["username"];
$password=$_POST["password"];
$ip=$_SERVER['REMOTE_ADDR'];
$sql="select count(*) as num from user_info where username='$username'and password='$password'";
$result=$conn->query($sql);
$row=$result->fetch_assoc();
if($row["num"]>0){
	echo "ok";
}else{
	echo "登录失败";
}

?>