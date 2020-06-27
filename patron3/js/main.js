
let first_char_pass;

const fetchConsult = (configdb) => { 
	let destiny = document.getElementById(configdb.destiny) //HTML data destiny

	//Ajax // Data use from path userPage to login main page
	const call_ajax = () => {
		const http = new XMLHttpRequest();
		const url = configdb.components.access_UserPage;

		http.onreadystatechange = () => {
			if (http.readyState == 4 && http.status == 200){
				destiny.innerHTML = http.responseText
			}  
		}
		http.open("GET", url)
		http.send()
	}

	call_ajax()
}
const accessTap = (url, data, form, pattern, itext, config, container) => {

	$.post( "login_.php", { user: data.user, pass: data.pass})
	  .done( dat => {
	  	console.log(dat)
	  	if (dat.match(/\<welcome\>/gim)){
	  		setTimeout(()=>{
	  			accessToUserPage(config, { form: form, sys: pattern}, itext)
	  		},800)
	  		processing(container)
	  	}
	  });

}

const errorUserPage = (config, valueinputform) =>{
	//Aquí uno se inventa algo, atención al usuario, recuperación de password, etc.

	valueinputform.value = ""  //Se limpia formulario de login

	//En esta función se invocará el componente hacia la pagina de error
	let errorPage = config.components.access_ErrorLoginPage

	window.location.href = errorPage; //Access
	alert("Demasiados intentos")
	//Change state and access
}

const accessToUserPage = (config, formAndSys, valueinputform) => { //Acceso a la página de usuario una vez logra login
	// ----------- remove sys ---------- validated login -------------------

	if (valueinputform.toString().match(/\{/gim) === null){
		valueinputform.value = ""  //Se limpia formulario de login
	} else {
		valueinputform.pass.value =""
		valueinputform.user.value = ""
	}

	if (formAndSys.sys !== undefined){
		formAndSys.sys.style.opacity = "0"
		formAndSys.sys.animate([{ 
			opacity: 1
		},{
			opacity: 0
		}],{duration:1000, iterations:1})
	}

	setTimeout(()=>{
		if (formAndSys.form !== undefined){
			formAndSys.form.remove() 
		}
		if (formAndSys.sys !== undefined){
			formAndSys.sys.remove() 
		}
		//Se activa la carga de datos usando AJAX y la página de Usuario donde se accederá
		fetchConsult(config)
	},1150)
	


	// window.location.href = userPage; //Access
}


const Pattmo = (container, config)=> {
	container = document.getElementById(container)
	container.style.display="flex"
	container.style.justifyContent = "center"
	container.style.alignItems ="center"
	let tap = document.getElementsByClassName("tap")[0]
	let normal = document.getElementsByClassName("normal")[0]

	let boltap = true

	let chantap = false

	tap.innerHTML = chantap === false ? "Pan" : "Tap"

	tap.onclick = e => {
		boltap = true
		chantap = !chantap
		tap.innerHTML = chantap === false ? "Pan" : "Tap"
		actiboltap()
	}


	normal.onclick = e => {
		boltap = false
		actiboltap()
	}


	const actiboltap = () => {
		if (boltap){
			container.innerHTML = `<div id="usermain"></div>`

			let form = document.createElement("form")
			form.style.display = "flex"
			form.style.flexFlow = "row wrap"
			form.style.margin = "auto" 
			form.setAttribute("id","formu")
			form.animate([{transform:"scale(0.8)"},{transform:"scale(1)"}], {duration:700, iterations:1})
			//----------------------

			form.style.zIndex = "1"
			form.style.position = "absolute"

			let itext = document.createElement("input")
			itext.setAttribute("type","text")
			itext.setAttribute("id","username")
			itext.setAttribute("name","username")
			itext.setAttribute("placeholder", "Username")

			const sendpas = document.createElement("input")
			if (chantap){ //Mode click by click
				sendpas.type ="button"; sendpas.value = "Aceptar"
				sendpas.style.zIndex = "40"
				sendpas.style.top = "40px"
				sendpas.style.right = "40px"
				sendpas.style.position = "absolute"
				sendpas.style.border = "none"
				sendpas.style.padding = "20px"
				sendpas.style.outline = "none"
				sendpas.style.cursor ="pointer"
				sendpas.style.fontWeight = "bold"
				sendpas.style.borderRadius = "14px"
				sendpas.style.background = "linear-gradient(to left top, #4eaa29, #7cec0e)"
				sendpas.style.color = "#fff"
				sendpas.animate([{
					opacity:0,
					transform: "scale(0.7)"
				},{
					opacity:1,
					transform: "scale(1)"
				}],{duration:400})

				sendpas.onclick = () => {
				
					//Call fetch funcion
					accessTap(config.consult.to,  {"pass":pass, "user": userValue}, form, document.getElementById("pattern"), itext, config, container)
					pass = ""
				}

				sendpas.onpointerup = () => {
					//Clear style up
					let boxr = document.getElementsByClassName("box-rounded")
					for (let x = 0; x < boxr.length; x++){
						if (boxr !== undefined){
							if (boxr[x] !== undefined){
								boxr[x].style.background = "#f2f2f2";
							}
						}
					}
				}
				
				root.style.position = "relative"
				root.appendChild(sendpas)
			}

			let userValue =""
			itext.addEventListener("change",(e)=>{ //Read username
				userValue = e.target.value	
			})

			form.appendChild(itext)

			container.appendChild(form)

			let pattern = document.createElement("div")
			pattern.setAttribute("id","pattern")
			pattern.animate([{
				transform: "rotate(-3deg) scale(0.9)"
			},{
				transform: "rotate(0deg) scale(1)"
			}],{duration:700, iterations:1})

			let bool = false; let boolMouseOver = false; //Don't touch
			let pass = "";  let bfixAnActiveInput = false;



			document.querySelector("#formu").addEventListener("submit",(e)=> {
				e.preventDefault()
				$.post( "login_.php", { user: userValue, pass : ""})
				.done( uservali => {
					if (uservali.match("<user-correct>") !== null){
						pattern.style.opacity = "1"
						pattern.animate([
							{opacity:0, transform:"rotate(40deg) scale(0.5)"},
							{opacity:1, transform:"rotate(0deg) scale(1)"}],
							{duration:1000, iterations:1})
						form.style.display = "none"

						for (let x = 0; x < 9; x++){
							document.getElementsByClassName("box-rounded")[x].animate([{
								transform: `scale(${0.14* -x})`, background: "#4B367C"
							},{
								transform: `scale(1)`, background: "#f2f2f2"
							}],{duration:1000, iterations:1})
						}
					} else {
						pattern.style.opacity = "0"
						
						form.animate([{opacity:1},{opacity:0}],{duration:1000, iterations:1})
						form.style.display = "block"
					}
				});
			})

			
			pattern.style.opacity = userValue === "" ? "0" : "1" // Hide - Show initial


			let tryNumber = 0; //Número de intentos

			let abc = ["a","b","c","d","e","f","g","h","i"] //Valores de los cuadros

			for (let x = 0; x < 9; x++){ //Crear divs, asignarles valores, estilo, animaciones, y configuración
				const div = document.createElement("div");
				div.classList.add("box-rounded");
				div.className += " br-" + (x+1)
				div.setAttribute("name", abc[x]);

				// console.log(config)
				if (config.style !== undefined){
					if (config.style.bg !== undefined){
						div.style.background = config.style.bg
					}
					if (config.style.bd !== undefined){
						div.style.border = config.style.bd
					}
					if (config.style.br !== undefined){
						div.style.borderRadius = config.style.br
					}
				}

				if (config.config.letters === true){
					div.innerHTML = abc[x]
				}

				pattern.appendChild(div);

				// ---------------------- FOR DESKTOP ------------------------------

				if (chantap === false){ //Mode Pan
					pattern.addEventListener("pointerdown",()=>{
						bool = true; 
						boolMouseOver = true;
						bfixAnActiveInput = true;

						div.addEventListener("pointermove", ()=>{
							if (bool){
								div.style.background = "rgb(255,96,34)"
								div.animate([
									{
										background:"rgb(255,72, 0,0.80)"
									},{
										background:"rgb(255,96,34)"
									}
								],{duration:350, iterations:1})
							} 
						})

						window.addEventListener("pointerup",()=>{
							tryNumber += 1;
							bool = false;
							boolMouseOver = false;
							bfixAnActiveInput = false;
							div.style.background = "#f2f2f2";
						});
						
					});
				} else { //Mode Tap
					div.onclick = () => {
						div.style.background = "rgb(255,96,34)"
						div.animate([
							{
								background:"rgb(255,72, 0,0.80)"
							},{
								background:"rgb(255,96,34)"
							}
						],{duration:350, iterations:1})

						pass += div.getAttribute("name")
						console.log(pass)
					}
					
				}
				pattern.ondragstart = () => false;
				container.appendChild(pattern)
			};

			if (chantap === false){ //Mode Pan
				let div = document.getElementsByClassName("box-rounded")
				//Detect combination for create password
				for (let x=0; x < 9; x++){
					div[x].addEventListener("pointerover",()=>{
						if (boolMouseOver){
							pass += div[x].getAttribute("name");
							// console.log(pass, tryNumber, "try")
							console.log(pass)
						} 
					})
				}

				//Detect first char at the pass
				for (let x=0; x < 9; x++){
					div[x].addEventListener("pointerdown",(e) => {
						// if (boolMouseOver){
							first_char_pass += div[x].getAttribute("name");
							first_char_pass = first_char_pass.replace("undefined", "")
							// console.log(first_char_pass)
							console.log(first_char_pass)
							// console.log(pass, tryNumber, "try")
						// }
					})
				}
			}

			document.querySelector("html").addEventListener("pointerup",()=>{
				if (config.config.showPasswordInConsole){
					console.log(pass)
				}
				
				if (chantap === false){ //Mode pan
					if (userValue !== "" && bfixAnActiveInput){ //Requerir nombre de usuario
						// console.log(pass, tryNumber, "try")
						if (tryNumber > 230 && pass !== config.login.passwordReference) { 
						 errorUserPage(config, itext); //Demasiados intentos, accede a pagina de error, ayuda/soporte
						}


						// ------------------------ Validation-----------------------------
						$.post( "login_.php", { user: userValue, pass : first_char_pass + pass, mode :"pan"})
						.done( validate => {
							console.log(validate)
							let nerex = new RegExp("<welcome>","gim")
							if (validate.match(nerex) !== null){
								setTimeout(()=>{ 
									accessToUserPage(config, { form: form, sys: pattern}, itext)
								},800)
								processing(container)
								boolMouseOver = false
								tryNumber = 0
							}else {
								if (config.config.alerts !== undefined){
									if (config.config.alerts) alert(`Datos inválidos ${userValue}`)
									console.log("Datos inválidos", userValue	)
								}
							}
						});
					
						pass = "" //Reinicio de variable password para nuevo intento
						first_char_pass = ""
						bfixAnActiveInput = false
					} else {
						pass = "" //Reinicio de variable password para nuevo intento
						// console.log("Necesitas escribir tu nombre de usuario")
					}
				} else {
					//...
				}
			})

			// ------------------------- END FOR DESKTOP ------------------------------

			// ----------------------------- FOR MOVIL ---------------------------------

			let boxes = document.getElementsByClassName("box-rounded")


			if (navigator.userAgent.match(/chrome/gim) !== null){
				pattern.onpointermove = e => {
					if (chantap === false){ //Mode pan

						window.scrollTo(0,0)
					}

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


			const getBrowserInfo = () => {
		    let ua = navigator.userAgent, tem, 
		    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		    if(/trident/i.test(M[1])){
		        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
		        return 'IE '+(tem[1] || '');
		    }
		    if(M[1]=== 'Chrome'){
		        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
		        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
		    }
		    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
		    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
		    return M.join(' ');
		};

		console.log(getBrowserInfo());

			
			//---------------------------------- End Movil ----------------------------------
		} else { 
			container.innerHTML = `<div id="usermain"></div>`

			let passwin = ""
			let ussin =""

			const divform = document.createElement("form")
			divform.style.display = "flex"
			divform.classList.add("formnormal")
			divform.style.flexDirection = "column"
			divform.style.padding = "30px"
			divform.onsubmit = e => e.preventDefault()
			divform.animate([{
				opacity:0, 
				transform: "scale(0.7)"
			},{
				opacity:1, 
				transform: "scale(1)"
			}], {duration:1000, iterations:1})

			const inputuser = document.createElement("input")
			inputuser.type = "text"; inputuser.placeholder = "Username"
			inputuser.classList.add("inputusernormal")
			inputuser.style.marginBottom = "5px"
			inputuser.animate([{
				transform:"translateX(-100%) rotate(40deg)"
			},{
				transform:"translateX(0%) rotate(0deg)"
			}],{duration:1000, iterations:1})
			const inputpass = document.createElement("input")
			inputpass.style.marginBottom = "5px"
			inputpass.classList.add("inputpassnormal")
			inputpass.animate([{
				transform:"translateX(100%) rotate(-40deg) "
			},{
				transform:"translateX(0%)"
			}],{duration:1000, iterations:1})
			inputpass.type = "text"; inputpass.placeholder = "Code"
			const send = document.createElement("input")
			send.type = "submit";  send.value = "Entrar"
			send.classList.add("sendnormal")
			send.animate([{
				transform:"translateX(-100%) rotate(40deg)"
			},{
				transform:"translateX(0%) rotate(0deg)"
			}],{duration:1000, iterations:1})

			send.onclick = e => {
				e.preventDefault()
				$.post("login_.php",  { user: inputuser.value, pass : inputpass.value, mode: "form"})
				.done(uservali => {	
					console.log(uservali, "masooooooooo")

					if (uservali.match("<welcome>") !== null){
						setTimeout(()=>{

							accessToUserPage(config, { form: divform, sys: void 0 }, {pass:inputpass,user:inputuser})
						},800)
						processing(container)
						inputuser.style.border = "2px solid transparent"
						inputpass.style.border = "2px solid transparent"
						
					} else {
						// show_info(container, "Error")
						error(inputpass, inputuser)
						ussin = ""
						inputpass.value =""
						passwin = ""
						return false
						// inputuser.value = ""
					}
				})
			}
			// send.onpointerup = e => {
			// 	ussin = ""
			// 	inputpass.value =""
			// 	passwin = ""
			// 	inputuser.value = ""
			// }

			divform.appendChild(inputuser)
			divform.appendChild(inputpass)
			divform.appendChild(send)

			container.appendChild(divform)
		}
	}

	actiboltap()
}

const managerPassword = db => {
	return {
		login : {
			userReference: db.login !== undefined ? db.login.user : "admin",
			passwordReference : db.login !== undefined ? db.login.password : "admin"
		},

		signUp : db.signUp !== undefined ? db.signUp : false,

		style : {
			bg : db.style !== undefined ? db.style.bg : "#fff",
			bd : db.style !== undefined ? db.style.bd : "",
			br : db.style !== undefined ? db.style.br : "20px"
		},

		consult : {
			to : db.consult.to !== undefined ? db.consult.to : ""
		},

		destiny : db.destiny !== undefined ? db.destiny : "",

		components : {
			access_UserPage : db.components !== undefined ? db.components.userPage : "",
			access_ErrorLoginPage : db.components !== undefined ? db.components.errorPage : ""
		},

		config : {
			alerts : db.config_dev !== undefined ? db.config_dev.alerts : "",
			letters: db.config_dev !== undefined ? db.config_dev.letters : "",
			showPasswordInConsole : db.config_dev !== undefined ? db.config_dev.showPassword : ""
		}
	}
};

const output = way => {
	return way
}