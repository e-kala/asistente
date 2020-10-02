// <!--Obtener Fecha-->
$(function(){
    var now = new Date();

    var day = ("0"+now.getDate()).slice(-2);
    var month = ("0"+(now.getMonth()+1)).slice(-2);

    var today = now.getFullYear()+"-"+(month)+"-"+(day);
    console.log(today);
    $(".fecha").val(today);
}); // ---------------------------------------------------------------------------------------


/*
success:function(r){
    if (r==1) {
        console.log(r);
        alertify.success("agregado con exito");

    }else {
        alertify.error("Falla");
    }*/
// -----------------------------------------------------------------------------------------






// if (jQuery) {
//     console.log("jQuery esta cargado");
// } else {
//     console.log("jQuery no esta cargado");
// }



/*
success:function(r){
    if (r==1) {
        console.log(r);
        alertify.success("agregado con exito");

    }else {
        alertify.error("Falla");
    }*/
//------------------------------------------------------------------------------------------------



// Agregar Datos Gasto 
 // ------------------------------------------------------------------------------------------------------



function imgdragnot(){
  const img = document.getElementsByTagName("img")
  for (let x = 0; x < img.length; x++){
    img[x].ondragstart = function(){
      return false
    }
  }
}

imgdragnot()

function prueba_three_month(){
  const fecha = new Date()
  let tmp = fecha.getMonth() + 4 //+ 3 months
  let year = fecha.getFullYear()
  const day = fecha.getDate().toString().split("").length > 1 ? fecha.getDate() : "0" + fecha.getDate()
  if (tmp === 13){
    year += 1
    tmp = 1 //next year and month +3
  } else if (tmp === 14){
    year += 1
    tmp = 2 //next year and month +3
  } else if (tmp === 15){
    year += 1
    tmp = 3 //next year and month +3
  }
  let mes = tmp.toString().split("").length > 1 ? tmp : "0" + tmp

  const fechaActualCompleta = year + "-" + mes + "-" + day

  const pruebathremonthbtn = document.getElementsByClassName("pruebathremonth")[0]
  if (pruebathremonthbtn !== undefined && pruebathremonthbtn !== null){
    pruebathremonthbtn.onclick = function(){
      $.post("./content/php/usr/update_plan_prueba.php", {
        usuario: window.config[0].usuario,
        fechaExpiracion: fechaActualCompleta
      }).done(function(e){
        if (e.match(/success/gim)){
          window.location.reload(false)
        }
      })
    }
  }
}

prueba_three_month()


if (document.getElementsByClassName("panel-log-reg")[0] !== undefined && 
  document.getElementsByClassName("panel-log-reg")[0] !== null &&
  window.location.href.match(/action\=cerrar\_sesion/gim) !== null) {
  window.location.href = "index.php"
} 


function dark(){
    header_session.className = "navbar mb-4 p-4"
    header_session.style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
    header_session.style.webkitBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
    header_session.style.MozBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
    header_session.style.msBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
    header_session.style.oBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;

    text_he.className = "navbar-brand text-light text-he font-weight-bold"

  
 
    if (modscodown !== undefined){
      modscodown.className = window.screen.width >=800 ? "accordion pl-4 pr-4 pb-4  modulos modscodow text-dark" : "accordion  modulos modscodow text-dark";
      modscodown.style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
      modscodown.style.webkitBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
      modscodown.style.MozBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
      modscodown.style.msBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
      modscodown.style.oBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;

    }

    if (bguserconfigchange !== undefined && bguserconfigchange !== null){
      bguserconfigchange.className = "card bguserconfigchange text-light"
      bguserconfigchange.style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
      bguserconfigchange.style.webkitBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
      bguserconfigchange.style.MozBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
      bguserconfigchange.style.msBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
      bguserconfigchange.style.oBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
    }

    const asidechancolor = document.getElementsByClassName("asidechancolor")[0]
    if (asidechancolor !== undefined){
       asidechancolor.className = "containeraside card asidechancolor text-light"
       asidechancolor.style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
       asidechancolor.style.webkitBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
       asidechancolor.style.MozBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
       asidechancolor.style.msBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
       asidechancolor.style.oBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
    }

    if (containeringasedi !== undefined && containeringasedi !== null){
      containeringasedi.classList.add("text-light")
      containeringasedi.classList.remove("text-dark")
      containeringasedi.style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
      containeringasedi.style.webkitBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
      containeringasedi.style.MozBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
      containeringasedi.style.msBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
      containeringasedi.style.oBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`;
    }

    if (document.getElementsByClassName("footcolor")[0] !== undefined && document.getElementsByClassName("footcolor")[0] !== null){
      document.getElementsByClassName("footcolor")[0].style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
      document.getElementsByClassName("footcolor")[0].style.webkitBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`
      document.getElementsByClassName("footcolor")[0].style.MozBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`
      document.getElementsByClassName("footcolor")[0].style.msBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`
      document.getElementsByClassName("footcolor")[0].style.oBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`
      document.getElementsByClassName("footcolor")[0].className = "card footcolor text-light font-weight-bold"
    }

    if (document.getElementsByClassName("color_ventana_graficos")[0] !== undefined && document.getElementsByClassName("color_ventana_graficos")[0] !== null){
      document.getElementsByClassName("color_ventana_graficos")[0].style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
      document.getElementsByClassName("color_ventana_graficos")[0].className = "card mt-4 p-4 color_ventana_graficos text-light"
    }

    if (modingresogasto[0] !== undefined){ //Modal ingreso
        modingresogasto[0].style.background = `rgb(52,52,69)`
        modingresogasto[0].style.webkitBackground = `rgb(52,52,69)`
        modingresogasto[0].style.MozBackground = `rgb(52,52,69)`
        modingresogasto[0].style.msBackground = `rgb(52,52,69)`
        modingresogasto[0].style.oBackground = `rgb(52,52,69)`
        modingresogasto[0].className = "modal-content modingresogasto text-light"
    }

    if (modingresogasto[1] !== undefined){ //Modal Gasto
        modingresogasto[1].style.background = `rgb(52,52,69)`
        modingresogasto[1].style.webkitBackground = `rgb(52,52,69)`
        modingresogasto[1].style.MozBackground = `rgb(52,52,69)`
        modingresogasto[1].style.msBackground = `rgb(52,52,69)`
        modingresogasto[1].style.oBackground = `rgb(52,52,69)`
        modingresogasto[1].className = "modal-content modingresogasto text-light"
    }

    //Transferencias
    if (bgtransferencias_ventana !== undefined && bgtransferencias_ventana !== null){
        bgtransferencias_ventana.classList.add("text-light")
        bgtransferencias_ventana.classList.remove("text-dark")
        bgtransferencias_ventana.style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
        bgtransferencias_ventana.style.webkitBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`
        bgtransferencias_ventana.style.MozBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`
        bgtransferencias_ventana.style.msBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`
        bgtransferencias_ventana.style.oBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`
    }

    iters(
      "dark",
      ["card modsco text-light flexbg",`rgb(52,52,69,${alma_config[1].transparency}5)`], 
      ["card boxes-in text-light flexbg",`rgb(52,52,69,${alma_config[1].transparency}5)`],
      ["p-4 m-4 text-white tered registrosgasin text-light text-white cotxtlight", `rgb(52,52,69,${alma_config[1].transparency}5)`],
      'text-center colorchangetxt text-light',
      "containeraside card asidechancolor text-light"
      )
    for (let x = 0; x < colorchangetxt.length; x++){
        colorchangetxt[x].className = 'text-center colorchangetxt text-light'
    }

    if (menu_option_config_panel_collapsable !== undefined){
      for (let x = 0; x < menu_option_config_panel_collapsable.length; x++){
        menu_option_config_panel_collapsable[x].className = "btn btn-link btn-block text-left fg-color-menu-option-configpanel text-light"
      }
    }

    if (registrosgasin !== undefined && registrosgasin !== null){
      registrosgasin.className = " p-4 m-4 text-white tered registrosgasin text-light text-white cotxtlight"
      registrosgasin.style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
      registrosgasin.style.webkitBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`
      registrosgasin.style.MozBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`
      registrosgasin.style.msBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`
      registrosgasin.style.oBackground = `rgb(52,52,69,${alma_config[1].transparency}5)`
    }
}

function light(){
    if (header_session !== undefined) {
      header_session.className = "navbar mb-4 p-4 header-home-lightinit"
      header_session.style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
      header_session.style.webkitBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      header_session.style.MozBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      header_session.style.msBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      header_session.style.oBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`

    }

    if (text_he !== undefined) text_he.className = "navbar-brand text-dark text-he font-weight-bold"
    if (modscodown !== undefined){
      modscodown.className = window.screen.width >=800 ? "accordion pl-4 pr-4 pb-4  modulos modscodow text-dark" : "accordion  modulos modscodow  text-dark";
    }

    if (bguserconfigchange !== undefined && bguserconfigchange !== null){
      bguserconfigchange.className = "card bguserconfigchange lightinit text-dark"
      bguserconfigchange.style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
      bguserconfigchange.style.webkitBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      bguserconfigchange.style.MozBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      bguserconfigchange.style.msBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      bguserconfigchange.style.oBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`

    }

    const asidechancolor = document.getElementsByClassName("asidechancolor")[0]
    if (asidechancolor !== undefined) {
      asidechancolor.className = "containeraside card asidechancolor text-dark"
      asidechancolor.style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
      asidechancolor.style.webkitBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      asidechancolor.style.MozBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      asidechancolor.style.msBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      asidechancolor.style.oBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`

    }

    if (containeringasedi !== undefined && containeringasedi !== null){
      containeringasedi.classList.add("text-dark")
      containeringasedi.classList.remove("text-light")
      containeringasedi.style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
      containeringasedi.style.webkitBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      containeringasedi.style.MozBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      containeringasedi.style.msBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      containeringasedi.style.oBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`

    }

    if (document.getElementsByClassName("footcolor")[0] !== undefined && document.getElementsByClassName("footcolor")[0] !== null){
      document.getElementsByClassName("footcolor")[0].style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
      document.getElementsByClassName("footcolor")[0].style.webkitBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      document.getElementsByClassName("footcolor")[0].style.MozBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      document.getElementsByClassName("footcolor")[0].style.msBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      document.getElementsByClassName("footcolor")[0].style.oBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`

      document.getElementsByClassName("footcolor")[0].className = "card footcolor text-dark font-weight-bold"
    }

    if (document.getElementsByClassName("color_ventana_graficos")[0] !== undefined && document.getElementsByClassName("color_ventana_graficos")[0] !== null){
      document.getElementsByClassName("color_ventana_graficos")[0].style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
      document.getElementsByClassName("color_ventana_graficos")[0].style.webkitBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      document.getElementsByClassName("color_ventana_graficos")[0].style.MozBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      document.getElementsByClassName("color_ventana_graficos")[0].style.msBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      document.getElementsByClassName("color_ventana_graficos")[0].style.oBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`

      document.getElementsByClassName("color_ventana_graficos")[0].className = "card mt-4 p-4 color_ventana_graficos text-dark"
    }

    if (modingresogasto[0] !== undefined){ //Modal ingreso

        modingresogasto[0].style.background = `rgb(255,255,255)`
        modingresogasto[0].style.webkitBackground = `rgb(255,255,255)`
        modingresogasto[0].style.MozBackground = `rgb(255,255,255)`
        modingresogasto[0].style.msBackground = `rgb(255,255,255)`
        modingresogasto[0].style.oBackground = `rgb(255,255,255)`

        modingresogasto[0].className = "modal-content modingresogasto text-dark"
    }

    if (modingresogasto[1] !== undefined){ //Modal Gasto
        modingresogasto[1].style.background = `rgb(255,255,255)`
        modingresogasto[1].style.webkitBackground = `rgb(255,255,255)`
        modingresogasto[1].style.MozBackground = `rgb(255,255,255)`
        modingresogasto[1].style.msBackground = `rgb(255,255,255)`
        modingresogasto[1].style.oBackground = `rgb(255,255,255)`

        modingresogasto[1].className = "modal-content modingresogasto text-dark"
    }

    //Transferencias
    if (bgtransferencias_ventana !== undefined && bgtransferencias_ventana !== null){
        bgtransferencias_ventana.classList.add("text-dark")
        bgtransferencias_ventana.classList.remove("text-light")
        bgtransferencias_ventana.style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
        bgtransferencias_ventana.style.webkitBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
        bgtransferencias_ventana.style.MozBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
        bgtransferencias_ventana.style.msBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
        bgtransferencias_ventana.style.oBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`

    }

    iters(
      "light",
      ["card modsco text-dark flexbg",`rgb(255,255,255,${alma_config[1].transparency}5)`], 
      ["card boxes-in text-dark", `rgb(255,255,255,${alma_config[1].transparency}5)`],
      ["p-4 m-4 tered registrosgasin text-dark cotxtdark", `rgb(255,255,255,${alma_config[1].transparency}5)`],
      'text-center colorchangetxt text-dark',
      )
    for (let x = 0; x < colorchangetxt.length; x++){
        colorchangetxt[x].className = 'text-center colorchangetxt text-darks p-4'
    }

    if (menu_option_config_panel_collapsable !== undefined){
      for (let x = 0; x < menu_option_config_panel_collapsable.length; x++){
        menu_option_config_panel_collapsable[x].className = "btn btn-link btn-block text-left fg-color-menu-option-configpanel text-dark"
      }
    }

    if (registrosgasin !== undefined) {
      registrosgasin.className = "  p-4 m-4 tered registrosgasin  text-dark cotxtdark"
      registrosgasin.style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
      registrosgasin.style.webkitBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      registrosgasin.style.MozBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      registrosgasin.style.msBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`
      registrosgasin.style.oBackground = `rgb(255,255,255,${alma_config[1].transparency}5)`

    }
}



function colorear_balances(){
  let balactualco = document.getElementsByClassName("balactual_co")[0]
  let baldeudas_co = document.getElementsByClassName("baldeudas_co")[0]
  let totalgastosfiltro = document.getElementsByClassName("togasinitfil")[0]
  let totalIngresFiltro = document.getElementsByClassName("toingresinitfil")[0]
  let balancefiltro = document.getElementsByClassName("balancefiltro")[0]
  const apply_color_balance = function(obj, state){
    if (obj !== undefined){
      obj.style.fontWeight = "bold"
      if (state === "gastostotal"){
        obj.style.color = "red"
        obj.style.webkitColor = "red"
        obj.style.MozColor = "red"
        obj.style.msColor = "red"
        obj.style.oColor = "red"

      } else if(obj.getAttribute("value").match(/\-/gim) === null && state === "gastostotal"){
        obj.style.color = "#50d53a"
        obj.style.webkitColor = "#50d53a"
        obj.style.MozColor = "#50d53a"
        obj.style.msColor = "#50d53a"
        obj.style.oColor = "#50d53a"

      }

      if (obj.getAttribute("value").match(/\-/gim) && state === "ingresostotal"){
        obj.style.color = "red"
        obj.style.webkitColor = "red"
        obj.style.MozColor = "red"
        obj.style.msColor = "red"
        obj.style.oColor = "red"
      } else if (obj.getAttribute("value").match(/\-/gim) === null && state === "ingresostotal") {
        obj.style.color = "#50d53a"
        obj.style.webkitColor = "#50d53a"
        obj.style.MozColor = "#50d53a"
        obj.style.msColor = "#50d53a"
        obj.style.oColor = "#50d53a"
      }

      if (obj.getAttribute("value").match(/\-/gim) && state === "balactualco"){
        obj.style.color = "red"
        obj.style.webkitColor = "red"
        obj.style.MozColor = "red"
        obj.style.msColor = "red"
        obj.style.oColor = "red"
      } else if (obj.getAttribute("value").match(/\-/gim) === null && state === "balactualco") {
        obj.style.color = "#50d53a"
        obj.style.webkitColor = "#50d53a"
        obj.style.MozColor = "#50d53a"
        obj.style.msColor = "#50d53a"
        obj.style.oColor = "#50d53a"
      }

      if (obj.getAttribute("value").match(/\-/gim) && state === "baldeudas_co"){
        obj.style.color = "red"
        obj.style.webkitColor = "red"
        obj.style.MozColor = "red"
        obj.style.msColor = "red"
        obj.style.oColor = "red"
      } else if (obj.getAttribute("value").match(/\-/gim) === null && state === "baldeudas_co") {
        obj.style.color = "#0CC9D5"
        obj.style.webkitColor = "#0CC9D5"
        obj.style.MozColor = "#0CC9D5"
        obj.style.msColor = "#0CC9D5"
        obj.style.oColor = "#0CC9D5"
      }

      if (state === "balancefiltro"){
        obj.style.color = "#0CC9D5"
        obj.style.webkitColor = "#0CC9D5"
        obj.style.MozColor = "#0CC9D5"
        obj.style.msColor = "#0CC9D5"
        obj.style.oColor = "#0CC9D5"
      } 
    }
  }
  apply_color_balance(balactualco, "balactualco")
  apply_color_balance(baldeudas_co, "baldeudas_co")
  apply_color_balance(totalgastosfiltro, "gastostotal")
  apply_color_balance(totalIngresFiltro, "ingresostotal")
  apply_color_balance(balancefiltro, "balancefiltro")
}

colorear_balances()


function obtener_mostrar_saldo_modales_ingreso_gasto(){
  function obtener_saldo_modal_gasto(){
    let cuenta = document.getElementById("cuentaGasto")
    if (document.getElementById("cuentaGasto") !== undefined && document.getElementById("cuentaGasto") !== null){ 
      if (cuenta.value !== ""){
        $.post("./content/php/consults_info/mostrar_saldo_nuevo_ingreso_gasto.php", {
          cuenta : cuenta.value,
          usuario : window.config[0].usuario
        }).done(function(e){
          let balacmodalga = document.getElementById("balacmodalga")
          if (e.match(/-/gim)){
            balacmodalga.className = "font-weight-bold font-italic badge badge-danger"
          } else {
            balacmodalga.className = "font-weight-bold font-italic badge badge-success"
          }
          balacmodalga.innerHTML = "$ " + e
        })
      } 
    }
  }

  function obtener_saldo_modal_ingreso(){
    let cuenta = document.getElementById("cuenta")
    if (document.getElementById("cuenta") !== undefined && document.getElementById("cuenta") !== null){ 
      if (cuenta.value !== ""){
        $.post("./content/php/consults_info/mostrar_saldo_nuevo_ingreso_gasto.php", {
          cuenta : cuenta.value,
          usuario : window.config[0].usuario
        }).done(function(e){
          let balacmodalin = document.getElementById("balacmodalin")
          if (e.match(/-/gim)){
            balacmodalin.className = "font-weight-bold font-italic badge badge-danger"
          } else {
            balacmodalin.className = "font-weight-bold font-italic badge badge-success"
          }
          balacmodalin.innerHTML = "$ " + e
        })
      } 
    }
  }

  function obtener_saldo_balanceo(){
    let cuentaBalanceo = document.getElementById("cuentaBalanceo")
    if (document.getElementById("cuentaBalanceo") !== undefined && document.getElementById("cuentaBalanceo") !== null){ 
      if (cuentaBalanceo.value !== ""){
        $.post("./content/php/consults_info/mostrar_saldo_nuevo_ingreso_gasto.php", {
          cuenta : cuentaBalanceo.value,
          usuario : window.config[0].usuario
        }).done(function(e){
          let balacmodalbalanceo = document.getElementById("balacmodalbalanceo")
          if (e.match(/-/gim)){
            balacmodalbalanceo.className = "font-weight-bold font-italic badge badge-danger"
             //pj
            if (document.getElementsByClassName("caras")[0] !== undefined && document.getElementsByClassName("caras")[0] !== null){
                if (window.config[1].pj_change !== "" && window.config[1].pj_change !== undefined && window.config[1].pj_change !== null){
                }
                let pj = window.config[1].pj_change.replace("happy", "angry")
                document.getElementsByClassName("caras")[0].setAttribute("src", pj)
                document.getElementsByClassName("caras")[0].animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
                document.getElementsByClassName("notifypj")[0].style.display = "none"
            }
        
          } else {
            balacmodalbalanceo.className = "font-weight-bold font-italic badge badge-success"
            //pj
            if (document.getElementsByClassName("caras")[0] !== undefined && document.getElementsByClassName("caras")[0] !== null){
                if (window.config[1].pj_change !== "" && window.config[1].pj_change !== undefined && window.config[1].pj_change !== null){
                }
                let pj = window.config[1].pj_change.replace("angry", "happy")
                document.getElementsByClassName("caras")[0].setAttribute("src", pj)
                document.getElementsByClassName("caras")[0].animate([{opacity:0},{opacity:1}],{duration:400, iterations:1})
                document.getElementsByClassName("notifypj")[0].style.display = "none"
            }
        
          }
          balacmodalbalanceo.innerHTML = "$ " + e
        })
      } 
    }
  }

  if (document.getElementById("cuentaGasto") !== undefined && document.getElementById("cuentaGasto") !== null){ 
    document.getElementById("cuentaGasto").onchange = function(e){
      obtener_saldo_modal_gasto()
    }
  }
  if (document.getElementById("cuenta") !== undefined && document.getElementById("cuenta") !== null){ 
    document.getElementById("cuenta").onchange = function(e){
      obtener_saldo_modal_ingreso()
    }
  }
  if (document.getElementById("balacmodalbalanceo") !== undefined && document.getElementById("balacmodalbalanceo") !== null){ 
    document.getElementById("cuentaBalanceo").onchange = function(e){
      obtener_saldo_balanceo()
    }
  }
}

obtener_mostrar_saldo_modales_ingreso_gasto()




// Iniciar configuración de la sesión

//hacer un innerHTML y probar insertando php para aplicar modo dar lyght en modo embebido
// init_config = () => {
//       $.post( "./content/php/usr/usr_cnfg.php")
//         .done( dat => {
//           dat = JSON.parse(dat)
//           if (dat[1].mode === "dark"){ // ----------------- Dark
//               header_session.className = "navbar mb-4 p-4 header-home-asistent-darkinit"
//               text_he.className = "navbar-brand text-light text-he font-weight-bold"
         
//             if (modscodown !== undefined){
//               modscodown.className = window.screen.width >=800 ? "accordion pl-4 pr-4 pb-4  modulos modscodow text-dark" : "accordion  modulos modscodow text-dark";
//             }
//             iters(
//               "card modsco darkinit text-light", 
//               "card boxes-in darkinit text-light"
//               )
//           } else { // ----------------------------- Light
//               header_session.className = "navbar mb-4 p-4 header-home-asistentinit header-home-lightinit"
//               text_he.className = "navbar-brand text-dark text-he font-weight-bold"
//             if (modscodown !== undefined){
//               modscodown.className = window.screen.width >=800 ? "accordion pl-4 pr-4 pb-4  modulos modscodow text-dark" : "accordion  modulos modscodow  text-dark";
//             }
//             iters(
//               "card modsco lightinit text-dark", 
//               "card boxes-in lightinit text-dark"
//               )
//           }
//         });
// }

// init_config()
// ----------------------------------------------------------------------------------------------------------------
