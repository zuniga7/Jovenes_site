<?php

	include('db_global.php');

	$name = htmlspecialchars($_GET['title']);
	$content = htmlspecialchars($_GET['content']);
	
	$values = array(':title' => $name, 
					':content' => $content);
	
	// category was or is now in db
	$final_query = $db -> prepare("
		INSERT INTO `news` (`title`, `message`,`time`)
		VALUES(:title, :content, CURRENT_TIMESTAMP)
		");
	
	$final_query -> execute($values);
	
?>