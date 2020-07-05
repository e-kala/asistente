<!-- Image and text -->
<nav class="navbar navbar-dark mb-4 p-4 header-home-asistent">
	<a class="navbar-brand text-dark font-weight-bold" href="#">
		<img src="content/img/isolated-3021541_640.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
		Asistente
	</a>
	<div id="menu_btn">
		<img id="btn_img_men" src="./content/img/íconos/menu.png" width="40px">	
	</div>
	<script type="text/javascript">
		let bool = false
		const menu_btn = document.getElementById("menu_btn")
		menu_btn.classList.add("menu_btn")

		const div_men = document.createElement("div")
		div_men.classList.add("menu_container")
		div_men.style.display = "none"

		const options = ["Inicio", "Configuración", "Cerrar Sesión"]
		const functions = [
			() =>{
				alert("inicio")
				bool = false
				div_men.style.display = "none"
			},
			() =>{
				alert("Configuración")
				bool = false
				div_men.style.display = "none"
			}, 
			() =>{
				window.location.href +=  "?action=cerrar_sesion"
				bool = false
				div_men.style.display = "none"
			}
		]
		for (let x=0; x < options.length; x++){
			const optdiv = document.createElement("div")
			optdiv.innerHTML = options[x]
			optdiv.classList.add("options_men")
			optdiv.addEventListener("click",functions[x])
			div_men.appendChild(optdiv)
		}
		menu_btn.appendChild(div_men)

		const btn_img_men = document.getElementById("btn_img_men")
		btn_img_men.onclick = () => {
			bool = !bool
			if (bool){
				div_men.style.display = "block"
				div_men.style.opacity = "1"
				div_men.animate([{
					opacity:0,
					transform:"translateY(-10%)"
				},{
					opacity:1,
					transform:"translateY(0%)"
				}],{duration:400, iterations:1})
			} else {
				setTimeout(()=>{
					div_men.style.display = "none"
				},380)
				div_men.style.opacity = "1"

				div_men.animate([{
					opacity:1,
					transform:"translateY(0%)"
				},{
					opacity:0,
					transform:"translateY(-10%)"
				}],{duration:400, iterations:1})

			}
		}
	</script>
</nav>