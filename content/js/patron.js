state_pan_tap = false // false => pan, true => tap
first_char_pass = ""; //Firts char pass
passg = ""; //Pass g

dat_post = {}
import_data_signup = (dat) => {
	dat_post.email = dat.email
	dat_post.usuario = dat.usuario

}

fetchConsult = (configdb, user, pass) => { 
	let tryConnect = 0; //Try number to connect

	let destiny = document.getElementById(configdb.insertDataInHTML) //HTML data destiny

	//Ajax

	const call_ajax = () => {
		$.post( "./content/php/login.php", { usuario: user, pass: first_char_pass + pass})
		  .done( dat => {
		  	console.log(dat)
		  	if (dat.match(/\<welcome\>/gim)){
		  		window.location.reload(false);
		  	}
		  });
		document.getElementsByClassName("inicio-container")[0].innerHTML += "<?php $_SESSION['login'] = TRUE; ?>"
		
	}


	if (configdb.signUp === false){ // Significa que el usuario se loguea
		call_ajax()
	} else {
	}
}

errorUserPage = (config, valueinputform) =>{
	//Aquí uno se inventa algo, atención al usuario, recuperación de password, etc.

	valueinputform.value = ""  //Se limpia formulario de login

	//En esta función se invocará el componente hacia la pagina de error
	let errorPage = config.components.access_ErrorLoginPage

	// window.location.href = errorPage; //Access
	// alert("Demasiados intentos")
	//Change state and access
}

accessToUserPage = (config, formAndSys, valueinputform, pass) => { //Acceso a la página de usuario una vez logra login
	// ----------- remove sys ---------- validated login -------------------


	formAndSys.sys.animate([{ 
		opacity: 1
	},{
		opacity: 0
	}],{duration:1000, iterations:1})

	setTimeout(()=>{
		formAndSys.form.remove() 
		formAndSys.sys.remove() 
	},1150)
	

	//Se activa la carga de datos usando AJAX y la página de Usuario donde se accederá
	fetchConsult(config, valueinputform.value, pass)
	valueinputform.value = ""  //Se limpia formulario de login

	// window.location.href = userPage; //Access
	// alert(`Bienvenid@ ${config.login.userReference}`)
}

Pattmo = (container, config) => {
	container = document.getElementById(container)
	const btn_mode_loginn = document.getElementsByClassName("login-change-way")[0]
	if (btn_mode_loginn !== undefined){
		btn_mode_loginn.style.outline ="none"
		btn_mode_loginn.style.border = "none"
		btn_mode_loginn.style.zIndex = "3"
	}

	const modules_div_validate_exist = document.getElementsByClassName("modulos")[0]
	if (modules_div_validate_exist !== undefined){
		if (btn_mode_loginn !== undefined){
			btn_mode_loginn.style.display = "none"
			btn_mode_loginn.style.opacity = "0"
		}
	} else if (window.location.href.match(/action\=registro/gim)) {
		if (btn_mode_loginn !== undefined){
			btn_mode_loginn.style.display = "block"
			btn_mode_loginn.style.opacity = "1"
		}
	} else {
		if (btn_mode_loginn !== undefined){

			btn_mode_loginn.style.display = "block"
			btn_mode_loginn.style.opacity = "1"
		}
	
	}
	

	let bolshowhide = false
	if (btn_mode_loginn !== undefined){
		btn_mode_loginn.onclick = () => {
			bolshowhide = !bolshowhide
			if (window.location.href.match(/action\=registro/gim)){
				change_tap_pan_signup()
			} else {
				change_tap_pan_login()
			}
		}
	}

	function change_tap_pan_login(){ // FOR LOGIN
		if (bolshowhide){ //Tap
			btn_mode_loginn.innerHTML = "Tap"
			btn_mode_loginn.value ="Tap"
			container.innerHTML = ""

			if (container !== null){
				container.style.display="flex"
				container.style.justifyContent = "center"
				container.style.alignItems ="center"
			}

			let form = document.createElement("form")
			form.style.display = "flex"
			form.style.flexFlow = "row wrap"
			form.style.margin = "auto" 
			form.animate([{transform:"scale(0.8)"},{transform:"scale(1)"}], {duration:700, iterations:1})
			//----------------------

			form.style.zIndex = "1"
			form.style.position = "absolute"

			let itext = document.createElement("input")
			itext.setAttribute("type","text")
			itext.setAttribute("id","username")
			itext.setAttribute("name","username")
			itext.setAttribute("placeholder", "Usuario o email")

			let userValue =""
			itext.addEventListener("change",(e)=>{ //Read username
				userValue = e.target.value	
			})

			form.appendChild(itext)

			if (container !== null){
				container.appendChild(form)
			}

			let pattern = document.createElement("div")
			pattern.setAttribute("id","pattern")
			pattern.animate([{
				transform: "rotate(-3deg) scale(0.9)"
			},{
				transform: "rotate(0deg) scale(1)"
			}],{duration:700, iterations:1})





			//------------------ Acceder Luego de ingresar todos los taps ---------------
			const btn_accept_init = document.createElement("button")
			btn_accept_init.innerHTML = "Aceptar"
			btn_accept_init.className += " btn btn-primary btn-lg btn-acept-log-tap"
			btn_accept_init.animate([{
				opacity:0,
				transform:"scale(0.8)"
			},{
				opacity:1,
				transform:"scale(1)"
			}],{duration:800, iterations:1})

			btn_accept_init.style.position = "absolute"
			btn_accept_init.style.margin = "auto"
			btn_accept_init.style.bottom = "-90px"
			btn_accept_init.style.display = "none"
			container.style.position = "relative"
			container.style.justifyContent = "center"
			container.style.alignItems = "center"
			container.appendChild(btn_accept_init)

			const btn_next = document.createElement("button")
			btn_next.innerHTML = "Siguiente"
			btn_next.style.position = "absolute"
			btn_next.style.margin = "auto"
			btn_next.style.bottom = "0px"
			btn_next.style.zIndex = "30"
			container.appendChild(btn_next)
			btn_next.className += "btn btn-primary btn-lg btn-next-log-tap"
			btn_next.onclick = () => {
				if (document.getElementById("username").value !== ""){
					pattern.style.opacity = "1"
					pattern.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
					document.getElementById("username").style.display = "none"
					btn_next.style.display = "none"
					document.getElementById("username").animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
					btn_volver.style.display = "block"
					btn_volver.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
				
					btn_accept_init.style.display = "block"
					btn_accept_init.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
				
				} else {
					alertify.error("Escribe nombre de usuario o email")
				}
			}

			const btn_volver = document.createElement("button")
			btn_volver.innerHTML = "Volver"
			btn_volver.style.position = "absolute"
			btn_volver.style.margin = "auto"
			btn_volver.style.bottom = "-150px"
			btn_volver.classList += "btn btn-light btn-lg btn-volver-log-tap"
			btn_volver.style.display = "none"
			container.appendChild(btn_volver)
			btn_volver.onclick = () => {
				btn_next.style.display = "block"
				btn_next.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
				btn_volver.style.display = "none"
				btn_accept_init.style.display = "none"
				// pattern.style.display = "none"
				pattern.style.opacity = "0"
				document.getElementById("username").style.display = "block"
				document.getElementById("username").style.opacity = "1"
				form.style.display = "block"
				form.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
			}


			

			//----------------------------------------------------------
		
			let bool = false; let boolMouseOver = false; //Don't touch
			let pass = "";  let bfixAnActiveInput = false;

			document.querySelector("form").addEventListener("submit",(e)=> {
				e.preventDefault()
				if (userValue !== ""){
					btn_next.style.display = "none"
					btn_accept_init.style.display = "block"
					btn_volver.style.display = "block"
					pattern.style.opacity = "1"
					pattern.animate([
						{opacity:0},
						{opacity:1}],
						{duration:1000, iterations:1})
					form.style.display = "none"

					for (let x = 0; x < 9; x++){
						document.getElementsByClassName("box-rounded")[x].animate([{
							transform: `scale(${0.14* -x})`, background: "#4B367C"
						},{
							transform: `scale(1)`, background: "#f2f2f2"
						}],{duration:1000, iterations:1})
					}
				}else {
					alertify.error("Escribe nombre de usuario o email")
					pattern.style.opacity = "0"
					btn_next.style.display = "block"
					document.getElementById("username").style.display = "block"
					document.getElementById("username").style.opacity = "1"
					btn_accept_init.style.display = "none"
					btn_volver.style.display = "none"
					form.animate([{opacity:1},{opacity:0}],{duration:1000, iterations:1})
					form.style.display = "block"
				}
			})

			
			pattern.style.opacity = userValue === "" ? "0" : "1" // Hide - Show initial


			let tryNumber = 0; //Número de intentos

			let abc = ["a","b","c","d","e","f","g","h","i"] //Valores de los cuadros

			for (let x = 0; x < 9; x++){ //Crear divs, asignarles valores, estilo, animaciones, y configuración
				const div = document.createElement("div");
				div.classList.add("box-rounded");
				div.className += " br-" + (x+1)
				div.setAttribute("name", abc[x]);
				
				div.style.background = "#fff"
				div.style.borderRadius = "20px"

				if (config.config.letters === true){
					div.innerHTML = abc[x]
				}

				pattern.appendChild(div);

				// ---------------------- FOR DESKTOP ------------------------------

				pattern.addEventListener("pointerdown",()=>{
					if (pattern.style.opacity !== "0"){
						bool = true; 
						boolMouseOver = true;
						bfixAnActiveInput = true;
					}

					// document.querySelector("html").addEventListener("pointerup",()=>{
					// 	tryNumber += 1;
					// 	bool = false;
					// 	boolMouseOver = false;
					// 	bfixAnActiveInput = false;
					// 	div.style.background = "#f2f2f2";
					// });
					
				});

				pattern.ondragstart = () => false;
				if (container !== null) container.appendChild(pattern);
			};

			let div = document.getElementsByClassName("box-rounded")

			//Detect combination for create password
			for (let x=0; x < 9; x++){
				if (div[x] !== undefined){
					div[x].onpointerdown = () => {
						if (pattern.style.opacity !== "0"){
							console.log("tap")

							pass += div[x].getAttribute("name")
							div[x].style.background = "rgb(125,27,233,0.40)"
							div[x].animate([
								{
									background:"rgb(75,54,124,0.80)"
								},{
									background:"rgb(125,27,233,0.40)"
								}
							],{duration:350, iterations:1})
							console.log(pass,":..")
						}
						
					}
				}
			}

			btn_accept_init.addEventListener("pointerup",()=>{
				if (config.config.showPasswordInConsole){
					console.log(pass)
				}
				//Detect combination for create password
				for (let x=0; x < 9; x++){
					if (div[x] !== undefined){
						div[x].style.background = "#fff"
					}
				}
				
				// if (config.user_data_from_db){
					if (userValue !== "" && bfixAnActiveInput){ //Requerir nombre de usuario
						// console.log(pass, tryNumber, "try")
						if (tryNumber > 230 && pass !== config.login.passwordReference) { 
						 // errorUserPage(config, itext); //Demasiados intentos, accede a pagina de error, ayuda/soporte
							// errorUserPage(config, itext); //Demasiados intentos, accede a pagina de error, ayuda/soporte
							alert("Muchos intentos")
							window.location.reload(false)
						}

						// ------------------------ Validation-----------------------------
						

						$.post( "./content/php/login.php", { usuario: userValue, pass: pass})
						  .done( dat => {
						  	// console.log(dat)
						  	if (dat.match(/\<welcome\>/gim)){
						  		window.location.reload(false);
						  		accessToUserPage(config, { form: form, sys: pattern}, itext, pass)

								boolMouseOver = false
								tryNumber = 0
						  	} else {
								// alert(`Datos inválidos ${userValue}`)
								alertify.error(`Datos inválidos ${userValue}`)
								// console.log("Datos inválidos", userValue	)
							}	

							pass = "" //Reinicio de variable password para nuevo intento
							bfixAnActiveInput = false
						  });
					} else {
						pass = "" //Reinicio de variable password para nuevo intento
						// console.log("Necesitas escribir tu nombre de usuario")
					}
					pass = ""
				// }
			})
			// ------------------------- END FOR DESKTOP ------------------------------
		} else { //Pan
			if (btn_mode_loginn !== undefined){
				btn_mode_loginn.innerHTML = "Pan"
				btn_mode_loginn.value ="Pan"
			}
			if (container !== null){

				container.innerHTML = ""
			}

			if (container !== null){
				container.style.display="flex"
				container.style.justifyContent = "center"
				container.style.alignItems ="center"
			}

			let form = document.createElement("form")
			form.style.display = "flex"
			form.style.flexFlow = "row wrap"
			form.style.margin = "auto" 
			form.animate([{transform:"scale(0.8)"},{transform:"scale(1)"}], {duration:700, iterations:1})
			//----------------------

			form.style.zIndex = "1"
			form.style.position = "absolute"

			let itext = document.createElement("input")
			itext.setAttribute("type","text")
			itext.setAttribute("id","username")
			itext.setAttribute("name","username")
			itext.setAttribute("placeholder", "Usuario o Email")

			let userValue =""
			itext.addEventListener("change",(e)=>{ //Read username
				userValue = e.target.value	
			})

			form.appendChild(itext)

			if (container !== null){
				container.appendChild(form)
			}

			let pattern = document.createElement("div")
			pattern.setAttribute("id","pattern")
			pattern.animate([{
				transform: "rotate(-3deg) scale(0.9)"
			},{
				transform: "rotate(0deg) scale(1)"
			}],{duration:700, iterations:1})

			const btn_next = document.createElement("button")
			btn_next.innerHTML = "Siguiente"
			btn_next.style.position = "absolute"
			btn_next.style.margin = "auto"
			btn_next.style.bottom = "0px"
			btn_next.style.zIndex = "30"
			if (container !== null){
				container.appendChild(btn_next)
			}
			btn_next.className += "btn btn-primary btn-lg btn-next-log-tap"
			btn_next.onclick = () => {
				if (document.getElementById("username").value !== ""){
					pattern.style.opacity = "1"
					pattern.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
					document.getElementById("username").style.display = "none"
					btn_next.style.display = "none"
					document.getElementById("username").animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
					btn_volver.style.display = "block"
					btn_volver.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
				
					
				} else {
					alertify.error("Escribe un nombre de usuario o email")
				}
			}

			const btn_volver = document.createElement("button")
			btn_volver.innerHTML = "Volver"
			btn_volver.style.position = "absolute"
			btn_volver.style.margin = "auto"
			btn_volver.style.bottom = "-120px"
			btn_volver.classList += "btn btn-light btn-lg btn-volver-log-tap"
			btn_volver.style.display = "none"
			if (container !== null){
				container.appendChild(btn_volver)
			}
			btn_volver.onclick = () => {
				btn_next.style.display = "block"
				btn_next.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
				btn_volver.style.display = "none"
				// pattern.style.display = "none"
				pattern.style.opacity = "0"
				document.getElementById("username").style.display = "block"
				form.style.display = "block"
				form.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
			}


			let bool = false; let boolMouseOver = false; //Don't touch
			let pass = "";  let bfixAnActiveInput = false;

			if (document.querySelector("form") !== null){
				document.querySelector("form").addEventListener("submit",(e)=> {
					e.preventDefault()
					if (userValue !== ""){
						btn_next.style.display = "none"
						btn_volver.style.display = "block"
						btn_volver.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
						pattern.style.opacity = "1"
						pattern.animate([
							{opacity:0},
							{opacity:1}],
							{duration:1000, iterations:1})
						form.style.display = "none"

						for (let x = 0; x < 9; x++){
							document.getElementsByClassName("box-rounded")[x].animate([{
								transform: `scale(${0.14* -x})`, background: "#4B367C"
							},{
								transform: `scale(1)`, background: "#f2f2f2"
							}],{duration:1000, iterations:1})
						}
					}else {
						pattern.style.opacity = "0"
						form.animate([{opacity:1},{opacity:0}],{duration:1000, iterations:1})
						form.style.display = "block"
						alertify.error("Escribe un nombre de usuario o email")
					}
				})
			}

			
			pattern.style.opacity = userValue === "" ? "0" : "1" // Hide - Show initial


			let tryNumber = 0; //Número de intentos

			let abc = ["a","b","c","d","e","f","g","h","i"] //Valores de los cuadros

			for (let x = 0; x < 9; x++){ //Crear divs, asignarles valores, estilo, animaciones, y configuración
				const div = document.createElement("div");
				div.classList.add("box-rounded");
				div.className += " br-" + (x+1)
				div.setAttribute("name", abc[x]);
				
				div.style.background = "#fff"
				div.style.borderRadius = "20px"

				if (config.config.letters === true){
					div.innerHTML = abc[x]
				}

				pattern.appendChild(div);

				// ---------------------- FOR DESKTOP ------------------------------

				pattern.addEventListener("pointerdown",()=>{
					if (pattern.style.opacity !== "0"){
						bool = true; 
						boolMouseOver = true;
						bfixAnActiveInput = true;
					}

					div.addEventListener("pointermove", ()=>{
						if (bool){
							div.style.background = "rgb(125,27,233,0.40)"
							div.animate([
								{
									background:"rgb(75,54,124,0.80)"
								},{
									background:"rgb(125,27,233,0.40)"
								}
							],{duration:350, iterations:1})
						} 
					})

					document.querySelector("html").addEventListener("pointerup",()=>{
						tryNumber += 1;
						bool = false;
						boolMouseOver = false;
						bfixAnActiveInput = false;
						div.style.background = "#f2f2f2";
					});
					
				});

				pattern.ondragstart = () => false;
				if (container !== null) container.appendChild(pattern);
			};

			let div = document.getElementsByClassName("box-rounded")

			//Detect combination for create password
			for (let x=0; x < 9; x++){
				if (div[x] !== undefined){
					div[x].addEventListener("pointerover",()=>{
						if (boolMouseOver){
							pass += div[x].getAttribute("name");
							// console.log(pass, tryNumber, "try")
						} 
					})
				}
			}


			//Detect first char at the pass
			for (let x=0; x < 9; x++){
				if (div[x] !== undefined){
					div[x].addEventListener("pointerdown",(e) => {
						// if (boolMouseOver){
							if (pattern.style.opacity !== "0"){

								first_char_pass += div[x].getAttribute("name");
								first_char_pass = first_char_pass.replace("undefined", "")
							}
							// console.log(first_char_pass)
							// console.log(first_char_pass)
							// console.log(pass, tryNumber, "try")
						// }
					})
				}
			}

			document.querySelector("html").addEventListener("pointerup",()=>{
				console.log(first_char_pass+ pass)
				if (config.config.showPasswordInConsole){
					console.log(pass)
				}
				
				// if (config.user_data_from_db){
					if (userValue !== "" && bfixAnActiveInput){ //Requerir nombre de usuario
						// console.log(pass, tryNumber, "try")
						if (tryNumber > 230 && pass !== config.login.passwordReference) { 
							// errorUserPage(config, itext); //Demasiados intentos, accede a pagina de error, ayuda/soporte
							alert("Muchos intentos")
							window.location.reload(false)
						}	

						// ------------------------ Validation-----------------------------
						
						
						$.post( "./content/php/login.php", { usuario: userValue, pass: first_char_pass + pass})
						  .done( dat => {
						  	console.log(dat)
						  	if (dat.match(/\<welcome\>/gim)){
						  		window.location.reload(false);
						  		accessToUserPage(config, { form: form, sys: pattern}, itext, pass)

								boolMouseOver = false
								tryNumber = 0
						  	} else {
								// alert(`Datos inválidos ${userValue}`)
								alertify.error(`Datos inválidos ${userValue}`)
								// console.log("Datos inválidos", userValue	)
							}	

							pass = "" //Reinicio de variable password para nuevo intento
							first_char_pass = ""
							bfixAnActiveInput = false
						  });
					} else {
						pass = "" //Reinicio de variable password para nuevo intento
						// console.log("Necesitas escribir tu nombre de usuario")
					}
				// }
			})
			// ------------------------- END FOR DESKTOP ------------------------------
			

			// --------------------- FOR MÓVIL ------------------------------------

			let boxes = document.getElementsByClassName("box-rounded")
					
			if (navigator.userAgent.match(/chrome/gim) !== null){
				pattern.ontouchmove = () => {
					pattern.onpointermove = e => {

						// if (chantap === false){ //Mode pan

						// 	window.scrollTo(0,0)
						// }

						let x = e.touches ? e.touches[0].pageX : e.pageX
						let y = e.touches ? e.touches[0].pageY : e.pageY

						// get element in coordinates:
						var targetElement = document.elementFromPoint(x, y);

						let letter = targetElement !== null ? targetElement.getAttribute("name") : null

						if (letter !== null && letter !== undefined){
						  if (letter === "a"){
						  	boxes[0].setPointerCapture(e.pointerId)
						  } 
						  if (letter === "b"){
						  	boxes[1].setPointerCapture(e.pointerId)
						  } 
						  if (letter === "c"){
						  	boxes[2].setPointerCapture(e.pointerId)
						  } 
						  if (letter === "d"){
						  	boxes[3].setPointerCapture(e.pointerId)
						  }
						  if (letter === "e"){
						  	boxes[4].setPointerCapture(e.pointerId)
						  } 
						  if (letter === "f"){
						  	boxes[5].setPointerCapture(e.pointerId)
						  } 
						  if (letter === "g"){
						  	boxes[6].setPointerCapture(e.pointerId)
						  } 
						  if (letter === "h"){
						  	boxes[7].setPointerCapture(e.pointerId)
						  } 
						  if (letter === "i"){
						  	boxes[8].setPointerCapture(e.pointerId)
						  }

						}
					}
				}
			} else {
				let adv_signal = false
				let sign_for_sume_point = false //Don't repeat in concaten
				let boxes = document.getElementsByClassName("box-rounded")
				// let get_to_pass = "" //For independient verssion
				
				pattern.onpointerdown = (e) =>{
					adv_signal = true
				}
					
				pattern.addEventListener("touchmove", (tm)=>{
					window.addEventListener("pointermove",(event)=>{
						event.preventDefault()
					const del_first = () => {
						let pro = get_to_pass.split("")
						pro = pro.filter((e,i)=>{

							if (i !== 0) return e;
						})
						pro = pro.toString().replace(/,/gim, "")
						get_to_pass = pro
					}

						//It's required to fix a problem about the first char on passwords
						//For now, that is no necesary, due to the use of the setPointerCapture, but
						//For an independient version movil, is required detect complete passwords 
						//without the use of the setPointerCapture
						if (adv_signal){
							//setPointerCapture activa el elemento cuando el touch se toca en algun otro punto

							let xof = event.offsetX
							let yof = event.offsetY
							let x_layer = event.layerX
							let y_layer = event.layerY

							let advoff = false

							if (xof >= 0 && xof <= 87){
								advoff = true
							} else {
							}

								let xi_ball = 107  //Included margin | xi = x_init position inside ball
								let xl_ball = 170  //Included margin | xl = x_last position inside ball
								let yi_ball = 45  //Included margin | yi = y_init position inside ball
								let yl_ball = 120  //Included margin | yl = y_last position inside ball
								if (x_layer === 40 && x_layer === 200){
									alert("jas")
								}
								if (
									// x_layer > xi_ball && //Ball 1
									x_layer < xl_ball && 
									y_layer > yi_ball && 
									y_layer < yl_ball){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[0].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[0].getAttribute("name")
									} 
								
								} else if ( //Ball 2
									x_layer > xi_ball * 2 - 40  && 
									x_layer < xl_ball * 2 - 100 &&
									y_layer > yi_ball  &&
									y_layer < yl_ball){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[1].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[1].getAttribute("name")
										
									} 
								} else if ( //Ball 3
									x_layer > xi_ball * 3 - 50 && 
									x_layer < xl_ball * 3 - 100 &&
									y_layer > yi_ball  &&
									y_layer < yl_ball){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[2].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[2].getAttribute("name")
									} 
								} else if ( //Ball 4
									// x_layer > xi_ball && 
									x_layer < xl_ball &&
									y_layer > yi_ball * 3 &&
									y_layer < yl_ball * 2 - 25){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[3].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[3].getAttribute("name")
									}  
								} else if ( //Ball 5
									x_layer > xi_ball * 2 - 40  && 
									x_layer < xl_ball * 2 - 100 &&
									y_layer > yi_ball * 3 &&
									y_layer < yl_ball * 2 - 25){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[4].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[4].getAttribute("name")
									}  
								} else if ( //Ball 6
									x_layer > xi_ball * 3 - 50 && 
									x_layer < xl_ball * 3 - 100 &&
									y_layer > yi_ball * 3 &&
									y_layer < yl_ball * 2 - 25){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[5].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[5].getAttribute("name")
									}  
								} else if ( //Ball 7
									// x_layer > xi_ball && 
									x_layer < xl_ball &&
									y_layer > yi_ball * 4 + 45 &&
									y_layer < yl_ball * 3 - 60){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[6].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[6].getAttribute("name")
									}  
								} else if ( //Ball 8
									x_layer > xi_ball * 2 - 40  && 
									x_layer < xl_ball * 2 - 100 &&
									y_layer > yi_ball * 4 + 45 &&
									y_layer < yl_ball * 3 - 60){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[7].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[7].getAttribute("name")
									}  
								} else if ( //Ball 9
									x_layer > xi_ball * 3 - 50 && 
									x_layer < xl_ball * 3 - 100 &&
									y_layer > yi_ball * 4 + 45 &&
									y_layer < yl_ball * 3 - 60){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[8].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[8].getAttribute("name")
									}  
								} else {
									sign_for_sume_point = false
									adv_to_delete_first_char = false
								}
								if (event.pointerId === 2){
									// get_to_pass = ""
								}
							// console.log(event)
						}
					})
				})

				pattern.onpointerup = (event) => {
					adv_signal = false
					// del_first() //For independient verssion
					// console.log(get_to_pass, "get_to_pass, movil")
					// get_to_pass = ""
				}
			}
			// --------------------- END MOVIL --------------------------------
		}
	}

	function change_tap_pan_signup(){ // FOR SIGN UP
		if (bolshowhide){ //Tap

			let btn_registrarse = document.getElementsByClassName("registrarse-btn")[0]
			btn_registrarse.style.display = "block"
			if (btn_mode_loginn !== undefined){
				btn_mode_loginn.innerHTML = "Tap"
				btn_mode_loginn.value = "Tap"
			}
			if (container !== null){

				container.innerHTML = ""
			}

			if (container !== null){
				container.style.display="flex"
				container.style.justifyContent = "center"
				container.style.alignItems ="center"
			}

		
			let pattern = document.createElement("div")
			pattern.setAttribute("id","pattern")
			pattern.animate([{
				transform: "rotate(-3deg) scale(0.9)"
			},{
				transform: "rotate(0deg) scale(1)"
			}],{duration:700, iterations:1})

			

			//----------------------------------------------------------
		


			let bool = false; let boolMouseOver = false; //Don't touch
			let pass = "";  let bfixAnActiveInput = false;


			let tryNumber = 0; //Número de intentos

			let abc = ["a","b","c","d","e","f","g","h","i"] //Valores de los cuadros

			for (let x = 0; x < 9; x++){ //Crear divs, asignarles valores, estilo, animaciones, y configuración
				const div = document.createElement("div");
				div.classList.add("box-rounded");
				div.className += " br-" + (x+1)
				div.setAttribute("name", abc[x]);
				
				div.style.background = "#fff"
				div.style.borderRadius = "20px"

				if (config.config.letters === true){
					div.innerHTML = abc[x]
				}

				pattern.appendChild(div);

				// ---------------------- FOR DESKTOP ------------------------------

				pattern.addEventListener("pointerdown",()=>{
					bool = true; 
					boolMouseOver = true;
					bfixAnActiveInput = true;

				

					document.querySelector("html").addEventListener("pointerup",()=>{
						tryNumber += 1;
						bool = false;
						boolMouseOver = false;
						bfixAnActiveInput = false;
					});
					
				});

				pattern.ondragstart = () => false;
				if (container !== null) container.appendChild(pattern);
			};

			let div = document.getElementsByClassName("box-rounded")

			//Detect combination for create password
			for (let x=0; x < 9; x++){
				if (div[x] !== undefined){
					div[x].addEventListener("pointerdown",()=>{
						pass += div[x].getAttribute("name");

						passg = pass

						div[x].style.background = "rgb(125,27,233,0.40)"
						div[x].animate([
							{
								background:"rgb(75,54,124,0.80)"
							},{
								background:"rgb(125,27,233,0.40)"
							}
						],{duration:350, iterations:1})
						// console.log(pass, tryNumber, "try")
					})
				
				}
			}


			//Detect first char at the pass
			for (let x=0; x < 9; x++){
				if (div[x] !== undefined){
					div[x].addEventListener("pointerdown",(e) => {
						// if (boolMouseOver){
							first_char_pass += div[x].getAttribute("name");
							first_char_pass = first_char_pass.replace("undefined", "")
							// console.log(first_char_pass)
							console.log(first_char_pass, "zzzaaaaaaaaaaaakak")
							// console.log(pass, tryNumber, "try")
						// }
					})
				}
			}
			
			// ------------------------- END FOR DESKTOP ------------------------------

			
		} else { //Pan
			let btn_registrarse = document.getElementsByClassName("registrarse-btn")[0]
			if (btn_registrarse !== undefined){
				if (btn_registrarse.value !== "Siguiente"){
					btn_registrarse.style.display = "none"
				}
			}

			if (btn_mode_loginn !== undefined){
				btn_mode_loginn.innerHTML = "Pan"
				btn_mode_loginn.value ="Pan"
			}
			if (container !== null){
				container.innerHTML = ""
			}

			if (container !== null){
				container.style.display="flex"
				container.style.justifyContent = "center"
				container.style.alignItems ="center"
			}

		
			let pattern = document.createElement("div")
			pattern.setAttribute("id","pattern")
			pattern.animate([{
				transform: "rotate(-3deg) scale(0.9)"
			},{
				transform: "rotate(0deg) scale(1)"
			}],{duration:700, iterations:1})


			let bool = false; let boolMouseOver = false; //Don't touch
			let pass = "";  let bfixAnActiveInput = false;


			let tryNumber = 0; //Número de intentos

			let abc = ["a","b","c","d","e","f","g","h","i"] //Valores de los cuadros

			for (let x = 0; x < 9; x++){ //Crear divs, asignarles valores, estilo, animaciones, y configuración
				const div = document.createElement("div");
				div.classList.add("box-rounded");
				div.className += " br-" + (x+1)
				div.setAttribute("name", abc[x]);
				
				div.style.background = "#fff"
				div.style.borderRadius = "20px"

				if (config.config.letters === true){
					div.innerHTML = abc[x]
				}

				pattern.appendChild(div);

				// ---------------------- FOR DESKTOP ------------------------------

				pattern.addEventListener("pointerdown",()=>{
					bool = true; 
					boolMouseOver = true;
					bfixAnActiveInput = true;

					div.addEventListener("pointermove", ()=>{
						if (bool){
							div.style.background = "rgb(125,27,233,0.40)"
							div.animate([
								{
									background:"rgb(75,54,124,0.80)"
								},{
									background:"rgb(125,27,233,0.40)"
								}
							],{duration:350, iterations:1})
						} 
					})

					document.querySelector("html").addEventListener("pointerup",()=>{
						tryNumber += 1;
						bool = false;
						boolMouseOver = false;
						bfixAnActiveInput = false;
						div.style.background = "#f2f2f2";
					});
					
				});

				pattern.ondragstart = () => false;
				if (container !== null) container.appendChild(pattern);
			};

			let div = document.getElementsByClassName("box-rounded")

			//Detect combination for create password
			for (let x=0; x < 9; x++){
				if (div[x] !== undefined){
					div[x].addEventListener("pointerover",()=>{
						if (boolMouseOver){
							pass += div[x].getAttribute("name");
							// console.log(pass, tryNumber, "try")
						} 
					})
				}
			}


			//Detect first char at the pass
			for (let x=0; x < 9; x++){
				if (div[x] !== undefined){
					div[x].addEventListener("pointerdown",(e) => {
						// if (boolMouseOver){
							first_char_pass += div[x].getAttribute("name");
							first_char_pass = first_char_pass.replace("undefined", "")
							// console.log(first_char_pass)
							console.log(first_char_pass, "zzzaaaaaaaaaaaakak")
							// console.log(pass, tryNumber, "try")
						// }
					})
				}
			}

			let count_try_for_signup = 0
			let ver_pass = {}

			document.querySelector("html").addEventListener("pointerup",()=>{
				if (config.config.showPasswordInConsole){
					console.log(pass)
				}
				
				// if (config.user_data_from_db){
					if (bfixAnActiveInput){ //Requerir nombre de usuario
						// console.log(pass, tryNumber, "try")
						if (tryNumber > 230 && pass !== config.login.passwordReference) { 
						 	// errorUserPage(config, itext); //Demasiados intentos, accede a pagina de error, ayuda/soporte
							alert("Muchos intentos")
							window.location.reload(false)
						}

						// ------------------------ Validation-----------------------------
						
						count_try_for_signup += 1

						if (count_try_for_signup === 1){
							ver_pass.first_char_pass = first_char_pass
							ver_pass.tryone = pass
							pass = ""
							document.getElementsByClassName("label_state")[0].style.color = "white"
							document.getElementsByClassName("label_state")[0].innerHTML =  "* Repita clave por favor"
							
						} else if (count_try_for_signup === 2){
							ver_pass.first_char_pass = first_char_pass
							ver_pass.trytwo = pass
							pass =""
						}
						
						if (count_try_for_signup === 2){
							if (ver_pass.tryone === ver_pass.trytwo){

								$.post( "./content/php/registro/registrando.php", { mail: dat_post.email, usuario: dat_post.usuario, pass: ver_pass.first_char_pass + ver_pass.trytwo})
								  .done( dat => {
								  	if (dat.match(/\<successfully\>/gim)){
								  		document.getElementsByClassName("label_state")[0].style.color = "#fff"
								  		alertify.success("Registro satisfactorio")
								  		setTimeout(()=>{
											window.location.href = "index.php"
								  		},1600)
										boolMouseOver = false
										tryNumber = 0
								  	}
								  		
									pass = "" //Reinicio de variable password para nuevo intento
									// first_char_pass = ""
									bfixAnActiveInput = false
								  });
							} else {
								document.getElementsByClassName("label_state")[0].style.color = "red"
								document.getElementsByClassName("label_state")[0].innerHTML =  `* Error de coincidencia, vuelva a intentar`
								//Reinicio de oportunidad
								count_try_for_signup = 0
								ver_pass= {}
								pass = ""
								// first_char_pass = ""
							}
						}  else if (count_try_for_signup === 3){
							count_try_for_signup = 0
							ver_pass= {}
							pass = ""
						}
						first_char_pass = ""
						pass = ""
					} else {
						pass = "" //Reinicio de variable password para nuevo intento
						// console.log("Necesitas escribir tu nombre de usuario")
						// first_char_pass = ""
					}
					pass = ""
					bfixAnActiveInput = false
				// }
			})
			// ------------------------- END FOR DESKTOP ------------------------------
			

			// --------------------- FOR MÓVIL ------------------------------------

			let boxes = document.getElementsByClassName("box-rounded")

			if (navigator.userAgent.match(/chrome/gim) !== null){
				pattern.ontouchmove = () => {
					pattern.onpointermove = e => {
						// if (chantap === false){ //Mode pan

						// 	window.scrollTo(0,0)
						// }

						let x = e.touches ? e.touches[0].pageX : e.pageX
						let y = e.touches ? e.touches[0].pageY : e.pageY

						// get element in coordinates:
						var targetElement = document.elementFromPoint(x, y);

						let letter = targetElement !== null ? targetElement.getAttribute("name") : null

						if (letter !== null && letter !== undefined){
						  if (letter === "a"){
						  	boxes[0].setPointerCapture(e.pointerId)
						  } 
						  if (letter === "b"){
						  	boxes[1].setPointerCapture(e.pointerId)
						  } 
						  if (letter === "c"){
						  	boxes[2].setPointerCapture(e.pointerId)
						  } 
						  if (letter === "d"){
						  	boxes[3].setPointerCapture(e.pointerId)
						  }
						  if (letter === "e"){
						  	boxes[4].setPointerCapture(e.pointerId)
						  } 
						  if (letter === "f"){
						  	boxes[5].setPointerCapture(e.pointerId)
						  } 
						  if (letter === "g"){
						  	boxes[6].setPointerCapture(e.pointerId)
						  } 
						  if (letter === "h"){
						  	boxes[7].setPointerCapture(e.pointerId)
						  } 
						  if (letter === "i"){
						  	boxes[8].setPointerCapture(e.pointerId)
						  }

						}
					}
				}
			} else {
				let adv_signal = false
				let sign_for_sume_point = false //Don't repeat in concaten
				let boxes = document.getElementsByClassName("box-rounded")
				// let get_to_pass = "" //For independient verssion
				
				pattern.onpointerdown = (e) =>{
					adv_signal = true
				}
					
				pattern.addEventListener("touchmove", (tm)=>{
					window.addEventListener("pointermove",(event)=>{
						event.preventDefault()
					const del_first = () => {
						let pro = get_to_pass.split("")
						pro = pro.filter((e,i)=>{
							if (i !== 0) return e;
						})
						pro = pro.toString().replace(/,/gim, "")
						get_to_pass = pro
					}

						//It's required to fix a problem about the first char on passwords
						//For now, that is no necesary, due to the use of the setPointerCapture, but
						//For an independient version movil, is required detect complete passwords 
						//without the use of the setPointerCapture
						if (adv_signal){
							//setPointerCapture activa el elemento cuando el touch se toca en algun otro punto

							let xof = event.offsetX
							let yof = event.offsetY
							let x_layer = event.layerX
							let y_layer = event.layerY

							let advoff = false

							if (xof >= 0 && xof <= 87){
								advoff = true
							} else {
							}

								let xi_ball = 107  //Included margin | xi = x_init position inside ball
								let xl_ball = 170  //Included margin | xl = x_last position inside ball
								let yi_ball = 45  //Included margin | yi = y_init position inside ball
								let yl_ball = 120  //Included margin | yl = y_last position inside ball
								if (x_layer === 40 && x_layer === 200){
									alert("jas")
								}
								if (
									// x_layer > xi_ball && //Ball 1
									x_layer < xl_ball && 
									y_layer > yi_ball && 
									y_layer < yl_ball){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[0].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[0].getAttribute("name")
									} 
								
								} else if ( //Ball 2
									x_layer > xi_ball * 2 - 40  && 
									x_layer < xl_ball * 2 - 100 &&
									y_layer > yi_ball  &&
									y_layer < yl_ball){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[1].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[1].getAttribute("name")
										
									} 
								} else if ( //Ball 3
									x_layer > xi_ball * 3 - 50 && 
									x_layer < xl_ball * 3 - 100 &&
									y_layer > yi_ball  &&
									y_layer < yl_ball){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[2].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[2].getAttribute("name")
									} 
								} else if ( //Ball 4
									// x_layer > xi_ball && 
									x_layer < xl_ball &&
									y_layer > yi_ball * 3 &&
									y_layer < yl_ball * 2 - 25){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[3].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[3].getAttribute("name")
									}  
								} else if ( //Ball 5
									x_layer > xi_ball * 2 - 40  && 
									x_layer < xl_ball * 2 - 100 &&
									y_layer > yi_ball * 3 &&
									y_layer < yl_ball * 2 - 25){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[4].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[4].getAttribute("name")
									}  
								} else if ( //Ball 6
									x_layer > xi_ball * 3 - 50 && 
									x_layer < xl_ball * 3 - 100 &&
									y_layer > yi_ball * 3 &&
									y_layer < yl_ball * 2 - 25){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[5].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[5].getAttribute("name")
									}  
								} else if ( //Ball 7
									// x_layer > xi_ball && 
									x_layer < xl_ball &&
									y_layer > yi_ball * 4 + 45 &&
									y_layer < yl_ball * 3 - 60){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[6].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[6].getAttribute("name")
									}  
								} else if ( //Ball 8
									x_layer > xi_ball * 2 - 40  && 
									x_layer < xl_ball * 2 - 100 &&
									y_layer > yi_ball * 4 + 45 &&
									y_layer < yl_ball * 3 - 60){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[7].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[7].getAttribute("name")
									}  
								} else if ( //Ball 9
									x_layer > xi_ball * 3 - 50 && 
									x_layer < xl_ball * 3 - 100 &&
									y_layer > yi_ball * 4 + 45 &&
									y_layer < yl_ball * 3 - 60){
									if (!sign_for_sume_point){ // Evit repeat 
										sign_for_sume_point = true
										boxes[8].setPointerCapture(event.pointerId) 
										// get_to_pass += boxes[8].getAttribute("name")
									}  
								} else {
									sign_for_sume_point = false
									adv_to_delete_first_char = false
								}
								if (event.pointerId === 2){
									// get_to_pass = ""
								}
							// console.log(event)
						}
					})
				})

				pattern.onpointerup = (event) => {
					adv_signal = false
					// del_first() //For independient verssion
					// console.log(get_to_pass, "get_to_pass, movil")
					// get_to_pass = ""
				}
			}
			// --------------------- END MOVIL --------------------------------
		}
	}
	 
	if (window.location.href.match(/action\=registro/gim)){
		change_tap_pan_signup()
	} else {
		change_tap_pan_login()
	}
	
}

managerPassword = db => {
	return {
		login : {
			userReference: db.login !== undefined && db.login.user !== undefined ? db.login.user : "",
			passwordReference : db.login !== undefined && db.login.password !== undefined ? db.login.password : ""
		},

		signUp : db.signUp !== undefined ? db.signUp : false,
		use_data_from_db : db.use_data_from_db !== undefined ? db.use_data_from_db : true,

		style : {
			bg : db.style !== undefined ? db.style.bg : "#f2f2f2",
			bd : db.style !== undefined ? db.style.bd : "",
			br : db.style !== undefined ? db.style.br : "20px"
		},

		post : window.location.href.match(/action\=registro/gim) ? db.post : "",
		
		components : {
			access_UserPage : db.components !== undefined ? db.components.userPage : "",
			access_ErrorLoginPage : db.components !== undefined ? db.components.errorPage : ""
		},

		config : {
			letters: db.config_dev !== undefined ? db.config_dev.letters : "",
			showPasswordInConsole : db.config_dev !== undefined ? db.config_dev.showPassword : ""
		}
	}
};
