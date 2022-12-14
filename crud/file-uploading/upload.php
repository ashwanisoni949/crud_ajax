<?php 

require_once __DIR__.'/query-builder/Query.php';


$files_arr = $_FILES['attachment'];

$name = $files_arr['name'];
$type = $files_arr['type'];
$error = $files_arr['error'];
$tmp_path = $files_arr['tmp_name'];
$size = $files_arr['size'];

$file_info = pathinfo($name);

$extension = $file_info['extension'];
$filename = $file_info['filename'];

$err_msg = "";
if ($error == 0) {

	$new_file = $filename."_".time().".".$extension;

	$new_location = __DIR__."/upload/{$new_file}";
	if (move_uploaded_file($tmp_path,$new_location)) {
		// echo "File uploading successfully.";

		$query = new Query();
		if($query->insert("upload",[
			'filename'=>$new_file
		])){
			// echo "File Uploaded Successfully.";
			header("location:gallery.php");
		}else{
			echo "Oops Cannot Uploaded File!!";
		}

	}else
	{
		echo "Oops somthing went wrong!!";
	}


}else
{
	$err_msg = "Error Occurred while uploading file !!";
}



 ?>