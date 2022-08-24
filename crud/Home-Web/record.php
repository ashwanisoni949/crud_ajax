<?php
#make connection
include __DIR__.'/dbconnect.php';
#prepare query
$sql = "select * from javahindi";
$result = mysqli_query($conn,$sql);
echo "All Records"; 
 echo "<table border='1px' cellspacing='0px' cellpadding='10px' bgcolor='orange'>
			<tr>
				<th>Id</th>
				<th>Name</th>
				<th>Email</th>
				<th>Mobile</th>
				<th>Class</th>
			</tr>";
if (mysqli_num_rows($result)>0) {
	while ($row = mysqli_fetch_assoc($result)) {
	echo "<tr>
     <td>".$row['id']." </td>
     <td>".$row['name']." </td>
     <td>".$row['email']." </td>
     <td>".$row['mobile']." </td>
     <td>".$row['class']." </td>

     <tr>";
   }
   echo "</table>";
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<a href="form.php">Back</a>
</body>
</html>

