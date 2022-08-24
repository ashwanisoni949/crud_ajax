<?php
include_once __DIR__."/functions.php";
include_once __DIR__.'/Query-Bilder/updatequery.php';


$id = post('id');
$name = post('name');
$email = post('email');


$query = new Query();
if($query->update('emp',[
'name'=>$name,
'email'=>$email
])->where('id',$id)->commit())
{
	header("Location:".url('show.php?status=record-updated'));
	// echo "Records Updated Successfully";
}else{
	echo "Records not Updated";
}

?>