<?php
	$conectar = new conexion();
	$conexion = $conectar->conectar();

	$usuario = $_SESSION['user'];
	$consultaIngresos = "SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario'";
	$resultadoIngresos = $conexion->query($consultaIngresos);
	$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario'");

	if (!empty($resultadoIngresos) && $resultadoIngresos->num_rows > 0) {
		$x=0;
		$totalIngresos = 0;
		$totalGastos = 0;
	
		while ($fila = $resultadoIngresos->fetch_object()) {
			$x++;
			$totalIngresos += $fila->cantidad_ingreso;


			if ($consultaGastos->num_rows > 0) {
				while ($fila = $consultaGastos->fetch_object()) {
			   	$totalGastos += $fila->cantidad_gasto;
				}
			}
		}
		echo "Total Gastos: $ {$totalGastos} <br>";
		echo "Total Ingresos: $ ". $totalIngresos . "<br>";
		echo "<br> Balance Actual: $ " .$total = $totalIngresos - $totalGastos;
	}
?>