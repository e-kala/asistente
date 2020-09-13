
$(function(){
    $("#modalIngreso").click(function(){
        console.log("ok");

        $("#cuenta").load("content/php/modulos/cuentas/consultar_cuentas.php", function(data){
            console.log(data);
            let conversion = JSON.parse(data);
            console.log(conversion);
            $.each(conversion, function (i, val) {
                if(i==0){
                    $("#cuenta").append("<option selected>"+val+"</option>");

                }else{
                    $("#cuenta").append("<option>"+val+"</option>");
                }
                console.log(val);
                
            });
            
            //Mostrar saldo de la cuenta que este por defecto al abrir modal
             $.post("./content/php/consults_info/mostrar_saldo_nuevo_ingreso_gasto.php", {
                cuenta : document.getElementById("cuenta").value,
                usuario : window.config[0].usuario
              }).done(function(e){
                let balacmodalin = document.getElementById("balacmodalin")
                if (e.match(/-/gim)){
                    balacmodalin.className = "font-weight-bold font-italic badge badge-danger"
                } else {
                    balacmodalin.className = "font-weight-bold font-italic badge badge-success"
                }
                balacmodalin.innerHTML = "$ " + e
              })
        });
    });
    
});

$(function(){
    $("#modalGasto").click(function(){

        $("#cuentaGasto").load("content/php/modulos/cuentas/consultar_cuentas.php", function(data){
//            console.log(data);
            let conversion = JSON.parse(data);
  //          console.log(conversion);
            $.each(conversion, function (i, val) {
                if(i==0){
                    $("#cuentaGasto").append("<option selected>"+val+"</option>");

                }else{
                    $("#cuentaGasto").append("<option>"+val+"</option>");
                }
                console.log(val);
                
            });

            $.post("./content/php/consults_info/mostrar_saldo_nuevo_ingreso_gasto.php", {
                cuenta : document.getElementById("cuentaGasto").value,
                usuario : window.config[0].usuario
              }).done(function(e){
                let balacmodalga = document.getElementById("balacmodalga")
                if (e.match(/-/gim)){
                    balacmodalga.className = "font-weight-bold font-italic badge badge-danger"
                } else {
                    balacmodalga.className = "font-weight-bold font-italic badge badge-success"
                }
                balacmodalga.innerHTML = "$ " + e
              })
        });
    });
    
});


$(function(){
    $("#modalBalance").click(function(){
        console.log("ok");

        $("#cuenta").load("content/php/modulos/cuentas/consultar_cuentas.php", function(data){
            console.log(data);
            let conversion = JSON.parse(data);
            console.log(conversion);
            $.each(conversion, function (i, val) {
                if(i==0){
                    $("#cuenta").append("<option selected>"+val+"</option>");

                }else{
                    $("#cuenta").append("<option>"+val+"</option>");
                }
                console.log(val);
                
            });
            
            //Mostrar saldo de la cuenta que este por defecto al abrir modal
             $.post("./content/php/consults_info/mostrar_saldo_nuevo_ingreso_gasto.php", {
                cuenta : document.getElementById("cuenta").value,
                usuario : window.config[0].usuario
              }).done(function(e){
                let balacmodalin = document.getElementById("balacmodalin")
                if (e.match(/-/gim)){
                    balacmodalin.className = "font-weight-bold font-italic badge badge-danger"
                } else {
                    balacmodalin.className = "font-weight-bold font-italic badge badge-success"
                }
                balacmodalin.innerHTML = "$ " + e
              })
        });
    });
    
});


$(function(){
    console.log("ok");
    $("#aCuentaTransferencia").load("content/php/modulos/cuentas/consultar_cuentas.php", function(data){
        
        //console.log(data);
        
        let conversion = JSON.parse(data);
        
        //console.log(conversion);
        
        $.each(conversion, function (i, val) {
            if(i==0){
               // $("#deCuentaTransferencia").append("<option selected>Selecciona una cuenta</option>");
                $("#deCuentaTransferencia").append("<option>"+val+"</option>");

            }else{
                $("#deCuentaTransferencia").append("<option>"+val+"</option>");
            }
            //console.log(val);
            
        });

        $.each(conversion, function (i, val) {
            if(i==0){
                $("#aCuentaTransferencia").append("<option selected>Selecciona una cuenta</option>");
                $("#aCuentaTransferencia").append("<option>"+val+"</option>");

            }else{
                $("#aCuentaTransferencia").append("<option>"+val+"</option>");
            }
            //console.log(val);
            
        });
    });
});


var q;

$(function(){
    $("#deCuentaTransferencia").change(function(){
        var cuenta = $(this).val();
        console.log(cuenta);
        var url = "content/php/modulos/cuentas/saldo_cuentas.php";
        $("#saldoDisponible").empty();
        
        $.ajax({
            type : "POST",
            url : url,
            data : {"cuenta" : cuenta},
            dataType : "JSON"
        }).done(function(res) {
            console.log(res);
            $("#saldoDisponible").append(" Saldo Disponible: <b>$" + res.resultado + "</b>");
            q = res.resultado;
        }); 

        $("#cantidadTransferencia").keydown(function(){
            
            var cantidad = $(this).val();
            
            $(this).keyup(function(){
                cantidad = $(this).val();
                console.log(cantidad);
                console.log(q);

                if (cantidad > q){
                    $(this).notify("No puedes transferir más del saldo disponible", "warn");
                }
            });

        });
    });
});
        
