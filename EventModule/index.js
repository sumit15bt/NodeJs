/*
here we can create our own listener not need to use  onBlur,onClick etc.. readymate eventListner. 
It fascilitates the multiple callback i.e., ex an popup,alert,model and many more things occurs at the same time. 

1. register for the event
  2. create an event emitter instance and register a couple of callbacks
  3. register for the event with callback parameter.
*/

const EventEmitter=require('events'); // created a class
const event=new EventEmitter();
// const event=new events.EventEmitter();

// listening the event or can say function defination
event.on('saymyname',()=>{
	console.log('your name is sumit');
});

event.on('saymyname',()=>{
	console.log('your name is sharmila');
});

event.on('saymyname',()=>{
	console.log('your name is sharmila');
});

event.on('checkSomething',(statusCode,msg)=>{
	if(statusCode == 200)
		console.log(msg);
	else
		console.log('some error occour');
});


//i.e., listen before the firing of event.
event.emit('saymyname'); // saymyname is the eventName or can say function call. we emit a  event

// parametrised event call
event.emit('checkSomething',200,"ok all done..!");