let usuariop = ""
let bg_session = ""
let caducidad_session = ""
let modebg_to_nav = ""

//asignn points
// $(function(){
//   if (document.getElementById("span-points") !== undefined){
//     let intervalTimer = setInterval(function(){
//       let daw = new Date()
//       mins = daw.getMinutes().toString().split("").length === 1 ? "0" + daw.getMinutes() : daw.getMinutes() ;
//       seconds = daw.getSeconds().toString().split("").length === 1 ? "0" + daw.getSeconds() : daw.getSeconds() ;
//       hour = daw.getHours().toString().split("").length === 1 ? "0" + daw.getHours() : daw.getHours();
//       hour = hour === "00" ? "12" : hour
//       let timeActualClient = hour +":"+mins+":"+seconds

//       if (timeActualClient == "20:15:00"){
//         $.post("./content/php/usr/update_points.php",{usuario:window.config[0].usuario}).done(function(resp){
//           console.log(resp)
//           document.getElementById("nun-point").innerHTML =  resp 
//           document.getElementById("nun-point").animate([{
//             transform:"scale(0.7)"
//           },{
//             transform:"scale(1)"
//           }],{duration:400, iterations:1})

//           // clearInterval(intervalTimer)
//         })
//       } 

//       // console.log(timeActualClient,"...")
//     },1000)
//   }
// })

function getDevicePixelRatio() {
    var mediaQuery;
    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    if (window.devicePixelRatio !== undefined && !is_firefox) {
        return window.devicePixelRatio;
    } else if (window.matchMedia) {
        mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
          (min--moz-device-pixel-ratio: 1.5),\
          (-o-min-device-pixel-ratio: 3/2),\
          (min-resolution: 1.5dppx)";
        if (window.matchMedia(mediaQuery).matches) {
            return 1.5;
        }
        mediaQuery = "(-webkit-min-device-pixel-ratio: 2),\
          (min--moz-device-pixel-ratio: 2),\
          (-o-min-device-pixel-ratio: 2/1),\
          (min-resolution: 2dppx)";
        if (window.matchMedia(mediaQuery).matches) {
            return 2;
        }
        mediaQuery = "(-webkit-min-device-pixel-ratio: 0.75),\
          (min--moz-device-pixel-ratio: 0.75),\
          (-o-min-device-pixel-ratio: 3/4),\
          (min-resolution: 0.75dppx)";
        if (window.matchMedia(mediaQuery).matches) {
            return 0.7;
        }
    } else {
        return 1;
    }
}


const import_configuracion = () => {
  //------------------------------  Import configuration -------------------------------- 
  let c = document.getElementById("cngfirst")
  if (c !== undefined && c !== null){
    window.config = c.getAttribute("value")
    window.config = JSON.parse(window.config)
  }
  // ------------------------------------------------------------------------------------
}


// $(function(){
// console.log(window.config)
  
// })

import_configuracion()


