

const show_info = (destiny, message, style) => {
	destiny.style.position = "relative"
	const contain_opa = document.createElement("div")

	contain_opa.style.position = "absolute"
	contain_opa.style.top = "0" 
	contain_opa.style.bottom = "0"
	contain_opa.style.left = "0"
	contain_opa.style.right = "0"
	contain_opa.style.margin  = "auto"
	contain_opa.style.background = "black"
	contain_opa.style.opacity = "0.7"

	const info = document.createElement("div")
	info.style.position = "absolute"
	info.style.background = "#fff"
	info.style.top = "50%"
	info.style.left = "50%"
	info.style.margin = "auto"
	info.style.transform = "translate(-50%, -50%)"
	info.innerHTML = message

	destiny.appendChild(contain_opa)
	destiny.appendChild(info)

	setTimeout(()=>{
		destiny.removeChild(info)
		destiny.removeChild(contain_opa)
	},800)


}

const error = (pass, user) => {
	pass.style.border = "#f33b3b 2px solid"
	user.style.border = "#f33b3b 2px solid"
	pass.animate([{
		border: "white 2px solid"
	},{
		border: "#f33b3b 2px solid"
	}],{duration:700, iterations:1})
	user.animate([{
		border: "white 2px solid"
	},{
		border: "#f33b3b 2px solid"
	}],{duration:700, iterations:1})

}

const processing = destiny => {
	destiny.style.position = "relative"

	const pa = document.createElement("img")
	pa.setAttribute("width", "80px")
	pa.setAttribute("height", "80px")
	pa.setAttribute("src", "./img/gload.gif")
	pa.src = "gload.gif"

	pa.style.position = "absolute"
	pa.style.top = "0"
	pa.style.left = "0"
	pa.animate([{
		opacity:0
	}, {
		opacity:1
	}],{duration:400, iterations:1})

	

	setTimeout(()=>{
		pa.style.opacity = "0"
		pa.animate([{
			opacity:1
		}, {
			opacity:0
		}],{duration:800, iterations:1})
	},1300)


	setTimeout(()=>{

		destiny.removeChild(pa)
	},1800)

	destiny.appendChild(pa)
}