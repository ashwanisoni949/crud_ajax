<?php
// $stu_name=$_POST['sname'];
echo $stu_sname=$_POST['sname'];
echo $stu_saddress=$_POST['saddress'];
echo $stu_class=$_POST['class'];
echo $stu_phone=$_POST['sphone'];

// $conn=mysqli_connect("localhost:3308","root","","crud") or die("connection failed");
//             $sql="INSERT INTO student(sname,saddress,sclass,sphone) VALUES('{$stu_sname}','{$stu_saddress}','{$stu_class}','{$stu_phone}',)";
//             $result=mysqli_query($conn,$sql) or die("query unsuccessful");
// header("Location :http://localhost:3308/crud/index.php");
// mysqli_close($conn);
$conn=mysqli_connect("localhost:3308","root","","crud") or die("connection failed");
    $sql="INSERT INTO student(sname,saddress,sclass,sphone) VALUES('{$stu_sname}','{$stu_saddress}','{$stu_class}','{$stu_phone}',)";
    $result=mysqli_query($conn,$sql) or die("query unsuccessful");
header("Location:");
mysqli_close($conn);
?>