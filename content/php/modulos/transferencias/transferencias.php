<div class="container text-light">
	<h1 class="text-center text-white">Transferencias</h1>
	<h4 class="text-center text-white">Transferir Entre Cuentas</h4>

	<form class="form cuentaTransferencia" action="content/php/modulos/transferencias/transferir.php" method="POST">
	  <div class="row">
	    <div class="col">
	    	<label class="text-center">De esta cuenta</label>
	    	<select class="form-control deCuentaTransferencia" name="de">
	    		<option selected="">Selecciona una cuenta</option>
	    	</select>
	    </div>
	    <div class="col">
	    	<label class="text-center">A esta Cuenta</label>
	    	<select class="form-control aCuentaTransferencia" name="a">
	    		<option selected="">Selecciona una cuenta</option>
	    	</select>
	    </div>
	  </div>
	    <div class="row">
	    	<div class="col">
	    		<input type="text" name="cantidad" placeholder="Cantidad">
	    	</div>
	    	<div class="col">
		    	<button class="btn btn-success align-right" type="submit">Registrar</button>
	    	</div>
	    </div>
	</form>
</div>

