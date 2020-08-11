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



if (document.getElementsByClassName("panel-log-reg")[0] !== undefined && 
  document.getElementsByClassName("panel-log-reg")[0] !== null &&
  window.location.href.match(/action\=cerrar\_sesion/gim) !== null) {
  window.location.href = "index.php"
} 

const dark = () => {
    header_session.className = "navbar mb-4 p-4"
    header_session.style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
    
    text_he.className = "navbar-brand text-light text-he font-weight-bold"
 
    if (modscodown !== undefined){
      modscodown.className = window.screen.width >=800 ? "accordion pl-4 pr-4 pb-4  modulos modscodow text-dark" : "accordion  modulos modscodow text-dark";
      modscodown.style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
    }

    if (bguserconfigchange !== undefined && bguserconfigchange !== null){
      bguserconfigchange.className = "card bguserconfigchange text-light"
      bguserconfigchange.style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
    }

    const asidechancolor = document.getElementsByClassName("asidechancolor")[0]
    if (asidechancolor !== undefined){
       asidechancolor.className = "containeraside card asidechancolor text-light"
       asidechancolor.style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
    }

    if (containeringasedi !== undefined && containeringasedi !== null){
      containeringasedi.className = "container containeringasedi p-4 text-light"
      containeringasedi.style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
    }

    if (document.getElementsByClassName("footcolor")[0] !== undefined && document.getElementsByClassName("footcolor")[0] !== null){
      document.getElementsByClassName("footcolor")[0].style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
      document.getElementsByClassName("footcolor")[0].className = "card footcolor text-light font-weight-bold"
    }

    if (document.getElementsByClassName("color_ventana_graficos")[0] !== undefined && document.getElementsByClassName("color_ventana_graficos")[0] !== null){
      document.getElementsByClassName("color_ventana_graficos")[0].style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
      document.getElementsByClassName("color_ventana_graficos")[0].className = "card mt-4 p-4 color_ventana_graficos text-light"
    }

    if (modingresogasto[0] !== undefined){ //Modal ingreso
        modingresogasto[0].style.background = `rgb(52,52,69)`
        modingresogasto[0].className = "modal-content modingresogasto text-light"
    }

    if (modingresogasto[1] !== undefined){ //Modal Gasto
        modingresogasto[1].style.background = `rgb(52,52,69)`
        modingresogasto[1].className = "modal-content modingresogasto text-light"
    }

    //Transferencias
    if (bgtransferencias_ventana !== undefined && bgtransferencias_ventana !== null){
        bgtransferencias_ventana.className = "p-4 mt-4 rounded bgtransferencias_ventana text-light"
        bgtransferencias_ventana.style.background = `rgb(52,52,69,${alma_config[1].transparency}5)`
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

    registrosgasin.className = "p-4 m-4 text-white tered registrosgasin text-light text-white cotxtlight"
}

const light = () => {
    if (header_session !== undefined) {
      header_session.className = "navbar mb-4 p-4 header-home-lightinit"
      header_session.style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
    }

    if (text_he !== undefined) text_he.className = "navbar-brand text-dark text-he font-weight-bold"
    if (modscodown !== undefined){
      modscodown.className = window.screen.width >=800 ? "accordion pl-4 pr-4 pb-4  modulos modscodow text-dark" : "accordion  modulos modscodow  text-dark";
    }

    if (bguserconfigchange !== undefined && bguserconfigchange !== null){
      bguserconfigchange.className = "card bguserconfigchange lightinit text-dark"
      bguserconfigchange.style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
    }

    const asidechancolor = document.getElementsByClassName("asidechancolor")[0]
    if (asidechancolor !== undefined) {
      asidechancolor.className = "containeraside card asidechancolor text-dark"
      asidechancolor.style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
    }

    if (containeringasedi !== undefined && containeringasedi !== null){
      containeringasedi.className = "container containeringasedi p-4 lightinit text-dark"
    }

    if (document.getElementsByClassName("footcolor")[0] !== undefined && document.getElementsByClassName("footcolor")[0] !== null){
      document.getElementsByClassName("footcolor")[0].style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
      document.getElementsByClassName("footcolor")[0].className = "card footcolor text-dark font-weight-bold"
    }

    if (document.getElementsByClassName("color_ventana_graficos")[0] !== undefined && document.getElementsByClassName("color_ventana_graficos")[0] !== null){
      document.getElementsByClassName("color_ventana_graficos")[0].style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
      document.getElementsByClassName("color_ventana_graficos")[0].className = "card mt-4 p-4 color_ventana_graficos text-dark"
    }
    if (modingresogasto[0] !== undefined){ //Modal ingreso
        modingresogasto[0].style.background = `rgb(255,255,255)`
        modingresogasto[0].className = "modal-content modingresogasto text-dark"
    }

    if (modingresogasto[1] !== undefined){ //Modal Gasto
        modingresogasto[1].style.background = `rgb(255,255,255)`
        modingresogasto[1].className = "modal-content modingresogasto text-dark"
    }

    //Transferencias
    if (bgtransferencias_ventana !== undefined && bgtransferencias_ventana !== null){
        bgtransferencias_ventana.className = "p-4 mt-4 rounded bgtransferencias_ventana text-dark"
        bgtransferencias_ventana.style.background = `rgb(255,255,255,${alma_config[1].transparency}5)`
    }

    iters(
      "light",
      ["card modsco text-dark flexbg",`rgb(255,255,255,${alma_config[1].transparency}5)`], 
      ["card boxes-in text-dark", `rgb(255,255,255,${alma_config[1].transparency}5)`],
      ["p-4 m-4 tered registrosgasin lightinit text-dark cotxtdark", `rgb(255,255,255,${alma_config[1].transparency}5)`],
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

    if (registrosgasin !== undefined) registrosgasin.className = "p-4 m-4 tered registrosgasin lightinit text-dark cotxtdark"
}


const colorear_balances = () => {
  let balactualco = document.getElementsByClassName("balactual_co")[0]
  let totalgastosfiltro = document.getElementsByClassName("togasinitfil")[0]
  let totalIngresFiltro = document.getElementsByClassName("toingresinitfil")[0]
  let balancefiltro = document.getElementsByClassName("balancefiltro")[0]
  const apply_color_balance = (obj, state) =>{
    if (obj !== undefined){
      obj.style.fontWeight = "bold"
      if (state === "gastostotal"){
        obj.style.color = "red"
      } else if(obj.getAttribute("value").match(/\-/gim) === null && state === "gastostotal"){
        obj.style.color = "#50d53a"
      }

      if (obj.getAttribute("value").match(/\-/gim) && state === "ingresostotal"){
        obj.style.color = "red"
      } else if (obj.getAttribute("value").match(/\-/gim) === null && state === "ingresostotal") {
        obj.style.color = "#50d53a"
      }

      if (obj.getAttribute("value").match(/\-/gim) && state === "balactualco"){
        obj.style.color = "red"
      } else if (obj.getAttribute("value").match(/\-/gim) === null && state === "balactualco") {
        obj.style.color = "#50d53a"
      }

      if (state === "balancefiltro"){
        obj.style.color = "#0CC9D5"
      } 
    }
  }
  apply_color_balance(balactualco, "balactualco")
  apply_color_balance(totalgastosfiltro, "gastostotal")
  apply_color_balance(totalIngresFiltro, "ingresostotal")
  apply_color_balance(balancefiltro, "balancefiltro")
}

colorear_balances()

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
