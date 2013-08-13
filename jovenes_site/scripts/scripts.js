// when window loads
$(window).load(function() {	
    $('.flexslider').flexslider({
        animation: "slide"
    });
  
  	// load news into page
  	getNews();
});

function getNews () {
	var request = new XMLHttpRequest();
	request.open("GET", "get_news.php", true);

	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			var six_news = JSON.parse(request.responseText);

			// make a div for each news post
			for(var x = 0; x < six_news.length; x++){
				var post = "<div class='post'>"+
		          "<h3 class='heading'>"+six_news[x]['title']+"</h3>"+
		          "<p class='message'>"+six_news[x]['message']+"</p>"+
		          "<div class='timestamp pull-right'>"+six_news[x]['time']+"</div>"+
		        "</div>";
			
				$(".news").append(post);
			}
		}
	}
	request.send();
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
			if (wasSuccessful == 1) {
				registerSuccess();

				// close panel & empty page content
				$(".afterNavBar").empty();
				$("#panel-right").panel("close");				

				// show form
				var form = "<div class='container'>"+
			    "  <form class='form-signin' id='newsform' action='javascript:addNews();'>"+
			    "    <h2 class='heading'>New Message!</h2>"+
			    "    <div class='alerts'></div>"+
			    "     <div class='control-group'>"+
			    "        <input type='text' id='newsTitle' class='input-block-level' name='newsTitle' placeholder='Title' required>"+
			    "        <textarea class='input-block-level' id='newsMessage' placeholder='Message' required></textarea>"+
			    "    </div>"+
			    "    <input type='submit' id='submitButton' class='btn btn-primary btn-large' value='Submit!'>"+
			    "  </form>"+
			    "</div>";				

		    	$(".afterNavBar").append(form);
			} 
			else{
				badPass();
			}
			// erase the user/pass fields
			$("#user").val("");
			$("#pass").val("");
		}
	}
	request.send();
}

function addNews () {
	var title = $("#newsTitle").val();
	var content = $("#newsMessage").val();

	if (title == "" || content == "") {
		return;
	}

	var request = new XMLHttpRequest();
	request.open("GET", "add_news.php?title="+title+"&content="+content, true);

	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			registerSuccess();
		}
	}
	request.send();
}

function badPass () {
	$(".control-group").attr("class", "control-group error");
	var alert = $("#form-alert");
	alert.empty();
	alert.attr("class", "alert alert-block alert-error fade in");
	alert.append('<h4 class="alert-heading">Invalid Login!</h4>Bad username and password combination!');
}

function registerSuccess () {
	// reset sign in form
	$("#form-alert").empty();
	$("#form-alert").attr("class", "alerts");
	
	// all alerts
	var alert = $(".alerts");
	alert.empty();
	alert.attr("class", "alert alert-block alert-success fade in");
	alert.append('<h4 class="alert-heading">Success!</h4>Your action was completed successfully!');
}

