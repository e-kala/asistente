<?php

    $conectar = new conexion();
    $conexion = $conectar->conectar();

    $consultaIngresos = "SELECT * FROM ingresos";
    $resultadoIngresos = $conexion->query($consultaIngresos);
    $consultaGastos = $conexion->query("SELECT * FROM gastos");


?>


<div class="bg-primary p-4 font-weight-bold text-light tado" style="display: none;">
    <form>
        <input type="text" name="find" placeholder="Escribe aquí!"/>
        <button></button>
    </form>
    <?php
        if ($consultaGastos->num_rows > 0) {
        
            while ($filas = $consultaGastos->fetch_object()) {
                
                echo '<ul class=""> Nombre';
                echo '<li class="bg-dark text-center">' . $filas->categoria_gasto . '</li>';
                echo '</ul>';

                echo '<ul class=""> Descripción';
                echo '<li class="bg-dark text-center">' . $filas->descripcion_gasto . '</li>';
                echo '</ul>';

                echo '<ul class=""> Cuenta';
                echo '<li class="bg-dark text-center">' . $filas->cuenta_gasto . '</li>';
                echo '</ul>';

                echo '<ul class=""> Fecha';
                echo '<li class="bg-dark text-center">' . $filas->fecha_gasto . '</li>';
                echo '</ul>';

                echo '<ul class=""> Cantidad';
                echo '<li class="bg-dark text-center">' . $filas->cantidad_gasto . '</li>';
                echo '</ul>';



            }
        }
    ?>
    <!-- Usar js y definir condicion de resolucion que ejecute este php solo en resolucion movil -->
</div>

<div class="registromodsco p-4 m-4 text-white tered">
<h1 class="text-center text-white mb-4 tered">Registros</h1>
    <div class="men_data_registros tered">
        <a href="#gastos" class="option-menu-registro"><img src="./content/img/íconos/mengasto.png" width="70px" ></a>
        <a href="#ingresos" class="option-menu-registro"><img src="./content/img/íconos/meningreso.png" width="70px" ></a>
    </div>
    <script type="text/javascript">
        const registros_men_respon = document.getElementsByClassName("men_data_registros")[0]
        const show_men = () => {
            const devipo = getDevicePixelRatio()
            if (devipo.toString() === "1" && window.screen.width >= 1024){
            } else if (devipo.toString().match(/0\.5/gim)){
                registros_men_respon.style.display = "none"
            } else if (devipo.toString().match(/0\.25/gim)){
                registros_men_respon.style.display = "none"
            } else if (devipo.toString().match(/0\.33/gim)){
                registros_men_respon.style.display = "none"
            } else if (devipo.toString().match(/0\.6/gim)){
                registros_men_respon.style.display = "none"
            } else if (devipo.toString().match(/0\.7/gim)){
                registros_men_respon.style.display = "none"
            } else if (devipo.toString().match(/0\.80/gim)){
                registros_men_respon.style.display = "none"
            } else if (devipo.toString().match(/0\.89/gim)){
                registros_men_respon.style.display = "flex"
            } 

            if (window.screen.width <= 400){
                registros_men_respon.style.display = "flex"
            }
        }
        show_men()
    </script>

    <div class=" row position-relative tered" align="center" id="gastos">  
        <div class="col-lg-12 col-xl-6">
            <div class="menu-reg-top">
            <a href="index.php" class="backs text-light font-weight-bold">Atrás</a>
        </div>
            <h3 class="mb-4">Gastos</h3>
            <table class="table text-white">
                <thead>
                    <tr>
                        <th scope="col" class="co1 text-center">#</th>
                        <th scope="col" class="co1 text-center">Nombre</th>
                        <th scope="col" class="co1 text-center">Descripción</th>
                        <th scope="col" class="co1 text-center">Cuenta</th>
                        <th scope="col" class="co1 text-center">Fecha</th>
                        <th scope="col" class="co1 text-center">Cantidad</th>
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
                    <th scope="col" class="co2 text-center">#</th>
                    <th scope="col" class="co2 text-center">Nombre</th>
                    <th scope="col" class="co2 text-center">Descripción</th>
                    <th scope="col" class="co2 text-center">Cuenta</th>
                    <th scope="col" class="co2 text-center">Fecha</th>
                    <th scope="col" class="co2 text-center">Cantidad</th>
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
   <script type="text/javascript">
        const tered = document.getElementsByClassName("tered")[0]
        const tado = document.getElementsByClassName("tado")[0]
        if (window.screen.width >= 580){
            tered.style.display = "block"
            tado.style.display = "none"
        } else {
            console.log(tered,"mamamamama")
            tered.style.display = "none"
            tado.style.display = "block"
        }

    </script>

</div>