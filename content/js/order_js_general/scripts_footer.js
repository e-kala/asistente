// <!--Obtener Fecha-->
$(function(){
    var now = new Date();

    var day = ("0"+now.getDate()).slice(-2);
    var month = ("0"+(now.getMonth()+1)).slice(-2);

    var today = now.getFullYear()+"-"+(month)+"-"+(day);
    console.log(today);
    $(".fecha").val(today);
}); // ---------------------------------------------------------------------------------------



// <!--Subir Ingreso-->
$(function(){
    $('#subirIngreso').click(function(){
        cantidadIngreso=$('#cantidadIngreso').val();
        cuenta=$('#cuenta').val();
        categoriaIngreso=$('#categoriaIngreso').val();
        descripcionIngreso=$('#descripcionIngreso').val();
        fecha=$('.fecha').val();
        console.log(cantidadIngreso +cuenta+ categoriaIngreso + descripcionIngreso + fecha);
        agregarDatosIngreso(cantidadIngreso,cuenta,categoriaIngreso,descripcionIngreso,fecha);
    });
}); // ----------------------------------------------------------------------------------------


// <!--Agregar Datos Ingreso-->
function agregarDatosIngreso(cantidadIngreso,cuenta,categoriaIngreso,descripcionIngreso, fecha){
    var cadena="cantidadIngreso="+cantidadIngreso+
        "&cuenta="+cuenta+
        "&categoriaIngreso="+categoriaIngreso+
        "&descripcionIngreso="+descripcionIngreso+
        "&fecha="+fecha;
        console.log(cadena);
        $.ajax({
            url:"content/php/subirIngreso.php",
            type: 'GET',
            data: cadena,
            processData: false,
            contentType: false,
            cache: false
        }).done(function(res){
            console.log(res);
            //console.log("correcto");
            cantidadIngreso=$('#cantidadIngreso').val('');
            categoriaIngreso=$('#categoriaIngreso').val('');
            descripcionIngreso=$('#descripcionIngreso').val('');

            $('#ingresoModal').modal('toggle');
            $.notify("Registro Correcto", "success");
            location.reload();
        });
}
/*
success:function(r){
    if (r==1) {
        console.log(r);
        alertify.success("agregado con exito");

    }else {
        alertify.error("Falla");
    }*/
// -----------------------------------------------------------------------------------------




// <!-- Script Muestra Último Ingreso -->
$(function(){
    $.ajax({
        url: "content/php/info.php",
        dataType: "json"
    }).done(function(res){
        $.each(res, function(ix, dat){
            console.log(dat);
            $('#info').append("<b>Fecha</b>: " + dat.fecha_ingreso+"<br>");
            $('#info').append("<b>Categoría</b>: " + dat.categoria_ingreso+"<br>");
            $('#info').append("<b>Cantidad:</b> " + dat.cantidad_ingreso+"<br>");
            $('#info').append("<b>Descripción:</b> " + dat.descripcion_ingreso+"<br>");
            //$('#info').load("php/info.php");


            //return(i !== 0);
        });
        //console.log(res);
        //res = JSON.parse(res);
        //$('#info').append(res);
    });

}) // ---------------------------------------------------------------------------------------------

// <!-- Script Muestra Último Gasto -->
$(function(){
    $.ajax({
        url: "content/php/ultimoGasto.php",
        dataType: "json"
    }).done(function(res){
        $.each(res, function(ix, dat){
            console.log(dat);
            $('#ultimoGasto').append("<b>Fecha</b>: " + dat.fecha_gasto+"<br>");
            $('#ultimoGasto').append("<b>Categoría</b>: " + dat.categoria_gasto+"<br>");
            $('#ultimoGasto').append("<b>Cantidad:</b> " + dat.cantidad_gasto+"<br>");
            //$('#info').load("php/info.php");
            $('#ultimoGasto').append("<b>Descripción:</b> " + dat.descripcion_gasto+"<br>");


            //return(i !== 0);
        });

        //console.log(res);
        //res = JSON.parse(res);
        //$('#info').append(res);
    });
}) // ----------------------------------------------------------------------------------------------


// if (jQuery) {
//     console.log("jQuery esta cargado");
// } else {
//     console.log("jQuery no esta cargado");
// }


// <!--Subir Gasto-->
$(function(){
    $('#subirGasto').click(function(){
        cantidadGasto=$('#cantidadGasto').val();
        cuenta=$('#cuenta').val();
        categoriaGasto=$('#categoriaGasto').val();
        descripcionGasto=$('#descripcionGasto').val();
        fecha=$('.fecha').val();
        console.log(cantidadGasto +cuenta+ categoriaGasto + descripcionGasto + fecha);
        agregarDatosGasto(cantidadGasto,cuenta,categoriaGasto,descripcionGasto,fecha);

    });
}); // ------------------------------------------------------------------------------------------------


// <!--Agregar Datos Gasto-->
function agregarDatosGasto(cantidadGasto, cuenta, categoriaGasto, descripcionGasto, fecha){
    var cadena="cantidadGasto="+cantidadGasto+
        "&cuenta="+cuenta+
        "&categoriaGasto="+categoriaGasto+
        "&descripcionGasto="+descripcionGasto+
        "&fecha="+fecha;
        //console.log(cadena);
        $.ajax({
            url:"content/php/subirGasto.php",
            type: 'GET',
            data: cadena,
            processData: false,
            contentType: false,
            cache: false
        }).done(function(res){
            console.log(res);
            //console.log("correcto");
            cantidadGasto=$('#cantidadGasto').val('');
            cuenta = $('#cuenta').val('');
            categoriaGasto = $('categoriaGasto').val('');
            descripcionGasto=$('#descripcionGasto').val('');
            fecha=$('#fecha').val('');

            $('#modalGasto').modal('toggle');
            $.notify("Registro Correcto", "success");
            location.reload();
        }).fail(function(){
            alert('fail');
        });
}
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
function agregarDatosGasto(cantidadGasto,cuenta,categoriaGasto,descripcionGasto, fecha){
    var cadena="cantidadGasto="+cantidadGasto+
        "&cuenta="+cuenta+
        "&categoriaGasto="+categoriaGasto+
        "&descripcionGasto="+descripcionGasto+
        "&fecha="+fecha;
        //console.log(cadena);
        $.ajax({
            url:"content/php/subirGasto.php",
            type: 'GET',
            data: cadena,
            processData: false,
            contentType: false,
            cache: false
        }).done(function(res){
            console.log(res);
            //console.log("correcto");
            cantidadGasto=$('#cantidadGasto').val('');
            categoriaGasto=$('#categoriaGasto').val('');
            descripcionGasto=$('#descripcionGasto').val('');

            $('#modalGasto').modal('toggle');
            $.notify("Registro Correcto", "success");
            location.reload();
        });
} // ------------------------------------------------------------------------------------------------------



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
