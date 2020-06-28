<?php
    require "conexion.php";
    if (isset($_GET)) {
        $conectar = new conexion();
    	$conexion = $conectar->conectar();
        echo "alert 'se estableció la conexion'";


        $cantidadIngreso = $_GET['cantidadIngreso'];
        $cuenta = $_GET['cuenta'];
        $categoriaIngreso = $_GET['categoriaIngreso'];
        $descripcionIngreso = $_GET['descripcionIngreso'];
        $fecha = $_GET['fecha'];

        echo $cantidadIngreso;

        $sql = "INSERT INTO ingresos(cantidad_ingreso, cuenta_ingreso, fecha_ingreso, categoria_ingreso, descripcion_ingreso)
                VALUES('$cantidadIngreso', '$cuenta', '$fecha', '$categoriaIngreso', '$descripcionIngreso')";
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
