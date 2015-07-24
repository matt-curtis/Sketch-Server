@import 'main.js'

//	--------
//	COMMANDS
//	--------

$.commands.createCommand("startServer", function(ctx){
	createServer();
});

$.commands.createCommand("startServerOnUserPort", function(ctx){
	createServerOnUserPort();
});