<?php
    /*
     * Este archivo ejecuta el algoritmo de pagos pendientes.
     * Una vez registrado la nueva secuencia de pagos.
     * -Se hace una consulta, donde obtiene fecha y estado(pagado o pendiente).
     * -Muestra o imprime los registros que aún no están pagados
     * 
     * --Crea nuevo registro automáticamente cuando llega la fecha del sig pago
     *   se obtiene la fecha del último registro y se le suman 7 días
     * 
     * --crea un nuevo registro automáticamente cuando llega la fecha del siguiente pago
     *   y cuando el registro es con una cantidad limitada de pagos, ya sea por fecha
     *   o por abono total.
     * 
     * 
     * 
     * 
     * dbconnect->consulta tabla pagos-> if estado es == a pendiente o no pagado
     * -> imprime datos ->
     * 
     * 
     */

    include 'conexion.php';
/*
    if($obj->conectar()){
        echo "<script> console.log('base de datos conectada') </script> ";
	}else{
		echo "error";
	}
*/
    $obj_mostrar = new mostrar();//mostrar pagos

    echo $obj_mostrar->mostrarDatos();//datos de pagos pendientes

    
