<button class="login-change-way   text-light font-weight-bold">Iniciar Sesión de otra manera</button>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head> 
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>


    <script src="content/js/alertifyjs/alertify.js" charset="utf-8"></script>
    <script src="content/js/notify.js" charset="utf-8"></script>
    <script src="https://cdn.jsdelivr.net/gh/alyssaxuu/flowy/flowy.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

    <!--Obtener Fecha-->
    <script>
        $(function(){
            var now = new Date();

            var day = ("0"+now.getDate()).slice(-2);
            var month = ("0"+(now.getMonth()+1)).slice(-2);

            var today = now.getFullYear()+"-"+(month)+"-"+(day);
            console.log(today);
            $(".fecha").val(today);
        });
    </script>
    
    <!--Subir Ingreso-->
    <script type="text/javascript">
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
    </script>

    <!--Agregar Datos Ingreso-->
    <script type="text/javascript">
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
                                /*
                                success:function(r){
                                    if (r==1) {
                                        console.log(r);
                                        alertify.success("agregado con exito");

                                    }else {
                                        alertify.error("Falla");
                                    }*/


    </script>


    <!-- Script Muestra Último Ingreso -->
    <script type="text/javascript">
        $(function(){
            $.ajax({
                url: "content/php/info.php",
                dataType: "json"
            }).done(function(res){
                $.each(res, function(ix, dat){
                    console.log(dat);
                    $('#info').append("<b>Fecha</b>: " + dat.fecha_ingreso+"<br>");
                    $('#info').append("<b>Categoría</b>: " + dat.categoria_ingreso+"<br>");
                    $('#info').append("<b>Cantidad:</b> " + dat.cantidad_ingreso+"<br>");
                    $('#info').append("<b>Descripción:</b> " + dat.descripcion_ingreso+"<br>");
                    //$('#info').load("php/info.php");


                    //return(i !== 0);
                });
                //console.log(res);
                //res = JSON.parse(res);
                //$('#info').append(res);
            });

        })
    </script>

    <!-- Script Muestra Último Gasto -->
    <script type="text/javascript">
        $(function(){
            $.ajax({
                url: "content/php/ultimoGasto.php",
                dataType: "json"
            }).done(function(res){
                $.each(res, function(ix, dat){
                    console.log(dat);
                    $('#ultimoGasto').append("<b>Fecha</b>: " + dat.fecha_gasto+"<br>");
                    $('#ultimoGasto').append("<b>Categoría</b>: " + dat.categoria_gasto+"<br>");
                    $('#ultimoGasto').append("<b>Cantidad:</b> " + dat.cantidad_gasto+"<br>");
                    //$('#info').load("php/info.php");
                    $('#ultimoGasto').append("<b>Descripción:</b> " + dat.descripcion_gasto+"<br>");


                    //return(i !== 0);
                });

                //console.log(res);
                //res = JSON.parse(res);
                //$('#info').append(res);
            });

        })
    </script>


    <script type="text/javascript">
        if (jQuery) {
            console.log("jQuery esta cargado");
        } else {
            console.log("jQuery no esta cargado");
        }
    </script>


    <!--Subir Gasto-->
<script type="text/javascript">
    $(function(){
        $('#subirGasto').click(function(){
            cantidadGasto=$('#cantidadGasto').val();
            cuenta=$('#cuenta').val();
            categoriaGasto=$('#categoriaGasto').val();
            descripcionGasto=$('#descripcionGasto').val();
            fecha=$('.fecha').val();
            console.log(cantidadGasto +cuenta+ categoriaGasto + descripcionGasto + fecha);
            agregarDatosGasto(cantidadGasto,cuenta,categoriaGasto,descripcionGasto,fecha);

        });
    });
</script>
<!--Agregar Datos Gasto-->
<script type="text/javascript">
    function agregarDatosGasto(cantidadGasto, cuenta, categoriaGasto, descripcionGasto, fecha){
                    var cadena="cantidadGasto="+cantidadGasto+
                        "&cuenta="+cuenta+
                        "&categoriaGasto="+categoriaGasto+
                        "&descripcionGasto="+descripcionGasto+
                        "&fecha="+fecha;
                        //console.log(cadena);
                        $.ajax({
                            url:"content/php/subirGasto.php",
                            type: 'GET',
                            data: cadena,
                            processData: false,
                            contentType: false,
                            cache: false
                        }).done(function(res){
                            console.log(res);
                            //console.log("correcto");
                            cantidadGasto=$('#cantidadGasto').val('');
                            cuenta = $('#cuenta').val('');
                            categoriaGasto = $('categoriaGasto').val('');
                            descripcionGasto=$('#descripcionGasto').val('');
                            fecha=$('#fecha').val('');

                            $('#modalGasto').modal('toggle');
                            $.notify("Registro Correcto", "success");
                            location.reload();
                        }).fail(function(){
                            alert('fail');
                        });
    }
                            /*
                            success:function(r){
                                if (r==1) {
                                    console.log(r);
                                    alertify.success("agregado con exito");

                                }else {
                                    alertify.error("Falla");
                                }*/


</script>
<script>
function agregarDatosGasto(cantidadGasto,cuenta,categoriaGasto,descripcionGasto, fecha){
                var cadena="cantidadGasto="+cantidadGasto+
                    "&cuenta="+cuenta+
                    "&categoriaGasto="+categoriaGasto+
                    "&descripcionGasto="+descripcionGasto+
                    "&fecha="+fecha;
                    //console.log(cadena);
                    $.ajax({
                        url:"content/php/subirGasto.php",
                        type: 'GET',
                        data: cadena,
                        processData: false,
                        contentType: false,
                        cache: false
                    }).done(function(res){
                        console.log(res);
                        //console.log("correcto");
                        cantidadGasto=$('#cantidadGasto').val('');
                        categoriaGasto=$('#categoriaGasto').val('');
                        descripcionGasto=$('#descripcionGasto').val('');

                        $('#modalGasto').modal('toggle');
                        $.notify("Registro Correcto", "success");
                        location.reload();
                    });
}
</script>

<script type="text/javascript" src="./content/js/animations.js"></script>
<script type="text/javascript" src="./content/js/mode_login.js"></script>

<script type="text/javascript" src="./content/js/patron.js"></script>
<script type="text/javascript" src="./content/js/manager_patron.js"></script>

<script type="text/javascript" src="./content/js/redesign_responsive.js"></script>