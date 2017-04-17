import {app} from './app';
const port = 3000,
	server = app.listen(port, function() {
		console.log('Express server listening on port ' + port);
	});
