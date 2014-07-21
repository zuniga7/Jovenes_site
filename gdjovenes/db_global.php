<?php

 	session_start();

 	// Enables PHP errors to be shown in the browser
 	ini_set("display_errors", 1);
	
	/*
 	* The following code creates a db object to connect to the
 	* database in the CGI server. You need to include this file
 	* in all other files that use the database.
 	*
 	* The password you use here is not the CS password or the NetID password.
 	* It's the password that lab staff sent you when the MySQL account was created.
 	*
 	* Place holders: groupname = Your MySQL group name
 	* password = Your MySQL password
 	* databasename = Check the email <mostly it is in the format netid_groupname>
 	*/

/*	$db = new PDO(
		"mysql:host=mysql.cs.arizona.edu;
		dbname=zuniga7_cs337z1", 
		"cs337z1", "expl0siv");
*/	
	$db = new PDO(
		"mysql:host=localhost;
		dbname=hzuniga_gdj", 
		"hzuniga", "nogales7");

	$db -> exec("set names utf8");
?>
