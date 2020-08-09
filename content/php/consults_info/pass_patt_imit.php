<?php //Reply password in user_config panel
	include '../conexion.php';
	if ($_POST) {
		session_start();
		$usuario = $_SESSION['user'];
		$conectar = new conexion();
		$conexion = $conectar->conectar();
		$consulta_cnf = "SELECT * FROM usuarios WHERE nombre_usuario = '$usuario'";
		$cnf_result = $conexion->query($consulta_cnf);
		$fila = $cnf_result->fetch_object();
		$pass = $fila->pass_usuario;
		echo $pass;
	} 
?>


