var mediaV1 = require('./media');
var mediaV2 = require('./mediaV2');
var filePath = './work/ATOMSK.jpg';
// var filePath = './work/false.jpg';
var filePath = './work/nyan.mp4';
// 
var test = 2;

if (test == 1){
	mediaV1.check(filePath,function(err,result){
		if(err){
			console.log('err',err);
		}else {
			console.log('result', result);
		}
});
}
if ( test == 2){
	mediaV2.check(filePath,function(err,result){
		if(err){
			console.log('err',err);
		}else {
			console.log('result', result);
		}
	});
}



