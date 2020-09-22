$(function(){
    $(".editarIngreso").click(function(){
        var id = $(this).attr('data-id');
        var categoriaIngreso = $('#categoriaIngreso'+id).attr('value'+id);
        var descripcionIngreso = $('#descripcionIngreso'+id).attr('value'+id);
        var cuentaIngreso = $('#cuentaIngreso'+id).attr('value'+id);
        var fechaIngreso = $('#fechaIngreso'+id).attr('value'+id);
        var cantidadIngreso = $('#cantidadIngreso'+id).attr('value'+id);
        //console.log(categoriaIngreso);

        $("#idInput").val(id);
        $('#categoriaIngresoInput').val(categoriaIngreso);
        $('#descripcionIngresoInput').val(descripcionIngreso);
        $('#cuentaIngresoInput').val(cuentaIngreso);
        $('#fechaIngresoInput').val(fechaIngreso);
        $('#cantidadIngresoInput').val(cantidadIngreso);
    });
});

$(function(){
    $(".eliminarIngreso").click(function(){
        var id = $(this).attr('data-id');
        var eliminarIngreso = $('#eliminarIngreso'+id).attr('value'+id);
        $('#cuentaAEliminar').val(eliminarIngreso);
        console.log(eliminarIngreso + id);
       
        $("#confirmar").click(function(){
            $.post("content/php/modulos/movimientos/ingresos/eliminar_ingreso.php", {id_ingreso:id})
            .done(function(data){
                console.log(data);
                window.location.reload()
            });
        });
    });
});