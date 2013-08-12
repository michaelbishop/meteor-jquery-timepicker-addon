Package.describe({
	summary: "jQuery UI Timepicker Addon"
});

Package.on_use(function (api){
	api.add_files('dist/jquery-ui-timepicker-addon.min.js', 'client');
	api.add_files('dist/jquery-ui-timepicker-addon.min.css', 'client');
});