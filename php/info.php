<?php
    include_once'conexion.php';




    $mysqli = new mysqli("localhost", "u599230971_asistente", "1q-2w-3e-4r-5t-", "u599230971_asistente");

    if($mysqli->connect_errno){
        $arrRes=array("error"=>"Connection Failed: " . $mysqli->connect_error);
    }else{
        //$mysqli->set_charset("utf8");
        $consult = "SELECT * FROM ingresos ORDER BY id_ingreso DESC LIMIT 1";

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
