const accordion = document.getElementsByClassName("accordion")

const resize_accordion = () => {
	if (window.screen.width >= 800){
		accordion[0].style.width = "80%"
		accordion[1].style.width = "80%"
	} else {
		accordion[0].style.width = "100%"
		accordion[1].style.width = "100%"	
	}
}

window.onload = () => {
	resize_accordion()
}

window.onresize = () => {
	resize_accordion()
}
