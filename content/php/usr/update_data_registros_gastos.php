<!-- I am in Cinfo = consults_info dir -->

<?php
	if ($_POST){
		include "../conexion.php";

		$usuario = $_POST["usuario"];

		//Original
		if (isset($_POST["original"])){
			$original = $_POST["original"];
			$id_gasto_or = $original["id"];
			$categoria_gasto_or = $original["nombre"];
			$descripcion_gasto_or = $original["descripcion"];
			$cuenta_gasto_or = $original["cuenta"];
			$fecha_gasto_or = $original["fecha"];
			$cantidad_gasto_or = $original["cantidad"];
		}

		//Reemplazo
		if (isset($_POST["reemplazo"])){
			$reemplazo = $_POST["reemplazo"];
			$id_gasto = $reemplazo["id"];
			$categoria_gasto = $reemplazo["nombre"];
			$descripcion_gasto = $reemplazo["descripcion"];
			$cuenta_gasto = $reemplazo["cuenta"];
			$fecha_gasto = $reemplazo["fecha"];
			$cantidad_gasto = $reemplazo["cantidad"];
		}

		$sql = "UPDATE gastos SET categoria_gasto='$categoria_gasto', descripcion_gasto='$descripcion_gasto', cuenta_gasto='$cuenta_gasto', fecha_gasto='$fecha_gasto', cantidad_gasto = '$cantidad_gasto' WHERE descripcion_gasto = '$descripcion_gasto_or' AND fecha_gasto = '$fecha_gasto_or' AND cuenta_gasto = '$cuenta_gasto_or' AND cantidad_gasto = '$cantidad_gasto_or' AND categoria_gasto = '$categoria_gasto_or' AND usuario_gasto='$usuario' AND id_gasto='$id_gasto'";
		
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