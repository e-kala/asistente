if (document.getElementsByClassName("headerinit")[0] !== undefined && document.getElementsByClassName("headerinit")[0] !== null){
	document.getElementsByClassName("headerinit")[0].style.opacity = "0"
	setTimeout(()=>{
		document.getElementsByClassName("headerinit")[0].style.opacity = "1"
		document.getElementsByClassName("headerinit")[0].animate([{
			transform:"scale(0)"
		},{
			transform:"scale(1)"
		}],{duration:400, iterations:1})
		for (let x = 0; x < document.getElementsByClassName("loinan").length; x++){
			document.getElementsByClassName("loinan")[x].animate([{
				opacity:Math.random(),
				margin:"14px",
				transform:`scale(${Math.random()}) rotate(${ Math.random()* -150 }deg) translate(${x % 2? Math.random()* -150 : 150}%, ${x % 2? Math.random()* -150 : 150}%)`
			},{
				opacity:1,
				margin:"1px",
				transform:`scaleX(${1})`
			}],{duration:3000, iterations:1})
		}
	},500)
}


const banplan = destiny => {
	destiny = document.querySelector(destiny)

	const img = document.createElement("img")
	img.classList.add("banderpng")
	img.setAttribute("src", "./content/img/bandermind.png")
	img.setAttribute("width", "30%")

	img.style.position = "fixed"
	img.style.margin = "auto"
	img.style.opacity = "0.2"
	img.style.left = "0"
	img.style.bottom = "-30%"
	img.style.zIndex = "-3"
	img.ondragstart = () => false;

	img.animate([{
		transform: "rotate(0deg)"
	},{
		transform: "rotate(360deg)"
	}],{duration:40000, iterations:Infinity})

	destiny.appendChild(img)

}

banplan("body")