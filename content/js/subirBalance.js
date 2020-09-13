// <!--Subir Balance-->
$(function(){
    $('#subirBalanceo').click(function(){
        cantidadNueva=$('#cantidadNueva').val();
        cuenta=$('#cuenta').val();
        categoria=$('#categoria').val();
        descripcion=$('#descripcion').val();
        fecha=$('.fecha').val();
        console.log(cantidadNueva + cuenta + categoria + descripcion + fecha);
        agregarDatosBalance(cantidadNueva,cuenta,categoria,descripcion,fecha);

    });
}); // ------------------------------------------------------------------------------------------------


// <!--Agregar Datos Balance-->
function agregarDatosBalance(cantidadNueva, cuenta, categoria, descripcion, fecha){
    var cadena="cantidadNueva="+cantidadNueva+
        "&cuenta="+cuenta+
        "&categoria="+categoria+
        "&descripcion="+descripcion+
        "&fecha="+fecha;
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


//Saldo balanceo
//Mostrar saldo de la cuenta que este por defecto al abrir modal
 $.post("./content/php/consults_info/mostrar_saldo_nuevo_ingreso_gasto.php", {
    cuenta : document.getElementById("cuenta").value,
    usuario : window.config[0].usuario
  }).done(function(e){
    let balacmodalbalanceo = document.getElementById("balacmodalbalanceo")
    if (e.match(/-/gim)){
        balacmodalbalanceo.className = "font-weight-bold font-italic badge badge-danger"
    } else {
        balacmodalbalanceo.className = "font-weight-bold font-italic badge badge-success"
    }
    balacmodalbalanceo.innerHTML = "$ " + e
  })