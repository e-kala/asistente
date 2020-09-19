
<?php
	if ($_POST){
		include "../conexion.php";

		if (isset($_POST["groups"]) && isset($_POST["action"]) && isset($_POST["usuario"])){
			$conjuntojson = $_POST["groups"];
			$conversion = json_encode($conjuntojson, TRUE);
			$action = $_POST["action"];
			$usuario = $_POST["usuario"];

		}

		$conectar = new conexion();
		$conexion = $conectar->conectar();
		// $consultar = $conexion->query($sql);

		foreach($conjuntojson as $key => $value) {
			$key = json_encode($key);
			$value = json_encode($value);

			//Si encuentra referencia a gasto filtrar gastos
			$regexGasto = preg_match('/gasto/i', $key, $output_array,PREG_OFFSET_CAPTURE);

			//Si encuentra referencia a ingreso filtrar gastos
			$regexIngreso = preg_match('/ingreso/i', $key, $output_array,PREG_OFFSET_CAPTURE);

			//Hacer consultas y operaciones sobre gastos

			if ($regexGasto){
		    	$convaluega = json_decode($value, TRUE);
		    	$idga = $convaluega["id"];

				$sqlToDeletega = "DELETE FROM gastos WHERE id_gasto ='$idga' AND usuario_gasto='$usuario'";
				$queryGastos = $conexion->query($sqlToDeletega);
				
				if ($queryGastos === TRUE){
					echo "<delete-success-gastos>";
				} else {
					echo "<delete-error-gastos>";
				}
			}

			//Hacer consultas y operaciones sobre ingresos
			if ($regexIngreso){
				$convaluein = json_decode($value, TRUE);
		    	$idin = $convaluein["id"];

				$sqlToDeletein= "DELETE FROM ingresos WHERE id_ingreso ='$idin' AND usuario_ingreso ='$usuario'";
				$queryIngresos = $conexion->query($sqlToDeletein);

				if ($queryIngresos === TRUE){
					echo "<delete-success-ingresos>";
				} else {
					echo "<delete-error-ingresos>";
				}
			}
		}
	}
?>