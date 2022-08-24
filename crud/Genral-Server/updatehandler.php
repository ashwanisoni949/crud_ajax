<?php
include_once __DIR__.'/Query-Bilder/updatequery.php';
include_once __DIR__.'/functions.php';

$name = post('name');
$email = post('email');
$mobile = post('mobile');
$class = post('class');
$pass = post('pass');
$id = post('id');

$query = new Query();
if ($query->update('register',[
'name'=>$name,
'email'=>$email,
'mobile'=>$mobile,
'class'=>$class,
'password'=>$pass
])->where('id',$id)->commit()) {
	header("location:".url("show.php?status=record-updated"));
}else{
	echo "Records not Updated";
}


?>