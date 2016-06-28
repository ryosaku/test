var page = require('webpage').create();
page.viewportSize = {width: 1024, height:768}

page.onLoadFinished = success;
page.open("http://taskrabbit.com");

function success(status) {
	page.render("test1.png");
	phantom.exit();
}