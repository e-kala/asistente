const modulos = document.getElementsByClassName("accordion")
const modsdown = document.getElementsByClassName("modscodown")[0]
const divmestype = document.getElementsByClassName("divmestype")[0]
const modsco_especify_moduls = document.getElementsByClassName("modsco")
const menu_registros = document.getElementsByClassName("men_data_registros")[0]

const readjust_pattern = () => {
	const root_pattern = document.getElementById("root")
	if (root_pattern !== undefined) root_pattern.style.marginTop = "0px";
}



const resize_modulos = () => {
	//Restricción de flexibilidad para modulos superiores Info y Movimientos
	if (modsco_especify_moduls[0] !== undefined){ //Modulos no flexibles, flexible solo la seccion de grafico
		modsco_especify_moduls[0].style.flexGrow = "0"
	}
	if (modsco_especify_moduls[1] !== undefined){ //Modulos no flexibles, flexible solo la seccion de grafico
		modsco_especify_moduls[1].style.flexGrow = "0"
	}

	if (window.screen.width >= 800){
		if(modulos[0] !== undefined){
			// modulos[0].style.width = "80%"
			modulos[0].className = "accordion pl-4 modulos"
		}
		if (modulos[1] !== undefined){
			// modulos[1].style.width = "80%"
			modulos[1].className = "accordion pl-4 pr-4 modulos"
		}
	} else {
		if (modulos[0] !== undefined){
			
			modulos[0].className = "accordion pb-4 modulos"
		}
		if (modulos[1] !== undefined){
				
			modulos[1].className = "accordion pb-4 modulos"
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
	menu_header_top_adjust(window.screen.width)
}
resize_modulos()
menu_header_top_adjust(window.screen.width)

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

    menu_header_top_adjust(window.screen.width)

}

function menu_header_top_adjust(screen){
	const container_screen_desktop = document.getElementsByClassName("container_menues_navbar")[0]
	const menu_header_container = document.getElementsByClassName("menu-header-top")[0]
	const menu_rallas = document.getElementsByClassName("menu_container")[0]
	const cotextmennavtop_ = document.getElementsByClassName("cotextmennavtop")

	if (menu_rallas !== undefined && menu_rallas !== null 
		&& container_screen_desktop !== undefined && 
		container_screen_desktop !== null && menu_header_container !== undefined &&
		menu_header_container !== null){
		if (screen >= 670){
			menu_header_container.className = "m-2 d-flex flex-wrap justify-content-end align-content-center align-items-cente menu-header-top"
			
			container_screen_desktop.appendChild(menu_header_container)
			for (let x = 0; x < cotextmennavtop_.length; x++){
				if (alma_config !== undefined){
					if (alma_config[1].mode === "dark"){
			            cotextmennavtop_[x].className = "cotextmennavtop btn btn-inherit text-light"
				    } else {
				    	cotextmennavtop_[x].className = "cotextmennavtop btn btn-inherit text-dark"    
				    }
				}
			}
		} else {
			menu_header_container.className = "m-2 d-flex flex-column justify-content-center align-content-center align-items-cente menu-header-top"
			menu_header_container.style.listStyleType = "none"
			menu_header_container.style.padding = "0"
			menu_header_container.style.margin = "0"
			menu_rallas.appendChild(menu_header_container)
			if (cotextmennavtop_ !== undefined && cotextmennavtop_ !== null){
				for (let x = 0; x < cotextmennavtop_.length; x++){
					cotextmennavtop_[x].className = "cotextmennavtop btn btn-inherit text-dark"
				}
			} 
		}
	}
}


function div_opa_init_dark_wait(){
  const divopa = document.createElement("div")
  divopa.style.position = "fixed"
  divopa.style.margin ="auto"
  divopa.style.left = "0"
  divopa.style.top = "0"
  divopa.style.right = "0"
  divopa.style.bottom = "0"
  divopa.style.background = "rgb(0,0,0,0.90)"
  divopa.style.zIndex = 100
  divopa.style.display = "flex"
  divopa.style.justifyContent = "center"
  divopa.style.alignItems = "center"
  divopa.style.alignContent = "center"
  document.body.appendChild(divopa)

  const loading = document.createElement("img")
  loading.setAttribute("src", "./content/img/íconos/load2.gif")
  loading.setAttribute("width", "100px")
  divopa.appendChild(loading)

  setTimeout(()=>{
    divopa.style.opacity = "0"
    setTimeout(()=>{
      divopa.remove()
    },1100)
    loading.remove()
    divopa.animate([{
      opacity:1
    },{
      opacity:0
    }],{duration:1000, iterations:1})
    if (window.location.href.match(/(\#\?|registros|cuentas|registro|transferencias|editar\_ingresos|editar\_gastos|configuracion)/gim) === null){
   		window.location.href = window.location.href + "#?"
    }
  },3000)
}


if (document.getElementsByClassName("modulos") !== undefined){

	if (document.getElementsByClassName("divflomes").length === 0){
		if (window.location.href.match(/(\#\?|registros|cuentas|registro|transferencias|editar\_ingresos|editar\_gastos|configuracion)/gim) === null){
			div_opa_init_dark_wait();
		}
	}
}

