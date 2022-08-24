<?php 

require_once __DIR__.'/query-builder/Query.php';

$query = new Query();
$filename = $query->select("filename")->table("upload")->allRecords();

// print_r($filename);




 ?>
 <!DOCTYPE html>
 <html lang="en">
 <head>
 	<meta charset="UTF-8">
 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
 	<title>Gallery</title>
 	<style>
 		.row
 		{
 			height: 200px;
 			width: 100%;
 			margin-top: 50px;
 		}
 		.col{
 			height: 100%;
 			width: 200px;
 			/*background-color: skyblue;*/
 			margin-right: 24px;
 			float: left;
 		}
 		h1{
 			text-align: center;
 			font-family: sans-serif;
 		}
 		.col img
 		{
 			height: 100%;
 			width: 100%;
 		}
 	</style>
 </head>
 <body>
 	<h1>Our Gallery</h1>
 	<div class="container">

 		<div class="row">
 			<?php foreach($filename as $images){ ?>

				<div class="col" style="margin-left: 30px;"><?php echo "<img src='upload/{$images->filename}'>"; ?></div>

		<?php	} ?>	
 						 
 		</div>
 	</div>
 </body>
 </html>