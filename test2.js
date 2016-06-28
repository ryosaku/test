var page = require('webpage').create();
page.viewportSize = { width: 1024, height:768 };
page.onLoadFinished = verify;

var url = [
	"http://taskrabbit.com/about",
	"http://taskrabbit.com/signup",
	"http://taskrabbit.com/help"
];

var file = [
	"about.png", "signup.png", "help.png"
]

var step = 0;
page.open(url[step]);

function verify(status) {
	console.log(url[step] + " loaded");
	page.render(file[step]);
	step++;
	if (step == url.length) {
		phantom.exit();
	} else {
		page.open(url[step]);
	}
}