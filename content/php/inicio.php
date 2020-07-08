
<div class=" inicio-container">
	<div>
		<div class="header_inicio ">
			<div class="headerinit">
				<span class="loinan">E</span>
				<span class="loinan">k</span>
				<span class="loinan">a</span>
				<span class="loinan">s</span>
				<span class="loinan">i</span>
				<span class="loinan">s</span>
				<span class="loinan">t</span>
				<span class="loinan">e</span>
				<span class="loinan">n</span>
				<span class="loinan">t</span>
			</div>
			<!-- <div class=" text-center state_init_mainpage_label">
				<h2>Iniciar Sesión</h2>
			</div> -->
			<div class="panel-log-reg">
				<a class="btn btn-success float-right login-btn" role="button">Iniciar Sesión</a>
				<a class="btn btn-primary text-light mr-2 float-right registro-btn" href="?action=registro" role="button">Registrarse</a>
			</div>
			<script type="text/javascript">
				const login_btn = document.getElementsByClassName("login-btn")[0]
				login_btn.onclick = () => {
					const cont_gen_login = document.createElement("div")
					cont_gen_login.classList.add("cont-gen-login")
					cont_gen_login.innerHTML = "ja"
					document.body.appendChild(cont_gen_login)
					alert("Ja")

				}
			</script>
		</div>
		<!-- <form method="POST" action="content/php/login.php">

			<div class="form-group">
				<input type="text" class="form-control" id="inputEmail3" placeholder="Correo o Usuario" name="usuario">
			</div>
			
			<div class="form-group">
				<input type="password" class="form-control" id="pass" placeholder="Contraseña" name="pass">
			</div>
			<button type="submit" class="btn btn-primary">Entrar</button>
		</form> -->
		
		<div id="root" class="col text-center" > 
		</div>
		<div class="init-wayses d-flex justify-content-end">
		    <button class="login-change-way   text-light font-weight-bold">Pan</button>
		</div>
	</div>
</div>
