<?php
    
    require "conexion.php";
    if (isset($_GET)) {

        $conectar = new conexion();
        $conexion = $conectar->conectar();
        
        session_start();


        $usuario = $_SESSION['user'];
        $cantidadNueva = $_GET['cantidadNueva'];
        $cuenta = $_GET['cuenta'];
        $categoria = $_GET['categoria'];
        $descripcion = $_GET['descripcion'];
        $fecha = $_GET['fecha'];

        echo $cantidadNueva;
        echo $fecha;

        $sql = "SELECT balance FROM cuentas WHERE nombre_cuenta = '$cuenta";
	    $saldoActual = utf8_encode($sql);
	    
	    if($saldoActual > $cantidadNueva) {
	        $diferencia = $saldoActual - $cantidadNueva;
	        $sql = "CALL Gasto('$usuario', '$diferencia', '$cuenta', '$fecha', '$descripcion', '$categoria')";
	        $datos = utf8_encode($sql);
	    }
	    if($saldoActual < $cantidadNueva) {
	        $diferencia = $cantidadNueva - $saldoActual;
	        $sql = "CALL Ingreso('$usuario', '$diferencia', '$cuenta', '$fecha', '$descripcion', '$categoria')";
	        $datos = utf8_encode($sql);
	    }
	
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
