define(['Director'],
	function(Director) {

		var Movie = function () {
		  this.attributes = {};
		}

		Movie.prototype.set = function(key,value) {
		  this.attributes[key] = value;
		}


		Movie.prototype.get = function(key) {
		  return this.attributes[key];
		}

		// Movie.prototype.play = function() {
		//   pubsub.publish( "playing", this);
		// }


		// Movie.prototype.stop = function() {
		//   pubsub.publish( "stopped", this);
	// }


		return Movie;

	}	

);