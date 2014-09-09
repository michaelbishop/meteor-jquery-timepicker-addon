Package.describe({
	summary: "jQuery UI Timepicker Addon",
	version: "0.1.0",
	name: "michaelbishop:jquery-timepicker-addon",
	git: "https://github.com/michaelbishop/meteor-jquery-timepicker-addon"
});

Package.onUse(function (api){
	api.addFiles('dist/jquery-ui-timepicker-addon.min.js', 'client');
	api.addFiles('dist/jquery-ui-timepicker-addon.min.css', 'client');
});
