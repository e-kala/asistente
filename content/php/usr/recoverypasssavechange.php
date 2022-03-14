
<?php
	include '../conexion.php';
	if ($_POST) {
		session_start();

		$correo = $_POST['mail'];
		$pass = $_POST['pass'];

		$set = $pass;
		$conectar = new conexion();
		$conexion = $conectar->conectar();

		$recovery = "SELECT recovery FROM usuarios WHERE correo_usuario = '$correo'";
		$result = $conexion->query($recovery);
		$row = $result->fetch_assoc();
		$recov = $row["recovery"];

		$renewrkclean["rkpassword"] = "";
		$renewrkclean = json_encode($renewrkclean);

		// $deco = json_encode($recov, TRUE);

		if ($set !== ""){
			$sql = "UPDATE usuarios SET pass_usuario = '$set' WHERE recovery ='$recov'";

			$res = mysqli_query($conexion, $sql);
			if ($res){
				echo $set;
				echo $correo;
				echo "<successfully-saved>";
				echo $recov;
				$delrk = "UPDATE usuarios SET recovery = '$renewrkclean' WHERE correo_usuario ='$correo' AND recovery = '$recov'";
				$resdel = mysqli_query($conexion, $delrk);

			} else {
				echo "<error>";
				echo `<script type="text/javascript">document.body.innerHTML = '';</script>`;
			}	
		}
	}
?>

