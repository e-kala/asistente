// <!--Subir Balance-->
$(function(){
    $('#subirBalance').click(function(){
        cantidadNueva=$('#cantidadNueva').val();
        cuenta=$('#cuenta').val();
        categoria=$('#categoria').val();
        descripcion=$('#descripcion').val();
        fecha=$('.fecha').val();
        console.log(cantidadNueva + cuenta + categoria + descripcion + fecha);
        agregarDatosGasto(cantidadNueva,cuenta,categoria,descripcion,fecha);

    });
}); // ------------------------------------------------------------------------------------------------


// <!--Agregar Datos Balance-->
function agregarDatosBalance(cantidadNueva, cuenta, categoria, descripcion, fecha){
    var cadena="cantidadBalance="+cantidadBalance+
        "&cuenta="+cuenta+
        "&categoria="+categoria+
        "&descripcion="+descripcion+
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
            cantidadNueva=$('#cantidadNueva').val('');
            cuenta = $('#cuenta').val('');
            categoria = $('categoria').val('');
            descripcion=$('#descripcion').val('');
            fecha=$('#fecha').val('');

            $('#modalBalanceo').modal('toggle');
            $.notify("Registro Correcto", "success");
            location.reload();
        }).fail(function(){
            alert('fail');
        });
}