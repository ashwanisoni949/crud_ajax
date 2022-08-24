<?php 
include_once __DIR__.'/functions.php';
include_once __DIR__.'/Query-Bilder/updatequery.php';


$id = post('id');
$name = post('name');
$email = post('email');
$mobile = post('mobile');
$class = post('class');

$query = new Query();
if ($query->update('st_detail',[
'sname'=>$name,
'email'=>$email,
'mobile'=>$mobile,
'class'=>$class
])->where('id',$id)->commit()) {
	header("location:".url("show.php?status=record-updated"));
}else{
	echo "Record Cannot Update..";
}

?>