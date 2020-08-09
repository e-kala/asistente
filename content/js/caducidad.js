
setInterval(function(){
			//console.log("comienza conteo");
	$.ajax("content/php/inactividad.php").done(function(data){
			var valor = JSON.parse(data);
			console.log(valor);
			//console.log(valor.estado);
			
			if (valor.estado=="cerrar") {
				console.log("estado cerrar sesion");
				window.location.reload();
			}
		});
}, 1800000)//30 min

/*cada vez que actualiza js
 *el contador de tiempo
 de php se reinicia

 hacer que aunque el js se
 actualice el tiempo siga
 su curso normal

funcion session_start iniciada
*/
