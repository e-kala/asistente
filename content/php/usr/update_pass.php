
<?php
	include '../conexion.php';
	if ($_POST) {
		session_start();

		$userr = $_POST['usuario'];
		$pass = $_POST['pass'];

		$set = $pass;
		$conectar = new conexion();
		$conexion = $conectar->conectar();

		if ($set !== ""){
			$sql = "UPDATE usuarios SET pass_usuario = '$set' WHERE nombre_usuario='$userr'";

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

