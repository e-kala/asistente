<?php

	
	include '../conexion.php';

	if ($_POST) {
		$correo = $_POST['mail'];

		$rk = $_POST['rk'];
		$recov["rkpassword"] = $rk;
		$recov = json_encode($recov);

		$conectar = new conexion();
		$conexion = $conectar->conectar();


		$renewrkclean["rkpassword"] = "";
		$renewrkclean = json_encode($renewrkclean);

		$delrk = "UPDATE usuarios SET recovery = '$renewrkclean' WHERE correo_usuario ='$correo' AND recovery = '$recov'";

		$resdel = mysqli_query($conexion, $delrk);

		if ($resdel){
			echo "<expired>";
		} else {
			echo "<error>";
		}
		
	}



?>