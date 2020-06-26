
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
			$conectar = mysqli_connect(
				$this->servidor,
				$this->usuario,
				$this->password,
				$this->bd
			);
			return $conectar;
			/*
			* return devuelve el control del programa al módulo que lo invoca.
			* La ejecución vuelve a la siguiente expresión después del módulo que lo invoca.
			* 
			* Si se llama desde una función, la sentencia return inmediatamente termina la 
			* ejecución de la función actual, y devuelve su argumento como el valor de 
			* la llamada a la función. return también termina la ejecución de una sentencia 
			* eval() o un archivo de script. 
			*/
		}

	}

	$obj = new conexion();
	$conexion = $obj->conectar();
	
	
	class mostrar{
		public function mostrarDatos(){
			
			global $conexion;
			/* 
			 *  En PHP, las variables globales deben ser declaradas globales 
			 * dentro de la función si van a ser utilizadas dentro de dicha función. 
			 */

			$consulta = "SELECT * FROM pagos";
			$resultado = $conexion->query($consulta);

			if ($resultado->num_rows > 0) {
				$arreglo=array();
				while ($fila = $resultado->fetch_assoc()) {
					
					$estado =  $fila['Estado'];
					$fecha = $fila['fecha_a_pagar'];
					
					if ($estado == "Pendiente") {
						echo $estado . "\r";
						echo $fecha;
					}
				}
				//obtener la fech del último registro
				//obtener fecha actual
				//si fecha registro + 7 dias == a fecha actual
				//insert pago pendiente en pagos con fecha


					
				
			}else {

				echo 'no hay datos';
			}
		}
	}

	


?>
