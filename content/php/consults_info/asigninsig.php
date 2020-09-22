<?php
	include "../conexion.php";

	if ($_POST){
		$insignia = $_POST["insignia"];
		if (isset($insignia)){
			$conectar = new conexion();
			$conexion = $conectar->conectar();
			if(isset($_POST["usuario"])){
				$usuario = $_POST["usuario"];
				$consulta_cnf = "SELECT * FROM usuarios WHERE nombre_usuario = '$usuario'";
				$cnf_result = $conexion->query($consulta_cnf);
				$fila = $cnf_result->fetch_object();
				$data_cnf = $fila->usr_config;
				$to_json = json_decode($data_cnf, TRUE);

				if (isset($to_json[$insignia])){
				} else {
					//guardado por primera vez si no existe la insignia registrada en configuracion

					$to_json[$insignia] = "true";
					$set =  json_encode($to_json, TRUE);

					$sql = "UPDATE usuarios SET usr_config='$set' WHERE nombre_usuario='$usuario'";
					$res = mysqli_query($conexion, $sql);

					if ($res){
						echo "Primer registro exitoso" . "<br>" . $set;
					} else {
						echo "Error al registrar";
					}
				}
			} else {
				echo "undefined user";
				$conexion->close();
			}
		} else {
			echo "undefined insignia";
			$conexion->close();
		}
	}
?>