<?php 

$conn = mysqli_connect("localhost:3308","root","","php_ajax_crud");
extract($_POST);


if(isset($_POST['readrecord'])){

	$data = '<table class="table table-bordered table-striped">
	<tr>
	<th>No.</th>
	<th>First Name</th>
	<th>Last Name</th>
	<th>Email Address</th>
	<th>Mobile</th>
	<th>Edit Action</th>
	<th>Delete Action</th>
	</tr>';
	$displayquery = "SELECT * FROM crudphp";
	$result = mysqli_query($conn,$displayquery);

	if(mysqli_num_rows($result) > 0){
		$number = 1;
		while($row = mysqli_fetch_array($result)){
			$data .= '<tr>
			<td>'.$number.'</td>
			<td>'.$row['firstname'].'</td>
			<td>'.$row['lastname'].'</td>
			<td>'.$row['email'].'</td>
			<td>'.$row['mobile'].'</td>
			<td>
			 <button onclick="GetUserDetails('.$row['id'].')" class="btn btn-primary">Edit</button>
			 </td>
			 <td>
			 <button onclick="DeleteUser('.$row['id'].')" class="btn btn-danger">Delete</button>
			 </td>
			</tr>';
			$number++;
		}
	}
	$data .= '</table>';
	echo $data;

}





// var firstname = $_POST['firstname'];
if(isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['email']) && isset($_POST['mobile']))
{
	$query = "INSERT INTO `crudphp`(firstname,lastname,email,mobile) values('$firstname','$lastname','$email','$mobile');";
	mysqli_query($conn,$query);
}



if(isset($_POST['deleteid'])){
	$userid = $_POST['deleteid'];
	$deletequery = "DELETE from crudphp where id = $userid";
	mysqli_query($conn,$deletequery);
}

  // get userid for update
  if(isset($_POST['id']) && isset($_POST['id']) != "")
  {
  	$user_id = $_POST['id'];
  	$query = "SELECT * FROM crudphp where id = '$user_id';";
  	if(!$result = mysqli_query($conn,$query)){
  		exit(mysqli_error());
  	}
  	$response = array();
  	if(mysqli_num_rows($result) > 0){
  		while($row = mysqli_fetch_assoc($result)){
  			$response = $row;
  		}
  	}
  else{
  	$response['status'] = 200;
  	$response['message'] = "Data not found";
  }
  echo json_encode($response);
}
else{
	$response['status']  = 200;
	$response['message'] = " invalid request";
}

//update table
if(isset($_POST['hidden_user_idutd'])){
	$hidden_user_idutd = $_POST['hidden_user_idutd'];
	$firstnameutd = $_POST['firstnameutd'];
	$lastnameutd = $_POST['lastnameutd'];
	$emailutd = $_POST['emailutd'];
	$mobileutd = $_POST['mobileutd'];

	$query = "UPDATE crudphp set `firstname` = '$firstnameutd',`lastname` = '$lastnameutd',`email` = '$emailutd',`mobile` = '$mobileutd' where id = '$hidden_user_idutd'";
	mysqli_query($conn,$query);

}
?>