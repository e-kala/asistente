
<div class="panel-config container" align="center" style="display: none; min-height: 100vh;">
	

	<div class="card bguserconfigchange" align="center">
		<div class="card-header d-flex align-items-center align-content-center justify-content-between">
			<h4>Configuración</h4>
			<a class="btn btn-danger d-flex align-items-center align-content-center" href="index.php#?">Inicio</a>
		</div>
	
		<div class="card-body p-4 m-4" id="accordion">
			<!-- cuenta collapse -->
			<div class="card bg-transparent border-0">
				<div class="card-header bg-transparent d-flex justify-content-between align-items-center">
					<div class="btn btn-link btn-block font-weight-bold text-left fg-color-menu-option-configpanel" data-toggle="collapse"  href="#cuenta" role="button" aria-expanded="false" aria-controls="cuenta">Cuenta</div>
					<i class="fa fa-2x text-primary fa-user-circle ml-2" aria-hidden="true"></i>
				</div>
				<div class="card-body bg-transparent collapse show p-0 " data-parent="#accordion" id="cuenta">
					<div class="personal-data card bg-transparent border-0">
						<h4 class="m-4 pt-4 text-center">Cuenta</h4>
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
						<div>
						<div class="patternconfigupdatepass position-fixed" style="display: none;">
		                    <form id="formuppas">
		                    	<img class="float-left position-fixed" style="left:10px; top:15px;" src="./content/img/logoAsistentev0.6.2.png" width="50px;">
								<div class="text-center">
			                         <h5><label class="font-weight-bold text-center position-fixed label_state" id="label_state" style="bottom:50px; margin:auto; left:0; right: 0;">Clave</label></h5>
			                    </div>
		                    	<div class="p-4 mt-4 containput">
		                    		<input type="text" name="user" id="usuario" placeholder="Usuario o correo electrónico" class="rounded mt-4 border-0">
		                    	</div>
		                    	<div id="paroot" style="display: none;">
		                    		<div id="root">
									</div>
		                    	</div>
		                    </form>
							 <div class="m-auto bg-col" align="center">
				                 <button class="btn btn-primary registrarse-btn m-4 mt-0" value="Siguiente">Siguiente</button>
				                 <button class="btn btn-danger canceluppas m-4 mt-0" value="Siguiente">Cancelar</button>
				                     
				                 <button style="display:none;" class="btn btn-primary aceptartap m-1">Aceptar</button>
				            </div>

							<div class="init-wayses " align="left" style="left:0;">
					            <button  class="login-change-way   text-light font-weight-bold">Pan</button>
					        </div>
					        <button class="btn btn-danger m-2 cerrarupdpass float-right position-absolute" style="top:0; right:0;">
					        	X
					        </button>

						</div>
					 	<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
					  		Cambiar contraseña
						</button>


<!-- Modal 1 -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content modingresogasto">
      <div class="modal-header border-0">
        <h5 class="modal-title" id="exampleModalLabel">Cambio de contraseña</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      		¿Seguro que deseas cambiar tu contraseña?
      </div>
      <div class="modal-footer border-0">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button type="button" id="confirmchangepas" name="confirmchangepas" class="btn btn-primary" data-toggle="modal" data-dismiss="modal">Cambiar</button>
      </div>
    </div>
  </div>
</div>

				      	<script type="text/javascript" src="./content/js/patron.js"></script>
					 	<script type="text/javascript" src="./content/js/manager_patron.js"></script>

						<script type="text/javascript">
						   Pattmo("root", managerPassword({
							style : {
								bg : "blue",
								br: "0%"
							},

							login : { //Esto será información solicitada del servidor pero para dar el ejemplo pongo yo los datos directos 
								user : "Pepito",
								password : "dabehifc", 
							},

							use_data_from_db : true,

							signUp : true,

							components : {
								userPage : "userPageMain.html", //Página a la que se accederá luego del login
								errorPage : "tryexcess.html" //Página de error, con opciones de ayuda, etc., esta saldrá cuando se alcance el máximo de intentos permitidos
							},

							config_dev : { //Para el desarrollador
								letters : false, //Quitar o poner letras 
								showPassword : false // Mostrar password
							}
						}))

						   let count_try_for_signup = 0
						   let ver_pass = {}
						   let confirmchangepas = document.getElementById("confirmchangepas")
						   confirmchangepas.onclick = function(){
						   		document.getElementsByClassName("patternconfigupdatepass")[0].style.display = "block"
						   }
						   document.getElementsByClassName("cerrarupdpass")[0].onclick = function(){
						   		document.getElementsByClassName("patternconfigupdatepass")[0].style.display = "none"
						   }
						   document.getElementsByClassName("canceluppas")[0].onclick = function(){
						   		document.getElementsByClassName("patternconfigupdatepass")[0].style.display = "none"
						   		let div = document.getElementsByClassName("box-rounded")
	                            for (let x=0; x < 9; x++){
	                                if (div[x] !== undefined){
	                                    div[x].style.background = "#fff"
	                                }
	                            }
	                            count_try_for_signup = 0
                                ver_pass= {}
                                pass = ""
						   }
						   document.getElementsByClassName("patternconfigupdatepass")[0].ondblclick	 = function(){
						   		document.getElementsByClassName("patternconfigupdatepass")[0].style.display = "none"
						   }
						   const btn_registrarse = document.getElementsByClassName("registrarse-btn")[0]
						   let usuario = document.getElementById("usuario")

						   function aplyaction(){
						   	let paroot = document.getElementById("paroot")
						   		if (usuario.value !== "" && usuario.value === window.config[0].usuario){
						   			document.getElementById("label_state").innerHTML = "Clave"
						   			document.getElementById("label_state").animate([{opacity:0},{opacity:1}],{duration:400, itearations:1})
						   			document.getElementById("label_state").style.color = "white"
							   		paroot.style.display = "flex"
							   		usuario.style.display = "none"

							   		document.getElementsByClassName("containput")[0].style.display = "none"
							   		import_data_signup({ //Send email and username to the pattern for post + password
				                        usuario : document.getElementById("usuario").value
				                    })
				                    window.scrollTo(0,0)
						   		} else {
						   			document.getElementById("label_state").innerHTML = "* Usuario no corresponde con la cuenta"
						   			document.getElementById("label_state").animate([{opacity:0},{opacity:1}],{duration:400, itearations:1})
						   			document.getElementById("label_state").style.color = "red"
						   		}
						   }
						   document.getElementById("formuppas").onsubmit = function(e){
						   		e.preventDefault()
						   		aplyaction()
						   		if (document.getElementById("usuario").value !== "" && document.getElementById("usuario").value === window.config[0].usuario){
						   			btn_registrarse.style.display = "none"
						   		}
						   }
						   if (btn_registrarse !== undefined){
						   	btn_registrarse.onclick = function(){
						   		aplyaction()
						   		if (document.getElementById("usuario").value !== "" && document.getElementById("usuario").value === window.config[0].usuario){
						   			btn_registrarse.style.display = "none"
						   		}
						   	}
						   	document.getElementsByClassName("aceptartap")[0].onclick = function(){
						   		let div = document.getElementsByClassName("box-rounded")
	                            for (let x=0; x < 9; x++){
	                                if (div[x] !== undefined){
	                                    div[x].style.background = "#fff"
	                                }
	                            }
	                            count_try_for_signup += 1
	                            //first_char_pass actua como pass completa
	                            if (count_try_for_signup === 1){
	                                ver_pass.first_char_pass1 = first_char_pass
	                                document.getElementsByClassName("label_state")[0].style.color = "white"
	                                document.getElementById("label_state").animate([{opacity:0},{opacity:1}],{duration:400, itearations:1})
	                                document.getElementsByClassName("label_state")[0].innerHTML ="* Repita password por favor"
	                            } else if (count_try_for_signup === 2){
	                                ver_pass.first_char_pass2 = first_char_pass
	                            }
	                            
	                            if (count_try_for_signup === 2){
	                                if (ver_pass.first_char_pass1 === ver_pass.first_char_pass2 && ver_pass.first_char_pass1 !== ""){

	                                    console.log(ver_pass,"kk")

	                                    $.post( "./content/php/usr/update_pass.php", {usuario: document.getElementById("usuario").value, pass: ver_pass.first_char_pass1})
	                                      .done( dat => {
	                                        console.log(dat)
	                                        if (dat !== undefined && dat !== "undefined"){
	                                            if (dat.match(/\<success\>/gim)){
	                                               
	                                             document.getElementById("label_state").style.color = "#fff"
									  		let countefect = -1;
									  		let pal = "Procesando...".split("")
									  		document.getElementById("label_state").innerHTML = ""
									  		document.getElementById("label_state").animate([{opacity:0},{opacity:1}],{duration:400, itearations:1})
									  		let inter = setInterval(function(){
									  			countefect += 1
									  			if (countefect < pal.length){

									  				document.getElementById("label_state").innerHTML += pal[countefect]
									  			} else {
									  				clearInterval(inter)
									  			}
									  		}, 70)
										  		if (document.getElementsByClassName("label_state")[0] !== null && document.getElementsByClassName("label_state")[0] !== undefined){

										  			document.getElementsByClassName("label_state")[0].style.color = "#fff"
										  		}
										  		setTimeout(function(){
													window.location.reload(false)
										  		},2200)
												boolMouseOver = false
												tryNumber = 0

	                                            }
	                                        }
	                                        bfixAnActiveInput = false
	                                      });
	                                } else {
	                                    document.getElementsByClassName("label_state")[0].style.color = "red"
	                                    document.getElementsByClassName("label_state")[0].innerHTML ="* Error de coincidencia"
	                                    console.log(ver_pass, count_try_for_signup,"...")
	                                    count_try_for_signup = 0
	                                    ver_pass= {}
	                                    pass = ""
	                                    // first_char_pass = ""
	                                }
	                            }  else if (count_try_for_signup === 3){
	                                count_try_for_signup = 0
	                                ver_pass= {}
	                                pass = ""
	                            }
	                            first_char_pass = ""
	                            pass = ""
						   	}
						   }
						   </script>
					</div>
				</div>
			</div>
		</div>

			<!-- asistente pj collapse -->
			<div class="card bg-transparent border-0">
				<div class="card-header bg-transparent d-flex justify-content-between align-items-center">
					<div class="btn btn-link btn-block font-weight-bold text-left fg-color-menu-option-configpanel" data-toggle="collapse"  href="#asistente" role="button" aria-expanded="false" aria-controls="asistente">Asistente</div>
					<i class="fa fa-2x text-primary fa-smile-o ml-2" aria-hidden="true"></i>
				</div>
				<div class="card-body bg-transparent collapse p-0 " data-parent="#accordion" id="asistente">
					<div class="personal-data card bg-transparent border-0 pb-4">
						<h4 class="m-4 pt-4 text-center">Cambiar personaje</h4>
						<div class="container-pj d-flex justify-content-center flex-wrap">
							<div class="conj_pj d-flex flex-column xiang">
								<label class="p-2 m-2 badge"> Xiang </label>
								<img id="pjxiang" src="./content/img/iconos/facehappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer; background: #f2f2f2;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="p-2 m-2 badge"> Zump </label>
								<img id="pjzump" src="./content/img/iconos/zumphappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="p-2 m-2 badge"> Voot </label>
								<img id="pjvoot" src="./content/img/iconos/voothappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="p-2 m-2 badge"> Alird </label>
								<img id="pjalird" src="./content/img/iconos/alirdhappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Buer <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjbuer" src="./content/img/iconos/bauhappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Mosaich <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjmosaich" src="./content/img/iconos/mosaichappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Panwit <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjpanwit" src="./content/img/iconos/panwithappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Yuno <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjyuno" src="./content/img/iconos/yunohappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Mary <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjmary" src="./content/img/iconos/maryhappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Toni <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjplutoni" src="./content/img/iconos/plutonihappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Raw <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjraw" src="./content/img/iconos/rawhappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Simga <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjsimga" src="./content/img/iconos/simgahappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Bromo <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjbromo" src="./content/img/iconos/bromohappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Vurb <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjvurb" src="./content/img/iconos/vurbhappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Palie <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjpalie" src="./content/img/iconos/paliehappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Jaino <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjjaino" src="./content/img/iconos/jainohappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Komobit <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjkomobit" src="./content/img/iconos/komobithappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Pacmin <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjpacman" src="./content/img/iconos/pacmanhappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Dyn <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjdyn" src="./content/img/iconos/dynhappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
							<div class="conj_pj d-flex flex-column buer">
								<label class="badge labelbadgepremi  badge-pill bg-transparent border border-warning p-2 font-weight-bold m-2"> Grenmo <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i> </label>
								<img id="pjgrenmo" src="./content/img/iconos/grenmohappy.gif" class="pj m-1 mt-0" style="border-radius: 100%; cursor:pointer;" width="100px" height="100px">
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Interfaz hidden elements and more collapse -->
			<div class="card bg-transparent border-0">
				<div class="card-header bg-transparent d-flex justify-content-between align-items-center">
					<div class="btn btn-link btn-block font-weight-bold text-left fg-color-menu-option-configpanel" data-toggle="collapse"  href="#interfaz" role="button" aria-expanded="false" aria-controls="interfaz">Interfaz</div>
					<i class="fa fa-2x text-primary fa-th-large ml-2" aria-hidden="true"></i>
				</div>
				<div class="card-body bg-transparent collapse p-0 " data-parent="#accordion" id="interfaz">
					<h4 class="m-4 pt-4 mb-0 text-center">Mostrar elementos</h4>
					<div class="hidden_elements d-flex flex-wrap justify-content-center pl-4 pr-4 pt-0 pb-0">
						<div class="d-flex justify-content-center align-items-center p-3 pt-0 align-content-center m-2"><label class="mr-3">Panel izquierdo</label><div class="check_aside check" name="panelizquierdo">_</div></div>
						
						<div class="d-flex justify-content-center align-items-center p-3 pt-0 align-content-center m-2"><label class="mr-3">Personaje</label><div class="check_pj check" name="personaje">_</div></div>
					</div>
				</div>
			</div>


			<!-- balance filtro collapse -->
			<div class="card bg-transparent border-0">
				<div class="card-header bg-transparent d-flex justify-content-between align-items-center">
					<div class="btn btn-link btn-block font-weight-bold text-left fg-color-menu-option-configpanel" data-toggle="collapse" data-parent="#accordion"  href="#balancetime" role="button" aria-expanded="false" aria-controls="balancetime">Filtro de balances</div>
					<i class="fa fa-2x text-primary fa-filter ml-2" aria-hidden="true"></i>
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
				<div class="card-header bg-transparent d-flex justify-content-between align-items-center">
					<div class="btn btn-link btn-block font-weight-bold text-left fg-color-menu-option-configpanel" data-toggle="collapse" data-parent="#accordion"  href="#apariencia" role="button" aria-expanded="false" aria-controls="apariencia">Apariencia</div>
					<i class="fa fa-2x text-primary fa-picture-o ml-2" aria-hidden="true"></i>
				</div>
				<div class="card-body bg-transparent collapse p-0 " data-parent="#accordion" id="apariencia">
					<div class="apariencia pb-4 card bg-transparent border-0 d-flex flex-column">
						<h4 class="m-4 pt-4 text-center"> Personalizar estilo </h4>
						<div class="d-flex flex-wrap justify-content-center transparencia-div">
							<h4 class="m-4 pl-4 text-center"> Transparencia <i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i></h4>
							<input class="flex-grow-1 ml-4 mr-4" min="0" max="1" type="range" name="slide_transparency" step="0.1" id="slide_transparency" style="cursor:pointer;">
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
								<img src="./content/img/fondos/2/15.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/2/6.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/2/9.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
								<img src="./content/img/fondos/2/10.png" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="300px" height="180px">
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

								if ($handle = opendir("content/usuarios/".$_SESSION['user']."/img/")) {
									$count = 0;
									while (false !== ($file = readdir($handle))) {
										$count += 1;
										if ($file !== "." && $file !== ".." && $file !=="..."){
											echo '<img src="./content/usuarios/'.$_SESSION['user']."/img/".$file.'" class="m-2 p-2 imgdefa " style="border: 2px solid #dbdbdb; border-radius: 14px;" width="250px">';
										}

									}
									
									closedir($handle);
								}
									
								?>
							</div>
						</div>
						<div class="p-3 loadimagecl position-relative" style="overflow: hidden;">
							<i class="fa fa-2x text-primary fa-star ml-2 text-warning" aria-hidden="true" title="Premium"></i>
							<input type="file" id="loadimage" value="jeje" placeholder="jeje" name="loadimage">
						</div>
					</div>
				</div>
			</div>

			<!-- Sesion collapse -->
			<div class="card bg-transparent border-0">
				<div class="card-header bg-transparent d-flex justify-content-between align-items-center">
					<div class="btn btn-link btn-block font-weight-bold text-left fg-color-menu-option-configpanel" data-toggle="collapse" data-parent="#accordion"  href="#sesion" role="button" aria-expanded="false" aria-controls="sesion">Sesión</div>
					<i class="fa fa-2x text-primary fa-clock-o ml-2" aria-hidden="true"></i>
				</div>
				<div class="card-body bg-transparent collapse p-0 " data-parent="#accordion" id="sesion">
					<div class="sesion_time_caducidad pb-4 pt-4 card bg-transparent border-0">
						<h4 class="pt-4 pb-4">Cierre de sesión automático</h4>
						<label>Tiempo Minimo 5min - Max 1 hora</label>
						<div class="d-flex flex-wrap p-2 align-content-center align-items-center">
							<input type="range" id="caducidad-slide" min="5" max="60">
							<span id="value_caducidad" class="ml-3">5</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Encuesta socioeconomica basica collapse -->
			<div class="card bg-transparent border-0">
				<div class="card-header bg-transparent d-flex justify-content-between align-items-center">
					<div class="btn btn-link btn-block font-weight-bold text-left fg-color-menu-option-configpanel" data-toggle="collapse" data-parent="#accordion"  href="#encuesta" role="button" aria-expanded="false" aria-controls="encuesta">Encuesta</div>
					<i class="fa fa-2x text-primary fa-money ml-2" aria-hidden="true"></i>
				</div>
				<div class="card-body bg-transparent collapse p-0 " data-parent="#accordion" id="encuesta">
					<div class="encuesta_time_caducidad pb-4 pt-4 card bg-transparent border-0">
						<h5 class="pt-4 pb-4 alert alert-info text-primary">Proporciona datos ajustados a tu situación actual para garantizar que tu asistente te ofrezca los mejores resultados</h5>
						<div class="d-flex flex-wrap p-2 align-content-center justify-content-center align-items-center">
							<span class=" pb-4 m-3">Ingreso mensual mínimo para las necesidades: $</span>
							<input type="number" value="1000" name="ingremin" id="ingremin">
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

