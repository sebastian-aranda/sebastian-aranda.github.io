<?php
if($_POST)
{
    $to_Email       = "aranda.sebastian@gmail.com"; //Replace with recipient email address
    $subject        = '[Contacto-DeltaG]'; //Subject line for emails
   
    //check $_POST vars are set, exit if any missing
    if(!isset($_POST["nombre"]) || !isset($_POST["email"]) || !isset($_POST["mensaje"]))
        $output = array('state'=>-1, 'text' => 'Los datos están incompletos.');

    //Sanitize input data using PHP filter_var().
    $nombre = filter_var($_POST["nombre"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $mensaje = filter_var($_POST["mensaje"], FILTER_SANITIZE_STRING);
   
    //proceed with PHP email.

    /*
    Incase your host only allows emails from local domain,
    you should un-comment the first line below, and remove the second header line.
    Of-course you need to enter your own email address here, which exists in your cp.
    */
    //$headers = 'From: your-name@YOUR-DOMAIN.COM' . "\r\n" .
    $headers = 'From: '.$email.'' . "\r\n" . //remove this line if line above this is un-commented
    'Reply-To: '.$email.'' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
   
        // send mail
    $sentMail = @mail($to_Email, $subject,"\r\n\r\n"."Cliente:\r\nNombre:".$nombre
        ."\r\n\r\n'".$mensaje."'", $headers);
   
    if (!$sentMail){
        $output = array('state'=> 0, 'msg' => 'El mail no pudo ser enviado. Contactese a: '.$email);
    }
    else{
        $output = array('state'=> 1, 'msg' => 'Gracias por enviar tu mensaje. Te responderemos a la brevedad.');
    }

    die(json_encode($output));
}