<?php
include_once __DIR__."/functions.php";
include_once __DIR__.'/Query-Bilder/updatequery.php';

// if($_POST[''])
$name = post('name');
$email = post('email');
$mobile = post('mobile');
$class = post('class');
$pass = post('pass');
// echo $name;

$query = new Query();
if($query->insert('register',[
'name'=>$name,
'email'=>$email,
'mobile'=>$mobile,
'class'=>$class,
'password'=>$pass
]))
{
	// echo "Data Inserted Successfully with PK = ".$query->getId();
	include_once __DIR__.'/show.php';
}else{
	echo "Insert Error";
}
?>