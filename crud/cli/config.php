<?php
define('HOST','localhost:3308');
define('USER','root');
define('PASSWORD','');
define('DBNAME','app2022');

try
{
	$conn = mysqli_connect(HOST,USER,PASSWORD,DBNAME);
	if($conn)
	{
		echo "Connection Successfully \n";
	}
	else
	{
		throw new Exception();
	}
}
catch(Exception $e)
{
	echo $e->getMessage();
	exit('Database Connection Failed'.mysqli_connect_error());
}

$name = readline('Enter Name : ');
$email = readline('Enter Email : ');

$sql = "INSERT INTO emp(name,email) values('${name}','${email}')";

if(mysqli_query($conn,$sql))
{
	echo 'Data Inserted with Primary Key = '.mysqli_insert_id($conn);
}
else
{
	echo 'Cannot Data Inserted'.mysqli_connect_error($conn);
}

?>