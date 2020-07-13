<?php

    $conectar = new conexion();
    $conexion = $conectar->conectar();

    $consultaIngresos = "SELECT * FROM ingresos";
    $resultadoIngresos = $conexion->query($consultaIngresos);
    $consultaGastos = $conexion->query("SELECT * FROM gastos");

?>


<!-- Movil -->

<div class=" p-4 font-weight-bold text-light tado" style="display: none;">
    <form id="formreg">
        <h3 class="flexgrow">Selecciona lo que deseas buscar</h3>
        <select id="menreg" value="Ingresos"  class="flexgrow">
            <option selected>Ingresos</option>
            <option>Gastos</option>
        </select>
        <h3 class="flexgrow">Buscar por</h3>
        <select id="menreg2"  class="flexgrow">
            <option>Nombre</option>
            <option>Fecha</option>
        </select>

        <input type="text" class="mt-3 p-3" id="find" placeholder="Escribe aquí!"/>
        <button id="find-" class="mt-3 p-3 btn btn-dark">Buscar</button>
    </form>
    <div id="tadores"></div>

    <script type="text/javascript">
        const tadores = document.getElementById("tadores")
        const menreg = document.getElementById("menreg")
        const find = document.getElementById("find")
        const formreg = document.getElementById("formreg")

        let selected = "ingresos"
        menreg.addEventListener("click", (e)=>{
            selected = e.target.options[e.target.selectedIndex].text
            faun()
        })


        const faun = () => {
            formreg.onsubmit = e => {
                e.preventDefault()
                let word = find.value
                if (word !== ""){
                    $.post("./content/php/consults_info/consults.php",
                        { 
                            name:word,
                            category: selected.toLowerCase() !== "" ? selected.toLowerCase() : "ingresos"
                        }).done(data =>{
                            data = JSON.parse(data)
                            console.log(data)
                            let length = Object.values(data.infogen).length
                            if (selected === "ingresos"){
                                tadores.innerHTML = `   

                                <div class="bg-dark p-4">
                                   <div>Id:  ${data.infogen.id_ingreso}</div>
                                   <div>Nombre:  ${data.infogen.categoria_ingreso}</div>
                                   <div>Descripción:  ${data.infogen.descripcion_ingreso}</div>
                                   <div>Cuenta:  ${data.infogen.cuenta_ingreso}</div>
                                   <div>Fecha:  ${data.infogen.fecha_ingreso}</div>
                                   <div>Cantidad:  ${data.infogen.cantidad_ingreso}</div>
                                </div>
                                `
                            } else {
                                tadores.innerHTML = `   

                                <div class="bg-dark p-4">
                                   <div>Id:  ${data.infogen.id_gasto}</div>
                                   <div>Nombre:  ${data.infogen.categoria_gasto}</div>
                                   <div>Descripción:  ${data.infogen.descripcion_gasto}</div>
                                   <div>Cuenta:  ${data.infogen.cuenta_gasto}</div>
                                   <div>Fecha:  ${data.infogen.fecha_gasto}</div>
                                   <div>Cantidad:  ${data.infogen.cantidad_gasto}</div>
                                </div>
                                `
                            }
                    })
                } else {
                    tadores.innerHTML = ""
                }
                
            }
        }
        faun()
        
    </script>
</div>





<!-- Escritorio -->

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