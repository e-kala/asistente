<?php
    require "conexion.php";
    if (isset($_GET)) {
        $conectar = new conexion();
    	$conexion = $conectar->conectar();


        $cantidadGasto = $_GET['cantidadGasto'];
        $cuenta = $_GET['cuenta'];
        $categoriaGasto = $_GET['categoriaGasto'];
        $descripcionGasto = $_GET['descripcionGasto'];
        $fecha = $_GET['fecha'];

        echo $cantidadGasto;
        echo $fecha;

        $sql = "INSERT INTO gastos(cantidad_gasto, cuenta_gasto, fecha_gasto, categoria_gasto, descripcion_gasto)
                VALUES('$cantidadGasto', '$cuenta', '$fecha', '$categoriaGasto', '$descripcionGasto')";
        /*$sql = "INSERT INTO gastos(cantidad_gasto, fecha_gasto)
                VALUES('$cantidadGasto', '$fecha')";*/
        $datos = utf8_encode($sql);
        //$result = mysqli_query($conexion, $datos);
        //echo $result;

        if ($conexion->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conexion->error;
        }

    }else{
        echo "no hay datos que recibir";
    }

?>
