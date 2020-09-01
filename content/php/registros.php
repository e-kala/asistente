<script type="text/javascript">document.body.style.background  ="transparent"</script>

<?php

    $conectar = new conexion();
    $conexion = $conectar->conectar();

    $usuario = $_SESSION['user'];
    $consultaIngresos = "SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario'";
    $resultadoIngresos = $conexion->query($consultaIngresos);
    $consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario'");
    
    echo "<script> let user = '" . $usuario ."';</script>";
?>

<!-- Móvil -->
<?php include "content/php/consults_info/consults_movil_registros.php"; ?>


<!-- Escritorio -->
<div class="registromodsco p-4 m-4 tered registrosgasin registros" style="display: none;">
    <div class="menu-reg-top">
        <a href="index.php#?#movimientos" class="backs colorchange font-weight-bold">Atrás</a>
    </div>
    <h3 class=" pl-4 pr-4 pt-4 tered">Registros</h3>
    <div class="men_data_registros tered">
        <a href="#gastos" class="option-menu-registro"><img src="./content/img/iconos/mengasto.png" width="70px" ></a>
        <a href="#ingresos" class="option-menu-registro"><img src="./content/img/iconos/meningreso.png" width="70px" ></a>
    </div>
    <div class="p-4 mb-4">
        <h3 class="ml-2 mb-4 text-center">Buscador <img src="./content/img/iconos/lupa.png" width="50px"></h3>
        <form id="formregdesk" class="frguss">
            <div class="mt-3 flexgregdesk d-flex center-flex">
                <h4 class="colorchange mb-3 text-center">Selecciona lo que deseas buscar</h4>
                <select  value="Ingresos"  class="menrego w-100 p-3 ml-4 bg-darkblue3">
                    <option selected>Ingresos</option>
                    <option>Gastos</option>
                </select>
            </div>
            <div class="d-flex center-flex w-100" align="center">
                <input type="text" class="mt-3 p-3 findd flexgregdesk w-100 bg-inputtextdark1 coholdermes"  placeholder="Escribe aquí!" />
                <button  class="find- ml-1 mt-3 btn btn-primary">Buscar</button>
            </div>
        </form>
        <br>
        <div class="tadoress bgchan"></div>
        <button class="btn btn-danger mt-4" id="load_all_reg">Mostrar menos</button>
    </div>

    <script type="text/javascript" src="./content/js/order_js_general/show_more_less_registros_and_gastos.js"></script>

    <div class=" row position-relative tered tab pl-4 pr-4 pb-4" align="center" id="gastos">  
        <div class="col-lg-12 col-xl-6 mt-4">
            
            <h3 class="mb-4">Gastos</h3>
            <table class="w-100">
                <thead>
                    <tr>
                        <th scope="col" class="co1 colorchange p-2 text-center">#</th>
                        <th scope="col" class="co1 colorchange p-2 text-center">Nombre</th>
                        <th scope="col" class="co1 colorchange p-2 text-center">Descripción</th>
                        <th scope="col" class="co1 colorchange p-2 text-center">Cuenta</th>
                        <th scope="col" class="co1 colorchange p-2 text-center">Fecha</th>
                        <th scope="col" class="co1 colorchange p-2 text-center">Cantidad</th>
                    </tr>
                </thead>
                <tbody>

                    <?php
                        if (!empty($consultaGastos) && $consultaGastos->num_rows > 0) {
                            $x=0;
                            $totalIngresos = 0;
                            $totalGastos = 0;

                            while ($fila = $consultaGastos->fetch_object()) {
                                $x++;
                                
                                echo '<tr class="text-center colorchange">';
                                    echo '<th scope="row" class="p-3">' .  $x++ .'</th>';
                                        echo '<td class="font-weight-bold">' . $fila->categoria_gasto . '</td>';
                                        echo '<td class="font-weight-bold">' . $fila->descripcion_gasto . '</td>';
                                        echo '<td class="font-weight-bold">' . $fila->cuenta_gasto . '</td>';
                                        echo '<td class="font-weight-bold">' . $fila->fecha_gasto . '</td>';
                                        echo '<td class="font-weight-bold">$ ' . $fila->cantidad_gasto . '</td>';
                                echo '</tr>';
                            }
                        }else{
                            echo 'no hay registros';
                        }
                    ?>
                </tbody>
            </table>
        </div>

        <div class="col-lg-12 col-xl-6 mt-4" id="ingresos">
            <h3 class="mb-4">Ingresos</h3>
            <table class="w-100 ">
                <thead>
                    <th scope="col" class="co2 colorchange p-2 text-center">#</th>
                    <th scope="col" class="co2 colorchange p-2 text-center">Nombre</th>
                    <th scope="col" class="co2 colorchange p-2 text-center">Descripción</th>
                    <th scope="col" class="co2 colorchange p-2 text-center">Cuenta</th>
                    <th scope="col" class="co2 colorchange p-2 text-center">Fecha</th>
                    <th scope="col" class="co2 colorchange p-2 text-center">Cantidad</th>
                </thead>
                <tbody>
                <?php

                    if (!empty($resultadoIngresos) && $resultadoIngresos->num_rows > 0) {
                        $x=0;
                        $totalIngresos = 0;
                        $totalGastos = 0;

                        while ($fila = $resultadoIngresos->fetch_object()) {
                            $x++;
                            
                            echo '<tr class="text-center colorchange">';
                                echo '<th scope="row" class="p-3">' .  $x++ .'</th>';
                                    echo '<td class="font-weight-bold">' . $fila->categoria_ingreso . '</td>';
                                    echo '<td class="font-weight-bold">' . $fila->descripcion_ingreso . '</td>';
                                    echo '<td class="font-weight-bold">' . $fila->cuenta_ingreso . '</td>';
                                    echo '<td class="font-weight-bold">' . $fila->fecha_ingreso . '</td>';
                                    echo '<td class="font-weight-bold">$ ' . $fila->cantidad_ingreso . '</td>';
                            echo '</tr>';
                        }
                    }else{
                        echo "no hay registros";
                    }
                ?>
                </tbody>
            </table>
        </div>
    </div>
</div>