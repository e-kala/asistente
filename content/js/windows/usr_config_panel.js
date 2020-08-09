let mode_client = ""
bg_session = ""
let change_use_mode_init_or_client = false

let [time, bg, transparency] = ["hour", "", document.getElementById("slide_transparency").value]
let files = ""

const element_to_change_style_mode = () =>{
	const navbar = document.getElementsByClassName("navbar")[0]
	const panel_config = document.getElementsByClassName("bguserconfigchange")[0]
	const footer = document.getElementsByClassName("footcolor")[0]
	if (mode_client){
		navbar.style.background = `rgb(52,52,69,${transparency}5)`
		panel_config.style.background = `rgb(52,52,69,${transparency}5)`
		footer.style.background = `rgb(52,52,69,${transparency}5)`
	} else {
		navbar.style.background = `rgb(255,255,255,${transparency}5)`
		panel_config.style.background = `rgb(255,255,255,${transparency}5)`
		footer.style.background = `rgb(255,255,255,${transparency}5)`
	}
}

const slide_transparency = document.getElementById("slide_transparency")
slide_transparency.onpointermove = e => {
	let valor = e.target.value
	value_slide_transparency = document.getElementById("value_slide_transparency")
	value_slide_transparency.innerHTML = valor

	if (valor !== "0"){
		transparency = valor
	} else if (valor === ""){
		transparency = alma_config[1].transparency
	} else {
		transparency = "0.0"
	}
	console.log(transparency, "transparency")
	
	if (mode_client === ""){
		mode_client = alma_config[1].mode === "dark" ? true : false
	} else {
		mode_client = mode_client
	}
	
	element_to_change_style_mode()
}

slide_transparency.onclick = e => {
	let valor = e.target.value
	value_slide_transparency = document.getElementById("value_slide_transparency")
	value_slide_transparency.innerHTML = valor

	if (valor !== "0"){
		transparency = valor
	} else if (valor === ""){
		transparency = alma_config[1].transparency
	} else {
		transparency = "0.0"
	}

	if (mode_client === ""){
		mode_client = alma_config[1].mode === "dark" ? true : false
	} else {
		mode_client = mode_client
	}
	element_to_change_style_mode()
}

const data_time_customized_balance = document.getElementsByName("data_balanc_custom")[0]
const default_value_data = data_time_customized_balance.defaultValue

const time_balance = () => {
	const timedef = document.getElementsByClassName("timedefbalc")

	for (let y = 0; y < timedef.length; y++){
		timedef[y].onclick = () =>{
			time = timedef[y].children[0].getAttribute("name")
			timedef[y].children[0].className = "ml-2 btn btn-success flex-grow-1"
			console.log(time)
			for (let x = 0; x < timedef.length; x++){
				if (x !== y){
					timedef[x].children[0].className = "ml-2 btn btn-info flex-grow-1"
				}
			}
			data_time_customized_balance.value = default_value_data
		}
	}
}

const hover_select_bg = e => {
	e.style.cursor = "pointer"
	e.onpointerover = () => e.style.border = "2px solid #999999"
	e.onpointerout = () => e.style.border = "2px solid #dbdbdb"
}

const get_background = e => {
	e.onclick = () =>{
		src = e.src
		src = src.match(/\w+\/\w+\.(png|jpg|gif)/gim).toString()
		bg = src // Full, use
		files = "" //Empty don't use 
		document.body.style.background =`url(${e.src})`
		document.body.style.backgroundSize = "cover"
		document.body.style.backgroundPosition = "center center"
		document.body.style.backgroundAttachment = "fixed"
	}
}

const iter = (fx, ar) => {
	for (let x = 0; x < ar.length; x++){
		fx(ar[x])
	}
}

const imgdefa = document.getElementsByClassName("imgdefa")
time_balance()
iter(hover_select_bg, imgdefa)
iter(get_background, imgdefa)

	
const get_files = () => {
	const input_file = document.getElementById("loadimage")
	input_file.onchange = e => { 
		
		files = input_file.files //Nuevo bg
		bg = "" //Por defecto
		let formData = new FormData();
		formData.append("usuario", alma_config[0].usuario)
  		formData.append("nameimg", files[0]);
  		formData.append("send", true)

		$.ajax({ // Vista previa
		   url: "./content/php/consults_info/load_config_img.php",
		   type: "POST",
		   data: formData,
		   processData: false,
		   contentType: false,
		   success: response => {
		   	response = response.split("/")
		   	response = response[1] + "/" + response[2] + "/" + response[3] + "/" + response[4] + "/" + response[5]
		   	// console.log(response, "JAJAJAJAJ")
		   	document.body.style.background = `url(${response})`
		   	document.body.style.backgroundSize = "cover"
			document.body.style.backgroundPosition = "center center"
		  	document.body.style.backgroundAttachment = "fixed"
		   },
		   error: function(jqXHR, textStatus, errorMessage) {
		       console.log(errorMessage); // Optional
		   }
		});	

	}
}

get_files()


//Enviar configuración del usuario
function send_config(){
	if (bg.match(/content\/usuarios\/\w+\//gim) && files === ""){
		bg = bg.replace(`content/usuarios/${alma_config[0].usuario}/`, "")
	}

	$.post("./content/php/usr/update_cnfg.php", {
		usuario: alma_config[0].usuario,
		mode: bg_session !== "" ? bg_session : alma_config[1].mode,
		transparency: transparency !== "" && transparency !== null ? transparency : alma_config[1].transparency,
		background: bg,
		time_bal: time !== "" ? time : "hour"
	}).done(d => {
		if (d.match(/\<success\>/gim)){
			$("#save-changes-config").notify("Sus cambios han sido guardados", {position:"left", className:"success"});
		} 
	})

	if (files !== "" && bg === ""){
		let formData = new FormData();
		formData.append("usuario", alma_config[0].usuario)
  		formData.append("nameimg", files[0]);
  		formData.append("send", true)

  		$.ajax({ //Guardado oficial
		   url: "./content/php/consults_info/load_config_img.php",
		   type: "POST",
		   data: formData,
		   processData: false,
		   contentType: false,
		   success: ruta => {
		   	 document.body.style.background = `url(../asistente/content/${alma_config[0].usuario}/img/${ruta})`
		   	 document.body.style.backgroundSize = "cover"
			 document.body.style.backgroundPosition = "center center"
		  	 document.body.style.backgroundAttachment = "fixed"
		  	 rutaedit = ruta.replace(`asistente/content/usuarios/${alma_config[0].usuario}/`,"")
		  	 rutaedit = rutaedit.replace("\r\n","")
		  	 bg = rutaedit
		  	 console.log(rutaedit, "rutaedit")

		  	 if (rutaedit.match(/(\<br\>|\<br\s\/\>|\<b\>Notice\<\/b\>|undefined)/gim) === null){ //Si no hay ningun problema
			  	 $.post("./content/php/usr/update_cnfg.php", {
					usuario: alma_config[0].usuario,
					mode: bg_session !== "" ? bg_session : alma_config[1].mode,
					transparency: transparency !== "" ? transparency : alma_config[1].transparency,
					background: rutaedit,
					time_bal: time !== "" ? time : "hour"
				}).done(d => {
					$("#save-changes-config").notify("Sus cambios han sido guardados", {position:"left", className:"success"});
				})
		  	 } else {
		  	 	$("#save-changes-config").notify("Al parecer ha habido un error al guardar, intente nuevamente", { position: "left"}, "error");
		  	 }
		
		   },
		   error: function(jqXHR, textStatus, errorMessage) {
		       console.log(errorMessage); // Optional
		   }
		});	

	}
}

const save_btn = document.getElementById("save-changes-config")
save_btn.onclick = () => send_config()	

data_time_customized_balance.onchange = e => {
	const timedef = document.getElementsByClassName("timedefbalc")
	for (let x = 0; x < timedef.length; x++){
		timedef[x].children[0].className = "ml-2 btn btn-info flex-grow-1"
	}
	time = data_time_customized_balance.value
	console.log(time)
}

let left = document.getElementsByClassName("leftimg")[0]
let right = document.getElementsByClassName("rightimg")[0]
let conjunt_images = document.getElementsByClassName("conjunt_images")
//------------------- Al iniciar----------------------
let scrollhormas = 0;
left.onpointerdown = () => {
	let maxscroll = conjunt_images[0].scrollWidth - 200
	if (scrollhormas > 0 && scrollhormas <= maxscroll){
		scrollhormas -= 600  
		conjunt_images[0].scrollTo(scrollhormas,0)
	} else {
		conjunt_images[0].scrollTo(maxscroll,0)
		scrollhormas = maxscroll
	}
}
right.onpointerdown = () => {
	let maxscroll = conjunt_images[0].scrollWidth - 200
	if (scrollhormas < maxscroll ){
		scrollhormas +=  600  
			conjunt_images[0].scrollTo(scrollhormas,0)
	}else{
		conjunt_images[0].scrollTo(0,0)
		scrollhormas = 0
	}
}
conjunt_images[0].style.display = "flex"
conjunt_images[0].animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
conjunt_images[1].style.display = "none"
conjunt_images[2].style.display = "none"
//--------------------------------------------------

//Al cambiar de conjunto de imagenes
const show_1 = () => {
	const show_1 = document.getElementById("show_1")
	let scrollhormas = 0
	show_1.onclick = () => {
		// left.style.display = "block"
		// right.style.display = "block"
		left.onpointerdown = () => {
			let maxscroll = conjunt_images[0].scrollWidth - 200
			if (scrollhormas > 0 && scrollhormas <= maxscroll){
				scrollhormas -= 600  
				conjunt_images[0].scrollTo(scrollhormas,0)
			} else {
				conjunt_images[0].scrollTo(maxscroll,0)
				scrollhormas = maxscroll
			}
			console.log(scrollhormas, maxscroll, conjunt_images[0].scrollWidth)
		}
		right.onpointerdown = () => {
			let maxscroll = conjunt_images[0].scrollWidth - 200

			if (scrollhormas < maxscroll ){
				scrollhormas +=  600  
					conjunt_images[0].scrollTo(scrollhormas,0)
			}else{
				conjunt_images[0].scrollTo(0,0)
				scrollhormas = 0
			}
			console.log(scrollhormas, maxscroll, conjunt_images[0].scrollWidth)
		}
		conjunt_images[0].style.display = "flex"
		conjunt_images[0].animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})

		conjunt_images[1].style.display = "none"
		conjunt_images[2].style.display = "none"
		conjunt_images[3].style.display = "none"
	}
}

const show_2 = () => {
	const show_2 = document.getElementById("show_2")
	let scrollhormas = 0
	show_2.onclick = () => {
		// left.style.display = "block"
		// right.style.display = "block"
		left.onpointerdown = () => {
			let maxscroll = conjunt_images[1].scrollWidth - 200
			if (scrollhormas > 0 && scrollhormas <= maxscroll){
				scrollhormas -= 600  
				conjunt_images[1].scrollTo(scrollhormas,0)
			} else {
				conjunt_images[1].scrollTo(maxscroll,0)
				scrollhormas = maxscroll
			}
			console.log(scrollhormas, maxscroll, conjunt_images[1].scrollWidth)
		}
		right.onpointerdown = () => {
			let maxscroll = conjunt_images[1].scrollWidth - 200

			if (scrollhormas < maxscroll ){
				scrollhormas +=  600  
					conjunt_images[1].scrollTo(scrollhormas,0)
			}else{
				conjunt_images[1].scrollTo(0,0)
				scrollhormas = 0
			}
			console.log(scrollhormas, maxscroll, conjunt_images[1].scrollWidth)
		}
		conjunt_images[1].style.display = "flex"
		conjunt_images[1].animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})

		conjunt_images[0].style.display = "none"
		conjunt_images[2].style.display = "none"
		conjunt_images[3].style.display = "none"

	}
}

const show_3 = () => {
	const show_3 = document.getElementById("show_3")
	let scrollhormas = 0
	show_3.onclick = () => {
		// left.style.display = "block"
		// right.style.display = "block"
		left.onpointerdown = () => {
			let maxscroll = conjunt_images[2].scrollWidth - 200
			if (scrollhormas > 0 && scrollhormas <= maxscroll){
				scrollhormas -= 600  
				conjunt_images[2].scrollTo(scrollhormas,0)
			} else {
				conjunt_images[2].scrollTo(maxscroll,0)
				scrollhormas = maxscroll
			}
			console.log(scrollhormas, maxscroll, conjunt_images[2].scrollWidth)
		}
		right.onpointerdown = () => {
			let maxscroll = conjunt_images[2].scrollWidth - 200

			if (scrollhormas < maxscroll ){
				scrollhormas +=  600  
					conjunt_images[2].scrollTo(scrollhormas,0)
			}else{
				conjunt_images[2].scrollTo(0,0)
				scrollhormas = 0
			}
			console.log(scrollhormas, maxscroll, conjunt_images[2].scrollWidth)
		}
		conjunt_images[2].style.display = "flex"
		conjunt_images[2].animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
		conjunt_images[0].style.display = "none"
		conjunt_images[1].style.display = "none"
		conjunt_images[3].style.display = "none"

	}
}


const show_myphothos = () => {
	const show_myphothos = document.getElementById("show_myphothos")
	let scrollhormas = 0

	show_myphothos.onclick = () => {
		// left.style.display = "block"
		// right.style.display = "block"
		left.onpointerdown = () => {
			let maxscroll = conjunt_images[3].scrollWidth - 200
			if (scrollhormas > 0 && scrollhormas <= maxscroll){
				scrollhormas -= 600  
				conjunt_images[3].scrollTo(scrollhormas,0)
			} else {
				conjunt_images[3].scrollTo(maxscroll,0)
				scrollhormas = maxscroll
			}
			console.log(scrollhormas, maxscroll, conjunt_images[3].scrollWidth)
		}
		right.onpointerdown = () => {
			let maxscroll = conjunt_images[3].scrollWidth - 200

			if (scrollhormas < maxscroll ){
				scrollhormas +=  600  
					conjunt_images[3].scrollTo(scrollhormas,0)
			}else{
				conjunt_images[3].scrollTo(0,0)
				scrollhormas = 0
			}
			console.log(scrollhormas, maxscroll, conjunt_images[3].scrollWidth)
		}
		conjunt_images[3].style.display = "flex"
		conjunt_images[3].animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
		conjunt_images[0].style.display = "none"
		conjunt_images[2].style.display = "none"
		conjunt_images[1].style.display = "none"

	}
}


show_1()
show_2()
show_3()
show_myphothos()

