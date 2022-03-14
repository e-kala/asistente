<?php
ini_set('display_errors', 1); 
error_reporting(E_ALL);
	
	require "./conexion.php";

	if (isset($_POST)) {
        $conectar = new conexion();
    	$conexion = $conectar->conectar();

		$remitente = "bonsaiasistente";
		$destinatario = $_POST["mail"];
		$randomkey = bin2hex(random_bytes(48));

		$sql = "SELECT correo_usuario FROM usuarios WHERE correo_usuario = '$destinatario'";
		$result = $conexion->query($sql);

		if (($result !== TRUE) && ($result->num_rows < 1))  {
			echo "<no-existe-correo>";
		} else {
			//cambiar nombre del dominio
			// $mensaje = "<a hrf='https://ekaproducciones.com/content/asistente/index.php/checkout'>Cambiar contraseña</a>\rSi no has sido tú, ignora este mensaje y verifica la seguridad de tu cuenta bonsaiasistente";
			

			// ini_set("SMTP","localhost");
			// ini_set("smtp_port","25");

			// ini_set("SMTP","smtp.gmail.com");
			// ini_set("smtp_port","465");

			$set["rkpassword"] = $randomkey;

			$set = json_encode($set);

			//guardar clave secreta en cuenta del correo especificado en columna recovery table usuarios
			$sql = "UPDATE usuarios SET recovery = '$set' WHERE correo_usuario='$destinatario'";

			$res = mysqli_query($conexion, $sql);

			//siempre que se guarde exitosamente una clave de recuperación para validación se procede con la siguiente parte del proceso (envio de correo electrónico)
			if ($res){
				$asunto = "Solicitud de cambio de contraseña, ¿Has sido tú?";
				
				$mensaje = '

				<div><h1>Solicitud de cambio de Contraseña</h1></div>

				<h3> Entra aquí: <a href="https://ekaproducciones.com/content/asistente/index.php?action=checkacp&&rk='.$randomkey.'">https://ekaproducciones.com/content/asistente/index.php?action=checkacp&&rk='.$randomkey.'</a></h3>
				<br><br>
				Si no has sido tú, ignora este mensaje y verifica la seguridad de tu cuenta bonsaiasistente


				';

				// Para enviar un correo HTML, debe establecerse la cabecera Content-type
				$headers  = 'MIME-Version: 1.0' . "\r\n";
				$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

				// Cabeceras adicionales
				$headers .= "From: $remitente". "\r\n";
				$headers .= "To: $destinatario" . "\r\n";

				// $headers = "From: $remitente\r\nReply-to: $remitente"."\r\nContent-Type:text/html";
				// header('HTTP/1.1 200 OK');

				//enviar mensaje
				if (mail($destinatario, $asunto, $mensaje, $headers)){
					//mensaje enviado con exito
					echo "<successfully-sent>";
				} else {
					 echo "<error-de-envio>";
				}
			} else {
				//error, no se pudo guardar la randomkey en recovery
				echo "<update-error-randomkey>";
			}	
		}
	} else {
		echo "NOPOST";
	}

?>
<!-- 
hacer que envie correos, antes de enviar correo primero debe verificar que el correo exista en la base de datos, y en el mensaje del correo un boton que tras ser presionado redirija a pagina de cambiar contraseña del usuario dentro de la sesión del usuario, tras cambiada la contraseña se cierra su sesión para que inicie desde cero con normalidad.

Solucionar error de premium.php, stripe, la pagina de premium se queda cargando y no abre en remoto aunque en localhost sí, tampoco muestra errores en consola  -->