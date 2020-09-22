let almastore = {} //Almacenar lista de objetos para operaciones de grupos de elementos seleccionados en tabla gastos / ingresos

let formregdesktop = document.getElementsByClassName("frguss")[0] 
let tadoresdesktop = document.getElementsByClassName("tadoress")[0] 
let menregdesktop = document.getElementsByClassName("menrego")[0]
let finddesktop = document.getElementsByClassName("findd")[0]

search(formregdesktop, tadoresdesktop, menregdesktop, finddesktop, { mode : "desktop"}) //t => m, f => d

const load_all_reg_btn = document.getElementById("load_all_reg")
let show = true 
load_all_reg.onclick = () => {
    show = !show
    if (show){
        load_all_reg.innerHTML = 'Mostrar menos<i class="fa fa-eye-slash ml-2" aria-hidden="true"></i>'
        load_all_reg.className = "btn btn-danger mb-2"

        document.getElementById("selectionmultiple").disabled = false
        document.getElementById("selectionmultiple").setAttribute("stat", "false")
        document.getElementById("selectionmultiplepintar").disabled = false
        document.getElementById("selectionmultiplepintar").setAttribute("stat", "false")
        if (Object.keys(almastore).length > 0){
            document.getElementById("delete-group").disabled = false
            document.getElementById("delete-group").setAttribute("stat", "false") 
        }

        document.getElementsByClassName("tab")[0].style.display = "flex"
        document.getElementsByClassName("tab")[0].animate([{
            opacity:0
        },{
            opacity:1
        }],{duration:400, iterations:1})
        document.getElementsByClassName("tab")[0].style.opacity = "1"
    } else {
        if (!window.location.href.match(/\#gastos/gim)){
            window.location.href = window.location.href + "#gastos"
        } 
        load_all_reg.innerHTML = 'Mostrar más<i class="fa fa-eye ml-2" aria-hidden="true"></i>'
        load_all_reg.className = "btn btn-success mb-2"

        document.getElementById("selectionmultiple").disabled = true
        document.getElementById("selectionmultiple").setAttribute("stat", "true")
        document.getElementById("selectionmultiplepintar").disabled = true
        document.getElementById("selectionmultiplepintar").setAttribute("stat", "true")
        document.getElementById("delete-group").disabled = true
        document.getElementById("delete-group").setAttribute("stat", "true")

        setTimeout(()=>{
            document.getElementsByClassName("tab")[0].style.display = "none"
        },450)
        document.getElementsByClassName("tab")[0].style.opacity = "0"
        document.getElementsByClassName("tab")[0].animate([{
            opacity:1
        },{
            opacity:0
        }],{duration:400, iterations:1})
    }
}

const registros_men_respon = document.getElementsByClassName("men_data_registros")[0]
function show_men(){
    const devipo = getDevicePixelRatio()
    if (devipo.toString() === "1" && window.screen.width >= 1024){
    } else if (devipo.toString().match(/0\.5/gim)){
        registros_men_respon.style.display = "none"
        registros_men_respon.style.webkitDisplay = "none";
        registros_men_respon.style.MozDisplay = "none";
        registros_men_respon.style.msDisplay = "none";
        registros_men_respon.style.oDisplay = "none";
    } else if (devipo.toString().match(/0\.25/gim)){
        registros_men_respon.style.display = "none"
        registros_men_respon.style.webkitDisplay = "none";
        registros_men_respon.style.MozDisplay = "none";
        registros_men_respon.style.msDisplay = "none";
        registros_men_respon.style.oDisplay = "none";
    } else if (devipo.toString().match(/0\.33/gim)){
        registros_men_respon.style.display = "none"
        registros_men_respon.style.webkitDisplay = "none";
        registros_men_respon.style.MozDisplay = "none";
        registros_men_respon.style.msDisplay = "none";
        registros_men_respon.style.oDisplay = "none";
    } else if (devipo.toString().match(/0\.6/gim)){
        registros_men_respon.style.display = "none"
        registros_men_respon.style.webkitDisplay = "none";
        registros_men_respon.style.MozDisplay = "none";
        registros_men_respon.style.msDisplay = "none";
        registros_men_respon.style.oDisplay = "none";
    } else if (devipo.toString().match(/0\.7/gim)){
        registros_men_respon.style.display = "none"
        registros_men_respon.style.webkitDisplay = "none";
        registros_men_respon.style.MozDisplay = "none";
        registros_men_respon.style.msDisplay = "none";
        registros_men_respon.style.oDisplay = "none";
    } else if (devipo.toString().match(/0\.80/gim)){
        registros_men_respon.style.display = "none"
        registros_men_respon.style.webkitDisplay = "none";
        registros_men_respon.style.MozDisplay = "none";
        registros_men_respon.style.msDisplay = "none";
        registros_men_respon.style.oDisplay = "none";
    } else if (devipo.toString().match(/0\.89/gim)){
        registros_men_respon.style.display = "flex"
        registros_men_respon.style.webkitDisplay = "flex";
        registros_men_respon.style.MozDisplay = "flex";
        registros_men_respon.style.msDisplay = "flex";
        registros_men_respon.style.oDisplay = "flex";
    } 

    if (window.screen.width <= 400){
        registros_men_respon.style.display = "flex"
        registros_men_respon.style.webkitDisplay = "flex";
        registros_men_respon.style.MozDisplay = "flex";
        registros_men_respon.style.msDisplay = "flex";
        registros_men_respon.style.oDisplay = "flex";
    }
}
show_men()

