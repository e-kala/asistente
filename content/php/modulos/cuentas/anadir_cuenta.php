<?php
    require "../../conexion.php";
    if (isset($_POST)) {
        $conectar = new conexion();
    	$conexion = $conectar->conectar();
        //echo "alert 'se estableció la conexion'";

        session_start();
        $usuario = $_SESSION['user'];
        $nombre_cuenta = $_POST['nombre_cuenta'];

        $sql = "INSERT INTO cuentas(usuario_cuenta, nombre_cuenta, tipo_cuenta)
                VALUES('$usuario', '$nombre_cuenta', 'NULL')";
        $datos = utf8_encode($sql);
        //$result = mysqli_query($conexion, $datos);
        //echo $result;

        if ($conexion->query($sql) === TRUE) {
            //echo "New record created <successfully>";
            //echo '<script type="text/javascript">window.location.reload()</script>';
             header('location: ?action=cuentas');
        } else {
            echo "Error: " . $sql . "<br>" . $conexion->error;
        }

    }else{
        echo "no hay datos que recibir";
    }

?>
