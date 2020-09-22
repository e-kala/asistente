<?php
	
    require "../../conexion.php";
	session_start();
	$conectar = new conexion();
	$conexion = $conectar->conectar();

	
	//comprobación de resepción de datos.
	if (isset($_POST)) {
		//echo " si hay post ";
		if (isset($_POST['cuenta'])) {
			$cuenta = $_POST['cuenta'];
			//echo $cuenta . " ";
		}else{
			echo "no hay cuenta";
		}

		if (isset($_SESSION)) {
			$usuario = $_SESSION['user'];
			//echo $usuario;
		}else{
			echo "no hay usuario";;
		}
	}else{
		echo "no hay post";
	}
	//Consultas
	$consultaBalance = "SELECT balance FROM cuentas WHERE nombre_cuenta = '$cuenta'";
	$resultado = $conexion->query($consultaBalance);

    if (!empty($resultado) && $resultado->num_rows > 0) {

		$fila = $resultado->fetch_object();  // Balance
		$calculo = $fila->balance;

		$array_json_calculo_saldo_cuentas["resultado"] = $calculo;
		echo json_encode($array_json_calculo_saldo_cuentas);
	}else{

		$msj["resultado"] = "El resultado es igual o menor a 0 o no tienes registrados datos en esa cuenta";

		echo json_encode($msj);
	}
?>