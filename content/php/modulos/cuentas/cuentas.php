<?php

    $conectar = new conexion();
    $conexion = $conectar->conectar();

    $usuario = $_SESSION['user'];
    $consultaCuentas = "SELECT * FROM cuentas WHERE usuario_cuenta = '$usuario'";
    $resultadoCuentas = $conexion->query($consultaCuentas);
    //$consultaCuentas = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario'");

    //echo "<script> let user = '" . $usuario ."';</script>";
?>


<div class="container text-center text-light">
    <h1>Cuentas</h1>
    <div class="alert alert-success" role="alert">
        
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#staticBackdrop">
         Crear Nueva Cuenta
        </button>

    </div>
    <?php
                if (!empty($resultadoCuentas) && $resultadoCuentas->num_rows > 0) {
                    $x=0;
                    $totalIngresos = 0;
                    $totalGastos = 0;
    ?>
    <table class="table table-striped text-light">
        <thead>
            <tr>
                <th scope="col">Nombre De Cuenta</th>
                <!--<th scope="col">Saldo</th>-->
                <!--<th scope="col">Last</th>-->
                <th scope="col">Opciones</th>
            </tr>
        </thead>
        <tbody>

            
            <?php
                while ($fila = $resultadoCuentas->fetch_object()) { ?>
                   
                    
                    <tr class="text-center colorchange">
                        <td class="font-weight-bold" id="nombreCuenta<?php echo $fila->id_cuenta; ?>" value<?php echo $fila->id_cuenta; ?>="<?php echo $fila->nombre_cuenta; ?>"><?php echo $fila->nombre_cuenta ?> </td>
                        <td>
                            <a href="#editar" class="editarCuenta" data-id="<?php echo $fila->id_cuenta; ?>"
                             data-toggle="modal" data-target="#exampleModal"><i class="fa fa-pencil fa-lg"></i></a>
                            <a href="#eliminar"><i class="fa fa-trash fa-lg"></i></a>
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
                <h5 class="modal-title" id="staticBackdropLabel">Crea una nueva cuenta</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="content/php/modulos/cuentas/anadir_cuenta.php" method="POST">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nombre de la cuenta</label>
                        <input type="text" class="form-control" name="nombre_cuenta">
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
                <input type="text" class="form-control" id="nuevoNombreCuenta" aria-describedby="emailHelp" name="nuevoNombreCuenta">
                <!--<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
            </div>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <!--<button type="button" class="btn btn-primary">Save changes</button>-->
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- Modal editar end-->