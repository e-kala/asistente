<?php
	include '../conexion.php';
	if ($_POST) {
		session_start();

		$name = $_POST['name'];
		$category = $_POST['category'];

		$conectar = new conexion();
		$conexion = $conectar->conectar();

		function reply_query($get_name){
			if ($get_name->num_rows === 1) { 
				while ($filaso = $get_name->fetch_object()) {
					$result["infogen"] = $filaso;
	            }
				echo json_encode($result);
			} else if ($get_name->num_rows > 1) {
				while ($filaso = $get_name->fetch_object()) {
					$n = 0;
					$result["infogen" . $n++] = $filaso;
	            }
				echo json_encode($result);
			}
		}

		if ($category === "ingresos"){
			$consulta_gn = "SELECT * FROM ingresos WHERE categoria_ingreso = '$name'";
			$get_name = $conexion->query($consulta_gn);
			reply_query($get_name);

		} else if ($category === "gastos"){
			$consulta_gn = "SELECT * FROM gastos WHERE categoria_gasto = '$name'";
			$get_name = $conexion->query($consulta_gn);
			reply_query($get_name);
		}
		
	}
	
?>


