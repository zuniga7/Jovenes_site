window.onload = start;

function start(){
	$('.flexslider').flexslider({
    animation: "slide"
  	});
}


function addNews () {

	var request = new XMLHttpRequest();
	request.open("GET", "", true);

	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
		}
	}
	request.send

}

function processLogin () {
	var username = $("#user").val();
	var password = $("#pass").val();

	var request = new XMLHttpRequest();
	request.open("GET", "processlogin.php?user="+username+"&pass="+password, true);

	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			var wasSuccessful = JSON.parse(request.responseText);
			// valid login
			if (wasSuccessful) {
				addNewsForm();
			} 
			else{
				badPass();
			}
		}
	}
	request.send
}

function addNewsForm () {
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

