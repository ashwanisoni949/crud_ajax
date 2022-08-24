<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		body {
  height: 1000px;
}

.progress {
  position: fixed;
  width: 0%;
  height: 5px;
  background: red;
  /*background-color: linear-gradient(135deg right to left,red,blue);*/
}
	</style>
</head>
<body>


<div><div class="progress"></div></div>


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script>
		$(window).scroll(function() {
  var percent = $(document).scrollTop() / ($(document).height() - $(window).height()) * 100;
  $(".progress").css('width', percent + '%');
})
	</script>


</body>
</html>