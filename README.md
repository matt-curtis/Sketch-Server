# Sketch Server

Sketch Server is plugin for Sketch that creates a local web server for your Sketch Documents.

## How to use it ##

Sketch Server adds two items to the Plugins Menu:

![](https://i.imgur.com/ZEmnVPP.png)

- Start Server

  Starts a local server for the open document on a random available port.
  
- Start Server on Port...

  Starts a local server on a port specfied by you.
  
  
Each document can have it's own port, so you will need to start a server for individual documents.
After you've created a server instance for a given document, you can visit it using the URL Sketch Server gives you.

![](https://i.imgur.com/gEhh23W.png)

## Previewing ##

You can specify both page, artboard, and what kind of content the server returns to you. For example:

     http://127.0.0.1:8888/?artboard=2&page=4
     
Artboard & Page numbers are zero-based, so that will give you the 3rd artboard on page 5 of your document. Omitting the `page` parameter will default to the current page open in that document.

By default, Sketch Server returns an HTML page containing your image.
If you'd like just the image (png), you can add an additional query parameter:

     http://127.0.0.1:8888/?artboard=2&page=4&serveImage=1
