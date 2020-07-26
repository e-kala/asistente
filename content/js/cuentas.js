$(function(){
    $(".editarCuenta").click(function(){
        var id = $(this).attr('data-id');
        var nuevoNombreCuenta = $('#nombreCuenta'+id).attr('value'+id);
        $("#idInput").val(id);
        $('#nuevoNombreCuenta').val(nuevoNombreCuenta);
    });

    $("#subirEditarCuenta")
    
    /*$.post(
        "./content/php/editar_cuenta.php", {nuevoNombreCuenta:,id_cuenta:id}
    )*/
});