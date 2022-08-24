<?php
 include "dbConnection.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/all.min.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/responsive.css">
	<link rel="stylesheet" href="css/owl.min.css">
	<link rel="stylesheet" href="css/owl.theme.min.css">
	<link rel="stylesheet" href="css/testyslider.css">
	<link rel="stylesheet" href="css/progress.css">

	<title>laragon</title>
</head>
<style>
	.goog-te-banner-frame {
    display:none !important
    }
    body {
    top: 0px !important; 
    }
    .goog-te-gadget-icon{   display:none;
}
.goog-te-gadget-icon{ background:none !important;
} 
</style>
<body >
<div><div class="progress"></div></div>
<!-- oncontextmenu="return false;" -->
	<!-- Start Navigation Menu -->
	 <nav class="navbar navbar-expand-sm navbar-dark ps-5 fixed-top scroll">
		<div class="container-fluid ">
			

		<a class="navbar-brand" href="index1.php"><font color="yellow"><span style="font-size:35px">&#8466;</span>ARA</font><font color="orange">G</font><i class="fa-solid fa-sun fa-spin text-light"></i><font color="#90ee90">&#8469;</font> </a>
		<span class="navbar-togglerxt">Learn laragon tools</span>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		<ul class="navbar-nav custom-nav ps-5">
		<li class="nav-item custom-nav-item"><a href="index1.php" class="nav-link" id="section1">Home</a></li>
		<li class="nav-item custom-nav-item"><a href="course.php" class="nav-link">Courses</a></li>
		<li class="nav-item custom-nav-item"><a href="payment_status.php" class="nav-link">Payment Status</a></li>
		<li class="nav-item custom-nav-item"><a href="#" class="nav-link">My Profies</a></li>
		<li class="nav-item custom-nav-item"><a href="#" class="nav-link">Logout</a></li>
		<li class="nav-item custom-nav-item"><a href="#" class="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal2">Login</a></li>
		
		<!-- <li class="nav-item custom-nav-item"><a href="#" class="nav-link">Feedback</a></li> -->
		<li class="nav-item custom-nav-item"><a href="#" class="nav-link">About</a></li>
		<li class="nav-item custom-nav-item bg-danger rounded"><a href="#" class="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign Up</a></li>
		<li class="nav-item custom-nav-item bg-warning rounded ms-2"><a href="#" class="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal1">FeedBack</a></li>


		<!-- Dark/light theme switcher -->
      <li class="theme-switch ma-2">
        <input type="checkbox" class="checkbox" id="checkbox" />
        <label for="checkbox" class="label">
         
          <i class="fas fa-sun text-warning" name="partly-sunny-outline"></i>
          <i class="fas fa-moon text-light" name="moon-outline"></i>
          <!-- <ion-icon name="moon-outline" class="moon"></ion-icon> -->
          <div class="switcher"></div>
        </label>
      </li>

  <div id="google_translate_element"></div>


      <div style="" class="skiptranslate">
  <iframe frameborder="0" style="visibility:visible" 
          src="javascript:''" 
          class="goog-te-banner-frame skiptranslate" 
          id=":2.container"></iframe>
</div>


		</ul>
		</div>
		</div>
     </nav>