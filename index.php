<?php session_start(); ?>

<!doctype html>
<html lang="es">
   <head>
      <?php include("content/php/head.php"); ?>
   </head>
   <body style="background-color: black; color: white;">
      <div class="container">
         <?php  
            if (isset($_SESSION['login'])) {
               if (isset($_GET['action'])) {
                  include 'content/php/navbar.php';
                  $action = $_GET['action'];
               }else{
                  $action = "home";
               }
            }else{
               $action = "inicio";
            }

            switch ($action) {

               case 'inicio':
                  include 'content/php/inicio.php';
               break;

               case 'home':
                   include 'content/php/home.php';
                   include 'modalIngreso.php';
                   include 'modalGasto.php';
               break;

               case 'cuentas':
                  include 'content/php/cuentas.php';
               break;

               case 'cerrar_sesion':
                  if (isset($_SESSION['login'])) {
                     unset ($SESSION ['login']);
                     session_destroy();
                     echo "<script>window.location.reload(false);</script>";
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