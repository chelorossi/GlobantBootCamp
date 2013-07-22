define( 
	function() {

		var Director = function (name) {
			this.name = name;
			this.attributes = [];
		}

		Director.prototype.set = function(key,value) {
		  console.log('set');
		  this.attributes[key] = value;
		}


		Director.prototype.speak = function() {
			console.log( this.attributes['quotes'][0] );
		}


		return Director;


	}
)