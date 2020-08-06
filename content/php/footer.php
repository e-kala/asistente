<div class="container-fluid">
	
	<div class="card">
	  <div class="card-body">
	  	<div class="row text-center">
			<div class="col-sm-4">
				<p>Contenido</p>
			</div>  		
			<div class="col-sm-4">
				<p>
					Copyright ©
		            <script> 
		                var f = new Date();
		                document.write(f.getFullYear());
		            </script> 
	            | 	<a href="#">Asistente</a>
	        	</p>
			</div>  		
			<div class="col-sm-4">
				<a href="#"> <i class="fa fa-twitter"></i></a>
				<a href="#"><i class="fa fa-instagram"></i></a>
				<a href="#"> <i class="fa fa-facebook"></i></a>
				<a href="#"> <i class="fa fa-email"></i></a>
			</div>  		

	  	</div>
	  </div>
	</div>
</div>









<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>



<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<script src="content/js/alertifyjs/alertify.js" charset="utf-8"></script>

<script src="content/js/notify.js" charset="utf-8"></script>

<script src="https://cdn.jsdelivr.net/gh/alyssaxuu/flowy/flowy.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

<!-- menú desplegable -->
<script src="content/js/windows/asistent_menu.js"></script>

<script type="text/javascript" src="./content/js/patron.js"></script>

<script type="text/javascript" src="./content/js/animations.js"></script>

<script type="text/javascript" src="./content/js/manager_patron.js"></script>

<script type="text/javascript" src="./content/js/redesign_responsive.js"></script>

<script type="text/javascript" src="./content/js/order_js_general/scripts_footer.js"></script>

<script type="text/javascript" src="./content/js/subirIngreso.js"></script>
<script type="text/javascript" src="./content/js/subirGasto.js"></script>
<script type="text/javascript" src="./content/js/ultimoRegistro.js"></script>

<script type="text/javascript" src="./content/js/cuentas.js"></script>
<script type="text/javascript" src="./content/js/editar_ingresos.js"></script>
<script type="text/javascript" src="./content/js/editar_gastos.js"></script>
<script type="text/javascript" src="./content/js/modal_cuentas.js"></script>

<script>
    $(function(){
        var URLsearch = window.location.search;
        //alert(URLsearch);

        $('.navbar-nav li').removeClass('active');
        //$(this).parent().addClass('active');

        var a = $("li > a").attr("href");
        //alert(a);

        $('a[href="'+ URLsearch +'"]').addClass('active');

        if (URLsearch < 1) {
          $('a[href="?action=home"]').addClass('active');
        }
    });
</script>


<?php 
	include "./content/php/usr/usr_cnfg.php";
?>


