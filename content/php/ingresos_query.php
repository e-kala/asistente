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

	if ($time_filter_balance === "5"){ // 2 meses
		$month_before = $mesActual - 1; // Un mes antes
		$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND DAY(fecha_gasto) > 0 AND MONTH(fecha_gasto) >= '$month_before' ");
		$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND DAY(fecha_ingreso) > 0 AND MONTH(fecha_ingreso) >= '$month_before'");
		$state = "Actividad en 2 meses";
	} else if ($time_filter_balance === "4"){ //Ultimo Mes, ultimas 3 semanas
		$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND DAY(fecha_gasto) > 0 AND MONTH(fecha_gasto) = '$mesActual' ");
		$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND DAY(fecha_ingreso) > 0 AND MONTH(fecha_ingreso) = '$mesActual'");
		$state = "Actividad en el último mes";
	} else if ($time_filter_balance === "3"){
		if ($diaActual > 7){
			$case = $diaActual - 21; //1/4 del ultimo mes, ultimas 3 semanas
			$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND DAY(fecha_gasto) >= '$case' AND MONTH(fecha_gasto) = '$mesActual'");
			$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND DAY(fecha_ingreso) >= '$case' AND MONTH(fecha_ingreso) = '$mesActual'");
		} else {
			$month_before = $mesActual - 1; // Un mes antes
			// HACER EN TODOS DONDE ESTE LA FUNCION RETRO_DIFERENCE
			$dias_total = getMonthDays($month_before, $añoActual);
			$number_day_refer = $dias_total - 21;
			
			$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND DAY(fecha_gasto) > '$number_day_refer' AND MONTH(fecha_gasto) >=  '$month_before'");

			$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND DAY(fecha_ingreso) >= '$number_day_refer' AND MONTH(fecha_ingreso) >= '$month_before'");

		}
		$state = "Actividad en las últimas 3 semanas";
		
	} else if ($time_filter_balance === "2"){
		if ($diaActual > 7){
			$case = $diaActual - 14;	 //2/4 del ultimo mes, ultimas 2 semanas
			$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND DAY(fecha_gasto) >= '$case' AND MONTH(fecha_gasto) = '$mesActual'");
			$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND DAY(fecha_ingreso) >= '$case' AND MONTH(fecha_ingreso) = '$mesActual'");
		} else {
			$month_before = $mesActual - 1; // Un mes antes
			// HACER EN TODOS DONDE ESTE LA FUNCION RETRO_DIFERENCE
			$dias_total = getMonthDays($month_before, $añoActual);
			$number_day_refer = $dias_total - 14;
			
			$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND DAY(fecha_gasto) > '$number_day_refer' AND MONTH(fecha_gasto) >=  '$month_before'");

			$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND DAY(fecha_ingreso) >= '$number_day_refer' AND MONTH(fecha_ingreso) >= '$month_before'");
		}
		$state = "Actividad en las últimas 2 semanas";
		
	} else if ($time_filter_balance === "1"){
		if ($diaActual > 7){
			$case = $diaActual - 7; //3/4 del ultimo mes, ultima semana
			$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND DAY(fecha_gasto) >= '$case' AND MONTH(fecha_gasto) = '$mesActual'");
			$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND DAY(fecha_ingreso) >= '$case' AND MONTH(fecha_ingreso) = '$mesActual'");
		} else {
			//Retro diference
			$month_before = $mesActual - 1; // Un mes antes
			$dias_total = getMonthDays($month_before, $añoActual);
			$number_day_refer = $dias_total - 7;
			
			$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND DAY(fecha_gasto) > '$number_day_refer' AND MONTH(fecha_gasto) >=  '$month_before'");

			$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND DAY(fecha_ingreso) >= '$number_day_refer' AND MONTH(fecha_ingreso) >= '$month_before'");
		}
		$state = "Actividad en la última semana";
	} else { //Tiempo personalizado por input data
		$consultaGastos = $conexion->query("SELECT * FROM gastos WHERE usuario_gasto = '$usuario' AND fecha_gasto >= '$time_filter_balance'");
		$consultaIngresos = $conexion->query("SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario' AND fecha_ingreso >= '$time_filter_balance'");
		$state = "Actividad desde " . $time_filter_balance;
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

		echo "<span class='balactual'><span class='font-weight-bold'>Balance Actual</span>: $ ". $totali = $totalIngresosGeneral - $totalGastosGeneral . "</span>";
		echo "<br><br><span class='font-weight-bold text-secondary font-italic'>Valores según filtro</span>";
		echo "<br><br><span class='togasfil'><span class='font-weight-bold font-italic'>Total Gastos</span>: $ {$totalGastos} <br></span>";
		echo "<span class='toinfil'><span class='font-weight-bold font-italic'>Total Ingresos</span>: $ ". $totalIngresos . "<br></span>";
		echo "<span class='bafis'><span class='font-weight-bold font-italic'>Balance</span>: $ " .$total = $totalIngresos - $totalGastos . "</span>";
	}
?>