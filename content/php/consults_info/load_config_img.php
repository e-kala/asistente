
<?php

//Realizar mejor script de autoeliminacion de imagenes cuando sean superiores a 5, y diferentes de la ya usada o ya seleccionada para usar, tambien crear herramienta que facilite administracion de esta funcion de borrado masivo en panel de administracion 

    if ($_POST['send']){
        include "../conexion.php";
        function obtener_config_background(){
            $conectar = new conexion();
            $conexion = $conectar->conectar();
            $usuario = $_POST['usuario'];
            $consulta_cnf = "SELECT * FROM usuarios WHERE nombre_usuario = '$usuario'";
            $cnf_result = $conexion->query($consulta_cnf);
            $fila = $cnf_result->fetch_object();

            $data_cnf = $fila->usr_config;
            $json =  json_decode($data_cnf, true);
            $background = $json["background"];
            return $background;
        
        }

        # definimos la ruta destino
        $ruta_destino ="/content/usuarios/". $_POST['usuario'] . "/" . "img/";
        # definimos carpeta destino
        $carpetaDestino = $_SERVER['DOCUMENT_ROOT'] . $ruta_destino;
     
        # si hay algun archivo que subir con identificador nameimg
        if($_FILES["nameimg"]){

            # si es un formato de imagen
            if($_FILES["nameimg"]["type"] =="image/jpeg" || $_FILES["nameimg"]["type"] =="image/pjpeg" || $_FILES["nameimg"]["type"] =="image/gif" || $_FILES["nameimg"]["type"] =="image/png"){
 
                # si exsite la carpeta se usa, sino se crea y se usa

                if(file_exists($carpetaDestino) || @mkdir($carpetaDestino, 07777,true)){

                    $origen = $_FILES["nameimg"]["tmp_name"];
                    $destino = $carpetaDestino.$_FILES["nameimg"]["name"];
 
                    $path_to_save = $_SERVER['SERVER_NAME'] == 'localhost' ? $_SERVER['DOCUMENT_ROOT']."/asistente/content/usuarios/". $_POST['usuario'] . "/" . "img/".$_FILES["nameimg"]["name"] :$destino;

                    # movemos el archivo
                    if(@move_uploaded_file($origen, $path_to_save)){
                        // echo "<br>".$_FILES["nameimg"]." movido correctamente";

                        //Devolver direccion de consulta para la vista previa o el guardado en el cliente

                        // DesComentar ESTO DE NUEVO *-.
                        echo "/content/usuarios/". $_POST['usuario'] . "/" . "img/" . $_FILES["nameimg"]["name"];

                        if ($_SERVER['SERVER_NAME'] == 'localhost'){
                            $path = $_SERVER['DOCUMENT_ROOT'] . '/'."asistente/";
                        } else if ($_SERVER['SERVER_NAME'] == 'bonsaiasistente.com'){
                           $path = $_SERVER['DOCUMENT_ROOT']."/";
                        } else {
                            $path="";
                        }

                        //Leer carpeta de imagenes del usuario para contabilizar 5 imagenes y sino, borrar siempre una al adicionar una nueva
                        if ($handle = opendir($path."content/usuarios/".$_POST['usuario']."/"."img/")) {

                            $count = 0; //Numero de imagen
                            $toDel = ""; //Imagen a eliminar

                            //Actual fondo registrado en la configuracion
                            $actual_bg = $path."content/usuarios/".$_POST['usuario'] . "/" . obtener_config_background();
                            //Fondo seleccionado en el cliente en el momento
                            $selected_bg = $path."content/usuarios/".$_POST['usuario']."/"."img"."/".$_FILES["nameimg"]["name"];


                            while (false !== ($file = readdir($handle))) {
                                $count += 1;
                                //Si la imagen numero count es diferente de la seleccionada en la vista previa o la del registro, se elimina, pero solo una, ejando siempre 5


                                // if ($file !== "." && $file !== ".." && $file !== "..." && $file !== "" && $file !== " "){
                                    // echo $file ."\n\r\n";
                                    // echo $count . "\n\r\n";
                                    // echo $ruta_destino.$file . "\n\r\n";
                                    // echo $actual_bg . "\n\r\n";
                                    // echo $selected_bg . "\n\r\n";
                                    if ($count === 3 && $actual_bg !== "content/usuarios/".$_POST["usuario"]."/"."img/".$file && "content/usuarios/".$_POST["usuario"]."/"."img/".$file !== $selected_bg){ 
                                        $toDel = $file;
                                    } else if ($count === 4 && $actual_bg !== "content/usuarios/".$_POST["usuario"]."/"."img/".$file && "content/usuarios/".$_POST["usuario"]."/"."img/".$file !== $selected_bg) {
                                        $toDel = $file;
                                    } else if ($count === 5 && $actual_bg !== "content/usuarios/".$_POST["usuario"]."/"."img/".$file && "content/usuarios/".$_POST["usuario"]."/"."img/".$file !== $selected_bg) {
                                        $toDel = $file;
                                    } else if ($count === 6 && $actual_bg !== "content/usuarios/".$_POST["usuario"]."/"."img/".$file && "content/usuarios/".$_POST["usuario"]."/"."img/".$file !== $selected_bg) {
                                        $toDel = $file;
                                    } else if ($count === 7 && $actual_bg !== "content/usuarios/".$_POST["usuario"]."/"."img/".$file && "content/usuarios/".$_POST["usuario"]."/"."img/".$file !== $selected_bg) {
                                        $toDel = $file;
                                    }
                                    if ($count > 7){ //Si hay mas de 5 imagenes, 7 porque los primeros dos valores no cuetan como imagenes
                                       
                                            $rm_file = $toDel;
                                            if ($rm_file !== "" && $rm_file !== "." && $rm_file !== ".." && $rm_file !== "..."){
                                                //verificar que existe imagen a eliminar
                                                if(file_exists($path."content/usuarios/".$_POST['usuario']."/"."img/".$rm_file)){
                                                    //Eliminar imagen
                                                   if (unlink($path."content/usuarios/".$_POST['usuario']."/"."img/"."/".$rm_file)){
                                                   } else {
                                                    // echo "No se pudo borrar el archivo " . $rm_file;
                                                   }

                                                } else{
                                                    // echo "no existe archivo";
                                                }
                                            } else{
                                                // echo "no hay que borrar";
                                            }
                                    
                                    } {
                                        // echo "count = ".$count;
                                    }
                                    
                                // }

                            }
                            closedir($handle);
                        } else {
                            // echo "problema en el opendir(path)";
                        }
                    }else{
                        echo "<br>No se ha podido mover la imagen: ".$_FILES["nameimg"];
                    }
                
                }else{
                    echo "<br>No se ha podido crear la carpeta: ".$carpetaDestino;
                }
            }else{
                echo "<br>".$_FILES["nameimg"]["name"]." - NO es imagen jpg, png o gif";
            }
        
        }else{
            echo "<br>No se ha subido ninguna imagen";
        }
    } 
?>