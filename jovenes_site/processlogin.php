<?php

	include("db_global.php");


	$query = $db -> prepare("
		SELECT `password` FROM `users` WHERE `username` = :username
		");

	$values = array(
		':username' => $_GET['user']);

	$query -> execute($values);

	$actualPass = $query->fetchColumn(0);
	//echo $actualPass."... ";

	$hashed_password = crypt($_GET['pass'], $actualPass);
	$hashed_password = substr($hashed_password, 0, 65);
	//echo $hashed_password;

	# invalid login  
	if ($hashed_password != $actualPass) {
		echo 0;
	}
	# login successful
	else{
		session_start();
		$_SESSION['username'] = $_GET['user'];
		
		echo 1;
	}
?>