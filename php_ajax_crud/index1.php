<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<!-- bootstrap5 css link -->
	<link rel="stylesheet" href="custom/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
    	<h1 class="text-center text-danger">PHP AJAX CRUD BY THAPA</h1>
    	<div class="float-end">
    		<!-- Button trigger modal -->
 	<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 	Register
	</button>

	<!-- Modal -->
		<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		      </div>
		      <!-- modal body -->
		      <div class="modal-body">
		        <div class="form-group">
		        	<label for="">FirstName:</label>
		        	<input type="text" name="" id="firstname" placeholder="First Name" class="form-control">
		        </div>
		        <div class="form-group mt-4">
		        	<label for="">LastName:</label>
		        	<input type="text" name="" id="lastname" class="form-control" placeholder="Last Name">
		        </div>
		        <div class="form-group mt-4">
		        	<label for="">Email Id:</label>
		        	<input type="email" name="" id="email" class="form-control" placeholder="Email Id">
		        </div>
		        <div class="form-group mt-4">
		        	<label for="">Mobile:</label>
		        	<input type="number" name="" id="mobile" class="form-control" placeholder="Mobile Number">
		        </div>
		      </div>
		      <!-- end modal body -->
		      <div class="modal-footer">
		        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  onclick="addRecord()">Save</button>
		        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		      </div>
		    </div>
		  </div>
		</div>

		<!-- ########## update model ############# -->
		<div class="modal fade" id="update_user_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		      </div>
		      <!-- modal body -->
		      <div class="modal-body">
		        <div class="form-group">
		        	<label for="update_firstname">FirstName:</label>
		        	<input type="text" name="" id="update_firstname" placeholder="First Name" class="form-control">
		        </div>
		        <div class="form-group mt-4">
		        	<label for="update_lastname">LastName:</label>
		        	<input type="text" name="" id="update_lastname" class="form-control" placeholder="Last Name">
		        </div>
		        <div class="form-group mt-4">
		        	<label for="update_email">Email Id:</label>
		        	<input type="email" name="" id="update_email" class="form-control" placeholder="Email Id">
		        </div>
		        <div class="form-group mt-4">
		        	<label for="update_mobile">Mobile:</label>
		        	<input type="number" name="" id="update_mobile" class="form-control" placeholder="Mobile Number">
		        </div>
		      </div>
		      <!-- end modal body -->
		      <div class="modal-footer">
		        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  onclick="updateUserDetails()">Update</button>
		        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		        <input type="hidden" name="" id="hidden_user_id">
		      </div>
		    </div>
		  </div>
		</div>
    	</div>

    	<h2 class="text-primary md-5 mt-5">All Records</h2>
    	<div id="records_contant">
    		
    	</div>
    </div>
    <!-- content close -->








	<!-- jquery cdn link -->
	<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
	<!-- bootstrap 5 js link -->
	<script type="text/javascript" src="custom/js/bootstrap.min.js"></script>
	<!-- customjs link -->
	<script type="text/javascript" src="custom/js/customjs/register.js"></script>
</body>
</html>