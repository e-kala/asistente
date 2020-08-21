state_pan_tap = false // false => pan, true => tap
first_char_pass = ""; //Firts char pass
passg = ""; //Pass g

dat_post = {}

function import_data_signup(dat){
	dat_post.email = dat.email
	dat_post.usuario = dat.usuario
}


function Pattmo(container, config){
	container = document.getElementById(container)
	const btn_mode_loginn = document.getElementsByClassName("login-change-way")[0]
	if (btn_mode_loginn !== undefined){
		btn_mode_loginn.style.outline ="none"
		btn_mode_loginn.style.border = "none"
		btn_mode_loginn.style.zIndex = "3"

		btn_mode_loginn.style.webkitOutline = "none";
		btn_mode_loginn.style.MozOutline = "none";
		btn_mode_loginn.style.msOutline = "none";
		btn_mode_loginn.style.oOutline = "none";
		btn_mode_loginn.style.outline = "none";

		btn_mode_loginn.style.webkitBorder = "none";
		btn_mode_loginn.style.MozBorder = "none";
		btn_mode_loginn.style.msBorder = "none";
		btn_mode_loginn.style.oBorder = "none";
		btn_mode_loginn.style.border = "none";
	}

	const modules_div_validate_exist = document.getElementsByClassName("modulos")[0]
	if (modules_div_validate_exist !== undefined){
		if (btn_mode_loginn !== undefined){
			btn_mode_loginn.style.display = "none"
			btn_mode_loginn.style.webkitDisplay = "none";
			btn_mode_loginn.style.MozDisplay = "none";
			btn_mode_loginn.style.msDisplay = "none";
			btn_mode_loginn.style.oDisplay = "none";

			btn_mode_loginn.style.opacity = "0"
			btn_mode_loginn.style.webkitOpacity = "0";
			btn_mode_loginn.style.MozOpacity = "0";
			btn_mode_loginn.style.msOpacity = "0";
			btn_mode_loginn.style.oOpacity = "0";
		}
	} else if (window.location.href.match(/action\=registro/gim)) {
		if (btn_mode_loginn !== undefined){
			btn_mode_loginn.style.display = "block"
			btn_mode_loginn.style.webkitDisplay = "block";
			btn_mode_loginn.style.MozDisplay = "block";
			btn_mode_loginn.style.msDisplay = "block";
			btn_mode_loginn.style.oDisplay = "block";

			btn_mode_loginn.style.opacity = "1"
			btn_mode_loginn.style.webkitOpacity = "1";
			btn_mode_loginn.style.MozOpacity = "1";
			btn_mode_loginn.style.msOpacity = "1";
			btn_mode_loginn.style.oOpacity = "1";

		}
	} else {
		if (btn_mode_loginn !== undefined){

			btn_mode_loginn.style.display = "block"
			btn_mode_loginn.style.webkitDisplay = "block";
			btn_mode_loginn.style.MozDisplay = "block";
			btn_mode_loginn.style.msDisplay = "block";
			btn_mode_loginn.style.oDisplay = "block";

			btn_mode_loginn.style.opacity = "1"
			btn_mode_loginn.style.webkitOpacity = "1";
			btn_mode_loginn.style.MozOpacity = "1";
			btn_mode_loginn.style.msOpacity = "1";
			btn_mode_loginn.style.oOpacity = "1";
		}
	
	}
	

	let bolshowhide = false
	if (btn_mode_loginn !== undefined){
		btn_mode_loginn.onclick = function(){
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
				container.style.webkitDisplay = "flex";
				container.style.MozDisplay = "flex";
				container.style.msDisplay = "flex";
				container.style.oDisplay = "flex";

				container.style.opacity = "1"
				container.style.webkitOpacity = "1";
				container.style.MozOpacity = "1";
				container.style.msOpacity = "1";
				container.style.oOpacity = "1";

				container.style.justifyContent = "center"
				container.style.webkitJustifyContent = "center";
				container.style.MozJustifyContent = "center";
				container.style.msJustifyContent = "center";
				container.style.oJustifyContent = "center";

				container.style.alignItems ="center"
				container.style.webkitAlignItems = "center";
				container.style.MozAlignItems = "center";
				container.style.msAlignItems = "center";
				container.style.oAlignItems = "center";

			}

			let form = document.createElement("form")
			form.style.display = "flex"
			form.style.webkitDisplay = "flex";
			form.style.MozDisplay = "flex";
			form.style.msDisplay = "flex";
			form.style.oDisplay = "flex";

			form.style.flexFlow = "row wrap"
			form.style.webkitFlexFlow = "row wrap";
			form.style.MozFlexFlow = "row wrap";
			form.style.msFlexFlow = "row wrap";
			form.style.oFlexFlow = "row wrap";

			form.style.margin = "auto" 
			form.style.webkitMargin = "auto";
			form.style.MozMargin = "auto";
			form.style.msMargin = "auto";
			form.style.oMargin = "auto";

			form.animate([{transform:"scale(0.8)"},{transform:"scale(1)"}], {duration:700, iterations:1})
			//----------------------

			form.style.zIndex = "1"
			form.style.position = "absolute"
			form.style.webkitPosition = "absolute";
			form.style.MozPosition = "absolute";
			form.style.msPosition = "absolute";
			form.style.oPosition = "absolute";


			let itext = document.createElement("input")
			itext.setAttribute("type","text")
			itext.setAttribute("id","username")
			itext.setAttribute("name","username")
			itext.setAttribute("placeholder", "Usuario o email")

			let userValue =""
			itext.addEventListener("change",function(e){ //Read username
				userValue = e.target.value
				usuariop = e.target.value	
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
			btn_accept_init.style.webkitPosition = "absolute";
			btn_accept_init.style.MozPosition = "absolute";
			btn_accept_init.style.msPosition = "absolute";
			btn_accept_init.style.oPosition = "absolute";
			btn_accept_init.style.margin = "auto"
			btn_accept_init.style.webkitMargin = "auto";
			btn_accept_init.style.MozMargin = "auto";
			btn_accept_init.style.msMargin = "auto";
			btn_accept_init.style.oMargin = "auto";
			btn_accept_init.style.bottom = "-90px"
			btn_accept_init.style.webkitBottom = "-90px";
			btn_accept_init.style.MozBottom = "-90px";
			btn_accept_init.style.msBottom = "-90px";
			btn_accept_init.style.oBottom = "-90px";
			btn_accept_init.style.display = "none"
			btn_accept_init.style.webkitDisplay = "none";
			btn_accept_init.style.MozDisplay = "none";
			btn_accept_init.style.msDisplay = "none";
			btn_accept_init.style.oDisplay = "none";	
			container.style.position = "relative"
			container.style.webkitPosition = "relative";
			container.style.MozPosition = "relative";
			container.style.msPosition = "relative";
			container.style.oPosition = "relative";
			container.style.justifyContent = "center"
			container.style.webkitJustifyContent = "center";
			container.style.MozJustifyContent = "center";
			container.style.msJustifyContent = "center";
			container.style.oJustifyContent = "center";
			container.style.alignItems = "center"
			container.style.webkitAlignItems = "center";
			container.style.MozAlignItems = "center";
			container.style.msAlignItems = "center";
			container.style.oAlignItems = "center";
			container.appendChild(btn_accept_init)

			const btn_next = document.createElement("button")
			btn_next.innerHTML = "Siguiente"
			btn_next.style.position = "absolute"
			btn_next.style.webkitPosition = "absolute";
			btn_next.style.MozPosition = "absolute";
			btn_next.style.msPosition = "absolute";
			btn_next.style.oPosition = "absolute";
			btn_next.style.margin = "auto"
			btn_next.style.webkitMargin = "auto";
			btn_next.style.MozMargin = "auto";
			btn_next.style.msMargin = "auto";
			btn_next.style.oMargin = "auto";
			btn_next.style.bottom = "0px"
			btn_next.style.webkitBottom = "0px";
			btn_next.style.MozBottom = "0px";
			btn_next.style.msBottom = "0px";
			btn_next.style.oBottom = "0px";
			btn_next.style.zIndex = "30"
			container.appendChild(btn_next)
			btn_next.className += "btn btn-primary btn-lg btn-next-log-tap"
			btn_next.onclick = function(){
				if (document.getElementById("username").value !== "" && userValue !== null && userValue !== undefined ){
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
					$("#username").notify("Escribe nombre de usuario o email", "error");
				}
			}

			const btn_volver = document.createElement("button")
			btn_volver.innerHTML = "Volver"
			btn_volver.style.position = "absolute"
			btn_volver.style.webkitPosition = "absolute";
			btn_volver.style.MozPosition = "absolute";
			btn_volver.style.msPosition = "absolute";
			btn_volver.style.oPosition = "absolute";
			btn_volver.style.margin = "auto"
			btn_volver.style.webkitMargin = "auto";
			btn_volver.style.MozMargin = "auto";
			btn_volver.style.msMargin = "auto";
			btn_volver.style.oMargin = "auto";
			btn_volver.style.bottom = "-150px"
			btn_volver.style.webkitBottom = "-150px";
			btn_volver.style.MozBottom = "-150px";
			btn_volver.style.msBottom = "-150px";
			btn_volver.style.oBottom = "-150px";
			btn_volver.classList += "btn btn-light btn-lg btn-volver-log-tap"
			btn_volver.style.display = "none"
			btn_volver.style.webkitDisplay = "none";
			btn_volver.style.MozDisplay = "none";
			btn_volver.style.msDisplay = "none";
			btn_volver.style.oDisplay = "none";
			container.appendChild(btn_volver)

			btn_volver.onclick = function(){
				btn_next.style.display = "block"
				btn_next.style.webkitDisplay = "block";
				btn_next.style.MozDisplay = "block";
				btn_next.style.msDisplay = "block";
				btn_next.style.oDisplay = "block";

				btn_next.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
				btn_volver.style.display = "none"
				btn_volver.style.webkitDisplay = "none";
				btn_volver.style.MozDisplay = "none";
				btn_volver.style.msDisplay = "none";
				btn_volver.style.oDisplay = "none";
				btn_accept_init.style.display = "none"
				btn_accept_init.style.webkitDisplay = "none";
				btn_accept_init.style.MozDisplay = "none";
				btn_accept_init.style.msDisplay = "none";
				btn_accept_init.style.oDisplay = "none";
				// pattern.style.display = "none"
				pattern.style.opacity = "0"
				pattern.style.webkitOpacity = "0";
				pattern.style.MozOpacity = "0";
				pattern.style.msOpacity = "0";
				pattern.style.oOpacity = "0";
				document.getElementById("username").style.display = "block"
				document.getElementById("username").style.webkitDisplay = "block"
				document.getElementById("username").style.MozDisplay = "block"
				document.getElementById("username").style.msDisplay = "block"
				document.getElementById("username").style.oDisplay = "block"

				document.getElementById("username").style.opacity = "1"
				document.getElementById("username").style.webkitOpacity = "1"
				document.getElementById("username").style.MozOpacity = "1"
				document.getElementById("username").style.msOpacity = "1"
				document.getElementById("username").style.oOpacity = "1"

				form.style.display = "block"
				form.style.webkitDisplay = "block";
				form.style.MozDisplay = "block";
				form.style.msDisplay = "block";
				form.style.oDisplay = "block";

				form.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
			}


			//----------------------------------------------------------
		
			let bool = false; let boolMouseOver = false; //Don't touch
			let pass = "";  let bfixAnActiveInput = false;

			form.addEventListener("submit", function(e){
				e.preventDefault()

				if (userValue !== "" && userValue !== null && userValue !== undefined ){
					btn_next.style.display = "none"
					btn_next.style.webkitDisplay = "none";
					btn_next.style.MozDisplay = "none";
					btn_next.style.msDisplay = "none";
					btn_next.style.oDisplay = "none";

					btn_accept_init.style.display = "block"
					btn_accept_init.style.webkitDisplay = "block";
					btn_accept_init.style.MozDisplay = "block";
					btn_accept_init.style.msDisplay = "block";
					btn_accept_init.style.oDisplay = "block";

					btn_volver.style.display = "block"
					btn_volver.style.webkitDisplay = "block";
					btn_volver.style.MozDisplay = "block";
					btn_volver.style.msDisplay = "block";
					btn_volver.style.oDisplay = "block";

					pattern.style.opacity = "1"
					pattern.style.webkitOpacity = "0";
					pattern.style.MozOpacity = "0";
					pattern.style.msOpacity = "0";
					pattern.style.oOpacity = "0";

					pattern.animate([
						{opacity:0},
						{opacity:1}],
						{duration:1000, iterations:1})
					form.style.display = "none"
					form.style.webkitDisplay = "none";
					form.style.MozDisplay = "none";
					form.style.msDisplay = "none";
					form.style.oDisplay = "none";

					for (let x = 0; x < 9; x++){
						document.getElementsByClassName("box-rounded")[x].animate([{
							transform: `scale(${0.14* -x})`, background: "#4B367C"
						},{
							transform: `scale(1)`, background: "#f2f2f2"
						}],{duration:1000, iterations:1})
					}
				}else {
					$("#username").notify("Escribe nombre de usuario o email", "error");
					pattern.style.opacity = "0"
					pattern.style.webkitOpacity = "0";
					pattern.style.MozOpacity = "0";
					pattern.style.msOpacity = "0";
					pattern.style.oOpacity = "0";

					btn_next.style.display = "block"
					btn_next.style.webkitDisplay = "block";
					btn_next.style.MozDisplay = "block";
					btn_next.style.msDisplay = "block";
					btn_next.style.oDisplay = "block";

					document.getElementById("username").style.display = "block"
					document.getElementById("username").style.webkitDisplay = "block"
					document.getElementById("username").style.MozDisplay = "block"
					document.getElementById("username").style.msDisplay = "block"
					document.getElementById("username").style.oDisplay = "block"

					document.getElementById("username").style.opacity = "1"
					document.getElementById("username").style.webkitOpacity = "1"
					document.getElementById("username").style.MozOpacity = "1"
					document.getElementById("username").style.msOpacity = "1"
					document.getElementById("username").style.oOpacity = "1"

					btn_accept_init.style.display = "none"
					btn_accept_init.style.webkitDisplay = "none";
					btn_accept_init.style.MozDisplay = "none";
					btn_accept_init.style.msDisplay = "none";
					btn_accept_init.style.oDisplay = "none";

					btn_volver.style.display = "none"
					btn_volver.style.webkitDisplay = "none";
					btn_volver.style.MozDisplay = "none";
					btn_volver.style.msDisplay = "none";
					btn_volver.style.oDisplay = "none";

					form.animate([{opacity:1},{opacity:0}],{duration:1000, iterations:1})
					form.style.display = "block"
					form.style.webkitDisplay = "block";
					form.style.MozDisplay = "block";
					form.style.msDisplay = "block";
					form.style.oDisplay = "block";
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
				div.style.webkitBackgroud = "#fff";
				div.style.MozBackgroud = "#fff";
				div.style.msBackgroud = "#fff";
				div.style.oBackgroud = "#fff";

				div.style.borderRadius = "20px"
				div.style.webkitBorderRadius = "20px";
				div.style.MozBorderRadius = "20px";
				div.style.msBorderRadius = "20px";
				div.style.oBorderRadius = "20px";

				if (config.config.letters === true){
					div.innerHTML = abc[x]
				}

				pattern.appendChild(div);

				// ---------------------- FOR DESKTOP ------------------------------

				pattern.addEventListener("pointerdown", function(){
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

				pattern.ondragstart = function(){
					return false;
				}
				if (container !== null) container.appendChild(pattern);
			};

			let div = document.getElementsByClassName("box-rounded")

			//Detect combination for create password
			for (let x=0; x < 9; x++){
				if (div[x] !== undefined){
					div[x].onpointerdown = function(){
						if (pattern.style.opacity !== "0"){
							// console.log("tap")

							pass += div[x].getAttribute("name")
							div[x].style.background = "rgb(125,27,233,0.40)"
							div[x].style.webkitBackground = "rgb(125,27,233,0.40)";
							div[x].style.MozBackground = "rgb(125,27,233,0.40)";
							div[x].style.msBackground = "rgb(125,27,233,0.40)";
							div[x].style.oBackground = "rgb(125,27,233,0.40)";

							div[x].animate([
								{
									background:"rgb(75,54,124,0.80)"
								},{
									background:"rgb(125,27,233,0.40)"
								}
							],{duration:350, iterations:1})
							// console.log(pass,":..")
						}
						
					}
				}
			}

			btn_accept_init.addEventListener("pointerup", function(){
				if (config.config.showPasswordInConsole){
					console.log(pass)
				}
				//Detect combination for create password
				for (let x=0; x < 9; x++){
					if (div[x] !== undefined){
						div[x].style.background = "#fff"
						div[x].style.webkitBackground = "#fff";
						div[x].style.MozBackground = "#fff";
						div[x].style.msBackground = "#fff";
						div[x].style.oBackground = "#fff";
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
						  .done( function(dat){
						  	// console.log(dat)
						  	if (dat.match(/\<welcome\>/gim)){
						  		window.location.reload(false);
						  		
								boolMouseOver = false
								tryNumber = 0
						  	} else {
								// alert(`Datos inválidos ${userValue}`)
								$(".btn-volver-log-tap").notify(`Datos inválidos ${userValue}`, "error");
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
				container.style.webkitDisplay = "flex";
				container.style.MozDisplay = "flex";
				container.style.msDisplay = "flex";
				container.style.oDisplay = "flex";

				container.style.justifyContent = "center"
				container.style.webkitJustifyContent = "center";
				container.style.MozJustifyContent = "center";
				container.style.msJustifyContent = "center";
				container.style.oJustifyContent = "center";

				container.style.alignItems ="center"
				container.style.webkitAlignItems = "center";
				container.style.MozAlignItems = "center";
				container.style.msAlignItems = "center";
				container.style.oAlignItems = "center";
			}

			let form = document.createElement("form")
			form.style.display = "flex"
			form.style.webkitDisplay = "flex";
			form.style.MozDisplay = "flex";
			form.style.msDisplay = "flex";
			form.style.oDisplay = "flex";

			form.style.flexFlow = "row wrap"
			form.style.webkitFlexFlow = "row wrap";
			form.style.MozFlexFlow = "row wrap";
			form.style.msFlexFlow = "row wrap";
			form.style.oFlexFlow = "row wrap";

			form.style.margin = "auto" 
			form.style.webkitMargin = "auto";
			form.style.MozMargin = "auto";
			form.style.msMargin = "auto";
			form.style.oMargin = "auto";

			form.animate([{transform:"scale(0.8)"},{transform:"scale(1)"}], {duration:700, iterations:1})
			//----------------------

			form.style.zIndex = "1"
			form.style.position = "absolute"
			form.style.webkitPosition = "absolute";
			form.style.MozPosition = "absolute";
			form.style.msPosition = "absolute";
			form.style.oPosition = "absolute";

			let itext = document.createElement("input")
			itext.setAttribute("type","text")
			itext.setAttribute("id","username")
			itext.setAttribute("name","username")
			itext.setAttribute("placeholder", "Usuario o Email")

			let userValue =""
			itext.addEventListener("change", function(e){ //Read username
				userValue = e.target.value
				usuariop = e.target.value	
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
			btn_next.style.webkitPosition = "absolute";
			btn_next.style.MozPosition = "absolute";
			btn_next.style.msPosition = "absolute";
			btn_next.style.oPosition = "absolute";

			btn_next.style.margin = "auto"
			btn_next.style.webkitMargin = "auto";
			btn_next.style.MozMargin = "auto";
			btn_next.style.msMargin = "auto";
			btn_next.style.oMargin = "auto";

			btn_next.style.bottom = "0px"
			btn_next.style.webkitBottom = "0px";
			btn_next.style.MozBottom = "0px";
			btn_next.style.msBottom = "0px";
			btn_next.style.oBottom = "0px";

			btn_next.style.zIndex = "30"
			if (container !== null){
				container.appendChild(btn_next)
			}
			btn_next.className += "btn btn-primary btn-lg btn-next-log-tap"
			btn_next.onclick = function(){
				if (document.getElementById("username").value !== "" && userValue !== null && userValue !== undefined ){
					pattern.style.opacity = "1"
					pattern.style.webkitOpacity = "1";
					pattern.style.MozOpacity = "1";
					pattern.style.msOpacity = "1";
					pattern.style.oOpacity = "1";

					pattern.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
					document.getElementById("username").style.display = "none"
					btn_next.style.display = "none"
					btn_next.style.webkitDisplay = "none";
					btn_next.style.MozDisplay = "none";
					btn_next.style.msDisplay = "none";
					btn_next.style.oDisplay = "none";

					document.getElementById("username").animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
					btn_volver.style.display = "block"
					btn_volver.style.webkitDisplay = "block";
					btn_volver.style.MozDisplay = "block";
					btn_volver.style.msDisplay = "block";
					btn_volver.style.oDisplay = "block";

					btn_volver.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
				
					
				} else {
					$("#username").notify("Escribe un nombre de usuario o email", "error");
				}
			}

			const btn_volver = document.createElement("button")
			btn_volver.innerHTML = "Volver"
			btn_volver.style.position = "absolute"
			btn_volver.style.webkitPosition = "absolute";
			btn_volver.style.MozPosition = "absolute";
			btn_volver.style.msPosition = "absolute";
			btn_volver.style.oPosition = "absolute";

			btn_volver.style.margin = "auto"
			btn_volver.style.webkitMargin = "auto";
			btn_volver.style.MozMargin = "auto";
			btn_volver.style.msMargin = "auto";
			btn_volver.style.oMargin = "auto";

			btn_volver.style.bottom = "-120px"
			btn_volver.style.webkitBottom = "-120px";
			btn_volver.style.MozBottom = "-120px";
			btn_volver.style.msBottom = "-120px";
			btn_volver.style.oBottom = "-120px";

			btn_volver.classList += "btn btn-light btn-lg btn-volver-log-tap"
			btn_volver.style.display = "none"
			btn_volver.style.webkitDisplay = "none";
			btn_volver.style.MozDisplay = "none";
			btn_volver.style.msDisplay = "none";
			btn_volver.style.oDisplay = "none";

			if (container !== null){
				container.appendChild(btn_volver)
			}
			btn_volver.onclick = function(){
				btn_next.style.display = "block"
				btn_next.style.webkitDisplay = "block";
				btn_next.style.MozDisplay = "block";
				btn_next.style.msDisplay = "block";
				btn_next.style.oDisplay = "block";

				btn_next.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
				btn_volver.style.display = "none"
				btn_volver.style.webkitDisplay = "none";
				btn_volver.style.MozDisplay = "none";
				btn_volver.style.msDisplay = "none";
				btn_volver.style.oDisplay = "none";

				// pattern.style.display = "none"
				pattern.style.opacity = "0"
				pattern.style.webkitOpacity = "0";
				pattern.style.MozOpacity = "0";
				pattern.style.msOpacity = "0";
				pattern.style.oOpacity = "0";

				document.getElementById("username").style.display = "block"
				document.getElementById("username").style.webkitDisplay = "block"
				document.getElementById("username").style.MozDisplay = "block"
				document.getElementById("username").style.msDisplay = "block"
				document.getElementById("username").style.oDisplay = "block"

				form.style.display = "block"
				form.style.webkitDisplay = "block";
				form.style.MozDisplay = "block";
				form.style.msDisplay = "block";
				form.style.oDisplay = "block";

				form.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
			}


			let bool = false; let boolMouseOver = false; //Don't touch
			let pass = "";  let bfixAnActiveInput = false;


			if (form !== null){
				form.addEventListener("submit", function(e){
					e.preventDefault()
					if (userValue !== "" && userValue !== null && userValue !== undefined ){
						btn_next.style.display = "none"
						btn_next.style.webkitDisplay = "none";
						btn_next.style.MozDisplay = "none";
						btn_next.style.msDisplay = "none";
						btn_next.style.oDisplay = "none";

						btn_volver.style.display = "block"
						btn_volver.style.webkitDisplay = "block";
						btn_volver.style.MozDisplay = "block";
						btn_volver.style.msDisplay = "block";
						btn_volver.style.oDisplay = "block";

						btn_volver.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
						pattern.style.opacity = "1"
						pattern.style.webkitOpacity = "1";
						pattern.style.MozOpacity = "1";
						pattern.style.msOpacity = "1";
						pattern.style.oOpacity = "1";

						pattern.animate([
							{opacity:0},
							{opacity:1}],
							{duration:1000, iterations:1})
						form.style.display = "none"
						form.style.webkitDisplay = "none";
						form.style.MozDisplay = "none";
						form.style.msDisplay = "none";
						form.style.oDisplay = "none";

						for (let x = 0; x < 9; x++){
							document.getElementsByClassName("box-rounded")[x].animate([{
								transform: `scale(${0.14* -x})`, background: "#4B367C"
							},{
								transform: `scale(1)`, background: "#f2f2f2"
							}],{duration:1000, iterations:1})
						}
					}else {
						pattern.style.opacity = "0"
						pattern.style.webkitOpacity = "0";
						pattern.style.MozOpacity = "0";
						pattern.style.msOpacity = "0";
						pattern.style.oOpacity = "0";

						form.animate([{opacity:1},{opacity:0}],{duration:1000, iterations:1})
						form.style.display = "block"
						form.style.webkitDisplay = "block";
						form.style.MozDisplay = "block";
						form.style.msDisplay = "block";
						form.style.oDisplay = "block";

						$("#username").notify("Escribe un nombre de usuario o email", "error");
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
				div.style.webkitBackground = "#fff";
				div.style.MozBackground = "#fff";
				div.style.msBackground = "#fff";
				div.style.oBackground = "#fff";

				div.style.borderRadius = "20px"
				div.style.webkitBorderRadius = "20px";
				div.style.MozBorderRadius = "20px";
				div.style.msBorderRadius = "20px";
				div.style.oBorderRadius = "20px";

				if (config.config.letters === true){
					div.innerHTML = abc[x]
				}

				pattern.appendChild(div);

				// ---------------------- FOR DESKTOP ------------------------------

				pattern.addEventListener("pointerdown", function(){
					if (pattern.style.opacity !== "0"){
						bool = true; 
						boolMouseOver = true;
						bfixAnActiveInput = true;
					}

					div.addEventListener("pointermove", function(){
						if (bool){
							div.style.background = "rgb(125,27,233,0.40)"
							div.style.webkitBackground = "rgb(125,27,233,0.40)";
							div.style.MozBackground = "rgb(125,27,233,0.40)";
							div.style.msBackground = "rgb(125,27,233,0.40)";
							div.style.oBackground = "rgb(125,27,233,0.40)";

							div.animate([
								{
									background:"rgb(75,54,124,0.80)"
								},{
									background:"rgb(125,27,233,0.40)"
								}
							],{duration:350, iterations:1})
						} 
					})

					document.querySelector("html").addEventListener("pointerup", function(){
						tryNumber += 1;
						bool = false;
						boolMouseOver = false;
						bfixAnActiveInput = false;
						div.style.background = "#f2f2f2";
						div.style.webkitBackground = "#f2f2f2";
						div.style.MozBackground = "#f2f2f2";
						div.style.msBackground = "#f2f2f2";
						div.style.oBackground = "#f2f2f2";
					});
					
				});

				pattern.ondragstart = function(){
					return false;
				}

				if (container !== null) container.appendChild(pattern);
			};

			let div = document.getElementsByClassName("box-rounded")

			//Detect combination for create password
			for (let x=0; x < 9; x++){
				if (div[x] !== undefined){
					div[x].addEventListener("pointerover", function(){
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
					div[x].addEventListener("pointerdown", function(e){
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

			document.querySelector("html").addEventListener("pointerup",function(){
				// console.log(first_char_pass+ pass)
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
						  .done( function(dat){
						  	// console.log(dat)
						  	if (dat.match(/\<welcome\>/gim)){
						  		window.location.reload(false);
						  		
								boolMouseOver = false
								tryNumber = 0
						  	} else {
								// alert(`Datos inválidos ${userValue}`)
								
								$(".btn-volver-log-tap").notify(`Datos inválidos ${userValue}`, "error");

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
				pattern.ontouchmove = function(){
					pattern.onpointermove = function(e){

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
				
				pattern.onpointerdown = function(e){
					adv_signal = true
				}
					
				pattern.addEventListener("touchmove", function(tm){
					window.addEventListener("pointermove", function(event){
						event.preventDefault()
					const del_first = function(){
						let pro = get_to_pass.split("")
						pro = pro.filter( function(e,i){

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

				pattern.onpointerup = function(event){
					adv_signal = false
					// del_first() //For independient verssion
					// console.log(get_to_pass, "get_to_pass, movil")
					// get_to_pass = ""
				}
			}
			// --------------------- END MOVIL --------------------------------
		}
	}


	let once_navigator_dichrome = false
	function change_tap_pan_signup(){ // FOR SIGN UP
		if (!once_navigator_dichrome){
			once_navigator_dichrome = true
			if (window.screen.width <= 560){
				if (document.getElementsByClassName("login-change-way")[0] !== undefined){
		            document.getElementsByClassName("login-change-way")[0].click()
		        }
			}
		}

		if (bolshowhide){ //Tap
			let btn_registrarse = document.getElementsByClassName("registrarse-btn")[0]
			btn_registrarse.style.display = "block"
			btn_registrarse.style.webkitDisplay = "block";
			btn_registrarse.style.MozDisplay = "block";
			btn_registrarse.style.msDisplay = "block";
			btn_registrarse.style.oDisplay = "block";

			if (btn_mode_loginn !== undefined){
				btn_mode_loginn.innerHTML = "Tap"
				btn_mode_loginn.value = "Tap"
			}
			if (container !== null){

				container.innerHTML = ""
			}

			if (container !== null){
				container.style.display="flex"
				container.style.webkitDisplay = "flex";
				container.style.MozDisplay = "flex";
				container.style.msDisplay = "flex";
				container.style.oDisplay = "flex";

				container.style.justifyContent = "center"
				container.style.webkitJustifyContent = "center";
				container.style.MozJustifyContent = "center";
				container.style.msJustifyContent = "center";
				container.style.oJustifyContent = "center";

				container.style.alignItems ="center"
				container.style.webkitAlignItems = "center";
				container.style.MozAlignItems = "center";
				container.style.msAlignItems = "center";
				container.style.oAlignItems = "center";
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
				div.style.webkitBackground = "#fff";
				div.style.MozBackground = "#fff";
				div.style.msBackground = "#fff";
				div.style.oBackground = "#fff";

				div.style.borderRadius = "20px"
				div.style.webkitBorderRadius = "20px";
				div.style.MozBorderRadius = "20px";
				div.style.msBorderRadius = "20px";
				div.style.oBorderRadius = "20px";

				if (config.config.letters === true){
					div.innerHTML = abc[x]
				}

				pattern.appendChild(div);

				// ---------------------- FOR DESKTOP ------------------------------

				pattern.addEventListener("pointerdown", function(){
					bool = true; 
					boolMouseOver = true;
					bfixAnActiveInput = true;

				

					document.querySelector("html").addEventListener("pointerup", function(){
						tryNumber += 1;
						bool = false;
						boolMouseOver = false;
						bfixAnActiveInput = false;
					});
					
				});

				pattern.ondragstart = function(){
					return false;
				}

				if (container !== null) container.appendChild(pattern);
			};

			let div = document.getElementsByClassName("box-rounded")

			//Detect combination for create password
			for (let x=0; x < 9; x++){
				if (div[x] !== undefined){
					div[x].addEventListener("pointerdown", function(){
						pass += div[x].getAttribute("name");

						passg = pass

						div[x].style.background = "rgb(125,27,233,0.40)"
						div[x].style.webkitBackground = "rgb(125,27,233,0.40)";
						div[x].style.MozBackground = "rgb(125,27,233,0.40)";
						div[x].style.msBackground = "rgb(125,27,233,0.40)";
						div[x].style.oBackground = "rgb(125,27,233,0.40)";

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
					div[x].addEventListener("pointerdown", function(e){
						// if (boolMouseOver){
							first_char_pass += div[x].getAttribute("name");
							first_char_pass = first_char_pass.replace("undefined", "")
							// console.log(first_char_pass)
							// console.log(first_char_pass, "zzzaaaaaaaaaaaakak")
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
					btn_registrarse.style.webkitDisplay = "none";
					btn_registrarse.style.MozDisplay = "none";
					btn_registrarse.style.msDisplay = "none";
					btn_registrarse.style.oDisplay = "none";
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
				container.style.webkitDisplay = "flex";
				container.style.MozDisplay = "flex";
				container.style.msDisplay = "flex";
				container.style.oDisplay = "flex";

				container.style.justifyContent = "center"
				container.style.webkitJustifyContent = "center";
				container.style.MozJustifyContent = "center";
				container.style.msJustifyContent = "center";
				container.style.oJustifyContent = "center";

				container.style.alignItems ="center"
				container.style.webkitAlignItems = "center";
				container.style.MozAlignItems = "center";
				container.style.msAlignItems = "center";
				container.style.oAlignItems = "center";
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
				div.style.webkitBackground = "#fff";
				div.style.MozBackground = "#fff";
				div.style.msBackground = "#fff";
				div.style.oBackground = "#fff";

				div.style.borderRadius = "20px"
				div.style.webkitBorderRadius = "20px";
				div.style.MozBorderRadius = "20px";
				div.style.msBorderRadius = "20px";
				div.style.oBorderRadius = "20px";

				if (config.config.letters === true){
					div.innerHTML = abc[x]
				}

				pattern.appendChild(div);

				// ---------------------- FOR DESKTOP ------------------------------

				pattern.addEventListener("pointerdown", function(){
					bool = true; 
					boolMouseOver = true;
					bfixAnActiveInput = true;

					div.addEventListener("pointermove", function(){
						if (bool){
							div.style.background = "rgb(125,27,233,0.40)"
							div.style.webkitBackground = "rgb(125,27,233,0.40)";
							div.style.MozBackground = "rgb(125,27,233,0.40)";
							div.style.msBackground = "rgb(125,27,233,0.40)";
							div.style.oBackground = "rgb(125,27,233,0.40)";

							div.animate([
								{
									background:"rgb(75,54,124,0.80)"
								},{
									background:"rgb(125,27,233,0.40)"
								}
							],{duration:350, iterations:1})
						} 
					})

					document.querySelector("html").addEventListener("pointerup", function(){
						tryNumber += 1;
						bool = false;
						boolMouseOver = false;
						bfixAnActiveInput = false;
						div.style.background = "#f2f2f2";
						div.style.webkitBackground = "#f2f2f2";
						div.style.MozBackground = "#f2f2f2";
						div.style.msBackground = "#f2f2f2";
						div.style.oBackground = "#f2f2f2";

					});
					
				});

				pattern.ondragstart = function(){
					return false;
				}

				if (container !== null) container.appendChild(pattern);
			};

			let div = document.getElementsByClassName("box-rounded")

			//Detect combination for create password
			for (let x=0; x < 9; x++){
				if (div[x] !== undefined){
					div[x].addEventListener("pointerover",function(){
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
					div[x].addEventListener("pointerdown", function(e){
						// if (boolMouseOver){
							first_char_pass += div[x].getAttribute("name");
							first_char_pass = first_char_pass.replace("undefined", "")
							// console.log(first_char_pass)
							// console.log(first_char_pass, "zzzaaaaaaaaaaaakak")
							// console.log(pass, tryNumber, "try")
						// }
					})
				}
			}

			let count_try_for_signup = 0
			let ver_pass = {}

			document.querySelector("html").addEventListener("pointerup", function(){
				if (config.config.showPasswordInConsole){
					console.log(pass)
				}
				
				// if (config.user_data_from_db){
					if (bfixAnActiveInput){ //Requerir nombre de usuario
						// console.log(pass, tryNumber, "try")
						if (tryNumber > 230 && pass !== config.login.passwordReference) { 
						 	// errorUserPage(config, itext); //Demasiados intentos, accede a pagina de error, ayuda/soporte
						}

						// ------------------------ Validation-----------------------------
						
						count_try_for_signup += 1

						if (count_try_for_signup === 1){
							ver_pass.first_char_pass = first_char_pass
							ver_pass.tryone = pass
							pass = ""
							if (document.getElementsByClassName("label_state")[0] !== undefined){
								document.getElementsByClassName("label_state")[0].style.color = "white"
								document.getElementsByClassName("label_state")[0].innerHTML =  "* Repita clave por favor"
							}
							
						} else if (count_try_for_signup === 2){
							ver_pass.first_char_pass = first_char_pass
							ver_pass.trytwo = pass
							pass =""
						}
						
						if (count_try_for_signup === 2){
							if (ver_pass.tryone === ver_pass.trytwo){

								$.post( "./content/php/registro/registrando.php", { mail: dat_post.email, usuario: dat_post.usuario, pass: ver_pass.first_char_pass + ver_pass.trytwo})
								  .done( function(dat){
								  	if (dat.match(/\<successfully\>/gim)){
								  		document.getElementsByClassName("label_state")[0].style.color = "#fff"
								  		$("#root").notify(`Registro satisfactorio`, "success");
								  		setTimeout(function(){
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
				pattern.ontouchmove = function(){
					pattern.onpointermove = function(e){
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
				
				pattern.onpointerdown = function(e){
					adv_signal = true
				}
					
				pattern.addEventListener("touchmove", function(tm){
					window.addEventListener("pointermove", function(event){
						event.preventDefault()
					const del_first = function(){
						let pro = get_to_pass.split("")
						pro = pro.filter(function(e,i){
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

				pattern.onpointerup = function(event){
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

function managerPassword(db){
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



if (window.location.href.match(/registro/gim) === null){
	let root = document.getElementById("root")
	if (root !== undefined && root !== null){
		root.style.position = "fixed"
		root.style.borderRadius = "20px"
		root.style.margin = "auto"
		root.style.top = "40px"
		root.style.left = "0"
		root.style.right = "0"
	}
} else {
	let root = document.getElementById("root")
	if (root !== undefined && root !== null){
		root.style.position = ""
		root.style.borderRadius = "20px"
		root.style.margin = ""
		root.style.padding = "20px"
		root.style.top = "30px"
		root.style.float = "right"
		root.style.left = ""
		root.style.right = "0"
	}
}
