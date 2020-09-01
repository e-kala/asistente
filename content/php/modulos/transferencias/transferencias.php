<div class="container text-light" style="min-height: 100vh;">

	<div class="p-4 mt-4 rounded bgtransferencias_ventana">
		<h1 class="text-center pb-2 pt-4 mt-3">Transferencias <i class="fa fa-credit-card-alt text-warning" aria-hidden="true"></i></h1>
		<label class="text-center pb-2">Transferir Entre Cuentas</label>
		<div class="pt-2 border border-secondary border-left-0 border-top-0 border-right-0" id="saldoDisponible"><p class="badge-primary" id="saldoDisponible"></p></div>
		<form class="form cuentaTransferencia p-4" action="content/php/modulos/transferencias/transferir.php" method="POST">
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
			    	<button class="btn btn-success align-right mt-4  mb-0" type="submit">Registrar</button>
		    	</div>
		    </div>
		</form>
		
	</div>
</div>

