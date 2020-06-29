/*
    class metodos {
        public function mostrarDatos($sql){
            $c = new conectar();
            $conexion = $c->conexion();

            $result = $mysqli_query($conexion, $sql);
            return mysqli_fetch_all($result, MYSQLI_ASSOC);
        }
    }

*/
<?php

    include_once 'php/conexion.php'
    include_once 'php/MetodoIngresos.php';

    $objeto = new MetodoIngresos();
    /*
    $sql = "SELECT * FROM  gastos";
    $data = objeto->mostrar($sql);


    $sql = "SELECT * FROM  ingresos";
    $data = objeto->mostrar($sql);
    */


    foreach ($dta as $key) {

        echo $key['dni'];
    }




?>
