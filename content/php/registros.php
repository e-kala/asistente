<?php

    include "content/php/conexion.php";
    $conectar = new conexion();
    $conexion = $conectar->conectar();

    $consultaIngresos = "SELECT * FROM ingresos";
    $resultadoIngresos = $conexion->query($consultaIngresos);
    $consultaGastos = $conexion->query("SELECT * FROM gastos");


?>
<div class="container text-white">
<h1 class="text-center text-white">Registros</h1>

<div class="row">        
    <div class="col-sm-6">
        <h1>Gastos</h1>
        <table class="table text-white">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Cuenta</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Cantidad</th>

                </tr>
            </thead>
            <tbody>
                <?php
                    if ($consultaGastos->num_rows > 0) {
                        $x=0;
                        $totalIngresos = 0;
                        $totalGastos = 0;
                    
                        while ($fila = $consultaGastos->fetch_object()) {
                            $x++;
                            
                            echo '<tr>';
                                echo '<th scope="row">' .  $x++ .'</th>';
                                    echo '<td>' . $fila->categoria_gasto . '</td>';
                                    echo '<td>' . $fila->descripcion_gasto . '</td>';
                                    echo '<td>' . $fila->cuenta_gasto . '</td>';
                                    echo '<td>' . $fila->fecha_gasto . '</td>';
                                    echo '<td>$ ' . $fila->cantidad_gasto . '</td>';
                            echo '</tr>';
                
                            
                        }
                        
                    }

                ?>

            </tbody>
        </table>
    </div>

    <div class="col-sm-6">
        <h1>Ingresos</h1>
        <table class="table text-white">
            <thead>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Cuenta</th>
                <th scope="col">Fecha</th>
                <th scope="col">Cantidad</th>
            </thead>
            <tbody>
            <?php

                if ($resultadoIngresos->num_rows > 0) {
                    $x=0;
                    $totalIngresos = 0;
                    $totalGastos = 0;

                    while ($fila = $resultadoIngresos->fetch_object()) {
                        $x++;
                        
                        echo '<tr>';
                            echo '<th scope="row">' .  $x++ .'</th>';
                                echo '<td>' . $fila->categoria_ingreso . '</td>';
                                echo '<td>' . $fila->descripcion_ingreso . '</td>';
                                echo '<td>' . $fila->cuenta_ingreso . '</td>';
                                echo '<td>' . $fila->fecha_ingreso . '</td>';
                                echo '<td>$ ' . $fila->cantidad_ingreso . '</td>';
                        echo '</tr>';

                        
                    }
                    
                }
            ?>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </table>
        
    </div>
    
</div>

</div>