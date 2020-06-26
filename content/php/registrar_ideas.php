<?php
    require "conexion.php";
    if (isset($_POST)) {
        $conectar = new conexion();
    	$conexion = $conectar->conectar();
        //echo "alert 'se estableció la conexion'";


        $idea = $_POST['contenido_idea'];
        $fecha = '2020-06-17';
        $titulo = "null";
        echo $idea;

        $sql = "INSERT INTO ideas(contenido_idea, titulo_idea, idea_fecha_creada)
                VALUES('$idea', '$titulo', '$fecha')";
        $datos = utf8_encode($sql);
        //$result = mysqli_query($conexion, $datos);
        //echo $result;

        if ($conexion->query($sql) === TRUE) {
            echo "New record created successfully";
            header('location: ../../');
        } else {
            echo "Error: " . $sql . "<br>" . $conexion->error;
        }

    }else{
        echo "no hay datos que recibir";
    }

?>
