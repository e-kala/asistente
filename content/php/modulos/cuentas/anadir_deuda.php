<?php
    require "../../conexion.php";
    if (isset($_POST)) {
        $conectar = new conexion();
    	$conexion = $conectar->conectar();
        //echo "alert 'se estableció la conexion'";

        session_start();
        $usuario = $_SESSION['user'];
        $nombre_cuenta = $_POST['nombre_cuenta'];
        $dias_plazo = $_POST['dias_plazo'];
        $cantidad_plazo = $_POST['cantidad_plazo'];
        $cantidad_total = $_POST['cantidad_total'];

        $sql = "INSERT INTO deudas(usuario, cuenta, plazo_dias, plazo_cantidad, cantidad_total, primer pago)
                VALUES('$usuario', '$nombre_cuenta', '$dias_plazo', '$cantidad_plazo', '$cantidad_total', '$primer_pago')";
        $datos = utf8_encode($sql);
        //$result = mysqli_query($conexion, $datos);
        //echo $result;

        if ($conexion->query($sql) === TRUE) {
            //echo "New record created <successfully>";
            //echo '<script type="text/javascript">window.location.reload()</script>';
            header('location: ../../../../?action=deudas');
        } else {
            echo "Error: " . $sql . "<br>" . $conexion->error;
        }

    }else{
        echo "no hay datos que recibir";
    }

?>
