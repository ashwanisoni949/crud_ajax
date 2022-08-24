<?php
$db_host = "localhost";
$db_user = "root";
$db_password = "";
$db_name = "project";

//Create Connection
$conn = mysqli_connect($db_host,$db_user,$db_password,$db_name);

//Check Connection
if($conn->connect_error){
	die("Connection Failed");
}

?>
