



function Movie {
  this.attributes = {};
}

Movie.prototype.set = function(key,value) {
  this.attributes[key] = value;
}


Movie.prototype.get = function(key) {
  return this.attributes[key];
}

Movie.prototype.play = function() {
  console.log("playing");
}



Movie.prototype.stop = function() {


}


var fastandfurious = new Movie();
terminator.set('title', 'Fast & Furious');
var terminator = new Movie();
terminator.set('title', 'Terminator');
var scarface = new Movie();
terminator.set('title', 'ScarFace');



