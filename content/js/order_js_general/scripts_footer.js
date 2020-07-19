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



const dark = () => {
    header_session.className = "navbar mb-4 p-4 header-home-asistent-darkinit"
      text_he.className = "navbar-brand text-light text-he font-weight-bold"
 
    if (modscodown !== undefined){
      modscodown.className = window.screen.width >=800 ? "accordion pl-4 pr-4 pb-4  modulos modscodow text-dark" : "accordion  modulos modscodow text-dark";
    }
    iters(
      "card modsco darkinit text-light", 
      "card boxes-in darkinit text-light",
      "p-4 m-4 text-white tered registrosgasin darkinit text-light text-white cotxtlight",
      'text-center colorchangetxt text-light'
      )
    for (let x = 0; x < colorchangetxt.length; x++){
        colorchangetxt[x].className = 'text-center colorchangetxt text-light'
    }

    registrosgasin.className = "p-4 m-4 text-white tered registrosgasin darkinit text-light text-white cotxtlight"
}

const light = () => {
    header_session.className = "navbar mb-4 p-4 header-home-asistentinit header-home-lightinit"
      text_he.className = "navbar-brand text-dark text-he font-weight-bold"
    if (modscodown !== undefined){
      modscodown.className = window.screen.width >=800 ? "accordion pl-4 pr-4 pb-4  modulos modscodow text-dark" : "accordion  modulos modscodow  text-dark";
    }
    iters(
      "card modsco lightinit text-dark", 
      "card boxes-in lightinit text-dark",
      "p-4 m-4 tered registrosgasin lightinit text-dark cotxtdark",
      'text-center colorchangetxt text-dark'
      )
    for (let x = 0; x < colorchangetxt.length; x++){
        colorchangetxt[x].className = 'text-center colorchangetxt text-darks p-4'
    }

    registrosgasin.className = "p-4 m-4 tered registrosgasin lightinit text-dark cotxtdark"
}


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
