<?php
//wap in php to show foreach array

$data = [
[
'id'=>'1',
'name'=>'mahesh',
'class'=>'12th'
],
[
'id'=>'2',
'name'=>'vikas',
'class'=>'12th'
],
[
'id'=>'3',
'name'=>'shani',
'class'=>'12th'
]
];
foreach($data as $user){
	echo "-----------------------\n";
	echo "user id = {$user['id']} \n";
	echo "user Name = {$user['name']} \n";
	echo "user Class = {$user['class']} \n";
}

?>