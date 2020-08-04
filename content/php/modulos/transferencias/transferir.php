<?php
    require "../../conexion.php";
    if (isset($_POST)) {

        session_start();


        
        $conectar = new conexion();
        $conexion = $conectar->conectar();
        echo "alert 'se estableció la conexion'";

        $usuario = $_SESSION['user'];
        $deCuenta = $_POST['de'];
        $aCuenta = $_POST['a'];
        $cantidad = $_POST['cantidad'];

        $fecha = date("Y")."-".date("m") ."-". date("d");
        //ver cantidad en cuentas seleccionadas y si es mayor la cantidad de transferencia a la que hay en la cuenta se cancela

        $sql = "INSERT INTO transferencias(usuario_transferencia, cantidad_transferencia, de_cuenta, a_cuenta, fecha_transferencia)
                VALUES('$usuario', '$cantidad', '$deCuenta', '$aCuenta', '$fecha')";
        $datos = utf8_encode($sql);
        //$result = mysqli_query($conexion, $datos);
        //echo $result;

        if ($conexion->query($sql) === TRUE) {
           header("Location: ../../../../?action=transferencias");
        } else {
            echo "Error: " . $sql . "<br>" . $conexion->error;
        }

    }else{
        echo "no hay datos que recibir";
    }

?>
