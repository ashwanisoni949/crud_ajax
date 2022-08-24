<?php

include __DIR__.'/dbconnect.php';

require __DIR__.'/vendor/autoload.php';

$table = new LucidFrame\Console\ConsoleTable();
$table
	->addHeader('S.N')
    ->addHeader('Id')
    ->addHeader('Name')
    ->addHeader('Email');


$sql = "select * from emp";

$result = mysqli_query($conn,$sql);
 
if (mysqli_num_rows($result)>0) 
{
	$data = [];
	while ($row = mysqli_fetch_array($result,MYSQLI_BOTH)) {
	 $data[] = $row;   
	}
}
else if(mysqli_num_rows($result)==0)
{
	echo "No Record Found";
}
else
{
	echo "Connection Failed".mysqli_error($conn);
}

$i=1;
foreach ($data as $row) {

$table->addRow()
	 		->addColumn($i)
        	->addColumn($row[0])
        	->addColumn($row[1])
        	->addColumn($row[2]);
       $i++;
   }
   $table->display();
?>