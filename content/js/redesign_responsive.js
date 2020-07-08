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

		const devip = getDevicePixelRatio()

		if (devip.toString() === "1"){
		} else if (devip.toString().match(/0\.5/gim)){
		} else if (devip.toString().match(/0\.25/gim)){
		} else if (devip.toString().match(/0\.33/gim)){
		} else {
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

















function getDevicePixelRatio() {
    var mediaQuery;
    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    if (window.devicePixelRatio !== undefined && !is_firefox) {
        return window.devicePixelRatio;
    } else if (window.matchMedia) {
        mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
          (min--moz-device-pixel-ratio: 1.5),\
          (-o-min-device-pixel-ratio: 3/2),\
          (min-resolution: 1.5dppx)";
        if (window.matchMedia(mediaQuery).matches) {
            return 1.5;
        }
        mediaQuery = "(-webkit-min-device-pixel-ratio: 2),\
          (min--moz-device-pixel-ratio: 2),\
          (-o-min-device-pixel-ratio: 2/1),\
          (min-resolution: 2dppx)";
        if (window.matchMedia(mediaQuery).matches) {
            return 2;
        }
        mediaQuery = "(-webkit-min-device-pixel-ratio: 0.75),\
          (min--moz-device-pixel-ratio: 0.75),\
          (-o-min-device-pixel-ratio: 3/4),\
          (min-resolution: 0.75dppx)";
        if (window.matchMedia(mediaQuery).matches) {
            return 0.7;
        }
    } else {
        return 1;
    }
}