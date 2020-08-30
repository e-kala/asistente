
<div class=" inicio-container">
	<div>
		<div class="container-fluid header_inicio ">
			<div class="row">
				<div class="headerinit col-md-9 ">
					<img src="./content/img/logoAsistentev0.6.2.png" width="50px" height="50px" class="p-2">
					<span class="loinan">Asistente Bonsai</span>
				</div>
				<!-- <div class=" text-center state_init_mainpage_label">
					<h2>Iniciar Sesión</h2>
				</div> -->
				<div class="panel-log-reg m-0 col-md-3 d-flex align-items-center justify-content-center flex-wrap">
					<a class="border rounded btn-link p-1 text-light flex-grow-1 m-1 login-btn" role="button" href="#">Iniciar Sesión</a>
					<a class=" rounded border-warning btn-link p-1 font-weight-bold text-light flex-grow-1 m-1 registro-btn" href="?action=registro" role="button" style="background: linear-gradient(to top, #FFEA12,#92882B);"  data-container="body" data-toggle="popover" data-placement="bottom" data-content="¡Empieza ahora aquí!">Registrarse </a>
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
						<h4 class="text-center p-4 text-dark">Datos estadísticos personalizables acerca de tus gastos e ingresos</h4>
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

				$(function () {
				  $('[data-toggle="popover"]').popover("show")
				})
		</script>
			
	</div>
</div>
