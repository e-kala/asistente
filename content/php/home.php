<?php
	$conectar = new conexion();
	$conexion = $conectar->conectar();

	$fechaActual = date('y-m-d');

	if (isset($_SESSION['user'])){
		$usuario = $_SESSION['user'];
		$consulta_cnf = "SELECT * FROM usuarios WHERE nombre_usuario = '$usuario'";
		$cnf_result = $conexion->query($consulta_cnf);
		$fila = $cnf_result->fetch_object();
		
		$status_account = $fila->privilegios;
		$json_state_acc = json_decode($status_account, TRUE);

		//Si la fecha actual supera la fecha de expiración, se actualiza el estado de cuenta 
		if ($json_state_acc["fechaExpiracion"] !== "" && $json_state_acc["fechaExpiracion"] !== null){
			if ($fechaActual > $json_state_acc["fechaExpiracion"]){
				//Expirado, actualizar el modo prueba de premium a free
				$sql = "UPDATE usuarios SET privilegios = 'free_prueba_usada' WHERE nombre_usuario='$usuario'";
				$res = mysqli_query($conexion, $sql);
				if ($res){
					$conexion->close();
				}
			} 
		}
	}

?>

<?php include 'content/php/modulos.php'; ?>


<?php // include 'content/php/otros.php'; ?>

<?php //include 'content/php/chart.php'; ?>

