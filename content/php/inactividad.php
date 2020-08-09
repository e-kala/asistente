<?php
//cerrar sesión automaticamente
//Comprobamos si esta definida la sesión 'tiempo'.

if(!isset($_SESSION)){
  session_start();
}else{
  //echo "ya hay";
}
if(isset($_SESSION['tiempo']) ) {

    //Tiempo en segundos para dar vida a la sesión.
    $inactivo = 1800;//10 min en este caso.

    //Calculamos tiempo de vida inactivo.
    $vida_session = time() - $_SESSION['tiempo'];
    //echo $vida_session;

        //Compraración para redirigir página, si la vida de sesión sea mayor a el tiempo insertado en inactivo.
        if($vida_session > $inactivo)
        {
            //echo $vida_session;
            //echo "cierra sesión";
           //Removemos sesión.
            session_unset();

            //Destruimos sesión.
            session_destroy();

            //Redirigimos pagina.
            //header("Location: ../../");
            //echo "<script>window.location.href = 'index.php';</script>";
            echo json_encode(array("estado"=>"cerrar"));

            //exit();
            
        } else {  // si no ha caducado la sesion, actualizamos
            $_SESSION['tiempo'] = time();
        }

} else {
    //Activamos sesion tiempo.
    $_SESSION['tiempo'] = time();
    echo "no iniciada";
}
?>
