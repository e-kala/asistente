<?php
    $conectar = new conexion();
    $conexion = $conectar->conectar();

    $usuario = $_SESSION['user'];
    $consultaGastos = "SELECT * FROM gastos WHERE usuario_gasto = '$usuario'";
    $resultadoGastos = $conexion->query($consultaGastos);
    


?>
<div class="container containeringasedi p-4" style="display: none;">
    <div class="table-responsive">
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

                    if (!empty($resultadoGastos) && $resultadoGastos->num_rows > 0) {
                        $x=0;
                        $totalGastos = 0;
                        $totalGastos = 0;

                        while ($fila = $resultadoGastos->fetch_object()) {
                            $x++;?>
                            
                            <tr class="">

                                    <td class="p-3 text-center" 
                                        id="categoriaGasto<?php echo $fila->id_gasto ?>" 
                                        value<?php echo $fila->id_gasto; ?>="<?php echo $fila->categoria_gasto; ?>" >
                                          <?php echo $fila->categoria_gasto; ?>  
                                    </td>
                                    <td class="p-3 text-center" 
                                        id="descripcionGasto<?php echo $fila->id_gasto ?>" 
                                        value<?php echo $fila->id_gasto; ?>="<?php echo $fila->descripcion_gasto; ?>" >
                                          <?php echo $fila->descripcion_gasto; ?>
                                    </td>
                                    <td class="p-3 text-center" 
                                        id="cuentaGasto<?php echo $fila->id_gasto ?>" 
                                        value<?php echo $fila->id_gasto; ?>="<?php echo $fila->cuenta_gasto; ?>" >
                                          <?php echo $fila->cuenta_gasto; ?>     
                                    </td>
                                    <td class="p-3 text-center" 
                                        id="fechaGasto<?php echo $fila->id_gasto ?>" 
                                        value<?php echo $fila->id_gasto; ?>="<?php echo $fila->fecha_gasto; ?>" >
                                          <?php echo $fila->fecha_gasto; ?>      
                                    </td>
                                    <td class="p-3 text-center" 
                                        id="cantidadGasto<?php echo $fila->id_gasto ?>" 
                                        value<?php echo $fila->id_gasto; ?>="<?php echo $fila->cantidad_gasto; ?>" >
                                          <?php echo $fila->cantidad_gasto ?>    
                                    </td>

                                    <td>
                                        <a href="#editar" class="editarGasto" data-id="<?php echo $fila->id_gasto; ?>"
                                            data-toggle="modal" data-target="#exampleModal"><i class="fa fa-pencil fa-lg"></i>
                                        </a>

                                        <a class="eliminarGasto" id="eliminarGasto<?php echo $fila->id_gasto; ?>" 
                                            value<?php echo $fila->id_gasto; ?>="<?php echo $fila->categoria_gasto; ?>" 
                                            data-id="<?php echo $fila->id_gasto; ?>"  href="#eliminar" data-toggle="modal" 
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
        <h5 class="modal-title" id="exampleModalLabel">Editar Gastos</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="content/php/modulos/movimientos/gastos/editar_gasto.php" method="POST">
            <div class="form-group">
                <input type="hidden" name="idGasto" id="idInput"></input>

                <label for="exampleInputEmail1">Categoria</label>
                <input type="text" class="form-control" id="categoriaGastoInput" 
                       aria-describedby="emailHelp" name="categoriaGastoInput">
                </input>

                <label for="exampleInputEmail1">Descripción</label>
                <input type="text" class="form-control" id="descripcionGastoInput" 
                       aria-describedby="emailHelp" name="descripcionGastoInput">
                </input>

                <label for="exampleInputEmail1">Cuenta</label>
                <input type="text" class="form-control" id="cuentaGastoInput" 
                       aria-describedby="emailHelp" name="cuentaGastoInput">
                </input>

                <label for="exampleInputEmail1">Fecha</label>
                <input type="text" class="form-control" id="fechaGastoInput" 
                       aria-describedby="emailHelp" name="fechaGastoInput">
                </input>

                <label for="exampleInputEmail1">Cantidad</label>
                <input type="text" class="form-control" id="cantidadGastoInput" 
                       aria-describedby="emailHelp" name="cantidadGastoInput">
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