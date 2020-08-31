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
  <script type="text/javascript" src="./content/js/graficos.js"></script>
</div>