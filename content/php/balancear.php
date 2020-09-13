<?php
  $conectar = new conexion();
  $conexion = $conectar ->conectar();
  $usuario = $_SESSION['user'];
  $consulta_cuentas = "SELECT * FROM cuentas WHERE usuario_cuenta = '$usuario'";
  $resultado_cuentas = $conexion->query($consulta_cuentas);
?>

<div class="balanceo container bgbalanceochange mt-4 pt-4" style="min-height: 100vh; display: none;">
	<div class="modal-dialog" role="document">
    <div class="modal-content modingresogasto">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Balancear cuenta</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <form>
            <div class="p-2 mb-1 font-weight-bold">Saldo disponible: <span id="balacmodalbalanceo" class="font-italic font-weight-bold"></span> </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                  <!--Cantidad-->
                <label for="inputEmail4">Cantidad</label>
                <input type="number" class="form-control" id="cantidad" name="cantidad">
              </div>
              <div class="form-group col-md-6">
                  <label for="inputState">Cuenta</label>
                  <select id="cuenta" class="form-control" name="cuenta">
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
            </div>
            <div class="form-group">
              <label for="categoria">Categoría</label>
              <input type="text" class="form-control" id="categoria" placeholder="" name="categoria">
            </div>
            <div class="form-group">
              <label for="descripcion">Descripción</label>
              <textarea class="form-control" id="descripcion" placeholder="" name="descripcion"></textarea>
            </div>
          <div class="form-row">
            <div class="form-group col-md-12">
                 <label >Fecha</label>
                 <input type="date" name="fecha" max="3000-12-31"
                        min="2000-01-01" class="form-control fecha"/>
                </div>

          </div>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button id="subirBalanceo" type="button" class="btn btn-primary">Guardar Cambios</button>
      </div>
    </div>
  </div>
</div>

