// <!-- Script Muestra Último Ingreso -->
$(function(){
    $.ajax({
        url: "content/php/info.php",
        dataType: "json"
    }).done(function(res){
        $.each(res, function(ix, dat){
            //console.log(dat);
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
            //console.log(dat);
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
