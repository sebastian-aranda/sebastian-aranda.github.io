$('.carousel').carousel('pause');


var imagenes = [];
var nombres = ["Bolsas de congelamiento NL (CryoStore Freezing Bag)", "DMSO USP", "Sistemas de almacenaje"];
var descripciones = ["Las bolsas de congelamiento Origen Cryostore es una forma segura y económica para crioreservar los componentes sanguíneos.<br>La bolsa Cryostore ha recibido la autorización de comercialización de la FDA,  y se encuentra indicada para la preservación criogénica de sangre y sus componentes, en nitrógeno líquido. Está hecha de película de EVA, que combina la resistencia y flexibilidad necesarias para entregar estabilidad en nitrógeno liquido,con una excelente flexibilidad, y relación impacto/resistencia a la perforación, así como una buena claridad óptica. EVA tiene una baja transmisión de vapor de agua y buenas propiedades de barrera al gas, que ayuda a preservar la integridad de los componentes de la sangre.",
	"Lorem 2",
"Lorem 3"];

//Primer elemento
$(".producto-nombre").text(nombres[0]);
$(".producto-descripcion").html(descripciones[0]);


$(".producto").on("click", function(){
	$(".producto").removeClass("selected");
	$(this).addClass("selected");

	var index = Math.floor($(this).index()/2);
	$(".producto-nombre").text(nombres[index]);
	$(".producto-descripcion").html(descripciones[index]);
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