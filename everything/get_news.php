<?php

	include("db_global.php");
	

	$add_delete = htmlspecialchars($_GET['input']);
	$id = $_GET['id'];
	$id = intval($id - 1);

	$category =	htmlspecialchars($_GET['category']);
	$values = array(':category' => $category);

	// add the category
	$query = $db -> prepare("
		INSERT INTO `category` (`name`)
		VALUES (:category);
	");
	$query -> execute($values);

	$get_query = $db -> prepare("
			SELECT * FROM `category`
			LIMIT 6;
		");

	$get_query -> execute($id_array);

	$all_categories = $get_query -> fetchAll();

	echo json_encode($all_categories);

?>