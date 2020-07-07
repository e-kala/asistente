const modulos = document.getElementsByClassName("accordion")
const modsdown = document.getElementsByClassName("modscodown")[0]

const readjust_pattern = () => {
	const root_pattern = document.getElementById("root")
	root_pattern.style.marginTop = "0px"
}

const resize_modulos = () => {
	if (window.screen.width >= 800){
		if(modulos[0] !== undefined){
			modulos[0].style.width = "80%"
			modulos[0].className = "accordion pl-4 pr-4 pb-4 modulos"
		}
		if (modulos[1] !== undefined){
			modulos[1].style.width = "80%"
			modulos[1].className = "accordion pl-4 pr-4 pb-4 modulos"
		}
	} else {
		if (modulos[0] !== undefined){
			modulos[0].style.width = "100%"
			modulos[0].className = "accordion modulos"
		}
		if (modulos[1] !== undefined){
			modulos[1].style.width = "100%"	
			modulos[1].className = "accordion modulos"
		}
	}
}

window.onload = () => {
	resize_modulos()
}

window.onresize = () => {
	resize_modulos()
}