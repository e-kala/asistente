
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
        console.log("ok");

        $("#cuentaGasto").load("content/php/modulos/cuentas/consultar_cuentas.php", function(data){
            console.log(data);
            let conversion = JSON.parse(data);
            console.log(conversion);
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