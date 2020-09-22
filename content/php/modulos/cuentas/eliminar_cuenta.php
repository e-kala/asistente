<?php
    require "../../conexion.php";
    if (isset($_POST)) {
        $conectar = new conexion();
        $conexion = $conectar->conectar();
        
        //$nombre_cuenta = $_POST['nuevoNombreCuenta'];
        $id_cuenta = $_POST['id_cuenta'];

        $sql ="DELETE FROM cuentas WHERE id_cuenta='$id_cuenta'";

        if ($conexion->query($sql) === TRUE) {
           // echo "New record created <successfully>";
           //echo "<script>window.location.reload()</script>";
            header('location: ../../../../?action=cuentas');
        } else {
            echo "Error: " . $sql . "<br>" . $conexion->error;
        }
    }




?>