document.getElementById("access").onsubmit = function(e){
	//login
	$.post( "./content/php/login.php", { usuario: document.getElementById("namemail").value, pass: document.getElementById("password").value})
	  .done( function(dat){
	  	// console.log(dat)
	  	if (dat.match(/\<welcome\>/gim)){
	  		window.location.reload(false);
	  	} else {
			// alert(`Datos inválidos ${userValue}`)
			e.preventDefault()
			$("#access").notify(`Datos inválidos`, "error");

			// console.log("Datos inválidos", userValue	)
		}	

	  });

}
document.getElementById("formlog").onsubmit = function(e){
	//form login


	let logpass = document.getElementById("password").value
	let logemail = document.getElementById("namemail").value

	if (logpass != "" && logemail != ""){
		e.preventDefault()
		$.post( "./content/php/login.php", { usuario: document.getElementById("namemail").value, pass: document.getElementById("password").value})
		  .done( function(dat){
		  	// console.log(dat)
		  	if (dat.match(/\<welcome\>/gim)){
		  		window.location.reload(false);
		  	} else {
				// alert(`Datos inválidos ${userValue}`)
				
				$("#access").notify(`Datos inválidos`, "error");

				// console.log("Datos inválidos", userValue	)
			}	
		});
	} else {
		// $("#access").notify(`Complete sus datos`, "error");
		e.preventDefault()
	}


}
document.getElementById("access").onpointerdown = function(){
	//login
	$.post( "./content/php/login.php", { usuario: document.getElementById("namemail").value, pass: document.getElementById("password").value})
	  .done( function(dat){
	  	// console.log(dat)
	  	if (dat.match(/\<welcome\>/gim)){
	  		window.location.reload(false);
	  	} else {
			// alert(`Datos inválidos ${userValue}`)
			
			$("#access").notify(`Datos inválidos`, "error");

			// console.log("Datos inválidos", userValue	)
		}	

	  });
}

//Signupchan Loginchan

document.getElementById("loginchan").onpointerdown = function(){
	document.getElementById("bodyfonlogreg").classList.add("top", "left", "right", "bottom", "margin-auto", "position-fixed")
	document.getElementById("bodyfonlogreg").animate([{
		opacity:0
	},{
		opacity:1
	}],{duration:1000, iterations:1})
	document.getElementById("bodyfonlogreg").classList.remove("d-none")
	document.getElementById("bodyfonlogreg").classList.add("d-flex")
	document.body.style.overflow = 'hidden';

	document.getElementById("cajacenmain").style.opacity = 0
	// document.getElementById("cajacenmain").animate([{opacity:1},{opacity:0}],{duration:1000, iterations:1})

	let imageCarga = document.createElement("img")
	imageCarga.setAttribute("src", "./content/img/iconos/load3.gif")
	imageCarga.className = "position-absolute top left right bottom margin-auto"
	imageCarga.setAttribute("width", "10%")
	imageCarga.style.top = "-120px"
	imageCarga.style.margin = "auto"

	const congenmainpage = document.getElementsByClassName("backgpaiso")[0]
	congenmainpage.appendChild(imageCarga)

	document.getElementById("menquitinprese").style.opacity = "0"
	
	setTimeout(function(){
		document.getElementById("menquitinprese").style.opacity = "1"
		imageCarga.remove()
		document.getElementById("formlogpa").style.display = ""
		document.getElementById("formsignpa").style.display = "none"
		document.getElementById("cajacenmain").style.opacity = 1
		document.getElementById("cajacenmain").animate([{opacity:0, transform:"transitionX(-20%)"},{opacity:1, transform:"transitionX(0%)"}],{duration:1000, iterations:1})
		
	},1600)
}

document.getElementById("loginchan2").onpointerdown = function(){
	document.getElementById("cajacenmain").style.opacity = 0
	document.getElementById("cajacenmain").animate([{opacity:1},{opacity:0}],{duration:1000, iterations:1})

	let imageCarga = document.createElement("img")
	imageCarga.setAttribute("src", "./content/img/iconos/load3.gif")
	imageCarga.className = "position-absolute top left right bottom margin-auto"
	imageCarga.setAttribute("width", "10%")
	imageCarga.style.top = "-120px"
	imageCarga.style.margin = "auto"

	const congenmainpage = document.getElementsByClassName("backgpaiso")[0]
	congenmainpage.appendChild(imageCarga)
	
	setTimeout(function(){
		imageCarga.remove()
		document.getElementById("logformdivin").style.display = ""

		document.getElementById("formlogpa").style.display = ""
		document.getElementById("formsignpa").style.display = "none"
		document.getElementById("formrecovery").style.display = "none"
		document.getElementById("cajacenmain").style.opacity = 1
		document.getElementById("cajacenmain").animate([{opacity:0, transform:"transitionX(-20%)"},{opacity:1, transform:"transitionX(0%)"}],{duration:1000, iterations:1})
		
	},1600)
}

//Signupchan
document.getElementById("signupchan").onpointerdown = function(){
	document.getElementById("bodyfonlogreg").classList.add("top", "left", "right", "bottom", "margin-auto", "position-fixed")
	document.getElementById("bodyfonlogreg").animate([{
		opacity:0
	},{
		opacity:1
	}],{duration:1000, iterations:1})
	document.getElementById("bodyfonlogreg").classList.remove("d-none")
	document.getElementById("bodyfonlogreg").classList.add("d-flex")
	document.body.style.overflow = 'hidden';


	document.getElementById("cajacenmain").style.opacity = 0
	// document.getElementById("cajacenmain").animate([{opacity:1},{opacity:0}],{duration:1000, iterations:1})

	let imageCarga = document.createElement("img")
	imageCarga.className = "position-absolute top left right bottom margin-auto"
	imageCarga.setAttribute("src", "./content/img/iconos/load3.gif")
	imageCarga.setAttribute("width", "10%")
	imageCarga.style.top = "-120px"
	imageCarga.style.margin = "auto"

	const congenmainpage = document.getElementsByClassName("backgpaiso")[0]
	congenmainpage.appendChild(imageCarga)
	
	
	setTimeout(function(){
		imageCarga.remove()
		document.getElementById("formsignpa").style.display = ""
		document.getElementById("formlogpa").style.display = "none"
		document.getElementById("cajacenmain").style.opacity = 1
		document.getElementById("cajacenmain").animate([{opacity:0, transform:"transitionX(-20%)"},{opacity:1, transform:"transitionX(0%)"}],{duration:1000, iterations:1})
		
	},1600)
}

document.getElementById("signupchan2").onpointerdown = function(){

	document.getElementById("cajacenmain").style.opacity = 0
	document.getElementById("cajacenmain").animate([{opacity:1},{opacity:0}],{duration:1000, iterations:1})

	let imageCarga = document.createElement("img")
	imageCarga.className = "position-absolute top left right bottom margin-auto"
	imageCarga.setAttribute("src", "./content/img/iconos/load3.gif")
	imageCarga.setAttribute("width", "10%")
	imageCarga.style.top = "-120px"
	imageCarga.style.margin = "auto"

	const congenmainpage = document.getElementsByClassName("backgpaiso")[0]
	congenmainpage.appendChild(imageCarga)
	
	
	setTimeout(function(){
		imageCarga.remove()
		document.getElementById("formsignpa").style.display = ""
		document.getElementById("formlogpa").style.display = "none"
		document.getElementById("cajacenmain").style.opacity = 1
		document.getElementById("cajacenmain").animate([{opacity:0, transform:"transitionX(-20%)"},{opacity:1, transform:"transitionX(0%)"}],{duration:1000, iterations:1})
		
	},1600)
}


document.getElementById("volversuperpulog").onpointerdown = function(){
	document.getElementById("bodyfonlogreg").classList.remove("d-flex", "top", "left", "right", "bottom", "margin-auto", "position-fixed")
	document.getElementById("bodyfonlogreg").classList.add("d-none")
	document.body.style.overflow = 'visible';
}

//Recovery password............
document.getElementById("recoverypass").onpointerdown = function(){
	document.getElementById("logformdivin").style.display = "none"
	document.getElementById("cajacenmain").style.opacity = 1
	document.getElementById("cajacenmain").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})

	document.getElementById("formrecovery").style.display = ""
	document.getElementById("formrecovery").style.display = "block"
	document.getElementById("formrecovery").style.opacity = 1
	document.getElementById("formrecovery").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
}


let boolrecovery = false
document.getElementById("formrecovery").onsubmit = function(e){
	if (document.getElementById("inputrecopass").value != ""){
		e.preventDefault()
		let count = 120;
		if (!boolrecovery){
			boolrecovery = true
			$.post("./content/php/recoverypass.php", { mail: document.getElementById("inputrecopass").value}).done( function(dat){

			  	if (dat.match(/\<successfully\-sent\>/gim)){

			  		//bloquear boton de enviar hasta que acabe el conteo
			  		document.getElementById("sendemapass").value = "Volver a enviar"
					document.getElementById("sendemapass").disabled = true

				  	//temporizador
				  	
				  	let timer = setInterval(function(){
				  		count -= 1
				  		document.getElementById("counter").innerHTML = "Puedes intentar de nuevo en " + count + " seg  " 
				  		if (count == 0){
				  			boolrecovery = false
				  			clearInterval(timer)
				  			document.getElementById("counter").innerHTML = ""
				  			document.getElementById("sendemapass").disabled = false
				  		} else {
				  			e.preventDefault()
				  		}
				  	}, 1000)
			  	

			  		document.getElementById("notiferecovconten").style.display = ""
			  		document.getElementById("notiferecov").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
			  		document.getElementById("notiferecov").innerHTML = "¡Mensaje enviado!, revise su correo electrónico por favor"
			  		document.getElementById("notiferecov").classList.remove("alert-warning")
			  		document.getElementById("notiferecov").classList.add("alert-success")
			  		// console.log("enviado");
			  	} else if (dat.match(/\<no\-existe\-correo\>/gim)) {
			  		e.preventDefault()
			  		console.log(dat);
			  		document.getElementById("notiferecovconten").style.display = ""
					document.getElementById("notiferecov").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
			  		document.getElementById("notiferecov").innerHTML = "Este correo no ha sido registrado todavía<br>o no es una estructura válida *"
			  		document.getElementById("notiferecov").classList.remove("alert-success")
			  		document.getElementById("notiferecov").classList.add("alert-warning")
			  		// console.log("no enviado aun, error");
			  	} else if (dat.match(/\<update\-error\-randomkey\>/gim)){
			  		e.preventDefault()
			  		console.log(dat);
			  		document.getElementById("notiferecovconten").style.display = ""
			  		document.getElementById("notiferecov").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
			  		document.getElementById("notiferecov").innerHTML = "Error inesperado, espere unos minutos y vuelva a intentar *"
			  		document.getElementById("notiferecov").classList.remove("alert-success")
			  		document.getElementById("notiferecov").classList.add("alert-warning")
			  		// console.log("no enviado aun, error");
			  	} else if (dat.match(/\<error\-de\-envio\>/gim)){
			  		e.preventDefault()
			  		console.log(dat);
			  		document.getElementById("notiferecovconten").style.display = ""
			  		document.getElementById("notiferecov").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
			  		document.getElementById("notiferecov").innerHTML = "Error de envío, vuelva a intentar *"
			  		document.getElementById("notiferecov").classList.remove("alert-success")
			  		document.getElementById("notiferecov").classList.add("alert-warning")
			  		// console.log("no enviado aun, error");
			  	} else {
			  		e.preventDefault()
			  		console.log(dat);
			  	}	
			})
		} 
	} else{
	}
}



document.getElementById("sendemapass").onclick = function(e){
	
	$.post("./content/php/recoverypass.php", { mail: document.getElementById("inputrecopass").value}).done( function(dat){

	  	if (dat.match(/\<successfully\-sent\>/gim)){

	  		//bloquear boton de enviar hasta que acabe el conteo
	  		document.getElementById("sendemapass").value = "Volver a enviar"
			document.getElementById("sendemapass").disabled = true

		  	//temporizador
		  	let count = 120;
		  	let timer = setInterval(function(){
		  		count -= 1
		  		document.getElementById("counter").innerHTML = "Puedes intentar de nuevo en " + count + " seg  " 
		  		if (count == 0){
		  			clearInterval(timer)
		  			document.getElementById("counter").innerHTML = ""
		  			document.getElementById("sendemapass").disabled = false
		  		}
		  	}, 1000)

	  		document.getElementById("notiferecovconten").style.display = ""
	  		document.getElementById("notiferecov").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
	  		document.getElementById("notiferecov").innerHTML = "¡Mensaje enviado!, revise su correo electrónico por favor"
	  		document.getElementById("notiferecov").classList.remove("alert-warning")
	  		document.getElementById("notiferecov").classList.add("alert-success")
	  		// console.log("enviado");
	  	} else if (dat.match(/\<no\-existe\-correo\>/gim)) {
	  		console.log(dat);
	  		document.getElementById("notiferecovconten").style.display = ""
			document.getElementById("notiferecov").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
	  		document.getElementById("notiferecov").innerHTML = "Este correo no ha sido registrado todavía<br>o no es una estructura válida *"
	  		document.getElementById("notiferecov").classList.remove("alert-success")
	  		document.getElementById("notiferecov").classList.add("alert-warning")
	  		// console.log("no enviado aun, error");
	  	} else if (dat.match(/\<update\-error\-randomkey\>/gim)){
	  		console.log(dat);
	  		document.getElementById("notiferecovconten").style.display = ""
	  		document.getElementById("notiferecov").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
	  		document.getElementById("notiferecov").innerHTML = "Error inesperado, espere unos minutos y vuelva a intentar *"
	  		document.getElementById("notiferecov").classList.remove("alert-success")
	  		document.getElementById("notiferecov").classList.add("alert-warning")
	  		// console.log("no enviado aun, error");
	  	} else if (dat.match(/\<error\-de\-envio\>/gim)){
	  		console.log(dat);
	  		document.getElementById("notiferecovconten").style.display = ""
	  		document.getElementById("notiferecov").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
	  		document.getElementById("notiferecov").innerHTML = "Error de envío, vuelva a intentar *"
	  		document.getElementById("notiferecov").classList.remove("alert-success")
	  		document.getElementById("notiferecov").classList.add("alert-warning")
	  		// console.log("no enviado aun, error");
	  	} else {
	  		console.log(dat);
	  	}

	  	

	})


}

//.........................

//Signup //Funcion de registrar
document.getElementById("registrarr").onsubmit = function(e){
	if (document.getElementById("password1r").value === document.getElementById("password2r").value){
		e.preventDefault()
		$.post( "./content/php/registro/registrando.php", { mail: document.getElementById("emailr").value, usuario: document.getElementById("usernamer").value, pass: document.getElementById("password1r").value})
		  .done( function(dat){

		  	if (dat.match(/\<successfully\>/gim)){
		  		document.getElementById("labelsignno").innerHTML = ""

		  		document.getElementById("cajacenmain").style.opacity = 0
		  		document.getElementById("cajacenmain").animate([{opacity:1},{opacity:0}],{duration:1000, iterations:1})

		  		let imageCarga = document.createElement("img")
				imageCarga.className = "position-absolute top left right bottom margin-auto"
				imageCarga.setAttribute("src", "./content/img/iconos/load3.gif")
				imageCarga.setAttribute("width", "10%")
				imageCarga.style.top = "-120px"
				imageCarga.style.margin = "auto"

				const congenmainpage = document.getElementsByClassName("backgpaiso")[0]
				congenmainpage.appendChild(imageCarga)
				
		  		
		  		setTimeout(function(){
		  			imageCarga.remove()
		  			document.getElementById("formlogpa").style.display = ""
		  			document.getElementById("formsignpa").style.display = "none"
		  			document.getElementById("cajacenmain").style.opacity = 1
		  			document.getElementById("cajacenmain").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
		  		
					window.location.href = "index.php"
		  		},1600)

		  	} else if (dat.match(/\<ya\-existe\>/gim)) {
		  		e.preventDefault()
		  		document.getElementById("labelsignno").style.display = "block"
				document.getElementById("labelsignno").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
		  		document.getElementById("labelsignno").innerHTML = "Ya existe una cuenta con dicho correo electrónico *"
		  	}
		  });
		  	
	} else {
		e.preventDefault()
		document.getElementById("labelsignno").style.display = "block"
		document.getElementById("labelsignno").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
		document.getElementById("labelsignno").innerHTML = "Las contraseñas no coinciden *"
	}

	
}
document.getElementById("formsignn").onsubmit = function(e){
	if (document.getElementById("password1r").value === document.getElementById("password2r").value){
		e.preventDefault()
		$.post( "./content/php/registro/registrando.php", { mail: document.getElementById("emailr").value, usuario: document.getElementById("usernamer").value, pass: document.getElementById("password1r").value})
		  .done( function(dat){

		  	if (dat.match(/\<successfully\>/gim)){
		  		document.getElementById("labelsignno").innerHTML = ""

		  		document.getElementById("cajacenmain").style.opacity = 0
		  		document.getElementById("cajacenmain").animate([{opacity:1},{opacity:0}],{duration:1000, iterations:1})

		  		let imageCarga = document.createElement("img")
				imageCarga.className = "position-absolute top left right bottom margin-auto"
				imageCarga.setAttribute("src", "./content/img/iconos/load3.gif")
				imageCarga.setAttribute("width", "10%")
				imageCarga.style.top = "-120px"
				imageCarga.style.margin = "auto"

				const congenmainpage = document.getElementsByClassName("backgpaiso")[0]
				congenmainpage.appendChild(imageCarga)
				
		  		
		  		setTimeout(function(){
		  			imageCarga.remove()
		  			document.getElementById("formlogpa").style.display = ""
		  			document.getElementById("formsignpa").style.display = "none"
		  			document.getElementById("cajacenmain").style.opacity = 1
		  			document.getElementById("cajacenmain").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
		  		
					window.location.href = "index.php"
		  		},1600)

		  	} else if (dat.match(/\<ya\-existe\>/gim)) {
		  		e.preventDefault()
		  		document.getElementById("labelsignno").style.display = "block"
				document.getElementById("labelsignno").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
		  		document.getElementById("labelsignno").innerHTML = "Ya existe una cuenta con dicho correo electrónico *"
		  	}

		  });
		  	
	} else {
		e.preventDefault()
		document.getElementById("labelsignno").style.display = "block"
		document.getElementById("labelsignno").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
		document.getElementById("labelsignno").innerHTML = "Las contraseñas no coinciden *"
	}
}

document.getElementById("registrarr").onpointerdown = function(){

	if (document.getElementById("password1r").value === document.getElementById("password2r").value){
		$.post( "./content/php/registro/registrando.php", { mail: document.getElementById("emailr").value, usuario: document.getElementById("usernamer").value, pass: document.getElementById("password1r").value})
		  .done( function(dat){

		  	if (dat.match(/\<successfully\>/gim)){
		  		document.getElementById("labelsignno").innerHTML = ""

		  		document.getElementById("cajacenmain").style.opacity = 0
		  		document.getElementById("cajacenmain").animate([{opacity:1},{opacity:0}],{duration:1000, iterations:1})

		  		let imageCarga = document.createElement("img")
				imageCarga.className = "position-absolute top left right bottom margin-auto"
				imageCarga.setAttribute("src", "./content/img/iconos/load3.gif")
				imageCarga.setAttribute("width", "10%")
				imageCarga.style.top = "-120px"
				imageCarga.style.margin = "auto"

				const congenmainpage = document.getElementsByClassName("backgpaiso")[0]
				congenmainpage.appendChild(imageCarga)
				
		  		
		  		setTimeout(function(){
		  			imageCarga.remove()
		  			document.getElementById("formlogpa").style.display = ""
		  			document.getElementById("formsignpa").style.display = "none"
		  			document.getElementById("cajacenmain").style.opacity = 1
		  			document.getElementById("cajacenmain").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
		  		
					window.location.href = "index.php"
		  		},1600)

		  	} else if (dat.match(/\<ya\-existe\>/gim)) {
		  		document.getElementById("labelsignno").style.display = "block"
				document.getElementById("labelsignno").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
		  		document.getElementById("labelsignno").innerHTML = "Ya existe una cuenta con dicho correo electrónico *"
		  	}

		  });
		  	
	} else {
		document.getElementById("labelsignno").style.display = "block"
		document.getElementById("labelsignno").animate([{opacity:0},{opacity:1}],{duration:1000, iterations:1})
		document.getElementById("labelsignno").innerHTML = "Las contraseñas no coinciden *"
	}
}


			