<?php
    include "php/conexion.php";
    $conectar = new conexion();
    $conexion = $conectar->conectar();

    /*$consulta = "SELECT sum(cantidad_ingreso) as total FROM ingresos
                    UNION
        SELECT sum(cantidad_gasto) FROM gastos";*/


    $consulta = "SELECT sum(cantidad_gasto) as totalG FROM gastos";
    $consulta2 = "SELECT sum(cantidad_ingreso)  as totalI FROM ingresos";

    $consulta3 = "SELECT sum(cantidad_gasto) as totalG, sum(cantidad_ingreso)  as totalI
                    FROM gastos, ingresos";
    $consulta4 = "SELECT sum(cantidad_gasto), sum(cantidad_ingreso)
                                    FROM gastos, ingresos";
    $resultado = $conexion->query($consulta4);

    if ($resultado->num_rows > 0) {
        while ($fila = $resultado->fetch_assoc()) {

                $totalIngresos = $fila['cantidad_gasto'];
                $totalGastos = $fila['totalG'];
                echo "Total Ingresos: ". $totalIngresos . "<br>";
                echo "Total Gastos: ". $totalGastos;
                //echo "<br> total: " .$total = $totalIngresos - $totalGastos;

        }
    }

 ?>
