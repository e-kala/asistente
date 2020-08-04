<?php
	//Algoritmo
	//select from cuentas where usuario y cuenta tal ok
	//seleccionas una cuenta se hace la consulta a gastos he ingresos de la cuenta seleccionada
	//se hace el cálculo sumas y restas y devuelve un valor
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
	$consultaIngresosGen = "SELECT * FROM ingresos 
							WHERE usuario_ingreso = '$usuario' 
							AND cuenta_ingreso = '$cuenta'
						   ";
	
	$consultaGastosGen = "	SELECT * FROM gastos 
							WHERE usuario_gasto = '$usuario'
							AND cuenta_gasto = '$cuenta'
						 ";
	
	$resultadoIngresosGeneral = $conexion->query($consultaIngresosGen);
	$resultadoGastosGeneral = $conexion->query($consultaGastosGen);

    if (!empty($resultadoIngresosGeneral) && $resultadoIngresosGeneral->num_rows > 0) {
		$x=0;
		$totalIngresos = 0;
		$totalGastos = 0;
		$totalIngresosGeneral = 0;
		$totalGastosGeneral = 0;

		while ($fila = $resultadoIngresosGeneral->fetch_object()) { // Ingresos totales
			$totalIngresosGeneral += $fila->cantidad_ingreso;
		}

		while ($fila = $resultadoGastosGeneral->fetch_object()) { // Gastos totales
			$totalGastosGeneral += $fila->cantidad_gasto;
		}

		//echo "total de ingresos: $" . $totalIngresosGeneral . "\n";
		//echo "total de gastos: $" . $totalGastosGeneral . "\n";
		$calculo = $totalIngresosGeneral - $totalGastosGeneral;
		//echo "Cálculo Saldo Actual: $" . $calculo;

		/*
		echo $totalGastos .$totalGastos;
		echo $totalIngresos. $totalIngresos;
		echo $total = $totalIngresos - $totalGastos.$total = $totalIngresos - $totalGastos ;
		*/
		$array_json_calculo_saldo_cuentas["resultado"] = $calculo;
		echo json_encode($array_json_calculo_saldo_cuentas);
	}else{

		$msj["resultado"] = "El resultado es igual o menor a 0 o no tienes registrados datos en esa cuenta";

		echo json_encode($msj);
	}
?>