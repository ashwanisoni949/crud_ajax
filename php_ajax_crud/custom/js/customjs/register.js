	$(document).ready(function(){
		readRecords();
	});

	function readRecords(){
		var readrecord = "readrecord";
		$.ajax({
			url : "backend1.php",
			type : "POST",
			data : { readrecord : readrecord},
			success : function(resp,status){
				$('#records_contant').html(resp);
			} 
		});
	}


	function addRecord(){
 	var firstnames = $('#firstname').val();
 	var lastname = $('#lastname').val();
 	var email = $('#email').val();
 	var mobile = $('#mobile').val();

 	$.ajax({
 		url : "backend1.php",
 		type : "POST",
 		data : {firstname : firstnames,
 			lastname : lastname,
 			email : email,
 			mobile : mobile,
 		},
 		success : function(resp,status){
 			readRecords();
 		}
 	});
 }


  function DeleteUser(deleteid){
  	
  	var conf = confirm('ARE YOU SURE');
  	if(conf == true){
  		$.ajax({
  			url : "backend1.php",
  			type : "POST",
  			data : { deleteid : deleteid},
  			success : function(resp,status){
  				readRecords();
  			}
  		});
  	}
  }


  function GetUserDetails(id){
  	$('#hidden_user_id').val(id);
  	// we use three parameter
  	$.post("backend1.php",{
  		id:id
  	},function(data,status){
  		// json format to convert javascript object
  		var user = JSON.parse(data);
  		// here user.firstname , firstname is database
  		$('#update_firstname').val(user.firstname);
  		$('#update_lastname').val(user.lastname);
  		$('#update_email').val(user.email);
  		$('#update_mobile').val(user.mobile);
  	}
  	);
  	$('#update_user_modal').modal('show');
  }


  function updateUserDetails() {
  	var firstnameutd = $('#update_firstname').val();
  	var lastnameutd = $('#update_lastname').val();
  	var emailutd = $('#update_email').val();
  	var mobileutd = $('#update_mobile').val();
  	
  	var hidden_user_idutd = $('#hidden_user_id').val();

  	$.post("backend1.php",{
  		hidden_user_idutd : hidden_user_idutd,
  		firstnameutd : firstnameutd,
  		lastnameutd : lastnameutd,
  		emailutd : emailutd,
  		mobileutd : mobileutd,
  	},
  	function(data,status){
  		$('#update_user_modal').modal("hide");
  		readRecords();
  	}
  	);
  }
