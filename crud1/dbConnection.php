<?php
define($server,"localhost:3308");
define($name,"root");
define($pass,"");
define($dbname,"crud1");

$conn = mysqli_connect($server,$name,$pass,$dbname); or exit("Connection Failed");
if($conn)
{
	?>
	<script>
		window.alert("Your Connection successfully Connnec Now");
	</script>
	<?php
}else
{
	?>
	<script>
		window.alert("Please check your db Connection");
	</script>
	<?php
}



?>