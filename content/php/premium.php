<?php

	//Clave real
	$stripe = new \Stripe\StripeClient(
    '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'

    // sk_test_51HPLUALQLtZT0x6xvjlzM0REVB0u9ugnrzGU1L5oYuWz6s9y0jJg0zAp4tTfTgARBigA7FLY7jJI3qwtrPZyoxRP00f3DACczd
  );

	$monto_mxn = 32000; // 320 mxn - 15$

	if (isset($_SESSION['user'])){
		$conectar = new conexion();
		$conexion = $conectar->conectar();

		$usuario = $_SESSION['user'];
		$consulta_cnf = "SELECT * FROM usuarios WHERE nombre_usuario = '$usuario'";
		$cnf_result = $conexion->query($consulta_cnf);
		$fila = $cnf_result->fetch_object();
		$email = $fila->correo_usuario;

		//Privilegios
		$status_account = $fila->privilegios;


		// ------------------------ Stripe -------------------
		$id_client = "";
		$status_client = "";
		$if_exist_stripe_client = "SELECT * FROM stripe WHERE usuario_card = '$usuario'";
		$cnf_result = $conexion->query($if_exist_stripe_client);
		$filaStripe = $cnf_result->fetch_object();


		//Si no existe usuario en tabla stripe se crea
		if ($filaStripe){
			$id_client =$filaStripe->stripe_id_client;
			$status_client = $filaStripe->status;
		} else {
			$saveClientFirst = $conexion->query("INSERT INTO stripe(stripe_id_client, client_secret, usuario_card, email_card, status) VALUES('','','$usuario', '$email', 'pendiente')");
		}

		if ($id_client == ""){
			//Si aun no existe un cliente para pago del usuario crear uno
			$customer = \Stripe\Customer::create();
		  	$intent = \Stripe\SetupIntent::create([
		      'customer' => $customer->id
		    ]);
			//almacenar id del cliente unico para guardarlas en db y garantizar un solo cliente por usuario
			$clientStripeId = $customer->id;
			$client_secret = $intent->client_secret;
			$saveClient = $conexion->query("UPDATE stripe set stripe_id_client='$clientStripeId', client_secret='$intent->client_secret' WHERE usuario_card='$usuario' AND email_card='$email'");
		} else {
			//Cliente existente
			$clientStripeId = $id_client;
			$client_secret = $filaStripe->client_secret;
			// echo $clientStripeId;
			// echo "<br>";
			// echo $client_secret;
			//Crear
		}
	}

	$prostexp = json_decode($status_account, TRUE);
	if (isset($prostexp["fechaExpiracion"])){
		$fechexpi = $prostexp["fechaExpiracion"];
	} else {
		$fechexpi = null;
	}

	//Recuperar tarjeta registrada para cuando sea momento de pagar en el futuro
	$paymethod = \Stripe\PaymentMethod::all([
	  'customer' => $clientStripeId, //id de la tarjeta guardada para poder usarla
	  'type' => 'card',
	]);

	// echo $paymethod;

	$json_cards = json_decode($paymethod,true);
	$data_cards = json_encode($paymethod->data);
	$data_cards_to_format = json_decode($data_cards);
	// echo json_encode($data_cards_to_format);

	$id_card_saved_to_pay = "";
	if (!empty($data_cards_to_format)){
		$data_cards_to_format_ii= json_encode($data_cards_to_format[0]);
		$formating_end_card = json_decode($data_cards_to_format_ii);
		//Id de datos de tarjeta regsitrada para pago futuro
		$id_card_saved_to_pay = $formating_end_card->id;
		// echo $id_card_saved_to_pay;
	} 

	// echo $fechexpi;
	// echo date("Y-m-d");
	if ($id_card_saved_to_pay != ""){
		//Si ya el cliente esta solvente, no volver a hacer pago
		if ($status_client != "solvente" && $status_client != "abortado" && $status_account != "premium"){
			//Si la fecha actual supera la fecha limite hace el pago automatico
			if ($fechexpi !== null){
				if (date("Y-m-d") > $fechexpi){
					try {
					  $pain = \Stripe\PaymentIntent::create([
					    'amount' => $monto_mxn,
					    'currency' => 'mxn',	
					    'customer' => $clientStripeId,
					    'payment_method' => $id_card_saved_to_pay,
					    'off_session' => true,
					    'confirm' => true,
					  ]);


					  if ($pain->status == "succeeded"){
					  	echo "<div class='alert alert-success font-weight-bold'><h2>¡Su pago se ha procesado con éxito ! Ahora dispone de cuenta premium indefinida <i class='fa fa-check-circle ml-2' aria-hidden='true'></i></h2></div>";

					  	echo "<script>setTimeout(function(){ window.location.reload(false) }, 1500)</script>";
					  	
					  	//cambiar estado de cliente stripe a solvente
					  	$define_solvent_status = "UPDATE stripe set status='solvente' WHERE usuario_card ='$usuario' AND email_card='$email'";
					  	$update_status_to_solvent = $conexion->query($define_solvent_status);
					  	$change_to_premium_eternum = "UPDATE usuarios set privilegios='premium' WHERE nombre_usuario ='$usuario' AND correo_usuario='$email'";
					  	$change_to_premium_eternum_q = $conexion->query($change_to_premium_eternum);
					  }
					} catch (\Stripe\Exception\CardException $e) {
					  // Error code will be authentication_required if authentication is needed
					  echo 'Error code is:' . $e->getError()->code;
					  $payment_intent_id = $e->getError()->payment_intent->id;
					  $payment_intent = \Stripe\PaymentIntent::retrieve($payment_intent_id);
					}
				} else {
					// echo "Aun no es fecha de pagar";
				}
			}
		} else {
			// echo "Disfrute del premium para siempre!";
		}
	} else {
		// echo "Todavia no existe una cartera registrada";
	}
	
	//TODOS LOS PAGOS RECIBIDOS
	// $pagos = $stripe->paymentIntents->all(['limit' => 40]);
	// echo $pagos;

	//TODAS LAS TARJETAS REGISRADAS 
	// $cards = $stripe->paymentMethods->all([
	//   'customer' => $clientStripeId,
	//   'type' => 'card',
	// ]);
	// echo $cards;
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
			<h4>Premium<i class="fa fa-star ml-2 text-warning" aria-hidden="true"></i></h4>
		</div>
		<div class="card-body bg-transparent">
			<div class="col flex-grow-1">
				<img src="./content/img/premiumpubli2.1.png" class="col" >
			</div>
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
			<div class="mt-4">
				<h5 class="alert alert-info text-justify">El modo de prueba guarda sus datos de tarjeta para la fecha límite establecida por el sistema. Al superar dicha fecha, se cobrará automáticamente y su cuenta quedará premium de forma permanente. En caso de que desee cancelar su suscripción de pago, podrá hacerlo antes de la fecha de expiración. Al presionar el botón de Prueba por 3 meses y guardar sus datos de tarjeta, acepta estar de acuerdo con estos términos. <i class="fa fa-info-circle ml-2" aria-hidden="true"></i></h5>
			</div>
		</div>

			<div class="pr-4 pb-4 pl-4 d-flex flex-wrap"> 
				<button id="btn-premium-try" class="btn btn-success flex-grow-1 m-1 btn-lg">Obtener Premium <i class="fa fa-credit-card-alt" aria-hidden="true"></i></button>
		<?php
			//Si no hay fecha de expiracion definida y el estado de cuenta esta free entonces mostrar boton de activar prueba 3 meses


			// echo $status_client;
			// echo $status_account;
			$result = mysqli_query($conexion,'SELECT COUNT(1) FROM usuarios');
			$row = mysqli_fetch_array($result);
			$users_number = $row[0];

			//Si la cantidad de usuarios es menor o igual a 100, el modo se mantiene 3 meses de prueba, de resto, de momento no aparece el boton y solo queda opcion de pagar para uso premium

			if ($users_number <= 100){
				if ($fechexpi === "" || $status_account === "free"){

			?>
				<button class="btn btn-light flex-grow-1 m-1 btn-lg" data-toggle="collapse"  href="#getpremium" role="button" aria-expanded="false" aria-controls="getpremium">Prueba por 3 meses <i class="fa fa-heart text-danger" aria-hidden="true"></i></button>
					
				<!-- view cod in script footer j -->
			<?php
				} 
				//Si ya empezo el modo de prueba y los datos de tarjeta estan guardados	
				if ($status_client == "pendiente" && $status_account != "free" && $fechexpi != "") {
					?>
					<button style="display: none;" id="cancel-pay" class="btn btn-light flex-grow-1 m-1 btn-lg">Cancelar suscripcion <i class="fa fa-times ml-1 text-danger" aria-hidden="true"></i></button>

					<?php
					$conexion->close();	
				}
			//Aqui se definen otras condiciones como para 200 personas, 300, etc. Creando botones para cada caso
			} else {
				$conexion->close();	
			}
		?>
			</div>

		<?php
			if ($users_number <= 100){
					if ($fechexpi === "" || $status_account === "free"){

				?>
		<!-- placeholder for Elements -->
		<div class="pl-4 pr-4 pb-4 pt-0 collapse"  id="getpremium">					
			<form id="setup-form" class="p-4" data-secret="<?= $client_secret ?>">
				<div class="d-flex  flex-wrap">
					<h4 class="mr-4">Nombre en la tarjeta</h4>
					<input class="border p-2 mb-3 rounded outline-none" id="cardholder-name" type="text">
				</div>
			  <div id="card-element" class="p-4"></div>
			  <button class="btn btn-primary float-right" id="card-button">
			    Save Card
			  </button>
			   <div id="card-errors"></div>
			</form>
		</div>
	<?php
			}
		}
	?>

</div>

	<script type="text/javascript">
		var style = {
		  base: {
		    color: "#32325d",
		  }
		};

		var cardholderName = document.getElementById('cardholder-name');
		var cardButton = document.getElementById('card-button');

		if (cardButton !== null && cardButton !== undefined){
			var stripe = Stripe('pk_live_51HPLUALQLtZT0x6x5ZwgTQlgBtCAo8Z0lY3DQVcJZW5Nfnql6mQdVGKwZ3ioz2Q6zgNKALYeHtkH3GnkpNwXPKao00FYdOYFhD');//CLAVE REAL API 

			// pk_test_51HPLUALQLtZT0x6xy8EBznbAJlF8DSYuBv7ktUwP7FkxSxOu6jNVnr7YL7vvmPt6y61PwjZFCmjH471qP9TBb0U800BVdgkVLs

			var elements = stripe.elements();
			var cardElement = elements.create('card');
			cardElement.mount('#card-element');

			var clientSecret = document.getElementById("setup-form").getAttribute("data-secret")

			cardButton.addEventListener('click', function(ev) {
				//Save data card


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
			  	console.log(result)
			    if (result.error) {
			    	$("#card-button").notify("Error", "error");
			      // Display error.message in your UI.
			    } else {

					 document.getElementById("loadingg").style.display = "block"
					 document.getElementById("loadingg").classList.add("z-index-50")

					$("#card-button").notify("Datos de tarjeta guardados", "success");

					const fecha = new Date()
					let tmp = fecha.getMonth() + 2 //+ 1 months
					let year = fecha.getFullYear()
					const day = fecha.getDate().toString().split("").length > 1 ? fecha.getDate() : "0" + fecha.getDate()
					if (tmp === 13){
					  year += 1
					  tmp = 1 //next year and month +3
					} else if (tmp === 14){
					  year += 1
					  tmp = 2 //next year and month +3
					} else if (tmp === 15){
					  year += 1
					  tmp = 3 //next year and month +3
					}
					let mes = tmp.toString().split("").length > 1 ? tmp : "0" + tmp

					const fechaActualCompleta = year + "-" + mes + "-" + day

			    	//Activar periodo de prueba
			    	$.post("./content/php/usr/update_plan_prueba.php", {
				        usuario: window.config[0].usuario,
				        fechaExpiracion: fechaActualCompleta
				      }).done(function(e){
				        if (e.match(/success/gim)){
				        	setTimeout(function(){
				        		// document.getElementById("loadingg").style.display = "none"
				          		window.location.reload(false)
				        	},1000)
				        	
				        }
				      })
			      // The setup has succeeded. Display a success message.
			    }
			  });
			});
		}


		//Cancel suscription pay

		const cancel_pay = document.getElementById("cancel-pay")

		if (cancel_pay !== null && cancel_pay !== undefined){
			if (!window.location.href.match(/\#mp/gim)){
				cancel_pay.style.display = "block"
			} else {
				cancel_pay.remove()
			}

			cancel_pay.onclick = function(){
				alertify.confirm("",
			  function(){
			  	//Aceptar
			  	$.post("./content/php/usr/update_state_pay.php", {state: "abortado", usuario:window.config[0].usuario}).done(function(e){
					if (e.match(/canceled/gim)){
						window.location.reload(false)
					} else {
						$.notify("No pudo cancelarse su suscripción de pago", "error");
					}
				})
			  },
			  function(){
			  	//Cancelar
			  }).setting({
			  	'title' : 'Confirmación',
			    'label':'Eliminar',
			    'message': `
			    <div class="text-center">
			    	<div class="font-weight-bold p-2">
			    		¿Está seguro que desea cancelar su suscripción?
			    	</div>
			    	<div class="alert alert-danger mt-2">Esta acción hará que vuelva al modo limitado, hasta que obtenga el premium mediante pago independiente, el cual puede realizar en cualquier momento. <i class="fa fa-exclamation-triangle ml-2" aria-hidden="true"></i></div>
			    </div>
			    `
			  }).show()
			}
		}

		if (document.querySelector("form") !== undefined && document.querySelector("form") !== null){
			document.querySelector("form").onsubmit = () => false
		}

	</script>
</div>