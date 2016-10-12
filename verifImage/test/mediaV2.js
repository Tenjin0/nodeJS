



module.exports.check = function(filePath, callback){
	var fs = require('fs');
	var path = require('path');

	// signature image format
	var signatureMap = {
		'.png' : {
			tab : ['89504E470D0A1A0A']},
		'.jpg' :{
			tab : ['FFD8FF']
		},
		'.jpeg' :{
			tab : ['FFD8FF']
			},
		'.gif' :
		{ tab : ['47494638'] },
		'.bmp' :
		{ tab : ['424D'] },
		'.avi' :
			{ tab : ['41564920'] },
		'.mkv' :
			{ tab : ['1A45DFA3'] },

		'.mp4' :{
			position : 4,
			tab : ['667479706D703432', '6674797069736F6D', '6674797033677035'] },
		'.mp3' :{
			tab : ['494433', 'FFFB', 'FFF3', 'FFE3']
			}

	};

	for(var ext in signatureMap){
		for (var sign in signatureMap[ext].tab){
			signatureMap[ext].tab[sign] = new Buffer(signatureMap[ext].tab[sign],'hex');
			// console.log(ext, sign ,'=>', signatureMap[ext].tab[sign]);
		}

	// signatureMap[ext].tab = new Buffer(signatureMap[ext].tab, 'hex');
	// console.log('Map',sign, signatureMap[ext], signatureMap[ext].tab, signatureMap[ext].tab.length);
	}

	absPath = path.join(__dirname, filePath);
	fs.stat(absPath, function (err, stat){
		if(err){
			// console.log('err stat', err);
			callback(err,null);
		}else {
			var ext = path.extname(filePath);
			var signature = signatureMap[ext].tab;
			var position = signatureMap[ext].position || 0;
			// console.log(path.basename(absPath),ext, signature[0], position, signature[0].length);
			fs.open(absPath,'r',function (err,fd){
				if(err){
					// console.log('err open', err);
					callback(err,null);
				}else{
					var buffer = new Buffer(signature[0].length);
					fs.readSync(fd,buffer,0,buffer.length,position);
					// console.log('buffer file',buffer);
					var result = validate(ext, buffer);
					// console.log('result', result);
					callback(null, result);
				}
			});

			// console.log('isFile',stat.isFile());
			// console.log('stat size', stat.size);
			// var temp Buffer.
		}

	});


	function validate(ext,buffer){

			if (signatureMap[ext]){
				for (var sign in signatureMap[ext].tab){
					console.log(ext,signatureMap[ext].tab[sign],buffer );
					if(signatureMap[ext].tab[sign].equals(buffer)){
						return true;
					}
				}
			}
			return false;

	}
};
