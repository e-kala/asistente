<?php
    include_once'conexion.php';

    session_start();

    $usuario = $_SESSION['user'];

    $mysqli = new mysqli("localhost", "u539976020_bonsai", ":i9i^Q|N>8w", "u539976020_bonsai");

    if($mysqli->connect_errno){
        $arrRes=array("error"=>"Connection Failed: " . $mysqli->connect_error);
    }else{
        //$mysqli->set_charset("utf8");
        $consult = "SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' ORDER BY id_ingreso DESC LIMIT 1";

        if($result = $mysqli->query($consult)){
            $arrayResponse=array();
            while($row = $result->fetch_assoc()){
                $arrayResponse[]=$row;
            }
            $result->free();
        }else{
            $arrayResponse = array("error" => "Ha habido un problema;");

        }


    }

    $json = json_encode($arrayResponse);
    //json_encode($query_result->fetch_array());
    //header('Content-Type: application/json; charset=utf8');
    echo $json;
 ?>
