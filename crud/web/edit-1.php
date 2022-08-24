<?php 
include_once __DIR__.'/Query-Bilder/updatequery.php';
include_once __DIR__.'/functions.php';

$id = get('id');
if (!empty($id)) {
    $query = new Query();
    $record = $query->select('*')->table('emp')->where('id',$id)->first();

    // print_r($record);
}


 ?>
 <!DOCTYPE html>
 <html>
 <head>
 	<meta charset="utf-8">
 	<meta name="viewport" content="width=device-width, initial-scale=1">
 	<title>Update</title>
 </head>
 <body>
 <form action="<?php echo url("updatehandler.php"); ?>" method="post">
    <input type="hidden" name="id" value="<?php echo $record->id; ?>">
 	Name <input type="text" name="name" value="<?php echo $record->name; ?>" /><br><br>
	Email <input type="email" name="email" value="<?php echo $record->email; ?>"/><br><br>
	<input type="submit" value="Update"/>
 </form>
 </body>
 </html>