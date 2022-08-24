<?php

#step1 : make connection
include __DIR__.'/dbconnect.php';

#step2 : prepare the Query

$sql = "CREATE TABLE b122(
id int NOT NULL AUTO_INCREMENT,
name varchar(50)
email varchar(50))";

if($sql,$conn)
{
	echo "created successfully";
}
else
{
	echo "not created".mysqli_connect_error($conn);
}
