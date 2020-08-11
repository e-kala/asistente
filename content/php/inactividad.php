<?php
    //Manejar la inactividad usando ajax, aunque no sea necesario por los momentos, podría ser útil en el camino, ya que en este archivo podría definirse otras opciones de mayor amplitud

    if ($_POST){
        $state = $_POST['state']; 

        if ($state === "cerrar"){
            echo json_encode(array("estado"=>"cerrar")); //Devolver respuesta de confirmacion
            
        }
    }

?>
