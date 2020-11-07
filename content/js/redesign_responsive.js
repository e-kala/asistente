const modulos = document.getElementsByClassName("accordion")
const modsdown = document.getElementsByClassName("modscodown")[0]
const divmestype = document.getElementsByClassName("divmestype")[0]
const modsco_especify_moduls = document.getElementsByClassName("modsco")
const menu_registros = document.getElementsByClassName("men_data_registros")[0]
const bgbalanceochange = document.getElementsByClassName("bgbalanceochange")[0]
const registrosgasin = document.getElementsByClassName("registrosgasin")[0]
const containeringasedi = document.getElementsByClassName("containeringasedi")[0] //Edi gas in account
const transferencias = document.getElementsByClassName("transferencias")[0]

function readjust_pattern(){
	const root_pattern = document.getElementById("root")
	if (root_pattern !== undefined) root_pattern.style.marginTop = "0px";
}


function resize_modulos(){
	//Restricción de flexibilidad para modulos superiores Info y Movimientos
	if (modsco_especify_moduls[0] !== undefined){ //Modulos no flexibles, flexible solo la seccion de grafico
		modsco_especify_moduls[0].style.flexGrow = "0"
	}
	if (modsco_especify_moduls[1] !== undefined){ //Modulos no flexibles, flexible solo la seccion de grafico
		modsco_especify_moduls[1].style.flexGrow = "0"
	}

	if (window.innerWidth >= 800){
		if (window.config !== undefined){
			if (window.config[1].aside_hidden == "true"){
				if (modulos[0] !== undefined){
					// modulos[0].style.width = "80%"
					modulos[0].className = "accordion pl-4 modulos"
				}
				if (modulos[1] !== undefined){
					// modulos[1].style.width = "80%"
					modulos[1].className = "accordion pl-4 pr-4 modulos"
				}
			} else {
				if(modulos[0] !== undefined){
					// modulos[0].style.width = "80%"
					modulos[0].className = "accordion modulos container"
				}
				if (modulos[1] !== undefined){
					// modulos[1].style.width = "80%"
					modulos[1].className = "accordion pr-4 modulos container"
				}
			}
		} else {
			if(modulos[0] !== undefined){
				// modulos[0].style.width = "80%"
				modulos[0].className = "accordion pl-4 modulos "
			}
			if (modulos[1] !== undefined){
				// modulos[1].style.width = "80%"
				modulos[1].className = "accordion pl-4 pr-4 modulos "
				
			}
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

window.onload = function(){
	resize_modulos()
	menu_header_top_adjust(window.innerWidth)
}
resize_modulos()
menu_header_top_adjust(window.innerWidth)

window.onresize = function(){


	//------ aside adjust in modules ------
	//Balanceo Zon
	if (bgbalanceochange !== undefined && bgbalanceochange !== null){
		if (window.config[1].aside_hidden == "true"){
			if (window.innerWidth > 800){
				if (window.config[1].mode === "dark" || modebg_to_nav === "dark"){
					bgbalanceochange.className = 'balanceo ml-4 mr-4 text-light bgbalanceochange'
				} else{
					bgbalanceochange.className = 'balanceo ml-4 mr-4 text-dark bgbalanceochange'
				}
			} else {
				if (window.config[1].mode === "dark" || modebg_to_nav === "dark"){
					bgbalanceochange.className = 'balanceo mr-4 mb-3 text-light bgbalanceochange'
				} else {
					bgbalanceochange.className = 'balanceo mr-4 mb-3 text-dark bgbalanceochange'
				}
				if (document.getElementsByClassName("contacalaside")[0] !== undefined && document.getElementsByClassName("contacalaside")[0] !== null){
					if (document.getElementsByClassName("contacalaside")[0].style.display !== "block"){
						// bgbalanceochange.className = 'balanceo bgbalanceochange'	
					} else {
					}
				} 
			}
		}
	}

	//Registros movs
	if (registrosgasin !== undefined && registrosgasin !== null){
		if (window.config[1].aside_hidden == "true"){
			if (window.innerWidth > 800){
				if (window.config[1].mode === "dark" || modebg_to_nav === "dark"){
					registrosgasin.className = ' text-light p-4 m-4 tered registrosgasin registros'
				} else{
					registrosgasin.className = ' text-dark p-4 m-4 tered registrosgasin registros'
				}
			} else {
				if (window.config[1].mode === "dark" || modebg_to_nav === "dark"){
					registrosgasin.className = ' text-light p-4 pr-4 mt-4 mr-4 ml-0 mb-4 tered registrosgasin registros'
				} else {
					registrosgasin.className = ' text-dark p-4 pr-4 mt-4 mr-4 ml-0 mb-4 tered registrosgasin registros'
				}
				if (document.getElementsByClassName("contacalaside")[0] !== undefined && document.getElementsByClassName("contacalaside")[0] !== null){
					if (document.getElementsByClassName("contacalaside")[0].style.display !== "block"){
						// registrosgasin.className = ' text-dark p-4 pb-4 mt-4 mr-4 ml-0 mb-4 tered registrosgasin registros'	
					} else {
					}
				} 
			}
		}
	}

	//edi gas in account
	if (containeringasedi !== undefined && containeringasedi !== null){
		if (window.config[1].aside_hidden == "true"){
			if (window.innerWidth > 800){
				if (window.config[1].mode === "dark" || modebg_to_nav === "dark"){
					containeringasedi.className = 'containeringasedi ml-4 mr-4 p-4 text-light'
				} else{
					containeringasedi.className = 'containeringasedi ml-4 mr-4 p-4 text-dark'
				}
			} else {
				if (window.config[1].mode === "dark" || modebg_to_nav === "dark"){
					containeringasedi.className = 'containeringasedi mr-4 mb-4 p-4 text-light'
				} else {
					containeringasedi.className = 'containeringasedi mr-4 mb-4 p-4 text-dark'
				}
				if (document.getElementsByClassName("contacalaside")[0] !== undefined && document.getElementsByClassName("contacalaside")[0] !== null){
					if (document.getElementsByClassName("contacalaside")[0].style.display !== "block"){

						containeringasedi.className = 'containeringasedi container mb-4 p-4 text-dark'	
					} else {
					}
				} 
			}
		}
	}

	//transferencias
	if (transferencias !== undefined && transferencias !== null){
		if (window.config[1].aside_hidden == "true"){
			if (window.innerWidth > 800){
				if (window.config[1].mode === "dark" || modebg_to_nav === "dark"){
					transferencias.className = 'transferencias ml-4 mr-4  text-light'
				} else{
					transferencias.className = 'transferencias ml-4 mr-4  text-dark'
				}
			} else {
				if (window.config[1].mode === "dark" || modebg_to_nav === "dark"){
					transferencias.className = 'transferencias mr-4 mb-4  text-light'
				} else {
					transferencias.className = 'transferencias mr-4 mb-4  text-dark'
				}
				if (document.getElementsByClassName("contacalaside")[0] !== undefined && document.getElementsByClassName("contacalaside")[0] !== null){
					if (document.getElementsByClassName("contacalaside")[0].style.display !== "block"){
						
						transferencias.className = 'transferencias container mb-4  text-dark'	
					} else {
					}
				} 
			}
		}
	}

	resize_modulos()
	const devip = getDevicePixelRatio()

	if (divmestype !== undefined && divmestype !== null){
		if (devip.toString() === "1"){
			divmestype.style.top = "80px"
			divmestype.style.webkitTop = "80px";
			divmestype.style.MozTop = "80px";
			divmestype.style.msTop = "80px";
			divmestype.style.oTop = "80px";

			divmestype.style.fontSize = "300%"
			divmestype.style.webkitFontSize = "300%";
			divmestype.style.MozFontSize = "300%";
			divmestype.style.msFontSize = "300%";
			divmestype.style.oFontSize = "300%";

		} else if (devip.toString().match(/0\.5/gim)){
			divmestype.style.marginLeft = "80px"
			divmestype.style.webkitMarginLeft = "80px";
			divmestype.style.MozMarginLeft = "80px";
			divmestype.style.msMarginLeft = "80px";
			divmestype.style.oMarginLeft = "80px";

			divmestype.style.fontSize = "600%"
			divmestype.style.webkitFontSize = "600%";
			divmestype.style.MozFontSize = "600%";
			divmestype.style.msFontSize = "600%";
			divmestype.style.oFontSize = "600%";

			divmestype.style.top = "180px"
			divmestype.style.webkitTop = "180px";
			divmestype.style.MozTop = "180px";
			divmestype.style.msTop = "180px";
			divmestype.style.oTop = "180px";
		} else if (devip.toString().match(/0\.25/gim)){
			divmestype.style.marginLeft = "120px"
			divmestype.style.webkitMarginLeft = "120px";
			divmestype.style.MozMarginLeft = "120px";
			divmestype.style.msMarginLeft = "120px";
			divmestype.style.oMarginLeft = "120px";

			divmestype.style.fontSize = "1000%"
			divmestype.style.webkitFontSize = "1000%";
			divmestype.style.MozFontSize = "1000%";
			divmestype.style.msFontSize = "1000%";
			divmestype.style.oFontSize = "1000%";

		} else if (devip.toString().match(/0\.33/gim)){
			divmestype.style.marginLeft = "100px"
			divmestype.style.webkitMarginLeft = "100px";
			divmestype.style.MozMarginLeft = "100px";
			divmestype.style.msMarginLeft = "100px";
			divmestype.style.oMarginLeft = "100px";

			divmestype.style.fontSize = "900%"
			divmestype.style.webkitFontSize = "900%";
			divmestype.style.MozFontSize = "900%";
			divmestype.style.msFontSize = "900%";
			divmestype.style.oFontSize = "900%";

		} else if (devip.toString().match(/0\.6/gim)){
			divmestype.style.top = "130px"
			divmestype.style.webkitTop = "130px";
			divmestype.style.MozTop = "130px";
			divmestype.style.msTop = "130px";
			divmestype.style.oTop = "130px";

			divmestype.style.marginLeft = "100px"
			divmestype.style.webkitMarginLeft = "100px";
			divmestype.style.MozMarginLeft = "100px";
			divmestype.style.msMarginLeft = "100px";
			divmestype.style.oMarginLeft = "100px";

			divmestype.style.fontSize = "400%"
			divmestype.style.webkitFontSize = "400%";
			divmestype.style.MozFontSize = "400%";
			divmestype.style.msFontSize = "400%";
			divmestype.style.oFontSize = "400%";

		} else if (devip.toString().match(/0\.7/gim)){
			divmestype.style.top = "130px"
			divmestype.style.webkitTop = "130px";
			divmestype.style.MozTop = "130px";
			divmestype.style.msTop = "130px";
			divmestype.style.oTop = "130px";

			divmestype.style.marginLeft = "100px"
			divmestype.style.webkitMarginLeft = "100px";
			divmestype.style.MozMarginLeft = "100px";
			divmestype.style.msMarginLeft = "100px";
			divmestype.style.oMarginLeft = "100px";

			divmestype.style.fontSize = "400%"
			divmestype.style.webkitFontSize = "400%";
			divmestype.style.MozFontSize = "400%";
			divmestype.style.msFontSize = "400%";
			divmestype.style.oFontSize = "400%";

		} else if (devip.toString().match(/0\.80/gim)){
			divmestype.style.top = "60px"
			divmestype.style.webkitTop = "60px";
			divmestype.style.MozTop = "60px";
			divmestype.style.msTop = "60px";
			divmestype.style.oTop = "60px";

			divmestype.style.marginLeft = "30px"
			divmestype.style.webkitMarginLeft = "30px";
			divmestype.style.MozMarginLeft = "30px";
			divmestype.style.msMarginLeft = "30px";
			divmestype.style.oMarginLeft = "30px";

			divmestype.style.fontSize = "400%"
			divmestype.style.webkitFontSize = "400%";
			divmestype.style.MozFontSize = "400%";
			divmestype.style.msFontSize = "400%";
			divmestype.style.oFontSize = "400%";

		} else if (devip.toString().match(/0\.89/gim)){
			divmestype.style.top = "60px"
			divmestype.style.webkitTop = "60px";
			divmestype.style.MozTop = "60px";
			divmestype.style.msTop = "60px";
			divmestype.style.oTop = "60px";

			divmestype.style.marginLeft = "30px"
			divmestype.style.webkitMarginLeft = "30px";
			divmestype.style.MozMarginLeft = "30px";
			divmestype.style.msMarginLeft = "30px";
			divmestype.style.oMarginLeft = "30px";

			divmestype.style.fontSize = "350%"
			divmestype.style.webkitFontSize = "350%";
			divmestype.style.MozFontSize = "350%";
			divmestype.style.msFontSize = "350%";
			divmestype.style.oFontSize = "350%";

		} else if (devip.toString().match(/0\.89/gim)){
			divmestype.style.top = "60px"
			divmestype.style.webkitTop = "60px";
			divmestype.style.MozTop = "60px";
			divmestype.style.msTop = "60px";
			divmestype.style.oTop = "60px";

			divmestype.style.marginLeft = "30px"
			divmestype.style.webkitMarginLeft = "30px";
			divmestype.style.MozMarginLeft = "30px";
			divmestype.style.msMarginLeft = "30px";
			divmestype.style.oMarginLeft = "30px";

			divmestype.style.fontSize = "350%"
			divmestype.style.webkitFontSize = "350%";
			divmestype.style.MozFontSize = "350%";
			divmestype.style.msFontSize = "350%";
			divmestype.style.oFontSize = "350%";

		} else if (devip.toString().match(/1\.10/gim)){
			divmestype.style.top = "60px"
			divmestype.style.webkitTop = "60px";
			divmestype.style.MozTop = "60px";
			divmestype.style.msTop = "60px";
			divmestype.style.oTop = "60px";

			divmestype.style.marginLeft = "30px"
			divmestype.style.webkitMarginLeft = "30px";
			divmestype.style.MozMarginLeft = "30px";
			divmestype.style.msMarginLeft = "30px";
			divmestype.style.oMarginLeft = "30px";

			divmestype.style.fontSize = "250%"
			divmestype.style.webkitFontSize = "250%";
			divmestype.style.MozFontSize = "250%";
			divmestype.style.msFontSize = "250%";
			divmestype.style.oFontSize = "250%";

		} else if (devip.toString().match(/1\.25/gim)){
			divmestype.style.top = "60px"
			divmestype.style.webkitTop = "60px";
			divmestype.style.MozTop = "60px";
			divmestype.style.msTop = "60px";
			divmestype.style.oTop = "60px";

			divmestype.style.marginLeft = "30px"
			divmestype.style.webkitMarginLeft = "30px";
			divmestype.style.MozMarginLeft = "30px";
			divmestype.style.msMarginLeft = "30px";
			divmestype.style.oMarginLeft = "30px";

			divmestype.style.fontSize = "250%"
			divmestype.style.webkitFontSize = "250%";
			divmestype.style.MozFontSize = "250%";
			divmestype.style.msFontSize = "250%";
			divmestype.style.oFontSize = "250%";

		} else {
			divmestype.style.top = "50px"
			divmestype.style.webkitTop = "50px";
			divmestype.style.MozTop = "50px";
			divmestype.style.msTop = "50px";
			divmestype.style.oTop = "50px";

			divmestype.style.fontSize = "200%"
			divmestype.style.webkitFontSize = "200%";
			divmestype.style.MozFontSize = "200%";
			divmestype.style.msFontSize = "200%";
			divmestype.style.oFontSize = "200%";

		}
	}


	// Menu registros ********
	if (menu_registros !== undefined && menu_registros !== null){
		if (devip.toString() === "1"){
		} else if (devip.toString().match(/0\.5/gim)){
			menu_registros.style.display = "none"
			menu_registros.style.webkitDisplay = "none";
			menu_registros.style.MozDisplay = "none";
			menu_registros.style.msDisplay = "none";
			menu_registros.style.oDisplay = "none";

		} else if (devip.toString().match(/0\.25/gim)){
			menu_registros.style.display = "none"
			menu_registros.style.webkitDisplay = "none";
			menu_registros.style.MozDisplay = "none";
			menu_registros.style.msDisplay = "none";
			menu_registros.style.oDisplay = "none";

		} else if (devip.toString().match(/0\.33/gim)){
			menu_registros.style.display = "none"
			menu_registros.style.webkitDisplay = "none";
			menu_registros.style.MozDisplay = "none";
			menu_registros.style.msDisplay = "none";
			menu_registros.style.oDisplay = "none";

		} else if (devip.toString().match(/0\.6/gim)){
			menu_registros.style.display = "none"
			menu_registros.style.webkitDisplay = "none";
			menu_registros.style.MozDisplay = "none";
			menu_registros.style.msDisplay = "none";
			menu_registros.style.oDisplay = "none";

		} else if (devip.toString().match(/0\.7/gim)){
			menu_registros.style.display = "none"
			menu_registros.style.webkitDisplay = "none";
			menu_registros.style.MozDisplay = "none";
			menu_registros.style.msDisplay = "none";
			menu_registros.style.oDisplay = "none";

		} else if (devip.toString().match(/0\.80/gim)){
			menu_registros.style.display = "none"
			menu_registros.style.webkitDisplay = "none";
			menu_registros.style.MozDisplay = "none";
			menu_registros.style.msDisplay = "none";
			menu_registros.style.oDisplay = "none";

		} else if (devip.toString().match(/0\.89/gim)){
			menu_registros.style.display = "flex"
			menu_registros.style.webkitDisplay = "flex";
			menu_registros.style.MozDisplay = "flex";
			menu_registros.style.msDisplay = "flex";
			menu_registros.style.oDisplay = "flex";
		} 
		if (window.innerWidth <= 400){
			if (registros_men_respon !== undefined) registros_men_respon.style.display = "flex";
        }
		
	}

	//close aside icon
	window.close_aside_icon;
	if (window.close_aside_icon !== undefined){
		window.close_aside_icon()
	}


	// ** Restructuración móvil tablas registros
	const tered = document.getElementsByClassName("tered")[0]
    const tado = document.getElementsByClassName("tado")[0]
    if (window.innerWidth >= 580){
    	if (tado !== undefined) {
    		tado.style.display = "none";
    		tado.style.webkitDisplay = "none";
			tado.style.MozDisplay = "none";
			tado.style.msDisplay = "none";
			tado.style.oDisplay = "none";
    	}
    	if (tered !== undefined) {
    		tered.style.display = "block";
    		tered.style.webkitDisplay = "block";
			tered.style.MozDisplay = "block";
			tered.style.msDisplay = "block";
			tered.style.oDisplay = "block";
    	}
    } else {
    	if (tered !== undefined) {
    		tered.style.display = "none";
    		tered.style.webkitDisplay = "none";
			tered.style.MozDisplay = "none";
			tered.style.msDisplay = "none";
			tered.style.oDisplay = "none";

    	}
    	if (tado !== undefined) {
    		tado.style.display = "block";
    		tado.style.webkitDisplay = "block";
			tado.style.MozDisplay = "block";
			tado.style.msDisplay = "block";
			tado.style.oDisplay = "block";
    	}
    }

    menu_header_top_adjust(window.innerWidth)

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
		if (screen >= 1000){
			menu_header_container.className = "m-2 d-flex flex-wrap font-weight-bold justify-content-end align-content-center align-items-cente menu-header-top"
			
			container_screen_desktop.appendChild(menu_header_container)
			for (let x = 0; x < cotextmennavtop_.length; x++){
				if (modebg_to_nav === "dark"){
		            cotextmennavtop_[x].className = "cotextmennavtop btn d-flex justify-content-between align-content-center align-items-center btn-inherit font-weight-bold text-light"
			    } else if (modebg_to_nav === "white") {
			    	cotextmennavtop_[x].className = "cotextmennavtop btn d-flex justify-content-between align-content-center align-items-center btn-inherit font-weight-bold text-dark"    
			    } else {
			    	if (window.config[1].mode === "dark"){
			            cotextmennavtop_[x].className = "cotextmennavtop btn d-flex justify-content-between align-content-center align-items-center btn-inherit font-weight-bold text-light"
				    } else {
				    	cotextmennavtop_[x].className = "cotextmennavtop btn d-flex justify-content-between align-content-center align-items-center btn-inherit font-weight-bold text-dark"    
				    }
			    }
			}
		} else {
			menu_header_container.className = "m-2 d-flex flex-column justify-content-center align-content-center align-items-center menu-header-top text-dark"
			menu_header_container.style.listStyleType = "none"
			menu_header_container.style.webkitListStyleType = "none";
			menu_header_container.style.MozListStyleType = "none";
			menu_header_container.style.msListStyleType = "none";
			menu_header_container.style.oListStyleType = "none";

			menu_header_container.style.padding = "0"
			menu_header_container.style.webkitPadding = "0";
			menu_header_container.style.MozPadding = "0";
			menu_header_container.style.msPadding = "0";
			menu_header_container.style.oPadding = "0";

			menu_header_container.style.margin = "0"
			menu_header_container.style.webkitMargin = "0";
			menu_header_container.style.MozMargin = "0";
			menu_header_container.style.msMargin = "0";
			menu_header_container.style.oMargin = "0";

			menu_rallas.appendChild(menu_header_container)
			if (cotextmennavtop_ !== undefined && cotextmennavtop_ !== null){
				for (let x = 0; x < cotextmennavtop_.length; x++){
					// if (window.config[1].mode === "dark"){
					// 	cotextmennavtop_[x].className = "cotextmennavtop btn btn-inherit font-weight-bold text-light"
					// } else {
						cotextmennavtop_[x].className = "cotextmennavtop btn btn-inherit font-weight-bold text-dark"
					// }
				}
			} 
		}
	}
}


function div_opa_init_dark_wait(){
  const divopa = document.createElement("div")
  divopa.style.position = "fixed"
  divopa.style.webkitPosition = "fixed";
  divopa.style.MozPosition = "fixed";
  divopa.style.msPosition = "fixed";
  divopa.style.oPosition = "fixed";

  divopa.style.margin ="auto"
  divopa.style.webkitMargin = "auto";
  divopa.style.MozMargin = "auto";
  divopa.style.msMargin = "auto";
  divopa.style.oMargin = "auto";

  divopa.style.left = "0"
  divopa.style.webkitLeft = "0";
  divopa.style.MozLeft = "0";
  divopa.style.msLeft = "0";
  divopa.style.oLeft = "0";

  divopa.style.top = "0"
  divopa.style.webkitTop = "0";
  divopa.style.MozTop = "0";
  divopa.style.msTop = "0";
  divopa.style.oTop = "0";

  divopa.style.right = "0"
  divopa.style.webkitRight = "0";
  divopa.style.MozRight = "0";
  divopa.style.msRight = "0";
  divopa.style.oRight = "0";

  divopa.style.bottom = "0"
  divopa.style.webkitBottom = "0";
  divopa.style.MozBottom = "0";
  divopa.style.msBottom = "0";
  divopa.style.oBottom = "0";

  divopa.style.background = "rgb(0,0,0,0.90)"
  divopa.style.webkitBackground = "rgb(0,0,0,0.90)";
  divopa.style.MozBackground = "rgb(0,0,0,0.90)";
  divopa.style.msBackground = "rgb(0,0,0,0.90)";
  divopa.style.oBackground = "rgb(0,0,0,0.90)";

  divopa.style.zIndex = 1100
  divopa.style.display = "flex"
  divopa.style.webkitDisplay = "flex";
  divopa.style.MozDisplay = "flex";
  divopa.style.msDisplay = "flex";
  divopa.style.oDisplay = "flex";

  divopa.style.justifyContent = "center"
  divopa.style.webkitJustifyContent = "center";
  divopa.style.MozJustifyContent = "center";
  divopa.style.msJustifyContent = "center";
  divopa.style.oJustifyContent = "center";

  divopa.style.alignItems = "center"
  divopa.style.webkitAlignItems = "center";
  divopa.style.MozAlignItems = "center";
  divopa.style.msAlignItems = "center";
  divopa.style.oAlignItems = "center";

  divopa.style.alignContent = "center"
  divopa.style.webkitAlignContent = "center";
  divopa.style.MozAlignContent = "center";
  divopa.style.msAlignContent = "center";
  divopa.style.oAlignContent = "center";

  document.body.appendChild(divopa)

  const loading = document.createElement("img")
  loading.setAttribute("src", "./content/img/iconos/load3.gif")
  loading.setAttribute("width", "150px")
  divopa.appendChild(loading)

  setTimeout(function(){
    divopa.style.opacity = "0"
    divopa.style.webkitOpacity = "0";
	divopa.style.MozOpacity = "0";
	divopa.style.msOpacity = "0";
	divopa.style.oOpacity = "0";

    setTimeout(function(){
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

