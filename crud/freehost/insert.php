<?php

#step1 : make connection
include __DIR__.'/dbconnect.php';

#step2 : prepare the Query

$name = readline('Enter name:');
$email = readline('Enter Email:');

$sql = "INSERT INTO student(name,email) values('{$name}','{$email}');";


#step3 : Execute the Query or Fire the Query
if(mysqli_query($conn,$sql)){

// echo 'Record Inserted with pk = '.mysqli_insert_id($conn);
	require_once __DIR__.'/selectrecord.php';

}else{

echo 'Inserted Error'.mysqli_error($conn);
}

