<!--Información-->
<!-- <h3 class="text-center text-dark">Información</h3>-->

<div class="card-group">
  <div class="card boxes-in">
    <!-- <img src="..." class="card-img-top" alt="...">-->
    <div class="card-body">
      <h5 class="card-title" >Balance</h5>
      <p class="card-text">
      	<?php include 'content/php/ingresos_query.php'; ?>
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <?php echo $state; ?></small>
    </div>
  </div>
  <?php // para la carga de la información en id="info" está en ?>
  <div class="card boxes-in">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <h5 class="card-title">Último ingreso</h5>
      <p class="card-text" id="info"></p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>

  <div class="card boxes-in">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <h5 class="card-title">Último Gasto</h5>
      <p class="card-text" id="ultimoGasto"></p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>


















