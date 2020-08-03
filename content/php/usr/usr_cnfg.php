<?php
//cargar configuración del usuario
/*
 * cuando el usuario inicie sesión->ejecutará la consulta automaticamente
 * la consulta podria ejecutarse if(inició sesion){ejecuta json}
 * o detectar con js si se inició sesión directamente
 * cargará la configuración desde la db consultando un dato json
 * el dato json deberá ser interpretado por js
 * 
 * 
 * 
 * 
 * 
*/

	// include '../conexion.php';

	class usr_cnfg{
		public $usuario;

		public function configuracion(){
			// session_start();
			
			$conectar = new conexion();
			$conexion = $conectar->conectar();
			
			if(isset($_SESSION['user'])){
				$usuario = $_SESSION['user'];
				$consulta_cnf = "SELECT * FROM usuarios WHERE nombre_usuario = '$usuario'";
				$cnf_result = $conexion->query($consulta_cnf);
				$fila = $cnf_result->fetch_object();
	
				$data_cnf = $fila->usr_config;// obtiene configuracion en json
				//$json = json_decode($data_cnf, TRUE); //lo convierte DE json A array
				
				$array = ["usuario" => $usuario]; //crea un array con el usuario
				//array_push($array, $json);
				$json_user = json_encode($array, TRUE); //convierte el array con el usuario a json


				$deco = json_decode($data_cnf, TRUE);
				
				echo "<div id='cng' style='position:fixed;' value='"."[".$json_user ."," . $data_cnf . "," .'"' . $deco["time_bal"] . '"' ."]"."'></div>";
			}
		}
	}
	
	$usr_cnfg = new usr_cnfg();
	$usr_cnfg->configuracion();
  
?>

<script type="text/javascript">
	const anim = (obj) => {
		obj.animate([{
			opacity:0
		},{
			opacity:1
		}],{duration:400, iterations:1})
	}
	for(let x = 0; x < modulos.length; x++){
		modulos[x].style.display = "block"
		// anim(modulos[x])
	}

	if (modsdown !== undefined) {
		modsdown.style.display = "block"
		// anim(modsdown)
	}

	const headerr = document.getElementsByClassName("header-home-asistent")[0]
	if (headerr !== undefined) headerr.style.display = "flex"

	if (document.getElementsByClassName("panel-config")[0] !== undefined) document.getElementsByClassName("panel-config")[0].style.display = "block"

	const tado = document.getElementsByClassName("tado")[0]
	const tered = document.getElementsByClassName("tered")[0]
		
	if (window.screen.width >= 580){
		if (tered !== undefined) tered.style.display = "block";
		if (tado !== undefined) tado.style.display = "none";
	} else {
		if (tered !== undefined) tered.style.display = "none";
		if (tado !== undefined) tado.style.display = "block";
	}

	if (containeringasedi !== undefined && containeringasedi !== null){
		containeringasedi.style.display = "block"
	}


	
	const load_gif = document.getElementById("loadingg")
	if (load_gif !== undefined && load_gif !== null) {
		load_gif.style.display = "none"
		const getcnf = document.getElementById("cng")
		let jsonst = getcnf.getAttribute("value")
		let json = JSON.parse(jsonst)
		// console.log(json)
		// console.log(jsonst)
		alma_config = json
		Aside(json[0].usuario)

		if (json[1].mode === "dark"){
			dark()
		} else {
			light() 
		}

		if (document.getElementsByName(json[1].time_bal)[0] !== undefined){
			document.getElementsByName(json[1].time_bal)[0].className = "ml-2 btn btn-success flex-grow-1"
			const timedef = document.getElementsByClassName("timedefbalc")
			if (timedef !== undefined && timedef !== null){
				for (let x = 0; x < timedef.length; x++){
					if (timedef[x].children[0].getAttribute("name") !== json[1].time_bal ){
						timedef[x].children[0].className = "ml-2 btn btn-info flex-grow-1"
					}
				}
			}
		} else {
			if (document.getElementsByName("five")[0] !== undefined) document.getElementsByName("five")[0].className = "ml-2 btn btn-success flex-grow-1"
		}

		try{
	 		if (bg !== undefined && bg !== null) bg = json[1].background // var from user_config.php
	 		if (time !== undefined && time !== null) time = json[1].time_bal
	 		if (document.getElementsByName("data_balanc_custom")[0] !== undefined && document.getElementsByName("data_balanc_custom")[0] !== null) document.getElementsByName("data_balanc_custom")[0].value = json[1].time_bal
		} catch(e){
			//
		}
	 	

		document.body.style.background = `url(./content/img/fondos/${json[1].background})`
		document.body.style.backgroundSize = "cover"
		document.body.style.backgroundPosition = "center center"
		document.body.style.backgroundAttachment = "fixed"
		console.log(json, "domo")


	}

</script>   