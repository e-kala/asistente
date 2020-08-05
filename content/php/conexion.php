
<?php

	class conexion{
		private $servidor="localhost";
		private $usuario="root";
		private $bd="asistente";
		private $password="";

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
