let getContainer = document.getElementsByClassName("contain")[0]
let bord = document.getElementById("pattern")
let rr = document.getElementById("rootright")
let header = document.getElementsByClassName("header")[0]

const anim_init = () =>{

	
	

	header.animate([{
		opacity:0,
	},{
		opacity:1,
	}],{duration:1000, iterations:1})

	rr.animate([{
		opacity:0
	},{
		opacity:1
	}],{duration:1000, iterations:1})


	setTimeout(()=> window.scrollTo(0,0), 100)
}

const resize_responsive = (getContainer) =>{
	window.onload = e => {
	
		if (window.screen.width <= 288){
			// console.log("<= 288")
			getContainer.style.padding = "0px"
			bord.style.border = "none"
		} else {
			// console.log(">= 288")
			// getContainer.style.padding = "20px"
			bord.style.border = "1px solid #bbbbbb"
			anim_init()
		}
	}

	window.onresize = e => {
		if (e.target.outerWidth <= 288){
			// console.log("<= 288")
			getContainer.style.padding = "0px"
		} else {
			// console.log(">=288")
			// getContainer.style.padding = "20px"
		}

		if (e.target.outerWidth >= 700){
			bord.style.border = "1px solid #bbbbbb"
		} else {
			bord.style.border = "none"
		}
	}
}

resize_responsive(getContainer)