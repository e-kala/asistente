<?PHP
	if(!($conexion=mysql_connect("127.0.0.1","root@localhost",""))){
		echo "Errores conectando con el servidor";
		exit();
	} else {
		//Conectado al servidor
/*
		Evitar que si buscan el archivo connect.php desde la url para intentar hacer algo retorne la pagina principal de la web y no tengan acceso, aunque de por sí connect.php está completamente en blanco y solo procesa cuando recibe datos*/
		echo "<script type='text/javascript'> 
			let url = window.location.href;
			let host = url.match(/(127\.0\.0\.1|localhost|ekasystent\.esy\.es)/gim);
		
			if (window.location.href.match(/login/gim)){
				if (host !== null) window.location.href = 'http://'" . "+ host[0] +" . "'/adiqo'; 
			}
			</script>";

		if (!mysqli_select_db("test",$conexion)){
			echo "Error conectando con la base de datos.";
			exit();
		} else {
			//Conectado a la base de datos
			if ($_POST){ //Solo cuando se capte un POST

				$user = $_POST["user"];
				$pass = $_POST["pass"];
				$mode = $_POST["mode"];
				
				$query = mysqli_query("select * from db",$conexion);

				while($row = mysql_fetch_array($query)) {
					if ($mode != "form"){
						if ($row["user"] == $user) {
							echo "<user-correct>"; //Usuario correcto
							
							if ($row["user"] == $user && $row["pass"] == $pass){
								echo " <welcome>"; //Bienvenido
							
							
							} else {
								//Password inválida
								echo " <password-invalid>" . " " . $row["pass"] . " " . $pass;
							} 
						} else {
							echo "<user-incorrect>"; //Usuario correcto
							
						}
					} 
					if ($mode == "form" && $row["user"] == $user && $row["pass"] == $pass) {
						
							echo " <welcome>"; //Bienvenido
						
					} 

					echo "<script type='text/javascript'> document.body.innerHTML = ''; </script>";	

				}
			} else {

				exit();
			}
		}
	}
?>