<?php
    include_once'conexion.php';

    if (session_status() == PHP_SESSION_NONE) {
        # La sesión NO está iniciada
        session_start();
        $usuario = $_SESSION['user'];
    } else {
        $usuario = $_SESSION['user'];
    }



    $mysqli = new mysqli("localhost", "u539976020_bonsai", ":i9i^Q|N>8w", "u539976020_bonsai");

    if($mysqli->connect_errno){
        $arrRes=array("error"=>"Connection Failed: " . $mysqli->connect_error);
    }else{
        //$mysqli->set_charset("utf8");
        $consult = "SELECT * FROM gastos WHERE usuario_gasto = '$usuario' ORDER BY id_gasto DESC LIMIT 1";

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

    $json = $arrayResponse;

    if (!isset($json["error"])){
        if (isset($json[0])){   
            echo  "<b>Cuenta</b>: " . $json[0]["cuenta_gasto"] . "<br>";
            echo  "<b>Categoria</b>: " . $json[0]["categoria_gasto"] . "<br>";
            echo  "<b>Cantidad</b>: $ " . $json[0]["cantidad_gasto"] . "<br>";
            echo  "<b>Descripción</b>: " . $json[0]["descripcion_gasto"] . "<br>";
            echo  "<b>Fecha</b>: " . $json[0]["fecha_gasto"] . "<br>";
        } else {
            echo "<div class='font-italic text-center' style='min-height:100%;'>No hay datos en su historial de gastos</div>";
        }
    } 


    //json_encode($query_result->fetch_array());
    //header('Content-Type: application/json; charset=utf8');
 ?>
