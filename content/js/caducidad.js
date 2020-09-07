


let ifClick = false
let isPaused = false //Esto no estaba definido, fue el unico cambio

document.body.onpointerdown = function(e){
	ifClick = true
}

document.body.onload = function(e){
	let interval_30, interval_60, time_config;
	let start = false
	let advice_to_continue_interval = false

	if (!start){
		if (alma_config !== undefined){		
			if (alma_config[1].caducidad !== undefined && alma_config[1].caducidad !== null){ //Uso de caducidad segun configuracion 
				//60000 equivale al valor del minuto
				time_config = alma_config[1].caducidad * 60000 //Conversion al formato de js, de segundos
				
				start = true //Primer arranque automático junto a la carga de la configuracion inicial
				//Solo empieza a ejecutarse el intérvalo al iniciar sesión
				if (document.getElementsByClassName("fot")[0] !== undefined && document.getElementsByClassName("fot")[0] !== null){
					if (time_config !== "" && time_config !== null && time_config !== undefined){ //Solo si la caducidad esta programada / definida arranca el intervalo
						function alerta(){
							$.post("content/php/inactividad.php", 
								{
									state:"cerrar"
								}
							).done( function(data){ 	
								console.log("shococoococo", isPaused)
								if (!isPaused){ //Procesa los datos una vez antes de volver a llamar un cuadro emergente de nuevo	
									isPaused = true //Mantener pausa para no llamar mas de una vez una ventana emergente habiendo una existente con su cuenta regresiva
									let valor = JSON.parse(data) //Convertir datos recibidos en formato JSON, a objeto utilizable en javascript
									if (valor.estado == "cerrar") { //Si la respuesta es cerrar
										mensaje_caducar("?action=cerrar_sesion") //Abrir ventana emergente cancelable, con cuenta regresiva de 60seg 
									}
								}
							});
						}
						setTimeout(function(){
							advice_to_continue_interval = true
							alerta()
						}, time_config)

						function timealert(){
							if (advice_to_continue_interval){
								alerta()
							}
							interval_30 = setTimeout(timealert, time_config)//30 min 1800000
						}
						timealert()
					}
				} else {
					//Solo si no hay una sesion activa, se cancela todo el funcionamiento de la caducidad
					try{
						clearTimeout(interval_30)
					} catch(_){
						
					}
				}
			} 
		}
	}
}





function mensaje_caducar(action){

	if (alma_config[1].caducidad !== "" && alma_config[1].caducidad !== null && alma_config[1].caducidad !== undefined){
		let cuenta_regresiva = 60;
		interval_60 = setInterval( function(){
			if (cuenta_regresiva > 0){ //Mientras sea mayor que 0, restar 1 a cuenta_regresiva
				cuenta_regresiva -= 1
				alertify.alert()
				  .setting({
				  	'title' : "Mensaje",
				    'label':'Mantener abierta sesion',
				    'message': `Su sesión expirará en ${cuenta_regresiva} segundos`,
				    'onok': function(){
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

