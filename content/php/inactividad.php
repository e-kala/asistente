<?php
   

    if ($_POST){
        $state = $_POST['state']; 

        if ($state === "cerrar"){
            echo json_encode(array("estado"=>"cerrar")); //Devolver respuesta de confirmacion

                
        }
    }

?>
