<?php

	include("db_global.php");


	$query = $db -> prepare("
		SELECT `password` FROM `users` WHERE `username` = :username
		");

	$values = array(
		':username' => $_GET['user']);

	$query -> execute($values);

	$actualPass = $query->fetchColumn(0);
	//echo $actualPass;

	$hashed_password = crypt($_GET['password'], $actualPass);
	$hashed_password = substr($hashed_password, 0, 65);

	# invalid login  
	if ($hashed_password != $actualPass) {
		echo False;
	}
	# login successful
	else{
		echo True;
	}
?>