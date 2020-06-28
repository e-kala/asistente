<?php
    $mysqli = new mysqli('localhost', 'u599230971_asistente', '1q-2w-3e-4r-5t-', 'u599230971_asistente'); 
?>
<div class="row">
	<div class="col-sm-6">
		<form method="post" action="content/php/registrar_ideas.php">
			<input type="text" name="contenido_idea">
			<input type="submit" value="Guardar" name="ok">
        </form>
	</div>

	<div class="col-sm-6">
		<div class="-textarea">
			<?php $res = $mysqli->query("SELECT * FROM ideas");
			while ($f = $res->fetch_object()){
				echo $f->contenido_idea.'<br>';
			} ?>
		</div>
	</div>
</div>

	