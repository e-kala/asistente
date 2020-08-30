<div class="mt-4 card p-4 position-relative color_ventana_graficos flex-grow-1" id="graficos" style="display: none;" >
  <div class="m-1 text-left position-relative justify-content-between d-flex ">
    <h4 class="font-weight-bold ">Gráficos <i class="fa fa-star ml-2 text-warning" aria-hidden="true"></i></h4>
    <div id="ingreminmendes" class="font-weight-bold font-italic"></div>
  </div>
  

  <div class="d-flex flex-wrap m-2 p-2 mb-4">
    <div class="flex-grow-1 m-3">
      <h4 class="mb-4 font-italic font-weight-bold">Balance Real</h4>
      <p class="data-attributes m-2">
        <span data-peity='{ "fill": ["#27FF30", "#eeeeee"],    "innerRadius": 22, "radius": 70}' id="porcentajebalancerealgra"></span>
      </p>
      <h3 class="p-2" id="porcentajebalancereal"></h3>
    </div>

    <div class="flex-grow-1 m-3">
      <h4 class="mb-4 font-italic font-weight-bold">Flujo <?php echo $statemonthweek; ?></h4>
      <p class="data-attributes m-2">
        <span data-peity='{ "fill": ["#1D23AC", "#eeeeee"],    "innerRadius": 22, "radius": 70}' id="porcentajebalancegra">0/10</span>
      </p>
      <h3 class="p-2" id="porcentajebalance">0%</h3>
    </div>


    <div class="flex-grow-1 m-3">
      <h4 class="mb-4 font-italic font-weight-bold">Gastos <?php echo $statemonthweek; ?></h4>
      <p class="data-attributes m-2">
        <span data-peity='{ "fill": ["#FF2727", "#eeeeee"],    "innerRadius": 22, "radius": 70}' id="porcentajegastogra">0/10</span>
      </p>
      <h3 class="p-2" id="porcentajegasto">0%</h3>
    </div>

    <div class="flex-grow-1 m-3">
      <h4 class="mb-4 font-italic font-weight-bold">Procesamiento</h4>
      <div class="d-flex justify-content-center"> 
        <div class="d-flex flex-wrap justify-content-center processinggraphic">
        </div>
        <div class="d-flex flex-wrap justify-content-center processinggraphic">
        </div>
        <div class="d-flex flex-wrap justify-content-center processinggraphic">
        </div>
      </div>
      <div class="d-flex justify-content-center"> 
        <div class="d-flex flex-wrap justify-content-center processinggraphic">
        </div>
        <div class="d-flex flex-wrap justify-content-center processinggraphic">
        </div>
        <div class="d-flex flex-wrap justify-content-center processinggraphic">
        </div>
      </div>
      <div class="d-flex justify-content-center"> 
        <div class="d-flex flex-wrap justify-content-center processinggraphic">
        </div>
        <div class="d-flex flex-wrap justify-content-center processinggraphic">
        </div>
        <div class="d-flex flex-wrap justify-content-center processinggraphic">
        </div>
      </div>
    </div>  
  </div>

  <div class="barpro p-4">
    <div class="mb-4 pb-2 d-flex flex-wrap">
      <label class="text-left font-weight-bold float-left mr-4">Salud de la billetera</label>
      <div id="saludbilleteraheight" class="progress mb-4 flex-grow-1" style="height: 25px;" title="La salud de tu billetera es proporcional al progreso de tu meta mínima de ingreso mensual">
        <div id="saludbilleterainner" class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">0%</div>
      </div>
      <div id="state_balsalu" style="display: none;" class="w-100 alert alert-danger text-danger font-weight-bold"></div>
    </div>  

    <div class="mb-4 pb-2 flex-wrap cresuperone" style="display: none;">
      <label class="text-left font-weight-bold float-left mr-4">Crecimiento superior </label>
      <div class="progress mb-4 flex-grow-1" title="Esta barra indica tu progreso financiero por encima del ingreso mínimo requerido" style="height: 25px;">
        <div id="cresup" class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">0%</div>
      </div>
    </div>

    <div class="mb-4 pb-2  flex-wrap probestanc">
      <label class="text-left font-weight-bold float-left mr-4">Probabilidad de estancamiento </label>
      <div class="progress mb-4 flex-grow-1" title="Esta barra indica la probabilidad de mantenerse en un estado de estancamiento" style="height: 25px;">
        <div id="probastan" class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">0%</div>
      </div>
      <div id="statestanca" style="display: none;" class="w-100 alert alert-danger text-danger font-weight-bold"></div>
    </div>

   
  </div>

  <script type="text/javascript">
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
      let [gvalue, ivalue, brvalue] = ["", "", ""]
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
          document.getElementById("state_balsalu").innerHTML = `Tu saldo se encuentra en cero <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>`  
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
          document.getElementById("ingreminmendes").innerHTML = "Ingreso mensual mínimo requerido: <span class='badge badge-success'>$" + window.config[1].ingreso_minimo_mensual + "</span>"
        if (window.config[1].ingreso_minimo_mensual !== undefined){

          const saludbilleterainner = document.getElementById("saludbilleterainner")
          brvalue = Number(brvalue)
          let minmen = Number(window.config[1].ingreso_minimo_mensual)

          let ope = brvalue * 100 / minmen
            
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
          } else if (ope > 75 && ope <= 99){
            document.getElementById("state_balsalu").style.display = "block"
            document.getElementById("state_balsalu").className = "w-100 alert alert-success text-success font-weight-bold"
            document.getElementById("state_balsalu").innerHTML = `Estás cerca de tu meta de ingreso mínimo <i class="fa fa-smile-o" aria-hidden="true"></i>`  
          } else if (ope > 100 && ope <= 150){
            document.getElementById("state_balsalu").style.display = "block"
            document.getElementById("state_balsalu").className = "w-100 alert alert-success text-success font-weight-bold"
            document.getElementById("state_balsalu").innerHTML = `Crecimiento superior desbloqueado, ahora puedes ir más allá de tu meta <i class="fa fa-smile-o" aria-hidden="true"></i>`  
          } else if (ope > 150 && ope <= 200){
            document.getElementById("state_balsalu").style.display = "block"
            document.getElementById("state_balsalu").className = "w-100 alert alert-success text-success font-weight-bold"
            document.getElementById("state_balsalu").innerHTML = `Probablemente puedas adquirir bienes adicionales a tus gastos de primera necesidad, <span class="badge badge-warning">FELICIDADES</span> <i class="fa fa-smile-o" aria-hidden="true"></i>` 
          } else if (ope > 200 && ope <= 300){
            document.getElementById("state_balsalu").style.display = "block"
            document.getElementById("state_balsalu").className = "w-100 alert alert-success text-success font-weight-bold"
            document.getElementById("state_balsalu").innerHTML = `Tu crecimiento es exponencial, no olvides mantenerte así y crear multiplicadores con tu poder actual <i class="fa fa-smile-o" aria-hidden="true"></i>` 
          }
          if (ope <= 20 && porcentajeGasto >= 60 && ope > 0){
            document.getElementById("statestanca").style.display = "block"
            document.getElementById("statestanca").className = "w-100 alert alert-danger text-danger font-weight-bold"
            document.getElementById("statestanca").innerHTML =  `El dinero no está fluyendo como debería  <i class="fa fa-frown-o" aria-hidden="true"></i>` 
          } else if(ope > 0) {
            document.getElementById("statestanca").style.display = "block"
            document.getElementById("statestanca").className = "w-100 alert alert-success rounded text-success font-weight-bold"
            document.getElementById("statestanca").innerHTML =  `No hay nada de qué preocuparse por ahora  <i class="fa fa-smile-o" aria-hidden="true"></i>` 
          } else if (ope >  -minmen / 2 && ope < -minmen ) {
            document.getElementById("probastan").innerHTML = day*0.05 +2+"%"
            document.getElementById("probastan").style.width = day*0.05 +2+"%"
            document.getElementById("statestanca").style.display = "block"
            document.getElementById("statestanca").className = "w-100 alert alert-danger text-danger font-weight-bold"
            document.getElementById("statestanca").innerHTML =  `Tu saldo actual es negativo, según el tiempo en que se mantenga así esta barra se incrementará  <i class="fa fa-frown-o" aria-hidden="true"></i>` 
          } else if (ope >  -minmen && ope < -minmen + (-minmen / 2)){
            document.getElementById("probastan").innerHTML = day*0.05 +4+"%"
            document.getElementById("probastan").style.width = day*0.05 +4+"%"
            document.getElementById("statestanca").style.display = "block"
            document.getElementById("statestanca").className = "w-100 alert alert-danger text-danger font-weight-bold"
            document.getElementById("statestanca").innerHTML =  `Tu saldo actual es negativo, según el tiempo en que se mantenga así esta barra se incrementará  <i class="fa fa-frown-o" aria-hidden="true"></i>` 
          } else if (ope > -3000){
            document.getElementById("probastan").innerHTML = day*0.05 +6+"%"
            document.getElementById("probastan").style.width = day*0.05 +6+"%"
            document.getElementById("statestanca").style.display = "block"
            document.getElementById("statestanca").className = "w-100 alert alert-danger text-danger font-weight-bold"
            document.getElementById("statestanca").innerHTML =  `Tu saldo actual es negativo, según el tiempo en que se mantenga así esta barra se incrementará  <i class="fa fa-frown-o" aria-hidden="true"></i>` 
          } else{
            document.getElementById("probastan").innerHTML = day*0.05 +60+"%"
            document.getElementById("probastan").style.width = day*0.05 +60+"%"
            document.getElementById("statestanca").style.display = "block"
            document.getElementById("statestanca").className = "w-100 alert alert-danger text-danger font-weight-bold"
            document.getElementById("statestanca").innerHTML =  `Tu saldo actual es negativo, según el tiempo en que se mantenga así esta barra se incrementará  <i class="fa fa-frown-o" aria-hidden="true"></i>` 
          }
        }

        
      })
    }

    data_graphic()

  </script>
</div>