function signup()
{
	var sign_name = $("#sign_name").val()
	var sign_email = $("#sign_email").val()
	var sign_pass = $("#sign_pass").val()
	console.log(sign_pass);
	$.ajax({
		url : "student/addstudent.php",
		// type : "POST",
		method : "POST",
		dataType : "json",
		data : {
			stusignup : "stusignup",
			signname : sign_name,
			signemail : sign_email,
			signpass : sign_pass
		},
		success : function(data){
			// console.log(data);
			if(data == "OK")
			{
				$('#successmsg').html("<span class='text-success'>Registration Successful !</span>");
				$('#exampleModal').modal('closeModal');
				$('#exampleModal').modal('hide');
			}else if(data == "Failed")
			{
				$('#successmsg').html("<span class='text-danger'>Registration Failed!</span>");
			}
		}
	});
}