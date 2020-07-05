<div class="headerinit" style="position: fixed; top:0; left:0;">
    Ekasistent
</div>
<div class="row pt-5  m-auto">
	<div class="m-auto bg-col p-4 rounded gen-form">
            <form class="p-4 bg-col formureg">
                <h1 class="text-center p-2 text-light bg-col title-form">Regístrate!</h1>
                <div class="froot">
                    <div class="text-center">
                            <label for="inputPassword3" class=" font-weight-bold text-center label_state"><h5>Clave</h5></label>
                    </div>
                   
                        <div id="root"></div>
                 
                </div>
                <div class="mailc text-center" align="center">
                    <label for="inputEmail3" class=" col-form-label text-light" placeholder="Tu Correo">Email</label>
                    <div class="m-2">
                    <input type="email" class="input-reg-text ml-2 mt-2" id="inputEmail3" name="mail">
                    </div>
                </div>
                <div class=" usuarioc text-center pt-2">
                    <label for="inputEmail3" class=" col-form-label text-light" placeholder="Tu Correo">Usuario</label>
                    <div class="m-2">
                    <input type="text" class=" ml-2 mt-2 input-reg-text" id="inputEmail3" name="usuario">
                    </div>
                </div>
            </form>
            <div class="m-auto bg-col" align="center">
                 <button class="btn btn-primary registrarse-btn m-4 mt-0" value="Siguiente">Siguiente</button>
                     
                 <button style="display: none;" class="btn btn-primary volver-btn m-1">Volver</button>
                 <button style="display: none;" class="btn btn-light new-reg-btn m-1 mt-3">Nuevo Registro</button>
                 
            </div>
            <script type="text/javascript">
    
                let state_btn = "next"
                let email = document.getElementsByName("mail")[0]
                let usuario = document.getElementsByName("usuario")[0]

                let email_div = document.getElementsByClassName("mailc")[0]
                let usuario_div = document.getElementsByClassName("usuarioc")[0]

                let btn_registrarse = document.getElementsByClassName("registrarse-btn")[0]

                let btn_volver = document.getElementsByClassName("volver-btn")[0]

                let btn_new_reg = document.getElementsByClassName("new-reg-btn")[0]
                btn_new_reg.onclick = () => window.location.reload(false);

                const repeal_post_gen = () => {
                    if (email.value !== "" && usuario.value !==""){
                        window.scrollTo(0,0)
                       
                        document.getElementsByClassName("init-wayses")[0].style.display = "block"
                        email_div.style.display = "none"
                        btn_registrarse.innerHTML = "Aceptar"
                        btn_registrarse.value = "Aceptar"

                        if (document.getElementsByClassName("login-change-way")[0].value !== "Tap"){
                            btn_registrarse.style.display = "none"
                        } else {
                             btn_registrarse.style.display = "block"
                        }

                        usuario_div.style.display = "none"

                        btn_volver.style.display = "block"
                        btn_volver.animate([{
                            opacity:0
                        },{
                            opacity:1
                        }],{duration:700, iterations:1})
                        btn_new_reg.style.display = "block"
                        btn_new_reg.animate([{
                            opacity:0
                        },{
                            opacity:1
                        }],{duration:700, iterations:1})
                        state_btn = "acept"
                    } else {
                        alertify.error("Debes completar todos los campos")
                    }

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
                                document.getElementsByClassName("label_state")[0].style.color = "white"
                                document.getElementsByClassName("label_state")[0].innerHTML ="* Repita password por favor"
                            } else if (count_try_for_signup === 2){
                                ver_pass.first_char_pass2 = first_char_pass
                            }
                            
                            if (count_try_for_signup === 2){
                                if (ver_pass.first_char_pass1 === ver_pass.first_char_pass2 && ver_pass.first_char_pass1 !== ""){

                                    console.log(ver_pass,"kk")

                                    $.post( "./content/php/registro/registrando.php", { mail: document.getElementsByName("mail")[0].value, usuario: document.getElementsByName("usuario")[0].value, pass: ver_pass.first_char_pass1})
                                      .done( dat => {
                                        console.log(dat)
                                        if (dat.match(/\<successfully\>/gim)){
                                            // alert("Registro satisfactorio")
                                            alertify.success("Registro satisfactorio")
                                            setTimeout(()=>{
                                                window.location.href = "index.php"
                                            },1400)

                                        }
                                        bfixAnActiveInput = false
                                      });
                                } else {
                                    document.getElementsByClassName("label_state")[0].style.color = "red"
                                    document.getElementsByClassName("label_state")[0].innerHTML ="* Error de coincidencia"
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

                btn_volver.onclick = () => {
                    document.getElementsByClassName("init-wayses")[0].style.display = "none"
                    document.getElementsByClassName("froot")[0].style.display = "none"
                    email_div.style.display = "block"
                    email_div.animate([{
                        opacity:0,
                        transform:"scale(1.3) "
                    },{
                        opacity:1,
                        transform:"scale(1)"
                    }],{duration:700, iterations:1})
                    btn_registrarse.innerHTML = "Siguiente"
                    btn_registrarse.value = "Siguiente"
                    btn_registrarse.style.display = "block"
                    btn_registrarse.animate([{
                        opacity:0
                    },{
                        opacity:1
                    }],{duration:700, iterations:1})

                    btn_new_reg.style.display = "none"

                    usuario_div.style.display = "block"
                    usuario_div.animate([{
                        opacity:0,
                        transform:"scale(1.3)"
                    },{
                        opacity:1,
                        transform:"scale(1)"
                    }],{duration:700, iterations:1})
                    btn_volver.style.display = "none"
                    state_btn = "next"
                    if (state_btn === "next") {
                        btn_registrarse.onclick = () => {
                            repeal_post_gen()
                        }
                    }
                }

                window.onkeypress = e => {
                    if (e.key === "Enter"){
                        repeal_post_gen()
                    }
                }

                btn_registrarse.onclick = () => {
                    repeal_post_gen()
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

                config_dev : { //Para el desarrollador
                    letters : false, //Quitar o poner letras 
                    showPassword : true // Mostrar password
                }
            }))
        </script>

        <div class="init-wayses " align="left" style="left:0; display: none;">
            <button  class="login-change-way   text-light font-weight-bold">Pan</button>
        </div>

    </div>
</div>

