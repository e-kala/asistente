<?php
    require "../../../conexion.php";
    if (isset($_POST)) {
        $conectar = new conexion();
        $conexion = $conectar->conectar();
        
        $id_ingreso = $_POST['idIngreso'];
        $categoria_ingreso = $_POST['categoriaIngresoInput'];
        $descripcion_ingreso = $_POST['descripcionIngresoInput'];
        $fecha_ingreso = $_POST['fechaIngresoInput'];
        $cantidad_ingreso = $_POST['cantidadIngresoInput'];
        $cuenta_ingreso = $_POST['cuentaIngresoInput'];
        

         	 	 	 	

        $sql =" UPDATE ingresos 
                SET categoria_ingreso='$categoria_ingreso',
                    cantidad_ingreso = '$cantidad_ingreso',
                    fecha_ingreso = '$fecha_ingreso',
                    cuenta_ingreso = '$cuenta_ingreso',
                    descripcion_ingreso = '$descripcion_ingreso'
                WHERE id_ingreso='$id_ingreso'";

        if ($conexion->query($sql) === TRUE) {
            //echo "New record created <successfully>";
            //echo "<script>window.location.reload()</script>";
            //echo "<script>console.log('ok');</script>";
            header('location: ../../../../../?action=editar_ingresos');
        } else {
            echo "<script>console.log('". $sql . $conexion->error ."');</script>";
        }
    }




?>