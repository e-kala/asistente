<?php
include_once 'conexion.php';

class infoGeneral{

    public function mostrar(){

        $conectar = new conexion();
    	$conexion = $conectar->conectar();



        $sql = "SELECT * FROM  ingresos";

        $result = $conexion->query($sql);

        //return $result;
        if ($result->num_rows > 0) {
            $conexion->set_charset("utf8");
            $array = array();
            while ($row = $result->fetch_assoc()) {
                $array[] = $row;

            }
            $result->free();
        $json = json_encode($array);
        echo $json;
        }
    }
}
$infoGeneral = new infoGeneral();
$respuesta = $infoGeneral->mostrar();



 ?>
