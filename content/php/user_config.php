
<div class="panel-config container" align="center" style="display: none; min-height: 100vh;">
	

	<div class="card bguserconfigchange" align="center">
		<div class="card-header d-flex align-items-center align-content-center justify-content-between">
			<h4>Configuración</h4>
			<a class="btn btn-danger d-flex align-items-center align-content-center" href="index.php#?">Inicio</a>
		</div>
	
		<div class="card-body p-4 m-4" id="accordion">
			<!-- cuenta collapse -->
			<div class="card bg-transparent border-0">
				<div class="card-header bg-transparent">
					<div class="btn btn-link btn-block font-weight-bold text-left fg-color-menu-option-configpanel" data-toggle="collapse"  href="#cuenta" role="button" aria-expanded="false" aria-controls="cuenta">Cuenta</div>
				</div>
				<div class="card-body bg-transparent collapse show p-0 " data-parent="#accordion" id="cuenta">
					<div class="personal-data card bg-transparent border-0">
						<h4 class="m-4 text-center">Cuenta</h4>
						<div class="datosph p-2 mb-4  d-flex justify-content-center align-content-center align-items-center flex-wrap">
							<div class="dattx d-flex flex-column justify-content-start">
								<span>
									<h4 class="font-weight-bold">Nombre de usuario:</h4><span class="p-2 m-2" id="type_name_config"></span>
								</span>
								<br>
								<span>
									<h4 class="font-weight-bold">Correo electrónico:</h4> <span class="p-2 m-2" id="type_email_config"></span>
								</span>
							</div>
							<div id="patte">
								<h4 class="mt-4 mb-0 pb-0">Contraseña</h4>
							</div>
							<script type="text/javascript" src="./content/js/pattern_imitate.js"></script>
						</div>
					</div>
				</div>
			</div>


			<!-- balance filtro collapse -->
			<div class="card bg-transparent border-0">
				<div class="card-header bg-transparent">
					<div class="btn btn-link btn-block font-weight-bold text-left fg-color-menu-option-configpanel" data-toggle="collapse" data-parent="#accordion"  href="#balancetime" role="button" aria-expanded="false" aria-controls="balancetime">Filtro de balances</div>
				</div>
				<div class="card-body bg-transparent collapse p-0 " data-parent="#accordion" id="balancetime">
					<div class="time-mostrar-balance pb-4 card bg-transparent border-0">
						<h4 class="m-4 pt-4 text-center"> Tiempo de actualización de balances </h4>
						<h4 class="mb-3 ml-4 mt-4 text-center"> Recomendados </h4>
						<div class="m-4 d-flex flex-wrap justify-content-between">
							<div class="m-2 flex-grow-1 font-weight-bold timedefbalc" align="center"><div class="ml-2 btn btn-info flex-grow-1" name="1">1 semana</div></div>
							<div class="m-2 flex-grow-1 font-weight-bold timedefbalc" align="center"><div class="ml-2 btn btn-info flex-grow-1" name="2">2 semanas</div></div>
							<div class="m-2 flex-grow-1 font-weight-bold timedefbalc" align="center"><div class="ml-2 btn btn-info flex-grow-1" name="3">3 semanas</div></div>
							<div class="m-2 flex-grow-1 font-weight-bold timedefbalc" align="center"><div class="ml-2 btn btn-info flex-grow-1" name="4">1 mes</div></div>
							<div class="m-2 flex-grow-1 font-weight-bold timedefbalc" align="center"><div class="ml-2 btn btn-info flex-grow-1" name="5">2 meses</div></div>
						</div>
						<div class="d-flex justify-content-center flex-wrap align-items-center align-content-center" align="center" >
							<h4 class="m-4 text-center">Personalizar:</h4>
							<div class="m-4 mt-0" align="center">
								<span class="mr-3 font-weight-bold">Obtener balances desde</span>
								<input type="date" class="databalanc" name="data_balanc_custom">
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- estilo collapse  -->
			<div class="card bg-transparent border-0">
				<div class="card-header bg-transparent">
					<div class="btn btn-link btn-block font-weight-bold text-left fg-color-menu-option-configpanel" data-toggle="collapse" data-parent="#accordion"  href="#apariencia" role="button" aria-expanded="false" aria-controls="apariencia">Apariencia</div>
				</div>
				<div class="card-body bg-transparent collapse p-0 " data-parent="#accordion" id="apariencia">
					<div class="apariencia pb-4 card bg-transparent border-0 d-flex flex-column">
						<h4 class="m-4 pt-4 text-center"> Personalizar estilo </h4>
						<div class="d-flex flex-wrap justify-content-center">
							<h4 class="m-4 pl-4 text-center"> Transparencia </h4>
							<input class="flex-grow-1 ml-4 mr-4" min="0" max="1" type="range" name="slide_transparency" step="0.1" id="slide_transparency">
							<span id="value_slide_transparency" class="p-4 mr-4"></span>
						</div>
						<h4 class="m-4 text-center"> Cambiar fondo </h4>
						<div class="menu_folder_conjunts_images">
							<button id="show_1" class="btn btn-light m-2" >Ada</button>
							<button id="show_2" class="btn btn-light m-2" >Ataxar</button>
							<button id="show_3" class="btn btn-light m-2" >Planos</button>
							<button id="show_myphothos" class="btn btn-light m-2" >Mis imágenes</button>
						</div>
						<!-- left -->
						<div class="d-flex justify-content-center position-relative" style="position: relative;">
							<button class="btn btn-secondary font-weight-bold p-3 float-left leftimg"><</button> <!--left-->
							<button class="btn btn-secondary font-weight-bold p-3 float-right rightimg">></button> <!--Right-->

							<!-- 1 -->
							<div class="conjunt_images m-4 p-4" style="display: flex; flex-wrap: nowrap; flex-direction: row; height: 290px; overflow: auto; ">
								<img src="./content/img/fondos/1/2.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/1/3.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/1/4.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/1/5.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/1/6.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/1/7.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/1/8.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/1/9.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/1/10.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/1/11.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/1/12.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/1/13.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/1/14.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/1/15.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/1/16.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
							</div>

							<!-- 2 -->
							<div class="conjunt_images m-4 p-4 " style="display: none; flex-wrap: nowrap; flex-direction: row; height: 300px; overflow: auto; ">
								<img src="./content/img/fondos/2/6.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/2/4.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/2/2.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/2/3.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								
								<img src="./content/img/fondos/2/5.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								
								<img src="./content/img/fondos/2/7.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/2/8.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								
								<img src="./content/img/fondos/2/0.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/2/1.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/2/14.gif" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
							</div>

							<!-- Planos 2, folder 3 --> 
							<div class="conjunt_images m-4 p-4 " style="display: none; flex-wrap: nowrap; flex-direction: row; height: 300px; overflow: auto; ">
								<img src="./content/img/fondos/3/10.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/3/11.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/3/12.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/3/13.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/3/0.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/3/1.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/3/2.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/3/3.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/3/4.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/3/5.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/3/6.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/3/7.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/3/8.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/3/9.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/3/14.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
							</div>
							<!-- Mis imagenes -->
							<div class="conjunt_images m-4 p-4 " style="display: none; flex-wrap: nowrap; flex-direction: row; height: 300px; overflow: auto; ">
								<?php

								if ($handle = opendir($_SERVER['DOCUMENT_ROOT'] . "/asistente/content/usuarios/".$_SESSION['user']."/img/")) {
									$count = 0;
									while (false !== ($file = readdir($handle))) {
										$count += 1;
										if ($count > 2){
											echo '<img src="./content/usuarios/'.$_SESSION['user']."/img/".$file.'" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="250px">';
										}

									}
									
									closedir($handle);
								}
									
								?>
							</div>
						</div>
						<div class="p-3 loadimagecl position-relative" style="overflow: hidden;">
							<input type="file" id="loadimage" value="jeje" placeholder="jeje" name="loadimage">
						</div>
					</div>
				</div>
			</div>

			<!-- Sesion collapse -->
			<div class="card bg-transparent border-0">
				<div class="card-header bg-transparent">
					<div class="btn btn-link btn-block font-weight-bold text-left fg-color-menu-option-configpanel" data-toggle="collapse" data-parent="#accordion"  href="#sesion" role="button" aria-expanded="false" aria-controls="sesion">Sesión</div>
				</div>
				<div class="card-body bg-transparent collapse p-0 " data-parent="#accordion" id="sesion">
					<div class="sesion_time_caducidad pb-4 pt-4 card bg-transparent border-0">
						<h4>Cierre de sesión automático</h4>
						<label>Minimo 5min - Max 1 hora</label>
						<div class="d-flex flex-wrap p-2 align-content-center align-items-center">
							<input type="range" id="caducidad-slide" min="5" max="60">
							<span id="value_caducidad" class="ml-3">5</span>
						</div>
					</div>
				</div>
			</div>
		</div>


		<div class="card-footer text-right">
			<button class="btn btn-success" id="save-changes-config">
				Guardar cambios
			</button>
		</div>
	</div>
</div>


<script type="text/javascript" src="./content/js/windows/usr_config_panel.js"></script>

