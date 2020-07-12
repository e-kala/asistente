
<?php

	class conexion{
		private $servidor="localhost";
		private $usuario="u599230971_asistente";
		private $bd="u599230971_asistente";
		private $password="1q-2w-3e-4r-5t-";

		public function __construct(){

			$this->servidor;
			$this->usuario;
			$this->password;
			$this->bd;
		}

		public function conectar(){
			$conectar =
			mysqli_connect(
				$this->servidor,
				$this->usuario,
				$this->password,
				$this->bd
			);
			return $conectar;
		}

	}

	

			
	class mostrar{
		public function mostrarDatos(){
			$conectar = new conectar();
			$conexion = $conectar->conexion();

			$consulta = "SELECT * FROM ingresos, gastos";
			$resultado = $conexion->query($consulta);

			if ($resultado->num_rows > 0) {
				$arreglo=array();
				while ($fila = $result->fetch_assoc()) {
					$arreglo[]=$fila;
				}
				$resultado->free();

				$json = json_encode($arreglo);
				echo $json;
			}else {

				echo 'no hay datos';
			}
		}
	}



?>
