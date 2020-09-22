<!-- I am in Cinfo = consults_info dir -->

<?php
	if ($_POST){
		include "../conexion.php";

		$usuario = $_POST["usuario"];

		//Original
		if (isset($_POST["original"])){
			$original = $_POST["original"];
			$id_ingreso_or = $original["id"];
			$categoria_ingreso_or = $original["nombre"];
			$descripcion_ingreso_or = $original["descripcion"];
			$cuenta_ingreso_or = $original["cuenta"];
			$fecha_ingreso_or = $original["fecha"];
			$cantidad_ingreso_or = $original["cantidad"];
		}

		//Reemplazo
		if (isset($_POST["reemplazo"])){
			$reemplazo = $_POST["reemplazo"];
			$id_ingreso = $reemplazo["id"];
			$categoria_ingreso = $reemplazo["nombre"];
			$descripcion_ingreso = $reemplazo["descripcion"];
			$cuenta_ingreso = $reemplazo["cuenta"];
			$fecha_ingreso = $reemplazo["fecha"];
			$cantidad_ingreso = $reemplazo["cantidad"];
		}

		$sql = "UPDATE ingresos SET categoria_ingreso='$categoria_ingreso', descripcion_ingreso='$descripcion_ingreso', cuenta_ingreso='$cuenta_ingreso', fecha_ingreso='$fecha_ingreso', cantidad_ingreso = '$cantidad_ingreso' WHERE descripcion_ingreso = '$descripcion_ingreso_or' AND fecha_ingreso = '$fecha_ingreso_or' AND cuenta_ingreso = '$cuenta_ingreso_or' AND cantidad_ingreso = '$cantidad_ingreso_or' AND categoria_ingreso = '$categoria_ingreso_or' AND usuario_ingreso='$usuario' AND id_ingreso='$id_ingreso'";
		
		$conectar = new conexion();
		$conexion = $conectar->conectar();
		$consultar = $conexion->query($sql);
		if ($consultar === TRUE){
			echo "<Success>";
		} else {
			echo "<ErrorUpdate>";
		}
	
	}
?>