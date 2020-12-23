<?php

    $conectar = new conexion();
    $conexion = $conectar->conectar();

    $usuario = $_SESSION['user'];
    $consultaCuentas = "SELECT * FROM cuentas WHERE usuario_cuenta = '$usuario'";
    $resultadoCuentas = $conexion->query($consultaCuentas);
    //$consultaCuentas = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario'");

    //echo "<script> let user = '" . $usuario ."';</script>";
?>



<?php
     if ($aside_hidden_status === "true"){
?>
<div class=" containeringasedi ml-4 mr-4 p-4" style="display: none; min-height: 100vh;">
    <?php } else {
        ?>
<div class=" container containeringasedi p-4" style="display: none; min-height: 100vh;">

    <?php      
    } ?>
    <h1>Deudas</h1>
    <div class="p-2 pb-4 mt-2 border-bottom d-flex justify-content-center" role="alert">
        
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#staticBackdrop">
         Crear Nueva Deuda
        </button>

    </div>
    <?php
                if (!empty($resultadoCuentas) && $resultadoCuentas->num_rows > 0) {
                    $x=0;
                    $totalIngresos = 0;
                    $totalGastos = 0;
    ?>
    <table class="w-100 table-striped ">
        <thead>
            <tr>
                <th scope="col" class="text-center font-weight-bold">Nombre De Cuenta</th>
                <th scope="col" class="text-center font-weight-bold">Saldo</th>
                <!--<th scope="col">Last</th>-->
                <th scope="col" class="text-center font-weight-bold">Opciones</th>
            </tr>
        </thead>
        <tbody>

            
            <?php
                while ($fila = $resultadoCuentas->fetch_object()) { ?>
                   
                    
                    <tr class="text-center colorchange">
                        <td class="font-weight-bold p-3" id="nombreCuenta<?php echo $fila->id_cuenta; ?>" value<?php echo $fila->id_cuenta; ?>="<?php echo $fila->nombre_cuenta; ?>"><?php echo $fila->nombre_cuenta ?> </td>
                        <td class="font-weight-bold p-3" id="balanceCuenta<?php echo $fila->id_cuenta; ?>" value<?php echo $fila->id_cuenta; ?>="<?php echo $fila->balance; ?>">$<?php echo $fila->balance ?> </td>
                        <td>
                            <a href="#editar" class="editarCuenta" data-id="<?php echo $fila->id_cuenta; ?>"
                             data-toggle="modal" data-target="#exampleModal"><i class="fa fa-pencil fa-lg"></i>
                            </a>

                            <a class="eliminarCuenta" id="eliminarCuenta<?php echo $fila->id_cuenta; ?>" 
                                value<?php echo $fila->id_cuenta; ?>="<?php echo $fila->nombre_cuenta; ?>" 
                                data-id="<?php echo $fila->id_cuenta; ?>"  href="#eliminar" data-toggle="modal" 
                                data-target="#modalEliminar"><i class="fa fa-trash fa-lg"></i>
                            </a>
                        </td>'
                    </tr>
                <?php }
            }else{
                echo 'No hay cuentas aún, pero puedes crear una! :)';
            }
            ?>
        </tbody>
    </table>
</div>



<!-- Modal agregar in-->
<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Añade un adeudo</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="content/php/modulos/adeudos/anadir_deuda.php" method="POST">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nombre de la cuenta</label>
                        <input type="text" class="form-control" name="nombre_cuenta">
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Cantidad de días para el abono (dejar 0 si se desea mensual)</label>
                        <input type="text" class="form-control" name="dias_plazo">
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Cantidad a abonar por plazo</label>
                        <input type="text" class="form-control" name="cantidad_plazo">
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Cantidad a abonar total</label>
                        <input type="text" class="form-control" name="cantidad_total">
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Fecha del primer pago</label>
                        <input type="date" class="form-control" name="primer_pago" id="adeudoCalendario">
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    <!--<div class="form-group">
                        <label for="exampleInputPassword1">Tipo de cuenta</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>-->
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="submit" class="btn btn-primary">Subir</button>
                </form>
            </div>  

        </div>
    </div>
</div>
<!-- Modal agregar end-->



<!-- Modal editar in-->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar cuenta</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="content/php/modulos/cuentas/editar_cuenta.php" method="POST">
            <div class="form-group">
                <label for="exampleInputEmail1">Nombre</label>
                <input type="hidden" name="idCuenta" id="idInput"></input>
                <input type="text" class="form-control" id="nuevoNombreCuenta" 
                       aria-describedby="emailHelp" name="nuevoNombreCuenta">
                <!--<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
            </div>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <!--<button type="button" class="btn btn-primary">Save changes</button>-->
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- Modal editar end-->


<!-- Modal eliminar -->
<div class="modal fade" id="modalEliminar" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Confirmación</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>¿Seguro que desea eliminar?</p><p id="cuentaAEliminar"></p>
        <hr>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-danger" id="confirmar">Eliminar</button>
      </div>
      
    </div>
  </div>
</div>