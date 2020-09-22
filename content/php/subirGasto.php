<?php
    
    require "conexion.php";
    if (isset($_GET)) {

        $conectar = new conexion();
        $conexion = $conectar->conectar();
        
        session_start();


        $usuario = $_SESSION['user'];
        $cantidadGasto = $_GET['cantidadGasto'];
        $cuenta = $_GET['cuenta'];
        $categoriaGasto = $_GET['categoriaGasto'];
        $descripcionGasto = $_GET['descripcionGasto'];
        $fecha = $_GET['fecha'];

        echo $cantidadGasto;
        echo $fecha;

        //$sql = "INSERT INTO gastos(usuario_gasto, cantidad_gasto, cuenta_gasto, fecha_gasto, categoria_gasto, descripcion_gasto)
        //        VALUES('$usuario', '$cantidadGasto', '$cuenta', '$fecha', '$categoriaGasto', '$descripcionGasto')";
        /*$sql = "INSERT INTO gastos(cantidad_gasto, fecha_gasto)
                VALUES('$cantidadGasto', '$fecha')";*/
        $sql = "CALL Gasto('$usuario', '$cantidadGasto', '$cuenta', '$fecha', '$descripcionGasto', '$categoriaGasto')";
	$datos = utf8_encode($sql);
        //$result = mysqli_query($conexion, $datos);
        //echo $result;

        if ($conexion->query($sql) === TRUE) {
            echo "New record created successfully";
            echo "<script>console.log('Se subió correctamente el gasto');</script>";
        } else {
            echo "<script> console.log ('Error: " . $sql . "<br>" . $conexion->error . "');</script>";

        }

    }else{
        echo "no hay datos que recibir";
    }

?>
