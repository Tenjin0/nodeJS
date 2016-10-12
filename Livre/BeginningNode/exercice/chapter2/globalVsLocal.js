global.bar = 456;

getBar = function(){
		if (this === global){
			console.log('this is global ' + this.bar);
		} else if(this === foo){
			console.log('this is in foo ' + this.bar);
		}
	}

var foo = {

	bar : 123,
	getBar : getBar
	
}
foo.getBar();
getBar();

