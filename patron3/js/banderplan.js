

const banplan = destiny => {
	destiny = document.querySelector(destiny)

	const img = document.createElement("img")
	img.setAttribute("src", "./img/bandermin.png")
	img.setAttribute("width", "50%")

	img.style.position = "fixed"
	img.style.margin = "auto"
	img.style.opacity = "0.2"
	img.style.right = "0"
	img.style.bottom = "-50%"
	img.ondragstart = () => false;

	img.animate([{
		transform: "rotate(0deg)"
	},{
		transform: "rotate(360deg)"
	}],{duration:40000, iterations:Infinity})

	destiny.appendChild(img)

}

banplan("body")