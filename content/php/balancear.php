<?php
  $conectar = new conexion();
  $conexion = $conectar ->conectar();
  $usuario = $_SESSION['user'];
  $consulta_cuentas = "SELECT * FROM cuentas WHERE usuario_cuenta = '$usuario'";
  $resultado_cuentas = $conexion->query($consulta_cuentas);
?>





<div class="container text-light" style="min-height: 100vh;">

	<div class="p-4 mt-4 rounded bgtransferencias_ventana">
		<h1 class="text-center pb-2 pt-4 mt-3">Balancear Cuentas <i class="fa fa-credit-card-alt text-warning" aria-hidden="true"></i></h1>
		<label class="text-center pb-2">Balancear Cuentas</label>
		<div class="pt-2 border border-secondary border-left-0 border-top-0 border-right-0" id="saldoDisponible"><p class="badge-primary" id="saldoDisponible"></p></div>
		<form class="form cuentaTransferencia p-4">
		  <div class="row">
		    <div class="col-xs-12 col-md-6">
		    	<label class="text-center p-2">¿Qué Cuenta Balancear?</label>
		    	<select id="deCuentaTransferencia" class="form-control" name="de">
		    		<option selected="">Selecciona una cuenta</option>
		    	</select>
		    </div>
		  
		    <div class="d-flex flex-wrap justify-content-between  align-items-center align-content-center">
		    	<div class="m-0 p-0 flex-grow-1">
		    		<input id="cantidadTransferencia" style="" class="mb-0" type="text" name="cantidad" placeholder="Cantidad Real">
			    	<button class="btn btn-success mt-4  mb-0" id="registrar_transferencia" type="submit" data-html="true"  data-container="body" data-trigger="focus" data-toggle="popovertrans" data-placement="bottom" >Registrar</button>
		    	</div>
		    	<div class="m-0 p-0 flex-grow-1">
		    	</div>
		    </div>
        </div>
		</form>
		<script type="text/javascript" src="./content/js/transferir.js"></script>
	</div>
</div>








