<?php

#step 1 : make connection
include __DIR__.'/dbconnect.php';

$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$class = $_POST['class'];
$pass = $_POST['pass'];
#step 2 : prepare the Query

$sql = "INSERT INTO javahindi(name,email,mobile,class,password) VALUES('$name','$email','$mobile','$class','$pass')";

#step 3 : Execute the Query or Fire the Query
if(mysqli_query($conn,$sql)){
	// echo 'Record Inserted Successfully with pk = '.mysqli_insert_id($conn);
	// header(Location:"http://localhost:786/APP2021/CRUD/web/record.php");
}
else{
	echo 'Cannot Data Inserted '.mysqli_error($conn);
}



$sql = "select * from javahindi";

$result = mysqli_query($conn,$sql);
echo "All Records \n"; 
 echo "<table border='1px' cellspacing='0px' cellpadding='10px' bgcolor='orange' style='width:100%; text-align:center'>
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

