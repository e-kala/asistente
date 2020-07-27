let openedcalculator = false
let openedcalender = false
let openedconversor = false

const calculator = () => {
	if (openedcalculator){
		const container = document.createElement("div")
		container.className = "container_calculadora"
		

		const header_icons = document.createElement("div")
		const close = document.createElement("div")
		close.style.cursor = "pointer"
		close.innerHTML = "X"
		close.onclick = () =>{
			openedcalculator = false
			container.remove()
		}

		header_icons.appendChild(close)
		container.appendChild(header_icons)

		const body = document.createElement("div")
		container.appendChild(body)

		const form = document.createElement("form")
		const input_and_result = document.createElement("input")
		input_and_result.placeholder = "2 + 2 = 4"
		form.appendChild(input_and_result)

		const men_buttons = document.createElement("div")
		men_buttons.className = "d-flex flex-wrap"
		body.appendChild(men_buttons)

		for (let x = 0; x < 10; x++){
			const number = document.createElement("button")
			number.className = "flex-grow-1"
			number.innerHTML = x
			men_buttons.appendChild(number)
		}

		body.appendChild(form)

		return container;
	}
}


const Aside = (username) => {

	const containhome = document.getElementsByClassName("containhome")[0]
	const container = document.createElement("div")
	container.className += "containeraside card asidechancolor"
	
	const header = document.createElement("div")
	header.setAttribute("align", "center")
	header.className = "card-header d-flex flex-column justify-content-center"	

	const h1 = document.createElement("h4")
	h1.innerHTML = "Hola "+username
	h1.className = "p-3"
	if (header !== undefined) header.appendChild(h1)

	const img = document.createElement("img")
	img.setAttribute("src", "./content/img/íconos/task.png")
	img.setAttribute("width", "60%")
	img.className = "pb-4 flex-grow-1"
	img.ondragstart = () => false
	img.style.userSelect = "none"
	if (img !== undefined) header.appendChild(img)

	if (container !== undefined)container.appendChild(header)

	const body = document.createElement("div")
	body.setAttribute("align", "center")
	body.className = "p-4"

	const menuaside = document.createElement("div")
	menuaside.className = "p-2 pt-0 d-flex justify-content-center align-content-center align-items-center"
	menuaside.style.flexFlow = "wrap row"

	const boton_calc = document.createElement("img")
	boton_calc.setAttribute("src", "./content/img/íconos/calc.png")
	boton_calc.setAttribute("width", "100px")
	boton_calc.className = "btnmenaside p-1 m-2  mt-0 btn btn-light"
	boton_calc.ondragstart = () => false
	boton_calc.style.userSelect = "none"
	boton_calc.style.borderRadius = "100%"
	boton_calc.onclick = () => {
		if (!openedcalculator){
			openedcalculator = true
			document.body.appendChild(calculator())
		}
	}

	const boton_calendario = document.createElement("img")
	boton_calendario.setAttribute("src", "./content/img/íconos/calender.png")
	boton_calendario.setAttribute("width", "100px")
	boton_calendario.style.borderRadius = "100%"
	boton_calendario.className = "btnmenaside p-1 m-2  mt-0 btn  btn-light"
	boton_calendario.ondragstart = () => false
	boton_calendario.style.userSelect = "none"

	const boton_conversor = document.createElement("img")
	boton_conversor.setAttribute("src", "./content/img/íconos/conversor.png")
	boton_conversor.style.borderRadius = "100%"
	boton_conversor.setAttribute("width", "100px")
	boton_conversor.className = "btnmenaside p-1 m-2  mt-0 btn btn-light"
	boton_conversor.ondragstart = () => false
	boton_conversor.style.userSelect = "none"

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


	btnhover(boton_calc)
	btnhover(boton_calendario)
	btnhover(boton_conversor)


	if (menuaside !== undefined){
		menuaside.appendChild(boton_calc)
		menuaside.appendChild(boton_calendario)
		menuaside.appendChild(boton_conversor)
	}

	if (body !== undefined) body.appendChild(menuaside)

	if (container !== undefined) container.appendChild(body)
	if (document.getElementsByClassName("containhome")[0] !== undefined){
		document.getElementsByClassName("containhome")[0].appendChild(container)
	}
}









