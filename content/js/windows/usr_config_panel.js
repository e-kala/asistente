let mode_client = ""
bg_session = ""
let change_use_mode_init_or_client = false
let [time, bg, transparency] = ["hour", "", document.getElementById("slide_transparency").value]
let [files, caducidad, pj, personaje_hidden, panelizquierdo_hidden] = ["","", "", false, false]
let ingreso_minimo_mensual = ""
const slide_transparency = document.getElementById("slide_transparency")

function encuesta(){
	const ingreso_min_mens = document.getElementById("ingremin")
	const ingreminval = ingreso_min_mens.value
	ingreso_minimo_mensual = ingreminval
}

function element_to_change_style_mode(){
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


$(function(){
	if (window.config[0].plan.match(/premium/gim)){
		document.getElementById("slide_transparency").title = ""
		slide_transparency.onpointermove = function(e){
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
		slide_transparency.onclick = function(e){
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

	} else {
		document.getElementById("slide_transparency").setAttribute("disabled",true)
		document.getElementById("slide_transparency").title = "Reservado para el modo premium"
	}
})



const data_time_customized_balance = document.getElementsByName("data_balanc_custom")[0]
const default_value_data = data_time_customized_balance.defaultValue

function time_balance(){
	const timedef = document.getElementsByClassName("timedefbalc")

	for (let y = 0; y < timedef.length; y++){
		timedef[y].onclick = function(){
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

function get_inactividad(){
	const caducidad_slide = document.getElementById("caducidad-slide")
	const value_caduci = document.getElementById("value_caducidad")
	caducidad_slide.onpointermove = function(e){
		caducidad = e.target.value
		value_caduci.innerHTML = e.target.value
	}
	caducidad_slide.onpointerdown = function(e){
		caducidad = e.target.value
		value_caduci.innerHTML = e.target.value
	}

}

get_inactividad()

function hover_select_bg(e){
	e.style.cursor = "pointer"
	e.onpointerover = function(){
		e.style.border = "2px solid #999999"
	}
	e.onpointerout = function(){
		e.style.border = "2px solid #dbdbdb"
	}
}

function get_background(e){
	e.onclick = function(){
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


function check_hidden_elements(){
	const check_aside = document.getElementsByClassName("check_aside")[0]
	const check_pj = document.getElementsByClassName("check_pj")[0]

	$(function(){
		if (window.config !== undefined && window.config !== null && window.config !== ""){
			
			panelizquierdo_hidden = window.config[1].aside_hidden == "true" ? true : false
			personaje_hidden = window.config[1].pj_hidden == "true" ? true : false

			check_pj.onpointerdown = function(o){
				personaje_hidden = !personaje_hidden
				if (personaje_hidden){
					check_pj.style.background = "radial-gradient(circle, #1F9885, #1BCEB2)"
				} else {
					check_pj.style.background = "" 
				}
			}

			check_aside.onpointerdown = function(o){
				panelizquierdo_hidden = !panelizquierdo_hidden
				if (panelizquierdo_hidden){
					check_aside.style.background = "radial-gradient(circle, #1F9885, #1BCEB2)"
				} else {
					check_aside.style.background = "" 
				}
			}
		}
		
	})


}

check_hidden_elements()

function select_pj(e){
	$(function(){
		let count = 0; //Hasta el 4
		for (let y = 0; y < e.length; y++){
			if (count < 4 && window.config[0].plan != "premium" ){
				count += 1
				e[y].onpointerdown = function(){
					e[y].style.border = "4px solid #1DE2C3"
					pj = e[y].getAttribute("src")
					for (let x = 0; x < e.length; x++){
						if (x !== y){
							e[x].style.border =  "4px solid transparent"
						}
					}
				}
			} 
			if (window.config[0].plan.match(/premium/gim)) {
				e[y].onpointerdown = function(){
					e[y].style.border = "4px solid #1DE2C3"
					pj = e[y].getAttribute("src")
					for (let x = 0; x < e.length; x++){
						if (x !== y){
							e[x].style.border =  "4px solid transparent"
						}
					}
				}
				if (document.getElementsByClassName("labelbadgepremi") !== undefined){
					for (let z = 0; z < document.getElementsByClassName("labelbadgepremi").length; z++){
						document.getElementsByClassName("labelbadgepremi")[z].className = "p-2 m-2 badge"
					}
				}
			}
		}
	})
}

select_pj(document.getElementsByClassName("pj"))

function iter(fx, ar){
	for (let x = 0; x < ar.length; x++){
		fx(ar[x])
	}
}

const imgdefa = document.getElementsByClassName("imgdefa")
time_balance()
iter(hover_select_bg, imgdefa)
iter(get_background, imgdefa)

	
let imagen_to_save = ""
function get_files(){ //Previous view
	const input_file = document.getElementById("loadimage")
	$(function(){
		if (window.config[0].plan.match(/premium/gim)){
			input_file.onchange = function(e){ 
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
				   success: function(response){
				   	console.log(response, "JAJAJAJAJ")
				   	response = response.split("/")
				   	imagen_to_save= response[5]
				   	response = response[1] + "/" + response[2] + "/" + response[3] + "/" + response[4] + "/" + response[5]
				   	try{
					   	document.body.style.background = `url(${response})`
					   	document.body.style.backgroundSize = "cover"
						document.body.style.backgroundPosition = "center center"
					  	document.body.style.backgroundAttachment = "fixed"
				   	} catch(_){
				   		console.warn("Unexpected Error -M")
				   	}
				   },
				   error: function(jqXHR, textStatus, errorMessage) {
				       console.log(errorMessage); // Optional
				   }
				});	
			}
		} else {
			input_file.setAttribute("disabled", true)
			input_file.setAttribute("title", "Reservado para el modo Premium")
		}
	})
}

get_files()


//Enviar configuración del usuario
function send_config(){
	encuesta()
	if (bg.match(/content\/usuarios\/\w+\//gim) && files === ""){
		bg = bg.replace(`content/usuarios/${alma_config[0].usuario}/`, "")
	}

	$.post("./content/php/usr/update_cnfg.php", {
		usuario: alma_config[0].usuario,
		mode: bg_session !== "" ? bg_session : alma_config[1].mode,
		transparency: transparency !== "" && transparency !== null ? transparency : alma_config[1].transparency,
		background: bg,
		pj_change: pj !== "" ? pj : alma_config[1].pj_change,
		pj_hidden: personaje_hidden,
		aside_hidden: panelizquierdo_hidden,
		caducidad: caducidad !== "" ? caducidad : alma_config[1].caducidad,
		time_bal: time !== "" ? time : "hour",
		ingreso_minimo_mensual: ingreso_minimo_mensual !== "" ? ingreso_minimo_mensual : alma_config[1].ingreso_minimo_mensual,
		constanciasaludable: alma_config[1].constanciasaludable !== "null"  ? alma_config[1].constanciasaludable : "null",
        buenafortuna: alma_config[1].buenafortuna !== "null" ? alma_config[1].buenafortuna : "null",
        elorganizador: alma_config[1].elorganizador !== "null" ? alma_config[1].elorganizador : "null",
        excelenciafinanciera: alma_config[1].excelenciafinanciera !== "null" ? alma_config[1].excelenciafinanciera : "null",
        crecimientoexponencial: alma_config[1].crecimientoexponencial !== "null" ? alma_config[1].crecimientoexponencial : "null",
        crecimientosuperior: alma_config[1].crecimientosuperior !== "null" ? alma_config[1].crecimientosuperior : "null",
        huracandedinero: alma_config[1].huracandedinero !== "null" ? alma_config[1].huracandedinero : "null",
        usuarioactivo: alma_config[1].usuarioactivo !== "null" ? alma_config[1].usuarioactivo : "null",
        premioinactividad: alma_config[1].premioinactividad !== "null" ? alma_config[1].premioinactividad : "null",
        gastadorjunior: alma_config[1].gastadorjunior !== "null" ? alma_config[1].gastadorjunior : "null",
        gastadorsenior: alma_config[1].gastadorsenior !== "null" ? alma_config[1].gastadorsenior : "null",
        gastadorcompulsivo: alma_config[1].gastadorcompulsivo !== "null"  ? alma_config[1].gastadorcompulsivo : "null",
        sombreromagico: alma_config[1].sombreromagico !== "null" ? alma_config[1].sombreromagico : "null",
        reservadepoderi: alma_config[1].reservadepoderi !== "null" ? alma_config[1].reservadepoderi : "null",
        reservadepoderii: alma_config[1].reservadepoderii !== "null" ? alma_config[1].reservadepoderii : "null"
	}).done(function(d){
		if (d.match(/\<success\>/gim)){
			$("#save-changes-config").notify("Sus cambios han sido guardados", {position:"left", className:"success"});

		} 
	})

	if (files !== "" && bg === "" && imagen_to_save !== ""){
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
		   success: function(ruta){
		   	 document.body.style.background = `url(./content/usuarios/${alma_config[0].usuario}/img/${ruta})`
		   	 document.body.style.backgroundSize = "cover"
			 document.body.style.backgroundPosition = "center center"
		  	 document.body.style.backgroundAttachment = "fixed"
		  	 rutaedit = ruta.replace(`/content/usuarios/${alma_config[0].usuario}/`,"")
		  	 rutaedit = rutaedit.replace("\r\n","")
		  	 bg = rutaedit
		  	 // console.log(rutaedit, "rutaedit", "jasoxxxdasodimasodm")
		  	 
		  	 if (rutaedit.match(/(\<br\>|\<br\s\/\>|\<b\>Notice\<\/b\>|undefined)/gim) === null){ //Si no hay ningun problema
			  	 $.post("./content/php/usr/update_cnfg.php", {
					usuario: alma_config[0].usuario,
					mode: bg_session !== "" ? bg_session : alma_config[1].mode,
					transparency: transparency !== "" && transparency !== null ? transparency : alma_config[1].transparency,
					background: "img/"+imagen_to_save,
					pj_change: pj !== "" ? pj : alma_config[1].pj_change,
					pj_hidden: personaje_hidden,
					aside_hidden: panelizquierdo_hidden,
					caducidad: caducidad !== "" ? caducidad : alma_config[1].caducidad,
					time_bal: time !== "" ? time : "hour",
					ingreso_minismo_mensual: ingreso_minimo_mensual !== "" ? ingreso_minimo_mensual : alma_config[1].ingreso_minimo_mensual,
					constanciasaludable: alma_config[1].constanciasaludable !== "null"  ? alma_config[1].constanciasaludable : "null",
			        buenafortuna: alma_config[1].buenafortuna !== "null" ? alma_config[1].buenafortuna : "null",
			        elorganizador: alma_config[1].elorganizador !== "null" ? alma_config[1].elorganizador : "null",
			        excelenciafinanciera: alma_config[1].excelenciafinanciera !== "null" ? alma_config[1].excelenciafinanciera : "null",
			        crecimientoexponencial: alma_config[1].crecimientoexponencial !== "null" ? alma_config[1].crecimientoexponencial : "null",
			        crecimientosuperior: alma_config[1].crecimientosuperior !== "null" ? alma_config[1].crecimientosuperior : "null",
			        huracandedinero: alma_config[1].huracandedinero !== "null" ? alma_config[1].huracandedinero : "null",
			        usuarioactivo: alma_config[1].usuarioactivo !== "null" ? alma_config[1].usuarioactivo : "null",
			        premioinactividad: alma_config[1].premioinactividad !== "null" ? alma_config[1].premioinactividad : "null",
			        gastadorjunior: alma_config[1].gastadorjunior !== "null" ? alma_config[1].gastadorjunior : "null",
			        gastadorsenior: alma_config[1].gastadorsenior !== "null" ? alma_config[1].gastadorsenior : "null",
			        gastadorcompulsivo: alma_config[1].gastadorcompulsivo !== "null"  ? alma_config[1].gastadorcompulsivo : "null",
			        sombreromagico: alma_config[1].sombreromagico !== "null" ? alma_config[1].sombreromagico : "null",
			        reservadepoderi: alma_config[1].reservadepoderi !== "null" ? alma_config[1].reservadepoderi : "null",
			        reservadepoderii: alma_config[1].reservadepoderii !== "null" ? alma_config[1].reservadepoderii : "null"
				}).done(function(d){
					// console.log(d,"iiiiiiiiiii", rutaedit, "gggggggggggggggggg")
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
save_btn.onclick = function(){
	send_config()	
}

data_time_customized_balance.onchange = function(e){
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
left.onpointerdown = function(){
	let maxscroll = conjunt_images[0].scrollWidth - 200
	if (scrollhormas > 0 && scrollhormas <= maxscroll){
		scrollhormas -= window.screen.width <= 390 ? 100 : 600  
		conjunt_images[0].scrollTo(scrollhormas,0)
	} else {
		conjunt_images[0].scrollTo(maxscroll,0)
		scrollhormas = maxscroll
	}
}
right.onpointerdown = function(){
	let maxscroll = conjunt_images[0].scrollWidth - 200
	if (scrollhormas < maxscroll ){
		scrollhormas +=  window.screen.width <= 390 ? 100 : 600  
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
function show_1(){
	const show_1 = document.getElementById("show_1")
	let scrollhormas = 0
	show_1.onclick = function(){
		// left.style.display = "block"
		// right.style.display = "block"
		left.onpointerdown = function(){
			let maxscroll = conjunt_images[0].scrollWidth - 200
			if (scrollhormas > 0 && scrollhormas <= maxscroll){
				scrollhormas -= window.screen.width <= 390 ? 100 : 600  
				conjunt_images[0].scrollTo(scrollhormas,0)
			} else {
				conjunt_images[0].scrollTo(maxscroll,0)
				scrollhormas = maxscroll
			}
			console.log(scrollhormas, maxscroll, conjunt_images[0].scrollWidth)
		}
		right.onpointerdown = function(){
			let maxscroll = conjunt_images[0].scrollWidth - 200

			if (scrollhormas < maxscroll ){
				scrollhormas +=  window.screen.width <= 390 ? 100 : 600  
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

function show_2(){
	const show_2 = document.getElementById("show_2")
	let scrollhormas = 0
	show_2.onclick = function(){
		// left.style.display = "block"
		// right.style.display = "block"
		left.onpointerdown = function(){
			let maxscroll = conjunt_images[1].scrollWidth - 200
			if (scrollhormas > 0 && scrollhormas <= maxscroll){
				scrollhormas -= window.screen.width <= 390 ? 100 : 600  
				conjunt_images[1].scrollTo(scrollhormas,0)
			} else {
				conjunt_images[1].scrollTo(maxscroll,0)
				scrollhormas = maxscroll
			}
			console.log(scrollhormas, maxscroll, conjunt_images[1].scrollWidth)
		}
		right.onpointerdown = function(){
			let maxscroll = conjunt_images[1].scrollWidth - 200

			if (scrollhormas < maxscroll ){
				scrollhormas +=  window.screen.width <= 390 ? 100 : 600  
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

function show_3(){
	const show_3 = document.getElementById("show_3")
	let scrollhormas = 0
	show_3.onclick = function(){
		// left.style.display = "block"
		// right.style.display = "block"
		left.onpointerdown = function(){
			let maxscroll = conjunt_images[2].scrollWidth - 200
			if (scrollhormas > 0 && scrollhormas <= maxscroll){
				scrollhormas -= window.screen.width <= 390 ? 100 : 600  
				conjunt_images[2].scrollTo(scrollhormas,0)
			} else {
				conjunt_images[2].scrollTo(maxscroll,0)
				scrollhormas = maxscroll
			}
			console.log(scrollhormas, maxscroll, conjunt_images[2].scrollWidth)
		}
		right.onpointerdown = function(){
			let maxscroll = conjunt_images[2].scrollWidth - 200

			if (scrollhormas < maxscroll ){
				scrollhormas +=  window.screen.width <= 390 ? 100 : 600  
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


function show_myphothos(){
	const show_myphothos = document.getElementById("show_myphothos")
	let scrollhormas = 0

	show_myphothos.onclick = function(){
		// left.style.display = "block"
		// right.style.display = "block"
		left.onpointerdown = function(){
			let maxscroll = conjunt_images[3].scrollWidth - 200
			if (scrollhormas > 0 && scrollhormas <= maxscroll){
				scrollhormas -= window.screen.width <= 390 ? 100 : 600  
				conjunt_images[3].scrollTo(scrollhormas,0)
			} else {
				conjunt_images[3].scrollTo(maxscroll,0)
				scrollhormas = maxscroll
			}
			console.log(scrollhormas, maxscroll, conjunt_images[3].scrollWidth)
		}
		right.onpointerdown = function(){
			let maxscroll = conjunt_images[3].scrollWidth - 200

			if (scrollhormas < maxscroll ){
				scrollhormas +=  window.screen.width <= 390 ? 100 : 600  
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






