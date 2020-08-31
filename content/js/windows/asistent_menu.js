boolam = false
menu_btn = document.getElementById("menu_btn")
if (menu_btn !== null) menu_btn.classList.add("menu_btn");

let alma_config; //Almacena configuración cuando el último script se cargue para ser usada aquí en este archivo

div_men = document.createElement("div")
div_men.classList.add("menu_container")
div_men.style.display = "none"
div_men.style.webkitDisplay = "none";
div_men.style.MozDisplay = "none";
div_men.style.msDisplay = "none";
div_men.style.ODisplay = "none";


mods = document.getElementsByClassName("modsco") //Modulos
modscodown = document.getElementsByClassName("modscodown")[0] //Módulos inferiores
boxes_in = document.getElementsByClassName("boxes-in") //Ventans internas de módulos
registrosgasin = document.getElementsByClassName("registrosgasin") //Seccion "Registros" gastos / ingresos, seccion del filtro historial de movimientos
colorchangetxt = document.getElementsByClassName("colorchangetxt")
bguserconfigchange = document.getElementsByClassName("bguserconfigchange")[0]
containeringasedi = document.getElementsByClassName("containeringasedi")[0] //Make accounts, gast edit, ingr edit
footer = document.getElementsByClassName("footcolor")[0]
color_ventana_graficos = document.getElementsByClassName("color_ventana_graficos")[0]
modingresogasto = document.getElementsByClassName("modingresogasto")
bgtransferencias_ventana = document.getElementsByClassName("bgtransferencias_ventana")[0]
menu_option_config_panel_collapsable = document.getElementsByClassName("fg-color-menu-option-configpanel")
bgpremiumchange = document.getElementsByClassName("bgpremiumchange") //bgchange premium window
bgcorinsilogro = document.getElementsByClassName("bgcorinsilogro") //section badges and logrs

//tadores, registro
bgchan = document.getElementsByClassName("bgchan") //Tadores use change mode dark / light

header_session = document.getElementsByClassName("header-home-asistent")[0]
cotextmennavtop_color_bottons_header = document.getElementsByClassName("cotextmennavtop")
text_he = document.getElementsByClassName("text-he")[0]

mode_light_dark = false // Mode light
check = true //Evitar repeticiones innecesarias

logo = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/> </svg>'

options = ["Inicio", "Configuración", logo, "Cerrar Sesión"]

function iters(status, modss, boxes_inn, registrosg, txtcolor, tadoreschangemod){
  if (mods !== undefined){
    for (let x = 0; x < mods.length; x++){
      if (mods[x] !== undefined){
        mods[x].className = modss[0]
        mods[x].style.background = modss[1]
      }
    }
  }

  if (boxes_in !== undefined){
    for (let x = 0; x < boxes_in.length; x++){
      if (boxes_in[x] !== undefined){
        boxes_in[x].className = boxes_inn[0]
        boxes_in[x].style.background = boxes_inn[1]
        if (status === "dark"){
          boxes_in[x].animate([{
            background:`rgb(255,255,255,${alma_config[1].transparency}5)`
          },{
            background:boxes_inn[1]
          }],{duration:400, iterations:1})
        } else {
          boxes_in[x].animate([{
            background:`rgb(52,52,69,${alma_config[1].transparency}5)`
          },{
            background:boxes_inn[1]
          }],{duration:400, iterations:1})
        }
      }
    }
    
  }
    if (registrosgasin !== undefined) {
      for (let x = 0; x < registrosgasin.length; x++){
        registrosgasin[x].className = registrosg[0]
        registrosgasin[x].style.background = registrosg[1]
        if (status === "dark"){
          registrosgasin[x].animate([{
            background:`rgb(255,255,255,${alma_config[1].transparency}5)`
          },{
            background:registrosg[1]
          }],{duration:400, iterations:1})
        } else {
          registrosgasin[x].animate([{
            background:`rgb(52,52,69,${alma_config[1].transparency}5)`
          },{
            background:registrosg[1]
          }],{duration:400, iterations:1})
        }
      }
    }
    if (colorchangetxt !== undefined) {
      for (let x = 0; x < colorchangetxt.length; x++){
        colorchangetxt[x].className = txtcolor
      }
    }
    if (bgchan !== undefined){
      for (let x = 0; x < bgchan.length; x++){
        bgchan[x].className = tadoreschangemod
      }
    }

    if (cotextmennavtop_color_bottons_header !== undefined) {
      for (let x = 0; x < cotextmennavtop_color_bottons_header.length; x++){  
        if (window.innerWidth >= 1000){
          if (status === "dark"){
            cotextmennavtop_color_bottons_header[x].className = "cotextmennavtop btn btn-inherit font-weight-bold text-light"
          } else {
            cotextmennavtop_color_bottons_header[x].className = "cotextmennavtop btn btn-inherit font-weight-bold text-dark"    
          }
        } else {
            cotextmennavtop_color_bottons_header[x].className = "cotextmennavtop btn btn-inherit font-weight-bold text-dark"  
        }
      }
    }

    if (menu_option_config_panel_collapsable !== undefined){
      for (let x = 0; x < menu_option_config_panel_collapsable.length; x++){
        if (status === "dark"){
          menu_option_config_panel_collapsable[x].className = "btn btn-link btn-block text-left fg-color-menu-option-configpanel text-light"
        } else {
          menu_option_config_panel_collapsable[x].className = "btn btn-link btn-block text-left fg-color-menu-option-configpanel text-dark"
        }
      }
    }

    //change bg premium 
    if (bgpremiumchange !== undefined){
      for (let x = 0; x < bgpremiumchange.length; x++){
        if (status === "light"){
          bgpremiumchange[x].style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
          bgpremiumchange[x].className = "card mb-2 bgpremiumchange text-dark"
          
        } else {
          bgpremiumchange[x].style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
          bgpremiumchange[x].className = "card mb-2 bgpremiumchange text-light"
        }
      }
    }

    if (bgcorinsilogro !== undefined){
      for (let x = 0; x < bgcorinsilogro.length; x++){
        if (status === "light"){
          bgcorinsilogro[x].style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
          bgcorinsilogro[x].className = "row p-4 bgcorinsilogro text-dark"
        } else {
          bgcorinsilogro[x].style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
          bgcorinsilogro[x].className = "row p-4 bgcorinsilogro text-light"
        }
      }
    }
}

let once_config = false
functions = [
  function(){ // ---------------- Inicio
    if (!check){
      check = true
      for (let x = 0; x < mods.length; x++){
        mods[x].style.display = "block"
        mods[x].animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
      }
      if (modscodown !== undefined){
        modscodown.style.display = "block"
        modscodown.animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
      }
      boolam = false
      div_men.style.display = "none"
    } 
  },
  function(){ //----------------  Configuración
    check = false
    boolam = false
  }, 
  function(){ // ------------------- Mode light / dark
    const btn_mode_men = document.getElementById("btn_3")
    
    btn_mode_men.innerHTML = !mode_light_dark ? logo : logo

    function impo(im){
      mode_light_dark = im
    }

    if (!once_config){
      impo(alma_config[1].mode === "dark" ? true : false)
      once_config = true
    }


    mode_light_dark = !mode_light_dark
    mode_client = mode_light_dark


    if (document.getElementById("caducidad-slide") !== undefined && document.getElementById("caducidad-slide") !== null){
      caducidad = document.getElementById("caducidad-slide").value
    } else {
      caducidad = ""
    }


    function post_save_change(mode){
      $.post("./content/php/usr/update_cnfg.php", {
        usuario : alma_config[0].usuario,
        background : alma_config[1].background,
        pj_change: alma_config[1].pj_change,
        pj_hidden: alma_config[1].pj_hidden,
        aside_hidden: alma_config[1].aside_hidden,
        transparency: alma_config[1].transparency,
        mode : mode,
        caducidad : caducidad !== "" ? caducidad : alma_config[1].caducidad,
        time_bal : alma_config[1].time_bal,
        ingreso_minimo_mensual: alma_config[1].ingreso_minimo_mensual,
        constanciasaludable: alma_config[1].constanciasaludable !== "null" && alma_config[1].constanciasaludable !== null && alma_config[1].constanciasaludable !== "undefined" && alma_config[1].constanciasaludable !== undefined && alma_config[1].constanciasaludable !== "" ? alma_config[1].constanciasaludable : "null",
        buenafortuna: alma_config[1].buenafortuna !== "null" && alma_config[1].buenafortuna !== null && alma_config[1].buenafortuna !== "undefined" && alma_config[1].buenafortuna !== undefined && alma_config[1].buenafortuna !== "" ? alma_config[1].buenafortuna : "null",
        elorganizador: alma_config[1].elorganizador !== "null" && alma_config[1].elorganizador !== null && alma_config[1].elorganizador !== "undefined" && alma_config[1].elorganizador !== undefined && alma_config[1].elorganizador !== "" ? alma_config[1].elorganizador : "null",
        excelenciafinanciera: alma_config[1].excelenciafinanciera !== "null" && alma_config[1].excelenciafinanciera !== null && alma_config[1].excelenciafinanciera !== "undefined" && alma_config[1].excelenciafinanciera !== undefined && alma_config[1].excelenciafinanciera !== "" ? alma_config[1].excelenciafinanciera : "null",
        crecimientoexponencial: alma_config[1].crecimientoexponencial !== "null" && alma_config[1].crecimientoexponencial !== null && alma_config[1].crecimientoexponencial !== "undefined" && alma_config[1].crecimientoexponencial !== undefined && alma_config[1].crecimientoexponencial !== "" ? alma_config[1].crecimientoexponencial : "null",
        crecimientosuperior: alma_config[1].crecimientosuperior !== "null" && alma_config[1].crecimientosuperior !== null && alma_config[1].crecimientosuperior !== "undefined" && alma_config[1].crecimientosuperior !== undefined && alma_config[1].crecimientosuperior !== "" ? alma_config[1].crecimientosuperior : "null",
        huracandedinero: alma_config[1].huracandedinero !== "null" && alma_config[1].huracandedinero !== null && alma_config[1].huracandedinero !== "undefined" && alma_config[1].huracandedinero !== undefined && alma_config[1].huracandedinero !== "" ? alma_config[1].huracandedinero : "null",
        usuarioactivo: alma_config[1].usuarioactivo !== "null" && alma_config[1].usuarioactivo !== null && alma_config[1].usuarioactivo !== "undefined" && alma_config[1].usuarioactivo !== undefined && alma_config[1].usuarioactivo !== "" ? alma_config[1].usuarioactivo : "null",
        premioinactividad: alma_config[1].premioinactividad !== "null" && alma_config[1].premioinactividad !== null && alma_config[1].premioinactividad !== "undefined" && alma_config[1].premioinactividad !== undefined && alma_config[1].premioinactividad !== "" ? alma_config[1].premioinactividad : "null",
        gastadorjunior: alma_config[1].gastadorjunior !== "null" && alma_config[1].gastadorjunior !== null && alma_config[1].gastadorjunior !== "undefined" && alma_config[1].gastadorjunior !== undefined && alma_config[1].gastadorjunior!== "" ? alma_config[1].gastadorjunior : "null",
        gastadorsenior: alma_config[1].gastadorsenior !== "null" && alma_config[1].gastadorsenior !== null && alma_config[1].gastadorsenior !== "undefined" && alma_config[1].gastadorsenior !== undefined && alma_config[1].gastadorsenior !== "" ? alma_config[1].gastadorsenior : "null",
        gastadorcompulsivo: alma_config[1].gastadorcompulsivo !== "null" && alma_config[1].gastadorcompulsivo !== null && alma_config[1].gastadorcompulsivo !== "undefined" && alma_config[1].gastadorcompulsivo !== undefined && alma_config[1].gastadorcompulsivo !== "" ? alma_config[1].gastadorcompulsivo : "null",
        sombreromagico: alma_config[1].sombreromagico !== "null" && alma_config[1].sombreromagico !== null && alma_config[1].sombreromagico !== "undefined" && alma_config[1].sombreromagico !== undefined && alma_config[1].sombreromagico !== "" ? alma_config[1].sombreromagico : "null",
        reservadepoderi: alma_config[1].reservadepoderi !== "null" && alma_config[1].reservadepoderi !== null && alma_config[1].reservadepoderi !== "undefined" && alma_config[1].reservadepoderi !== undefined && alma_config[1].reservadepoderi !== "" ? alma_config[1].reservadepoderi : "null",
        reservadepoderii: alma_config[1].reservadepoderii !== "null" && alma_config[1].reservadepoderii !== null && alma_config[1].reservadepoderii !== "undefined" && alma_config[1].reservadepoderii !== undefined && alma_config[1].reservadepoderii !== "" ? alma_config[1].reservadepoderii : "null"

      }).done(function(e){
        // console.log(e,"actualizado")
      })
    }

    if (mode_light_dark){ // ----------------- Dark
      bg_session = "dark"
      modebg_to_nav = "dark"
      post_save_change("dark")
        header_session.className = "navbar mb-4 p-4"
        header_session.style.background = `rgb(52,52,69,${transparency}5)`
        header_session.animate([{
          background:`rgb(255,255,255,${transparency}5)`
        },{
          background:`rgb(52,52,69,${transparency}5)`
        }],{duration:400, iterations:1})

        text_he.className = "navbar-brand text-light text-he font-weight-bold"

        footer.style.background =  `rgb(52,52,69,${transparency}5)`
        footer.className = "card footcolor text-light font-weight-bold"
        footer.animate([{
          background:`rgb(255,255,255,${transparency}5)`
        },{
          background:`rgb(52,52,69,${transparency}5)`
        }],{duration:400, iterations:1})

        if (mods[0] !== undefined && mods[1] !== undefined){
          mods[0].animate([{
            background:`rgb(255,255,255,${transparency}5)`
          },{
            background:`rgb(52,52,69,${transparency}5)`
          }],{duration:400, iterations:1})
          mods[1].animate([{
            background:`rgb(255,255,255,${transparency}5)`
          },{
            background:`rgb(52,52,69,${transparency}5)`
          }],{duration:400, iterations:1})
        }
       
        if (modscodown !== undefined){
          modscodown.className = window.screen.width >=800 ? "accordion pl-4 pr-4 pb-4  modulos modscodow text-dark" : "accordion  modulos modscodow text-dark";
        }
        if (bguserconfigchange !== undefined && bguserconfigchange !== null){
          bguserconfigchange.className = "card bguserconfigchange text-light"
          bguserconfigchange.style.background = `rgb(52,52,69,${transparency}5)`
          bguserconfigchange.animate([{
            background:`rgb(255,255,255,${transparency}5)`
          },{
            background:`rgb(52,52,69,${transparency}5)`
          }],{duration:400, iterations:1})
        }
        if (containeringasedi !== undefined && containeringasedi !== null){
          containeringasedi.className = "container containeringasedi p-4 text-light"
          containeringasedi.style.background = `rgb(52,52,69,${transparency}5)`
          containeringasedi.animate([{
            background:`rgb(255,255,255,${transparency}5)`
          },{
            background:`rgb(52,52,69,${transparency}5)`
          }],{duration:400, iterations:1})
        }

        if (color_ventana_graficos !== undefined){
          color_ventana_graficos.style.background = `rgb(52,52,69,${transparency}5)`
          color_ventana_graficos.animate([{
            background:`rgb(255,255,255,${transparency}5)`
          },{
            background:`rgb(52,52,69,${transparency}5)`
          }],{duration:400, iterations:1})
          color_ventana_graficos.className = "card mt-4 p-4 color_ventana_graficos text-light"
        }

        if (modingresogasto[0] !== undefined){ //Modal ingreso
          modingresogasto[0].style.background = `rgb(52,52,69)`
          modingresogasto[0].className = "modal-content modingresogasto text-light"
          modingresogasto[0].animate([{
            background:`rgb(255,255,255)`
          },{
            background:`rgb(52,52,69)`
          }],{duration:400, iterations:1})
        }

        if (modingresogasto[1] !== undefined){ //Modal gasto
          modingresogasto[1].style.background = `rgb(52,52,69)`
          modingresogasto[1].className = "modal-content modingresogasto text-light"
          modingresogasto[1].animate([{
            background:`rgb(255,255,255)`
          },{
            background:`rgb(52,52,69)`
          }],{duration:400, iterations:1})
        }

        //Transferencias
        if (bgtransferencias_ventana !== undefined){
          bgtransferencias_ventana.style.background = `rgb(52,52,69,${transparency}5)`
          bgtransferencias_ventana.className = "p-4 mt-4 rounded bgtransferencias_ventana text-light"
          bgtransferencias_ventana.animate([{
            background:`rgb(255,255,255,${transparency}5)`
          },{
            background:`rgb(52,52,69,${transparency}5)`
          }],{duration:400, iterations:1})
        }

        //bgpremium
        if (bgpremiumchange !== undefined){
          for (let x = 0; x < bgpremiumchange.length; x++){
            bgpremiumchange[x].animate([{
              background:`rgb(255,255,255,${alma_config[1].transparency}5)`
            },{
              background:`rgb(52,52,69,${alma_config[1].transparency}5)`
            }],{duration:400, iterations:1})
          }
        }

        //bgbadgesandlogros 
        if (bgcorinsilogro !== undefined){
          for (let x = 0; x < bgcorinsilogro.length; x++){
            bgcorinsilogro[x].animate([{
              background:`rgb(255,255,255,${alma_config[1].transparency}5)`
            },{
              background:`rgb(52,52,69,${alma_config[1].transparency}5)`
            }],{duration:400, iterations:1})
          }
        }

        iters(
          "dark",
          ["card modsco text-light flexbg",`rgb(52,52,69,${transparency}5)`], 
          ["card boxes-in text-light flexbg",`rgb(52,52,69,${transparency}5)`],
          ["p-4 m-4 text-white tered registrosgasin text-light text-white cotxtlight",`rgb(52,52,69,${transparency}5)`],
          'text-center colorchangetxt text-light',
          "containeraside card asidechancolor text-light"
        )
        let asidechancolor = document.getElementsByClassName("asidechancolor")[0]
        if (asidechancolor !== undefined) {
          asidechancolor.className = "containeraside card asidechancolor text-light"
          asidechancolor.style.background = `rgb(52,52,69,${transparency}5)`
          asidechancolor.animate([{
            background:`rgb(255,255,255,${transparency}5)`
          },{
            background:`rgb(52,52,69,${transparency}5)`
          }],{duration:400, iterations:1})
        }
      

    } else { // ----------------------------- Light
      bg_session = "white"
      modebg_to_nav = "white"
      post_save_change("white")
        header_session.className = "navbar mb-4 p-4 header-home-asistent"
        header_session.style.background = `rgb(255,255,255,${transparency}5)`
        header_session.animate([{
          background:`rgb(52,52,69,${transparency}5)`
        },{
          background:`rgb(255,255,255,${transparency}5)`
        }],{duration:400, iterations:1})

        text_he.className = "navbar-brand text-dark text-he font-weight-bold"

        footer.style.background = `rgb(255,255,255,${transparency}5)`
        footer.animate([{
          background:`rgb(52,52,69,${transparency}5)`
        },{
          background:`rgb(255,255,255,${transparency}5)`
        }],{duration:400, iterations:1})
        footer.className = "card footcolor text-dark font-weight-bold"

        if (mods[0] !== undefined && mods[1] !== undefined){
          mods[0].animate([{
            background:`rgb(52,52,69,${transparency}5)`
          },{
            background:`rgb(255,255,255,${transparency}5)`
          }],{duration:400, iterations:1})

          mods[1].animate([{
            background:`rgb(52,52,69,${transparency}5)`
          },{
            background:`rgb(255,255,255,${transparency}5)`
          }],{duration:400, iterations:1})
        }

        if (modscodown !== undefined){
          modscodown.className = window.screen.width >=800 ? "accordion pl-4 pr-4 pb-4  modulos modscodow text-dark" : "accordion  modulos modscodow  text-dark";
        }

        if (bguserconfigchange !== undefined && bguserconfigchange !== null){
          bguserconfigchange.className = "card bguserconfigchange text-dark"
          bguserconfigchange.style.background = `rgb(255,255,255,${transparency}5)`
          bguserconfigchange.animate([{
            background:`rgb(52,52,69,${transparency}5)`
          },{
            background:`rgb(255,255,255,${transparency}5)`
          }],{duration:400, iterations:1})
        }

        if (containeringasedi !== undefined && containeringasedi !== null){
          containeringasedi.className = "container containeringasedi p-4 text-dark"
          containeringasedi.style.background = `rgb(255,255,255,${transparency}5)`
          containeringasedi.animate([{
            background:`rgb(52,52,69,${transparency}5)`
          },{
            background:`rgb(255,255,255,${transparency}5)`
          }],{duration:400, iterations:1})
        }


        if (color_ventana_graficos !== undefined){
          color_ventana_graficos.style.background = `rgb(255,255,255,${transparency}5)`
          color_ventana_graficos.animate([{
            background:`rgb(52,52,69,${transparency}5)`
          },{
            background:`rgb(255,255,255,${transparency}5)`
          }],{duration:400, iterations:1})
          color_ventana_graficos.className = "card mt-4 p-4 color_ventana_graficos text-dark"
        }

        if (modingresogasto[0] !== undefined){ //Modal ingreso
          modingresogasto[0].style.background = `rgb(255,255,255)`
          modingresogasto[0].className = "modal-content modingresogasto text-dark"
          modingresogasto[0].animate([{
            background:`rgb(52,52,69)`
          },{
            background:`rgb(255,255,255)`
          }],{duration:400, iterations:1})
        }

        if (modingresogasto[1] !== undefined){ //Modal gastos
          modingresogasto[1].style.background = `rgb(255,255,255)`
          modingresogasto[1].className = "modal-content modingresogasto text-dark"
          modingresogasto[1].animate([{
            background:`rgb(52,52,69)`
          },{
            background:`rgb(255,255,255)`
          }],{duration:400, iterations:1})
        }

        //Transferencias
        if (bgtransferencias_ventana !== undefined){
          bgtransferencias_ventana.style.background =`rgb(255,255,255,${transparency}5)`
          bgtransferencias_ventana.className = "p-4 mt-4 rounded bgtransferencias_ventana text-dark"
          bgtransferencias_ventana.animate([{
            background:`rgb(52,52,69,${transparency}5)`
          },{
            background:`rgb(255,255,255,${transparency}5)`
          }],{duration:400, iterations:1})
        }

        // bgpremium
        if (bgpremiumchange !== undefined){
          for (let x = 0; x < bgpremiumchange.length; x++){
            bgpremiumchange[x].animate([{
              background:`rgb(52,52,69,${alma_config[1].transparency}5)`
            },{
              background:`rgb(255,255,255,${alma_config[1].transparency}5)`
            }],{duration:400, iterations:1})
          }
        }

        //bgbadgesandlogros 
        if (bgcorinsilogro !== undefined){
          for (let x = 0; x < bgcorinsilogro.length; x++){
            bgcorinsilogro[x].animate([{
              background:`rgb(52,52,69,${alma_config[1].transparency}5)`
            },{
              background:`rgb(255,255,255,${alma_config[1].transparency}5)`
            }],{duration:400, iterations:1})
          }
        }

        iters(
          "light",
          ["card modsco text-dark flexbg",`rgb(255,255,255,${transparency}5)`], 
          ["card boxes-in text-dark", `rgb(255,255,255,${transparency}5)`],
          ["p-4 m-4 tered registrosgasin text-dark cotxtdark", `rgb(255,255,255,${transparency}5)`],
          'text-center colorchangetxt text-dark',
          "containeraside card asidechancolor text-dark"
        )
        let asidechancolor = document.getElementsByClassName("asidechancolor")[0]
        if (asidechancolor !== undefined){
          asidechancolor.className = "containeraside card asidechancolor text-dark"
          asidechancolor.style.background = `rgb(255,255,255,${transparency}5)`
          asidechancolor.animate([{
            background:`rgb(52,52,69,${transparency}5)`
          },{
            background:`rgb(255,255,255,${transparency}5)`
          }],{duration:400, iterations:1})

        }
      }
    boolam = false
    div_men.style.display = "none"
  },
  function(){ //----------------- Cerrar Sesión
    // window.location.href +=  "?action=cerrar_sesion"
    boolam = false
    div_men.style.display = "none"
  }
]

for (let x=0; x < options.length; x++){
  if (x === 0){ //Inicio
    const optdiv = document.createElement("a")
    optdiv.innerHTML = options[x]
    optdiv.classList.add("options_men")
    optdiv.setAttribute("name", options[x])
    optdiv.setAttribute("href", "index.php#?")
    optdiv.style.fontWeight ="bold"
    optdiv.setAttribute("id", "btn_"+(x+1))
    optdiv.addEventListener("click",functions[x])
    optdiv.className += "  btn btn-inherit text-dark"
    div_men.appendChild(optdiv)
    optdiv.innerHTML +='<i class="fa fa-home ml-2 text-primary" aria-hidden="true"></i>'
  } else if (x === 1){ //Configuración
    const optdiv = document.createElement("a")
    optdiv.innerHTML = options[x]
    optdiv.classList.add("options_men")
    optdiv.setAttribute("href", "?action=configuracion")
    optdiv.setAttribute("name", options[x])
    optdiv.setAttribute("id", "btn_"+(x+1))
    optdiv.style.fontWeight ="bold"
    optdiv.addEventListener("click",functions[x])
    optdiv.className += "  btn btn-inherit text-dark"
    div_men.appendChild(optdiv)
    optdiv.innerHTML +='<i class="fa fa-cogs ml-2 text-primary" aria-hidden="true"></i>'
  } else if (x === 2){ //Mode Dark / light
    const optdiv = document.createElement("div")
    optdiv.innerHTML = options[x]
    optdiv.setAttribute("name", options[x])
    optdiv.setAttribute("id", "btn_"+(x+1))
    optdiv.addEventListener("click",functions[x])
    optdiv.className += ""
    optdiv.style.cursor = "pointer"
    optdiv.style.position = "fixed"
    optdiv.style.bottom = "0"
    optdiv.style.right = "0"
    optdiv.style.margin = "20px"
    optdiv.style.paddingBottom = "3px"
    optdiv.style.paddingLeft = "5px"
    optdiv.style.paddingRight = "5px"
    optdiv.style.zIndex = "980"
    optdiv.style.transform = "scale(1.4)"
    optdiv.style.borderRadius = "12%"
    optdiv.style.backgroundColor = "white"
    if (header_session !== undefined) header_session.appendChild(optdiv)
  } else if (x === 3) { // Cerrar Sesion
    const optdiv = document.createElement("a")
    optdiv.innerHTML = options[x]
    optdiv.classList.add("options_men")
    optdiv.setAttribute("href", "?action=cerrar_sesion")
    optdiv.style.fontWeight ="bold"
    optdiv.setAttribute("name", options[x])
    optdiv.setAttribute("id", "btn_"+(x+1))
    optdiv.addEventListener("click",functions[x])
    optdiv.className += "  btn btn-inherit text-dark"
    div_men.appendChild(optdiv)
    optdiv.innerHTML +='<i class="fa fa-long-arrow-right text-primary ml-2" aria-hidden="true"></i>'
  }
}
if (menu_btn !== null) menu_btn.appendChild(div_men);

btn_img_men = document.getElementById("btn_img_men")
if (btn_img_men !== null){
    btn_img_men.onclick = function(){
      boolam = !boolam
      if (boolam){
        div_men.style.display = "flex"
        div_men.style.opacity = "1"
        div_men.animate([{
          opacity:0,
          transform:"translateY(-10%)"
        },{
          opacity:1,
          transform:"translateY(0%)"
        }],{duration:400, iterations:1})
      } else {
        setTimeout( function(){
          div_men.style.display = "none"
        },380)
        div_men.style.opacity = "1"

        div_men.animate([{
          opacity:1,
          transform:"translateY(0%)"
        },{
          opacity:0,
          transform:"translateY(-10%)"
        }],{duration:400, iterations:1})

      }     } }


      