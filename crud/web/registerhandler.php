<?php
include_once __DIR__."/functions.php";
include_once __DIR__.'/Query-Bilder/updatequery.php';

// if($_POST[''])
$name = post('name');
$email = post('email');

// echo $name;

$query = new Query();
if($query->insert('emp',[
'name'=>$name,
'email'=>$email
]))
{
	// echo "Data Inserted Successfully with PK = ".$query->getId();
	include_once __DIR__.'/show.php';
}else{
	echo "Insert Error";
}
?>