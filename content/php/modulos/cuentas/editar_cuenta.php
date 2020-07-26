<?php
    require "../../conexion.php";
    if (isset($_POST)) {
        $conectar = new conexion();
        $conexion = $conectar->conectar();
        
        $nombre_cuenta = $_POST['nuevoNombreCuenta'];
        $id_cuenta = $_POST['idCuenta'];

        $sql ="UPDATE cuentas SET nombre_cuenta='$nombre_cuenta' WHERE id_cuenta='$id_cuenta'";

        if ($conexion->query($sql) === TRUE) {
            echo "New record created <successfully>";
            // header('location: ../../../');
        } else {
            echo "Error: " . $sql . "<br>" . $conexion->error;
        }
    }




?>