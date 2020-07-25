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
                while ($fila = $resultadoCuentas->fetch_object()) {
                    $x++;
                    
                    echo '<tr class="text-center colorchange">';
                            echo '<td class="font-weight-bold">' . $fila->nombre_cuenta . '</td>';
                            echo '<td>
                                        <a href=""><i class="fa fa-pencil fa-lg"></i></a>
                                         <a href=""><i class="fa fa-trash fa-lg"></i></a>
                                </td>';
                    echo '</tr>';
                }
            }else{
                echo 'No hay cuentas aún, pero puedes crear una! :)';
            }
            ?>
        </tbody>
    </table>
</div>



<!-- Modal -->
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