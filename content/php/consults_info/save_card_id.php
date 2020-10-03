<?php
	
	if ($_POST){
		include "../conexion.php";

		$id_card = $_POST["id_card"];

		$conectar = new conexion();
		$conexion = $conectar->conectar();

		if ($id_card !== ""){
			$sql = "INSERT INTO stripe(stripe_id_card) VALUES($id_card)";
			$query = $conexion->query($sql);
			if ($query === TRUE){
				echo "<save-id-stripe>";
			} else {
				echo "<error-to-save-id-stripe>";
			}
		} else {
			$conexion->close();
		}

	}

?>