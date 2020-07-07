let bool = false
const menu_btn = document.getElementById("menu_btn")
menu_btn.classList.add("menu_btn")

const div_men = document.createElement("div")
div_men.classList.add("menu_container")
div_men.style.display = "none"

const mods = document.getElementsByClassName("modsco")
const modscodown = document.getElementsByClassName("modscodown")[0]
const boxes_in = document.getElementsByClassName("boxes-in")

const header_session = document.getElementsByClassName("header-home-asistent")[0]
const text_he = document.getElementsByClassName("text-he")[0]

let mode_light_dark = false // Mode light
let check = true //Evitar repeticiones innecesarias

const options = ["Inicio", "Configuración", "Modo Dark", "Cerrar Sesión"]

const functions = [
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
      bool = false
      div_men.style.display = "none"
    } 
  },
  () =>{ //----------------  Configuración
    check = false
    for (let x = 0; x < mods.length; x++){
      mods[x].style.display = "none"
    }
    if (modscodown !== undefined) modscodown.style.display = "none";

    bool = false
    div_men.style.display = "none"

  }, 
  () => { // ------------------- Mode light / dark
    mode_light_dark = !mode_light_dark
    const btn_mode_men = document.getElementById("btn_3")
    
    btn_mode_men.innerHTML = !mode_light_dark ? "Modo Dark" : "Modo Light"
    
    const iters = (modss, boxes_inn) => {
      for (let x = 0; x < mods.length; x++){
        mods[x].className = modss
      }
      for (let x = 0; x < boxes_in.length; x++){
        boxes_in[x].className = boxes_inn
      }
    }
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
    bool = false
    div_men.style.display = "none"
  },
  () =>{ //----------------- Cerrar Sesión
    window.location.href +=  "?action=cerrar_sesion"
    bool = false
    div_men.style.display = "none"
  }
]
for (let x=0; x < options.length; x++){
  const optdiv = document.createElement("div")
  optdiv.innerHTML = options[x]
  optdiv.classList.add("options_men")
  optdiv.setAttribute("name", options[x])
  optdiv.setAttribute("id", "btn_"+(x+1))
  optdiv.addEventListener("click",functions[x])
  div_men.appendChild(optdiv)
}
menu_btn.appendChild(div_men)

const btn_img_men = document.getElementById("btn_img_men")
btn_img_men.onclick = () => {
  bool = !bool
  if (bool){
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

  }
}

