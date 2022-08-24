<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	 
	 <!-- start header section -->
	  <?php
	  include "header.php"; 
	  ?>
	 <!-- End header section -->

	   <!-- Start Course page section -->
      <div class="container-fluid bg-dark">
      	<div class="row">
      		<img src="img/8.jpg"  alt="courses" style="height: 500px; width: 100%; object-fit: cover; box-shadow: 10px;">
      	</div>
      	<!-- <div class="vid-overlay"></div> -->
      </div>
      <!-- End Course page section -->
  <!-- Start Text Banner -->
        <div class="container-fluid bg-danger txt-banner">
			<div class="row bottom-banner">
			<div class="col-sm">
			<h5><i class="fas fa-book-open mr-3 social"></i>100+ Online Courses</h5>
			</div>
			<div class="col-sm">
			<h5><i class="fas fa-users mr-3 social"></i>Expert Instructor</h5>
			</div>
			<div class="col-sm">
			<h5><i class="fas fa-keyboard mr-3 social"></i>Life Time Access</h5>
			</div>
			<div class="col-sm">
			<h5><i class="fa-solid fa-indian-rupee-sign social"></i></i>Money Back Guarantee</h5>
			</div>
			</div>
        </div>
        <!-- End Text Banner -->

      	<!-- Start Main Content -->
      	<!-- <section class="bg-dark"> -->
      		<div class="container-fluid bg-info">
      			<div class="row">
      				<div class="col-sm-12">
      					<h1 class="text-center text-warning mt-4">Payment receipt<i class="fa-brands fa-amazon-pay text-danger"></i></h1>
      					<p></p>
      				</div>
      			</div>
      			<div class="row  " style="justify-content:center;">
      				<div class="col-sm-6">
      					<form >
      						<div class="row">
							  <div class="col-md-2">
							    <!-- <label for="staticEmail2" class="visually-hidden d-inline">Email</label> -->
							    <input type="text" readonly class="form-control-plaintext d-inline" id="staticEmail2" value="Order ID:">
							  </div>
							<div class="col-md-6">
							    <label for="inputPassword2" class="visually-hidden">Password</label>
							    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
							</div>
							<div class="col-md-4">
							    <button type="submit" class="btn btn-primary mb-3">View</button>
							 </div>
							</div>
						</form>
      				</div>
      			</div>
      		</div>
      	<!-- </section> -->
      	<!-- End Main Content -->


   			<!-- Start Content section  -->
   			  <?php
   			  include "contact.php";
   			  ?>
   			<!-- End Content section  -->

	 <!-- Start footer section -->
	 <?php
	 include "footer.php"; 
	 ?>
	 <!-- End footer section -->

</body>
</html>