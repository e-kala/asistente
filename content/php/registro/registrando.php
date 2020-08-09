<?php
    require "../conexion.php";
    if (isset($_POST)) {
        $conectar = new conexion();
    	$conexion = $conectar->conectar();
        //echo "alert 'se estableció la conexion'";


        $mail = $_POST['mail'];
        $usuario = $_POST['usuario'];
        $pass = $_POST['pass'];
        $array_cnfg = ["mode" => "light", "background" => "3/8.png", "transparency" => "1", "time_bal" => "4"];
        $usr_cnfg_default = json_encode($array_cnfg);
        $sql = "INSERT INTO usuarios(nombre_usuario, correo_usuario, pass_usuario, privilegios, usr_config)
                VALUES('$usuario', '$mail', '$pass', 'normal', '$usr_cnfg_default')";
        $datos = utf8_encode($sql);
        //$result = mysqli_query($conexion, $datos);
        //echo $result;

        if ($conexion->query($sql) === TRUE) {
            echo "New record created <successfully>";
            // header('location: ../../../');
        } else {
            echo "Error: " . $sql . "<br>" . $conexion->error;
        }

    }else{
        echo "no hay datos que recibir";
    }

?>
