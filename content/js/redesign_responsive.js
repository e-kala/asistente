const modulos = document.getElementsByClassName("accordion")

const readjust_pattern = () => {
	const root_pattern = document.getElementById("root")
	root_pattern.style.marginTop = "0px"
}

const resize_modulos = () => {
	if (window.screen.width >= 800){
		if(modulos[0] !== undefined){
			modulos[0].style.width = "80%"
		}
		if (modulos[1] !== undefined){
			modulos[1].style.width = "80%"
		}
	} else {
		if (modulos[0] !== undefined){
			modulos[0].style.width = "100%"
		}
		if (modulos[1] !== undefined){
			modulos[1].style.width = "100%"	
		}
	}
}

window.onload = () => {
	resize_modulos()
}

window.onresize = () => {
	resize_modulos()
}