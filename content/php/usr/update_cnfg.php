
<?php
	include '../conexion.php';
	if ($_POST) {
		session_start();

		$userr = $_POST['usuario'];
		$mode = $_POST['mode'];
		$background = $_POST['background'];
		$time_change_balance = $_POST['time_bal'];
		$transparency = $_POST['transparency'];
		$pj_change = $_POST['pj_change'];
		$pj_hidden = $_POST['pj_hidden'];
		$aside_hidden = $_POST['aside_hidden'];
		$caducidad = $_POST['caducidad'];
		$ingreso_minimo_mensual = $_POST['ingreso_minimo_mensual'];

		$constanciasaludable = $_POST["constanciasaludable"];
        $buenafortuna = $_POST["buenafortuna"];
        $excelenciafinanciera = $_POST["excelenciafinanciera"];
        $crecimientosuperior = $_POST["crecimientosuperior"];
        $crecimientoexponencial = $_POST["crecimientoexponencial"];
        $elorganizador = $_POST["elorganizador"];
        $huracandedinero = $_POST["huracandedinero"];
        $usuarioactivo = $_POST["usuarioactivo"];
        $premioinactividad = $_POST["premioinactividad"];
        $gastadorjunior = $_POST["gastadorjunior"];
        $gastadorsenior = $_POST["gastadorsenior"];
        $gastadorcompulsivo = $_POST["gastadorcompulsivo"];
        $sombreromagico = $_POST["sombreromagico"];
        $reservadepoderi = $_POST["reservadepoderi"];
        $reservadepoderii = $_POST["reservadepoderii"];


		//Array contenedor de todos los datos
		$set["mode"] = $mode;
		$set["background"] = $background;
		$set["time_bal"] = $time_change_balance;
		$set["transparency"] = $transparency;
		$set["pj_change"] = $pj_change;
		$set["pj_hidden"] = $pj_hidden;
		$set["aside_hidden"] = $aside_hidden;
		$set["caducidad"] = $caducidad;
		$set["ingreso_minimo_mensual"] = $ingreso_minimo_mensual;

		if (isset($constanciasaludable)){
			$set["constanciasaludable"] = $constanciasaludable;
		}
		if (isset($buenafortuna)){
			$set["buenafortuna"] = $buenafortuna;
		}
		if (isset($excelenciafinanciera)){
			$set["excelenciafinanciera"] = $excelenciafinanciera;
		}
		if (isset($crecimientoexponencial)){
			$set["crecimientoexponencial"] = $crecimientoexponencial;
		}
		if (isset($elorganizador)){
			$set["elorganizador"] = $elorganizador;
		}
		if (isset($crecimientosuperior)){
			$set["crecimientosuperior"] = $crecimientosuperior;
		}
		if (isset($huracandedinero)){
			$set["huracandedinero"] = $huracandedinero;
		}
		if (isset($usuarioactivo)){
			$set["usuarioactivo"] = $usuarioactivo;
		}
		if (isset($premioinactividad)){
			$set["premioinactividad"] = $premioinactividad;
		}
		if (isset($gastadorjunior)){
			$set["gastadorjunior"] = $gastadorjunior;
		}
		if (isset($gastadorsenior)){
			$set["gastadorsenior"] = $gastadorsenior;
		}
		if (isset($gastadorcompulsivo)){
			$set["gastadorcompulsivo"] = $gastadorcompulsivo;
		}
		if (isset($reservadepoderi)){
			$set["reservadepoderi"] = $reservadepoderi;
		}
		if (isset($sombreromagico)){
			$set["sombreromagico"] = $sombreromagico;
		}
		if (isset($reservadepoderii)){
			$set["reservadepoderii"] = $reservadepoderii;
		}


		$set = json_encode($set);

		$conectar = new conexion();
		$conexion = $conectar->conectar();

		$consulta_cnf = "SELECT * FROM usuarios WHERE nombre_usuario = '$userr'";
		$cnf_result = $conexion->query($consulta_cnf);
		$fila = $cnf_result->fetch_object();

		$data_cnf = $fila->usr_config;

		echo "<script> let config_ = '" .$data_cnf . "';</script>";

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

