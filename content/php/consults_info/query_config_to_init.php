<?php
	// include "../conexion.php";


	class usr_cnfgfirst{
		public $usuario;

		public function configuracion(){

			
			$conectar = new conexion();
			$conexion = $conectar->conectar();
			if(isset($_SESSION['user'])){
				$usuario = $_SESSION['user'];
				$consulta_cnf = "SELECT * FROM usuarios WHERE nombre_usuario = '$usuario'";
				$cnf_result = $conexion->query($consulta_cnf);
				$fila = $cnf_result->fetch_object();

				$email = $fila->correo_usuario;
				$data_cnf = $fila->usr_config;// obtiene configuracion en json
				//$json = json_decode($data_cnf, TRUE); //lo convierte DE json A array
				
				$array = ["usuario" => $usuario]; //crea un array con el usuario
				$array["email"] = $email;
				//array_push($array, $json);
				$json_user = json_encode($array, TRUE); //convierte el array con el usuario a json
				$deco = json_decode($data_cnf, TRUE);

				echo "<div id='cngfirst' style='position:fixed;' value='"."[".$json_user ."," . $data_cnf . "," .'"' . $deco["time_bal"] . '"' ."]"."'></div>";
			} 
		}
	}

	$usr_cnfgfirst = new usr_cnfgfirst();
	$usr_cnfgfirst->configuracion();
?>


<script type="text/javascript" src="./content/js/order_js_general/scripts_head_first_exe.js"></script>