<?php

	if (isset($_SESSION['user'])){
		$conectar = new conexion();
		$conexion = $conectar->conectar();

		$usuario = $_SESSION['user'];
		$consulta_cnf = "SELECT * FROM usuarios WHERE nombre_usuario = '$usuario'";
		$cnf_result = $conexion->query($consulta_cnf);
		$fila = $cnf_result->fetch_object();
		$status_account = $fila->privilegios;
	}
	$prostexp = json_decode($status_account, TRUE);
	$fechexpi = $prostexp["fechaExpiracion"];

	$intent = \Stripe\SetupIntent::create([
	  'customer' => $customer->id
	]);
	?>

?>
<input id="cardholder-name" type="text">
<!-- placeholder for Elements -->
<form id="setup-form" data-secret="<?= $intent->client_secret ?>">
  <div id="card-element"></div>
  <button id="card-button">
    Save Card
  </button>
</form>
<div class="container p-4 bg-transparent" id="bgpremiumchange" style="min-height: 100vh; display: none;">

	<?php
		if ($fechexpi !== null){
	?>
		<div class="p-2 mb-2 font-weight-bold alert alert-warning text-warning" id="statusprem">
			Modo de prueba por 3 meses activado, tiempo de expiración:
			<?php

					echo $fechexpi;

			?>
		</div>
	<?php
		}
	?>
	
	<div class="card mb-2 bgpremiumchange">
		<div class="card-header bg-transparent">
			<h4>Premium <i class="fa fa-star text-warning" aria-hidden="true"></i></h4>
		</div>
		<div class="card-body bg-transparent">
			<ul class="list-group list-group-flush">
				<li class="list-group-item bg-transparent">
					Gráficos interactivos para las finanzas
					<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
				</li>
				<li class="list-group-item bg-transparent list-group-item-white">
					Predictores de índices financieros
					<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
				</li>
				<li class="list-group-item bg-transparent">
					Sistema de insignas y condecoraciones
					<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
				</li>
				<li class="list-group-item bg-transparent list-group-item-white">
					Subida libre de imágenes para personalizar el fondo
					<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
				</li>
				<li class="list-group-item bg-transparent">
					Transparencia ajustable de ventanas 
					<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
				</li>
				<li class="list-group-item bg-transparent list-group-item-white">
					Paquete de +16 nuevos personajes para elegir como asistente
					<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
				</li>
			</ul>
		</div>
	</div>
	<div class="card mb-2 bgpremiumchange">
		<div class="card-header bg-transparent">
			<h4>Acerca de</h4>
		</div>
		<div class="card-body bg-transparent text-justify m-1 ml-2 mr-2">
			Todas las funciones del modo Premium están identificadas con una estrella además de mensajes informativos. Estas funciones se mantendrán bloqueadas y funcionalmente inactivas hasta tanto el plan de cuenta no sea actualizado a un estado Premium. Sin embargo usted puede beneficiarse de todas las funciones Premium utilizando el periodo trimestral de prueba.
		</div>

			<div class="pr-4 pb-4 pl-4 d-flex flex-wrap"> 
				<button class="btn btn-success flex-grow-1 m-1 btn-lg">Obtener Premium <i class="fa fa-credit-card-alt" aria-hidden="true"></i></button>
		<?php
			//Si no hay fecha de expiracion definida y el estado de cuenta esta free entonces mostrar boton de activar prueba 3 meses


			$result = mysqli_query($conexion,'SELECT COUNT(1) FROM usuarios');
			$row = mysqli_fetch_array($result);
			$users_number = $row[0];

			//Si la cantidad de usuarios es menor o igual a 100, el modo se mantiene 3 meses de prueba, de resto, de momento no aparece el boton y solo queda opcion de pagar para uso premium
			if ($users_number <= 100){
				if ($fechexpi === "" || $status_account === "free"){

			?>
				<button class="btn btn-light pruebathremonth flex-grow-1 m-1 btn-lg">Prueba por 3 meses <i class="fa fa-heart text-danger" aria-hidden="true"></i></button>
				<!-- view cod in script footer j -->
			<?php
				} else {
					$conexion->close();	
				}
			//Aqui se definen otras condiciones como para 200 personas, 300, etc. Creando botones para cada caso
			} else {
				$conexion->close();	
			}
		?>
			</div>

	</div>
</div>