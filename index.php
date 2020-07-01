<?php session_start(); ?>

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

               case 'cerrar_sesion':
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
holas
as
      </div>
      
   </body>
</html>
