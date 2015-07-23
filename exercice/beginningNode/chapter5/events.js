var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('removeListener', function (eventName, listenerFunction) {
console.log(eventName, 'listener removed', listenerFunction);
});

emitter.on('newListener', function (eventName, listenerFunction) {
console.log(eventName, 'listener added', listenerFunction);
});

emitter.on('foo',function(arg1){
	arg1.handled = true;
	var count = 0;
	(function(count){
		var objectInterval = setInterval(function(){
		console.log('setInterval',count);
		if(count == 5){
			clearInterval(objectInterval);
		}
		count++;
		},100);
	})(count);
});

// Multiple subscribers The listeners are called in the order that they registered for the
// event.Additionally, any arguments passed in for the event are shared between the various subscribers
var fooHandler = function(arg1,arg2){
	if (arg2.handled){
		console.log(arg1,arg2);	
	}
	emitter.removeListener('foo',fooHandler);
};
emitter.on('foo',fooHandler);

// emitter.emit('foo',{ handled : false});
// emitter.emit('foo',{ handled : false});



emitter.once('foo2',fooHandler);

emitter.emit('foo2','foo2',{ handled : true});
emitter.emit('foo2','foo2',{ handled : true});

/*EventEmitter Memory Leaks
A common source of memory leaks when working with events is subscribing to events in a callback but forgetting to
unsubscribe at the end. By default, EventEmitter will tolerate 10 listeners for each event type*/