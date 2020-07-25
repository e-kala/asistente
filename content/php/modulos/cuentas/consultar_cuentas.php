<?php
    include "../../conexion.php";

    $conectar = new conexion();
    $conexion = $conectar ->conectar();
    session_start();
    $usuario = $_SESSION['user'];
    $consulta_cuentas = "SELECT * FROM cuentas WHERE usuario_cuenta = '$usuario";
    $resultado_cuentas = $conexion->query($consulta_cuentas);

    if(!empty($resultado_cuentas) && $resultado_cuentas->num_rows > 0){
    while ($fila_cuentas = $resultado_cuentas->fetch_object()) {
        echo "<option>".$fila_cuentas->nombre_cuenta."</option>";
    }
    }

?>