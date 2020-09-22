//La variable Almastore esta originalmente definida en show_more_less_registros

function SelectionMultiple(){
	//lectura de caja de ingresos
	const tbodyingresos = document.getElementById("tbody-ingresos")
	const childsingresos = tbodyingresos.children

	//Lectura de caja de gastos
	const tbodygastos = document.getElementById("tbody-gastos")
	const childsgastos = tbodygastos.children

	//Botton alternante
	const selectionmultiple_btn = document.getElementById("selectionmultiple")
	
	//Boton pintar 
	const selectionmultiplepintar_btn = document.getElementById("selectionmultiplepintar")
	
	let status_btn = false //activation selection tap
	let status_btn2 = false // activation selection pointermove

	function IngresTotal(){
		let totalIngres = 0
		Object.keys(almastore).map(function(ri){
			if (ri.match(/ingreso/gim)){
				totalIngres += 1
			}
		})
		return totalIngres
	}
	function GastosTotal(){
		let totalGasto = 0
		Object.keys(almastore).map(function(ri){
			if (ri.match(/gasto/gim)){
				totalGasto += 1
			}
		})
		return totalGasto
	}

	if (childsingresos.length > 0 || childsgastos.length > 0){
		selectionmultiple_btn.onpointerdown = function(){

			if (selectionmultiple_btn.getAttribute("stat") === "false"){
				status_btn = !status_btn

				if (status_btn){ //Conjuntos Seleccionados, modo seleccionar activo
					
					selectionmultiple_btn.innerHTML = 'Deseleccionar<i class="fa fa-hand-pointer-o ml-2" aria-hidden="true"></i>'
					selectionmultiple_btn.className = " opactionbutsel mb-2 btn btn-dark"
					//Seleccionar en ingresos
					for (let x = 0; x < childsingresos.length; x++){
						let bool_active_intra_ingresos = false //Select / deselect per item
						childsingresos[x].onclick = function(){
							bool_active_intra_ingresos = !bool_active_intra_ingresos
							if (bool_active_intra_ingresos){
								childsingresos[x].className = "text-center colorchange border text-warning font-italic badge-pill cursor-pointer hover-selector-one transition-ease-all ingresocontain"
								anidate(childsingresos[x], tbodyingresos.children[x].children[0].textContent, "ingreso")
								document.getElementById("delete-group").disabled = false
	            				document.getElementById("delete-group").setAttribute("stat", "false") 
								document.getElementById("seleccionadosi").innerHTML = " " + IngresTotal() +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
								document.getElementById("seleccionadosn").innerHTML = " " + Object.keys(almastore).length +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
							} else {
								childsingresos[x].className = "text-center colorchange cursor-pointer hover-selector-one transition-ease-all ingresocontain"
								let avdi_to_desanidate = false
								let identify = tbodyingresos.children[x].children[1].getAttribute("value") +"-ingreso-" + tbodyingresos.children[x].children[0].textContent
								Object.keys(almastore).find(function(e){
									if (e == identify){
										avdi_to_desanidate = true
									}
								})
								if (avdi_to_desanidate){
									desanidate(identify)
									document.getElementById("seleccionadosi").innerHTML = " " + IngresTotal() +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
									document.getElementById("seleccionadosn").innerHTML = " " + Object.keys(almastore).length +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
								}
							}
						}
					}
					//Selccionar en gastos
					for (let x = 0; x < childsgastos.length; x++){
						let bool_active_intra_gastos = false //Select / deselect per item
						// console.log(childsgastos[x])
						childsgastos[x].onclick = function(){
							bool_active_intra_gastos = !bool_active_intra_gastos
							if (bool_active_intra_gastos){
								childsgastos[x].className = "text-center colorchange border text-warning badge-pill cursor-pointer hover-selector-one transition-ease-all ingresocontain"
								anidate(childsgastos[x], tbodygastos.children[x].children[0].textContent, "gasto")
								document.getElementById("delete-group").disabled = false
	            				document.getElementById("delete-group").setAttribute("stat", "false") 
	            				document.getElementById("seleccionadosg").innerHTML = " " + GastosTotal() +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
	            				document.getElementById("seleccionadosn").innerHTML = " " + Object.keys(almastore).length +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
							} else {
								childsgastos[x].className = "text-center colorchange cursor-pointer hover-selector-one transition-ease-all ingresocontain"
								let avdi_to_desanidate = false
								let identify = tbodygastos.children[x].children[1].getAttribute("value") + "-gasto-" + tbodygastos.children[x].children[0].textContent
								Object.keys(almastore).find(function(e){
									if (e == identify){
										avdi_to_desanidate = true
									}
								})
								if (avdi_to_desanidate){
									desanidate(identify)
									document.getElementById("seleccionadosg").innerHTML = " " + GastosTotal() +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
									document.getElementById("seleccionadosn").innerHTML = " " + Object.keys(almastore).length +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
								}
							}
						}
					}
				} else {
					//Deseleccionar todo y renovar modo Seleccionar
					selectionmultiple_btn.innerHTML = 'Seleccionar elementos<i class="fa fa-hand-pointer-o ml-2" aria-hidden="true"></i>'
					selectionmultiple_btn.className = " btn mb-2 btn-light  opactionbutsel border"
					//Deseleccionar en ingresos
					for (let x = 0; x < childsingresos.length; x++){
						childsingresos[x].className = "text-center colorchange cursor-pointer hover-selector-one transition-ease-all ingresocontain"
						let avdi_to_desanidate = false
						let identify = tbodyingresos.children[x].children[1].getAttribute("value") +"-ingreso-" + tbodyingresos.children[x].children[0].textContent
						Object.keys(almastore).find(function(e){
							if (e == identify){
								avdi_to_desanidate = true
							}
						})
						if (avdi_to_desanidate){
							desanidate(identify)
						}
						bool_active_intra_ingresos = 0
						childsingresos[x].onclick = function(){ return false }
					}

					//Deseleccionar en gastos
					for (let x = 0; x < childsgastos.length; x++){
						childsgastos[x].className = "text-center colorchange cursor-pointer hover-selector-one transition-ease-all ingresocontain"
						let avdi_to_desanidate = false
						let identify = tbodygastos.children[x].children[1].getAttribute("value") + "-gasto-" + tbodygastos.children[x].children[0].textContent
						Object.keys(almastore).find(function(e){
							if (e == identify){
								avdi_to_desanidate = true
							}
						})
						if (avdi_to_desanidate){
							desanidate(identify)
						}
						bool_active_intra_gastos = 0
						childsgastos[x].onclick = function(){ return false }
					}

					//Si hay seleccionados se activan funciones para operar a los seleccionados
					if (Object.keys(childsingresos).length === 0 && Object.keys(childsgastos).length === 0){
						document.getElementById("delete-group").disabled = false
           	 			document.getElementById("delete-group").setAttribute("stat", "false") 
					}

					document.getElementById("seleccionadosg").innerHTML = " " + GastosTotal() +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
	            	document.getElementById("seleccionadosn").innerHTML = " " + Object.keys(almastore).length +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
	            	document.getElementById("seleccionadosi").innerHTML = " " + IngresTotal() +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
				}
			}
		}


		//Para herrcamienta pincel
		let downwindowpointerin = false
		let downwindowpointergas = false

		//Para activar modo deseleccionar
		let bool_active_intra_gastos = true
		let	bool_active_intra_ingresos = true
		window.onpointerdown = function(){
			downwindowpointerin = true 
			downwindowpointergas = true
			bool_active_intra_gastos = !bool_active_intra_gastos
			bool_active_intra_ingresos = !bool_active_intra_ingresos
		
		}
		window.onpointerup = function(){
			downwindowpointerin = false
			downwindowpointergas = false
			if (Object.keys(almastore).length === 0){
				bool_active_intra_gastos = false
				bool_active_intra_ingresos = false
			}
		}

		selectionmultiplepintar_btn.onpointerdown = function(){
			if (selectionmultiple_btn.getAttribute("stat") === "false"){

				status_btn2 = !status_btn2
				if (status_btn2){ //Conjuntos Seleccionados, modo seleccionar activo
					
					selectionmultiplepintar_btn.innerHTML = 'Despintar<i class="fa fa-paint-brush ml-2" aria-hidden="true"></i>'
					selectionmultiplepintar_btn.className = " opactionbutsel mb-2 btn btn-dark paint"

					//Seleccionar en ingresos

					for (let x = 0; x < childsingresos.length; x++){
						childsingresos[x].onpointermove = function(){
							if (bool_active_intra_ingresos){
								if (downwindowpointerin){
									childsingresos[x].ondragstart = function(){
										return false
									}
									childsingresos[x].className = "text-center user-select-none colorchange border text-warning font-italic badge-pill cursor-pointer hover-selector-one transition-ease-all ingresocontain"
									anidate(childsingresos[x], tbodyingresos.children[x].children[0].textContent, "ingreso")
									document.getElementById("delete-group").disabled = false
		            				document.getElementById("delete-group").setAttribute("stat", "false") 
		            				document.getElementById("seleccionadosi").innerHTML = " " + IngresTotal() +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
		            				document.getElementById("seleccionadosn").innerHTML = " " + Object.keys(almastore).length +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
		            			} 
							} else {
								if (downwindowpointerin){
									childsingresos[x].ondragstart = function(){
										return false
									}
									childsingresos[x].className = "text-center user-select-none colorchange cursor-pointer hover-selector-one transition-ease-all ingresocontain"
									let avdi_to_desanidate = false
									let identify = tbodyingresos.children[x].children[1].getAttribute("value") +"-ingreso-" + tbodyingresos.children[x].children[0].textContent
									Object.keys(almastore).find(function(e){
										if (e == identify){
											avdi_to_desanidate = true
										}
									})
									if (avdi_to_desanidate){
										desanidate(identify)
										document.getElementById("seleccionadosi").innerHTML = " " + IngresTotal() +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
										document.getElementById("seleccionadosn").innerHTML = " " + Object.keys(almastore).length +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
									}
								} 
							}
						
						}
					}

					//Seleccionar en gastos
					for (let x = 0; x < childsgastos.length; x++){
						// console.log(childsgastos[x])
						childsgastos[x].onpointermove = function(){
							if (bool_active_intra_gastos){
								if (downwindowpointerin){
									childsgastos[x].ondragstart = function(){
										return false
									}
									childsgastos[x].className = "text-center user-select-none colorchange border text-warning badge-pill cursor-pointer hover-selector-one transition-ease-all ingresocontain"
									anidate(childsgastos[x], tbodygastos.children[x].children[0].textContent, "gasto")
									document.getElementById("delete-group").disabled = false
		            				document.getElementById("delete-group").setAttribute("stat", "false") 
		            				document.getElementById("seleccionadosg").innerHTML = " " + GastosTotal() +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
		            				document.getElementById("seleccionadosn").innerHTML = " " + Object.keys(almastore).length +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
		            			}
							} else {
								if (downwindowpointerin){
									childsgastos[x].ondragstart = function(){
										return false
									}
									childsgastos[x].className = "text-center user-select-none colorchange cursor-pointer hover-selector-one transition-ease-all gastocontain"
									let avdi_to_desanidate = false
									let identify = tbodygastos.children[x].children[1].getAttribute("value") + "-gasto-" + tbodygastos.children[x].children[0].textContent
									Object.keys(almastore).find(function(e){
										if (e == identify){
											avdi_to_desanidate = true
										}
									})
									if (avdi_to_desanidate){
										desanidate(identify)
										document.getElementById("seleccionadosg").innerHTML = " " + GastosTotal() +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
										document.getElementById("seleccionadosn").innerHTML = " " + Object.keys(almastore).length +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
									}
								}
							}
							
						}
					}
				} else {
					selectionmultiplepintar_btn.innerHTML = 'Pintar<i class="fa fa-paint-brush ml-2" aria-hidden="true"></i>'
					selectionmultiplepintar_btn.className = " btn mb-2 alert-info opactionbutsel border paint"
					//Deseleccionar en ingresos
					for (let x = 0; x < childsingresos.length; x++){
						childsingresos[x].className = "text-center user-select-none colorchange cursor-pointer hover-selector-one transition-ease-all ingresocontain"
						let avdi_to_desanidate = false
						let identify = tbodyingresos.children[x].children[1].getAttribute("value") +"-ingreso-" + tbodyingresos.children[x].children[0].textContent
						Object.keys(almastore).find(function(e){
							if (e == identify){
								avdi_to_desanidate = true
							}
						})
						if (avdi_to_desanidate){
							desanidate(identify)
						}
						childsingresos[x].onpointermove = function(){}
					}

					//Deseleccionar en gastos
					for (let x = 0; x < childsgastos.length; x++){
						childsgastos[x].className = "text-center user-select-none colorchange cursor-pointer hover-selector-one transition-ease-all ingresocontain"
						let avdi_to_desanidate = false
						let identify = tbodygastos.children[x].children[1].getAttribute("value") + "-gasto-" + tbodygastos.children[x].children[0].textContent
						Object.keys(almastore).find(function(e){
							if (e == identify){
								avdi_to_desanidate = true
							}
						})
						if (avdi_to_desanidate){
							desanidate(identify)
						}
						childsgastos[x].onpointermove = function(){}
				
					}

					//Si hay seleccionados se activan funciones para operar a los seleccionados
					if (Object.keys(childsingresos).length === 0 && Object.keys(childsgastos).length === 0){
						document.getElementById("delete-group").disabled = false
           	 			document.getElementById("delete-group").setAttribute("stat", "false") 
					}
					document.getElementById("seleccionadosg").innerHTML = " " + GastosTotal() +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
	            	document.getElementById("seleccionadosn").innerHTML = " " + Object.keys(almastore).length +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
	            	document.getElementById("seleccionadosi").innerHTML = " " + IngresTotal() +'<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i>'
				}
			}
		}
	} 

	if (childsingresos.length === 0 && childsgastos.length === 0){
		selectionmultiplepintar_btn.disabled = true
		selectionmultiplepintar_btn.setAttribute("stat","true")
		selectionmultiple_btn.disabled = true
		selectionmultiple_btn.setAttribute("stat", "true")
	}

	//anidar elementos del conjunto a enviar
	function anidate(groupChilds, fila, type){
		let object = {}
		if (Object.keys(almastore).length > 0){
			object["id"] = groupChilds.children[1].getAttribute("value")
			object["nombre"] = groupChilds.children[2].getAttribute("value")
			object["descripcion"] = groupChilds.children[3].getAttribute("value")
			object["cuenta"] = groupChilds.children[4].getAttribute("value")
			object["fecha"] = groupChilds.children[5].getAttribute("value")
			object["cantidad"] = groupChilds.children[6].getAttribute("value").replace(/(\$|\s)/gm, "")
		} else {
			//Primer ingreso
			object["id"] = groupChilds.children[1].getAttribute("value")
			object["nombre"] = groupChilds.children[2].getAttribute("value")
			object["descripcion"] = groupChilds.children[3].getAttribute("value")
			object["cuenta"] = groupChilds.children[4].getAttribute("value")
			object["fecha"] = groupChilds.children[5].getAttribute("value")
			object["cantidad"] = groupChilds.children[6].getAttribute("value").replace(/(\$|\s)/gm, "")
		}
	
		if (Object.keys(object).length > 0){
			almastore[groupChilds.children[1].getAttribute("value").replace(/\s/gim,"") + "-"+type+"-" + fila] = object
		}
	
		console.log(almastore)
	}

	//Desanidar / eliminar elementos del conjunto a enviar
	function desanidate(identify){
		delete almastore[identify]
		//Deshablitar funciones que dependen de items seleccionados, si el conjounto a enviar esta vacio
		if (Object.keys(almastore).length === 0){
			document.getElementById("delete-group").disabled = true
            document.getElementById("delete-group").setAttribute("stat", "true") 
		}
		console.log(almastore)
	}
}

//Almacena el conjunto de selecciones y/o anidaciones, un objeto de objetos
SelectionMultiple()

function sendDataPost(object, action){
	let data = {
		groups: object,
		action: action,
		usuario: window.config[0].usuario
	}
	$.post("./content/php/usr/update_data_registros_selecction_multiple.php", data).done(function(e){
		console.log(e)
		if (e.match(/(\<delete\-success\-gastos\>|\<delete\-success\-ingresos\>)/gim)){
			window.location.reload(false)
		}
	})
}

function removeDataGroup(){
	const btn_remove = document.getElementById("delete-group")
	btn_remove.onpointerdown = function(){
		if (btn_remove.getAttribute("stat") === "false"){
			alertify.confirm("",
			  function(){
			  	//Aceptar
				if (Object.keys(almastore).length > 0){
					sendDataPost(almastore, "remove")
				}
			  },
			  function(){
			  	//Cancelar
			  }).setting({
			  	'title' : 'Confirmación',
			    'label':'Eliminar',
			    'message': `
			    <div class="text-center">
			    	<div class="font-weight-bold p-2">
			    		¿Está seguro que desea eliminar los elementos seleccionados?
			    	</div>
			    	<div class="alert alert-danger mt-2">Esta acción eliminará para siempre los registros seleccionados<i class="fa fa-exclamation-triangle ml-2" aria-hidden="true"></i></div>
			    </div>
			    `
			  }).show()
		}
	}

	//Definir acciones, eliminar, etc. y procesarlas a los elementos de la seleccion multiple
}
removeDataGroup()

// function vermas(msg, title){
// 	alertify.alert()
// 	  .setting({
// 	  	'title' : title,
// 	    'label':'Cerrar',
// 	    'message': "<div class='p-4 bg-light rounded text-center d-flex text-wrap overflow'>"+ msg +"</div>",
// 	    'onok': function(){
// 	    }
// 	  }).show()
// }


function Gastos(){
	const tbodyGastos = document.getElementById("tbody-gastos")
	const childsGastos = tbodyGastos.children

	//Cuando la descripcion sea muy larga en algun renglon de gastos pues poner boton de Ver
	// for (let x = 0; x < childsGastos.length; x++){
	// 	for (let r = 0; r < tbodyGastos.children[x].children.length; r++){
	// 		let element = tbodyGastos.children[x].children[3].getAttribute("value")
	// 		let title_element = tbodyGastos.children[x].children[2].getAttribute("value")
	// 		if (element.split("").length > 20){
	// 			tbodyGastos.children[x].children[3].innerHTML =`<button class="btn badge-pill bg-secondary text-light" onclick="vermas('${element}','${title_element}')">Ver</button>`
	// 		}
	// 		console.log(element,"disis")
	// 	}
	// }

	let gastosInfoOriginal = {} //Almacenar Datos originales
	let gastosInfoActual = {} //Almacenar datos originales editables y/o editados
	let inputs_l = {}
	let _active_edition_btn = 0
	let once = false
	let selection = 0
	let status = "" //Estado de acción
	//Obtener lista de lineas en Gastos y leer los hijos

	if (childsGastos.length > 0){
		for (let x = 0; x < childsGastos.length; x++){
			let subChildGastos = childsGastos[x].children.length
			const formGastoNumber = document.getElementById("fg"+(x+1))

			childsGastos[x].onpointerdown = function(){
				_active_edition_btn = x

				if (status !== "edicion" || document.getElementsByClassName("inputCategoria")[0] !== undefined){
					formGastoNumber.style.display = ""
					// console.log(gastosInfoActual)
				} 

				if (status === "edicion" && _active_edition_btn !== selection){
					formGastoNumber.style.display = "none"
				}
			
				
				for (let u = 0; u < childsGastos.length; u++){
					if (u !== x){ //Ocultar los no seleccionados
						document.getElementById("fg"+(u+1)).style.display = "none"
					} 
				}
			}

			//botones de editar de cada linea de la seccion de gastos iterada
			formGastoNumber.onpointerdown = function(e){
				const fggaico = document.getElementsByClassName("fggaico")
				let fila = +(e.target.getAttribute("id").replace("fg","")) - 1
				selection = fila
				let count = -1
				console.log(tbodyGastos.children[fila].children[1].getAttribute("value"))
						
				function iter(){
					for (let y = 0; y < 7; y++){
						count += 1
					// if (e.target.getAttribute("title") === "Editar"){
						if (formGastoNumber.style.display !== "none" && fila === _active_edition_btn){
							gastosInfoActual["id"] = tbodyGastos.children[fila].children[1].getAttribute("value")
							gastosInfoActual["nombre"] = childsGastos[fila].children[2].getAttribute("value")
							gastosInfoActual["descripcion"] = childsGastos[fila].children[3].getAttribute("value")
							gastosInfoActual["cuenta"] = childsGastos[fila].children[4].getAttribute("value")
							gastosInfoActual["fecha"] = childsGastos[fila].children[5].getAttribute("value")
							gastosInfoActual["cantidad"] = childsGastos[fila].children[6].getAttribute("value").replace(/(\$|\s)/gm, "")

							if (!once){
								once = true
								gastosInfoOriginal["id"] = tbodyGastos.children[fila].children[1].getAttribute("value")
								gastosInfoOriginal["nombre"] = childsGastos[fila].children[2].getAttribute("value")
								gastosInfoOriginal["descripcion"] = childsGastos[fila].children[3].getAttribute("value")
								gastosInfoOriginal["cuenta"] = childsGastos[fila].children[4].getAttribute("value")
								gastosInfoOriginal["fecha"] = childsGastos[fila].children[5].getAttribute("value")
								gastosInfoOriginal["cantidad"] = childsGastos[fila].children[6].getAttribute("value").replace(/(\$|\s)/gm, "")
							}
						}
					}
				}
				iter()
				if (e.target.getAttribute("title") === "Guardar" && formGastoNumber.style.display !== "none"){
					//Este es el guardado de los datos
					if (formGastoNumber.style.display !== "none"){
						returnTextNonEdit(fila, formGastoNumber, childsGastos[fila])
						// console.log(gastosInfoActual, "1")
						e.target.setAttribute("title", "Editar")
						e.target.className = "fa fa-pencil p-1 badge-pill cursor-pointer btn btn-warning text-light"
					}
				} else {
					//Este es el modo edicion
					//Activar boton de guardar
					if (formGastoNumber.style.display !== "none"){
						changeGUI(fila,e.target.getAttribute("title"))
						console.log(gastosInfoActual, "2")
						e.target.setAttribute("title", "Guardar")
						e.target.className = "fa fa-check-circle p-1 badge-pill cursor-pointer btn btn-success text-light"
					}
				}	
			}
		}
	}

	function returnTextNonEdit(fila, btnchan, filahtml){ //Guardadoy
		// btnchan.style.display = "none"
		status = "guardado"
		let categoria_gasto = document.getElementsByClassName("categoria_gasto")[fila]
		let descripcion_gasto = document.getElementsByClassName("descripcion_gasto")[fila]
		let cuenta_gasto = document.getElementsByClassName("cuenta_gasto")[fila]
		let fecha_gasto = document.getElementsByClassName("fecha_gasto")[fila]
		let cantidad_gasto = document.getElementsByClassName("cantidad_gasto")[fila]

		gastosInfoActual.nombre = inputs_l["categoria_gasto"].value
		gastosInfoActual.descripcion = inputs_l["descripcion_gasto"].value
		gastosInfoActual.cuenta = inputs_l["cuenta_gasto"].value
		gastosInfoActual.fecha = inputs_l["fecha_gasto"].value
		gastosInfoActual.cantidad = inputs_l["cantidad_gasto"].value

		
		//Reemplazo
		function reemplazar(object){
			categoria_gasto.innerHTML = object.nombre
			categoria_gasto.setAttribute("value", object.nombre)

			descripcion_gasto.innerHTML = object.descripcion
			descripcion_gasto.setAttribute("value", object.descripcion)

			cuenta_gasto.innerHTML = object.cuenta
			cuenta_gasto.setAttribute("value", object.cuenta)

			fecha_gasto.innerHTML = object.fecha
			fecha_gasto.setAttribute("value", object.fecha)

			cantidad_gasto.innerHTML = "$" + object.cantidad
			cantidad_gasto.setAttribute("value","$ "+ object.cantidad)


			let categories = [categoria_gasto, descripcion_gasto,cuenta_gasto,fecha_gasto,cantidad_gasto]
			// console.log(gastosInfoActual, categories)
			categories.map(function(e){
				e.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
			})

			object.id = ""
			object.nombre = ""
			object.descripcion = ""
			object.cuenta = ""
			object.fecha = ""
			object.cantidad = ""

			gastosInfoActual.id = ""

			inputs_l["categoria_gasto"] = ""
			inputs_l["descripcion_gasto"] = ""
			inputs_l["cuenta_gasto"] = ""
			inputs_l["fecha_gasto"] = ""
			inputs_l["cantidad_gasto"] = ""
			once = false
		}

		update_data_in_db(gastosInfoActual, gastosInfoOriginal, reemplazar, fila, filahtml)


	}

	function changeGUI(fila){
		status = "edicion"
		let categoria_gasto = document.getElementsByClassName("categoria_gasto")[fila]
		let descripcion_gasto = document.getElementsByClassName("descripcion_gasto")[fila]
		let cuenta_gasto = document.getElementsByClassName("cuenta_gasto")[fila]
		let fecha_gasto = document.getElementsByClassName("fecha_gasto")[fila]
		let cantidad_gasto = document.getElementsByClassName("cantidad_gasto")[fila]

		const inputCategoria = document.createElement("input")
		inputCategoria.setAttribute("id", "inputCategoria")
		inputCategoria.className = " inputCategoria w-100 text-center bg-transparent font-italic color-cyan  font-weight-bold badge-pill outline-none border-0"
		inputCategoria.setAttribute("type", "text")
		inputCategoria.value = gastosInfoActual.nombre

		const inputDescripcion = document.createElement("input")
		inputDescripcion.setAttribute("id", "inputDescripcion")
		inputDescripcion.className = " inputDescripcion w-100 text-center bg-transparent font-italic color-cyan  font-weight-bold badge-pill outline-none border-0"
		inputDescripcion.setAttribute("type", "text")
		inputDescripcion.value = gastosInfoActual.descripcion

		const inputCuenta = document.createElement("input")
		inputCuenta.setAttribute("id", "inputCuenta")
		inputCuenta.className = " inputCuenta w-100 text-center bg-transparent font-italic color-cyan  font-weight-bold badge-pill outline-none border-0"
		inputCuenta.setAttribute("type", "text")
		inputCuenta.value = gastosInfoActual.cuenta

		const inputFecha = document.createElement("input")
		inputFecha.setAttribute("id", "inputFecha")
		inputFecha.className = " inputFecha w-100 text-center bg-transparent font-italic color-cyan  font-weight-bold badge-pill outline-none border-0"
		inputFecha.setAttribute("type", "date")
		inputFecha.value = gastosInfoActual.fecha

		const inputCantidad = document.createElement("input")
		inputCantidad.setAttribute("id","inputCantidad")
		inputCantidad.className = " inputCantidad w-100 text-center bg-transparent font-italic color-cyan  font-weight-bold badge-pill outline-none border-0"
		inputCantidad.setAttribute("type", "text")
		inputCantidad.value = gastosInfoActual.cantidad
		

		let inputs = [inputCategoria, inputDescripcion, inputCuenta, inputFecha, inputCantidad]
		inputs.map(function(e){
			e.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
		})

		inputs_l["categoria_gasto"] = inputCategoria
		inputs_l["descripcion_gasto"] = inputDescripcion
		inputs_l["cuenta_gasto"] = inputCuenta
		inputs_l["fecha_gasto"] = inputFecha
		inputs_l["cantidad_gasto"] = inputCantidad
		
		//Reemplazo
		categoria_gasto.innerHTML = ""
		categoria_gasto.appendChild(inputCategoria)
		setTimeout(function(){
			//Focus por defecto en prmer campo
			inputCategoria.focus()
		},100)
		
		descripcion_gasto.innerHTML = ""
		descripcion_gasto.appendChild(inputDescripcion)
		
		cuenta_gasto.innerHTML = ""
		cuenta_gasto.appendChild(inputCuenta)
		
		fecha_gasto.innerHTML = ""
		fecha_gasto.appendChild(inputFecha)
		
		cantidad_gasto.innerHTML = ""
		cantidad_gasto.appendChild(inputCantidad)

	}

	function update_data_in_db(new_data, data_original, reemplazar, fila, filahtml){
		if (Object.keys(new_data).length !== 0 && Object.keys(data_original).length !== 0){
			//Cinfo

			console.log(data_original, "WOOOOOOOOOOOOOOOOOOOON")
			let datos = {
				original : data_original,
				reemplazo : new_data,
				usuario : window.config[0].usuario
			}

			$.post("./content/php/usr/update_data_registros_gastos.php", datos).done(function(e){
				console.log(e)
				if (e.match(/\<Success\>/gim)){
					//Se reemplaza con datos nuevos a reemplazar
					reemplazar(gastosInfoActual)
				} else {	
					$.notify("Ha habido un error interno", "error");
					filahtml.animate([{
						opacity:0,
						color:"transparent"
					},{
						opacity:1,
						color:"red"
					}],{duration:400, iterations:1})
					//Se dejan los datos originales de haber un error
					reemplazar(data_original)
				}
			})
		}
	}
}

function Ingresos(){
	const tbodyingresos = document.getElementById("tbody-ingresos")
	const childsingresos = tbodyingresos.children
	let ingresosInfoOriginal = {} //Almacenar Datos originales
	let ingresosInfoActual = {} //Almacenar datos originales editables y/o editados
	let inputs_l = {}
	let _active_edition_btn = 0
	let once = false
	let selection = 0
	let status = "" //Estado de acción
	//Obtener lista de lineas en ingresos y leer los hijos

	if (childsingresos.length > 0){
		for (let x = 0; x < childsingresos.length; x++){
			let subChildingresos = childsingresos[x].children.length
			const formIngresoNumber = document.getElementById("fgin"+(x+1))

			childsingresos[x].onpointerdown = function(){
				_active_edition_btn = x

				if (status !== "edicion" || document.getElementsByClassName("inputCategoria")[0] !== undefined){
					formIngresoNumber.style.display = ""
					// console.log(ingresosInfoActual)
				} 

				if (status === "edicion" && _active_edition_btn !== selection){
					formIngresoNumber.style.display = "none"
				}
			
				
				for (let u = 0; u < childsingresos.length; u++){
					if (u !== x){ //Ocultar los no seleccionados
						document.getElementById("fgin"+(u+1)).style.display = "none"
					} 
				}
			}

			//botones de editar de cada linea de la seccion de ingresos iterada
			formIngresoNumber.onpointerdown = function(e){
				let fila = +(e.target.getAttribute("id").replace("fgin","")) - 1
				selection = fila
				function iter(){
					for (let y = 0; y < 7; y++){
					// if (e.target.getAttribute("title") === "Editar"){
						ingresosInfoActual["id"] = tbodyingresos.children[x].children[1].getAttribute("value")
						ingresosInfoActual["nombre"] = childsingresos[fila].children[2].getAttribute("value")
						ingresosInfoActual["descripcion"] = childsingresos[fila].children[3].getAttribute("value")
						ingresosInfoActual["cuenta"] = childsingresos[fila].children[4].getAttribute("value")
						ingresosInfoActual["fecha"] = childsingresos[fila].children[5].getAttribute("value")
						ingresosInfoActual["cantidad"] = childsingresos[fila].children[6].getAttribute("value").replace(/(\$|\s)/gm, "")

						if (!once){
							once = true
							ingresosInfoOriginal["id"] = tbodyingresos.children[fila].children[1].getAttribute("value")
							ingresosInfoOriginal["nombre"] = childsingresos[fila].children[2].getAttribute("value")
							ingresosInfoOriginal["descripcion"] = childsingresos[fila].children[3].getAttribute("value")
							ingresosInfoOriginal["cuenta"] = childsingresos[fila].children[4].getAttribute("value")
							ingresosInfoOriginal["fecha"] = childsingresos[fila].children[5].getAttribute("value")
							ingresosInfoOriginal["cantidad"] = childsingresos[fila].children[6].getAttribute("value").replace(/(\$|\s)/gm, "")
						}
					}

					
				}


				iter()
				if (e.target.getAttribute("title") === "Guardar"){
					//Este es el guardado de los datos
					if (formIngresoNumber.style.display !== "none"){
						returnTextNonEdit(fila, formIngresoNumber, childsingresos[fila])
						e.target.setAttribute("title", "Editar")
						e.target.className = "fa fa-pencil p-1 badge-pill cursor-pointer btn btn-warning text-light"
					}
				} else {
					//Este es el modo edicion
					//Activar boton de guardar
					if (formIngresoNumber.style.display !== "none"){
						changeGUI(fila,e.target.getAttribute("title"))
						e.target.setAttribute("title", "Guardar")
						e.target.className = "fa fa-check-circle p-1 badge-pill cursor-pointer btn btn-success text-light"
					}
				}	
			}
		}
	}

	function returnTextNonEdit(fila, btnchan, filahtml){ //Guardadoy
		// btnchan.style.display = "none"
		status = "guardado"
		let categoria_ingreso = document.getElementsByClassName("categoria_ingreso")[fila]
		let descripcion_ingreso = document.getElementsByClassName("descripcion_ingreso")[fila]
		let cuenta_ingreso = document.getElementsByClassName("cuenta_ingreso")[fila]
		let fecha_ingreso = document.getElementsByClassName("fecha_ingreso")[fila]
		let cantidad_ingreso = document.getElementsByClassName("cantidad_ingreso")[fila]

		ingresosInfoActual.nombre = inputs_l["categoria_ingreso"].value
		ingresosInfoActual.descripcion = inputs_l["descripcion_ingreso"].value
		ingresosInfoActual.cuenta = inputs_l["cuenta_ingreso"].value
		ingresosInfoActual.fecha = inputs_l["fecha_ingreso"].value
		ingresosInfoActual.cantidad = inputs_l["cantidad_ingreso"].value

		
		//Reemplazo
		function reemplazar(object){
			categoria_ingreso.innerHTML = object.nombre
			categoria_ingreso.setAttribute("value", object.nombre)

			descripcion_ingreso.innerHTML = object.descripcion
			descripcion_ingreso.setAttribute("value", object.descripcion)

			cuenta_ingreso.innerHTML = object.cuenta
			cuenta_ingreso.setAttribute("value", object.cuenta)

			fecha_ingreso.innerHTML = object.fecha
			fecha_ingreso.setAttribute("value", object.fecha)

			cantidad_ingreso.innerHTML = "$" + object.cantidad
			cantidad_ingreso.setAttribute("value","$ "+ object.cantidad)


			let categories = [categoria_ingreso, descripcion_ingreso,cuenta_ingreso,fecha_ingreso,cantidad_ingreso]
			// console.log(ingresosInfoActual, categories)
			categories.map(function(e){
				e.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
			})

			object.id = ""
			object.nombre = ""
			object.descripcion = ""
			object.cuenta = ""
			object.fecha = ""
			object.cantidad = ""

			ingresosInfoActual.id = ""

			inputs_l["categoria_ingreso"] = ""
			inputs_l["descripcion_ingreso"] = ""
			inputs_l["cuenta_ingreso"] = ""
			inputs_l["fecha_ingreso"] = ""
			inputs_l["cantidad_ingreso"] = ""
			once = false
		}

		update_data_in_db(ingresosInfoActual, ingresosInfoOriginal, reemplazar, fila, filahtml)

	}

	function changeGUI(fila){
		status = "edicion"
		let categoria_ingreso = document.getElementsByClassName("categoria_ingreso")[fila]
		let descripcion_ingreso = document.getElementsByClassName("descripcion_ingreso")[fila]
		let cuenta_ingreso = document.getElementsByClassName("cuenta_ingreso")[fila]
		let fecha_ingreso = document.getElementsByClassName("fecha_ingreso")[fila]
		let cantidad_ingreso = document.getElementsByClassName("cantidad_ingreso")[fila]

		const inputCategoria = document.createElement("input")
		inputCategoria.setAttribute("id", "inputCategoria")
		inputCategoria.className = " inputCategoria w-100 text-center bg-transparent font-italic color-cyan  font-weight-bold badge-pill outline-none border-0"
		inputCategoria.setAttribute("type", "text")
		inputCategoria.value = ingresosInfoActual.nombre

		const inputDescripcion = document.createElement("input")
		inputDescripcion.setAttribute("id", "inputDescripcion")
		inputDescripcion.className = " inputDescripcion w-100 text-center bg-transparent font-italic color-cyan  font-weight-bold badge-pill outline-none border-0"
		inputDescripcion.setAttribute("type", "text")
		inputDescripcion.value = ingresosInfoActual.descripcion

		const inputCuenta = document.createElement("input")
		inputCuenta.setAttribute("id", "inputCuenta")
		inputCuenta.className = " inputCuenta w-100 text-center bg-transparent font-italic color-cyan  font-weight-bold badge-pill outline-none border-0"
		inputCuenta.setAttribute("type", "text")
		inputCuenta.value = ingresosInfoActual.cuenta

		const inputFecha = document.createElement("input")
		inputFecha.setAttribute("id", "inputFecha")
		inputFecha.className = " inputFecha w-100 text-center bg-transparent font-italic color-cyan  font-weight-bold badge-pill outline-none border-0"
		inputFecha.setAttribute("type", "date")
		inputFecha.value = ingresosInfoActual.fecha

		const inputCantidad = document.createElement("input")
		inputCantidad.setAttribute("id","inputCantidad")
		inputCantidad.className = " inputCantidad w-100 text-center bg-transparent font-italic color-cyan  font-weight-bold badge-pill outline-none border-0"
		inputCantidad.setAttribute("type", "text")
		inputCantidad.value = ingresosInfoActual.cantidad
		

		let inputs = [inputCategoria, inputDescripcion, inputCuenta, inputFecha, inputCantidad]
		inputs.map(function(e){
			e.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
		})

		inputs_l["categoria_ingreso"] = inputCategoria
		inputs_l["descripcion_ingreso"] = inputDescripcion
		inputs_l["cuenta_ingreso"] = inputCuenta
		inputs_l["fecha_ingreso"] = inputFecha
		inputs_l["cantidad_ingreso"] = inputCantidad
		
		//Reemplazo
		categoria_ingreso.innerHTML = ""
		categoria_ingreso.appendChild(inputCategoria)
		setTimeout(function(){
			//Focus por defecto en prmer campo
			inputCategoria.focus()
		},100)
		
		descripcion_ingreso.innerHTML = ""
		descripcion_ingreso.appendChild(inputDescripcion)
		
		cuenta_ingreso.innerHTML = ""
		cuenta_ingreso.appendChild(inputCuenta)
		
		fecha_ingreso.innerHTML = ""
		fecha_ingreso.appendChild(inputFecha)
		
		cantidad_ingreso.innerHTML = ""
		cantidad_ingreso.appendChild(inputCantidad)

	}

	function update_data_in_db(new_data, data_original, reemplazar, fila, filahtml){
		if (Object.keys(new_data).length !== 0 && Object.keys(data_original).length !== 0){
			//Cinfo


			let datos = {
				original : data_original,
				reemplazo : new_data,
				usuario : window.config[0].usuario
			}

			$.post("./content/php/usr/update_data_registros_ingresos.php", datos).done(function(e){
				
				if (e.match(/\<Success\>/gim)){
					//Se reemplaza con datos nuevos a reemplazar
					reemplazar(ingresosInfoActual)
				} else {	
					$.notify("Ha habido un error interno", "error");
					filahtml.animate([{
						opacity:0,
						color:"transparent"
					},{
						opacity:1,
						color:"red"
					}],{duration:400, iterations:1})
					//Se dejan los datos originales de haber un error
					reemplazar(data_original)
				}
			})
		}
	}
}



Gastos()
Ingresos()