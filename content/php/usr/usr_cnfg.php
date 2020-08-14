<?php
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
	
				$email = $fila->correo_usuario;
				$data_cnf = $fila->usr_config;// obtiene configuracion en json
				//$json = json_decode($data_cnf, TRUE); //lo convierte DE json A array
				
				$array = ["usuario" => $usuario]; //crea un array con el usuario
				$array["email"] = $email;
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
		modulos[x].style.display = "flex"
		modulos[x].style.flexDirection = "column"
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

	if (document.getElementsByClassName("fot")[0] !== undefined && document.getElementsByClassName("fot")[0] !== null){
		document.getElementsByClassName("fot")[0].style.display = "block"
	}

	const load_gif = document.getElementById("loadingg")
	if (load_gif !== undefined && load_gif !== null) {
		load_gif.style.display = "none"
		const getcnf = document.getElementById("cng")
		let jsonst = ""
		let json = [{usuario:""},{mode:"", bg:"", time_bal:""}]
		if (getcnf !== null){
			jsonst = getcnf.getAttribute("value")
			json = JSON.parse(jsonst)
		}
		// console.log(json)
		// console.log(jsonst)
		alma_config = json !== undefined && json !== null && json !== "" ? json : []
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

		if (json[1].transparency !== ""){
			transparency = json[1].transparency
			let slide_transparency = document.getElementById("slide_transparency")
			let value_slide_transparency = document.getElementById("value_slide_transparency")
			if (slide_transparency !== undefined && slide_transparency !== null){
				slide_transparency.setAttribute("value", transparency) 
			}
			if(value_slide_transparency !== undefined && value_slide_transparency !== null){
				value_slide_transparency.innerHTML = transparency
			}
		}
	 	

		if (json[1].background !== "" && json[1].background !== undefined){
			if (json[1].background.match(/img/gim)===null){
				document.body.style.background = `url(./content/img/fondos/${json[1].background})`
			} else {
				if (json[1].background.match(/asistente/gim)){
					bg = json[1].background.replace("asistente/","")
				} else if (json[1].background.match(/img\/\w+\.(jpg|png|gif)/gim)){
					bg = "content/usuarios/"+json[0].usuario+"/"+json[1].background
				} else {
					bg = "content/usuarios/"+json[0].usuario+"/"+json[1].background
				}
				bg = bg.replace("\r\n", "")
				console.log(bg,"BGGGGG")
				document.body.style.background = `url(${bg})`
			}
			document.body.style.backgroundSize = "cover"
			document.body.style.backgroundPosition = "center center"
			document.body.style.backgroundAttachment = "fixed"
		}

		//pj change pj
		if (json[1].pj_change !== "" && json[1].pj_change !== null & json[1].pj_change !== undefined){
			const xiang = document.getElementById("pjxiang")
			const buer = document.getElementById("pjbuer")
			const oficial_pj = document.getElementsByClassName("cara")[0]

			if (xiang !== null && xiang !== undefined && json[1].pj_change.match(/face/gim)) xiang.style.border = "4px solid rgb(29,226,195)"
			if (buer !== null && buer !== undefined && json[1].pj_change.match(/bau/gim)) buer.style.border = "4px solid rgb(29,226,195)"

		} else {
			const xiang = document.getElementById("pjxiang")
			const buer = document.getElementById("pjbuer")
			if (xiang !== null && xiang !== undefined) xiang.style.border = ""
			if (buer !== null && buer !== undefined) buer.style.border = ""
		}


		//pj hidden status
		if (json[1].pj_hidden !== "" && json[1].pj_hidden !== null && json[1].pj_hidden !== undefined){
				const pj_h = document.getElementsByName("personaje")[0]
			
				let imgcontainer = document.getElementsByClassName("imgcontainer")[0]

				if (json[1].pj_hidden == "true"){
					if (pj_h !== undefined && pj_h !== null) pj_h.style.background = "radial-gradient(circle, #1F9885, #1BCEB2)"
					if (imgcontainer !== null && imgcontainer !== undefined){
						imgcontainer.style.display = "none"
					}
				} else {
					if (pj_h !== undefined && pj_h !== null)  pj_h.style.background = ""
					if (imgcontainer !== null && imgcontainer !== undefined){
						imgcontainer.style.display = "block"
					}
				}
			
		
		}

		//aside hidden status
		if (json[1].aside_hidden !== "" && json[1].aside_hidden !== null && json[1].aside_hidden !== undefined){
			const check_aside = document.getElementsByName("panelizquierdo")[0]
		
			let aside = document.getElementsByClassName("containeraside")[0]
			if (json[1].aside_hidden == "true"){
				//Esconder aside
				if (aside !== undefined && aside !== null) aside.style.display = "none"
				if (check_aside !== null && check_aside !== undefined) check_aside.style.background = "radial-gradient(circle, #1F9885, #1BCEB2)"
			} else {
				//Mostrar aside
				if (aside !== undefined && aside !== null) aside.style.display = "block"
				if (check_aside !== null && check_aside !== undefined) check_aside.style.background = ""
			}
		
		}

		//Caducidad
		if (json !== ""){
			if (json[1].caducidad !== "" && json[1].caducidad !== undefined && json[1].caducidad !== null){
				const caducidad_slide = document.getElementById("caducidad-slide")
				const value_caduci = document.getElementById("value_caducidad")
				if (caducidad_slide !== undefined && caducidad_slide !== null){
					caducidad_slide.value = json[1].caducidad
				}
				if (value_caduci !== undefined && value_caduci !== null){
					value_caduci.innerHTML = json[1].caducidad
				}
				caducidad = json[1].caducidad
			}
		}

		//************* Personal data **************
		let name = document.getElementById("type_name_config")
		let email = document.getElementById("type_email_config")
		if (name !== undefined && name !== null) name.innerHTML = json[0].usuario
		if (email !== undefined && email !== null) email.innerHTML = json[0].email

		//******************************************

		console.log(json, "domo")
		console.log(json[1].pj_change,)


	}

</script>   