<?php
include_once __DIR__.'/functions.php';
include_once __DIR__.'/Query-Bilder/updatequery.php';

$name = post('name');
$email = post('email');
$mobile = post('mobile');
$class = post('class');

$query = new Query();
if ($query->insert('st_detail',[
'sname'=>$name,
'email'=>$email,
'mobile'=>$mobile,
'class'=>$class
])) {
	// echo "Records inserted successfully";
	header("location:".url("show.php?status=Record Inserted"));
}else{
	echo "Records Not inserted".mysqli_error($conn);
}
?>