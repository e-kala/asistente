
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



$(function(){
    $("#deCuentaTransferencia").change(function(){
        valor = $("#deCuentaTransferencia").val();
        console.log(valor);
        var url = "content/php/modulos/cuentas/saldo_cuentas.php";
        
        $.ajax({
            type : "POST",
            url : url,
            data : {"cuenta" : valor},
            dataType : "JSON"
        }).done(function(res) {
            console.log(res);
            $("#saldoDisponible").empty();
            $("#saldoDisponible").append(" Saldo Disponible: <b>$" + res.resultado + "</b>");

        }); 
    });
});
        
