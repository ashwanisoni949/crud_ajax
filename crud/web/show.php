<?php 
include_once __DIR__.'/Query-Bilder/updatequery.php';
include_once __DIR__.'/functions.php';

$query = new Query();
$records = $query->select('*')->table('emp')->allRecords();

 ?>
 
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Show Records</title>
</head>
<body>
	<table style="width:100%; text-align: center;" cellspacing='0px' cellpadding='10px' border="1">
		<tr>
			<th>id</th>
			<th>Name</th>
			<th>Email</th>
			<th>Edit</th>
			<th>Delete 1</th>
			<th>Delete 2</th>
		</tr>
		<tr>
			<?php foreach ($records as $row) { ?>
			
			<td><?php echo $row->id; ?></td>
			<td><?php echo $row->name; ?></td>
			<td><?php echo $row->email; ?></td>
			<td><a href="<?php echo url("edit-1.php?id={$row->id}"); ?>">Edit 1</a></td>
			
			<td><a href="<?php echo url("delete-1.php?id={$row->id}"); ?>">Delete 1</a></td>
			<td><a href="javascript:confirmDelete('<?php echo $row->id ?>')">Delete 2</a></td>
		</tr>
	<?php } ?>
	</table>
	<script>
		function confirmDelete(id) {
			if (window.confirm('Are you sure Delete to Records')) {
				window.location.href="<?php echo url('delete-2.php?id=')?>"+id;
			}
		}
	</script>
</body>
</html>