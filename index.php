<?php session_start(); 
   include 'content/php/conexion.php';
   //echo "<script>console.log('".$_SESSION['user']."')</script>";
   //include 'content/php/usr/usr_cnfg.php';

?>

<!doctype html>
<html lang="es">
   <head>
      <?php include("content/php/head.php"); ?>
      
   </head>
   <body>
      <div class="contain">
         <?php  
            if (isset($_SESSION['login'])) {
               if (isset($_GET['action'])) {
                  $action = $_GET['action'];
               }else{
                  $action = "home";
               }
            }elseif (isset($_GET['action'])){
               if ($_GET['action']=="registro") {
                  $action = "registro";
               }else{
                  $action = "inicio";
               }
            }else{
               $action = "inicio";
            }
            switch ($action) {

               case 'inicio':
                  include 'content/php/inicio.php';
               break;

               case 'home':
                   echo '<img src="./content/img/íconos/load2.gif" width="140px" id="loadingg">';
                   include 'content/php/navbar.php';
                   echo "<div class='containhome'>";
                      echo "<div class='sectionhome'>";
                         include 'content/php/home.php';
                         include 'content/php/modalIngreso.php';
                         include 'content/php/modalGasto.php';
                      echo "</div>";
                   echo "</div>";
               break;

               case 'registro'://registro de usuarios
                  echo '<img src="./content/img/íconos/load2.gif" width="140px" id="loadingg">';
                  include 'content/php/registro/registro_form.php';
               break;

               case 'registros'://registros, ingresos y gastos
                  echo '<img src="./content/img/íconos/load2.gif" width="140px" id="loadingg">';
                  include 'content/php/navbar.php';
                  include 'content/php/registros.php';
               break;

               case 'configuracion':
                  echo '<img src="./content/img/íconos/load2.gif" width="140px" id="loadingg">';
                  include 'content/php/navbar.php';
                  include 'content/php/user_config.php';
               break;
                
               case 'cuentas':
                  echo '<img src="./content/img/íconos/load2.gif" width="140px" id="loadingg">';
                  include 'content/php/navbar.php';
                  include 'content/php/modulos/cuentas/cuentas.php';
               break;

               case 'editar_ingresos': 
                  echo '<img src="./content/img/íconos/load2.gif" width="140px" id="loadingg">';
                  include 'content/php/navbar.php';
                  include 'content/php/modulos/movimientos/ingresos/ingresos.php';   
               break;

               case 'editar_gastos': 
                  echo '<img src="./content/img/íconos/load2.gif" width="140px" id="loadingg">';
                  include 'content/php/navbar.php';
                  include 'content/php/modulos/movimientos/gastos/gastos.php';   
               break;

               case 'cerrar_sesion':
                  echo '<img src="./content/img/íconos/load2.gif" width="140px" id="loadingg">';
                  if (isset($_SESSION['login'])) {
                     echo "<script>window.location.href = 'index.php';</script>";
                     unset ($_SESSION ['login']);
                     session_destroy();
                  }else{
                     //header('location: ./');
                     echo "<script>window.location.reload(false);</script>";
                  }
               break;   
               
               default:
                  # code...
                  break;
            }
             
         ?>
         
            <?php include 'content/php/footer.php'; ?>

      </div>
   </body>
</html>

