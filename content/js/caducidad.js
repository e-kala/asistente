


let ifClick = false

document.body.onpointerdown = e => ifClick = true


document.body.onload = e => {
	let interval_30, interval_60, time_config;
	let [start, isPaused] = [false, false]

	if (!start){
		if (alma_config !== undefined){		
			if (alma_config[1].caducidad !== undefined && alma_config[1].caducidad !== null){ //Uso de caducidad segun configuracion 
				//60000 equivale al valor del minuto
				time_config = alma_config[1].caducidad * 60000 //Conversion al formato de js, de segundos
				
				start = true //Primer arranque automático junto a la carga de la configuracion
				//Solo empieza a ejecutarse el intérvalo al iniciar sesión
				if (document.getElementsByClassName("fot")[0] !== undefined && document.getElementsByClassName("fot")[0] !== null){
					if (time_config !== "" && time_config !== null && time_config !== undefined){ //Solo si la caducidad esta programada / definida arranca el intervalo
						interval_30 = setInterval( () => {
							$.post("content/php/inactividad.php", 
								{
									state:"cerrar"
								}
							).done( data => { 	
								if (!isPaused){ //Procesa los datos una vez antes de volver a llamar un cuadro emergente de nuevo
								
									isPaused = true //Mantener pausa para no llamar mas de una vez una ventana emergente habiendo una existente con su cuenta regresiva
									let valor = JSON.parse(data) //Convertir datos recibidos en formato JSON, a objeto utilizable en javascript
									if (valor.estado == "cerrar") { //Si la respuesta es cerrar
										mensaje_caducar("?action=cerrar_sesion") //Abrir ventana emergente cancelable, con cuenta regresiva de 60seg 
									}
								}
							});
						}, time_config)//30 min 1800000
					}
				} else {
					//Solo si no hay una sesion activa, se cancela todo el funcionamiento de la caducidad
					clearInterval(interval_30)
				}
			} 
		}

	}
}




function mensaje_caducar(action){

	if (alma_config[1].caducidad !== "" && alma_config[1].caducidad !== null && alma_config[1].caducidad !== undefined){
		let cuenta_regresiva = 60;
		interval_60 = setInterval(()=> {
			if (cuenta_regresiva > 0){ //Mientras sea mayor que 0, restar 1 a cuenta_regresiva
				cuenta_regresiva -= 1
				alertify.alert()
				  .setting({
				  	'title' : "Mensaje",
				    'label':'Mantener abierta sesion',
				    'message': `Su sesión expirará en ${cuenta_regresiva} segundos`,
				    'onok': () => {
				    	isPaused = false
				    	ifClick = false
				    	clearInterval(interval_60)
				    }
				    
				  }).show()
			} else {
				//Acabada la cuenta de los 60 se detiene el intervalo, se cierra el cuadro emergente y finalmente se cierra la sesion
				if (document.getElementsByClassName("ajs-button ajs-ok")[0] !== undefined && document.getElementsByClassName("ajs-button ajs-ok")[0] !== null){
		    		document.getElementsByClassName("ajs-button ajs-ok")[0].click()
		    	}
		    	clearInterval(interval_60)
		    	window.location.href = action //Cerrar sesión
			}
		}, 1000)
	}
} 