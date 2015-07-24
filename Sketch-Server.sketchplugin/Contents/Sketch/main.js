@import 'SketchLibrary.js'

//	Load Bundle

if($.runtime.classExists("MCSketchServersManager") == false){
	$.runtime.loadBundle($.paths.resourcesPath+"/Sketch-Server.bundle");
}

//	Server creation

var getLastUsedPort = function(){
	var NS_lastUsedPort = [MCSketchServersManager lastUsedPort];

	return NS_lastUsedPort ? NS_lastUsedPort.integerValue() : null;
};

var createServer = function(port){
	if(!port) port = getLastUsedPort();

	var server = [[MCSketchServersManager manager] createServerOnPort:port document:$.context.document];

	if(server){
		$.prompt("Server started at URL: ", server.URLString());
	} else {
		$.alert("Failed to start server.");
	}
};

var createServerOnUserPort = function(){
	var port = $.prompt("Enter port:", getLastUsedPort());
	var pressedOK = (port !== null);

	if(pressedOK){ // OK
		createServer(parseInt(port));

		lastUsedPort = parseInt(port);
	}
};