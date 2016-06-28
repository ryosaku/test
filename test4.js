var base = "http://104.199.163.230";
var page = require("webpage").create();
page.onLoadFinished = verify;
var step = "open-login";
page.open(base + "/login");


function verify(status) {
	console.log(step);

	if (step == "open-login") {
		step = "fill-data";
		page.evaluate(function() {
			document.querySelector("[name=email]").value = "mark@fb.com";
			document.querySelector("[name=password]").value = "mark123";
			document.querySelector("[type=submit]").click();
		});
	} else if (step == "fill-data") {
		step = "open-logout";
		if (page.url == base + "/profile") {
			page.evaluate(function() {
				document.querySelector(".btn-danger").click();
			});
		} else {
			console.log("Test Case 4: FAILED");
		}
	} else if (step == "open-logout") {
		step = "open-profile";
		page.open(base + "/profile");
	} else if (step == "open-profile") {
		if (page.url == base + "/profile") {
			console.log("Test Case 4: FAILED");
		} else {
			console.log("Test Case 4: PASSED");
			page.render("test4.png");
		}
		phantom.exit();
	}
}
