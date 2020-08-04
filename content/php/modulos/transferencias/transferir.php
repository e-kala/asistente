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
        $descripcion = "De {$deCuenta} a {$aCuenta}";

        //ver cantidad en cuentas seleccionadas y si es mayor la cantidad de transferencia a la que hay en la cuenta se cancela
        $sql = "INSERT INTO transferencias(usuario_transferencia, cantidad_transferencia, de_cuenta, a_cuenta, fecha_transferencia)
                VALUES('$usuario', '$cantidad', '$deCuenta', '$aCuenta', '$fecha')";

        $deCuentaSQL = "INSERT INTO gastos(usuario_gasto, cantidad_gasto, cuenta_gasto, fecha_gasto, categoria_gasto, descripcion_gasto)
                    VALUES('$usuario', '$cantidad', '$deCuenta', '$fecha', 'Transferencia', '$descripcion')
                    ";

        $aCuentaSQL = "INSERT INTO ingresos(usuario_ingreso, cantidad_ingreso, cuenta_ingreso, fecha_ingreso, categoria_ingreso, descripcion_ingreso)
                VALUES('$usuario', '$cantidad', '$aCuenta', '$fecha', 'Transferencia', '$descripcion')";

        $datos = utf8_encode($sql);


        //$result = mysqli_query($conexion, $datos);
        //echo $result;

        if ($conexion->query($sql) === TRUE) {
            echo "transfiriendo...";
            if ($conexion->query($deCuentaSQL) === TRUE) {
                echo "calculando..";
                if ($conexion->query($aCuentaSQL) === TRUE) {
                    echo "transferencia correcta";
                    header("Location: ../../../../?action=transferencias");
                } else {
                    echo "Error: " . $aCuentaSQL . "<br>" . $conexion->error;
                }
            } else {
                echo "Error: " . $deCuentaSQL . "<br>" . $conexion->error;
            }
        } else {
            echo "Error: " . $sql . "<br>" . $conexion->error;
        }
    }else{
        echo "no hay datos que recibir";
    }

?>
