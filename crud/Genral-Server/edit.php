<?php 
include_once __DIR__.'/Query-Bilder/updatequery.php';
include_once __DIR__.'/functions.php';


$id = get('id');
if (!empty($id)) {
	$query = new Query();
	$record = $query->select('*')->table('register')->where('id',$id)->first();

	// print_r($record);
}
?>
 

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		body
		{
			justify-content: center;
			display: flex;
			align-items: center;
		}
		.outer
		{
			height: 500px;
			width: 400px;
			background-color: skyblue;
			padding: 20px 30px;
			box-sizing: border-box;
		}
		.outer input
		{
			height: 30px;
			width: 100%;
			margin-bottom: 16px;
		}
		.outer .btn
		{
			height: 35px;
			width: 102%;
			background-color: orangered;
			border: none;
			color: #fff;
			font-size: 16px;
		}
		.outer h2
		{
			text-align: center;
			color: orangered;
		}

	</style>
</head>
<body>
	<div class="outer">
		<h2>REGISTRATION FORM</h2>
		<form action="<?php echo url("updatehandler.php"); ?>" method="post">
			<input type="hidden" name="id" value="<?php echo $record->id; ?>">
			Name <br><input type="text" name="name" value="<?php echo $record->name; ?>" ><br>
			Email <br><input type="email" name="email"value="<?php echo $record->email; ?>"><br>
			Mobile No <br><input type="number" name="mobile" value="<?php echo $record->mobile; ?>" ><br>
			Class <br><input type="text" name="class" value="<?php echo $record->class; ?>" ><br>
			Password <br><input type="password" name="pass" value="<?php echo $record->password; ?>" ><br>
			<input type="submit" value="Update" class="btn">
		</form>
	</div>
</body>
</html>