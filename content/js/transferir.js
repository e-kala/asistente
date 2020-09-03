$(function(){
	document.getElementsByClassName("cuentaTransferencia")[0].onsubmit = function(e){
		return e.preventDefault()
	}

	let registrarTransferencia = document.getElementById("registrar_transferencia")
	registrarTransferencia.onpointerdown = function(e){
		let saldodisponible = document.getElementById("saldoDisponible").textContent.replace(/(\s|\$|\D|\:)/gim, "")
		console.log(saldodisponible, "mmmm")
		saldodisponible = saldodisponible !== "" ? parseInt(saldodisponible) : 0
		let de = document.getElementById("deCuentaTransferencia").value
		let a = document.getElementById("aCuentaTransferencia").value
		let cantidad = document.getElementById("cantidadTransferencia").value

		console.log(de, a , cantidad, saldodisponible)
		if (de !== "" && 
			a !== "" && de !== "Selecciona una cuenta" && a !== "Selecciona una cuenta" &&
			cantidad !== ""){
			if (saldodisponible > 0){
				$.post("./content/php/modulos/transferencias/transferir.php",{
					de:de,
					a:a,
					cantidad:cantidad
				}).done(function(response){
					console.log(response)
					if (response.match(/correcta/gim)){
						window.location.reload(false)
						registrarTransferencia.setAttribute("data-content", "<h5 class=' font-weight-bold text-success text-center'>Procesando...</h5>")
						$('[data-toggle="popovertrans"]').popover("show")
					} else if (response.match(/ERRORSQL/gim)){
						registrarTransferencia.setAttribute("data-content", "<h5 class=' font-weight-bold text-danger text-center'>Error al realizar la transferencia</h5>")
						$('[data-toggle="popovertrans"]').popover("show")
					} else {
						$('[data-toggle="popovertrans"]').popover("hide")
					}
				})
			}  else {
				registrarTransferencia.setAttribute("data-content", "<h5 class=' font-weight-bold text-danger text-center'>Saldo insuficiente</h5>")
				$('[data-toggle="popovertrans"]').popover("show")	
			}
		} else {
			registrarTransferencia.setAttribute("data-content", "<h5 class=' font-weight-bold text-danger text-center'>Faltan datos para realizar la transferencia</h5>")
			$('[data-toggle="popovertrans"]').popover("show")
		}
	
	}
})
