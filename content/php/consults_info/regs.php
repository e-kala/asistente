<?php
	include '../conexion.php';
	if ($_POST) {
		session_start();

		$name = $_POST['name'];
		$category = $_POST['category'];
		$conectar = new conexion();
		$conexion = $conectar->conectar();

		function reply_query($get_name, $category){
			$result = [];
			if ($category === "ingresos"){
				if ($get_name->num_rows === 1) { 
					while ($filaso = $get_name->fetch_object()) {
						if ($filaso->usuario_ingreso === $_SESSION['user']){
							$result["infogen"] = $filaso;
							$result["category"] = $category;
							$result["multiple"] = FALSE; 
						} else {
							$result = $result;
						}
		            }
					echo json_encode($result);
				} else if ($get_name->num_rows > 1) {
					$n = 1;
					while ($filaso = $get_name->fetch_object()) {
						if ($filaso->usuario_ingreso === $_SESSION['user']){
							$result["infogen" . $n++] = $filaso;
							$result["category"] = $category;
							$result["multiple"] = TRUE;
						} else {
							$result = $result;
						}
		            }
					echo json_encode($result);
				} else {
					echo '{"infogen" : "not found"}';
				}
			} else {
				if ($get_name->num_rows === 1) { 
					while ($filaso = $get_name->fetch_object()) {
						if ($filaso->usuario_ingreso === $_SESSION['user']){
							$result["infogen"] = $filaso;
							$result["category"] = $category;
							$result["multiple"] = FALSE; 
						} else {
							$result = $result;
						}
		            }
					echo json_encode($result);
				} else if ($get_name->num_rows > 1) {
					$n = 1;
					while ($filaso = $get_name->fetch_object()) {
						if ($filaso->usuario_gasto === $_SESSION['user']){
							$result["infogen" . $n++] = $filaso;
							$result["category"] = $category;
							$result["multiple"] = TRUE;
						} else {
							$result = $result;
						}
		            }
					echo json_encode($result);
				} else {
					echo '{"infogen" : "not found"}';
				}
			}
		}

		function action($category, $name, $conexion){
			if ($category === "ingresos"){
				$consulta_gn = "SELECT * FROM ingresos WHERE categoria_ingreso LIKE '%$name%'";
				$get_name = $conexion->query($consulta_gn);
				reply_query($get_name, $category);

			} else if ($category === "gastos"){
				$consulta_gn = "SELECT * FROM gastos WHERE categoria_gasto LIKE '%$name%'";
				$get_name = $conexion->query($consulta_gn);
				reply_query($get_name, $category);
			}
		}

		action($category, $name, $conexion);
		
	}
	
?>


