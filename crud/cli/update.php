<?php

#step 1 : make connection
include __DIR__.'/dbconnect.php';

#step 2 : prepare the Query

$id = readline('Enter userid :');
$name = readline('Enter Name :');
$email = readline('Enter Email :');

$sql = "update emp set name = '{$name}',email='{$email}' where id = '{$id}';";

#step 3 : Execute the Query or Fire the Query
if(mysqli_query($conn,$sql)){
	if(mysqli_affected_rows($conn)>0)
	{
		echo 'Record Updated Successfully';
	}
	else{
		echo 'Cannot Update Either Record Does not exist or ID is Wrong';
	}
}
else{
	echo 'Records Not Updated Error = '.mysqli_error($conn);
}
?>