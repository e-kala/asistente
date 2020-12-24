<?php
	
	if ($_POST){
		include "../conexion.php";

		$command = $_POST["command"];

		if ($command == "all-users"){

			$consulta_gn = "SELECT * FROM usuarios";

			$conexion = new conexion();
			$conectar = $conexion->conectar();

			$get_name = $conectar->query($consulta_gn);
			$result = [];

			$n = 1;
			while ($filaso = $get_name->fetch_object()) {
				if ($filaso->nombre_usuario){
					$result["usuario-" . $n++] = $filaso->nombre_usuario;
				} else {
					$result = $result;
				}
            }
			echo json_encode($result);

		} else {
			echo "MMMMMMMMMMMMMMMM";
		}

	} else {
		echo "TTTTTTTTTT";
	}
	
?>