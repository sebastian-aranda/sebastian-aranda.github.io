
$(function(){
	//$('.carousel').carousel('pause');

	$.post("./news.php", function(response){
		$(".news").html(response);
	});
});

$("#contact-msg-btn").bind("click", function(){
	if (validateMsgForm().proceed){
		var data = {
			"nombre": $('#msg-nombre').val(),
			"email": $('#msg-email').val(),
			"mensaje": $('#msg-mensaje').val()
		}

		$.post("./send_message.php", data, function(response){            
	    	if (response.state == 1){
	    		//$("#msg-response").text(response.msg);
	    		alert(response.msg);
	    			
	    	}
	    	else{
	    		//$("#msg-response").text(response.msg);
	    		alert(response.msg);
	    	}
		}, 'json');
	}
});

function validateMsgForm(){
	var nombre = $('#msg-nombre').val();
    var email = $('#msg-email').val();
    var mensaje = $('#msg-mensaje').val();

    var proceed = true;
    var error = "sin errores";

    if (mensaje == "" || mensaje == null){
    	$('#msg-email').focus();
        proceed = false;
        error = "Debe ingresar un mensaje";	
    }

    if (email == "" || email == null){
    	$('#msg-email').focus();
        proceed = false;
        error = "Debe ingresar un correo";
    }

    if (nombre == "" || nombre == null){
    	$('#msg-nombre').focus();
        proceed = false;
        error = "Debe ingresar un nombre";
    }

    var response = {"proceed": proceed, "error": error};

    alert(response.error);
    return response;
}



/*$(document).ready(function(){
	if ($(window).width() <= 800){	
		$(".carousel-caption h2").hide();
	}else{
		$(".carousel-caption h2").show();

	}
});*/


