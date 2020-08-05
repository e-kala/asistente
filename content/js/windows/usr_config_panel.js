let [time, bg] = ["hour", "", ""]


const data_time_customized_balance = document.getElementsByName("data_balanc_custom")[0]
const default_value_data = data_time_customized_balance.defaultValue

const time_balance = () => {
	const timedef = document.getElementsByClassName("timedefbalc")

	for (let y = 0; y < timedef.length; y++){
		timedef[y].onclick = () =>{
			time = timedef[y].children[0].getAttribute("name")
			timedef[y].children[0].className = "ml-2 btn btn-success flex-grow-1"
			console.log(time)
			for (let x = 0; x < timedef.length; x++){
				if (x !== y){
					timedef[x].children[0].className = "ml-2 btn btn-info flex-grow-1"
				}
			}
			data_time_customized_balance.value = default_value_data
		}
	}
}

const hover_select_bg = e => {
	e.style.cursor = "pointer"
	e.onpointerover = () => e.style.border = "2px solid #999999"
	e.onpointerout = () => e.style.border = "2px solid #dbdbdb"
}

const get_background = e => {
	e.onclick = () =>{
		src = e.src
		src = src.match(/\w+\/\w+\.(png|jpg|gif)/gim).toString()
		bg = src
		console.log(bg, "kakakak")

		document.body.style.background =`url(${e.src})`
		document.body.style.backgroundSize = "cover"
		document.body.style.backgroundPosition = "center center"
		document.body.style.backgroundAttachment = "fixed"
	}
}

const iter = (fx, ar) => {
	for (let x = 0; x < ar.length; x++){
		fx(ar[x])
	}
}

const imgdefa = document.getElementsByClassName("imgdefa")
time_balance()
iter(hover_select_bg, imgdefa)
iter(get_background, imgdefa)

//Enviar configuración del usuario
const send_config = () => {
	$.post("./content/php/usr/update_cnfg.php", {
		usuario: alma_config[0].usuario,
		mode: alma_config[1].mode,
		background: bg,
		time_bal: time !== "" ? time : "hour"
	}).done(d => {
		console.log(d)
		if (d.match(/\<success\>/gim)){
			alertify.success("Guardado exitoso")
		} 
	})
}

const save_btn = document.getElementById("save-changes-config")
save_btn.onclick = () => send_config()	

data_time_customized_balance.onchange = e => {
	const timedef = document.getElementsByClassName("timedefbalc")
	for (let x = 0; x < timedef.length; x++){
		timedef[x].children[0].className = "ml-2 btn btn-info flex-grow-1"
	}
	time = data_time_customized_balance.value
	console.log(time)
}

let left = document.getElementsByClassName("leftimg")[0]
let right = document.getElementsByClassName("rightimg")[0]
let conjunt_images = document.getElementsByClassName("conjunt_images")
const show_1 = () => {
	const show_1 = document.getElementById("show_1")
	let scrollhormas = 0
	show_1.onclick = () => {
		left.style.display = "block"
		right.style.display = "block"
		left.onpointerdown = () => {
			let maxscroll = conjunt_images[0].scrollWidth - 200
			if (scrollhormas > 0 && scrollhormas <= maxscroll){
				scrollhormas -= 600  
				conjunt_images[0].scrollTo(scrollhormas,0)
			} else {
				conjunt_images[0].scrollTo(maxscroll,0)
				scrollhormas = maxscroll
			}
			console.log(scrollhormas, maxscroll, conjunt_images[0].scrollWidth)
		}
		right.onpointerdown = () => {
			let maxscroll = conjunt_images[0].scrollWidth - 200

			if (scrollhormas < maxscroll ){
				scrollhormas +=  600  
					conjunt_images[0].scrollTo(scrollhormas,0)
			}else{
				conjunt_images[0].scrollTo(0,0)
				scrollhormas = 0
			}
			console.log(scrollhormas, maxscroll, conjunt_images[0].scrollWidth)
		}
		conjunt_images[0].style.display = "flex"
		conjunt_images[0].animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})

		conjunt_images[1].style.display = "none"
		conjunt_images[2].style.display = "none"
		conjunt_images[3].style.display = "none"
		conjunt_images[4].style.display = "none"
	}
}

const show_2 = () => {
	const show_2 = document.getElementById("show_2")
	let scrollhormas = 0
	show_2.onclick = () => {
		left.style.display = "block"
		right.style.display = "block"
		left.onpointerdown = () => {
			let maxscroll = conjunt_images[1].scrollWidth - 200
			if (scrollhormas > 0 && scrollhormas <= maxscroll){
				scrollhormas -= 600  
				conjunt_images[1].scrollTo(scrollhormas,0)
			} else {
				conjunt_images[1].scrollTo(maxscroll,0)
				scrollhormas = maxscroll
			}
			console.log(scrollhormas, maxscroll, conjunt_images[1].scrollWidth)
		}
		right.onpointerdown = () => {
			let maxscroll = conjunt_images[1].scrollWidth - 200

			if (scrollhormas < maxscroll ){
				scrollhormas +=  600  
					conjunt_images[1].scrollTo(scrollhormas,0)
			}else{
				conjunt_images[1].scrollTo(0,0)
				scrollhormas = 0
			}
			console.log(scrollhormas, maxscroll, conjunt_images[1].scrollWidth)
		}
		conjunt_images[1].style.display = "flex"
		conjunt_images[1].animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})

		conjunt_images[0].style.display = "none"
		conjunt_images[2].style.display = "none"
		conjunt_images[3].style.display = "none"
		conjunt_images[4].style.display = "nonr"

	}
}

const show_3 = () => {
	const show_3 = document.getElementById("show_3")
	let scrollhormas = 0
	show_3.onclick = () => {
		left.style.display = "block"
		right.style.display = "block"
		left.onpointerdown = () => {
			let maxscroll = conjunt_images[2].scrollWidth - 200
			if (scrollhormas > 0 && scrollhormas <= maxscroll){
				scrollhormas -= 600  
				conjunt_images[2].scrollTo(scrollhormas,0)
			} else {
				conjunt_images[2].scrollTo(maxscroll,0)
				scrollhormas = maxscroll
			}
			console.log(scrollhormas, maxscroll, conjunt_images[2].scrollWidth)
		}
		right.onpointerdown = () => {
			let maxscroll = conjunt_images[2].scrollWidth - 200

			if (scrollhormas < maxscroll ){
				scrollhormas +=  600  
					conjunt_images[2].scrollTo(scrollhormas,0)
			}else{
				conjunt_images[2].scrollTo(0,0)
				scrollhormas = 0
			}
			console.log(scrollhormas, maxscroll, conjunt_images[2].scrollWidth)
		}
		conjunt_images[2].style.display = "flex"
		conjunt_images[2].animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
		conjunt_images[0].style.display = "none"
		conjunt_images[1].style.display = "none"
		conjunt_images[3].style.display = "none"
		conjunt_images[4].style.display = "nonr"

	}
}
show_1()
show_2()
show_3()


