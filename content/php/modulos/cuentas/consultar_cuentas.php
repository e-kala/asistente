<?php
    include "../../conexion.php";

    $conectar = new conexion();
    $conexion = $conectar ->conectar();
    session_start();
    $usuario = $_SESSION['user'];
    $consulta_cuentas = "SELECT * FROM cuentas WHERE usuario_cuenta = '$usuario'";
    $resultado_cuentas = $conexion->query($consulta_cuentas);

    if(!empty($resultado_cuentas) && $resultado_cuentas->num_rows > 0){
        while ($fila_cuentas = $resultado_cuentas->fetch_object()) {
            //echo $fila_cuentas->nombre_cuenta;
          $array[] = $fila_cuentas->nombre_cuenta;
            
        }
        echo json_encode($array);
    }else{
        echo "Error: " . $consulta_cuentas . "<br>" . $conexion->error;
    }

?>