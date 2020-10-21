<?php
	
	// if (!isset($conectar)){
		$conectar = new conexion();
		$conexion = $conectar->conectar();
	
		if(isset($_SESSION['user'])){
			$usuario = $_SESSION['user'];
			$consulta_cnf = "SELECT * FROM usuarios WHERE nombre_usuario = '$usuario'";
			$cnf_result = $conexion->query($consulta_cnf);
			$fila = $cnf_result->fetch_object();
			$premioinactividad = $fila->usr_config;
			$json_config = json_decode($premioinactividad, true);

			$points = 0;
			if (isset($json_config["points"])){
				$points = $json_config["points"];
			} else {
				$points = 0;
			}

			if ($points >= 500){ //si se conecta por 50 dias
				//ganar nueva insignia
				$reservadepoderi = 1;
			} else {
				$reservadepoderi = 0;
			}

			if ($points >= 800){ //si se conecta por 80 dias
				//ganar nueva insignia
				$reservadepoderii = 1;
			} else {
				$reservadepoderii = 0;
			}

			if ($points >= 1000){ //si se conecta por 100 dias
				//ganar nueva insignia
				$sombreromagico = 1;
			} else {
				$sombreromagico = 0;
			}


			if (isset($json_config["premioinactividad"])){
				if ($json_config["premioinactividad"]){
					$premioinactividad = 1;
				} else {
					$premioinactividad = 0;
				}
			} else {
				$premioinactividad = 0;
			}

			if (isset($json_config["constanciasaludable"])){
				if ($json_config["constanciasaludable"]){
					$constanciasaludable = 1;
				} else {
					$constanciasaludable = 0;
				}
			} else {
				$constanciasaludable= 0;
			}

			if (isset($json_config["crecimientosuperior"])){
				if ($json_config["crecimientosuperior"]){
					$crecimientosuperior = 1;
				} else {
					$crecimientosuperior = 0;
				}
			} else {
				$crecimientosuperior = 0;
			}

			if (isset($json_config["crecimientoexponencial"])){
				if ($json_config["crecimientoexponencial"]){
					$crecimientoexponencial = 1;
				} else {
					$crecimientoexponencial = 0;
				}
			} else {
				$crecimientoexponencial = 0;
			}

			if (isset($json_config["huracandedinero"])){
				if ($json_config["huracandedinero"]){
					$huracandedinero = 1;
				} else {
					$huracandedinero = 0;
				}
			} else {
				$huracandedinero = 0;
			}

			if (isset($json_config["excelenciafinanciera"])){
				if ($json_config["excelenciafinanciera"]){
					$excelenciafinanciera = 1;
				} else {
					$excelenciafinanciera = 0;
				}
			} else {
				$excelenciafinanciera = 0;
			}

			if (isset($json_config["buenafortuna"])){
				if ($json_config["buenafortuna"]){
					$buenafortuna = 1;
				} else {
					$buenafortuna = 0;
				}
			} else {
				$buenafortuna = 0;
			}

			if (isset($json_config["gastadorjunior"])){
				if ($json_config["gastadorjunior"]){
					$gastadorjunior = 1;
				} else {
					$gastadorjunior = 0;
				}
			} else {
				$gastadorjunior = 0;
			}

			if (isset($json_config["gastadorsenior"])){
				if ($json_config["gastadorsenior"]){
					$gastadorsenior = 1;
				} else {
					$gastadorsenior = 0;
				}
			} else {
				$gastadorsenior = 0;
			}

			if (isset($json_config["gastadorcompulsivo"])){
				if ($json_config["gastadorcompulsivo"]){
					$gastadorcompulsivo = 1;
				} else {
					$gastadorcompulsivo = 0;
				}
			} else {
				$gastadorcompulsivo = 0;
			} 

			if (isset($json_config["elorganizador"])){
				if ($json_config["elorganizador"]){
					$elorganizador = 1;
				} else {
					$elorganizador = 0;
				}
			} else {
				$elorganizador = 0;
			} 

			if (isset($json_config["usuarioactivo"])){
				if ($json_config["usuarioactivo"]){
					$usuarioactivo = 1;
				} else {
					$usuarioactivo = 0;
				}
			} else {
				$usuarioactivo = 0;
			}
		} else {
			$conexion->close();
		}
	// }

?>

<div class="container containerinsilogr" style="display: none; min-height: 100vh;">
	<div class="row p-4 bgcorinsilogro ">
		<div class="p-4 col">
			<h3 class="pt-0 pb-4">Insignias <i class="fa fa-star ml-2 text-warning" aria-hidden="true"></i></h3>
			<div class="d-flex flex-wrap justify-content-center">
				<!-- Excelencia Financiera -->
				<?php
					//Si esta null se muestra bloqueo de lo contrario no
					// here lock
					if ($excelenciafinanciera != 1){?> 
						<div class="col-xs-12 col-md-4 mb-4">
							<div class="position-relative m-2    p-2 " >
								<img src="./content/img/insignias/excelenciafinanciera.png" class="bshadow   bg-dark bradius-100" width="150px" height="155px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Excelencia Financiera<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-premio-inactividad" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4 mb-4" style="order:-3;">
							<div class="position-relative m-2   p-2 "  align="center">
								<img src="./content/img/insignias/excelenciafinanciera.png" class=" animaunlockinsig bg-dark bradius-100 emerlegend" width="150px" height="155px" data-html="true"  data-container="body" data-toggle="popover" data-placement="bottom" data-content="<h5 class=' font-weight-bold text-success text-center'>¡Superación del 400% de tu meta de ingresos! <i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i></h5>" >
								<br>
								<div class="pt-4 pb-4 font-weight-bold rounded" style="" align="center">
									<span class=" rounded badge badge-primary">Excelencia Financiera <i class="fa fa-check-circle text-light" aria-hidden="true"></i></span>
								</div>
							</div>
						</div>
				<?php
					}
				?>
				<!-- Buena fortuna -->
				<?php
					//Si esta null se muestra bloqueo de lo contrario no
					if ($buenafortuna != 1){?>
						<div class="col-xs-12 col-md-4 mb-4">
							<div class="position-relative m-2    p-2 " >
								<img src="./content/img/insignias/buenafortuna.png" class="bshadow   bg-dark bradius-100" width="150px" height="155px">
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Buena Fortuna<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-buenafortuna" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4 mb-4" style="order:-3;">
							<div class="position-relative m-2   p-2 "  align="center">
								<img src="./content/img/insignias/buenafortuna.png" class=" animaunlockinsig bg-dark bradius-100 emerlegend" width="150px" height="155px" data-html="true"  data-container="body" data-toggle="popover" data-placement="bottom" data-content="<h5 class=' font-weight-bold text-success text-center'>¡Superación del 300% de tu meta de ingresos! <i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i></h5>" >
								<br>
								<div class="pt-4 pb-4 font-weight-bold rounded" style="" align="center">
									<span class=" rounded badge badge-primary">Buena Fortuna <i class="fa fa-check-circle text-light" aria-hidden="true"></i></span>
								</div>
								
							</div>
						</div>
				<?php
					}
				?>
				<!-- Constancias Saludable -->
				<?php
					//Si esta null se muestra bloqueo de lo contrario no
					if ($constanciasaludable != 1){?>
						<div class="col-xs-12 col-md-4 mb-4">
							<div class="position-relative m-2    p-2 " >
								<img src="./content/img/insignias/constanciasaludable.png" class="bshadow   bg-dark bradius-100" width="150px" height="155px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Constancia Saludable<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-constanciasaludable" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4 mb-4" style="order:-3;">
							<div class="position-relative m-2   p-2 "  align="center">
								<img src="./content/img/insignias/constanciasaludable.png" class=" animaunlockinsig bg-dark bradius-100 emerlegend" width="150px" height="155px" data-html="true"  data-container="body" data-toggle="popover" data-placement="bottom" data-content="<h5 class=' font-weight-bold text-success text-center'>¡Superación del 75% de tu meta de ingresos! <i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i></h5>" >
								<br>
								<div class="pt-4 pb-4 font-weight-bold rounded" style="" align="center">
									<span class=" rounded badge badge-primary">Constancia Saludable <i class="fa fa-check-circle text-light" aria-hidden="true"></i></span>
								</div>
								
							</div>
						</div>
				<?php
					}
				?>
				<!-- El organizador -->
				<?php
					//Si esta null se muestra bloqueo de lo contrario no
					if ($elorganizador != 1){?>
						<div class="col-xs-12 col-md-4 mb-4">
							<div class="position-relative m-2    p-2 " >
								<img src="./content/img/insignias/organizador.png" class="bshadow   bg-dark bradius-100" width="150px" height="155px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">El Organizador<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-organizador" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4 mb-4" style="order:-3;">
							<div class="position-relative m-2   p-2 "  align="center">
								<img src="./content/img/insignias/organizador.png" class=" animaunlockinsig bg-dark bradius-100 emerlegend" width="150px" height="155px" data-html="true"  data-container="body" data-toggle="popover" data-placement="bottom" data-content="<h5 class=' font-weight-bold text-success text-center'>¡Por estar pendiente de tu dinero y multiplicarlo! <i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i></h5>">
								<br>
								<div class="pt-4 pb-4 font-weight-bold rounded" style="" align="center">
									<span class=" rounded badge badge-primary">El Organizador <i class="fa fa-check-circle text-light" aria-hidden="true"></i></span>
								</div>
								
							</div>
						</div>
				<?php
					}
				?>
				<!-- Huracán de dinero -->
				<?php
					//Si esta null se muestra bloqueo de lo contrario no
					if ($huracandedinero != 1){?>
						<div class="col-xs-12 col-md-4 mb-4">
							<div class="position-relative m-2    p-2 " >
								<img src="./content/img/insignias/huracandedinero.png" class="bshadow   bg-dark bradius-100" width="150px" height="155px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Huracán de dinero<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-huracandedinero" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4 mb-4" style="order:-3;">
							<div class="position-relative m-2   p-2 "  align="center">
								<img src="./content/img/insignias/huracandedinero.png" class=" animaunlockinsig bg-dark bradius-100 emerlegend" width="150px" height="155px" data-html="true"  data-container="body" data-toggle="popover" data-placement="bottom" data-content="<h5 class=' font-weight-bold text-success text-center'>¡Superación del 200% de tu meta de ingresos! <i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i></h5>" >
								<br>
								<div class="pt-4 pb-4 font-weight-bold rounded" style="" align="center">
									<span class=" rounded badge badge-primary">Huracán de dinero <i class="fa fa-check-circle text-light" aria-hidden="true"></i></span>
								</div>
							</div>
						</div>
				<?php
					}
				?>
				<!-- Crecimiento Superior -->
				<?php
					//Si esta null se muestra bloqueo de lo contrario no
					if ($crecimientosuperior != 1){?>
						<div class="col-xs-12 col-md-4 mb-4">
							<div class="position-relative m-2    p-2 " >
								<img src="./content/img/insignias/crecimientosuperior.png" class="bshadow   bg-dark bradius-100" width="150px" height="155px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Crecimiento Superior<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-crecimientosuperior" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4 mb-4" style="order:-3;">
							<div class="position-relative m-2   p-2 "  align="center">
								<img src="./content/img/insignias/crecimientosuperior.png" class=" animaunlockinsig bg-dark bradius-100 emerlegend" width="150px" height="155px" data-html="true"  data-container="body" data-toggle="popover" data-placement="bottom" data-content="<h5 class=' font-weight-bold text-success text-center'>¡Superaste tu meta de ingresos! <i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i></h5>" >
								<br>
								<div class="pt-4 pb-4 font-weight-bold rounded" style="" align="center">
									<span class=" rounded badge badge-primary">Crecimiento Superior <i class="fa fa-check-circle text-light" aria-hidden="true"></i></span>
								</div>
								
							</div>
						</div>
				<?php
					}
				?>
				<!-- Crecimiento Exponencial -->
				<?php
					//Si esta null se muestra bloqueo de lo contrario no
					if ($crecimientoexponencial != 1){?>
						<div class="col-xs-12 col-md-4 mb-4">
							<div class="position-relative m-2    p-2 " >
								<img src="./content/img/insignias/crecimientoexponencial.png" class="bshadow   bg-dark bradius-100" width="150px" height="155px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Crecimiento Exponencial<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-crecimientoexponencial" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4 mb-4" style="order:-3;">
							<div class="position-relative m-2   p-2 "  align="center">
								<img src="./content/img/insignias/crecimientoexponencial.png" class=" animaunlockinsig bg-dark bradius-100 emerlegend" width="150px" height="155px" data-html="true"  data-container="body" data-toggle="popover" data-placement="bottom" data-content="<h5 class=' font-weight-bold text-success text-center'>¡Superación en un 150% sobre tu meta de ingresos! <i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i></h5>" >
								<br>
								<div class="pt-4 pb-4 font-weight-bold rounded" style="" align="center">
									<span class=" rounded badge badge-primary">Crecimiento Exponencial <i class="fa fa-check-circle text-light" aria-hidden="true"></i></span>
								</div>
								
							</div>
						</div>
				<?php
					}
				?>
				<!-- Gastador Junior -->
				<?php
					//Si esta null se muestra bloqueo de lo contrario no
					if ($gastadorjunior != 1){?>
						<div class="col-xs-12 col-md-4 mb-4">
							<div class="position-relative m-2    p-2 " >
								<img src="./content/img/insignias/gastadorjunior.png" class="bshadow   bg-dark bradius-100" width="150px" height="155px">
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Gastador Junior<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-gastadorjunior" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4 mb-4" style="order:-3;">
							<div class="position-relative m-2   p-2 "  align="center">
								<img src="./content/img/insignias/gastadorjunior.png" class=" animaunlockinsig bg-dark bradius-100 emerlegend" width="150px" height="155px" data-html="true"  data-container="body" data-toggle="popover" data-placement="bottom" data-content="<h5 class=' font-weight-bold text-success text-center'>Por gastos pasivos pero constantes</h5>" >
								<br>
								<div class="pt-4 pb-4 font-weight-bold rounded" style="" align="center">
									<span class=" rounded badge badge-primary">Gastador Junior <i class="fa fa-check-circle text-light" aria-hidden="true"></i></span>
								</div>
								
							</div>
						</div>
				<?php
					}
				?>
				<!-- Gastador Senior -->
				<?php
					//Si esta null se muestra bloqueo de lo contrario no
					if ($gastadorsenior != 1){?>
						<div class="col-xs-12 col-md-4 mb-4">
							<div class="position-relative m-2    p-2 " >
								<img src="./content/img/insignias/gastadorsenior.png" class="bshadow   bg-dark bradius-100" width="150px" height="155px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Gastador Senior<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-gastadorsenior" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4 mb-4" style="order:-3;">
							<div class="position-relative m-2   p-2 "  align="center">
								<img src="./content/img/insignias/gastadorsenior.png" class=" animaunlockinsig bg-dark bradius-100 emerlegend" width="150px" height="155px" data-html="true"  data-container="body" data-toggle="popover" data-placement="bottom" data-content="<h5 class=' font-weight-bold text-success text-center'>Por gastos marcados y constantes </h5>" >
								<br>
								<div class="pt-4 pb-4 font-weight-bold rounded" style="" align="center">
									<span class=" rounded badge badge-primary">Gastador Senior <i class="fa fa-check-circle text-light" aria-hidden="true"></i></span>
								</div>
								
							</div>
						</div>
				<?php
					}
				?>
				<!-- Gastador Compulsivo -->
				<?php
					//Si esta null se muestra bloqueo de lo contrario no
					if ($gastadorcompulsivo != 1){?>
						<div class="col-xs-12 col-md-4 mb-4">
							<div class="position-relative m-2    p-2 " >
								<img src="./content/img/insignias/gastadorcompulsivo.png" class="bshadow   bg-dark bradius-100" width="150px" height="155px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Gastador Compulsivo<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-gastadorcompulsivo" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4 mb-4" style="order:-3;">
							<div class="position-relative m-2   p-2 "  align="center">
								<img src="./content/img/insignias/gastadorcompulsivo.png" class=" animaunlockinsig bg-dark bradius-100 emerlegend" width="150px" height="155px" data-html="true"  data-container="body" data-toggle="popover" data-placement="bottom" data-content="<h5 class=' font-weight-bold text-success text-center'>Por gastos excesivos, revisa que no tengas deudas</h5>" >
								<br>
								<div class="pt-4 pb-4 font-weight-bold rounded" style="" align="center">
									<span class=" rounded badge badge-primary">Gastador Compulsivo <i class="fa fa-check-circle text-light" aria-hidden="true"></i></span>
								</div>
								
							</div>
						</div>
				<?php
					}
				?>
				<!-- Premio Inactividad -->
				<?php
					//Si esta null se muestra bloqueo de lo contrario no
					if ($premioinactividad != 1){?>
						<div class="col-xs-12 col-md-4 mb-4">
							<div class="position-relative m-2    p-2 " >
								<img src="./content/img/insignias/premioinactividad.png" class="bshadow   bg-dark bradius-100" width="150px" height="155px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Premio a la inactividad<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-premio-inactividad" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4 mb-4" style="order:-3;">
							<div class="position-relative m-2   p-2 "  align="center">
								<img src="./content/img/insignias/premioinactividad.png" class=" animaunlockinsig bg-dark bradius-100 emerlegend" width="150px" height="155px" data-html="true"  data-container="body" data-toggle="popover" data-placement="bottom" data-content="<h5 class=' font-weight-bold text-success text-center'>Debido a pocos movimientos o actividad general <i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i></h5>" >
								<br>
								<div class="pt-4 pb-4 font-weight-bold rounded" style="" align="center">
									<span class=" rounded badge badge-primary">Premio a la inactividad <i class="fa fa-check-circle text-light" aria-hidden="true"></i></span>
								</div>
								
							</div>
						</div>
				<?php
					}
				?>
				<!-- Usuario Activo -->
				<?php
					//Si esta null se muestra bloqueo de lo contrario no
					if ($usuarioactivo != 1){?>
						<div class="col-xs-12 col-md-4 mb-4">
							<div class="position-relative m-2    p-2 " >
								<img src="./content/img/insignias/usuarioactivo.png" class="bshadow   bg-dark bradius-100" width="150px" height="155px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Usuario Activo<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-usuarioactivo" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4 mb-4" style="order:-3;">
							<div class="position-relative m-2   p-2 "  align="center">
								<img src="./content/img/insignias/usuarioactivo.png" class=" animaunlockinsig bg-dark bradius-100 emerlegend" width="150px" height="155px" data-html="true"  data-container="body" data-toggle="popover" data-placement="bottom" data-content="<h5 class=' font-weight-bold text-success text-center'>Por tu constante actividad <i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i><i class='fa fa-star-o text-warning' aria-hidden='true'></i></h5>" >
								<br>
								<div class="pt-4 pb-4 font-weight-bold rounded" style="" align="center">
									<span class=" rounded badge badge-primary">Usuario Activo <i class="fa fa-check-circle text-light" aria-hidden="true"></i></span>
								</div>
								
							</div>
						</div>
				<?php
					}
				?>
			</div>
		</div>
	</div>
	<div class="row p-4 bgcorinsilogro">
		<div class="p-4 col border border-left-0 border-right-0 border-bottom-0 border-secondary">
			<h3 class="pb-4 mb-4 mt-4">Especiales</h3>
			<div class="d-flex flex-wrap justify-content-between">
				<div class="flex-grow-1 d-flex justify-content-center">
					<div class="position-relative m-2    " >
						<?php
							if ($reservadepoderi != 1){ 

						?>
						<img src="./content/img/insignias/reservadepoderi.png" class="border border-danger border-bottom-0  rounded bg-dark " width="150px" height="155px" >
						<br>
						<div class="text-light p-4 font-weight-bold rounded" style="background: linear-gradient(to top left, #5FFF09,#3B8116);">Reserva de poder I<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-reserva-poder-i" width="40px" >
							<div class="p-1 badge-pill border mt-2">
							+500 <img src="./content/img/leaves.png" width="40px">
							</div>
						</div>
						<?php
							} else { //toca
						?>
						<img src="./content/img/insignias/reservadepoderi.png" class="border border-warning border-bottom-0 rounded  bg-dark " width="150px" height="155px" >
						<br>
						<div class="text-light p-4 font-weight-bold rounded" style="background: linear-gradient(to top left, #F0FF00,#D59700);">Reserva de poder I <i class="fa fa-check-circle text-light ml-2" aria-hidden="true"></i></div>
						<?php
							}
						?>

					</div>
				</div>
				<div class="flex-grow-1 d-flex justify-content-center">
					<div class="position-relative m-2" >
						<?php
							if ($reservadepoderii != 1){
						?>
							<img src="./content/img/insignias/reservadepoderii.png" class="border border-danger border-bottom-0  rounded bg-dark " width="150px" height="155px" >
							<br>
							<div class="text-light p-4 font-weight-bold rounded" style="background: linear-gradient(to top left, #B746FF,#571681);">Reserva de poder II <img src="./content/img/insignias/lock.png" class="ml-2 lock lock-reserva-poder-ii" width="40px" >
								<div class="p-1 badge-pill border mt-2">
								+800 <img src="./content/img/leaves.png" width="40px">
								</div>
							</div>
							
						<?php
							} else {
						?>
							<img src="./content/img/insignias/reservadepoderii.png" class="border border-warning border-bottom-0  rounded bg-dark " width="150px" height="155px" >
							<br>
							<div class="text-light p-4 font-weight-bold rounded" style="background: linear-gradient(to top left, #F0FF00,#D59700);">Reserva de poder II <i class="fa fa-check-circle text-light ml-2" aria-hidden="true"></i></div>
						<?php
							}
						?>
					</div>
				</div>
				<div class="flex-grow-1 d-flex justify-content-center">
					<div class="position-relative m-2    " >
						<?php
							if ($sombreromagico != 1){

						?>
							<img src="./content/img/insignias/sombreromagico1.png" class="border border-danger border-bottom-0  rounded bg-dark " width="150px" height="155px" >
							<br>
							<div class="text-light p-4 font-weight-bold rounded" style="background: linear-gradient(to top left, #5C71FF,#141C57);">Sombrero mágico <img src="./content/img/insignias/lock.png" class="ml-2 lock lock-sombrero-magico" width="40px" >
								<div class="p-1 badge-pill border mt-2">
								+1000 <img src="./content/img/leaves.png" width="40px">
								</div>
							</div>
						<?php
							} else {
						?>
							<img src="./content/img/insignias/sombreromagico1.png" class="border border-warning border-bottom-0  rounded bg-dark " width="150px" height="155px" >
							<br>
							<div class="text-light p-4 font-weight-bold rounded" style="background: linear-gradient(to top left, #F0FF00,#D59700);">Sombrero mágico <i class="fa fa-check-circle text-light ml-2" aria-hidden="true"></i></div>
						<?php
							}
						?>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="./content/js/insignlogr.js"></script>
</div>