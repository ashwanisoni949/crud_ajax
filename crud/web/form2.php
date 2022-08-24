<?php 
include_once __DIR__.'/functions.php';

 ?>
 <!DOCTYPE html>
 <html>
 <head>
 	<meta charset="utf-8">
 	<meta name="viewport" content="width=device-width, initial-scale=1">
 	<title>Register</title>
 </head>
 <body>
 <form action="<?php echo url("registerhandler.php"); ?>" method="post">
 	Name <input type="text" name="name"/><br><br>
	Email <input type="email" name="email"/><br><br>
	<input type="submit" value="Register"/>
 </form>
 </body>
 </html>