<?php
include "../conexion.php";
	if ($_POST){
		session_start();
		$usuario = $_POST['usuario'];
		$time_filter_balance = $_POST['time_bal'];

		$conectar = new conexion();
		$conexion = $conectar->conectar();

		$consultaIngresosGen = "SELECT * FROM ingresos WHERE usuario_ingreso = '$usuario'";
		$consultaGastosGen = "SELECT * FROM gastos WHERE usuario_gasto = '$usuario'";
		$resultadoIngresosGeneral = $conexion->query($consultaIngresosGen);
		$resultadoGastosGeneral = $conexion->query($consultaGastosGen);


		function getMonthDays($Month, $Year){ //Obtener todos los dias de un mes
		   if(is_callable("cal_days_in_month")){
		      return cal_days_in_month(CAL_GREGORIAN, $Month, $Year);
		   } else {
		      return date("d",mktime(0,0,0,$Month+1,0,$Year));
		   }
		}


		
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

			$response["BalanceActual"] = $balacrealact;
			$response["Baldeudas"] = $baldeud;
			$response["TotalGastosFiltro"] = $totalGastos;
			$response["TotalIngresosFiltro"] = $totalIngresos;
			$response["BalanceFiltro"] = $totalIngresos - $totalGastos;
			$response["Status"] = $state;
			$response["Statebalancefiltro"] = $statemonthweek;

			$json = json_encode($response, TRUE);

			echo $json;

		}
	}
?>