// if (document.getElementsByClassName("headerinit")[0] !== undefined && document.getElementsByClassName("headerinit")[0] !== null){
// 	document.getElementsByClassName("headerinit")[0].style.opacity = "0"
// 	setTimeout(function(){
// 		document.getElementsByClassName("headerinit")[0].style.opacity = "1"
// 		document.getElementsByClassName("headerinit")[0].animate([{
// 			transform:"scale(0)"
// 		},{
// 			transform:"scale(1)"
// 		}],{duration:400, iterations:1})
// 		for (let x = 0; x < document.getElementsByClassName("loinan").length; x++){
// 			document.getElementsByClassName("loinan")[x].animate([{
// 				opacity:Math.random(),
// 				marginLeft:"14px",
// 				transform:`scale(${Math.random()}) rotate(${ Math.random()* -150 }deg) translate(${x % 2? Math.random()* -150 : 150}%, ${x % 2? Math.random()* -150 : 150}%)`
// 			},{
// 				opacity:1,
// 				marginLeft:"1px",
// 				transform:`scaleX(${1})`
// 			}],{duration:3000, iterations:1})
// 		}
// 	},500)
// }


function banplan(destiny){
	destiny = document.querySelector(destiny)

	const img = document.createElement("img")
	img.classList.add("banderpng")
	img.setAttribute("src", "./content/img/bandermind.png")
	img.setAttribute("width", "20%")

	img.style.position = "fixed"
	img.style.webkitPosition = "fixed";
	img.style.MozPosition = "fixed";
	img.style.msPosition = "fixed";
	img.style.oPosition = "fixed";

	img.style.margin = "auto"
	img.style.webkitMargin = "auto";
	img.style.MozMargin = "auto";
	img.style.msMargin = "auto";
	img.style.oMargin = "auto";

	img.style.opacity = "0.7"
	img.style.webkitOpacity = "0.7";
	img.style.MozOpacity = "0.7";
	img.style.msOpacity = "0.7";
	img.style.oOpacity = "0.7";

	img.style.right= "-10%"
	img.style.webkitRight = "-10%";
	img.style.MozRight = "-10%";
	img.style.msRight = "-10%";
	img.style.oRight = "-10%";

	img.style.bottom = "-15%"
	img.style.webkitBottom = "-15%";
	img.style.MozBottom = "-15%";
	img.style.msBottom = "-15%";
	img.style.oBottom = "-15%";

	img.style.zIndex = "-3"
	img.ondragstart = function(){ 
		return false;
	}

	img.animate([{
		transform: "rotate(0deg)"
	},{
		transform: "rotate(360deg)"
	}],{duration:40000, iterations:Infinity})

	destiny.appendChild(img)

}

function edifi(destiny){
	destiny = document.querySelector(destiny)

	const edif = document.createElement("img")
	edif.setAttribute("src", "./content/img/edif.png")
	edif.setAttribute("width", "50%")
	edif.style.zIndex = "-30"
	edif.style.position = "fixed"
	edif.style.webkitPosition = "fixed";
	edif.style.MozPosition = "fixed";
	edif.style.msPosition = "fixed";
	edif.style.oPosition = "fixed";

	edif.style.bottom = "0"
	edif.style.webkitBottom = "0";
	edif.style.MozBottom = "0";
	edif.style.msBottom = "0";
	edif.style.oBottom = "0";

	edif.style.right = "0"
	edif.style.webkitRight = "0";
	edif.style.MozRight = "0";
	edif.style.msRight = "0";
	edif.style.oRight = "0";

	edif.style.opacity = "1"
	edif.style.webkitOpacity = "1";
	edif.style.MozOpacity = "1";
	edif.style.msOpacity = "1";
	edif.style.oOpacity = "1";

	edif.ondragstart = function(){ 
		return false;
	}

	edif.animate([{
		opacity:0,
		transform: "translateY(100%)"
	},{
		opacity:1,
		transform: "translateY(0%)"
	}],{duration:1000, iterations:1})

	destiny.appendChild(edif)
}


// edifi("body")
if (document.getElementsByClassName("divflomes")[0] !== undefined
	&& document.getElementsByClassName("divflomes")[0] !== null
	&& document.getElementsByClassName("divflomes")[0].style.display !== "none"){
	banplan("body")
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

