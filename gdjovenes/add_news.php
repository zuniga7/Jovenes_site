<?php

	include('db_global.php');

	// if they are logged in, then add message to db
	if (isset($_SESSION['username'])) {

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

		echo 1;
	}
	// used to debug
	else{
		echo 0;
	}
		
?>