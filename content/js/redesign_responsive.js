const modulos = document.getElementsByClassName("accordion")
const modsdown = document.getElementsByClassName("modscodown")[0]
const divmestype = document.getElementsByClassName("divmestype")[0]
const menu_registros = document.getElementsByClassName("men_data_registros")[0]

const readjust_pattern = () => {
	const root_pattern = document.getElementById("root")
	if (root_pattern !== undefined) root_pattern.style.marginTop = "0px";
}

const resize_modulos = () => {
	if (window.screen.width >= 800){
		if(modulos[0] !== undefined){
			// modulos[0].style.width = "80%"
			modulos[0].className = "accordion pl-4 pr-4 pb-4 modulos"
		}
		if (modulos[1] !== undefined){
			// modulos[1].style.width = "80%"
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

	// if (modulos[0] !== undefined){
	// 	modulos[0].style.width = "100%"
	// }
	// if (modulos[1] !== undefined){x
	// 	modulos[1].style.width = "100%"	
	// }


}

window.onload = () => {
	resize_modulos()
}

window.onresize = () => {
	resize_modulos()
	const devip = getDevicePixelRatio()

	if (divmestype !== undefined && divmestype !== null){
		if (devip.toString() === "1"){
			divmestype.style.top = "80px"
			divmestype.style.fontSize = "300%"
		} else if (devip.toString().match(/0\.5/gim)){
			divmestype.style.marginLeft = "80px"
			divmestype.style.fontSize = "600%"
			divmestype.style.top = "180px"
		} else if (devip.toString().match(/0\.25/gim)){
			divmestype.style.marginLeft = "120px"
			divmestype.style.fontSize = "1000%"

		} else if (devip.toString().match(/0\.33/gim)){
			divmestype.style.marginLeft = "100px"
			divmestype.style.fontSize = "900%"
		} else if (devip.toString().match(/0\.6/gim)){
			divmestype.style.top = "130px"
			divmestype.style.marginLeft = "100px"
			divmestype.style.fontSize = "400%"
		} else if (devip.toString().match(/0\.7/gim)){
			divmestype.style.top = "130px"
			divmestype.style.marginLeft = "100px"
			divmestype.style.fontSize = "400%"
		} else if (devip.toString().match(/0\.80/gim)){
			divmestype.style.top = "60px"
			divmestype.style.marginLeft = "30px"
			divmestype.style.fontSize = "400%"
		} else if (devip.toString().match(/0\.89/gim)){
			divmestype.style.top = "60px"
			divmestype.style.marginLeft = "30px"
			divmestype.style.fontSize = "350%"
		} else if (devip.toString().match(/0\.89/gim)){
			divmestype.style.top = "60px"
			divmestype.style.marginLeft = "30px"
			divmestype.style.fontSize = "350%"
		} else if (devip.toString().match(/1\.10/gim)){
			divmestype.style.top = "60px"
			divmestype.style.marginLeft = "30px"
			divmestype.style.fontSize = "250%"
		} else if (devip.toString().match(/1\.25/gim)){
			divmestype.style.top = "60px"
			divmestype.style.marginLeft = "30px"
			divmestype.style.fontSize = "250%"
		} else {
			divmestype.style.top = "50px"
			divmestype.style.fontSize = "200%"
		}
	}


	// Menu registros ********
	if (menu_registros !== undefined && menu_registros !== null){
		if (devip.toString() === "1"){
		} else if (devip.toString().match(/0\.5/gim)){
			menu_registros.style.display = "none"
		} else if (devip.toString().match(/0\.25/gim)){
			menu_registros.style.display = "none"
		} else if (devip.toString().match(/0\.33/gim)){
			menu_registros.style.display = "none"
		} else if (devip.toString().match(/0\.6/gim)){
			menu_registros.style.display = "none"
		} else if (devip.toString().match(/0\.7/gim)){
			menu_registros.style.display = "none"
		} else if (devip.toString().match(/0\.80/gim)){
			menu_registros.style.display = "none"
		} else if (devip.toString().match(/0\.89/gim)){
			menu_registros.style.display = "flex"
		} 
		if (window.screen.width <= 400){
			if (registros_men_respon !== undefined) registros_men_respon.style.display = "flex";
        }
		
	}


	// ** Restructuración móvil tablas registros
	const tered = document.getElementsByClassName("tered")[0]
    const tado = document.getElementsByClassName("tado")[0]
    if (window.screen.width >= 580){
    	if (tado !== undefined) tado.style.display = "none";
    	if (tered !== undefined) tered.style.display = "block";
    } else {
    	if (tered !== undefined) tered.style.display = "none";
    	if (tado !== undefined) tado.style.display = "block";
    }

}