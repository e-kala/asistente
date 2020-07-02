
<div class="row pt-5 modulos m-auto">
	<div class="col-sm-4 offset-sm-4">
        <h1 class="text-center text-light">Regístrate!</h1>
        <form class="pt-4" id="formureg">
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label text-light" placeholder="Tu Correo">Email</label>
                <div class="col-sm-10">
                <input type="email" class="form-control ml-2 mt-2" id="inputEmail3" name="mail">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label text-light" placeholder="Tu Correo">Usuario</label>
                <div class="col-sm-10">
                <input type="text" class="form-control ml-2 mt-2" id="inputEmail3" name="usuario">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label text-light">Pass</label>
                <div class="col-sm-10">
                <input type="password" class="form-control ml-2 mt-2" id="inputPassword3" name="pass">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label text-light">Repite Pass</label>
                <div class="col-sm-10">
                    <div id="root"></div>
                
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                 <button type="submit" class="btn btn-primary registrarse-btn">Registrarse</button>
                </div>
            </div>
        </form>

        

        <script type="text/javascript" src="./content/js/patron.js"></script>

        <script type="text/javascript">
            Pattmo("#root", managerPassword({
                style : {
                    bg : "blue",
                    br: "0%"
                },

                login : { //Esto será información solicitada del servidor pero para dar el ejemplo pongo yo los datos directos 
                    user : "Pepito",
                    password : "dabehifc", 
                },

                use_data_from_db : true,
                signUp : true,

                exe : () => {
                    let email = document.getElementsByName("mail")[0].value
                    let usuario = document.getElementsByName("usuario")[0].value
                    document.querySelector("#formureg").onsubmit = e => e.preventDefault();
                },

                components : {
                    userPage : "userPageMain.html", //Página a la que se accederá luego del login
                    errorPage : "tryexcess.html" //Página de error, con opciones de ayuda, etc., esta saldrá cuando se alcance el máximo de intentos permitidos
                },

                config_dev : { //Para el desarrollador
                    letters : false, //Quitar o poner letras 
                    showPassword : true // Mostrar password
                }
            }))
        </script>

        <script type="text/javascript">
            let email = document.getElementsByName("mail")[0].value
            let usuario = document.getElementsByName("usuario")[0].value

            document.querySelector("#formureg").onsubmit = e => e.preventDefault();

            // document.getElementsByClassName("registrarse-btn")[0].onclick = () => {
            //     $.post( "./content/php/registro/registrando.php", {
            //         mail : document.getElementsByName("mail")[0].value,
            //         usuario : document.getElementsByName("usuario")[0].value,
            //         pass : document.getElementsByName("pass")[0].value
            //     }).done( dat => {

            //         if (dat.match(/\<successfully\>/gim)){
            //             window.location.href = "index.php"
            //         } else {

            //         }   
            //       });
            // }

        </script>
    </div>
</div>

