
let interval;

//Solo empieza a ejecutarse el intérvalo al iniciar sesión
if (document.getElementsByClassName("fot")[0] !== undefined && document.getElementsByClassName("fot")[0] !== null){
	interval = setInterval( () => {
		$.post("content/php/inactividad.php", 
			{
				state:"cerrar"
			}
		).done( data => {
			// console.log(data)
			let valor = JSON.parse(data);
			console.log(valor);
			
			if (valor.estado=="cerrar") {
				console.log("estado cerrar sesion");
				window.location.href = "?action=cerrar_sesion"
				// window.location.reload();
			}
		});
	}, 1800000)//30 min 1800000
} else {
	clearInterval(interval)
}

/*cada vez que actualiza js
 *el contador de tiempo
 de php se reinicia

 hacer que aunque el js se
 actualice el tiempo siga
 su curso normal

funcion session_start iniciada
*/
