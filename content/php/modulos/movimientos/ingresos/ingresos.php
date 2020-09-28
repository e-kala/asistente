<?php
    $conectar = new conexion();
    $conexion = $conectar->conectar();

    $usuario = $_SESSION['user'];
    $consultaIngresos = "SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario'";
    $resultadoIngresos = $conexion->query($consultaIngresos);
    
?>


<?php
     if ($aside_hidden_status === "true"){
?>
<div class="containeringasedi ml-4 mr-4 mb-4 p-4" style="min-height: 100vh; display: none;">
<?php } else {
        ?>
<div class="container containeringasedi p-4" style="min-height: 100vh; display: none;">
<?php      
} ?>
    <div class="table-responsive p-4">
        <h4 class="pb-4 border-bottom border-secondary">Ingresos <i class="fa fa-arrow-circle-up ml-2" style="color:#42FF29; -webkit-color:#42FF29;" aria-hidden="true"></i></h4>
        <table class="w-100 table-striped">
            <thead>
                <tr>
                    <th scope="col" class="p-2 font-weight-bold text-center">Categoría</th>
                    <th scope="col" class="p-2 font-weight-bold text-center">Descripción</th>
                    <th scope="col" class="p-2 font-weight-bold text-center">Cuenta</th>
                    <th scope="col" class="p-2 font-weight-bold text-center">Fecha</th>
                    <th scope="col" class="p-2 font-weight-bold text-center">Cantidad</th>
                    <th scope="col" class="p-2 font-weight-bold text-center">Opciones</th>
                </tr>
            </thead>
            <tbody>
                <?php

                    if (!empty($resultadoIngresos) && $resultadoIngresos->num_rows > 0) {
                        $x=0;
                        $totalIngresos = 0;
                        $totalGastos = 0;

                        while ($fila = $resultadoIngresos->fetch_object()) {
                            $x++;?>
                            
                            <tr class="">

                                    <td class="p-3 text-center" 
                                        id="categoriaIngreso<?php echo $fila->id_ingreso ?>" 
                                        value<?php echo $fila->id_ingreso; ?>="<?php echo $fila->categoria_ingreso; ?>" >
                                          <?php echo $fila->categoria_ingreso; ?>  
                                    </td>
                                    <td class="p-3 text-center" 
                                        id="descripcionIngreso<?php echo $fila->id_ingreso ?>" 
                                        value<?php echo $fila->id_ingreso; ?>="<?php echo $fila->descripcion_ingreso; ?>" >
                                          <?php echo $fila->descripcion_ingreso; ?>
                                    </td>
                                    <td class="p-3 text-center" 
                                        id="cuentaIngreso<?php echo $fila->id_ingreso ?>" 
                                        value<?php echo $fila->id_ingreso; ?>="<?php echo $fila->cuenta_ingreso; ?>" >
                                          <?php echo $fila->cuenta_ingreso; ?>     
                                    </td>
                                    <td class="p-3 text-center" 
                                        id="fechaIngreso<?php echo $fila->id_ingreso ?>" 
                                        value<?php echo $fila->id_ingreso; ?>="<?php echo $fila->fecha_ingreso; ?>" >
                                          <?php echo $fila->fecha_ingreso; ?>      
                                    </td>
                                    <td class="p-3 text-center" 
                                        id="cantidadIngreso<?php echo $fila->id_ingreso ?>" 
                                        value<?php echo $fila->id_ingreso; ?>="<?php echo $fila->cantidad_ingreso; ?>" >
                                          <?php echo $fila->cantidad_ingreso ?>    
                                    </td>

                                    <td class="text-center">
                                        <a href="#editar" class="editarIngreso" data-id="<?php echo $fila->id_ingreso; ?>"
                                            data-toggle="modal" data-target="#exampleModal"><i class="fa fa-pencil fa-lg"></i>
                                        </a>

                                        <a class="eliminarIngreso" id="eliminarIngreso<?php echo $fila->id_ingreso; ?>" 
                                            value<?php echo $fila->id_ingreso; ?>="<?php echo $fila->categoria_ingreso; ?>" 
                                            data-id="<?php echo $fila->id_ingreso; ?>"  href="#eliminar" data-toggle="modal" 
                                            data-target="#modalEliminar"><i class="fa fa-trash fa-lg"></i>
                                        </a>
                                    
                                    </td>
                            </tr>
                    <?php }
                    }else{
                        echo "no hay registros";
                    }
                ?>
            </tbody>
        </table>
    </div>
</div>




<!-- Modal editar in-->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar Ingreso</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="content/php/modulos/movimientos/ingresos/editar_ingreso.php" method="POST">
            <div class="form-group">
                <input type="hidden" name="idIngreso" id="idInput"></input>

                <label for="exampleInputEmail1">Categoria</label>
                <input type="text" class="form-control" id="categoriaIngresoInput" 
                       aria-describedby="emailHelp" name="categoriaIngresoInput">
                </input>

                <label for="exampleInputEmail1">Descripción</label>
                <input type="text" class="form-control" id="descripcionIngresoInput" 
                       aria-describedby="emailHelp" name="descripcionIngresoInput">
                </input>

                <label for="exampleInputEmail1">Cuenta</label>
                <input type="text" class="form-control" id="cuentaIngresoInput" 
                       aria-describedby="emailHelp" name="cuentaIngresoInput">
                </input>

                <label for="exampleInputEmail1">Fecha</label>
                <input type="text" class="form-control" id="fechaIngresoInput" 
                       aria-describedby="emailHelp" name="fechaIngresoInput">
                </input>

                <label for="exampleInputEmail1">Cantidad</label>
                <input type="text" class="form-control" id="cantidadIngresoInput" 
                       aria-describedby="emailHelp" name="cantidadIngresoInput">
                </input>

                
                <!--<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
            </div>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <!--<button type="button" class="btn btn-primary">Save changes</button>-->
            <button type="submit" class="btn btn-primary">Editar</button>
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