<?php  
	
// ini_set('display_errors', 1); 
// error_reporting(E_ALL);

	

	// require "./conexion.php";
	$conectar = new conexion();
    $conexion = $conectar->conectar();

    // $horaActual = date('G') . ":" . date("i") .":00";
    // $horaActualEnd = date('G') . ":" . strval(date("i") + 10) .":00";

	if (isset($_GET['rk'])){

		$rk = $_GET['rk'];

		$set = '{"rkpassword":"'.$rk.'"}';

		$recovery = "SELECT recovery FROM usuarios WHERE recovery = '$set'";
		$result = $conexion->query($recovery);


		// echo $recovery;
		if (($result !== TRUE) && ($result->num_rows < 1))  {
			// echo $result;
			//Si la randomkey del correo no coincide con la de la cuenta no procede con cambio de password y redirige a la pagina de inicio principal
			echo '<script>window.location.href = "https://ekaproducciones.com/content/asistente/index.php"; </script>';
		} else {

			$user = "SELECT nombre_usuario FROM usuarios WHERE recovery = '$set'";
			$resultuser = $conexion->query($user);
			$row = $resultuser->fetch_assoc();
			$username = $row["nombre_usuario"];

			$correo = "SELECT correo_usuario FROM usuarios WHERE recovery = '$set'";
			$resultcorreo = $conexion->query($correo);
			$row2 = $resultcorreo->fetch_assoc();
			$correelec = $row2["correo_usuario"];
			?>

	<div class="bg-white p-4 centered" id="changpass">
		<form id="form" class="d-flex flex-column">
			<input id="correous" type="text" value="<? echo $correelec; ?>" style="display: none;">
			<h3 class="text-success">Hola <?echo $username?> ¡Casi estamos listos!</h3>
			<input id="passrecov" class="flex-grow-1 mt-2 border-0 " type="text" placeholder ="Nueva contraseña">
			<input id="repassrecov" class="flex-grow-1 mt-2 border-0 " type="text" placeholder ="Repetir nueva contraseña">
			<button id="savepassrecov" class="flex-grow-1 mt-2 btn btn-success text-white">Guardar</button>
		</form>
	</div>

	<div class="bg-white p-4 centered" id="expired" style="display:none;">
		<form id="form" class="d-flex flex-column p-2">
			<h3 class="text-warning alert alert-warning">Este enlace ha expirado</h3>
			<a id="savepassrecov" href="https://ekaproducciones.com/content/asistente/index.php" class="flex-grow-1 mt-2 btn btn-success text-white">Volver a la página principal</a>
		</form>
	</div>


	<script type="text/javascript">
		document.getElementById("form").onsubmit = function(e){
			return e.preventDefault()
		}
		function send(pass,repass,send,correo){
			send.onpointerdown = function(e){
				//si las contraseñas coinciden
				if (pass.value == repass.value){

					$.post("./content/php/usr/recoverypasssavechange.php", { pass: pass.value, mail: correo.value } ).done( function(dat){

						console.log(dat, "dat");

					  	if (dat.match(/\<successfully\-saved\>/gim)){
					  		// console.log("Guardado");
					  		 $("#form").notify(`Nueva contraseña guardada`, "success");
					  		 setTimeout(function(){
					  		 	window.location.href = "https://ekaproducciones.com/content/asistente/index.php"
					  		 },1500)
					  		// console.log("nueva contraseña guardada");
					  	} else if (dat.match(/\<\error\>/gim)){
					  		 $("#send").notify(`Error al guardar contraseña`, "error");
					  		// console.log("error, no se pudo guardar la contraseña");
					  	}

					  })

				} else {
					$("#repassrecov").notify(`Las contraseñas no coinciden`, "error");
				}
			}
		}

		send(document.getElementById("passrecov"),
			 document.getElementById("repassrecov"),
			 document.getElementById("savepassrecov"),
			 document.getElementById("correous"))

		


		//temporizador
	  	let count = 600; //10 min antes de vencerse
	  	let timer = setInterval(function(){
	  		count -= 1
	  		if (count == 0){

	  			$.post("./content/php/usr/expiredchangpass.php", { mail : "<? echo $correelec; ?>" , rk : "<? echo $_GET['rk']; ?>" } ).done( function(dat){

				  	if (dat.match(/\<expired\>/gim)){
						// alert("Este")
				  		setTimeout(function(){
				  		 	document.getElementById("changpass").style.display = "none"
				  		 	document.getElementById("expired").style.display = ""

				  		},1500)
				  		// console.log("nueva contraseña guardada");
				  	} else if (dat.match(/\<\error\>/gim)){
				  		 document.location.reload(false)
				  		// console.log("error, no se pudo guardar la contraseña");
				  	}

				  })

	  			clearInterval(timer)
	  			document.getElementById("counter").innerHTML = ""
	  			document.getElementById("sendemapass").disabled = false
	  		}
	  	}, 1000)

	</script>
			<?
		}

	} else {
		echo "Nadaaaa";
	}




?>

