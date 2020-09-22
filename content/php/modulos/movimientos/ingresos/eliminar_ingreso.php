<?php
    require "../../../conexion.php";
    if (isset($_POST)) {
        $conectar = new conexion();
        $conexion = $conectar->conectar();
        
        //$nombre_cuenta = $_POST['nuevoNombreCuenta'];
        $id_ingreso = $_POST['id_ingreso'];
        echo '<script>console.log("'.$id_ingreso.'")</script>';
        $sql ="DELETE FROM ingresos WHERE id_ingreso='$id_ingreso'";

        if ($conexion->query($sql) === TRUE) {
           // echo "New record created <successfully>";
           //echo "<script>window.location.reload()</script>";
            header('location: ../../../../?action=editar_ingresos');
        } else {
            echo "Error: " . $sql . "<br>" . $conexion->error;
        }
    }




?>