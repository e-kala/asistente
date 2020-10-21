<?php

	include "../conexion.php";
	if ($_POST){
		$conectar = new conexion();
		$conexion = $conectar->conectar();
		session_start(); 

		$cuenta = $_POST["cuenta"];
		$usuario = $_SESSION["user"];
		if (isset($cuenta) && isset($usuario) && $cuenta !== ""){
			$consulta_cuenta = "SELECT * FROM cuentas WHERE usuario_cuenta = '$usuario' AND nombre_cuenta = '$cuenta'";
			$cuenta_result = $conexion->query($consulta_cuenta);
			$fila = $cuenta_result->fetch_object();
			$balance = $fila->balance;
			echo $balance;
		} else {
			echo "0";
			$conexion->close();
		}
		
	} 
?>