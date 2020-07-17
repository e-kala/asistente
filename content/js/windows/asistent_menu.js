boolam = false
menu_btn = document.getElementById("menu_btn")
if (menu_btn !== null) menu_btn.classList.add("menu_btn");

div_men = document.createElement("div")
div_men.classList.add("menu_container")
div_men.style.display = "none"

mods = document.getElementsByClassName("modsco")
modscodown = document.getElementsByClassName("modscodown")[0]
boxes_in = document.getElementsByClassName("boxes-in")

header_session = document.getElementsByClassName("header-home-asistent")[0]
text_he = document.getElementsByClassName("text-he")[0]

mode_light_dark = false // Mode light
check = true //Evitar repeticiones innecesarias

logo = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/> </svg>'

options = ["Inicio", "Configuración", logo, "Cerrar Sesión"]

iters = (modss, boxes_inn) => {
    for (let x = 0; x < mods.length; x++){
      mods[x].className = modss
    }
    for (let x = 0; x < boxes_in.length; x++){
      boxes_in[x].className = boxes_inn
    }
  }

let once_config = false
functions = [
  () =>{ // ---------------- Inicio
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
  () =>{ //----------------  Configuración
    check = false
    for (let x = 0; x < mods.length; x++){
      mods[x].style.display = "none"
    }
    if (modscodown !== undefined) modscodown.style.display = "none";

    boolam = false
    div_men.style.display = "none"

  }, 
  () => { // ------------------- Mode light / dark
    const btn_mode_men = document.getElementById("btn_3")
    
    btn_mode_men.innerHTML = !mode_light_dark ? logo : logo

    const impo = (im, om) => {
      mode_light_dark = im
    }

    if (!once_config){
      $.post( "./content/php/usr/usr_cnfg.php")
      .done( dat => {
        dat = JSON.parse(dat)
        let reschange = dat[1].mode === "dark" ? true : false;
        impo(reschange)
      });
      once_config = true
    }

    mode_light_dark = !mode_light_dark

    // CORREGIR
 
    if (mode_light_dark){ // ----------------- Dark
          header_session.className = "navbar mb-4 p-4 header-home-asistent-dark"
          text_he.className = "navbar-brand text-light text-he font-weight-bold"
     
        if (modscodown !== undefined){
          modscodown.className = window.screen.width >=800 ? "accordion pl-4 pr-4 pb-4  modulos modscodow text-dark" : "accordion  modulos modscodow text-dark";
        }
        iters(
          "card modsco dark text-light", 
          "card boxes-in dark text-light"
          )
      } else { // ----------------------------- Light
          header_session.className = "navbar mb-4 p-4 header-home-asistent header-home-light"
          text_he.className = "navbar-brand text-dark text-he font-weight-bold"
        if (modscodown !== undefined){
          modscodown.className = window.screen.width >=800 ? "accordion pl-4 pr-4 pb-4  modulos modscodow text-dark" : "accordion  modulos modscodow  text-dark";
        }
        iters(
          "card modsco light text-dark", 
          "card boxes-in light text-dark"
          )
      }

    boolam = false
    div_men.style.display = "none"
  },
  () =>{ //----------------- Cerrar Sesión
    // window.location.href +=  "?action=cerrar_sesion"
    boolam = false
    div_men.style.display = "none"
  }
]
for (let x=0; x < options.length; x++){
  if (x === 0){
    const optdiv = document.createElement("div")
    optdiv.innerHTML = options[x]
    optdiv.classList.add("options_men")
    optdiv.setAttribute("name", options[x])
    optdiv.setAttribute("id", "btn_"+(x+1))
    optdiv.addEventListener("click",functions[x])
    div_men.appendChild(optdiv)
  } else if (x === 1){ //Configuración
    const optdiv = document.createElement("a")
    optdiv.innerHTML = options[x]
    optdiv.classList.add("options_men")
    optdiv.setAttribute("href", "?action=configuracion")
    optdiv.setAttribute("name", options[x])
    optdiv.setAttribute("id", "btn_"+(x+1))
    optdiv.addEventListener("click",functions[x])
    div_men.appendChild(optdiv)
  } else if (x === 2){ //Mode Dark / light
    const optdiv = document.createElement("div")
    optdiv.innerHTML = options[x]
    optdiv.classList.add("options_men")
    optdiv.setAttribute("name", options[x])
    optdiv.setAttribute("id", "btn_"+(x+1))
    optdiv.addEventListener("click",functions[x])
    div_men.appendChild(optdiv)
  } else if (x === 3) { // Cerrar Sesion
    const optdiv = document.createElement("a")
    optdiv.innerHTML = options[x]
    optdiv.classList.add("options_men")
    optdiv.setAttribute("href", "?action=cerrar_sesion")
    optdiv.setAttribute("name", options[x])
    optdiv.setAttribute("id", "btn_"+(x+1))
    optdiv.addEventListener("click",functions[x])
    div_men.appendChild(optdiv)
  }
}
if (menu_btn !== null) menu_btn.appendChild(div_men);

btn_img_men = document.getElementById("btn_img_men")
if (btn_img_men !== null){
    btn_img_men.onclick = () => {
      boolam = !boolam
      if (boolam){
        div_men.style.display = "block"
        div_men.style.opacity = "1"
        div_men.animate([{
          opacity:0,
          transform:"translateY(-10%)"
        },{
          opacity:1,
          transform:"translateY(0%)"
        }],{duration:400, iterations:1})
      } else {
        setTimeout(()=>{
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


