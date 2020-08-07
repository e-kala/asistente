<div class="container text-light" style="min-height: 100vh;">
	<h1 class="text-center text-white">Transferencias</h1>
	<h4 class="text-center text-white">Transferir Entre Cuentas</h4>

	<div class="p-4 mt-4 rounded bgtransferencias_ventana">
		<form class="form cuentaTransferencia p-4" action="content/php/modulos/transferencias/transferir.php" method="POST">
		  <div class="row">
		    <div class="col">
		    	<label class="text-center">De esta cuenta</label>
		    	<label id="saldoDisponible"></label>
		    	<select id="deCuentaTransferencia" class="form-control" name="de">
		    		<option selected="">Selecciona una cuenta</option>
		    	</select>
		    </div>
		    <div class="col">
		    	<label class="text-center">A esta Cuenta</label>
		    	<select id="aCuentaTransferencia" class="form-control" name="a">
		    		<option selected="">Selecciona una cuenta</option>
		    	</select>
		    </div>
		  </div>
		    <div class="row">
		    	<div class="col">
		    		<input id="cantidadTransferencia" type="text" name="cantidad" placeholder="Cantidad">
		    	</div>
		    	<div class="col">
			    	<button class="btn btn-success align-right" type="submit">Registrar</button>
		    	</div>
		    </div>
		</form>
		
	</div>
</div>

