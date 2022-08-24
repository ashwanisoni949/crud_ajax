<?php
include_once "../dbConnection.php";

if(isset($_POST['signname']) && isset($_POST['stusignup']) && isset($_POST['signemail']) && isset($_POST['signpass']))
{
	$sign_name = mysqli_real_escape_string($conn,$_POST['signname']);
	$sign_email = mysqli_real_escape_string($conn,$_POST['signemail']);
	$sign_pass = mysqli_real_escape_string($conn,$_POST['signpass']);
	$sign_pass1 = password_hash($sign_pass,PASSWORD_BCRYPT);

	$emailquery = "SELECT * FROM register where stu_email = '$sign_email'";
	print_r($emailquery);
	die;
	$query = mysqli_query($conn,$emailquery);
	$emailcount = mysqli_num_rows($query);
	if($emailcount>0)
	{
		?>
		<script>
			window.alert("email all ready exits");
		</script>
		<?php
	}else
	{
		$sql = "INSERT INTO register(stu_name,stu_email,stu_pass) VALUES('$sign_name','$sign_email','$sign_pass1')";
		if($conn->query($sql) == TRUE)
		{
			echo json_encode("OK");
		}else{
			echo json_encode("Failed");
		}
	}
}else
{
	?>
	<script>
		window.alert("not hit working process");
	</script>
	<?php
}
 


?>