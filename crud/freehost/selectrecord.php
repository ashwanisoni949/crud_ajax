<?php

include __DIR__.'/dbconnect.php';

require __DIR__.'/vendor/autoload.php';

$table = new LucidFrame\Console\ConsoleTable();
$table
	->addHeader('S.N')
    ->addHeader('Id')
    ->addHeader('Name')
    ->addHeader('Email');

$sql = "select * from student";

$result = mysqli_query($conn,$sql);
 
if (mysqli_num_rows($result)>0) {
	$i=1;
	while ($row = mysqli_fetch_assoc($result)) {
	 $table->addRow()
	 		->addColumn($i)
        	->addColumn($row['id'])
        	->addColumn($row['name'])
        	->addColumn($row['email']);
       $i++;
   }
   $table->display();
   
}
else if(mysqli_num_rows($result)==0)
{
	echo "No Record Found";
}
else
{
	echo "Connection Failed".mysqli_error($conn);
}

?>