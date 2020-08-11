<!--Información-->
<!-- <h3 class="text-center text-dark">Información</h3>-->

<div class="card-group">
  <div class="card boxes-inn bg-transparent"> <!--replace boxes-inn by boxes-in for aplly style on cascade-->
    <!-- <img src="..." class="card-img-top" alt="...">-->
    <div class="card-body content-balance">
      <div class="justify-content-between d-flex">
        <h5 class="card-title" >Balance</h5>
        <img class="float-right" src="./content/img/íconos/modal_info_balances.png" width="60px" height="60px">
      </div>
      <p class="card-text text-left">
      	<?php include 'content/php/ingresos_query.php'; ?>
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted state_balanc"> <?php echo $state; ?></small>
    </div>
  </div>
  <?php // para la carga de la información en id="info" está en ?>
  <div class="card boxes-inn bg-transparent"> <!--replace boxes-inn by boxes-in for aplly style on cascade-->
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <div class="justify-content-between d-flex">
        <h5 class="card-title">Último ingreso</h5>
        <img class="float-right" src="./content/img/íconos/modal_info_ingresos.png" width="60px" height="60px">
      </div>
      <p class="card-text text-left" id="info"></p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>

  <div class="card boxes-inn bg-transparent"> <!--replace boxes-inn by boxes-in for aplly style on cascade-->
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <div class="justify-content-between d-flex">
        <h5 class="card-title">Último Gasto</h5>
        <img class="float-right" src="./content/img/íconos/modal_info_gastos.png" width="60px" height="60px">
      </div>
      <p class="card-text text-left" id="ultimoGasto"></p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>


















