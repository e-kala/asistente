

const Aside = (username) => {

	const containhome = document.getElementsByClassName("containhome")[0]

	const container = document.createElement("div")
	container.className += "containeraside card asidechancolor"



	const header = document.createElement("div")
	header.setAttribute("align", "center")
	header.className = "card-header"	

	const h1 = document.createElement("h4")
	h1.innerHTML = "Hola "+username
	h1.className = "p-3"
	if (header !== undefined) header.appendChild(h1)

	const img = document.createElement("img")
	img.setAttribute("src", "./content/img/íconos/task.png")
	img.setAttribute("width", "130vh")
	img.className = "pb-4"
	if (img !== undefined) header.appendChild(img)

	if (container !== undefined)container.appendChild(header)

	const body = document.createElement("div")
	body.setAttribute("align", "center")
	body.className = "mt-4"
	body.innerHTML = "Cuerpo del Aside"


	if (container !== undefined) container.appendChild(body)
	if (document.getElementsByClassName("containhome")[0] !== undefined){
		document.getElementsByClassName("containhome")[0].appendChild(container)
	}
}
