(function(window) {
    byeSpeaker={};
    byeSpeaker.greet="Good Bye";
    byeSpeaker.speak= function (x){
    	console.log(byeSpeaker.greet+" "+x);
    }
})(window);