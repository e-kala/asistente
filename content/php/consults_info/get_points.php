<?php

	if ($_POST){
		include "../conexion.php";

		$conectar = new conexion();
		$conexion = $conectar->conectar();

		$usuario = $_POST["usuario"];
		$email = $_POST["email"];

		$sql = "SELECT * FROM usuarios WHERE nombre_usuario='$usuario' AND correo_usuario='$email'";
		$query = $conexion->query($sql);
		$fila = $query->fetch_object();
		$config = $fila->usr_config;

		$json = json_decode($config,true);

		$points;
		if (isset($json["points"])){
			$points = $json["points"];
		} else {
			$points = 0;
		}

		echo $points;
	}

?>