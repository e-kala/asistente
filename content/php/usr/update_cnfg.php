<?php
	include '../conexion.php';
	if ($_POST) {
		session_start();

		$userr = $_POST['usuario'];
		$mode = $_POST['mode'];
		$background = $_POST['background'];
		$time_change_balance = $_POST['time_bal'];

		//Array contenedor de todos los datos
		$set["mode"] = $mode;
		$set["background"] = $background;
		$set["time_bal"] = $time_change_balance;

		$set = json_encode($set);

		$conectar = new conexion();
		$conexion = $conectar->conectar();

		if ($background !== "" && $time_change_balance !== ""){
			$sql = "UPDATE usuarios SET usr_config='$set' WHERE nombre_usuario='$userr'";

			$res = mysqli_query($conexion, $sql);
			if ($res){
				echo $set;
				echo "<success>";
			} else {
				echo "<update-error>";
				echo `<script type="text/javascript">document.body.innerHTML = '';</script>`;
			}	
		}
	}
?>
