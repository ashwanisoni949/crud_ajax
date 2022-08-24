<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
		<!-- Start Header Section	 -->
			<?php 
			include "header.php";
			?>
		<!-- End Header Section	 -->
		<!-- Start Slider Section -->
		
			<!-- <div class="container-fluid">
				<div class="row">
					<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
				  <div class="carousel-inner">
				    <div class="carousel-item active" data-bs-interval="3000">
				      <img src="img/1.jpg" class="d-block" alt="..." style="height: 400px;background-image: cover;opacity: 0.7;width: 100%;">
				    </div>
				    <div class="carousel-item" data-bs-interval="3000">
				      <img src="img/3.jpg" class="d-block w-100" alt="..." style="height: 400px;background-image: cover;opacity: 0.7;">
				    </div>
				    <div class="carousel-item" data-bs-interval="3000">
				      <img src="img/8.jpg" class="d-block w-100" alt="..." style="height: 400px;background-image: cover;opacity: 0.7;">
				    </div>
				  </div>
				  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
				    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span class="visually-hidden">Previous</span>
				  </button>
				  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
				    <span class="carousel-control-next-icon" aria-hidden="true"></span>
				    <span class="visually-hidden">Next</span>
				  </button>
				</div>
				</div>
			</div> -->

			<div class="container-fluid bg-dark">
				<div class="row">
					<img src="img/1.jpg" style="height: 500px;width: 100%;box-shadow: 10px;display: block;background-size: cover;" alt="">
				</div>
			</div>
		
		<!-- End Slider Section -->
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
        	<div class="container mt-3">
        		<h2 class="text-center h1 mb-4"><i class="fas fa-cog fa-spin"></i>&nbsp;Details Here&nbsp;<i class="fas fa-cog fa-spin"></i></h2>
        		<div class="row justify-content-center">
        			<div class="col-md-3">
        				<img src="img/1.jpg" class="card-img-top" style="border-radius: 15px;" alt="Guiter">
        			</div>
        			<div class="col-md-7">
        				<div class="card-body">
        					<h5 class="card-title">Course Name:Lorem Guitar</h5>
        					<p class="card-text">Description:Lorem ipsum dolar sit amet
        					consecturt adiption value of the section</p>
        					<p class="card-text">Duration: 10 days</p>
        					<form action="" method="post">
        						<p class="card-text d-inline">Price: <small><del>&#8377 2000</del></small><span class="font-weight-border">&#8377 200</span></p>
        						<button type="submit" class="btn btn-primary text-white font-weight-bolder float-end me-5" name="buy">Buy Now</button>
        					</form>
        				</div>
        			</div>
        		</div>
        	</div>


        	<div class="container">
        		<div class="row justify-content-center mt-4">
        			<div class="col-md-10">
        			<table class="table table-bordered table-hover">
        				<thead>
        					<tr class="bg-info">
        						<th scope="col">Lesson No</th>
        						<th scope="col">Lesson No</th>
        					</tr>
        				</thead>
        				<tbody>
        					<tr>
        						<th scope="row">1</th>
        						<td>Introduction</td>
        					</tr>
        				</tbody>
        			</table>
        		</div>
        		</div>
        	</div>
        	<!-- End Main Content -->


		<!-- Start Footer Section -->
		<?php
			include "footer.php"  
		?>
		<!-- End Footer Section -->

</body>
</html>