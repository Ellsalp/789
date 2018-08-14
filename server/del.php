<?php
include "conn.php";
$id=$_POST["id"];
$sql="delete from good_list where id=".$id;
$conn->query($sql);
echo "ok";
?>