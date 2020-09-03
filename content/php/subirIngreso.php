<?php
    require "conexion.php";
    if (isset($_GET)) {

        session_start();


        
        $conectar = new conexion();
    	$conexion = $conectar->conectar();
        echo "alert 'se estableció la conexion'";

        $usuario = $_SESSION['user'];
        $cantidadIngreso = $_GET['cantidadIngreso'];
        $cuenta = $_GET['cuenta'];
        $categoriaIngreso = $_GET['categoriaIngreso'];
        $descripcionIngreso = $_GET['descripcionIngreso'];
        $fecha = $_GET['fecha'];

        echo $cantidadIngreso;

        //$sql = "INSERT INTO ingresos(usuario_ingreso, cantidad_ingreso, cuenta_ingreso, fecha_ingreso, categoria_ingreso, descripcion_ingreso)
        //        VALUES('$usuario', '$cantidadIngreso', '$cuenta', '$fecha', '$categoriaIngreso', '$descripcionIngreso')";
        $sql = "CALL Ingreso('$usuario', '$cantidadIngreso', '$cuenta', '$fecha', '$descripcionIngreso', '$categoriaIngreso')";
	$datos = utf8_encode($sql);
        //$result = mysqli_query($conexion, $datos);
        //echo $result;

        if ($conexion->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            //echo "Error: " . $sql . "<br>" . $conexion->error;
		echo "ERRORSQL";
        }

    }else{
        echo "no hay datos que recibir";
    }

?>
