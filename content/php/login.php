<?php
	include 'conexion.php';
	if ($_POST) {
		session_start();
		$usuario = $_POST['usuario'];
		//$email = $_POST['email'];
		$pass = $_POST['pass'];
		
		$conectar = new conexion();
		$conexion = $conectar->conectar();

		$consulta = "SELECT * FROM usuarios WHERE nombre_usuario ='$usuario' AND pass_usuario='$pass'"; //Para acceso por nombre de usuario

		$consulta2 = "SELECT * FROM usuarios WHERE correo_usuario = '$usuario' AND pass_usuario='$pass'"; //Para acceso por email

		$resultado = $conexion->query($consulta);
		$resultado2 = $conexion->query($consulta2);

		if ($resultado->num_rows>0 || $resultado2->num_rows>0) { //validacion por usuario o correo + password
			$_SESSION['login'] = TRUE;
			// header('location: ../../index.php');
			echo "<welcome>";
		}else{
			// header('location: ../../index.php?pass=error');
			echo '<script type="text/javascript"> document.body.innerHTML = ""</script>';
		}
	}
?>

