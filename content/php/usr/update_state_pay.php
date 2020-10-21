
<?php

	if ($_POST){
		include "../conexion.php";

		$conectar = new conexion();
		$conexion = $conectar->conectar();

		$state_pay = $_POST["state"];
		$usuario = $_POST["usuario"];

		if ($state_pay !== ""){
			//Client stripe
			$sql = "UPDATE stripe set status='$state_pay' WHERE usuario_card='$usuario'";
			$query = $conexion->query($sql);

			//Account bonsai
			$sql_status_account = "UPDATE usuarios SET privilegios = 'prueba_cancelada' WHERE nombre_usuario='$usuario'";
			$change_status_account = $conexion->query($sql_status_account);

			if ($query === TRUE && $change_status_account === TRUE){
				echo "<canceled>";
			} else {
				echo "<error-to-c>";
			}

		} else {
			$conexion->close();
		}

	}

?>