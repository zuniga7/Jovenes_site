window.onload = start;

function start(){
	$('.flexslider').flexslider({
    animation: "slide"
  	});
}

function getNews () {
	var request = new XMLHttpRequest();
	request.open("GET", "", true);

	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			$(".news").append();
		}
	}
	request.send
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
	$(".afterNavBar").empty();
	$("#panel-right").panel("close");

	
	var form = "<div class='container'>"+
    "  <form class='form-signin' id='newsform' method='post' onsubmit='addNews()'>"+
    "    <h2 class='heading'>New Message!</h2>"+
    "    <div class='alerts'></div>"+
    "     <div class='control-group'>"+
    "        <input type='text' id='newsTitle' class='input-block-level' name='newsTitle' placeholder='Title' required>"+
    "        <textarea class='input-block-level' aid='newsMessage' placeholder='Message' required></textarea>"+
    "    </div>"+
    "    <button class='btn btn-primary btn-large' type='submit'>Submit</button>"+
    "  </form>"+
    "</div>";

    $(".afterNavBar").append(form);
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

