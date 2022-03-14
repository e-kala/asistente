<?php
  $conectar = new conexion();
  $conexion = $conectar ->conectar();
  $usuario = $_SESSION['user'];
  $consulta_cuentas = "SELECT * FROM cuentas WHERE usuario_cuenta = '$usuario'";
  $resultado_cuentas = $conexion->query($consulta_cuentas);
?>

<?php
	 if ($aside_hidden_status == "true"){
?>
		<div class="" style="">
			<div  class="balanceo ml-4 mr-4 bgbalanceochange " style="display: none; min-height: 100vh;">
	<?php } else {
		?>
		<div class="" style="min-height: 100vh;">
				<div class="balanceo container bgbalanceochange " style="display: none;">
		<?php
	} ?>
	    <div class="pt-2">
	      <div class="pt-4">
	        <h1 class="text-center pb-2 pt-4 " id="exampleModalLabel">Balancear cuenta<i class="fa fa-credit-card-alt text-warning ml-3" aria-hidden="true"></i></h1>
	       
	      </div>
	      <div class="p-4">
	          <form>
	            <div class="p-2 mb-1 font-weight-bold">Saldo disponible: <span id="balacmodalbalanceo" class="font-italic font-weight-bold"></span> </div>
	            <div class="form-row pl-4 pr-4">
	              
	              <div class="form-group col-md-6">
	                  <label for="inputState">¿Qué cuenta balancear?</label>
	                  <select id="cuentaBalanceo" class="form-control" name="cuentaBalanceo">
	                    <?php
	  
	                      $count = 0;
	                      if(!empty($resultado_cuentas) && $resultado_cuentas->num_rows > 0){
	                          while ($fila_cuentas = $resultado_cuentas->fetch_object()) {
	                            $count += 1;
	                            $cuenta = $fila_cuentas->nombre_cuenta;

	                            if ($count === 1){
	                              echo "<option selected>" . $cuenta . "</option>";
	                            } else {
	                              echo "<option>" . $cuenta . "</option>";
	                            }
	                          }
	                      }else{
	                          echo "Error: " . $consulta_cuentas . "<br>" . $conexion->error;
	                      }
	                  ?>
	                  </select>
	              </div>
	              <div class="form-group col-md-6">
	                  <!--Cantidad-->
	                <label for="inputEmail4">Cantidad</label>
	                <input type="number" class="form-control" id="cantidadNueva" name="cantidad">
	              </div>
	            </div>
	          </form>
	      </div>
	      <div class="pb-4 pl-4 pr-4 pt-0">
			  <?php //Este botón se conecta con el js ubicado en: content/js/subirBalance.js para enviar los datos ?>
	        <button id="subirBalanceo" type="button" class="btn btn-primary mb-4">Guardar Cambios</button>
	      </div>
	    </div>
	</div>
</div>

