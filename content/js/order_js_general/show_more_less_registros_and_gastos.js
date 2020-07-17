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
        load_all_reg.innerHTML = "Mostrar menos"
        load_all_reg.className = "btn btn-danger"
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
        load_all_reg.innerHTML = "Mostrar más"
        load_all_reg.className = "btn btn-success"
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
const show_men = () => {
    const devipo = getDevicePixelRatio()
    if (devipo.toString() === "1" && window.screen.width >= 1024){
    } else if (devipo.toString().match(/0\.5/gim)){
        registros_men_respon.style.display = "none"
    } else if (devipo.toString().match(/0\.25/gim)){
        registros_men_respon.style.display = "none"
    } else if (devipo.toString().match(/0\.33/gim)){
        registros_men_respon.style.display = "none"
    } else if (devipo.toString().match(/0\.6/gim)){
        registros_men_respon.style.display = "none"
    } else if (devipo.toString().match(/0\.7/gim)){
        registros_men_respon.style.display = "none"
    } else if (devipo.toString().match(/0\.80/gim)){
        registros_men_respon.style.display = "none"
    } else if (devipo.toString().match(/0\.89/gim)){
        registros_men_respon.style.display = "flex"
    } 

    if (window.screen.width <= 400){
        registros_men_respon.style.display = "flex"
    }
}
show_men()

