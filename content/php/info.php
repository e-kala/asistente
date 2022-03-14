<?php
    include_once'conexion.php';

    if (session_status() == PHP_SESSION_NONE) {
        # La sesión NO está iniciada
        session_start();
        $usuario = $_SESSION['user'];
    } else {
        $usuario = $_SESSION['user'];
    }

    // try {
        //datos oficiales de bonsai, si no se activa, no trabajara con la db correspondiente a los datos de la version oficial
        // $mysqli = new mysqli("localhost", "u539976020_bonsai", ":i9i^Q|N>8w", "u539976020_bonsai");
    // } catch (Exception $e) {
        //datos de prueba de la db de prueba
        $mysqli = new mysqli("localhost", "u108360402_bonsai", ":i9i^Q|N>8w", "u108360402_bonsai");   
    // }

  

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

    $json = $arrayResponse;
    if (!isset($json["error"])){
        if (isset($json[0])){ 
            echo  "<b>Cuenta</b>: " . $json[0]["cuenta_ingreso"] . "<br>";
            echo  "<b>Categoria</b>: " . $json[0]["categoria_ingreso"] . "<br>";
            echo  "<b>Cantidad</b>: $ " . $json[0]["cantidad_ingreso"] . "<br>";
            echo  "<b>Descripción</b>: " . $json[0]["descripcion_ingreso"] . "<br>";
            echo  "<b>Fecha</b>: " . $json[0]["fecha_ingreso"] . "<br>";
        } else {
            echo "<div class='font-italic text-center' style='min-height:100%;'>No hay datos en su historial de ingresos</div>";
        }
    }

    //json_encode($query_result->fetch_array());
    //header('Content-Type: application/json; charset=utf8');
    // echo $json;
 ?>
