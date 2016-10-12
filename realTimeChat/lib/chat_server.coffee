http = require 'http'
fs = require 'fs'
path = require 'path'
mime = require 'mime'

class utils
	constructor: ()->
		console.log 'instanciation d\'un outil'

	send404: (response)->
		
