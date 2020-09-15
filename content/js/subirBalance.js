// <!--Subir Balance-->
$(function(){
    $('#subirBalanceo').click(function(){
        cantidadNueva=$('#cantidadNueva').val();
        cuenta=$('#cuentaBalanceo').val();
        console.log(cantidadNueva + cuenta);
        agregarDatosBalance(cantidadNueva,cuenta);

    });
}); // ------------------------------------------------------------------------------------------------


// <!--Agregar Datos Balance-->
function agregarDatosBalance(cantidadNueva, cuenta){
    var cadena="cantidadNueva="+cantidadNueva+
        "&cuenta="+cuenta
        //console.log(cadena);
        $.ajax({
            url:"content/php/subirBalanceo.php",
            type: 'GET',
            data: cadena,
            processData: false,
            contentType: false,
            cache: false
        }).done(function(res){
            console.log(res);
            //console.log("correcto");
            cantidadNueva=$('#cantidadNueva').val('');

            $('#modalBalanceo').modal('toggle');
            $.notify("Registro Correcto", "success");
            location.reload();
        }).fail(function(){
            alert('fail');
        });
}


//Saldo balanceo
//Mostrar saldo de la cuenta que este por defecto al abrir modal
let balacmodalbalanceo = document.getElementById("balacmodalbalanceo")

if (balacmodalbalanceo !== null && balacmodalbalanceo !== undefined){
    $.post("./content/php/consults_info/mostrar_saldo_nuevo_ingreso_gasto.php", {
        cuenta : document.getElementById("cuentaBalanceo").value,
        usuario : window.config[0].usuario
      }).done(function(e){

        if (e.match(/-/gim)){
            balacmodalbalanceo.className = "font-weight-bold font-italic badge badge-danger"
        } else {
            balacmodalbalanceo.className = "font-weight-bold font-italic badge badge-success"
        }
        balacmodalbalanceo.innerHTML = "$ " + e

      })
}