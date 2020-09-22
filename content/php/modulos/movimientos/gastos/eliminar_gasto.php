<?php
    require "../../../conexion.php";
    if (isset($_POST)) {
        $conectar = new conexion();
        $conexion = $conectar->conectar();
        
        //$nombre_cuenta = $_POST['nuevoNombreCuenta'];
        $id_gasto = $_POST['id_gasto'];
        echo '<script>console.log("'.$id_gasto.'")</script>';
        $sql ="DELETE FROM gastos WHERE id_gasto='$id_gasto'";

        if ($conexion->query($sql) === TRUE) {
           // echo "New record created <successfully>";
           //echo "<script>window.location.reload()</script>";
            header('location: ../../../../?action=editar_gastos');
        } else {
            echo "Error: " . $sql . "<br>" . $conexion->error;
        }
    }




?>