// <!--Subir Gasto-->
$(function(){
    $('#subirGasto').click(function(){
        cantidadGasto=$('#cantidadGasto').val();
        cuenta=$('#cuentaGasto').val();
        categoriaGasto=$('#categoriaGasto').val();
        descripcionGasto=$('#descripcionGasto').val();
        fecha=$('.fecha').val();
        console.log(cantidadGasto + cuenta + categoriaGasto + descripcionGasto + fecha);
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