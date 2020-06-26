<?php

	if ($_POST) {
		session_start();

		$pass = $_POST['pass'];

		if ($pass == "12345") {
			$_SESSION['login'] = TRUE;
			header('location: ../../index.php');
		}else{
			header('location: ../../index.php?pass=error');
		}
	}

?>