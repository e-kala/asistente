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
		try{
			$json_state_acc = json_decode($status_account, TRUE);
			if (isset($json_state_acc["fechaExpiracion"])){
				if ($json_state_acc["fechaExpiracion"] !== "" && $json_state_acc["fechaExpiracion"] !== null){
					if ("20".$fechaActual > $json_state_acc["fechaExpiracion"]){
						//Expirado, actualizar el modo prueba de premium a free
						
						echo '<script>window.location.href = "?action=premium#mp"; </script>';
						
						// $sql = "UPDATE usuarios SET privilegios = 'free_prueba_usada' WHERE nombre_usuario='$usuario'";
						// $res = mysqli_query($conexion, $sql);

						// if ($res){
						// 	$conexion->close();
						// }  else {
						// }
					} 
				}
			}
		} catch(Exception $e){

		}
	}

?>

<?php include 'content/php/modulos.php'; ?>


<?php // include 'content/php/otros.php'; ?>

<?php //include 'content/php/chart.php'; ?>

