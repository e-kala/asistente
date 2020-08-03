$(function(){
    $(".editarCuenta").click(function(){
        var id = $(this).attr('data-id');
        var nuevoNombreCuenta = $('#nombreCuenta'+id).attr('value'+id);
        
        $("#idInput").val(id);
        $('#nuevoNombreCuenta').val(nuevoNombreCuenta);
    });
});

$(function(){
    $(".eliminarCuenta").click(function(){
        var id = $(this).attr('data-id');
        var eliminarCuenta = $('#eliminarCuenta'+id).attr('value'+id);
        $('#cuentaAEliminar').val(eliminarCuenta);
        console.log(eliminarCuenta + id);
       
        $("#confirmar").click(function(){
            $.post("content/php/modulos/cuentas/eliminar_cuenta.php", {id_cuenta:id})
            .done(function(data){
                //console.log(data);
                window.location.reload()
            });
        });
    });
});

