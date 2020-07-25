<?php
<<<<<<< Updated upstream:subirIngreso.php
    require "php/conexion.php";
    if (isset($_GET)) {
=======
    require "../../conexion.php";
    if (isset($_POST)) {
>>>>>>> Stashed changes:content/php/modulos/cuentas/anadir_cuenta.php
        $conectar = new conexion();
    	$conexion = $conectar->conectar();


<<<<<<< Updated upstream:subirIngreso.php
        $cantidadIngreso = $_GET['cantidadIngreso'];
        $cuenta = $_GET['cuenta'];
        $categoriaIngreso = $_GET['categoriaIngreso'];
        $descripcionIngreso = $_GET['descripcionIngreso'];
        $fecha = $_GET['fecha'];

        echo $cantidadIngreso;

        $sql = "INSERT INTO ingresos(cantidad_ingreso, cuenta_ingreso, fecha_ingreso, categoria_ingreso, descripcion_ingreso)
                VALUES('$cantidadIngreso', '$cuenta', '$fecha', '$categoriaIngreso', '$descripcionIngreso')";
=======
        $sql = "INSERT INTO cuentas(usuario_cuenta, nombre_cuenta, tipo_cuenta)
                VALUES('$usuario', '$nombre_cuenta', 'NULL')";
>>>>>>> Stashed changes:content/php/modulos/cuentas/anadir_cuenta.php
        $datos = utf8_encode($sql);
        //$result = mysqli_query($conexion, $datos);
        //echo $result;

        if ($conexion->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conexion->error;
        }

    }else{
        echo "no hay datos que recibir";
    }

?>
