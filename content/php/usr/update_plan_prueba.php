
<?php
	include '../conexion.php';
	if ($_POST) {
		session_start();
		$userr = $_POST['usuario'];
		$fechaExpiracion = $_POST['fechaExpiracion'];

		$set["state"] = "premium";
		$set["fechaExpiracion"] = $fechaExpiracion;

		$setjson = json_encode($set);
		$conectar = new conexion();
		$conexion = $conectar->conectar();

		
		if ($set !== ""){
			$sql = "UPDATE usuarios SET privilegios = '$setjson' WHERE nombre_usuario='$userr'";

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

