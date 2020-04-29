(function(window) {
    helloSpeaker={};
    helloSpeaker.greet="Hello";
    helloSpeaker.speak= (function (x){
    	console.log(helloSpeaker.greet+" "+x);
    })
})(window);