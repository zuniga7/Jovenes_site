//window.onload = start;

jQuery(function(){
			
	jQuery('#camera_wrap_2').camera({
		height: '400px',
		loader: 'bar',
		pagination: false,
		thumbnails: false
	
	});
});




function addNews () {
	
}

function signIn () {
	// body...
}

function badPass () {
	$(".control-group").attr("class", "control-group error");
	var alert = $(".alerts");
	alert.attr("class", "alert alert-block alert-error fade in");
	alert.append('<h4 class="alert-heading">Invalid Login!</h4>Bad username and password combination!');
}

function registerSuccess () {
	var alert = $(".alerts");
	alert.attr("class", "alert alert-block alert-success fade in");
	alert.append('<h4 class="alert-heading">Success!</h4>Your action was completed successfully!');
}

