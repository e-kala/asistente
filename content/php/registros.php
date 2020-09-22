<script type="text/javascript">document.body.style.background  ="transparent"</script>

<?php

    $conectar = new conexion();
    $conexion = $conectar->conectar();

    $usuario = $_SESSION['user'];
    $consultaIngresos = "SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario'";
    $resultadoIngresos = $conexion->query($consultaIngresos);

    //Obtener totales de ingresos, gastos, y registros generales------------------------
    $totalIngresdb = mysqli_query($conexion,"SELECT COUNT(1) FROM ingresos WHERE usuario_ingreso='$usuario'");
    $totalGastosdb = mysqli_query($conexion,"SELECT COUNT(1) FROM gastos WHERE usuario_gasto='$usuario'");

    $rowingres = mysqli_fetch_array($totalIngresdb);
    $rowgastos = mysqli_fetch_array($totalGastosdb);

    $ningresos = $rowingres[0];
    $ngastos = $rowgastos[0];
    $totalregistros = $ningresos + $ngastos;
    //----------------------------------------------------------------------------------

    $consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario'");
    
    echo "<script> let user = '" . $usuario ."';</script>";
?>

<!-- Móvil -->
<?php include "content/php/consults_info/consults_movil_registros.php"; ?>


<!-- Escritorio -->
<div style="min-height: 100vh;">
    <div class="registromodsco p-4 m-4 tered registrosgasin registros" style="display: none;">
        <div class="menu-reg-top border-0">
            <a href="index.php#?#movimientos" class="backs colorchange font-weight-bold"><span class="colortextmodsprin">Atrás<i class="fa fa-arrow-circle-left ml-2" aria-hidden="true"></i></span></a>
        </div>
        <h3 class="pl-4 pr-4 pt-4 tered text-left">Registros</h3>
        <div class="men_data_registros tered">
            <a href="#gastos" class="option-menu-registro"><img src="./content/img/iconos/mengasto.png" width="70px" ></a>
            <a href="#ingresos" class="option-menu-registro"><img src="./content/img/iconos/meningreso.png" width="70px" ></a>
        </div>
        <div class="p-4 mb-4">
            <h3 class="ml-2 mb-4 text-center">Buscador <i class="fa fa-search ml-2" aria-hidden="true"></i></h3>
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
            <div class="mt-4">
                <h4 class="mt-4 pt-4 mb-2 pb-3">Acciones<i class="fa fa-cube ml-2" aria-hidden="true"></i></h4>
                <button class="btn mb-2 btn-danger" id="load_all_reg">Mostrar menos<i class="fa fa-eye-slash ml-2" aria-hidden="true"></i></button>
                <button class="btn mb-2 btn-light  opactionbutsel border" stat="false" id="selectionmultiple" data-html="true"  data-container="body" data-trigger="focus" data-toggle="popoverregistros" data-placement="bottom">Seleccionar elementos<i class="fa fa-hand-pointer-o ml-2" aria-hidden="true"></i></button>
                <button class="btn mb-2 alert-primary  opactionbutsel paint" stat="false" id="selectionmultiplepintar">Pintar<i class="fa fa-paint-brush ml-2" aria-hidden="true"></i></button>
                <button class="btn mb-2 btn-danger  opactionbutsel" stat="true" disabled="true" id="delete-group">Eliminar<i class="fa fa-trash ml-2" aria-hidden="true"></i></button>

            </div>
            <div class="d-flex flex-wrap justify-content-between">
                <div class=" ml-4 mt-4 alert-primary badge-pill border">
                   <span class="font-weight-bold">Registros:</span><span class="font-weight-bold" id="totalregs"> <?php echo $totalregistros; ?><i class="fa fa-database ml-2" aria-hidden="true"></i></span>
                </div>
                <div class=" ml-4 mt-4 alert-danger badge-pill border">
                   <span class="font-weight-bold">Gastos:</span><span class="font-weight-bold" id="totalg"> <?php echo $ngastos; ?><i class="fa fa-database ml-2" aria-hidden="true"></i></span>
                </div>
                <div class=" ml-4 mt-4 alert-success badge-pill border">
                   <span class="font-weight-bold">Ingresos:</span><span class="font-weight-bold" id="totali"> <?php echo $ningresos; ?><i class="fa fa-database ml-2" aria-hidden="true"></i></span>
                </div>
                <div class=" ml-4 mt-4 alert-warning badge-pill border">
                   <span class="font-weight-bold">Elementos seleccionados:</span><span class="font-weight-bold" id="seleccionadosn"> 0<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i></span>
                </div>
                <div class=" ml-4 mt-4 alert-danger badge-pill border">
                   <span class="font-weight-bold">Gastos seleccionados:</span><span class="font-weight-bold" id="seleccionadosg"> 0<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i></span>
                </div>
                 <div class=" ml-4 mt-4 alert-success badge-pill border">
                   <span class="font-weight-bold">Ingresos seleccionados:</span><span class="font-weight-bold" id="seleccionadosi"> 0<i class="fa fa-cloud-upload ml-2" aria-hidden="true"></i></span>
                </div>
            </div>
        </div>

        <script type="text/javascript" src="./content/js/order_js_general/show_more_less_registros_and_gastos.js"></script>

        <div class=" row position-relative tered tab pl-4 pr-4 pb-4" align="center" id="gastos">  
            <div class="col-lg-12 col-xl-12 mt-4">
                
                <h3 class="mb-4 user-select-none">Gastos<i class="fa fa-arrow-circle-down ml-2" aria-hidden="true" style="color:red; -webkit-color:red;"></i></h3>
                <div class="d-flex overflow-x">
                    <table class="w-100">
                        <thead>
                            <tr>
                                <th scope="col" class=" badge-pill badge-info colorchange p-2 text-center">#</th>
                                <th scope="col" class=" badge-pill badge-info colorchange p-2 text-center">Nombre</th>
                                <th scope="col" class=" badge-pill badge-info colorchange p-2 text-center">Descripción</th>
                                <th scope="col" class=" badge-pill badge-info colorchange p-2 text-center">Cuenta</th>
                                <th scope="col" class=" badge-pill badge-info colorchange p-2 text-center">Fecha</th>
                                <th scope="col" class=" badge-pill badge-info colorchange p-2 text-center">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody id="tbody-gastos" class="transition-ease-all" >

                            <?php
                                if (!empty($consultaGastos) && $consultaGastos->num_rows > 0) {
                                    $x=0;
                                    $y=0;
                                    $totalIngresos = 0;
                                    $totalGastos = 0;

                                    while ($fila = $consultaGastos->fetch_object()) {
                                        $x++;
                                        $y++;
                                        
                                        echo '<tr id="gasto-'.$x.'" class="text-center colorchange cursor-pointer hover-selector-one transition-ease-all gastocontain">';
                                            echo '<th scope="row" class="p-3">' .  $x++ .'</th>';
                                                echo '<td value="'.$fila->id_gasto.'" class="id_gasto font-weight-bold" style="display:none;">' . $fila->id_gasto . '</td>';
                                                echo '<td value="'.$fila->categoria_gasto.'" class="font-weight-bold text-center categoria_gasto" align="center">' . $fila->categoria_gasto . '</td>';
                                                echo '<td value="'.$fila->descripcion_gasto.'" class="font-weight-bold text-center descripcion_gasto " align="center">' . $fila->descripcion_gasto . '</td>';
                                                echo '<td value="'.$fila->cuenta_gasto.' " class="font-weight-bold text-center cuenta_gasto" align="center">' . $fila->cuenta_gasto . '</td>';
                                                echo '<td value="'.$fila->fecha_gasto.'"  class="font-weight-bold text-center fecha_gasto" align="center">' . $fila->fecha_gasto . '</td>';
                                                echo '<td value="'.$fila->cantidad_gasto.'" class="font-weight-bold text-center cantidad_gasto" align="center">$ ' . $fila->cantidad_gasto . '</td>';
                                        echo "<td>
                                                    <i style='display:none;' id='fg".$y."' class='fa fa-pencil p-1 badge-pill cursor-pointer btn btn-warning text-light ' aria-hidden='true' title='Editar'></i>
                                              </td>";
                                        echo '</tr>';
                                    }
                                }else{
                                    echo '<span class="menregistros_alert">no hay registros</span>';
                                }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="col-lg-12 col-xl-12 mt-4" id="ingresos">
                <h3 class="mb-4 user-select-none">Ingresos<i class="fa fa-arrow-circle-up ml-2" aria-hidden="true" style="color:#42FF29; -webkit-color:#42FF29;"></i></h3>
                <div class="d-flex overflow-x">
                    <table class="w-100 ">
                        <thead>
                            <th scope="col" class="badge-pill co2 text-light colorchange p-2 text-center">#</th>
                            <th scope="col" class="badge-pill co2 text-light colorchange p-2 text-center">Nombre</th>
                            <th scope="col" class="badge-pill co2 text-light colorchange p-2 text-center">Descripción</th>
                            <th scope="col" class="badge-pill co2 text-light colorchange p-2 text-center">Cuenta</th>
                            <th scope="col" class="badge-pill co2 text-light colorchange p-2 text-center">Fecha</th>
                            <th scope="col" class="badge-pill co2 text-light colorchange p-2 text-center">Cantidad</th>
                        </thead>
                        <tbody id="tbody-ingresos" class="transition-ease-all">
                        <?php

                            if (!empty($resultadoIngresos) && $resultadoIngresos->num_rows > 0) {
                                $x=0;
                                $y=0;
                                $totalIngresos = 0;
                                $totalGastos = 0;

                                while ($fila = $resultadoIngresos->fetch_object()) {
                                    $x++;
                                    $y++;

                                    echo '<tr id="ingreso-'.$x.'" class="text-center colorchange cursor-pointer hover-selector-one transition-ease-all ingresocontain">';
                                        echo '<th scope="row" class="p-3">' .  $x++ .'</th>';
                                            echo '<td value="'.$fila->id_ingreso.'" class="id_ingreso font-weight-bold" style="display:none;">' . $fila->id_ingreso . '</td>';
                                            echo '<td value="'.$fila->categoria_ingreso.'" class="categoria_ingreso font-weight-bold">' . $fila->categoria_ingreso . '</td>';
                                            echo '<td value="'.$fila->descripcion_ingreso.'" class="descripcion_ingreso font-weight-bold">' . $fila->descripcion_ingreso . '</td>';
                                            echo '<td value="'.$fila->cuenta_ingreso.'" class="cuenta_ingreso font-weight-bold">' . $fila->cuenta_ingreso . '</td>';
                                            echo '<td value="'.$fila->fecha_ingreso.'" class="fecha_ingreso font-weight-bold">' . $fila->fecha_ingreso . '</td>';
                                            echo '<td value="'.$fila->cantidad_ingreso.'" class="cantidad_ingreso font-weight-bold">$ ' . $fila->cantidad_ingreso . '</td>';
                                            echo "<td>
                                                    <i style='display:none;' id='fgin".$y."'  class='fa fa-pencil p-1 badge-pill cursor-pointer btn btn-warning text-light' aria-hidden='true' title='Editar'></i>
                                                </td>";
                                    echo '</tr>';
                                }
                            }else{
                                 echo '<span class="menregistros_alert">no hay registros</span>';
                            }
                        ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="./content/js/registros-movimientos.js"></script>
    </div>
</div>