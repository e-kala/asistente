<?php
    require "../../../conexion.php";
    if (isset($_POST)) {
        $conectar = new conexion();
        $conexion = $conectar->conectar();
        
        $id_gasto = $_POST['idGasto'];
        $categoria_gasto = $_POST['categoriaGastoInput'];
        $descripcion_gasto = $_POST['descripcionGastoInput'];
        $fecha_gasto = $_POST['fechaGastoInput'];
        $cantidad_gasto = $_POST['cantidadGastoInput'];
        $cuenta_gasto = $_POST['cuentaGastoInput'];
        

         	 	 	 	

        $sql =" UPDATE gastos 
                SET categoria_gasto='$categoria_gasto',
                    cantidad_gasto = '$cantidad_gasto',
                    fecha_gasto = '$fecha_gasto',
                    cuenta_gasto = '$cuenta_gasto',
                    descripcion_gasto = '$descripcion_gasto'
                WHERE id_gasto='$id_gasto'";

        if ($conexion->query($sql) === TRUE) {
            //echo "New record created <successfully>";
            //echo "<script>window.location.reload()</script>";
            //echo "<script>console.log('ok');</script>";
            header('location: ../../../../../?action=editar_gastos');
        } else {
            echo "<script>console.log('". $sql . $conexion->error ."');</script>";
        }
    }




?>