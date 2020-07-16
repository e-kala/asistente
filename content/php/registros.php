<?php

    $conectar = new conexion();
    $conexion = $conectar->conectar();

    $consultaIngresos = "SELECT * FROM ingresos";
    $resultadoIngresos = $conexion->query($consultaIngresos);
    $consultaGastos = $conexion->query("SELECT * FROM gastos");

?>


<!-- Móvil -->
<?php include "content/php/consults_info/consults_movil_registros.php"; ?>


<!-- Escritorio -->

<div class="registromodsco p-4 m-4 text-white tered">
    <div class="menu-reg-top">
        <a href="index.php" class="backs text-light font-weight-bold">Atrás</a>
    </div>
    <h1 class="text-white p-4 tered">Registros</h1>
    <div class="men_data_registros tered">
        <a href="#gastos" class="option-menu-registro"><img src="./content/img/íconos/mengasto.png" width="70px" ></a>
        <a href="#ingresos" class="option-menu-registro"><img src="./content/img/íconos/meningreso.png" width="70px" ></a>
    </div>
    <div class="p-4 mb-4">
        <h3 class="ml-2 mb-4 text-center">Buscador <img src="./content/img/íconos/lupa.png" width="50px"></h3>
        <form id="formregdesk" class="frguss">
            <div class="mt-3 flexgregdesk d-flex center-flex">
                <h4 class="mb-3 text-center">Selecciona lo que deseas buscar</h4>
                <select  value="Ingresos"  class="menrego w-100 p-3 ml-4 bg-darkblue3">
                    <option selected>Ingresos</option>
                    <option>Gastos</option>
                </select>
            </div>
            <div class="d-flex center-flex w-100" align="center">
                <h4 class="mb-3  text-center ">Escribe aquí!</h4>
                <input type="text" class="mt-3 p-3 findd flexgregdesk w-100 bg-inputtextdark1" />
                <button  class="find- ml-1 mt-3 btn btn-primary">Buscar</button>
            </div>
        </form>
        <div class="tadoress"></div>
        <button class="btn btn-danger" id="load_all_reg">Mostrar menos</button>
    </div>
    <script type="text/javascript">
        let formregdesktop = document.getElementsByClassName("frguss")[0] 
        let tadoresdesktop = document.getElementsByClassName("tadoress")[0] 
        let menregdesktop = document.getElementsByClassName("menrego")[0]
        let finddesktop = document.getElementsByClassName("findd")[0]

        search(formregdesktop, tadoresdesktop, menregdesktop, finddesktop, { mode : "desktop"}) //t => m, f => d

        const load_all_reg_btn = document.getElementById("load_all_reg")
        let show = true 
        load_all_reg.onclick = () => {
            show = !show
            if (show){
                load_all_reg.innerHTML = "Mostrar menos"
                load_all_reg.className = "btn btn-danger"
                document.getElementsByClassName("tab")[0].style.display = "flex"
                document.getElementsByClassName("tab")[0].animate([{
                    opacity:0
                },{
                    opacity:1
                }],{duration:400, iterations:1})
                document.getElementsByClassName("tab")[0].style.opacity = "1"
            } else {
                if (!window.location.href.match(/\#gastos/gim)){
                    window.location.href = window.location.href + "#gastos"
                } 
                load_all_reg.innerHTML = "Mostrar más"
                load_all_reg.className = "btn btn-success"
                setTimeout(()=>{
                    document.getElementsByClassName("tab")[0].style.display = "none"
                },450)
                document.getElementsByClassName("tab")[0].style.opacity = "0"
                document.getElementsByClassName("tab")[0].animate([{
                    opacity:1
                },{
                    opacity:0
                }],{duration:400, iterations:1})
            }
        }

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

    <div class=" row position-relative tered tab pl-4 pr-4" align="center" id="gastos">  
        <div class="col-lg-12 col-xl-6">
            
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
        const tado = document.getElementsByClassName("tado")[0]
        const tered = document.getElementsByClassName("tered")[0]
        
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



<!-- 
MEJORAR ASPECTO DE REGISTROS.PHP
Hacer filtro en registros.php tanto para movil como version escritorio
CORREGIR ERRORES DE CONSOLA POR CADA SECCION
HACER FUNCIONAR EL JSON DE LA CONFIGURACION PARA QUE SE APLIQUEN Y MANTENGAN CAMBIOS (DARK / LIGHT MODE)
TRABAJAR MAS LA VENTANA DE REGISTRO DE USUARIO -->


1.- Mejorar aspecto de registros.php
2.- Hacer filtro en registros.php tanto para móvil como para versión escritorio, para filtrar busquedas de gastos e ingresos
3.- Adicion de íconos y detalles menores
4.- El modo móvil está en el directorio ./content/php/consults_info/consults_movil_registro.php y lo invoco en registros.php con un include, lo hice aparte para que no se hiciera tan largo todo el código dentro de registros.php