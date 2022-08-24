<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		body
		{
			justify-content: center;
			display: flex;
			align-items: center;
		}
		.outer
		{
			height: 500px;
			width: 400px;
			background-color: skyblue;
			padding: 20px 30px;
			box-sizing: border-box;
		}
		.outer input
		{
			height: 30px;
			width: 100%;
			margin-bottom: 16px;
		}
		.outer .btn
		{
			height: 35px;
			width: 102%;
			background-color: orangered;
			border: none;
			color: #fff;
			font-size: 16px;
		}
		.outer h2
		{
			text-align: center;
			color: orangered;
		}

	</style>
</head>
<body>
	<div class="outer">
		<h2>REGISTRATION FORM</h2>
		<form action="insert.php" method="post">
			Name <br><input type="text" placeholder="Enter name" name="name"><br>
			Email <br><input type="email" placeholder="Enter email" name="email"><br>
			Mobile No <br><input type="number" placeholder="Enter Mobile no" name="mobile"><br>
			Class <br><input type="text" placeholder="Enter Class" name="class"><br>
			Password <br><input type="password" placeholder="Enter Password" name="pass"><br>
			<input type="submit" value="submit" class="btn">
		</form>
	</div>

	
</body>
</html>