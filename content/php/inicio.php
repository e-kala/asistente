
<div class=" inicio-container">
	<div>
		<div class="container-fluid header_inicio ">
			<div class="row">
				<div class="headerinit col-md-9 ">
					<img src="./content/img/logoAsistentev0.6.2.png" width="50px" height="50px" class="p-2">
					<span class="loinan">E</span>
					<span class="loinan">k</span>
					<span class="loinan">a</span>
					<span class="loinan">s</span>
					<span class="loinan">i</span>
					<span class="loinan">s</span>
					<span class="loinan">t</span>
					<span class="loinan">e</span>
					<span class="loinan">n</span>
					<span class="loinan">t</span>
				</div>
				<!-- <div class=" text-center state_init_mainpage_label">
					<h2>Iniciar Sesión</h2>
				</div> -->
				<div class="panel-log-reg m-0 p-0  col-md-3 d-flex align-items-center justify-content-center flex-wrap">
					<a class="border rounded btn-link p-1 text-light flex-grow-1 m-1 login-btn" role="button" href="#">Iniciar Sesión</a>
					<a class="border rounded btn-link p-1 text-light flex-grow-1 m-1 registro-btn" href="?action=registro" role="button">Registrarse</a>
				</div>
			</div>
		</div>

		<div id="logpan" style="display: none;" align="center">
			<div id="root" class=" p-3 text-center" align="center" > 
			</div>
			<div class="init-wayses d-flex justify-content-end">
			    <button class="login-change-way   text-light font-weight-bold">Pan</button>
			</div>
		</div>
		<div class="divbgmain">
		</div>

		<!-- bodyfond -->
		<div class="backgpais container-fluid align-items-center d-flex justify-content-center">
			<div class=" p-4 " style="border-radius: 40px; -webkit-border-radius:40px; -moz-border-radius:40px; -o-border-radius:40px; -ms-border-radius:40px;  background: rgb(255,255,255,0.50);">
				<div class=" p-4" >
					<img src="./content/img/logoAsistentev0.14.png" width="150px" class="p-1 animarbologinicio">
					<h3 class="p-4 mb-3 text-dark font-weight-bold" style="border-bottom: 4px solid #fff;">Una semilla cuidada es un fruto infinito</h3>
					<a href="#" class="btn mt-3 text-light btn-success btn-lg font-weight-bold badge-pill login-btn" >
						Acceder
					</a>
				</div>
			</div>
		</div>

		<!-- footerini -->
		<div class="container-fluid bg-light">
			<div class="bg-transparent border-0">
				<div class="p-4 row ">
					<div class="col-md-4 col-sm-6 col-xs-12 p-4 d-flex flex-column  align-items-center justify-content-center " >
						<img src="./content/img/collagepj.png" width="200px">
						<h4 class="text-center p-4 text-dark">Un personaje que siempre estará pendiente de tus finanzas</h4>
						<span class="badge-pill border p-2 text-dark font-weight-bold"><i class="fa fa-star  text-warning" aria-hidden="true"></i><i class="fa fa-star  text-warning" aria-hidden="true"></i><i class="fa fa-star  text-warning" aria-hidden="true"></i><i class="fa fa-star  text-warning" aria-hidden="true"></i><i class="fa fa-star  text-warning" aria-hidden="true"></i></span>
					</div>
					<div class="col-md-4 col-sm-6 col-xs-12 p-4 d-flex flex-column align-items-center justify-content-center " >
						<img src="./content/img/balico.png" width="200px">
						<h4 class="text-center p-4 text-dark">Datos estadísticos y predictivos acerca de tus gastos e ingresos</h4>
						<span class="badge-pill border p-2 text-dark font-weight-bold"><i class="fa fa-star  text-warning" aria-hidden="true"></i><i class="fa fa-star  text-warning" aria-hidden="true"></i><i class="fa fa-star  text-warning" aria-hidden="true"></i><i class="fa fa-star  text-warning" aria-hidden="true"></i><i class="fa fa-star  text-warning" aria-hidden="true"></i></span>
					</div>
					<div class="col-md-4 col-sm-12 col-xs-12 p-4 d-flex flex-column align-items-center justify-content-center " >
						<img src="./content/img/organiz.png" width="200px">
						<h4 class="text-center p-4 text-dark">Herramientas y recursos interactivos para complementar las operaciones</h4>
						<span class="badge-pill border p-2 text-dark font-weight-bold"><i class="fa fa-star  text-warning" aria-hidden="true"></i><i class="fa fa-star  text-warning" aria-hidden="true"></i><i class="fa fa-star  text-warning" aria-hidden="true"></i><i class="fa fa-star  text-warning" aria-hidden="true"></i><i class="fa fa-star  text-warning" aria-hidden="true"></i></span>
					</div>
				</div>
			</div>
		</div>
		<script type="text/javascript">
				const login_btn = document.getElementsByClassName("login-btn")

				const logpan = document.getElementById("logpan")
				logpan.style.zIndex = "20"
				login_btn[0].onclick = () => {
					logpan.style.display = "block"
					logpan.animate([{
						opacity:0
					},{
						opacity:1
					}],{duration:1000, iterations:1})	
				}
				login_btn[1].onclick = () => {
					logpan.style.display = "block"
					logpan.animate([{
						opacity:0
					},{
						opacity:1
					}],{duration:1000, iterations:1})	
				}
				logpan.ondblclick = () => logpan.style.display = "none"
		</script>
		
		<script type="text/javascript">
			publici = destiny => {
				destiny = document.querySelector(destiny)
				let div = document.createElement("div")
				div.style.position = "absolute"
				div.style.webkitPosition = "absolute";
				div.style.MozPosition = "absolute";
				div.style.msPosition = "absolute";
				div.style.oPosition = "absolute";

				div.classList.add("divmestype")
				div.style.left = "0"
				div.style.webkitLeft = "0";
				div.style.MozLeft = "0";
				div.style.msLeft = "0";
				div.style.oLeft = "0";

				div.style.top = "200px"
				div.style.webkitTop = "200px";
				div.style.MozTop = "200px";
				div.style.msTop = "200px";
				div.style.oTop = "200px";

				div.style.order = "0"
				div.style.width = "50%"
				div.style.zIndex = "-80"
				// div.style.height = "60%"
				// div.style.background =" rgb(43,52,74,0.90)"
				div.style.borderTopRightRadius = "40px"
				div.style.borderBottomRightRadius = "40px"
				div.style.borderRadius = "40px"
				div.style.padding = "50px"
				div.style.margin = "40px"
				div.style.zIndex = "0"


				const devip = getDevicePixelRatio()
				if (devip.toString() === "1"){
					div.style.top = "80px"
					div.style.fontSize = "300%"
				} else if (devip.toString().match(/0\.5/gim)){
					div.style.marginLeft = "80px"
					div.style.fontSize = "600%"
					div.style.top = "180px"
				} else if (devip.toString().match(/0\.25/gim)){
					div.style.marginLeft = "120px"
					div.style.fontSize = "1000%"
				} else if (devip.toString().match(/0\.33/gim)){
					div.style.marginLeft = "100px"
					div.style.fontSize = "900%"
				} else if (devip.toString().match(/0\.6/gim)){
					div.style.top = "130px"
					div.style.marginLeft = "100px"
					div.style.fontSize = "400%"
				} else if (devip.toString().match(/0\.7/gim)){
					div.style.top = "130px"
					div.style.marginLeft = "100px"
					div.style.fontSize = "400%"
				} else if (devip.toString().match(/0\.80/gim)){
					div.style.top = "60px"
					div.style.marginLeft = "30px"
					div.style.fontSize = "400%"
				} else if (devip.toString().match(/0\.89/gim)){
					div.style.top = "60px"
					div.style.marginLeft = "30px"
					div.style.fontSize = "350%"
				} else if (devip.toString().match(/0\.89/gim)){
					div.style.top = "60px"
					div.style.marginLeft = "30px"
					div.style.fontSize = "350%"
				} else if (devip.toString().match(/1\.10/gim)){
					div.style.top = "60px"
					div.style.marginLeft = "30px"
					div.style.fontSize = "250%"
				} else if (devip.toString().match(/1\.25/gim)){
					div.style.top = "60px"
					div.style.marginLeft = "30px"
					div.style.fontSize = "250%"
				} else {
					div.style.top = "50px"
					div.style.fontSize = "200%"
				}
				// div.style.textAlign = "center"
				div.style.color = "#fff"

				const divflo = document.createElement("div")
				divflo.classList.add("divflomes")
				divflo.style.display = "flex"
				divflo.style.webkitDisplay = "flex";
				divflo.style.MozDisplay = "flex";
				divflo.style.msDisplay = "flex";
				divflo.style.oDisplay = "flex";

				divflo.style.zIndex = "-50"
				divflo.style.webkitzIndex = "-50";
				divflo.style.MozzIndex = "-50";
				divflo.style.mszIndex = "-50";
				divflo.style.ozIndex = "-50";

				// divflo.style.width = "340px"
				// divflo.style.wordWrap = "break-wordW"
				div.appendChild(divflo)

				let expression = "Gestiona tu economía como todo un experto!"
				expression = expression.split("")
				let count = -1
				let inter = setInterval(()=>{
					count += 1
					if (count < expression.length){
						divflo.innerHTML += expression[count]
					} else {
						clearInterval(inter)
					}
				}, 90)


				destiny.appendChild(div)
			}

			// publici("body")

		</script>

			
	</div>
</div>
