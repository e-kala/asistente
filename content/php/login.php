<?php
	include 'conexion.php';
	if ($_POST) {
		session_start();
		$usuario = $_POST['usuario'];
		//$email = $_POST['email'];
		$pass = $_POST['pass'];
		
		$conectar = new conexion();
		$conexion = $conectar->conectar();

		$consulta = "SELECT * FROM usuarios WHERE nombre_usuario ='$usuario' AND pass_usuario='$pass'";
		$resultado = $conexion->query($consulta);

		if ($resultado->num_rows>0) {
			$_SESSION['login'] = TRUE;
			// header('location: ../../index.php');
			echo "<welcome>";
		}else{
			// header('location: ../../index.php?pass=error');
			echo '<script type="text/javascript"> document.body.innerHTML = ""</script>';
			echo $usuario;
			echo $pass;
		}
	}
?>


