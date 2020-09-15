// Gráfico de torta
$(".data-attributes span").peity("donut")

function processinggraphic(){
  const processinggraphic = document.getElementsByClassName("processinggraphic")
  setInterval(()=>{
    for (let x = 0; x < processinggraphic.length; x++){
      // Gráfico de torta
      for (let y = 0; y < 3; y++){
        processinggraphic[x].innerHTML = `
          <p class="data-attributes m-2" style="box-shadow:0px 0px ${Math.random()*25}px #78A1FF; border-radius:100%;" >
            <span data-peity='{ "fill": ["#145CFF", "#eeeeee"],    "innerRadius": 20, "radius": 25 }'>${x * Math.random()}/7</span>
          </p>
        `
      }
    }
    $(".data-attributes span").peity("donut")
  },2000)
}
processinggraphic()

function data_graphic(){
  let [gvalue, ivalue, brvalue, dvalue] = ["", "", "", ""]
  const gastos_read = document.getElementsByClassName("togasinitfil")[0]
  if (gastos_read !== undefined){
    gvalue = gastos_read.textContent.replace("$ ","")
  }
  const ingresos_read = document.getElementsByClassName("toingresinitfil")[0]
  if (ingresos_read !== undefined){
    ivalue = ingresos_read.textContent.replace("$ ","")
  }
  const balancereal = document.getElementsByClassName("balactual_co")[0]
  if (balancereal !== undefined){
    brvalue = balancereal.textContent.replace("$ ", "")
  }
  const deudas = document.getElementsByClassName("baldeudas_co")[0]
  if (deudas !== undefined){
    dvalue = deudas.textContent.replace("$", "")
  }

  let balance = ivalue - gvalue

  let porcentajeGasto = (gvalue * 100 / ivalue).toFixed(2)
  let firstnunga = porcentajeGasto

  let porcentajeingreso = (100 - porcentajeGasto).toFixed(2)
  let firstnunin = porcentajeingreso

  if (firstnunga !== "NaN"){
    if (firstnunga !== "" && porcentajeGasto !== ""){
      document.getElementById("porcentajegastogra").innerHTML =firstnunga+"/100"
      document.getElementById("porcentajegasto").innerHTML = porcentajeGasto + "%"
    }
    if (Number(brvalue) >0){
    } else if (Number(brvalue) === 0) {
      document.getElementById("state_balsalu").style.display = "block"
      document.getElementById("state_balsalu").className = "w-100 alert alert-info text-info font-weight-bold"
      document.getElementById("state_balsalu").innerHTML = `Tu saldo real se encuentra en cero <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>`  
    } else if (Number(brvalue) < 0) {
      document.getElementById("state_balsalu").style.display = "block"
      document.getElementById("state_balsalu").className = "w-100 alert alert-danger text-danger font-weight-bold"
      document.getElementById("state_balsalu").innerHTML = `El balance real se encuentra en estado de deuda,  <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>`  
    }
  } 

  if (firstnunin !== "NaN"){
    document.getElementById("porcentajebalancegra").innerHTML =firstnunin+"/100"
    document.getElementById("porcentajebalance").innerHTML = porcentajeingreso + "%"
  }

  if (brvalue > "0"){
    document.getElementById("porcentajebalancerealgra").innerHTML ="100/100"
    document.getElementById("porcentajebalancereal").innerHTML = "100%"
  }


  $(function(){
    if (document.getElementById("graficos").style.display === "block"){
      document.getElementById("ingreminmendes").innerHTML = "Ingreso mensual mínimo requerido: <span class='badge badge-success'>$" + window.config[1].ingreso_minimo_mensual + "</span>"
      if (window.config[1].ingreso_minimo_mensual !== undefined){

        const saludbilleterainner = document.getElementById("saludbilleterainner")
        brvalue = Number(brvalue)
        let minmen = Number(window.config[1].ingreso_minimo_mensual)

        let ope = brvalue * 100 / minmen
        let ode = dvalue * 100 / minmen
          
        if (brvalue <= 0){
          saludbilleterainner.style.width = "0%"
          saludbilleterainner.innerHTML = "0%"
        } else {
          saludbilleterainner.style.width = ope + "%"
          saludbilleterainner.innerHTML = ope + "%"
          if (ope > 100 && ope <= 150){
            document.getElementsByClassName("cresuperone")[0].style.display = "flex"
            document.getElementById("cresup").style.width = 20+"%"
            document.getElementById("cresup").innerHTML = 20+"%"
          } else if (ope > 150 && ope <= 200){
            
            document.getElementsByClassName("cresuperone")[0].style.display = "flex"
            document.getElementById("cresup").style.width = 50+"%"
            document.getElementById("cresup").innerHTML = 50+"%"
          } else if (ope > 200 && ope <= 300){
            document.getElementsByClassName("cresuperone")[0].style.display = "flex"
            document.getElementById("cresup").style.width = 70+"%"
            document.getElementById("cresup").innerHTML = 70+"%"
          } else if (ope > 300){
            document.getElementsByClassName("cresuperone")[0].style.display = "flex"
            document.getElementById("cresup").style.width = 100+"%"
            document.getElementById("cresup").innerHTML = 100+"%"
          } else{
            document.getElementsByClassName("cresuperone")[0].style.display = "none"
          }
        }

        let time = new Date()
        let day = time.getDate()

        let pln = ""
        let day_expi = ""
        if (window.config[0].plan.match(/\{/gim)){
          pln = JSON.parse(window.config[0].plan)
          day_expi = pln.fechaExpiracion.toString().split("-")[2] //Dia de expiracion
        }

        if (ope > 0 && ope <= 10){
          document.getElementById("state_balsalu").style.display = "block"
          document.getElementById("state_balsalu").className = "w-100 alert alert-success text-success font-weight-bold"
          document.getElementById("state_balsalu").innerHTML = `Es un buen comienzo <i class="fa fa-smile-o" aria-hidden="true"></i>`  
        } else if (ope > 10 && ope <= 25){
          document.getElementById("state_balsalu").style.display = "block"
          document.getElementById("state_balsalu").className = "w-100 alert alert-success text-success font-weight-bold"
          document.getElementById("state_balsalu").innerHTML = `Ahora son ${ope}%, sigue así <i class="fa fa-smile-o" aria-hidden="true"></i>`  
        } else if (ope > 25 && ope <= 45){
          document.getElementById("state_balsalu").style.display = "block"
          document.getElementById("state_balsalu").className = "w-100 alert alert-success text-success font-weight-bold"
          document.getElementById("state_balsalu").innerHTML = `Estás cerca de la mitad de tu meta <i class="fa fa-smile-o" aria-hidden="true"></i>`  
        } else if (ope > 45 && ope <= 75){
          document.getElementById("state_balsalu").style.display = "block"
          document.getElementById("state_balsalu").className = "w-100 alert alert-success text-success font-weight-bold"
          document.getElementById("state_balsalu").innerHTML = `¡Eres un trabajador incansable! <i class="fa fa-smile-o" aria-hidden="true"></i>`  
        } else if (ope > 75 && ope < 100 && ode === 0){
          document.getElementById("state_balsalu").style.display = "block"
          document.getElementById("state_balsalu").className = "w-100 alert alert-success text-success font-weight-bold"
          document.getElementById("state_balsalu").innerHTML = `Estás cerca de tu meta de ingreso mínimo <i class="fa fa-smile-o" aria-hidden="true"></i>`  
          asignate_insig("constanciasaludable", "Constancia Saludable", "Por tus ingresos constantes")
        } else if (ope >= 100 && ope <= 150 && ode === 0){
          document.getElementById("state_balsalu").style.display = "block"
          document.getElementById("state_balsalu").className = "w-100 alert alert-success text-success font-weight-bold"
          document.getElementById("state_balsalu").innerHTML = `Crecimiento superior desbloqueado, ahora puedes ir más allá de tu meta <i class="fa fa-smile-o" aria-hidden="true"></i>`  
          asignate_insig("crecimientosuperior", "Crecimiento Superior", "Superaste tu meta establecida de ingresos")
        } else if (ope > 150 && ope <= 200 && ode === 0){
          document.getElementById("state_balsalu").style.display = "block"
          document.getElementById("state_balsalu").className = "w-100 alert alert-success text-success font-weight-bold"
          document.getElementById("state_balsalu").innerHTML = `Probablemente puedas adquirir bienes adicionales a tus gastos de primera necesidad, <span class="badge badge-warning">FELICIDADES</span> <i class="fa fa-smile-o" aria-hidden="true"></i>` 
          asignate_insig("crecimientoexponencial", "Crecimiento Exponencial ", "Por mantener y aumentar tus niveles superiores a la meta establecida")
        } else if (ope > 200 && ope <= 300 && ode === 0){
          document.getElementById("state_balsalu").style.display = "block"
          document.getElementById("state_balsalu").className = "w-100 alert alert-success text-success font-weight-bold"
          document.getElementById("state_balsalu").ifnnerHTML = `Tu crecimiento es exponencial, no olvides mantenerte así y crear multiplicadores con tu poder actual <i class="fa fa-smile-o" aria-hidden="true"></i>` 
          asignate_insig("huracandedinero", "Huracán de Dinero", "Por aumentar +200% los ingresos superiores a la meta establecida")
        } else if (ope > 300 && ope <= 400 && ode === 0){
          document.getElementById("state_balsalu").style.display = "block"
          document.getElementById("state_balsalu").className = "w-100 alert alert-success text-success font-weight-bold"
          document.getElementById("state_balsalu").innerHTML = `Tu crecimiento es muy elevado, no olvides mantenerte así y crear multiplicadores con tu poder actual <i class="fa fa-smile-o" aria-hidden="true"></i>` 
          asignate_insig("buenafortuna", "Buena Fortuna", "Por triplicar los ingresos superiores a la meta establecida")
        } else if (ope > 400){
          document.getElementById("state_balsalu").style.display = "block"
          document.getElementById("state_balsalu").className = "w-100 alert alert-success text-success font-weight-bold"
          document.getElementById("state_balsalu").innerHTML = `Eres una máquina de dinero, no olvides mantenerte así y crear multiplicadores con tu poder actual <i class="fa fa-smile-o" aria-hidden="true"></i>` 
          asignate_insig("excelenciafinanciera", "Excelencia Financiera", "Por multiplicar tu dinero +400% superior a la meta establecida")
        } else if (ope <= 50 && porcentajeGasto >= 60 && ope > 0 && day > day_expi + 10 && day_expi < 20){
        //Si luego de 10 dias hay gastos acumulados e ingresos nulos y probabilidad de estancamiento activa, entonces insignia de inactividad
          document.getElementById("probastan").innerHTML = day*0.05 +6+"%"
          document.getElementById("probastan").style.width = day*0.05 +6+"%"
          document.getElementById("statestanca").style.display = "block"
          document.getElementById("statestanca").className = "w-100 alert alert-danger text-danger font-weight-bold"
          document.getElementById("statestanca").innerHTML =  `El dinero no está fluyendo como debería  <i class="fa fa-frown-o" aria-hidden="true"></i>` 
          asignate_insig("premioinactividad", "Inactividad Frecuente", "Debido a poca actividad")
        } else if(ope > 0 && ode === 0) {
          document.getElementById("statestanca").style.display = "block"
          document.getElementById("statestanca").className = "w-100 alert alert-success rounded text-success font-weight-bold"
          document.getElementById("statestanca").innerHTML =  `No hay nada de qué preocuparse por ahora  <i class="fa fa-smile-o" aria-hidden="true"></i>` 
         }

        let odeposic = Number(ode.toString().replace("-", ""))

        if (odeposic > 0 && odeposic < 50){
          document.getElementById("probastan").innerHTML = day*0.05 -ode*0.01+"%"
          document.getElementById("probastan").style.width = day*0.05 -ode*0.01+"%"
          document.getElementById("statestanca").style.display = "block"
          document.getElementById("statestanca").className = "w-100 alert alert-danger text-danger font-weight-bold"
          document.getElementById("statestanca").innerHTML =  `Actualmente posees deudas, según el tiempo en que se mantenga así esta barra se incrementará  <i class="fa fa-frown-o" aria-hidden="true"></i>` 

          
        } else if (odeposic >= 50  && odeposic < 100) {
          document.getElementById("probastan").innerHTML = day*0.05 -ode*0.01+"%"
          document.getElementById("probastan").style.width = day*0.05 -ode*0.01+"%"
          document.getElementById("statestanca").style.display = "block"
          document.getElementById("statestanca").className = "w-100 alert alert-danger text-danger font-weight-bold"
          document.getElementById("statestanca").innerHTML =  `Actualmente posees deudas, según el tiempo en que se mantenga así esta barra se incrementará  <i class="fa fa-frown-o" aria-hidden="true"></i>` 

          asignate_insig("gastadorjunior", "Gastador Junior", "Por gastos constantes y algunas deudas")
        } else if (odeposic >= 100 && odeposic < 200){
          document.getElementById("probastan").innerHTML = day*0.05 -ode*0.02+"%"
          document.getElementById("probastan").style.width = day*0.05 -ode*0.02+"%"
          document.getElementById("statestanca").style.display = "block"
          document.getElementById("statestanca").className = "w-100 alert alert-danger text-danger font-weight-bold"
          document.getElementById("statestanca").innerHTML =  `Actualmente posees deudas, según el tiempo en que se mantenga así esta barra se incrementará  <i class="fa fa-frown-o" aria-hidden="true"></i>` 
          asignate_insig("gastadorsenior", "Gastador Senior", "Por gastos marcados y constantes")
        } else if (odeposic >= 200){
          document.getElementById("probastan").innerHTML = day*0.05-ode*0.03+"%"
          document.getElementById("probastan").style.width = day*0.05-ode*0.03+"%"
          document.getElementById("statestanca").style.display = "block"
          document.getElementById("statestanca").className = "w-100 alert alert-danger text-danger font-weight-bold"
          document.getElementById("statestanca").innerHTML =  `Actualmente posees deudas, según el tiempo en que se mantenga así esta barra se incrementará  <i class="fa fa-frown-o" aria-hidden="true"></i>` 

          asignate_insig("gastadorcompulsivo", "Gastador Compulsivo", "Por gastos excesivos y deudas elevadas")
        } else if (firstnunga > 90 && odeposic === 0){
          document.getElementById("probastan").innerHTML = day*0.05-ode*0.03+"%"
          document.getElementById("probastan").style.width = day*0.05-ode*0.03+"%"
          document.getElementById("statestanca").style.display = "block"
          document.getElementById("statestanca").className = "w-100 alert alert-danger text-danger font-weight-bold"
          document.getElementById("statestanca").innerHTML =  `Actualmente existe un alto porcentaje de gastos, eso impulsa la barra de estancamiento, pero no se incrementará si los ingresos se mantienen o aumentan<i class="fa fa-frown-o" aria-hidden="true"></i>` 

          asignate_insig("gastadorcompulsivo", "Gastador Compulsivo", "Por múltiples gastos elevados, aunque sin deudas")
       
        }

      }   
    }
  })
}

data_graphic()


let insinew = ""
function asignate_insig(insignia, name_insign_to_show, descripcion){
  //una sola y unica asignacion si no existe asignacion todavia
  if (alma_config[1][insignia] !== "undefined" && alma_config[1][insignia] !== undefined && alma_config[1][insignia] !== "null" && alma_config[1][insignia] !== null && alma_config[1][insignia] !== ""){
    // let insigs = insignia
    // //reescritura
    // $.post("./content/php/consults_info/asigninsig.php",{
    //   insignia:insigs,
    //   usuario: alma_config[0].usuario
    // }).done(function(e){
    //   console.log(e,"Keke")
    // })

  } else {
    //Nuevo registro por primera vez
    insinew = insignia
    if (insinew !== ""){
      $.post("./content/php/consults_info/asigninsig.php",{
        insignia:insinew,
        usuario:alma_config[0].usuario
      }).done(function(e){
        console.log(e)
        setTimeout(function(){
          emergent_advice_unlock_insig(`
            <div class="bg-advi-unlock-insig">
              <div class="card border-0 bg-transparent bg-advi-unlock-insig">
                <div class="card-header border-0 bg-transparent bg-advi-unlock-insig">
                  <div class="d-flex justify-content-between" align="center">
                    <h1 class="flex-grow-1">¡Nueva insignia desbloqueada! <span onclick="close_ad_new_log()" class="btn btn-danger">X</span></h1>
                  </div>
                </div>
                <div class="card-body border-0 bg-transparent bg-advi-unlock-insig d-flex justify-content-center" align="center">
                  <div class="d-flex flex-column justify-content-center align-items-center align-content-center" align="center">
                    <img style="border:4px solid #FFD634;" class="animaanunlockinpu rounded" src="./content/img/insignias/${insinew}.png" width="200px"/>
                    <br>
                    <div class="border border-bottom-0 border-left-0 border-right-0 p-2">
                      <h3 class="font-weight-bold text-light">${name_insign_to_show}</h3>
                      <br>
                      <label>${descripcion}</label>
                    </div>
                    <a href="?action=insigl" class="btn btn-light">Ver en sala de logros</a>
                  </div>
                </div>
              </div>
            </div>
            `)
        },3000)
      })
    }
  }
}


function emergent_advice_unlock_insig(msg){
  const opa = document.createElement("div")
  opa.classList.add("opainsignanun")
  opa.style.position = "fixed"
  opa.style.webkitPosition = "fixed";
  opa.style.MozPosition = "fixed";
  opa.style.msPosition = "fixed";
  opa.style.oPosition = "fixed";
  opa.onpointerdown = function(){
    opa.remove()
    document.getElementsByClassName("unlock_advice_new_insig")[0].remove()
  }

  opa.style.background = "rgb(0,0,0,0.40)"
  opa.style.webkitBackground = "rgb(0,0,0,0.40)";
  opa.style.MozBackground = "rgb(0,0,0,0.40)";
  opa.style.msBackground = "rgb(0,0,0,0.40)";
  opa.style.oBackground = "rgb(0,0,0,0.40)";

  opa.style.zIndex = "20"
  opa.style.webkitZIndex = "20";
  opa.style.MozZIndex = "20";
  opa.style.msZIndex = "20";
  opa.style.oZIndex = "20";

  opa.style.left = "0"
  opa.style.webkitLeft = "0";
  opa.style.MozLeft = "0";
  opa.style.msLeft = "0";
  opa.style.oLeft = "0";

  opa.style.right = "0"
  opa.style.webkitRight = "0";
  opa.style.MozRight = "0";
  opa.style.msRight = "0";
  opa.style.oRight = "0";

  opa.style.top = "0"
  opa.style.webkitTop = "0";
  opa.style.MozTop = "0";
  opa.style.msTop = "0";
  opa.style.oTop = "0";

  opa.style.bottom = "0"
  opa.style.webkitBottom = "0";
  opa.style.MozBottom = "0";
  opa.style.msBottom = "0";
  opa.style.oBottom = "0";

  opa.style.margin = "auto"
  opa.style.webkitMargin = "auto";
  opa.style.MozMargin = "auto";
  opa.style.msMargin = "auto";
  opa.style.oMargin = "auto";

  const div = document.createElement("div")
  div.classList.add("unlock_advice_new_insig")
  div.innerHTML = msg
  div.animate([{
    opacity:0,
    top:"50%",
    left:"50%",
    margin:"auto",
    position:"fixed",
    transform:"scale(0) translate(-50%, -50%)"
  },{
    opacity:1,
    top:"50%",
    left:"50%",
    margin:"auto",
    position:"fixed",
    transform:"scale(1) translate(-50%, -50%)"
  }],{duration:400, iterations:1})

  document.body.appendChild(opa)
  document.body.appendChild(div)
}

function close_ad_new_log(){
  document.getElementsByClassName("unlock_advice_new_insig")[0].remove()
  document.getElementsByClassName("opainsignanun")[0].remove()
}