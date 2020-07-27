
<div class="m-4 panel-config" align="center" style="display: none;">
	<div class="card bguserconfigchange" style="width: 80%;" align="center">
		<div class="card-header d-flex align-items-center align-content-center justify-content-between">
			<h4>Configuración</h4>
			<a class="btn btn-danger d-flex align-items-center align-content-center" href="index.php">Inicio</a>
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

			<div class="cambiar-fondos border mt-2">
				<h4 class="m-4 text-center"> Cambiar fondo </h4>
				<div class="d-flex  justify-content-center flex-wrap">
					<img src="./content/img/fondos/0.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
					<img src="./content/img/fondos/1.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
					<img src="./content/img/fondos/2.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
					<img src="./content/img/fondos/3.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
					<img src="./content/img/fondos/4.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
					<img src="./content/img/fondos/5.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
					<img src="./content/img/fondos/6.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
					<img src="./content/img/fondos/7.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
					<img src="./content/img/fondos/8.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
					<img src="./content/img/fondos/9.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
					<img src="./content/img/fondos/10.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
					<img src="./content/img/fondos/11.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
					<img src="./content/img/fondos/12.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
					<img src="./content/img/fondos/13.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
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


<script type="text/javascript">
	let [time, bg] = ["hour", ""]

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
			src = src.match(/\w+\.(png|jpg|gif)/gim).toString()
			bg = src

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



</script>