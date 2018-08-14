<?php
include "conn.php";
$count=$_POST["count"];
if(isSet($_POST["good_name"])){
	$good_name = $_POST["good_name"];
	$sql="select * from good_list where good_name='$good_name' order by id asc";
}else{
	$good_name="";
	$sql="select * from good_list order by id asc";
}
$result=$conn->query("$sql");
while($row=$result->fetch_assoc()){
	$count++;
}
echo ceil($count/8);
?>