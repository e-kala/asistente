<?php
    
    require "conexion.php";
    if (isset($_GET)) {

        $conectar = new conexion();
        $conexion = $conectar->conectar();
        
        session_start();
        
        $usuario = $_SESSION['user'];
        $cantidadNueva = $_GET['cantidadNueva'];
        $cuenta = $_GET['cuenta'];
        $categoria = "Balanceo";
        $descripcion = "Balanceo";
        $fecha = date("Y-m-d");

        // echo $cantidadNueva;
        // echo $fecha;

        //Esto es lunico que edité yo porque no obtenia el dato, ------------------------------------------
        $sql = "SELECT * FROM cuentas WHERE usuario_cuenta = '$usuario' AND nombre_cuenta='$cuenta'";
        $sql_result = $conexion->query($sql);
        $fila = $sql_result->fetch_object();
        $saldoActual = $fila->balance;
        //Hasta aqui fue mi edicion ------------------------------------------

	    if($saldoActual > $cantidadNueva) {
	        $diferencia = $saldoActual - $cantidadNueva;
	        $sql = "CALL Gasto('$usuario', '$diferencia', '$cuenta', '$fecha', '$descripcion', '$categoria')";
	        $datos = utf8_encode($sql);
	    } else {
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
