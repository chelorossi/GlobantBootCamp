///// JS TOPIC 3 Functionality /////////////

function Movie () {
  this.attributes = {};
}

Movie.prototype.set = function(key,value) {
  this.attributes[key] = value;
}


Movie.prototype.get = function(key) {
  return this.attributes[key];
}

Movie.prototype.play = function() {
  pubsub.publish( "playing", this);
}


Movie.prototype.stop = function() {
  pubsub.publish( "stopped", this);
}


var messagePlay = function (topic, movie) {
    console.log( 'Playing: ' + movie.get('title') + '...');
};

var messageStop = function (topic, movie) {
    console.log( 'stopped');
};




var subscription = pubsub.subscribe( "playing", messagePlay );
var subscription2 = pubsub.subscribe( "stopped", messageStop );



var fastandfurious = new Movie();
fastandfurious.set('title', 'Fast & Furious');  
fastandfurious.play();
fastandfurious.stop();

var terminator = new Movie();
terminator.set('title', 'Terminator');
terminator.play();
terminator.stop();

var scarface = new Movie();
scarface.set('title', 'ScarFace');
scarface.play();
scarface.stop();
