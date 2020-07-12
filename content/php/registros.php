<?php

    $conectar = new conexion();
    $conexion = $conectar->conectar();

    $consultaIngresos = "SELECT * FROM ingresos";
    $resultadoIngresos = $conexion->query($consultaIngresos);
    $consultaGastos = $conexion->query("SELECT * FROM gastos");


?>
<div class="registromodsco p-4 m-4 text-white">
<h1 class="text-center text-white mb-4">Registros</h1>
<div class="men_data_registros">
    <a href="index.php">Atrás</a>
    <a href="#gastos">Gastos</a>
    <a href="#ingresos">Ingresos</a>
</div>
<script type="text/javascript">
    const registros_men_respon = document.getElementsByClassName("men_data_registros")[0]
    const show_men = () => {
        if (window.screen.width >= 500){
            registros_men_respon.style.display = "none"
        } else {
            registros_men_respon.style.display = "block"
        }
    
    }
    window.onload = () => show_men()
    window.onresize = () => show_men()
</script>

<div class=" row" align="center" id="gastos">        
    <div class="col-lg-12 col-xl-6">
        <h3 class="mb-4">Gastos</h3>
        <table class="table text-white">
            <thead>
                <tr>
                    <th scope="col" class="bg-dark text-center">#</th>
                    <th scope="col" class="bg-dark text-center">Nombre</th>
                    <th scope="col" class="bg-dark text-center">Descripción</th>
                    <th scope="col" class="bg-dark text-center">Cuenta</th>
                    <th scope="col" class="bg-dark text-center">Fecha</th>
                    <th scope="col" class="bg-dark text-center">Cantidad</th>

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
                            
                            echo '<tr class="text-center">';
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

    <div class="col-lg-12 col-xl-6" id="ingresos">
        <h3 class="mb-4">Ingresos</h3>
        <table class="table text-white ">
            <thead>
                <th scope="col" class="bg-secondary text-center">#</th>
                <th scope="col" class="bg-secondary text-center">Nombre</th>
                <th scope="col" class="bg-secondary text-center">Descripción</th>
                <th scope="col" class="bg-secondary text-center">Cuenta</th>
                <th scope="col" class="bg-secondary text-center">Fecha</th>
                <th scope="col" class="bg-secondary text-center">Cantidad</th>
            </thead>
            <tbody>
            <?php

                if ($resultadoIngresos->num_rows > 0) {
                    $x=0;
                    $totalIngresos = 0;
                    $totalGastos = 0;

                    while ($fila = $resultadoIngresos->fetch_object()) {
                        $x++;
                        
                        echo '<tr class="text-center">';
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