<?php 
include_once __DIR__.'/functions.php';
include_once __DIR__.'/Query-Bilder/updatequery.php';



$id = get('id');
if (!empty($id)) {
	$query = new Query();
	$record = $query->select('*')->table('st_detail')->where('id',$id)->first();
	// print_r($record);
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Register</title>
</head>
<body>
	<form action="<?php echo url('updatehandler.php'); ?>" method="post">
		<input type="hidden" name="id" value="<?php echo $record->id  ?>" >
		name <input type="text" name="name" value="<?php echo $record->sname; ?>"><br><br>
		email <input type="email" name="email" value="<?php echo $record->email; ?>"><br><br>
		mobile No <input type="number" name="mobile" value="<?php echo $record->mobile; ?>"><br><br>
		Class <input type="text" name="class" value="<?php echo $record->class; ?>"><br><br>
		<input type="submit" value="Update">
	</form>
</body>
</html>