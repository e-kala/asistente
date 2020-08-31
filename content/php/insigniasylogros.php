<?php
	
	if (!isset($conectar)){
		$conectar = new conexion();
		$conexion = $conectar->conectar();
		if(isset($_SESSION['user'])){
			$usuario = $_SESSION['user'];
			$consulta_cnf = "SELECT * FROM usuarios WHERE nombre_usuario = '$usuario'";
			$cnf_result = $conexion->query($consulta_cnf);
			$fila = $cnf_result->fetch_object();
			$premioinactividad = $fila->usr_config;
			$json_config = json_decode($premioinactividad, true);

			if (isset($json_config["premioinactividad"])){
				$premioinactividad = $json_config["premioinactividad"];
			} else {
				$premioinactividad = 0;
			}

			if (isset($json_config["constanciasaludable"])){
				$constanciasaludable = $json_config["constanciasaludable"];
			} else {
				$constanciasaludable= 0;
			}

			if (isset($json_config["crecimientosuperior"])){
				$crecimientosuperior = $json_config["crecimientosuperior"];
			} else {
				$crecimientosuperior = 0;
			}

			if (isset($json_config["crecimientoexponencial"])){
				$crecimientoexponencial = $json_config["crecimientoexponencial"];
			} else {
				$crecimientoexponencial = 0;
			}

			if (isset($json_config["huracandedinero"])){
				$huracandedinero = $json_config["huracandedinero"];
			} else {
				$huracandedinero = 0;
			}

			if (isset($json_config["excelenciafinanciera"])){
				$excelenciafinanciera = $json_config["excelenciafinanciera"];
			} else {
				$excelenciafinanciera = 0;
			}

			if (isset($json_config["buenafortuna"])){
				$buenafortuna = $json_config["buenafortuna"];
			} else {
				$buenafortuna = 0;
			}

			if (isset($json_config["gastadorjunior"])){
				$gastadorjunior = $json_config["gastadorjunior"];
			} else {
				$gastadorjunior = 0;
			}

			if (isset($json_config["gastadorsenior"])){
				$gastadorsenior = $json_config["gastadorsenior"];
			} else {
				$gastadorsenior = 0;
			}

			if (isset($json_config["gastadorcompulsivo"])){
				$gastadorcompulsivo = $json_config["gastadorcompulsivo"];
			} else {
				$gastadorcompulsivo = 0;
			} 

			if (isset($json_config["elorganizador"])){
				$elorganizador = $json_config["elorganizador"];
			} else {
				$elorganizador = 0;
			} 

			if (isset($json_config["usuarioactivo"])){
				$usuarioactivo = $json_config["usuarioactivo"];
			} else {
				$usuarioactivo = 0;
			}
		}
	} 

?>

<div class="container containerinsilogr" style="display: none; min-height: 100vh;">
	<div class="row p-4 bgcorinsilogro ">
		<div class="p-4 col">
			<h3 class="pt-0 pb-4">Insignias</h3>
			<div class="d-flex flex-wrap justify-content-center">
				<!-- Excelencia Financiera -->
				<?php
					//Si esta null se muestra bloqueo de lo contrario no
					// here lock
					if ($excelenciafinanciera == "null"){?> 
						<div class="col-xs-12 col-md-4">
							<div class="position-relative m-2   p-2 " >
								<img src="./content/img/insignias/excelenciafinanciera.png" class="bshadow   bg-dark bradius-100" width="150px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Excelencia Financiera<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-premio-inactividad" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4" style="order:-1;">
							<div class="position-relative m-2  p-2 "  align="center">
								<img src="./content/img/insignias/excelenciafinanciera.png" class=" animaunlockinsig bg-dark bradius-100" width="150px" >
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
					if ($buenafortuna == "null"){?>
						<div class="col-xs-12 col-md-4">
							<div class="position-relative m-2   p-2 " >
								<img src="./content/img/insignias/buenafortuna.png" class="bshadow   bg-dark bradius-100" width="150px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Buena Fortuna<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-buenafortuna" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4" style="order:-1;">
							<div class="position-relative m-2  p-2 "  align="center">
								<img src="./content/img/insignias/buenafortuna.png" class=" animaunlockinsig bg-dark bradius-100" width="150px" >
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
					if ($constanciasaludable == "null"){?>
						<div class="col-xs-12 col-md-4">
							<div class="position-relative m-2   p-2 " >
								<img src="./content/img/insignias/constanciasaludable.png" class="bshadow   bg-dark bradius-100" width="150px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Constancia Saludable<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-constanciasaludable" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4" style="order:-1;">
							<div class="position-relative m-2  p-2 "  align="center">
								<img src="./content/img/insignias/constanciasaludable.png" class=" animaunlockinsig bg-dark bradius-100" width="150px" >
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
					if ($elorganizador == "null"){?>
						<div class="col-xs-12 col-md-4">
							<div class="position-relative m-2   p-2 " >
								<img src="./content/img/insignias/organizador.png" class="bshadow   bg-dark bradius-100" width="150px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">El Organizador<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-organizador" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4" style="order:-1;">
							<div class="position-relative m-2  p-2 "  align="center">
								<img src="./content/img/insignias/organizador.png" class=" animaunlockinsig bg-dark bradius-100" width="150px" >
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
					if ($huracandedinero == "null"){?>
						<div class="col-xs-12 col-md-4">
							<div class="position-relative m-2   p-2 " >
								<img src="./content/img/insignias/huracandedinero.png" class="bshadow   bg-dark bradius-100" width="150px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Huracán de dinero<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-huracandedinero" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4" style="order:-1;">
							<div class="position-relative m-2  p-2 "  align="center">
								<img src="./content/img/insignias/huracandedinero.png" class=" animaunlockinsig bg-dark bradius-100" width="150px" >
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
					if ($crecimientosuperior == "null"){?>
						<div class="col-xs-12 col-md-4">
							<div class="position-relative m-2   p-2 " >
								<img src="./content/img/insignias/crecimientosuperior.png" class="bshadow   bg-dark bradius-100" width="150px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Crecimiento Superior<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-crecimientosuperior" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4" style="order:-1;">
							<div class="position-relative m-2  p-2 "  align="center">
								<img src="./content/img/insignias/crecimientosuperior.png" class=" animaunlockinsig bg-dark bradius-100" width="150px" >
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
					if ($crecimientoexponencial == "null"){?>
						<div class="col-xs-12 col-md-4">
							<div class="position-relative m-2   p-2 " >
								<img src="./content/img/insignias/crecimientoexponencial.png" class="bshadow   bg-dark bradius-100" width="150px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Crecimiento Exponencial<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-crecimientoexponencial" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4" style="order:-1;">
							<div class="position-relative m-2  p-2 "  align="center">
								<img src="./content/img/insignias/crecimientoexponencial.png" class=" animaunlockinsig bg-dark bradius-100" width="150px" >
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
					if ($gastadorjunior == "null"){?>
						<div class="col-xs-12 col-md-4">
							<div class="position-relative m-2   p-2 " >
								<img src="./content/img/insignias/gastadorjunior.png" class="bshadow   bg-dark bradius-100" width="150px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Gastador Junior<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-gastadorjunior" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4" style="order:-1;">
							<div class="position-relative m-2  p-2 "  align="center">
								<img src="./content/img/insignias/gastadorjunior.png" class=" animaunlockinsig bg-dark bradius-100" width="150px" >
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
					if ($gastadorsenior == "null"){?>
						<div class="col-xs-12 col-md-4">
							<div class="position-relative m-2   p-2 " >
								<img src="./content/img/insignias/gastadorsenior.png" class="bshadow   bg-dark bradius-100" width="150px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Gastador Senior<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-gastadorsenior" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4" style="order:-1;">
							<div class="position-relative m-2  p-2 "  align="center">
								<img src="./content/img/insignias/gastadorsenior.png" class=" animaunlockinsig bg-dark bradius-100" width="150px" >
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
					if ($gastadorcompulsivo == "null"){?>
						<div class="col-xs-12 col-md-4">
							<div class="position-relative m-2   p-2 " >
								<img src="./content/img/insignias/gastadorcompulsivo.png" class="bshadow   bg-dark bradius-100" width="150px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Gastador Compulsivo<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-gastadorcompulsivo" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4" style="order:-1;">
							<div class="position-relative m-2  p-2 "  align="center">
								<img src="./content/img/insignias/gastadorcompulsivo.png" class=" animaunlockinsig bg-dark bradius-100" width="150px" >
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
					if ($premioinactividad == "null"){?>
						<div class="col-xs-12 col-md-4">
							<div class="position-relative m-2   p-2 " >
								<img src="./content/img/insignias/premioinactividad.png" class="bshadow   bg-dark bradius-100" width="150px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Premio a la inactividad<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-premio-inactividad" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4" style="order:-1;">
							<div class="position-relative m-2  p-2 "  align="center">
								<img src="./content/img/insignias/premioinactividad.png" class=" animaunlockinsig bg-dark bradius-100" width="150px" >
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
					if ($usuarioactivo == "null"){?>
						<div class="col-xs-12 col-md-4">
							<div class="position-relative m-2   p-2 " >
								<img src="./content/img/insignias/usuarioactivo.png" class="bshadow   bg-dark bradius-100" width="150px" >
								<br>
								<div class="p-4 font-weight-bold rounded" style="">Usuario Activo<img src="./content/img/insignias/lock.png" class="ml-2 lock lock-usuarioactivo" width="40px" ></div>
							</div>
						</div>
				<?php
					} else {
				?>
						<div class="col-xs-12 col-md-4" style="order:-1;">
							<div class="position-relative m-2  p-2 "  align="center">
								<img src="./content/img/insignias/usuarioactivo.png" class=" animaunlockinsig bg-dark bradius-100" width="150px" >
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
					<div class="position-relative m-2   " >
						<img src="./content/img/insignias/reservadepoderi.png" class="border border-danger border-bottom-0  rounded bg-dark " width="150px" >
						<br>
						<div class="text-light p-4 font-weight-bold rounded" style="background: linear-gradient(to top left, #5FFF09,#3B8116);">Reserva de poder I <img src="./content/img/insignias/lock.png" class="ml-2 lock lock-reserva-poder-i" width="40px" ></div>
					</div>
				</div>
				<div class="flex-grow-1 d-flex justify-content-center">
					<div class="position-relative m-2   " >
						
						<img src="./content/img/insignias/reservadepoderii.png" class="border border-danger border-bottom-0  rounded bg-dark " width="150px" >
						<br>
						<div class="text-light p-4 font-weight-bold rounded" style="background: linear-gradient(to top left, #B746FF,#571681);">Reserva de poder II <img src="./content/img/insignias/lock.png" class="ml-2 lock lock-reserva-poder-ii" width="40px" ></div>
					</div>
				</div>
				<div class="flex-grow-1 d-flex justify-content-center">
					<div class="position-relative m-2   " >
						
						<img src="./content/img/insignias/sombreromagico1.png" class="border border-danger border-bottom-0  rounded bg-dark " width="150px" >
						<br>
						<div class="text-light p-4 font-weight-bold rounded" style="background: linear-gradient(to top left, #5C71FF,#141C57);">Sombrero mágico <img src="./content/img/insignias/lock.png" class="ml-2 lock lock-sombrero-magico" width="40px" ></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="./content/js/insignlogr.js"></script>
</div>