<?php
	$conectar = new conexion();
	$conexion = $conectar->conectar();

	$usuario = $_SESSION['user'];

	$consultaIngresosGen = "SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario'";
	$consultaGastosGen = "SELECT * FROM gastos WHERE usuario_gasto = '$usuario'";
	$resultadoIngresosGeneral = $conexion->query($consultaIngresosGen);
	$resultadoGastosGeneral = $conexion->query($consultaGastosGen);

	function get_data_time_balance($conexion, $usuario){ //Obtener la fecha o tiempo para filtrar balances
		$consultaConfiguracion = "SELECT * FROM usuarios WHERE nombre_usuario = '$usuario'";
		$cnf_result = $conexion->query($consultaConfiguracion);
		$fila = $cnf_result->fetch_object();

		$data_cnf = $fila->usr_config;
		$time = json_decode($data_cnf, TRUE);
		return $time["time_bal"];
	}

	function getMonthDays($Month, $Year){ //Obtener todos los dias de un mes
	   if(is_callable("cal_days_in_month")){
	      return cal_days_in_month(CAL_GREGORIAN, $Month, $Year);
	   } else {
	      return date("d",mktime(0,0,0,$Month+1,0,$Year));
	   }
	}


	$time_filter_balance = get_data_time_balance($conexion, $usuario);
	
	$mesActual = date('m');
	$diaActual = date('d');
	$añoActual = date('Y');

	//---------------------------------CALCULO DE BALANCE REAL-----------------------------------
	//-----------------------------------LISTADO DE CUENTAS---------------------------------
	$rescuenta = $conexion->query("SELECT * FROM cuentas WHERE usuario_cuenta = '$usuario'");
	$balacrealact = 0;
	$baldeud = 0;
	$calculo = 0;
	while ($filacuenta = $rescuenta->fetch_object()) { // Ingresos totales
		//Cuentas del usuario
		$calculo = $filacuenta->balance;

		//Sumar solamente numeros positivos, si hay un negativo no sumarlo
		if ($calculo > 0){
			$balacrealact += $calculo;
		} else {
			$baldeud += $calculo;
		}
	}
	echo "<span class='balactual'><span class='font-weight-bold'>Balance Real</span>: <span class='balactual_co' value='".$balacrealact."'>$ ". $balacrealact . "</span></span><br>";
	echo "<span class='baldeudas'><span class='font-weight-bold'>Deudas Acumuladas</span>: <span class='baldeudas_co' value='".$baldeud."'>$ ". $baldeud . "</span></span>";
	//------------------------------------------------------------------------------------

	if ($time_filter_balance === "5"){ // 2 meses atrás
		$month_before = $mesActual - 2; // 2 meses atrás
		$dias_total = getMonthDays($month_before, $añoActual); //Dias totales dle mes anterior
		$number_day_refer = ($dias_total + $diaActual) - $dias_total; //Total de dias del mes anterior mas los dias que lleva el mes actual menos 21, o sea menos 3 semanas
		$fecha_deseada_atras = $añoActual . "-" . $month_before . "-" . $number_day_refer; //Actividad desde hace 1 mes atrás
		
		$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND fecha_gasto >= '$fecha_deseada_atras' AND categoria_gasto != 'Transferencia'");

		$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND fecha_ingreso >= '$fecha_deseada_atras' AND categoria_ingreso != 'Transferencia'");

		$state = "Actividad 2 meses atrás";
		$statemonthweek = "2 meses atrás";
	} else if ($time_filter_balance === "4"){ //Hace un mes atrás desde la fecha actual
		$month_before = $mesActual - 1; // 1 meses atrás
		$dias_total = getMonthDays($month_before, $añoActual); //Dias totales dle mes anterior
		$number_day_refer = ($dias_total + $diaActual) - $dias_total; //Total de dias del mes anterior mas los dias que lleva el mes actual menos 21, o sea menos 3 semanas
		$fecha_deseada_atras = $añoActual . "-" . $month_before . "-" . $number_day_refer; //Actividad desde hace 1 mes atrás
		
		$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND fecha_gasto >= '$fecha_deseada_atras' AND categoria_gasto != 'Transferencia'");

		$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND fecha_ingreso >= '$fecha_deseada_atras' AND categoria_ingreso != 'Transferencia'");

		$state = "Actividad 1 mes atrás";
		$statemonthweek = "desde 1 mes atrás";
	} else if ($time_filter_balance === "3"){
		if ($diaActual > 7){
			$case = $diaActual - 21; //1/4 del ultimo mes, ultimas 3 semanas
			$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND DAY(fecha_gasto) >= '$case' AND MONTH(fecha_gasto) = '$mesActual' AND categoria_gasto != 'Transferencia'");

			$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND DAY(fecha_ingreso) >= '$case' AND MONTH(fecha_ingreso) = '$mesActual' AND categoria_ingreso != 'Transferencia'");
		} else {
			$month_before = $mesActual - 1; // 1 meses atrás
			$dias_total = getMonthDays($month_before, $añoActual); //Dias totales dle mes anterior
			$number_day_refer = ($dias_total + $diaActual) - 21; //Total de dias del mes anterior mas los dias que lleva el mes actual menos 21, o sea menos 3 semanas
			$fecha_deseada_atras = $añoActual . "-" . $month_before . "-" . $number_day_refer; //Actividad desde hace 3 semanas
			
			$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND fecha_gasto >= '$fecha_deseada_atras' AND categoria_gasto != 'Transferencia'");

			$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND fecha_ingreso >= '$fecha_deseada_atras' AND categoria_ingreso != 'Transferencia'");
		}
		$state = "Actividad en las últimas 3 semanas";
		$statemonthweek = "desde 3 semanas atrás";
		
	} else if ($time_filter_balance === "2"){
		if ($diaActual > 7){
			$case = $diaActual - 14;	 //2/4 del ultimo mes, ultimas 2 semanas
			$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND DAY(fecha_gasto) >= '$case' AND MONTH(fecha_gasto) = '$mesActual' AND categoria_gasto != 'Transferencia'");
			$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND DAY(fecha_ingreso) >= '$case' AND MONTH(fecha_ingreso) = '$mesActual' AND categoria_ingreso != 'Transferencia'");
		} else {
			$month_before = $mesActual - 1; // 1 meses atrás
			$dias_total = getMonthDays($month_before, $añoActual); //Dias totales dle mes anterior
			$number_day_refer = ($dias_total + $diaActual) - 14; //Total de dias del mes anterior mas los dias que lleva el mes actual menos 21, o sea menos 3 semanas
			$fecha_deseada_atras = $añoActual . "-" . $month_before . "-" . $number_day_refer; //Actividad desde hace 2 semanas
			
			$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND fecha_gasto >= '$fecha_deseada_atras' AND categoria_gasto != 'Transferencia'");

			$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND fecha_ingreso >= '$fecha_deseada_atras' AND categoria_ingreso != 'Transferencia'");
		}
		$state = "Actividad en las últimas 2 semanas";
		$statemonthweek = "desde 2 semanas atrás";
		
	} else if ($time_filter_balance === "1"){
		if ($diaActual > 7){
			$case = $diaActual - 7; //3/4 del ultimo mes, ultima semana
			$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND DAY(fecha_gasto) >= '$case' AND MONTH(fecha_gasto) = '$mesActual' AND categoria_gasto != 'Transferencia'");
			$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND DAY(fecha_ingreso) >= '$case' AND MONTH(fecha_ingreso) = '$mesActual' AND categoria_ingreso != 'Transferencia'");
		} else {
			//Retro diference
			$month_before = $mesActual - 1; // 1 meses atrás
			$dias_total = getMonthDays($month_before, $añoActual); //Dias totales dle mes anterior
			$number_day_refer = ($dias_total + $diaActual) - 7; //Total de dias del mes anterior mas los dias que lleva el mes actual menos 21, o sea menos 3 semanas
			$fecha_deseada_atras = $añoActual . "-" . $month_before . "-" . $number_day_refer; //Actividad desde hace 3 semanas
			
			$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND fecha_gasto >= '$fecha_deseada_atras' AND categoria_gasto != 'Transferencia'");

			$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND fecha_ingreso >= '$fecha_deseada_atras' AND categoria_ingreso != 'Transferencia'");
		}
		
		$state = "Actividad en la última semana";
		$statemonthweek = "esta semana";
	} else { //Tiempo personalizado por input data
		$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND fecha_gasto >= '$time_filter_balance' AND categoria_gasto != 'Transferencia'");
		$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND fecha_ingreso >= '$time_filter_balance' AND categoria_ingreso != 'Transferencia'");
		$state = "Actividad desde " . $time_filter_balance;
		$statemonthweek = "desde " . $time_filter_balance ;
	}

	if (!empty($resultadoIngresosGeneral) && $resultadoIngresosGeneral->num_rows > 0) {
		$x=0;
		$totalIngresos = 0;
		$totalGastos = 0;
		$totalIngresosGeneral = 0;
		$totalGastosGeneral = 0;

		while ($fila = $resultadoIngresosGeneral->fetch_object()) { // Ingresos totales
			$totalIngresosGeneral += $fila->cantidad_ingreso;
		}

		while ($fila = $resultadoGastosGeneral->fetch_object()) { // Gastos totales
			$totalGastosGeneral += $fila->cantidad_gasto;
		}
	
		while ($fila = $consultaIngresos->fetch_object()) { // Ingresos por filtro de tiempo
			$x++;
			$totalIngresos += $fila->cantidad_ingreso;
		}

		if ($consultaGastos->num_rows > 0) {
			while ($fila = $consultaGastos->fetch_object()) { //Gastos por filtro de tiempo
		   		$totalGastos += $fila->cantidad_gasto;
			}
		}

		
		echo "<br><br><span class='font-weight-bold text-secondary font-italic'>Valores según filtro</span>";
		echo "<br><br><span class='togasfil'><span class='font-weight-bold font-italic'>Total Gastos</span>: <span class='togasinitfil' value='{$totalGastos}'>$ {$totalGastos} </span><br></span>";
		echo "<span class='toinfil'><span class='font-weight-bold font-italic'>Total Ingresos</span>: <span class='toingresinitfil' value='{$totalIngresos}'>$ ". $totalIngresos . "</span><br></span>";
		echo "<span class='bafis'><span class='font-weight-bold font-italic'>Flujo ".$statemonthweek."</span>: <span class='balancefiltro' value='".$total = $totalIngresos - $totalGastos."'>$ " .$total = $totalIngresos - $totalGastos . "</span></span>";
	} else {
		echo "<br><br><span class='font-weight-bold text-secondary font-italic'>Valores según filtro</span>";
		echo "<br><br><span class='togasfil'><span class='font-weight-bold font-italic'>Total Gastos</span>: <span class='togasinitfil' value='0'>$ 0</span><br></span>";
		echo "<span class='toinfil'><span class='font-weight-bold font-italic'>Total Ingresos</span>: <span class='toingresinitfil' value='0'>$ 0</span><br></span>";
		echo "<span class='bafis'><span class='font-weight-bold font-italic'>Flujo</span>: <span class='balancefiltro' value='0'>$ 0</span></span>";
	}
?>