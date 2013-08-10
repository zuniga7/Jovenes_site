<?php

	include('db_global.php');

	$name = htmlspecialchars($_POST['title']);
	$content = htmlspecialchars($_POST['content']);


	$final_query = $db -> prepare("
		INSERT INTO `blogs` (`title`, `message`, `category_id`, `category_name`,`time`)
		VALUES(:title, :content, :category_id, :category_name, CURRENT_TIMESTAMP)
		");
	
	$final_query -> execute($values);
	}
	else{

		$values = array(':title' => $name, 
						':content' => $content,
						':category_id' => $category_id[0],
						':category_name' => $category);

		// category was or is now in db
		$final_query = $db -> prepare("
			INSERT INTO `blogs` (`title`, `message`, `category_id`, `category_name`,`time`)
			VALUES(:title, :content, :category_id, :category_name, CURRENT_TIMESTAMP)
			");
		
		$final_query -> execute($values);
	}
	
?>