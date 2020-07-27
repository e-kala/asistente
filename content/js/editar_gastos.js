$(function(){
    $(".editarGasto").click(function(){
        var id = $(this).attr('data-id');
        var categoriaGasto = $('#categoriaGasto'+id).attr('value'+id);
        var descripcionGasto = $('#descripcionGasto'+id).attr('value'+id);
        var cuentaGasto = $('#cuentaGasto'+id).attr('value'+id);
        var fechaGasto = $('#fechaGasto'+id).attr('value'+id);
        var cantidadGasto = $('#cantidadGasto'+id).attr('value'+id);
        console.log(id);

        $("#idInput").val(id);
        $('#categoriaGastoInput').val(categoriaGasto);
        $('#descripcionGastoInput').val(descripcionGasto);
        $('#cuentaGastoInput').val(cuentaGasto);
        $('#fechaGastoInput').val(fechaGasto);
        $('#cantidadGastoInput').val(cantidadGasto);
    });
});

$(function(){
    $(".eliminarGasto").click(function(){
        var id = $(this).attr('data-id');
        var eliminarGasto = $('#eliminarGasto'+id).attr('value'+id);
        $('#cuentaAEliminar').val(eliminarGasto);
        console.log(eliminarGasto + id);
       
        $("#confirmar").click(function(){
            $.post("content/php/modulos/movimientos/gastos/eliminar_gasto.php", {id_gasto:id})
            .done(function(data){
                console.log(data);
                window.location.reload()
            });
        });
    });
});