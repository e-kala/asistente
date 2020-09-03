<?php

	include "../conexion.php";
	if ($_POST){

		$cuenta = $_POST["cuenta"];
		$usuario = $_POST["usuario"];
		$conectar = new conexion();
		$conexion = $conectar->conectar();
		$conectar = new conexion();
		$conexion = $conectar->conectar();
		$consulta_cuenta = "SELECT * FROM cuentas WHERE usuario_cuenta = '$usuario' AND nombre_cuenta = '$cuenta'";
		$cuenta_result = $conexion->query($consulta_cuenta);
		$fila = $cuenta_result->fetch_object();
		$balance = $fila->balance;
		echo $balance;

		$conexion->close();
	} 
?>