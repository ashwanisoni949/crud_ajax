<?php 
require_once __DIR__.'/api/functions.php';

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
	<style>
		*
		{
			font-family: arial;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="row mt-4">
			<div class="col-sm-4">
				<form id="form">
					<h3 class="my-4 text-center">Register Here</h3>
		        	<div class="input-group mb-3">
		        		<input type="text" class="form-control" id="name" placeholder="Enter Full Name">
		        	</div>
		        	<div class="input-group mb-3">
		        		<input type="text" class="form-control" id="email" placeholder="Enter Email">
		        	</div>
		        	 
		        	<input type="button" id="submit" value="Register" class="btn btn-success mb-5">
		        	<input type="reset" id="resetid" value="Reset" class="btn btn-danger mb-5">
		        	<input type="button" style="display: none;" id="update" value="Update" class="btn btn-warning mb-5">
		         </form>
			</div>
			<div class="col-sm-8">
				<table class="table table-striped w-100 text-center">
				  <tr>
				  	<th>Id</th>
				  	<th>Name</th>
				  	<th>Email</th>
				  	<th>Edit</th>
				  	<th>Delete</th>
				  </tr>
				  <tbody id="records">

			      </tbody>
				</table>
			</div>
		</div>
	


	</div>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

	<script>

	$(document).ready(function(){
       load_emp_data();

       $("#submit").click(function(){
         
        var name = $("#name").val();
        var email = $("#email").val();
            if(name==""){
                window.alert("Name is required");
            }
     
            if(email==""){
                window.alert("Email is required");
            }

            if(name!="" && email!=""){
                insert_emp_data(name,email);
            }
            
       })

       //Update Logic
       $("#update").click(function(){
            let name = $("#name").val();
            let email = $("#email").val();
            let id = $("#hidden-id").val();

            updateEmp(id, name, email);
       });

       //Reset Logic
       $("#resetid").click(function(){
           let id = $("#hidden-id").val();
            get_emp_data(id);
       });
});

function load_emp_data(){

    $.ajax({
        url:"<?php echo url('api/getemp.php')?>",
        type:"GET",
        success:function(response){
            if(response.status==true && response.code ==200){
                let output = ``;
                response.data.forEach(function(emp,index){
                    output = output +`                
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.email}</td>
                <td><a href="javascript:handleEdit('${emp.id}');" class="btn btn-warning">Edit</a></td>
                <td><a href="javascript:handleDelete('${emp.id}');" class="btn btn-danger">Delete</a></td>
            </tr>`;
                });

            $("#records").html(output);

            }else{
                console.log(response.message);
            }
        }
    });
    
}
function handleEdit(id)
{
    $("#update").show();
    $("#submit").hide();
    $("#hidden-id").remove();

    get_emp_data(id);
}
function get_emp_data(id)
{
    $.ajax({
        url : "<?php echo url('api/getoneemp.php')  ?>",
        type : "POST",
        data : {
            'id': id
        },
        success : function(response)
        {
            if(response.code== 200 && response.status == true)
            {
                console.log(response.data);
                var emp = response.data;
                let name = emp.name;
                let email = emp.email;
                let  id   =    emp.id;
                $("#name").val(name);
                $("#email").val(email);
                $("#form").append(`<input type="hidden" id="hidden-id" value="${id}"> `)
            }else{
                window.alert(response.message);
            }
        }
    });
}


function insert_emp_data(name,email){
    $.ajax({
        url:"<?php echo url('api/addemp.php'); ?>",
        type:"POST",
        data:{
            "name":name,
            "email":email,
        },
        success:function(response){
            if(response.code == 200 && response.status == true){
                //window.alert(response.message);
                $("#name").val("");
                $("#email").val("");
            }else{
                window.alert(response.message);
                $("#name").val("");
                $("#email").val("");
            }
            load_emp_data();
        }
    })
}

function handleDelete(id){
    
    if(window.confirm("Do you want to Delete ?")){
        $.ajax({
        url:"<?php echo url("api/deleteEmp.php"); ?>",
        type:"POST",
        data:{"id":id},
        success:function(response){
            if(response.status == true && response.code == 200){
                load_emp_data();
            }else{
                window.alert(response.message);
            }
        },

    });
    }
    
}

function updateEmp(id, name, email){
    $.ajax({
        url:"<?php echo url('api/updateEmp.php'); ?>",
        type:"POST",
        data:{
            "id":id,
            "name":name,
            "email":email
        },
        success:function(response){
                if(response.code == 200 && response.status ==true)
                {
                    load_emp_data();
                    $("#name").val("");
                    $("#email").val("");
                    $("#hidden-id").remove();
                    $("#update").hide();
                    $("#submit").show();
                }else{
                    window.alert(response.message);
                }
        }
    });
}
	</script>

	 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>