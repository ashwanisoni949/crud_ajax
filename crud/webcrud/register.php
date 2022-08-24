<?php 
include_once __DIR__.'/functions.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Register</title>
</head>
<body>
	<form action="<?php echo url('handler.php'); ?>" method="post">
		name <input type="text" name="name"><br><br>
		email <input type="email" name="email"><br><br>
		mobile No <input type="number" name="mobile"><br><br>
		Class <input type="text" name="class"><br><br>
		<input type="submit" value="Register">
	</form>
</body>
</html>