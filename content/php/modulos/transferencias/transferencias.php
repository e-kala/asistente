<?php
     if ($aside_hidden_status === "true"){
?>
<div class="ml-4 mr-4 transferencias" style="min-height: 100vh;">
<?php } else {
        ?>
<div class="container transferencias" style="min-height: 100vh;">
<?php      
} ?>

	<div class="p-4 rounded bgtransferencias_ventana">
		<h1 class="text-center pb-2 pt-4 mt-3">Transferencias <i class="fa fa-credit-card-alt text-warning" aria-hidden="true"></i></h1>
		<h4 class="text-center font-italic pb-2">Transferir Entre Cuentas</h4>
		<div class="pt-2 border border-secondary border-left-0 border-top-0 border-right-0" id="saldoDisponible"><p class="badge-primary" id="saldoDisponible"></p></div>
		<form class="form cuentaTransferencia p-4">
		  <div class="row">
		    <div class="col-xs-12 col-md-6">
		    	<label class="text-center p-2">De esta cuenta</label>
		    	<select id="deCuentaTransferencia" class="form-control" name="de">
		    		<option selected="">Selecciona una cuenta</option>
		    	</select>
		    </div>
		    <div class="col-xs-12 col-md-6">
		    	<label class="text-center p-2">A esta Cuenta</label>
		    	<select id="aCuentaTransferencia" class="form-control" name="a">
		    		<option selected="">Selecciona una cuenta</option>
		    	</select>
		    </div>
		  </div>
		    <div class="d-flex flex-wrap justify-content-between  align-items-center align-content-center">
		    	<div class="m-0 p-0 flex-grow-1">
		    		<input id="cantidadTransferencia" style="" class="mt-4 mb-0" type="text" name="cantidad" placeholder="Cantidad">
		    	</div>
		    	<div class="m-0 p-0 flex-grow-1">
			    	<button class="btn btn-success align-right mt-4  mb-0" id="registrar_transferencia" type="submit" data-html="true"  data-container="body" data-trigger="focus" data-toggle="popovertrans" data-placement="bottom" >Registrar </button>
		    	</div>
		    </div>
		</form>
		<script type="text/javascript" src="./content/js/transferir.js"></script>
	</div>
</div>

