<?php 
include_once __DIR__.'/Query-Bilder/updatequery.php';
include_once __DIR__.'/functions.php';

$query = new Query();
$records = $query->select('*')->table('register')->allRecords();

 ?>
 
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Show Records</title>
</head>
<body>
	<table style="width:100% ; text-align: center;" cellspacing='0px' cellpadding='10px'   border="1">
		<tr>
			<th>id</th>
			<th>Name</th>
			<th>Email</th>
			<th>Mobile No</th>
			<th>Class</th>
			<th colspan="2">Action</th>
		</tr>
		<tr>
			<?php foreach ($records as $row) { ?>
			
			<td><?php echo $row->id; ?></td>
			<td><?php echo $row->name; ?></td>
			<td><?php echo $row->email; ?></td>
			<td><?php echo $row->mobile; ?></td>
			<td><?php echo $row->class; ?></td>
			<td><a href="<?php echo url("edit.php?id={$row->id}"); ?>">Edit</a></td>
			<td><a href="<?php echo url("delete.php?id={$row->id}"); ?>">Delete</a></td>
		</tr>
	<?php } ?>
	</table>
</body>
</html>