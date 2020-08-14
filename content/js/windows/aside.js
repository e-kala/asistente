let openedcalculator = false
let openedcalender = false
let openedconversor = false
let calcumoving = false
let calenmoving = false
let conversormoving = false
let calcuresizemoving = false



const resize_window_aside = aside => {
	let modss = document.getElementsByClassName("accordion")
	let navbar = document.getElementsByClassName("navbar")[0]
	navbar.onpointerover = e => {
		document.body.style.cursor = ""
	}


	let pase = true
	aside.ondragstart = () => false



	document.body.onpointermove = e => {
		if (aside.style.display === "none"){ //show
			if (e.clientX < 20){
				if (window.config[1].aside_hidden == "false"){
					if (aside.style.display === "none"){
						document.body.style.cursor = "grabbing"
						document.body.setAttribute("title", "Mostrar barra lateral")
					}
					aside.onpointerdown = () => false
				}
				document.body.onpointerdown = o => {
					if (modss[0] !== null && modss[0] !== undefined && window.config[1].aside_hidden == "false"){
						modss[0].className = "accordion pl-4 modulos"
					}
					if (window.config[1].aside_hidden == "false" && pase === false){
						aside.style.display = "block"
						aside.style.opacity = "1"
						aside.animate([{
							opacity:0,
							transform:"translateX(-10%)"
						},{
							opacity:1,
							transform:"translateX(0%)"
						}],{duration:400, iterations:1})
						pase = true
					} 
				}
			} else {
				document.body.setAttribute("title", "")
				document.body.style.cursor = ""
				aside.style.cursor = ""
			}
		}
	}

	aside.onpointermove = e => { //Hide
		document.body.setAttribute("title", "")
		if (e.clientX > aside.clientWidth - 3 && pase){
			if (window.config[1].aside_hidden == "false"){
				if (aside.style.display === "block"){
					aside.style.cursor = "grabbing"
					aside.setAttribute("title", "Ocultar barra lateral")
				}
			}
			aside.onpointerdown = o => {
				if (window.config[1].aside_hidden == "false"){
					document.body.onpointerdown = () => false
				}
				if (modss[0] !== null && modss[0] !== undefined && window.config[1].aside_hidden == "false"){
					modss[0].className = "accordion modulos"
				}
				setTimeout(()=>{
					aside.style.display = "none"
				},410)
				aside.animate([{
					opacity:1,
					transform:"translateX(0%)"
				},{
					opacity:0,
					transform:"translateX(-10%)"
				}],{duration:400, iterations:1})
				aside.style.opacity = "0"
				pase = false
			}
		} else {
			aside.setAttribute("title", "")
			document.body.style.cursor = ""
			aside.style.cursor = ""	
			aside.style.width = ""
			aside.onpointerdown = () => false
		}	
	}
}
 
const maction_window = (state) =>{
	window.onpointerup = () => {
		let calendario = document.getElementsByClassName("contain_calender")[0]
		let calculadora = document.getElementsByClassName("container_calculadora")[0]
		let conversor = document.getElementsByClassName("container_conversor")[0]
		if (calendario !== undefined) calendario.style.zIndex = "0"
		if (calculadora !== undefined) calculadora.style.zIndex = "0"
		if (conversor !== undefined) conversor.style.zIndex = "0"
		if (document.getElementsByClassName("alignment_invisible_widgets")[0] !== undefined){
			if (document.getElementsByClassName("alignment_invisible_widgets")[0].children.length === 0){
				document.getElementsByClassName("alignment_invisible_widgets")[0].remove()
			}
		}
	}
	window.onclick = () => {
		calcumoving = false
		calenmoving = false
		conversormoving = false
		calcuresizemoving = false
		if (document.getElementsByClassName("_general_conten_cals")[0] !== undefined){
			if (document.getElementsByClassName("_general_conten_cals")[0].children.length === 0){
				document.getElementsByClassName("container_calculadora")[0].remove()
			}
		}

		let calendario = document.getElementsByClassName("contain_calender")[0]
		let calculadora = document.getElementsByClassName("container_calculadora")[0]
		let conversor = document.getElementsByClassName("container_conversor")[0]
		let btn_reposition = document.getElementsByClassName("btn_reposition")[0]
		if (calendario === undefined && 
			calculadora === undefined && conversor === undefined){
			btn_reposition.style.opacity = "0"
			setTimeout(()=>{
				btn_reposition.style.display = "none"
			},430)
			btn_reposition.animate([{
				opacity:1
			},{
				opacity:0
			}],{duration:400, iterations:1})
			if (document.getElementsByClassName("alignment_invisible_widgets")[0] !== undefined){	
				document.getElementsByClassName("alignment_invisible_widgets")[0].style.display = "none"
				document.getElementsByClassName("alignment_invisible_widgets")[0].remove()
			}
		}

		if(calculadora === undefined){
			if (calendario !== undefined){
				calendario.style.marginRight = "30px"
				calendario.style.marginLeft = "30px"
			}
		} 

		if(calendario === undefined && calcumoving){
			if (calculadora !== undefined){
				if (conversor !== undefined){
					conversor.style.marginRight = "30px"
					conversor.style.marginLeft = "30px"
				}
			}
		} 

		if (calendario === undefined && calculadora === undefined){
			if (conversor !== undefined){
				conversor.style.marginRight = "30px"
				conversor.style.marginLeft = "30px"
			}
		}

		if (calenmoving) {
			calendario.style.zIndex = "20"
			if (calculadora !== undefined) calculadora.style.zIndex = "0"
			if (conversor !== undefined) conversor.style.zIndex = "0"
		}
		if (calcumoving) {
			calculadora.style.zIndex = "20"
			if (calendario !== undefined) calendario.style.zIndex = "0"
			if (conversor !== undefined) conversor.style.zIndex = "0"
		}
		if (conversormoving) {
			conversor.style.zIndex = "20"
			if (calculadora !== undefined) calculadora.style.zIndex = "0"
			if (calendario !== undefined) calendario.style.zIndex = "0"
		}
	}

	window.onpointerdown = e =>{
		let calculadora = document.getElementsByClassName("container_calculadora")[0]
		let calendario = document.getElementsByClassName("contain_calender")[0]
		let conversor = document.getElementsByClassName("container_conversor")[0]

		if (calculadora !== undefined){
			if(calcumoving){
				if (calendario !== undefined){
					calendario.style.marginRight = "30px"
					calendario.style.marginLeft = "30px"
				}
			} 

			if(calcumoving && calendario === undefined){
				if (conversor !== undefined){
					conversor.style.marginRight = "30px"
					conversor.style.marginLeft = "30px"
				}
			} 
		}
		if (calenmoving && calculadora === undefined){
			if (calendario !== undefined){
				if (conversor !== undefined){
					conversor.style.marginRight = "30px"
					conversor.style.marginLeft = "30px"
				}
			}
		}


		if (calendario !== undefined){
			if(calenmoving){
				if (conversor !== undefined){
					conversor.style.marginRight = "30px"
					conversor.style.marginLeft = "30px"
				}
			}
		}
		if (calendario === undefined){
			if(calcumoving){
				if (conversor !== undefined){
					conversor.style.marginRight = "30px"
					conversor.style.marginLeft = "30px"
				}
			} 
		}
	}

	window.onpointermove = e =>{
		let pixrad = getDevicePixelRatio()
		//Pendiente PENDIENTE segun el pixelradio configurar el cursor cuando se expande o disminuye la escala de un widget de momento la calculadora
		let calculadora = document.getElementsByClassName("container_calculadora")[0]
		let conversor = document.getElementsByClassName("container_conversor")[0]
		let calendario = document.getElementsByClassName("contain_calender")[0]

		if (calcumoving){
			document.body.appendChild(calculadora)
			calculadora.style.zIndex= "20"
			if (calendario !== undefined) calendario.style.zIndex= "0"
			if (conversor !== undefined) conversor.style.zIndex= "0"

			if (document.getElementsByClassName("contain_calender")[0] !== undefined) document.getElementsByClassName("contain_calender")[0].style.zIndex = "0"
			
			calculadora.style.position = "fixed"
			let scale = calculadora.style.transform.replace(/(scale|\(|\))/gim,"")
			if (scale >= 0.4 && scale < 0.5){
				calculadora.style.left = Math.round(e.clientX - 155) + "px"
				calculadora.style.top = Math.round(e.clientY - 150) + "px"
			} else if (scale >= 0.5 && scale < 0.6) {
				calculadora.style.left = Math.round(e.clientX - 134) + "px"
				calculadora.style.top = Math.round(e.clientY - 120) + "px"	
			} else if (scale >= 0.6 && scale < 0.7) {
				calculadora.style.left = Math.round(e.clientX - 120) + "px"
				calculadora.style.top = Math.round(e.clientY - 90) + "px"	
			} else if (scale >= 0.7 && scale < 0.8) {
				calculadora.style.left = Math.round(e.clientX - 100) + "px"
				calculadora.style.top = Math.round(e.clientY - 60) + "px"	
			} else if (scale >= 0.8 && scale < 0.9) {
				calculadora.style.left = Math.round(e.clientX - 75) + "px"
				calculadora.style.top = Math.round(e.clientY - 40) + "px"	
			} else if (scale >= 0.9 && scale < 1) {
				calculadora.style.left = Math.round(e.clientX - 80) + "px"
				calculadora.style.top = Math.round(e.clientY - 15) + "px"	
			} else if (scale >= 1 && scale < 1.1) {
				calculadora.style.left = Math.round(e.clientX - 50) + "px"
				calculadora.style.top = Math.round(e.clientY + 10) + "px"	
			} else if (scale >= 1.1 && scale < 1.2) {
				calculadora.style.left = Math.round(e.clientX - 30) + "px"
				calculadora.style.top = Math.round(e.clientY + 40) + "px"	
			} else if (scale >= 1.2 && scale < 1.3) {
				calculadora.style.left = Math.round(e.clientX - 10) + "px"
				calculadora.style.top = Math.round(e.clientY + 60) + "px"	
			} else if (scale >= 1.3 && scale < 1.4) {
				calculadora.style.left = Math.round(e.clientX + 5) + "px"
				calculadora.style.top = Math.round(e.clientY + 100) + "px"	
			} else {
				calculadora.style.left = Math.round(e.clientX - 85) + "px"
				calculadora.style.top = Math.round(e.clientY - 40) + "px"	
			}
		} else if (calenmoving){ //Moving calculator
			document.body.appendChild(calendario)
			calendario.style.position = "fixed"
			calendario.style.zIndex = "20"
			if (calculadora !== undefined) calculadora.style.zIndex= "0"
			if (conversor !== undefined) conversor.style.zIndex= "0"

			
			calendario.style.left = Math.round(e.clientX - 385) + "px"
			calendario.style.top = Math.round(e.clientY - 30) + "px"
		} else if (conversormoving){ //Moving conversor
			document.body.appendChild(conversor)
			conversor.style.position = "fixed"
			conversor.style.zIndex = "20"
			if (calculadora !== undefined) calculadora.style.zIndex= "0"
			if (calendario !== undefined) calendario.style.zIndex= "0"

			
			conversor.style.left = Math.round(e.clientX - 385) + "px"
			conversor.style.top = Math.round(e.clientY - 30) + "px"
		}
		if (calcuresizemoving){ //Resize calculator
			if ((e.clientX / 100 * 0.1).toFixed(1) >= 0.4 && (e.clientX / 100 * 0.1).toFixed(1) <= 1.3){
				if (e.clientX / 1000 * 0.0001 <= 5){
					calculadora.style.transform = `scale(${(e.clientX / 100 * 0.1).toFixed(1)})`
					console.log(calculadora.style.transform)
				}else if(e.clientX / 1000 * 0.0001 >= -5){
					calculadora.style.transform = `scale(${(e.clientX / 100 * 0.1).toFixed(1)})`
				}
			}
		}
	}
}

const calculator = () => {
	const calc = (contacal, ide, contacprimge) => {
		const contcalorigin = document.createElement("div")
		contcalorigin.className = "border p-3 mb-3"
		contcalorigin.setAttribute("name", ide)
		contcalorigin.animate([{
			transform:"translateX(-50%)"
		},{
			transform:"translateX(0%)"
		}],{duration:400, iterations:1})

		const header_icons = document.createElement("div")
		header_icons.className =" p-2 d-flex justify-content-end"

		const close = document.createElement("button")
		close.style.cursor = "pointer"
		close.className = "btn-danger btn"
		close.innerHTML = "Cerrar"
		close.onclick = () =>{
			openedcalculator = false
			document.getElementsByName(ide)[0].remove()
			if (document.getElementsByName(ide)[0] == undefined && contacal.children.length === 1) contacprimge.style.width = "450px"
			if (contacal.children.length === 0) contacprimge.style.height = "20px"
		}

		header_icons.appendChild(close)
		contcalorigin.appendChild(header_icons)

		const body = document.createElement("div")
		contcalorigin.appendChild(body)

		const form = document.createElement("form")
		form.className = "d-flex"
		const input_and_result = document.createElement("input")
		input_and_result.className = "flex-grow-1 m-2"
		input_and_result.placeholder = "2 + 2 * 6 / (7 -3)"
		form.appendChild(input_and_result)
		body.appendChild(form)

		const men_buttons = document.createElement("div")
		men_buttons.className = "d-flex flex-wrap justify-content-between align-content-center"
		body.appendChild(men_buttons)

		for (let x = 0; x < 10; x++){
			const number = document.createElement("button")
			number.className = "flex-grow-1 btn-dark btn p-2 m-1 font-weight-bold"
			number.style.width = "20%"
			number.style.fontSize = "140%"
			number.innerHTML = x
			number.value = x
			number.onclick = () => {
				input_and_result.value += number.value
				input_and_result.focus()
			}
			men_buttons.appendChild(number)
		}

		const buttons_functions = ["C.", "+", "-","x","/", "Resolver", "c", "(", ")"]
		const menbtnfx = document.createElement("div")
		menbtnfx.className =" d-flex flex-wrap justify-content-between"
		body.appendChild(menbtnfx)

		for (let x = 0; x < buttons_functions.length;x++){
			const btn_fx = document.createElement("button")
			btn_fx.innerHTML = buttons_functions[x]
			btn_fx.style.fontSize = "140%"
			menbtnfx.appendChild(btn_fx)
			if (x === 5){ // Resolver
				btn_fx.className = "btn btn-secondary w-100 p-2 m-1 flex-grow-1 font-weight-bold"
				const processo = () => {
					let gettext = input_and_result.value
					if (gettext !== ""){
						gettext = gettext.match(/(\d+|\D+)/gim) ? gettext : "ERROR"
						gettext = gettext.match(/\$/gim) ? gettext = "ERROR" : gettext;
						gettext = gettext.match(/(\d+|\+|\-|\/|\*)/gim) ? gettext = gettext : "ERROR";
						// let gettextSpacesDelete = gettext.match(/\s/gim) ? gettext = gettext.replace(/\s/gim, "") : gettext
						// gettextSpacesDelete = gettextSpacesDelete.match(/\D\D/gim) ? input_and_result.value = "ERROR DE SINTAXIS" : gettext = gettext
						return gettext;
					} else {
						return "0";
					}
				}

				const apply_processo = (e) => {
					e.preventDefault()
					let res = processo()
					try{
						let calcures = eval(res)
						input_and_result.value = calcures
					} catch(e){
						input_and_result.value = "ERROR DE SINTAXIS"
					}
				}

				form.onsubmit = e => apply_processo(e) // Resolver
				btn_fx.onclick = e => apply_processo(e) //Resolver

				
			}else{
				btn_fx.className = "btn btn-primary p-2 m-1 flex-grow-1 font-weight-bold"
			}

			if (x === 0) btn_fx.onclick = () =>{
				input_and_result.value = ""
				input_and_result.focus()
			}
			if (x === 1) btn_fx.onclick = () =>{
				input_and_result.value += "+"
				input_and_result.focus()
			}
			if (x === 2) btn_fx.onclick = () =>{
				input_and_result.value += "-"
				input_and_result.focus()
			}
			if (x === 3) btn_fx.onclick = () =>{
				input_and_result.value += "*"
				input_and_result.focus()
			}
			if (x === 4) btn_fx.onclick = () =>{ 
				input_and_result.value += "/"
				input_and_result.focus()
			}
			if (x === 6) btn_fx.onclick = () =>{
				input_and_result.value = input_and_result.value.substring(0, input_and_result.value.length - 1);
				input_and_result.focus()
			}
			if (x === 7) btn_fx.onclick = () =>{
				input_and_result.value += "("
				input_and_result.focus()
			}
			if (x === 8) btn_fx.onclick = () => {
				input_and_result.value += ")"
				input_and_result.focus()
			}	
		}
		contacal.appendChild(contcalorigin)
	}

	if (openedcalculator){
		let contacal, _general_conten_cals;
		if (document.getElementsByClassName("container_calculadora")[0] == undefined && document.getElementsByClassName("container_calculadora")[0] == null){
			contacal = document.createElement("div")
		} else {
			document.getElementsByClassName("container_calculadora")[0].innerHTML = ""
			contacal = document.getElementsByClassName("container_calculadora")[0]
		}
		if (document.getElementsByClassName("conte_gen_cals")[0] == undefined && document.getElementsByClassName("conte_gen_cals")[0] == null){
			_general_conten_cals = document.createElement("div")
		} else {
			document.getElementsByClassName("conte_gen_cals")[0].innerHTML = ""
			_general_conten_cals = document.getElementsByClassName("conte_gen_cals")
		}
		contacal.className = "container_calculadora  d-flex flex-column"
		contacal.style.background = "rgb(255,255,255,0.80)"
		contacal.style.position = "fixed"
		if (window.screen.width >= 500){
			contacal.style.bottom = "0"
			contacal.style.right = "0"
			// contacal.style.marginRight = "30px"
			contacal.style.width = "450px"
		} else {
			contacal.style.bottom = "0"
			contacal.style.right = "0"
			contacal.style.left = "0"
			contacal.style.top ="0"
			contacal.style.margin = "auto"
			contacal.style.width = "400px"
		}

		contacal.style.height = "520px"
		contacal.style.zIndex = "30"
		contacal.style.borderRadius = "15px"
		contacal.style.boxShadow = "2px 2px 10px rgb(0,0,0,0.50)"
		contacal.animate([{
			opacity:0
		},{
			opacity:1
		}],{duration:400, iterations:1})

		contacal.onclick = () => {
			if (document.getElementsByClassName("contain_calender")[0] !== undefined) document.getElementsByClassName("contain_calender")[0].style.zIndex = "0"
				contacal.style.zIndex = "20"
		}

		_general_conten_cals.className = "d-flex flex-wrap flex-grow-1 justify-content-center _general_conten_cals"
		_general_conten_cals.style.overflow = "auto"
		_general_conten_cals.style.height ="560px"
		contacal.appendChild(_general_conten_cals)

		const header_icons = document.createElement("div")
		header_icons.className = "bg-info w-100 p-2 mb-3 flex-grow-1 opt_hea_win_asi d-flex justify-content-between align-items-center"
		contacal.appendChild(header_icons)

		const move = document.createElement("img") // Mover
		move.setAttribute("src", "./content/img/iconos/move.png")
		move.setAttribute("width", "90px")
		move.setAttribute("id", "move_calculator")
		move.ondragstart = () => false
		move.style.userSelect = "none"
		move.setAttribute("height", "40px")
		move.style.cursor = "pointer"
		move.className = "btn-transparent text-light font-weight-bold btn"
		move.style.fontSize = "150%"
		move.innerHTML = "Mover"
		move.onpointerdown = () => calcumoving = true
		move.onpointerup = () => calcumoving = false
		header_icons.appendChild(move)

		const nueva_calc = document.createElement("img") //Nueva calculadora
		nueva_calc.setAttribute("src", "./content/img/iconos/nuevo.png")
		nueva_calc.setAttribute("width", "60px")
		nueva_calc.setAttribute("height", "45px")
		nueva_calc.ondragstart = () => false
		nueva_calc.style.userSelect = "none"
		nueva_calc.style.cursor = "pointer"
		nueva_calc.className = "btn-transparent text-light font-weight-bold btn"
		nueva_calc.style.fontSize = "150%"
		nueva_calc.innerHTML = "Nuevo"
		header_icons.appendChild(nueva_calc)
		nueva_calc.onclick = () => {
			calc(_general_conten_cals, "calcuno"+Math.random(), contacal)
			_general_conten_cals.scrollTo(0,window.screen.height*1000)
			if (window.screen.width >= 500){
				contacal.style.width = "540px"
			}else{
				contacal.style.width = "450px"
			}
			if (_general_conten_cals.children.length === 1){
				contacal.style.width = "450px"
				contacal.style.height = "560px"
			}
		}

		const resize = document.createElement("img")// Resize 
		resize.className = "btn-transparent text-light font-weight-bold btn resize_calculator"
		resize.setAttribute("src","./content/img/iconos/resize.png")
		resize.setAttribute("width", "80px")
		resize.setAttribute("height", "60px")
		resize.style.cursor = "pointer"
		resize.style.userSelect = "none"
		resize.ondragstart = () => false
		resize.style.fontSize = "150%"
		header_icons.appendChild(resize)
		resize.onpointerdown = () => calcuresizemoving = true
		resize.onpointerup = () => calcuresizemoving = false
		maction_window("calculator")
		// maction_window(contacal, resize, move, "calculator")

		const cerrar_general = document.createElement("img") //Cerrar todas
		cerrar_general.setAttribute("src","./content/img/iconos/close.png")
		cerrar_general.setAttribute("width", "40px")
		cerrar_general.setAttribute("height", "40px")
		cerrar_general.style.cursor = "pointer"
		cerrar_general.style.userSelect = "none"
		cerrar_general.ondragstart = () => false
		cerrar_general.style.fontSize = "150%"
		header_icons.appendChild(cerrar_general)
		cerrar_general.onclick = () => {
			if (document.getElementsByClassName("container_calculadora")[0] !== undefined && document.getElementsByClassName("container_calculadora")[0] !== null){
				openedcalculator = false
				document.getElementsByClassName("container_calculadora")[0].remove()
			}
		}

		calc(_general_conten_cals, "calcdos", contacal)
		return contacal;
	}
}

const calender = () => {
	const get_whole_days_this_month = () =>{
		let  dat_whole = new Date()
		let mes = dat_whole.getMonth() + 1;
		let year = dat_whole.getFullYear();
		let getnumberdays = new Date(year, mes, 0)
		let getdaynuntoday = dat_whole.toString().match(/\b\w+\s+\w+/gim)[1].split(" ")[0]

		getnumberdays = getnumberdays.toString().match(/\b\w+\s+\w+/gim)[1].split(" ")[0]

		let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
		let diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

		let almadaysnames = [];
		let fdm = new Date(year, dat_whole.getMonth(), 7)
		fdm = fdm.toString()
		let y = 0;
		console.log(fdm)
		if (fdm.match(/Wed/gim)){
			y = 3 //Miercoels
		} else if (fdm.match(/Thu/gim)){
			y = 4 //Jueves
		} else if (fdm.match(/Fri/gim)){
			y = 5 //Viernes
		} else if (fdm.match(/Sat/gim)){
			y = 6 //Sábado
		} else if (fdm.match(/Sun/gim)){
			y = 1 //Domingo
		} else if (fdm.match(/Mon/gim)){
			y = 2 //Lunes
		}
		let countSeven = 0 // Contar primera semana de referencia el orden de dias
		for (let x = 0; x < getnumberdays; x++){
			y += 1
			countSeven += 1
			if (diasSemana[y] === undefined){
				y = -1
				y += 1
			}
			if (countSeven < 8) {
				almadaysnames.push(diasSemana[y])
			}
		}

		console.log(almadaysnames, "Je")

	
		return {
			diaNombre : diasSemana[dat_whole.getDay()],
			diaNumberRealHoy : getdaynuntoday,
			mesNombre : meses[dat_whole.getMonth()],
			year: dat_whole.getFullYear(),
			mesNumero : mes,
			allDays : getnumberdays,
			semana_nombres_dias_mes_actual : almadaysnames
		}
	}

	let time = get_whole_days_this_month()

	if (openedcalender){
		let contacal = document.createElement("div")
		contacal.className = "contain_calender"
		contacal.style.background = "rgb(255,255,255,0.80)"
		contacal.style.position = "fixed"
		if (window.screen.width >= 500){
			contacal.style.bottom = "0px"
			contacal.style.right = "0"
			contacal.style.marginRight = "30px"
			contacal.style.marginBottom = "30px"
			contacal.style.width = "450px"
		} else {
			contacal.style.bottom = "0"
			contacal.style.right = "0"
			contacal.style.left = "0"
			contacal.style.top ="0"
			contacal.style.margin = "auto"
			contacal.style.width = "400px"
		}

		contacal.style.height = "460px"
		// contacal.style.overflow = "auto"
		contacal.style.zIndex = "30"
		contacal.style.borderRadius = "15px"
		contacal.style.boxShadow = "2px 2px 10px rgb(0,0,0,0.50)"
		contacal.animate([{
			opacity:0
		},{
			opacity:1
		}],{duration:400, iterations:1})

		contacal.onclick = () => {
			if (document.getElementsByClassName("container_calculadora")[0] !== undefined) document.getElementsByClassName("container_calculadora")[0].style.zIndex = "0"
				contacal.style.zIndex = "20"
		}


		const header_icons = document.createElement("div")
		contacal.appendChild(header_icons)
		header_icons.className = "bg-danger p-2 d-flex align-items-center align-content-center justify-content-between"
		header_icons.innerHTML = `<h4 class='ml-2 text-light font-weight-bold'>${time.mesNombre}, ${time.year}</h4>`
		const menicons = document.createElement("div")
		header_icons.appendChild(menicons)

		const move = document.createElement("img") // Mover
		move.setAttribute("src", "./content/img/iconos/move.png")
		move.setAttribute("width", "90px")
		move.ondragstart = () => false
		move.style.userSelect = "none"
		move.setAttribute("height", "40px")
		move.style.cursor = "pointer"
		move.className = "btn-transparent text-light font-weight-bold btn move_calender"
		move.style.fontSize = "150%"
		move.innerHTML = "Mover"
		move.onpointerdown = () => {
			calenmoving = true
		}
		move.onpointerup = () => calenmoving = false
		menicons.appendChild(move)

		maction_window("calender")

		const cerrar_general = document.createElement("img") //Cerrar todas
		cerrar_general.setAttribute("src","./content/img/iconos/close.png")
		cerrar_general.setAttribute("width", "40px")
		cerrar_general.setAttribute("height", "40px")
		cerrar_general.style.cursor = "pointer"
		cerrar_general.style.userSelect = "none"
		cerrar_general.ondragstart = () => false
		cerrar_general.style.fontSize = "150%"
		menicons.appendChild(cerrar_general)
		cerrar_general.onclick = () => {
			if (document.getElementsByClassName("contain_calender")[0] !== undefined && document.getElementsByClassName("contain_calender")[0] !== null){
				openedcalender = false
				document.getElementsByClassName("contain_calender")[0].remove()
			}
			
		}

		const body = document.createElement("div")
		body.className = "body_calender"
		contacal.appendChild(body)

		const dias_semana = document.createElement("div")
		dias_semana.className = "bg-light font-weight-bold text-dark text-center p-3 "
		dias_semana.innerHTML = "Hoy es " + time.diaNombre
		
		const dias_numeros = document.createElement("div")
		dias_numeros.style.background = "#fff"
		dias_numeros.className = " p-3 "

		let containnunssemana1 = document.createElement("div");
		let containnunssemana2 = document.createElement("div");
		let containnunssemana3 = document.createElement("div");
		let containnunssemana4 = document.createElement("div");
		let containnunssemana5 = document.createElement("div");

		let days_semana_div_nombres = document.createElement("div")  // Dias de la semana con nombre
		days_semana_div_nombres.className ="d-flex justify-content-between pl-4 pr-4 bg-secondary"
		for (let x = 0; x < time.semana_nombres_dias_mes_actual.length; x++){
			const dia_nombre = document.createElement("span")
			dia_nombre.className = "p-2 text-light font-weight-bold"
			dia_nombre.innerHTML = time.semana_nombres_dias_mes_actual[x][0] + time.semana_nombres_dias_mes_actual[x][1]
			days_semana_div_nombres.appendChild(dia_nombre)
		}


		let arcontainnunssems = [containnunssemana1, containnunssemana2, containnunssemana3, containnunssemana4, containnunssemana5]
		arcontainnunssems.map(e => e.className = "d-flex justify-content-between")

		for (let x = 0; x < time.allDays; x++){
			let day_nun = document.createElement("div")
			day_nun.innerHTML = x+1;
			day_nun.style.background = "#fff"
			day_nun.style.width = "40px"
			day_nun.style.cursor = "pointer"
			day_nun.style.userSelect = "none"
			day_nun.setAttribute("name", x+1)

			day_nun.onpointerover = () =>{
				day_nun.style.background = "#dbdbdb"
				day_nun.animate([{background:"#fff"},{background:"#dbdbdb"}],{duration:400, iterations:1})
			}
			day_nun.onpointerout = () =>{
				day_nun.style.background = "#fff"
				day_nun.animate([{background:"#dbdbdb"},{background:"#fff"}],{duration:400, iterations:1})
			}
			day_nun.onclick = e => {
				let mes = time.mesNumero.toString().split("").length === 1 ? "0" + time.mesNumero  : time.mesNumero
			
				timeo = time.year + "-" + mes + "-" + e.target.getAttribute("name")
	
				$.post("./content/php/consults_info/ingresos_query_ajax.php", {
					usuario: alma_config[0].usuario,
					time_bal: timeo !== "" ? timeo : "hour"
				}).done(d => {
					d = JSON.parse(d)
					document.getElementsByClassName("balactual")[0].innerHTML = `<span class='font-weight-bold'>Balance Real</span>: <span class='	font-weight-bold' style='color:${d.BalanceActual.toString().match(/\-/gim) ? "red" : "#50d53a"}'>$ ` + d.BalanceActual+"</span>"
					document.getElementsByClassName("togasfil")[0].innerHTML = `<span class='font-weight-bold'>Total Gastos</span>: <span class='font-weight-bold' style='color:red;'>$ ` + d.TotalGastosFiltro+"</span><br>"
					document.getElementsByClassName("toinfil")[0].innerHTML = `<span class='font-weight-bold'>Total Ingresos</span>: <span class='font-weight-bold' style='color:${d.TotalIngresosFiltro.toString().match(/\-/gim) ? "red" : "#50d53a"}'>$ ` + d.TotalIngresosFiltro+"</span><br>"
					document.getElementsByClassName("bafis")[0].innerHTML = `<span class='font-weight-bold'>Flujo ${d.Statebalancefiltro}</span>: <span class='font-weight-bold' style='color:${d.BalanceFiltro.toString().match(/\-/gim) ? "red" : "#0CC9D5"}'>$ ` + d.BalanceFiltro + "</span"
					document.getElementsByClassName("state_balanc")[0].innerHTML = d.Status
				})
			}

			if ((x+1) == time.diaNumberRealHoy){	
				day_nun.style.border = "2px solid red" 
			}
			day_nun.className = "hoverdaynuncalender p-2 text-center d-flex flex-column  text-dark font-weight-bold "
			if (x <= 6){
				containnunssemana1.appendChild(day_nun)
				dias_numeros.appendChild(containnunssemana1)
			} 
			if (x > 6 && x <= 13){
				containnunssemana2.appendChild(day_nun)
				dias_numeros.appendChild(containnunssemana2)
			}
			if (x > 13 && x <= 20){
				containnunssemana3.appendChild(day_nun)
				dias_numeros.appendChild(containnunssemana3)
			}
			if (x > 20 && x <= 27){
				containnunssemana4.appendChild(day_nun)
				dias_numeros.appendChild(containnunssemana4)
			}
			if (x > 27 && x <= 31){
				containnunssemana5.appendChild(day_nun)
			}
		}

		for (let y = 0; y < 4; y++){ //Relleno para mantener estructura
			const diadicions = document.createElement("div")
			diadicions.innerHTML = "_"
			diadicions.style.background = "#fff"
			diadicions.style.color ="#fff"
			diadicions.style.width = "40px"
			diadicions.style.cursor = "pointer"
			diadicions.style.userSelect = "none"
			containnunssemana5.appendChild(diadicions)
			dias_numeros.appendChild(containnunssemana5)
		}

		const footer = document.createElement("div")
		footer.className = "p-2 text-center"
		const btn_default_restablish = document.createElement("button")
		btn_default_restablish.className ="btn btn-dark p-2 ml-3 mr-3 m-2 "
		btn_default_restablish.innerHTML = "Reestablecer filtros de configuración"
		btn_default_restablish.onclick = () =>{
			$.post("./content/php/consults_info/ingresos_query_ajax.php", {
				usuario: alma_config[0].usuario,
				time_bal: alma_config[1].time_bal
			}).done(d => {
				d = JSON.parse(d)
				document.getElementsByClassName("balactual")[0].innerHTML = `<span class='font-weight-bold'>Balance Real</span>: <span class='	font-weight-bold' style='color:${d.BalanceActual.toString().match(/\-/gim) ? "red" : "#50d53a"}'>$ ` + d.BalanceActual+"</span>"
				document.getElementsByClassName("togasfil")[0].innerHTML = `<span class='font-weight-bold'>Total Gastos</span>: <span class='font-weight-bold' style='color:red;'>$ ` + d.TotalGastosFiltro+"</span><br>"
				document.getElementsByClassName("toinfil")[0].innerHTML = `<span class='font-weight-bold'>Total Ingresos</span>: <span class='font-weight-bold' style='color:${d.TotalIngresosFiltro.toString().match(/\-/gim) ? "red" : "#50d53a"}'>$ ` + d.TotalIngresosFiltro+"</span><br>"
				document.getElementsByClassName("bafis")[0].innerHTML = `<span class='font-weight-bold'>Flujo ${d.Statebalancefiltro}</span>: <span class='font-weight-bold' style='color:${d.BalanceFiltro.toString().match(/\-/gim) ? "red" : "#0CC9D5"}'>$ ` + d.BalanceFiltro + "</span"
				document.getElementsByClassName("state_balanc")[0].innerHTML = d.Status
			})
		}
		
		footer.appendChild(btn_default_restablish)
		
		body.appendChild(dias_semana)
		body.appendChild(days_semana_div_nombres)
		body.appendChild(dias_numeros)
		contacal.appendChild(footer)
		return contacal
	}
}



//Funcion del conversor
let monedaBase = "Dólar USA"
let monedaDeConversion = "Euro"
const cotasaproresult = () => {
	let numConverTasa = document.getElementById("montotoChange")
	alert(numConverTasa.value)
	alert(monedaBase)
	alert(monedaDeConversion)
}
//Seleccion de Moneda Base
const select_init_moneda = (e) => monedaBase = e.options[e.selectedIndex].text // De
const select_moneda_conver = (e) => monedaDeConversion = e.options[e.selectedIndex].text // A

const conversor = () => {
	if (openedconversor) {
		let contacal = document.createElement("div")
		contacal.className = "container_conversor"
		contacal.style.background = "rgb(255,255,255,0.80)"
		contacal.style.position = "fixed"

		if (window.screen.width >= 500){
			contacal.style.bottom = "0px"
			contacal.style.right = "0"
			contacal.style.marginRight = "30px"
			contacal.style.marginBottom = "30px"
			contacal.style.width = "450px"
		} else {
			contacal.style.bottom = "0"
			contacal.style.right = "0"
			contacal.style.left = "0"
			contacal.style.top ="0"
			contacal.style.margin = "auto"
			contacal.style.width = "400px"
		}

		contacal.style.height = "355px"
		// contacal.style.overflow = "auto"
		contacal.style.zIndex = "30"
		contacal.style.borderRadius = "15px"
		contacal.style.boxShadow = "2px 2px 10px rgb(0,0,0,0.50)"
		contacal.animate([{
			opacity:0
		},{
			opacity:1
		}],{duration:400, iterations:1})

		contacal.onclick = () => {
			if (document.getElementsByClassName("container_conversor")[0] !== undefined) document.getElementsByClassName("container_conversor")[0].style.zIndex = "0"
				contacal.style.zIndex = "20"
		}

		const header_icons = document.createElement("div")
		header_icons.innerHTML = "<h4 class='ml-2 text-light font-weight-bold'>Conversor</h4>"
		contacal.appendChild(header_icons)
		header_icons.className = "bg-warning p-2 d-flex align-items-center align-content-center justify-content-between"
		const menicons = document.createElement("div")
		header_icons.appendChild(menicons)

		const move = document.createElement("img") // Mover
		move.setAttribute("src", "./content/img/iconos/move.png")
		move.setAttribute("width", "90px")
		move.ondragstart = () => false
		move.style.userSelect = "none"
		move.setAttribute("height", "40px")
		move.style.cursor = "pointer"
		move.className = "btn-transparent text-light font-weight-bold btn move_conversor"
		move.style.fontSize = "150%"
		move.innerHTML = "Mover"
		move.onpointerdown = () => {
			conversormoving = true
		}
		move.onpointerup = () => conversormoving = false
		menicons.appendChild(move)
		maction_window("calender")

		const cerrar_general = document.createElement("img") //Cerrar todas
		cerrar_general.setAttribute("src","./content/img/iconos/close.png")
		cerrar_general.setAttribute("width", "40px")
		cerrar_general.setAttribute("height", "40px")
		cerrar_general.style.cursor = "pointer"
		cerrar_general.style.userSelect = "none"
		cerrar_general.ondragstart = () => false
		cerrar_general.style.fontSize = "150%"
		menicons.appendChild(cerrar_general)
		cerrar_general.onclick = () => {
			document.body.appendChild(document.getElementById("conversor_tasa"))
			document.getElementById("conversor_tasa").style.display = "none"
			if (document.getElementsByClassName("container_conversor")[0] !== undefined && document.getElementsByClassName("container_conversor")[0] !== null){
				openedconversor = false
				document.getElementsByClassName("container_conversor")[0].remove()
			}
			
		}

		const body = document.createElement("div")
		body.className ="p-3"
		const form = document.createElement("form")
		form.className = "p-1"
		form.onsubmit = e => e.preventDefault()
		

		let conversor_tasa = document.getElementById("conversor_tasa")
		if (conversor_tasa !== null) {
			conversor_tasa.style.display = "block"
			form.appendChild(conversor_tasa)
		}
		
		body.appendChild(form)

		contacal.appendChild(body)
		return contacal;
	}
}


const Aside = (username) => {
	const containhome = document.getElementsByClassName("containhome")[0]
	const contacal = document.createElement("div")
	contacal.className += "contacalaside card asidechancolor"

	resize_window_aside(contacal)
	
	const header = document.createElement("div")
	header.setAttribute("align", "center")
	header.className = "card-header position-relative d-flex flex-column justify-content-center align-items-center align-content-center"	

	const h1 = document.createElement("h4")
	h1.innerHTML = "Hola "+username
	h1.className = "p-3"
	if (header !== undefined) header.appendChild(h1)

	const imgcontainer = document.createElement("div")
	imgcontainer.className = "position-relative imgcontainer"
	const img = document.createElement("img")
	img.className += "caras"
	img.setAttribute("width", "50%")

	img.style.background = "#909090"
	img.style.borderRadius = "100%"
	img.ondragstart = () => false
	img.style.userSelect = "none"
	imgcontainer.appendChild(img)

	if (img !== undefined) header.appendChild(imgcontainer)
	if (contacal !== undefined)contacal.appendChild(header)

	const btn_notificacion = document.createElement("div")
	btn_notificacion.setAttribute("name", "btn_notificacion")
	btn_notificacion.style.fontSize ="120%"
	btn_notificacion.style.display = "none"
	
	// if (contacal !== undefined) contacal.appendChild(btn_notificacion)

	let balcontent = document.getElementsByClassName("balactual")[0]

	let confpj = window.config[1].pj_change
	if (balcontent !== undefined && balcontent !==null){
		const divnoti = document.createElement("span")
		if (balcontent.textContent.match(/\-/gim)){
			if (confpj !== "" && confpj !== null && confpj !== undefined){
				if (confpj.match(/bau/gim)){
					img.setAttribute("src","./content/img/iconos/bauangry.gif")
				} else if (confpj.match(/face/gim)){
					img.setAttribute("src","./content/img/iconos/faceangry.gif")
				}
			} else {
				img.setAttribute("src", "./content/img/iconos/bauangry.gif")
			}
			btn_notificacion.className = "p-4 m-2 alert-warning font-weight-bold text-center"
			
			btn_notificacion.style.wordWrap = "break-word"
			btn_notificacion.style.overflowWrap = "break-word"
			btn_notificacion.style.whiteSpace = "normal"
			btn_notificacion.style.color = "#ff9834"
			btn_notificacion.style.borderRadius = "100px"
			btn_notificacion.style.zIndex = "200"
			btn_notificacion.style.cursor = "pointer"
			btn_notificacion.onpointerover = ()=> btn_notificacion.style.border = "1px solid #f35b5c"
			btn_notificacion.onpointerout = ()=> btn_notificacion.style.border = "1px solid transparent"
			btn_notificacion.innerHTML = "Actualmente posees deudas"
			btn_notificacion.ondragstart = () => false
			btn_notificacion.style.userSelect = "none"
			btn_notificacion.onclick = () => {
				divnoti.style.display = "flex"
				btn_notificacion.style.display = "none"
			}

			//Notify pj
			// divnoti.setAttribute("src", "./content/img/iconos/notifi_danger.png")
			divnoti.className = "m-3  btn badge badge-danger  align-items-center justify-content-center"
			divnoti.style.position = "absolute"
			divnoti.style.display = "flex"
			divnoti.style.top ="0"
			divnoti.style.width = "40px"
			divnoti.style.height = "40px"
			divnoti.style.right = "-10px"
			divnoti.setAttribute("title", "Tienes una notificación")
			divnoti.innerHTML = "1"
			divnoti.style.fontSize = "130%"
			divnoti.ondragstart = () => false
			divnoti.style.userSelect = "none"
			divnoti.animate([{
				boxShadow:" 0px 0px 0px #ff6666"
			},{
				boxShadow:" 0px 0px 20px red"
			}],{duration:400, iterations:Infinity})
			// divnoti.setAttribute("width", "36px")
			divnoti.style.borderRadius ="100%"
			divnoti.onclick = () => {
				btn_notificacion.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
				btn_notificacion.style.display = "block"
				divnoti.style.display = "none"
			}
			header.appendChild(btn_notificacion)
			imgcontainer.appendChild(divnoti)
		} else {
			if (confpj !== "" && confpj !== null && confpj !== undefined){
				if (confpj.match(/bau/gim)){
					img.setAttribute("src",confpj)
				} else if (confpj.match(/face/gim)){
					img.setAttribute("src",confpj)
				}
			} else {
				img.setAttribute("src","./content/img/iconos/bauhappy.gif")
			}

			btn_notificacion.className = "p-4 m-2 alert-success font-weight-bold text-center"
			
			btn_notificacion.style.wordWrap = "break-word"
			btn_notificacion.style.overflowWrap = "break-word"
			btn_notificacion.style.whiteSpace = "normal"
			btn_notificacion.style.color = "#358e1a"
			btn_notificacion.style.borderRadius = "100px"
			btn_notificacion.style.zIndex = "200"
			btn_notificacion.style.cursor = "pointer"
			btn_notificacion.onpointerover = ()=> btn_notificacion.style.border = "1px solid #358e1a"
			btn_notificacion.onpointerout = ()=> btn_notificacion.style.border = "1px solid transparent"
			btn_notificacion.innerHTML = "Un gusto saludarte"
			btn_notificacion.ondragstart = () => false
			btn_notificacion.style.userSelect = "none"
			btn_notificacion.onclick = () => {
				divnoti.style.display = "flex"
				btn_notificacion.style.display = "none"
			}

			//Notify pj
			// divnoti.setAttribute("src", "./content/img/iconos/notifi_danger.png")
			divnoti.className = "m-3  btn badge badge-primary  align-items-center justify-content-center"
			divnoti.style.position = "absolute"
			divnoti.style.display = "flex"
			divnoti.style.top ="0"
			divnoti.style.width = "40px"
			divnoti.style.height = "40px"
			divnoti.style.right = "-10px"
			divnoti.setAttribute("title", "Tienes una notificación")
			divnoti.innerHTML = "1"
			divnoti.style.fontSize = "130%"
			divnoti.ondragstart = () => false
			divnoti.style.userSelect = "none"
			// divnoti.setAttribute("width", "36px")
			divnoti.style.borderRadius ="100%"
			divnoti.onclick = () => {
				btn_notificacion.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
				btn_notificacion.style.display = "block"
				divnoti.style.display = "none"
			}
			header.appendChild(btn_notificacion)
			imgcontainer.appendChild(divnoti)
		}
	}

	const body = document.createElement("div")
	body.setAttribute("align", "center")
	body.className = "p-4"

	const menuaside = document.createElement("div")
	menuaside.className = "p-2 pt-0 d-flex justify-content-center align-content-center align-items-center"
	menuaside.style.flexFlow = "wrap row"

	const boton_calc = document.createElement("img")
	boton_calc.setAttribute("src", "./content/img/iconos/calc.png")
	boton_calc.setAttribute("width", "80px")
	boton_calc.setAttribute("title", "Calculadora")
	boton_calc.className = "btnmenaside p-1 m-2  mt-0 btn btn-light"
	boton_calc.ondragstart = () => false
	boton_calc.style.userSelect = "none"
	boton_calc.style.borderRadius = "100%"
	boton_calc.onclick = () => {
		if (!openedcalculator){
			openedcalculator = true
			if (document.getElementsByClassName("btn_reposition")[0].style.opacity == "0") document.getElementsByClassName("btn_reposition")[0].animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
			document.getElementsByClassName("btn_reposition")[0].style.display = "block"
			document.getElementsByClassName("btn_reposition")[0].style.opacity = "1"

			document.body.appendChild(calculator())
		}
	}

	const boton_calendario = document.createElement("img")
	boton_calendario.setAttribute("src", "./content/img/iconos/calender.png")
	boton_calendario.setAttribute("width", "80px")
	boton_calendario.style.borderRadius = "100%"
	boton_calendario.className = "btnmenaside p-1 m-2  mt-0 btn  btn-light"
	boton_calendario.ondragstart = () => false
	boton_calendario.setAttribute("title", "Mes actual")
	boton_calendario.style.userSelect = "none"
	boton_calendario.onclick = () => {
		if (!openedcalender){
			openedcalender = true
			if (document.getElementsByClassName("btn_reposition")[0].style.opacity == "0") document.getElementsByClassName("btn_reposition")[0].animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
			document.getElementsByClassName("btn_reposition")[0].style.display = "block"
			document.getElementsByClassName("btn_reposition")[0].style.opacity = "1"
			document.body.appendChild(calender())
		}
	}

	const boton_conversor = document.createElement("img")
	boton_conversor.setAttribute("src", "./content/img/iconos/conversor.png")
	boton_conversor.style.borderRadius = "100%"
	boton_conversor.setAttribute("width", "80px")
	boton_conversor.className = "btnmenaside p-1 m-2  mt-0 btn btn-light"
	boton_conversor.ondragstart = () => false
	boton_conversor.setAttribute("title", "Conversor de divisas")
	boton_conversor.style.userSelect = "none"
	boton_conversor.onclick = () => {
		if (!openedconversor){
			openedconversor = true
			if (document.getElementsByClassName("btn_reposition")[0].style.opacity == "0") document.getElementsByClassName("btn_reposition")[0].animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
			document.getElementsByClassName("btn_reposition")[0].style.display = "block"
			document.getElementsByClassName("btn_reposition")[0].style.opacity = "1"
			document.body.appendChild(conversor())
		}
	}

	const btnhover = btn => {
		btn.onpointerover = () => {
			btn.style.transform = "scale(1.1)"
			btn.animate([{
				transform: "scale(1)"
			},{
				transform: "scale(1.1)"
			}],{duration:400, iterations:1})
		}
		btn.onpointerout = () => {
			btn.style.transform = "scale(1)"
			btn.animate([{
				transform: "scale(1.1)"
			},{
				transform: "scale(1)"
			}],{duration:400, iterations:1})
		}
	}


	//Panel de control para widgets
	const panel_widgets = document.createElement("div")
	panel_widgets.className = "p-3 d-flex flex-wrap panel_widgets"
	const btn_reposition = document.createElement("button")
	btn_reposition.style.display = "none"
	btn_reposition.style.opacity = "0"
	btn_reposition.innerHTML = "Agrupar elementos"
	btn_reposition.className = "btn btn-info  p-2 float-bottom btn_reposition repowidgets"
	panel_widgets.appendChild(btn_reposition)

	const alignment_invisible_widgets = document.createElement("div")
	alignment_invisible_widgets.className = "alignment_invisible_widgets d-flex pt-4"
	alignment_invisible_widgets.style.display = "none"
	// alignment_invisible_widgets.style.background = "rgb(0,0,0,0.50)"
	alignment_invisible_widgets.style.borderTop = "4px solid #fff"
	// alignment_invisible_widgets.style.borderBottom = "4px solid #fff"
	
	btn_reposition.onclick = () =>{
		document.body.appendChild(alignment_invisible_widgets)
		alignment_invisible_widgets.style.display = "flex"
		alignment_invisible_widgets.animate([{
			opacity:0
		},{
			opacity:1
		}],{duration:400, iterations:1})
		if (window.screen.width <= 500){
			alignment_invisible_widgets.style.transform = "scale(0.8)"
		}

		if (document.getElementsByClassName("container_calculadora")[0] !== undefined && document.getElementsByClassName("container_calculadora")[0] !== null){
			alignment_invisible_widgets.appendChild(document.getElementsByClassName("container_calculadora")[0])
			document.getElementsByClassName("container_calculadora")[0].style.position = ""
			document.getElementsByClassName("container_calculadora")[0].style.left = ""
			document.getElementsByClassName("container_calculadora")[0].style.top= ""
			document.getElementsByClassName("container_calculadora")[0].style.transform = ""
			document.getElementsByClassName("container_calculadora")[0].style.margin = ""
		}

		if (document.getElementsByClassName("contain_calender")[0] !== undefined && document.getElementsByClassName("contain_calender")[0] !== null){
			alignment_invisible_widgets.appendChild(document.getElementsByClassName("contain_calender")[0])
			document.getElementsByClassName("contain_calender")[0].style.position = ""
			document.getElementsByClassName("contain_calender")[0].style.left = ""
			document.getElementsByClassName("contain_calender")[0].style.top= ""
			document.getElementsByClassName("contain_calender")[0].style.transform = ""
			if(document.getElementsByClassName("container_calculadora")[0] === undefined){
				document.getElementsByClassName("contain_calender")[0].style.marginRight = "30px"
				document.getElementsByClassName("contain_calender")[0].style.marginLeft = "30px"
			} else{
				document.getElementsByClassName("contain_calender")[0].style.marginLeft = ""
				document.getElementsByClassName("contain_calender")[0].style.marginRight = "30px"
			}
			document.getElementsByClassName("contain_calender")[0].style.marginTop = "10px"
		}

		if (document.getElementsByClassName("container_conversor")[0] !== undefined && document.getElementsByClassName("container_conversor")[0] !== null){
			alignment_invisible_widgets.appendChild(document.getElementsByClassName("container_conversor")[0])
			document.getElementsByClassName("container_conversor")[0].style.position = ""
			document.getElementsByClassName("container_conversor")[0].style.left = ""
			document.getElementsByClassName("container_conversor")[0].style.top= ""
			document.getElementsByClassName("container_conversor")[0].style.transform = ""
			if(document.getElementsByClassName("contain_calender")[0] === undefined){
				document.getElementsByClassName("container_conversor")[0].style.marginRight = "30px"
				document.getElementsByClassName("container_conversor")[0].style.marginLeft = "30px"
			} else{
				// document.getElementsByClassName("container_conversor")[0].style.marginLeft = ""
				// document.getElementsByClassName("container_conversor")[0].style.marginRight = "30px"
				document.getElementsByClassName("container_conversor")[0].style.marginLeft = ""
			}
			document.getElementsByClassName("container_conversor")[0].style.marginTop = "10px"
		
		}
		if (document.getElementsByClassName("contain_calender")[0] !== undefined && calenmoving === false){
			if (document.getElementsByClassName("container_conversor")[0] !== undefined){
				document.getElementsByClassName("container_conversor")[0].style.marginRight = "30px"
				document.getElementsByClassName("container_conversor")[0].style.marginLeft = ""
			}
		}

		if (calenmoving){
			if (document.getElementsByClassName("container_conversor")[0] !== undefined){
				document.getElementsByClassName("container_conversor")[0].style.marginRight = "30px"
				document.getElementsByClassName("container_conversor")[0].style.marginLeft = "30px"
			}
		}

		if(document.getElementsByClassName("contain_calender")[0] === undefined && document.getElementsByClassName("container_calculadora")[0] !== undefined){	
			if (document.getElementsByClassName("container_conversor")[0] !== undefined){
				document.getElementsByClassName("container_conversor")[0].style.marginRight = "30px"
				document.getElementsByClassName("container_conversor")[0].style.marginLeft = ""
			}
		}
	}

	btnhover(boton_calc)
	btnhover(boton_calendario)
	btnhover(boton_conversor)


	if (menuaside !== undefined){
		menuaside.appendChild(boton_calc)
		menuaside.appendChild(boton_calendario)
		menuaside.appendChild(boton_conversor)
	}

	if (body !== undefined) {
		body.appendChild(menuaside)
	}
	document.body.appendChild(panel_widgets)

	if (contacal !== undefined) {
		contacal.appendChild(body)
		document.getElementById("criptowidget").style.display = "block"
		contacal.appendChild(document.getElementById("criptowidget"))
	}
	if (document.getElementsByClassName("containhome")[0] !== undefined){
		document.getElementsByClassName("containhome")[0].appendChild(contacal)
	}
}
