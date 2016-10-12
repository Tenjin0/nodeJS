module.exports.Liste = function(){

	this.items = [];
	Liste.prototype.add = function(item){

		this.items.push(item);
	};

	Liste.prototype.count =function(){
		return this.items.length;
	};

	Liste.prototype.remove = function(item){
		if(! isNaN(parseFloat(item)) && isFinite(item)){
			if(item < this.items.length){
				this.items.splice(item,1);
			}else{
				throw new Error('IndexOutOfBoundsException! ' + item);
			}
		}else{
			var i;
			for(i = 0 ; i<this.items.length; i++){
				if(this.items[i] == item){
					break;	
				}
			}
			this.items.splice(i,1);
		}
		

		// if(item)
		
	};

	Liste.prototype.clear = function(){
		this.items = [];
	};

	Liste.prototype.getId = function(item){
		for(var i = 0;i< this.items.length; i++){
			if(items === this.items[i]){
				return i;

			}
		}
		return -1;
	};	

	Liste.prototype.get = function(id){
		if(! isNaN(parseFloat(id)) && isFinite(id)){
			if(id < this.items.length){
				return this.items[id];
			}else{
				throw new Error("IndexOutOfBoundsException! " + id);
			}
		}
	};
};
var Liste = require ('./list').Liste;
var list = new Liste();
list.add('tomate');

