<?php

	include("db_global.php");

	$get_query = $db -> prepare("
			SELECT * FROM `news`
			LIMIT 6;
		");

	$get_query -> execute();

	$all_categories = $get_query -> fetchAll();

	// return news
	echo json_encode($all_categories);

?>