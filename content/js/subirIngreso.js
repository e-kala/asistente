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
});

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