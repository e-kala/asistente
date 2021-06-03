document.getElementById("access").onsubmit = function(e){
	e.preventDefault()
}
document.getElementById("formlog").onsubmit = function(e){
	e.preventDefault()
}
document.getElementById("access").onpointerdown = function(){
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
		document.getElementById("formlogpa").style.display = ""
		document.getElementById("formsignpa").style.display = "none"
		document.getElementById("cajacenmain").style.opacity = 1
		document.getElementById("cajacenmain").animate([{opacity:0, transform:"transitionX(-20%)"},{opacity:1, transform:"transitionX(0%)"}],{duration:1000, iterations:1})
		
	},1600)
}

//Signupchan
document.getElementById("signupchan").onpointerdown = function(){
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


//Signup //Funcion de registrar
document.getElementById("registrarr").onsubmit = function(e){
	e.preventDefault()
	return false	
}
document.getElementById("formsignn").onsubmit = function(e){
	e.preventDefault()
	return false
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


			