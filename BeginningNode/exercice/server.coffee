http = require 'http'
path = require 'path'
fs = require 'fs'

contentTypeMap =
	'.js' : 'text/javascript'
	'.css' : 'text/css'
	'.html' : 'text/html'

simpleHtml = '<!DOCTYPE html>
<html>
<head>
	<title>Webserver Test</title>
	<meta charset="utf-8">
</head>
<body>
	Min1.html
	Ceci est le body
</body>
</html>
'

server = http.createServer (req,resp) ->
	console.log 'request starting ...',req.url
	# resp.write 'Hello client'
	# resp.end

	# console.log req.url
	filepath = '.' + req.url
	if filepath is './'
		filepath = './index.html'
	extension =path.extname filepath
	# console.log filepath
	# resp.writeHead(200 , {'content-Type': contentTypeMap[extension]})
	# resp.end(simpleHtml, 'utf-8')
	fs.readFile filepath, (error,content)->
		if error
			# console.log error
			resp.writeHead 500
			resp.end()
		else
			# console.log content.toString()
			resp.writeHead(200 , {'content-Type': contentTypeMap[extension]})
			resp.end(content, 'utf-8')
server.listen 3000
console.log 'Server running at http://127.0.0.1:3000/'