<!DOCTYPE html>
<html>
<head>
	<title>sistema</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
	<?php
		$mysqli = new mysqli('localhost', 'u599230971_asistente', '1q-2w-3e-4r-5t-', 'u599230971_asistente');
	?>
	
	<div class="container">
	<div style="text-align: center">
	<h2><strong>Sistema de administración</strong></h2>
	</div>
	
	<br>
	<div class="row">
		<div class="col-md-6">
			<h4><strong>Subir un pago/gasto</strong></h4>
			<br>
			<form method="post" action="registrar.php">

				<label>nombre:</label><input class="form-control" type="text" name="elemento_name" size="10">  
				<label>cantidad:</label><input class="form-control" type="text" name="valor" size="10"><br>
 				<input type="submit" class="btn btn-success" value="Guardar datos" name="B1">
  			</form>
  			<hr>
			<br>
			<h4>Tabla de gastos/egresos:</h4>
			<table class="table table-striped">
				<thead>
				<tr><th>#</th><th>Nombre</th><th>Cantidad</th><th>Editar</th><th>Eliminar</th></tr>
				</thead>
				<tbody>
				<?php 
					$res = $mysqli->query("SELECT * FROM gastos");
					$x =0;
					$totalGastos = 0;
					while ($f = $res->fetch_object()){
						$x++;
						$totalGastos +=$f->cantidad_gasto;
					?>
					<tr>
						<td>
							<?php echo $x ?>
						</td>
						<td>
							<?php echo $f->categoria_gasto ?>
						</td>
						<td>
							<?php echo '$'.$f->cantidad_gasto ?>
						</td>
						<td>
							<img src="https://image.flaticon.com/icons/svg/181/181540.svg" height="20px" width="20px">
						</td>
						<td>
							<img src="https://image.flaticon.com/icons/svg/126/126497.svg" width="20px" height="20px">
						</td>
					</tr>
					<?php
						}
					?>
					<tr>
					<td>
					</td>
					<td><strong>Total</strong></td>
					<td><strong><?php echo '$'.$totalGastos;?></strong></td>
					</tr>
				</tbody>
			</table>		
			
		</div>
		<div class="col-md-6">
		<h4><strong>Subir una entrada/ingreso</strong></h4>
		<br>
		<form method="post" action="registrar_ingresos.php">
				<label>Cantidad:</label><input class="form-control" type="text" name="ingreso_entrada" size="10">
				<br>
 				<input type="submit" class="btn btn-primary" value="Guardar datos" name="B1">
    	</form>
    	
    	<hr style="margin-top: 100px;">
    	<br>
    	<h4>Tabla de ingresos:</h4>
			<table class="table table-striped">
				<thead>
				<tr><th>#</th><th>Fecha</th><th>Cantidad</th><th>Editar</th><th>Eliminar</th></tr>
				</thead>
				<tbody>
				<?php 
					$res = $mysqli->query("SELECT * FROM ingresos");
					$x =0;
					$totalIngresos = 0;
					while ($f = $res->fetch_object()){
						$x++;
						$totalIngresos +=$f->ingreso_entrada;
					?>
					<tr>
						<td>
							<?php echo $x?>
						</td>
						<td>
							<?php echo $f->fecha?>
						</td>
						<td>
							<?php echo '$'.$f->ingreso_entrada?>
						</td>
						<td>
							<img src="https://image.flaticon.com/icons/svg/181/181540.svg" height="20px" width="20px">

						</td>
						<td>
							<img align="center" src="https://image.flaticon.com/icons/svg/126/126497.svg" width="20px" height="20px">
						</td>
					</tr>
					<?php
						}
					?>
					<tr>
					<td>
					</td>
					<td><strong>Total</strong></td>
					<td><strong><?php echo '$'.$totalIngresos;?></strong></td>
					</tr>
				</tbody>
			</table>		
		</div>
	
	</div>
	<hr>
	<div class="row">
		<div class="col-md-6"></div>
		<div class="col-md-3"><h3><strong>Total Neto:</strong></h3></div>	
		<div class="col-md-3"><h3><strong>$<?php echo $totalIngresos - $totalGastos?></strong></h3></div>		
	</div>
	</div>
	
		
</body>
</html>