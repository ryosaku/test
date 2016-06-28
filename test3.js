var base = "http://104.199.163.230";
var page = require('webpage').create();
page.onLoadFinished = verify;
var step = 'open';
page.open(base + "/login");

function verify(status) {
	if (step == 'open') {
		step = 'fill';
		page.evaluate(function() {
			document.querySelector('[name=email]').value = 'mark@fb.com';
			document.querySelector('[name=password]').value = 'mark123';
			document.querySelector('[type=submit]').click();
		});
	} else if (step == 'fill') {
		if (page.url == base + "/profile") {
			console.log("Test Case 1: is passed");
			page.render("test-1.png")
		} else {
			console.log("Test Case 1: is failed");
		}
		phantom.exit();
	}
}
