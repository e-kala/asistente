const fetchConsult = (configdb) => { 
	let destiny = document.getElementById(configdb.insertDataInHTML)

	for (let x = 0; x < 4; x++){
		fetch(configdb.db)
			.then(data => data.json())
			.then(data => {
				setTimeout(()=>{
					destiny.innerHTML += `
					<div>
						<img src="${data.results[0].picture.medium}"><br>
						Nombre: ${data.results[0].name.first + data.results[0].name.last}<br>
						Género: ${data.results[0].gender}<br>
						Email: ${data.results[0].email}
					</div>
					`
				},310)
			})
	}
}

const errorUserPage = (config, valueinputform) =>{
	//Superados los intentos cambia a otra ventana que se definira aquí

	//Aquí uno se inventa algo, atención al usuario, recuperación de password, etc.

	valueinputform.value = ""  //Se limpia formulario de login

	//En esta función se invocará el componente hacia la pagina de error
	let errorPage = config.components.access_ErrorLoginPage

	window.location.href = errorPage; //Access
	alert("Demasiados intentos")
	//Change state and access
}

const accessToUserPage = (config, formAndSys) => { //Acceso a la página de usuario una vez logra login

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

	//Se activa la consulta a la base de datos
	fetchConsult(config.databaseConsult)

	// window.location.href = userPage; //Access
	alert(`Bienvenid@ ${config.login.userReference}`)
}

const Pattmo = (container, config)=> {
	container = document.getElementById(container)
	container.style.display="flex"
	container.style.justifyContent = "center"
	container.style.alignItems ="center"

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
	itext.setAttribute("placeholder", "Username")

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

	document.querySelector("form").addEventListener("submit",(e)=> {
		e.preventDefault()
		if (userValue === config.login.userReference){
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
		}
	})

	
	pattern.style.opacity = userValue === "" ? "0" : "1" // Hide - Show initial


	let tryNumber = 0; //Número de intentos

	let abc = ["a","b","c","d","e","f","g","h","i"] //Valores de los cuadros

	for (let x = 0; x < 9; x++){ //Crear divs, asignarles valores, estilo, animaciones, y configuración
		const div = document.createElement("div");
		div.classList.add("box-rounded");
		div.setAttribute("name", abc[x]);

		if (config.config.letters === true){
			div.innerHTML = abc[x]
		}

		pattern.appendChild(div);

		pattern.addEventListener("mousedown",()=>{
			bool = true; 
			boolMouseOver = true;
			bfixAnActiveInput = true;

			div.addEventListener("mousemove", ()=>{
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

			document.querySelector("html").addEventListener("mouseup",()=>{
				tryNumber += 1;
				bool = false;
				boolMouseOver = false;
				bfixAnActiveInput = false;
				div.style.background = "#f2f2f2";
			});
			
		});

		pattern.ondragstart = () => false;
		container.appendChild(pattern)
	};

	let div = document.getElementsByClassName("box-rounded")

	//Detect combination for create password
	for (let x=0; x < 9; x++){
		div[x].addEventListener("mouseover",()=>{
			if (boolMouseOver){
				pass += div[x].getAttribute("name");
				// console.log(pass, tryNumber, "try")
			} 
		})
	}

	document.querySelector("html").addEventListener("mouseup",()=>{
		if (config.config.showPasswordInConsole){
			console.log(pass)
		}
		
		if (userValue !== "" && bfixAnActiveInput){ //Requerir nombre de usuario
			// console.log(pass, tryNumber, "try")
			if (tryNumber > 230 && pass !== config.login.passwordReference) { 
			 errorUserPage(config, itext); //Demasiados intentos, accede a pagina de error, ayuda/soporte
			}

			// ------------------------ Validation-----------------------------
			if (pass === config.login.passwordReference && userValue === config.login.userReference){
				accessToUserPage(config, { form: form, sys: pattern})

				console.log("He encontrado a", config.login.userReference)
				boolMouseOver = false
				tryNumber = 0
			} else {
				alert(`Datos inválidos ${userValue}`)
				console.log("Datos inválidos", userValue	)
			}

			pass = "" //Reinicio de variable password para nuevo intento
			bfixAnActiveInput = false
		} else {
			pass = "" //Reinicio de variable password para nuevo intento
			// console.log("Necesitas escribir tu nombre de usuario")
		}
	})
}

const managerPassword = db => {
	return {
		login : {
			userReference: db.login.user,
			passwordReference : db.login.password
		},
		databaseConsult : {
			db : db.databaseConsult.db,
			insertDataInHTML : db.databaseConsult.html_destiny,
			getData : db.databaseConsult.getData
		}, 

		components : {
			access_ErrorLoginPage : db.components !== undefined ? db.components.errorPage : ""
		},
		config : {
			letters: db.config_dev.letters,
			showPasswordInConsole : db.config_dev.showPassword
		}
	}
};






























/*
const errorUserPage = (config) =>{
	//Superados los intentos cambia a otra ventana que se definira aquí

	//Aquí uno se inventa algo, atención al usuario, recuperación de password, etc.

	//En esta función se invocará el componente hacia la pagina de error
	let errorPage = config.components.access_ErrorLoginPage
	console.log(errorPage)
	alert("Demasiados intentos")
	//Change state and access
}

const accessToUserPage = (config) => { //Acceso a la página de usuario una vez logra login
	//Aquí se define el componente o página personal cuando se haga login
	let userPage = config.components.access_UserPage
	console.log(userPage)
	alert(`Bienvenid@ ${config.login.userReference}`)
}

const Pattmo = (container, config)=> {
	container = document.getElementById(container)

	let form = document.createElement("form")
	let itext = document.createElement("input")
	itext.setAttribute("type","text")
	itext.setAttribute("id","username")
	itext.setAttribute("name","username")
	itext.setAttribute("placeholder", "Username")
	itext.style.background = "transparent"

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
	let user = document.getElementById("username");
	let userValue =""

	document.querySelector("form").addEventListener("submit",(e)=> e.preventDefault())

	user.addEventListener("change",(e)=>{ //Read username
		userValue = e.target.value
	})

	let tryNumber = 0; //Número de intentos

	let abc = ["a","b","c","d","e","f","g","h","i"] //Valores de los cuadros

	for (let x = 0; x < 9; x++){ //Crear divs, asignarles valores, estilo, animaciones, y configuración
		const div = document.createElement("div");
		div.classList.add("box-rounded");
		div.setAttribute("name", abc[x]);

		div.animate([{
			transform: `scale(${0.1* -x})`, background: "#9F6A6A"
		},{
			transform: `scale(1)`, background: "#f2f2f2"
		}],{duration:1000, iterations:1})

		if (config.config.letters === true){
			div.innerHTML = abc[x]
		}

		pattern.appendChild(div);

		pattern.addEventListener("mousedown",()=>{
			bool = true; 
			boolMouseOver = true;
			bfixAnActiveInput = true;

			div.addEventListener("mousemove", ()=>{
				if (bool){
					div.style.background = "rgb(236, 54,15,0.50)"
					div.animate([
						{
							background:"rgb(210,46,11,0.80)"
						},{
							background:"rgb(236, 54,15,0.50)"
						}
					],{duration:350, iterations:1})
				} 
			})

			document.querySelector("html").addEventListener("mouseup",()=>{
				tryNumber += 1;
				bool = false;
				boolMouseOver = false;
				bfixAnActiveInput = false;
				div.style.background = "#f2f2f2";
			});
			
		});

		pattern.ondragstart = () => false;
		container.appendChild(pattern)
	};

	let div = document.getElementsByClassName("box-rounded")


	//Detect combination for create password
	for (let x=0; x < 9; x++){
		div[x].addEventListener("mouseover",()=>{
			if (boolMouseOver){
				pass += div[x].getAttribute("name");
				// console.log(pass, tryNumber, "try")
			} 
		})
	}

	document.querySelector("html").addEventListener("mouseup",()=>{
		console.log(pass)
		if (userValue !== "" && bfixAnActiveInput){ //Requerir nombre de usuario
			// console.log(pass, tryNumber, "try")
			if (tryNumber > 230 && pass !== config.login.passwordReference) { 
			 errorUserPage(config); //Demasiados intentos, accede a pagina de error, ayuda/soporte
			}

			// ------------------------ Validation-----------------------------
			if (pass === config.login.passwordReference && userValue === config.login.userReference){
				accessToUserPage(config)

				console.log("He encontrado a", config.login.userReference)
				boolMouseOver = false
				tryNumber = 0
			} else {
				alert(`No se ha encontrado a ${userValue}`)
				console.log("Datos inválidos", userValue	)
			}

			pass = "" //Reinicio de variable password para nuevo intento
			bfixAnActiveInput = false
		} else {
			pass = ""
			console.log("Necesitas escribir tu nombre de usuario")
		}


	})
}

const managerPassword = db => {
	return {
		login :{
			userReference: db.login.user,
			passwordReference : db.login.password
		},
		components: {
			access_UserPage: db.components.userPage,
			access_ErrorLoginPage : db.components.errorPage
		},
		config : {
			letters: db.config.letters
		}
	}
};




*/