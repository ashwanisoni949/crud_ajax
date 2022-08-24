<?php

#step 1 : make connection
include __DIR__.'/dbconnect.php';

#step 2 : prepare the Query

$name = readline('Enter Name :');
$roll_no = readline('Enter Roll no :');
$class = readline('Enter Class :');
$branch = readline('Enter Branch :');
$email = readline('Enter Email :');
$mobile_no = readline('Enter Mobile no :');
$gender = readline('Enter Gender :');
$year = readline('Enter Year :');
$pin = readline('Enter Pin :');


$sql = "INSERT INTO student(name,roll_no,class,branch,email,mobile_no,gender,year,pin) values('{$name}','{$roll_no}',
'{$class}','{$branch}','{$email}','{$mobile_no}','{$gender}','{$year}','{$pin}')";

#step 3 : Execute the Query or Fire the Query
if(mysqli_query($conn,$sql)){
	echo 'Record Inserted with pk = '.mysqli_insert_id($conn);
}
else{
	echo 'Inserted Error'.mysqli_error($conn);
}

##################### Delete Code ########################

// #step 2 : prepare the Query
// echo PHP_EOL;
// $id = readline('Enter userid for Delete :');

// $sql = "Delete from student where id = '{$id}'";

// #step 3 : Execute the Query or Fire the Query
// if(mysqli_query($conn,$sql)){
	// if(mysqli_affected_rows($conn)>0)
	// {
		// echo 'Record Deleted Successfully';
	// }
	// else{
		// echo 'Cannot Delete Either Record Does not exist or ID is Wrong';
	// }
// }
// else{
	// echo 'Database Connection Failed'.mysqli_error($conn);
// }
?>