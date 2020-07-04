
<div class="row pt-5  m-auto">
	<div class="m-auto">
        <h1 class="text-center text-light">Regístrate!</h1>
            <form class="pt-4" class="formureg ">
                <div class="froot">
                    <div class="text-center">
                            <label for="inputPassword3" class="text-light font-weight-bold text-center label_state"><h5>Clave</h5></label>
                    </div>
                   
                        <div id="root"></div>
                 
                </div>
                <div class="mailc text-center">
                    <label for="inputEmail3" class=" col-form-label text-light" placeholder="Tu Correo">Email</label>
                    <div class="">
                    <input type="email" class="form-control ml-2 mt-2" id="inputEmail3" name="mail">
                    </div>
                </div>
                <div class=" usuarioc text-center pt-2">
                    <label for="inputEmail3" class=" col-form-label text-light" placeholder="Tu Correo">Usuario</label>
                    <div class="">
                    <input type="text" class="form-control ml-2 mt-2" id="inputEmail3" name="usuario">
                    </div>
                </div>
            </form>
            <div class="m-auto pt-4" align = "center">
                 <button type="submit" value="siguiente" class="btn btn-primary registrarse-btn">Siguiente</button>
            </div>
            <script type="text/javascript">
    
                let state_btn = "next"
                let email = document.getElementsByName("mail")[0]
                let usuario = document.getElementsByName("usuario")[0]

                let email_div = document.getElementsByClassName("mailc")[0]
                let usuario_div = document.getElementsByClassName("usuarioc")[0]

                let btn_registrarse = document.getElementsByClassName("registrarse-btn")[0]

                window.onkeypress = e => {
                    if (e.key === "Enter"){
                        alert("ja")
                    }
                }

                btn_registrarse.onclick = () => {
                    if (email.value !== "" && usuario.value !==""){
                        window.scrollTo(0,0)
                        email_div.style.display = "none"
                        btn_registrarse.innerHTML = "Aceptar"
                        usuario_div.style.display = "none"
                        btn_registrarse.style.display = "none"
                    }
                    state_btn = "acept"
                    let count_try_for_signup = 0
                    let ver_pass = {}
                    if (state_btn === "acept"){
                        btn_registrarse.onclick = () => {

                            let div = document.getElementsByClassName("box-rounded")
                            for (let x=0; x < 9; x++){
                                if (div[x] !== undefined){
                                    div[x].style.background = "#fff"
                                }
                            }
                            count_try_for_signup += 1
                            //first_char_pass actua como pass completa
                            if (count_try_for_signup === 1){
                                ver_pass.first_char_pass1 = first_char_pass
                                alert("Repita password por favor")
                            } else if (count_try_for_signup === 2){
                                ver_pass.first_char_pass2 = first_char_pass
                            }
                            
                            if (count_try_for_signup === 2){
                                if (ver_pass.first_char_pass1 === ver_pass.first_char_pass2){

                                    console.log(ver_pass,"kk")

                                    $.post( "./content/php/registro/registrando.php", { mail: document.getElementsByName("mail")[0].value, usuario: document.getElementsByName("usuario")[0].value, pass: ver_pass.first_char_pass1})
                                      .done( dat => {
                                        console.log(dat)
                                        if (dat.match(/\<successfully\>/gim)){
                                            alert("Registro satisfactorio")
                                            window.location.href = "index.php"

                                        }
                                        bfixAnActiveInput = false
                                      });
                                } else {
                                    alert(`Error de coincidencia, vuelva a intentar`)
                                    console.log(ver_pass, count_try_for_signup,"...")
                                    count_try_for_signup = 0
                                    ver_pass= {}
                                    pass = ""
                                    // first_char_pass = ""
                                }
                            }  else if (count_try_for_signup === 3){
                                count_try_for_signup = 0
                                ver_pass= {}
                                pass = ""
                            }
                            first_char_pass = ""
                            pass = ""

                        } 

                    }

                    document.getElementsByClassName("froot")[0].animate([{
                        opacity:0,
                        transform: "scale(0.8)"
                    },{
                        opacity:1,
                        transform: "scale(1)"
                    }],{duration:1000, iterations:1})

                    btn_registrarse.animate([{
                        opacity:0
                    },{
                        opacity:1
                    }],{duration:1000, iterations:1})

                    repva()

                    import_data_signup({ //Send email and username to the pattern for post + password
                        email : document.getElementsByName("mail")[0].value,
                        usuario : document.getElementsByName("usuario")[0].value
                    })


                  
                }

                const repva = () => {
                    if (email.value !== "" && usuario.value !== ""){
                        document.getElementsByClassName("froot")[0].style.display ="block"
                    } else {
                        document.getElementsByClassName("froot")[0].style.display ="none"
                    }
                }
                repva()

            </script>

        <script type="text/javascript" src="./content/js/patron.js"></script>

        <script type="text/javascript">
            Pattmo("#root", managerPassword({
                use_data_from_db : true,
                signUp : true,

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
        <div class="init-wayses d-flex justify-content-end">
            <button class="login-change-way   text-light font-weight-bold">Pan</button>
        </div>
    </div>
</div>

