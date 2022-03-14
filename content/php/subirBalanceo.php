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

         echo "Cantidad Nueva" . $cantidadNueva;
        // echo $fecha;

        //Esto es lunico que edité yo(quién yo?-pregunta Eka) porque no obtenia el dato, ------------------------------------------
        $sql = "SELECT * FROM cuentas WHERE usuario_cuenta = '$usuario' AND nombre_cuenta='$cuenta'";
        $sql_result = $conexion->query($sql);
        $fila = $sql_result->fetch_object();
        $saldoActual = $fila->balance;
        //Hasta aqui fue mi edicion ------------------------------------------

	    if($saldoActual > $cantidadNueva) {
	        $diferencia = $saldoActual - $cantidadNueva;
	        $sql = "CALL gasto('$usuario', '$diferencia', '$cuenta', '$fecha', '$descripcion', '$categoria')";
	        $datos = utf8_encode($sql);
            
            $sql_update = "UPDATE cuentas SET balance = '$cantidadNueva' WHERE cuentas ='$cuenta'";
            
            if ($conexion->query($sql_update) === TRUE) {
                echo "New record created successfully";
            } else {
              echo "Error: " . $sql_update . "<br>" . $conexion->error;
              echo "ERRORSQL";
            } 
            //update();
	    } else {
	        $diferencia = $cantidadNueva - $saldoActual;
	        $sql = "CALL ingreso('$usuario', '$diferencia', '$cuenta', '$fecha', '$descripcion', '$categoria')";
	        $datos = utf8_encode($sql);
            //update();
	    }
        echo "Cantidad nueva: " . $cantidadNueva;

        //Balance 

        //Hacer el update de balance a la cantidad nueva
        function update(){
            
            $sql_update = "UPDATE cuentas SET balance = '$cantidadNueva' WHERE cuentas ='$cuenta'";
            
            if ($conexion->query($sql_update) === TRUE) {
                echo "New record created successfully";
            } else {
              echo "Error: " . $sql_update . "<br>" . $conexion->error;
              echo "ERRORSQL";
            } 
        }
	
        //$result = mysqli_query($conexion, $datos);
        //echo $result;

        if ($conexion->query($sql) === TRUE) {
            echo "New record created successfully";
            echo "<script>console.log('Se subió correctamente el Balanceo');</script>";
        } else {
            echo "<script> console.log ('Error: " . $sql . "<br>" . $conexion->error . "');</script>";
        }

    }else{
        echo "no hay datos que recibir";
    }

?>
