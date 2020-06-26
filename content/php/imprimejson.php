$consulta = "SELECT * FROM pagos";
			$resultado = $conexion->query($consulta);

			if ($resultado->num_rows > 0) {
				$arreglo=array();
				while ($fila = $resultado->fetch_assoc()) {
					$arreglo[]=$fila;
				}
				$resultado->free();

				$json = json_encode($arreglo);
				echo $json;
			}else {

				echo 'no hay datos';
			}