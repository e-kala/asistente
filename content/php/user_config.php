
<div class="m-4 panel-config" align="center" style="display: none;">
	<div class="card bguserconfigchange" style="width: 80%;" align="center">
		<div class="card-header d-flex align-items-center align-content-center justify-content-between">
			<h4>Configuración</h4>
			<a class="btn btn-danger d-flex align-items-center align-content-center" href="index.php#?">Inicio</a>
		</div>
		<div class="card-body p-4 m-4">
			<div class="time-mostrar-balance border">
				<h4 class="m-4 text-center"> Tiempo de actualización de balances </h4>
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

			<div class="cambiar-fondos/1 border mt-2">
				<h4 class="m-4 text-center"> Personalizar estilo </h4>
				<div class="d-flex">
					<h4 class="m-4 pl-4 text-center"> Transparencia </h4>
					<input class="flex-grow-1 ml-4 mr-4" min="0" max="1" type="range" name="slide_transparency" step="0.1" id="slide_transparency">
					<span id="value_slide_transparency" class="p-4 mr-4"></span>
				</div>
				<h4 class="m-4 text-center"> Cambiar fondo </h4>
				<div class="menu_folder_conjunts_images">
					<button id="show_1" class="btn btn-light " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Ada</button>
					<button id="show_2" class="btn btn-light " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Ataxar</button>
					<button id="show_3" class="btn btn-light " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Planos</button>
				</div>
				<!-- left -->
				<div class="d-flex justify-content-center position-relative" style="position: relative;">
					<button class="btn btn-secondary font-weight-bold p-3 float-left leftimg"><</button> <!--left-->
					<button class="btn btn-secondary font-weight-bold p-3 float-right rightimg">></button> <!--Right-->

					<!-- 1 -->
					<div class="conjunt_images m-4 p-4" id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample" style="display: none; flex-wrap: nowrap; flex-direction: row; height: 290px; overflow: auto; width:70%; ">
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
					<div class="conjunt_images m-4 p-4 " style="display: none; flex-wrap: nowrap; flex-direction: row; height: 300px; overflow: auto; width:70%; ">
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

					<!-- Planos 2 -->
					<div class="conjunt_images m-4 p-4 " style="display: none; flex-wrap: nowrap; flex-direction: row; height: 300px; overflow: auto; width:70%; ">
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
				</div>
				<div class="p-3">
					<input type="file" name="loadimage">
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