
<div class=" inicio-container">
	<div>
		<div class="header_inicio">
			<div class="headerinit">
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
			<div class="panel-log-reg">
				<a class="btn btn-light float-right login-btn" role="button">Iniciar Sesión</a>
				<a class="btn btn-light mr-2 float-right registro-btn" href="?action=registro" role="button">Registrarse</a>
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
		<script type="text/javascript">
				const login_btn = document.getElementsByClassName("login-btn")[0]
				const logpan = document.getElementById("logpan")
				logpan.style.zIndex = "20"
				login_btn.onclick = () => {
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
				div.classList.add("divmestype")
				div.style.left = "0"
				div.style.order = "0"
				div.style.top = "200px"
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
				divflo.style.zIndex = "-50"
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

			publici("body")

			function getDevicePixelRatio() {
			    var mediaQuery;
			    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
			    if (window.devicePixelRatio !== undefined && !is_firefox) {
			        return window.devicePixelRatio;
			    } else if (window.matchMedia) {
			        mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
			          (min--moz-device-pixel-ratio: 1.5),\
			          (-o-min-device-pixel-ratio: 3/2),\
			          (min-resolution: 1.5dppx)";
			        if (window.matchMedia(mediaQuery).matches) {
			            return 1.5;
			        }
			        mediaQuery = "(-webkit-min-device-pixel-ratio: 2),\
			          (min--moz-device-pixel-ratio: 2),\
			          (-o-min-device-pixel-ratio: 2/1),\
			          (min-resolution: 2dppx)";
			        if (window.matchMedia(mediaQuery).matches) {
			            return 2;
			        }
			        mediaQuery = "(-webkit-min-device-pixel-ratio: 0.75),\
			          (min--moz-device-pixel-ratio: 0.75),\
			          (-o-min-device-pixel-ratio: 3/4),\
			          (min-resolution: 0.75dppx)";
			        if (window.matchMedia(mediaQuery).matches) {
			            return 0.7;
			        }
			    } else {
			        return 1;
			    }
			}

		</script>

			
	</div>
</div>
