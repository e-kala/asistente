<!--módulos-->
<style type="text/css">
.bg-blue{

/*background-color: #f2f2f2;*/
}
body{
  background: white;
}
</style>

 <div class="accordion modulos w-100" style="display: none; margin-top: 23px;" id="accordionExample">
  <!--información in-->
   <div class="card bg-blue modsco">
     <div class="card-header d-flex justify-content-between align-content-center align-items-center" id="headingOne">
       <h2 class="mb-0 flex-grow-1 flexbg w-100">
         <button class="btn btn-link btn-block text-left font-weight-bold " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           Información
         </button>
       </h2>
       <img src="./content/img/íconos/info.png" c width="30px">
     </div>

       <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body">
            <?php include 'content/php/informacion.php'; ?>
             
          </div>
       </div>
    </div>
  <!--información End-->

  <!--Módulos In -->
   <div class="card bg-blue modsco">
     <div class="card-header d-flex justify-content-between align-content-center align-items-center" id="headingTwo">
       <h2 class="mb-0 flex-grow-1 flexbg w-100">
         <button class="btn btn-link btn-block text-left collapsed font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           Movimientos
         </button>
       </h2>
       <img src="./content/img/íconos/configur.png" width="30px">
     </div>

     <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
       <div class="card-body" align="center">
        <!-- opciones-->
       <div class="row p-4 d-flex justify-content-between" align="center">
        <!-- Sección de movimientos In -->
         <div class="col-xs-12">
            <h4 class="">Movimientos</h4>
            <div class="btn-group" role="group" aria-label="Basic example">
              <!-- Ingreso/egreso/transferencia -->
              <!-- Boton de Ingreso In-->
                <div class="btn-group dropdown">
                  <button type="button" class="btn btn-success" data-toggle="modal" data-target="#ingresoModal">
                    Ingreso
                  </button>
                  <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" 
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropright</span>
                  </button>
                  <div class="dropdown-menu">
                   <h6 class="dropdown-header">Opciones</h6>
                    <a class="dropdown-item" href="#">Ver Registros</a>
                    <a class="dropdown-item" href="#">Eliminar</a>
                    <a class="dropdown-item" href="?action=editar_ingresos">Editar</a>
                  </div>
                </div>
              <!-- Boton de Ingreso End-->

              <!-- Boton de Gasto In -->
               <div class="btn-group dropdown">
                  <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modalGasto">
                    Gasto
                  </button>
                  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropright</span>
                  </button>
                  <div class="dropdown-menu">
                   <h6 class="dropdown-header">Opciones</h6>
                    <a class="dropdown-item" href="#">Ver Registros</a>
                    <a class="dropdown-item" href="#">Eliminar</a>
                    <a class="dropdown-item" href="#">Editar</a>
                  </div>
                </div>
              <!-- Boton de Gasto End-->

              <button type="button" class="btn btn-secondary">transferencia</button>
            </div>
            <hr>
        <!-- Sección de movimientos End -->

          <h4 class="">Cuentas</h4>
          <div class="btn-group" role="group" aria-label="Basic example">
            <!--<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#ingresoModal">Cuentas</button>-->
            
             <a class="btn btn-info" href="?action=cuentas" role="button">Cuentas</a>
             
            <button type="button" class="btn btn-secondary">Ahorros</button>
            <button type="button" class="btn btn-secondary">Apartados</button>
          </div>
          <hr>

         </div>

         <div class="col-xs-12">
          <h4 class="">Deudas</h4>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#ingresoModal">Deudas</button>
            <button type="button" class="btn btn-secondary">Prestamos</button>
            <button type="button" class="btn btn-secondary">Inversiones</button>
          </div>
          <hr>
          <h4>Cuentas</h4>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#ingresoModal">Ingreso</button>
            <button type="button" class="btn btn-secondary">Gasto</button>
            <button type="button" class="btn btn-secondary">transferencia</button>
          </div>
          <hr>
          
         </div>

         <div class="col-xs-12">
           <h4>Otros</h4>
          <div class="btn-group" role="group" aria-label="Basic example">
            <a class="btn btn-primary" href="?action=registros" role="button">Registros</a>
            
            <button type="button" class="btn btn-secondary">pendientes</button>
            <button type="button" class="btn btn-secondary">Gráficas</button>
          </div>
          <hr>
          <h4><br></h4>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#ingresoModal">Balancear Cuentas</button>
          </div>

         </div>


       </div>
          
          
        
       </div>
     </div>
   </div>
  <!--Módulos END -->


   <div class="card bg-blue modsco ">
     <div class="card-header d-flex justify-content-between align-content-center align-items-center" id="headingThree">
       <h2 class="mb-0 flex-grow-1 flexbg w-100">
         <button class="btn btn-link btn-block text-left collapsed font-weight-bold " type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           Collapsible Group Item #3
         </button>
       </h2>
       <img src="./content/img/íconos/configur.png" width="30px">
     </div>
     <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
       <div class="card-body">
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
       </div>
     </div>
   </div>
 </div>
