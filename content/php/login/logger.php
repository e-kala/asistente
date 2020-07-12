<?php
    /**
	 * objetivo: subir log al mismo timepo que inicia sesión
	 */
    include '../conexion.php';

    if(isset($_SESSION['login'])){
        if ($_POST) {
		
            $fecha = $_POST['fecha'];
            $usuario = $_SESSION['usuario'];
            
            $conectar = new conexion();
            $conexion = $conectar->conectar();

                $_SESSION['login'] = TRUE;
                $_SESSION['user'] = $usuario;
    
    
                
                $log_data = ["usuario" => $usuario, "fecha" => $fecha];
                $log_data_json = json_encode($log_data, TRUE);
    
                $sql_log = "INSERT INTO logger(logs) VALUES ('$log_data_json')";

                if($conectar->query($sql_log) === TRUE){
                    echo "<script>console.log('"."Log subido correctamente"."')</script>";
                }else{
                    echo "<script>console.log('".$sql_log. $conexion->error."')</script>";
                }

        }else{
            echo "there is not post";
        }
    }
        
    
	
?>


