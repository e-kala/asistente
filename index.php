<?php 

include 'content/php/conexion.php';
// include 'content/php/inactividad.php'
session_start(); 

   // echo "<script>console.log('".$_SESSION['user']."')</script>";
   //include 'content/php/usr/usr_cnfg.php';

   
   require_once('vendor/autoload.php');

   \Stripe\Stripe::setApiKey('sk_test_51HPLUALQLtZT0x6xvjlzM0REVB0u9ugnrzGU1L5oYuWz6s9y0jJg0zAp4tTfTgARBigA7FLY7jJI3qwtrPZyoxRP00f3DACczd');

   $customer = \Stripe\Customer::create();
?>

<!doctype html>
<html lang="es">
   <head>
      <?php include("content/php/head.php"); ?>
      
   </head>
   <body>
    <noscript>Al parecer no tienes activado Javascript. Javascript es esencial para el funcionamiento de este sitio. Necesitas activarlo</noscript>
      <!-- Second W Marquee -->
      <div id="criptowidget" class="p-3 overflow" style="display: none;">
        <div class="tradingview-widget-container">
          <div class="tradingview-widget-container__widget"></div>
          <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js" async>
          {
          "symbol": "BITSTAMP:BTCUSD",
          "width": "100%",
          "colorTheme": "dark",
          "isTransparent": true,
          "locale": "es"
        }
          </script>
        </div>
        <div class="tradingview-widget-container">
          <div class="tradingview-widget-container__widget"></div>
          <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js" async>
          {
          "symbol": "BYBIT:ETHUSD",
          "width": "100%",
          "colorTheme": "dark",
          "isTransparent": true,
          "locale": "es"
        }
          </script>
        </div>
      </div>

      <div class="contain" align="center">
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
                   echo '<img src="./content/img/iconos/load3.gif" width="140px" id="loadingg">';
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
                  echo '<img src="./content/img/iconos/load3.gif" width="140px" id="loadingg">';
                  include 'content/php/registro/registro_form.php';
               break;

               case 'registros'://registros, ingresos y gastos
                  echo '<img src="./content/img/iconos/load3.gif" width="140px" id="loadingg">';
                  include 'content/php/navbar.php';
                  include 'content/php/registros.php';
               break;

               case 'configuracion':
                  echo '<img src="./content/img/iconos/load3.gif" width="140px" id="loadingg">';
                  include 'content/php/navbar.php';
                  include 'content/php/user_config.php';
               break;
                
               case 'cuentas':
                  echo '<img src="./content/img/iconos/load3.gif" width="140px" id="loadingg">';
                  include 'content/php/navbar.php';
                  include 'content/php/modulos/cuentas/cuentas.php';
               break;

               case 'balanceo':
                  echo '<img src="./content/img/iconos/load3.gif" width="140px" id="loadingg">';
                  include 'content/php/navbar.php';
                  include 'content/php/balancear.php';
               break;

               case 'editar_ingresos': 
                  echo '<img src="./content/img/iconos/load3.gif" width="140px" id="loadingg">';
                  include 'content/php/navbar.php';
                  include 'content/php/modulos/movimientos/ingresos/ingresos.php';   
               break;

               case 'editar_gastos': 
                  echo '<img src="./content/img/iconos/load3.gif" width="140px" id="loadingg">';
                  include 'content/php/navbar.php';
                  include 'content/php/modulos/movimientos/gastos/gastos.php';   
               break;

               case 'premium': 
                  echo '<img src="./content/img/iconos/load3.gif" width="140px" id="loadingg">';
                  include 'content/php/navbar.php';
                  include 'content/php/premium.php';   
               break;

               case 'insigl':
                  echo '<img src="./content/img/iconos/load3.gif" width="140px" id="loadingg">';
                  include 'content/php/navbar.php';
                  include 'content/php/insigniasylogros.php';  
               break;

               case 'quienes_somos':
                  echo '<img src="./content/img/iconos/load3.gif" width="140px" id="loadingg">';
                  include 'content/php/quienesSomos.php';
               break;

               case 'transferencias':
                   echo '<img src="./content/img/iconos/load3.gif" width="140px" id="loadingg">';
                   include 'content/php/navbar.php';
                    include 'content/php/modulos/transferencias/transferencias.php';   
               break;

               case 'cerrar_sesion':
                  echo '<img src="./content/img/iconos/load3.gif" width="140px" id="loadingg">';
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

        <!-- Firts W -->
        <div id="conversor_tasa" style="display: none;">
      
        <!-- Currency Converter Script - FxExchangeRate.com  --><script type="text/javascript" src="https://w.fxexchangerate.com/converter.php?fm=USD&ft=EUR&lg=es&am=1&ty=1"></script>
        </div> <!--  End of Currency Converter Script -  FxExchangeRate.com -->
      </div>

   </body>
</html>


