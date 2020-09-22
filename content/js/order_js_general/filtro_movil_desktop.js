
let formreg = document.getElementsByClassName("frgus")[0] 
let tadores = document.getElementsByClassName("tadores")[0] 
let menreg = document.getElementsByClassName("menreg")[0]
let find = document.getElementsByClassName("find")[0]


function search(formreg, tadores, menreg, find, config){
    if (config.mode === "desktop"){
      tadores.style.display = "flex"
      tadores.style.webkitDisplay = "flex";
      tadores.style.MozDisplay = "flex";
      tadores.style.msDisplay = "flex";
      tadores.style.oDisplay = "flex";

      tadores.style.justifyContent = "flex-start"
      tadores.style.webkitJustifyContent = "flex-start";
      tadores.style.MozJustifyContent = "flex-start";
      tadores.style.msJustifyContent = "flex-start";
      tadores.style.oJustifyContent = "flex-start";

      tadores.style.alignContent = "flex-start"
      tadores.style.webkitAlignContent = "flex-start";
      tadores.style.MozAlignContent = "flex-start";
      tadores.style.msAlignContent = "flex-start";
      tadores.style.oAlignContent = "flex-start";

      tadores.style.flexFlow = "wrap row"
      tadores.style.webkitFlexFlow = "wrap row";
      tadores.style.MozFlexFlow = "wrap row";
      tadores.style.msFlexFlow = "wrap row";
      tadores.style.oFlexFlow = "wrap row";
    }

    // tadores.style.background = "#474A64"
    tadores.style.borderBottom = "2px solid #dbdbdb"
    tadores.style.webkitBorderBottom = "2px solid #dbdbdb";
    tadores.style.MozBorderBottom = "2px solid #dbdbdb";
    tadores.style.msBorderBottom = "2px solid #dbdbdb";
    tadores.style.oBorderBottom = "2px solid #dbdbdb";

    let selected = "Ingresos"
    menreg.addEventListener("click", function(e){
        selected = e.target.options[e.target.selectedIndex].text
    })


    function action(){
      if (word !== ""){
            $.post("./content/php/consults_info/regs.php",
                { 
                    name:word,
                    category: selected.toLowerCase() !== "" ? selected.toLowerCase() : "ingresos"
                }).done(function(data){
                    data = JSON.parse(data)
                    let co = ""
                    if (config.mode === "desktop"){
                      co = "bg-borderwhite"
                    } else {
                      co = "bg-darkblue1"
                    }


                    if (data.category !== undefined){
                        if (data.multiple === false){
                          tadores.style.justifyContent = "flex-start"
                            if (data.category === "ingresos"){
                                if (data.infogen.usuario_ingreso === user){
                                  tadores.innerHTML = `   

                                  <div class="${co} p-4 mb-3 m-4 datawindow"  >
                                  <div class="closedata float-right"> <img src="./content/img/iconos/close.png" name="0" width="20px" class="float-right"  onClick="closeclick(this)"/></div>
                                     <div class="m-1 font-weight-bold">Id:  ${data.infogen.id_ingreso}</div>
                                     <div class="m-1 font-weight-bold">Nombre:  ${data.infogen.categoria_ingreso}</div>
                                     <div class="m-1 font-weight-bold">Descripción:  ${data.infogen.descripcion_ingreso}</div>
                                     <div class="m-1 font-weight-bold">Cuenta:  ${data.infogen.cuenta_ingreso}</div>
                                     <div class="m-1 font-weight-bold">Fecha:  ${data.infogen.fecha_ingreso}</div>
                                     <div class="m-1 font-weight-bold">Cantidad:  ${data.infogen.cantidad_ingreso}</div>
                                     
                                  </div>
                                  `
                                }
                            } else {
                              if (data.infogen.usuario_gasto === user){
                                tadores.innerHTML = `   
                                <div class="${co} p-4 mb-3 m-4 datawindow"  >
                                <div class="closedata float-right"> <img src="./content/img/iconos/close.png" name="0" width="20px" class="float-right"  onClick="closeclick(this)"/></div>
                                   <div class="m-1 font-weight-bold">Id:  ${data.infogen.id_gasto}</div>
                                   <div class="m-1 font-weight-bold">Nombre:  ${data.infogen.categoria_gasto}</div>
                                   <div class="m-1 font-weight-bold">Descripción:  ${data.infogen.descripcion_gasto}</div>
                                   <div class="m-1 font-weight-bold">Cuenta:  ${data.infogen.cuenta_gasto}</div>
                                   <div class="m-1 font-weight-bold">Fecha:  ${data.infogen.fecha_gasto}</div>
                                   <div class="m-1 font-weight-bold">Cantidad:  ${data.infogen.cantidad_gasto}</div>
                                   
                                </div>
                                `
                              }
                            }
                        } else {
                            tadores.innerHTML = ""
                            tadores.style.justifyContent = "flex-start"
                            let n = 0;
                            Object.keys(data).map(function(e,i){

                                if (e !== "multiple" && e !== "category"){
                                    n += 1
                                    if (config.mode === "movil"){
                                      co = n % 2 ? "bg-darkblue0" : "bg-darkblue1"
                                    } 
                                    if (data.category === "ingresos"){

                                      if (data["infogen"+n].usuario_ingreso === user){
                                        tadores.innerHTML += `   

                                        <div class="${co} p-4 mb-3 m-4 datawindow" name="${i+1}datawindow" >
                                        <div class="closedata float-right"> <img src="./content/img/iconos/close.png" name="${n-1}" width="20px" class="float-right"  onClick="closeclick(this)"/></div>
                                           <div class="m-1 font-weight-bold">Id:  ${data["infogen"+n].id_ingreso}</div>
                                           <div class="m-1 font-weight-bold">Nombre:  ${data["infogen"+n].categoria_ingreso}</div>
                                           <div class="m-1 font-weight-bold">Descripción:  ${data["infogen"+n].descripcion_ingreso}</div>
                                           <div class="m-1 font-weight-bold">Cuenta:  ${data["infogen"+n].cuenta_ingreso}</div>
                                           <div class="m-1 font-weight-bold">Fecha:  ${data["infogen"+n].fecha_ingreso}</div>
                                           <div class="m-1 font-weight-bold">Cantidad:  ${data["infogen"+n].cantidad_ingreso}</div>
                                           
                                        </div>
                                        `
                                      }
                                    } else {
                                      if (data["infogen"+n].usuario_gasto === user){
                                        tadores.innerHTML += `   
                                        <div class="${co} p-4 mb-3 m-4 datawindow" name="${i+1}datawindow" >
                                        <div class="closedata float-right"> <img src="./content/img/iconos/close.png" name="${n-1}" width="20px" class="float-right"  onClick="closeclick(this)"/></div>
                                           <div class="m-1 font-weight-bold">Id:  ${data["infogen"+n].id_gasto}</div>
                                           <div class="m-1 font-weight-bold">Nombre:  ${data["infogen"+n].categoria_gasto}</div>
                                           <div class="m-1 font-weight-bold">Descripción:  ${data["infogen"+n].descripcion_gasto}</div>
                                           <div class="m-1 font-weight-bold">Cuenta:  ${data["infogen"+n].cuenta_gasto}</div>
                                           <div class="m-1 font-weight-bold">Fecha:  ${data["infogen"+n].fecha_gasto}</div>
                                           <div class="m-1 font-weight-bold">Cantidad:  ${data["infogen"+n].cantidad_gasto}</div>
                                           
                                        </div>
                                        `
                                      }
                                    }
                                }
                            })
                        }
                    } else {
                        tadores.innerHTML = '<div class="bg-alertemer p-3 m-4 text-center font-weight-bold mb-3 desfin">Ninguna coincidencia encontrada</div>'
                        
                    }
                    
                  
            })
        } else {
            tadores.innerHTML = '<div class="bg-alertemerdanger p-3 m-4 text-center font-weight-bold mb-3 desfin">Se requiere un dato para la consulta</div>'
        }
    }

    formreg.onsubmit = function(e){
      e.preventDefault()
      word = find.value
      if (word !== "")action()
    }


    find.onkeydown = function(e){
        word = find.value
        word += e.key !== "Backspace" ? e.key : " "
        if (word !== "")action()
    }
}

search(formreg, tadores, menreg, find, { mode: "movil"})

function closeclick(e){
    let n = e.getAttribute("name")

    let lentda = document.getElementsByClassName("datawindow").length
    
    n = n

    if (document.getElementsByClassName("datawindow")[n] !== undefined){
      document.getElementsByClassName("datawindow")[n].style.display = "none"
      document.getElementsByClassName("datawindow")[n].style.webkitDisplay = "none";
      document.getElementsByClassName("datawindow")[n].style.MozDisplay = "none";
      document.getElementsByClassName("datawindow")[n].style.msDisplay = "none";
      document.getElementsByClassName("datawindow")[n].style.oDisplay = "none";
    }
}





































