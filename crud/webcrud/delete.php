<?php 
include_once __DIR__.'/functions.php';
include_once __DIR__.'/Query-Bilder/updatequery.php';

$id = get('id');
if (!empty($id)) {
	$query = new Query();
	if($query->delete('st_detail')->where('id',$id)->commit())
	{
		header("location:".url("show.php?status=record-deleted"));
	}
}else
{
	echo "Record Cannot Delete...";
}

?>