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

	// echo $intent;

	// $paymeth = \Stripe\PaymentMethod::all([
	// 	  'customer' => $customer->id,
	// 	  'type' => 'card',
	// 	  "PAYMENT_METHOD_ID" => "oaimdoaisdmas"
	// 	]);

	// echo $paymeth;

	// try {
	//   \Stripe\PaymentIntent::create([
	//     'amount' => 350,
	//     'currency' => 'mxn',
	//     'customer' => $customer->id,
	//     'payment_method' => $paymeth->PAYMENT_METHOD_ID,
	//     'off_session' => true,
	//     'confirm' => true,
	//   ]);
	// } catch (\Stripe\Exception\CardException $e) {
	//   // Error code will be authentication_required if authentication is needed
	//   echo 'Error code is:' . $e->getError()->code;
	//   $payment_intent_id = $e->getError()->payment_intent->id;
	//   $payment_intent = \Stripe\PaymentIntent::retrieve($payment_intent_id);
	// }
	?>

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
				<button class="btn btn-success flex-grow-1 m-1 btn-lg" data-toggle="collapse"  href="#getpremium" role="button" aria-expanded="false" aria-controls="getpremium">Obtener Premium <i class="fa fa-credit-card-alt" aria-hidden="true"></i></button>
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

			<!-- placeholder for Elements -->
			<div class="bg-light pl-4 pr-4 pb-4 pt-0 collapse"  id="getpremium">					
				<form id="setup-form" class="p-4" data-secret="<?= $intent->client_secret ?>">
					<h4>Nombre</h4>
					<input class="border p-2 mb-3" id="cardholder-name" type="text">
				  <div id="card-element" class="p-4"></div>
				  <button id="card-button">
				    Save Card
				  </button>
				   <div id="card-errors"></div>
				</form>
			</div>

	</div>





	<script type="text/javascript">
		var style = {
		  base: {
		    color: "#32325d",
		  }
		};

		var stripe = Stripe('pk_test_51HPLUALQLtZT0x6xy8EBznbAJlF8DSYuBv7ktUwP7FkxSxOu6jNVnr7YL7vvmPt6y61PwjZFCmjH471qP9TBb0U800BVdgkVLs');

		var elements = stripe.elements();
		var cardElement = elements.create('card');
		cardElement.mount('#card-element');
		// alert(20)

		var cardholderName = document.getElementById('cardholder-name');
		var cardButton = document.getElementById('card-button');
		var clientSecret = document.getElementById("setup-form").getAttribute("data-secret")

		cardButton.addEventListener('click', function(ev) {

		  stripe.confirmCardSetup(
		    clientSecret,
		    {
		      payment_method: {
		        card: cardElement,
		        billing_details: {
		          name: cardholderName.value,
		        },
		      },
		    }
		  ).then(function(result) {
		    if (result.error) {
		    	alert("error")

		      // Display error.message in your UI.
		    } else {
		    	alert("bien")
		      // The setup has succeeded. Display a success message.
		    }
		  });
		});

		document.querySelector("form").onsubmit = () => false

	</script>
</div>