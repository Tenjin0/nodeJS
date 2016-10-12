console.log('tentative numero 1\n');
try{

console.log('numero 1 :about to throw an error');
throw new Error('numero 1 :ceci est une erreur');

}catch(e){
	console.log('numero 1 :attrapage de l erreur');
	console.log(e.message);
}finally{
	console.log('numero 1 :Passage oblige par finally\n');
}

console.log('tentative numero 2 avec setTimeOut\n');
// var foo1 = function(connection){

// 	try{
// 		if(connection == undefined){
// 			setTimeout((function(){
// 				console.log('numero 2 : about to throw an error');
// 				throw new Error('numero 2 :ceci est une erreur');
// 			}),1000);
// 		}
// 	}catch(e){
// 		console.log('numero 2 :attrapage de l erreur');
// 		console.log(e.message);
// 	}finally{
// 		console.log('numero 2 :Passage oblige par finally');
// 	}
// };

console.log('tentative numero 3 avec setTimeOut avec callback\n');
var foo2 = function(connection, callback){
	try{
		if(connection == undefined){
			setTimeout((function(){
				console.log('numero 3 :about to throw an error');
				throw new Error('numero 3 :ceci est une erreur');
				callback('numero 3 :ceci est une erreur',null)
			}),1000);
		}else{
			callback(null,connection);
		}
	}catch(e){
		console.log('numero 3 :attrapage de l erreur par catch');
		console.log(e.message);
		callback(e.message,connection);
	}finally{
		console.log('numero 3 :Passage oblige par finally');
	}
};

//foo1(null);
foo2(true,function(error,data){
	if(error){
		console.log('error', error);
	}else{
		console.log('data :', data);
	}
});


