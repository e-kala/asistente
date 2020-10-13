<?php

	if (isset($_SESSION["user"])){
		$usuario = $_SESSION["user"];

		$fechaActual = date('y-m-d');
		$ampm = date("a");
		if ($ampm === "am"){
			$horaActual = date('h') . ":" . date("i") .":00";
		} else {
			$horaActual = date('G') . ":" . date("i") .":00";
		}

		$query_session = "SELECT * FROM sesiones WHERE sesion_usuario='$usuario' AND inicio_sesion_fecha='$fechaActual'";

		$init_query = $conexion->query($query_session);

		$fila = $init_query->fetch_object();
		//Registrar cada inicio de sesion con la hora en la que se inicia en el dia
		$sesion_de_hoy = "INSERT INTO sesiones(sesion_usuario, inicio_sesion_fecha, inicio_sesion_hora) VALUES('$usuario', '$fechaActual', '$horaActual')";
		$save_session = $conexion->query($sesion_de_hoy);

		//si no existe registro de sesion del dia, registrar
		if ($fila !== null){
			// echo "La sesion del dia ya se encuentra registrada";
		} else {


			//Dar 10 puntos por dia solo si se inicia sesion
			$consulta_cnf = "SELECT * FROM usuarios WHERE nombre_usuario = '$usuario'";
			$cnf_result = $conexion->query($consulta_cnf);
			$fila = $cnf_result->fetch_object();
			$config = $fila->usr_config;	

			$json = json_decode($config,true);
			$json["points"] = $json["points"] + 10;
			$jsone = json_encode($json,true);

			$update_points = $conexion->query("UPDATE usuarios set usr_config='$jsone' WHERE nombre_usuario='$usuario'");
		}

		// $puntaje = $fila->puntaje;

		// echo $puntaje;

	}

?>