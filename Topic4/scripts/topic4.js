////////////////// topic 4 js ////////////////////////////////	

    requirejs.config({
		baseUrl: "scripts",
	    // paths: {
	    //     "Movie": "Movie",
	    //     "Director": "Director"
	    // },
		waitSeconds: 15	


	});

    require(["Movie", "Director"], function(Movie, Director) {
        var alien = new Movie();
        
        
        var ridleyScott = new Director('Ridley Scott'); //sets name in constructor
        alien.set('director', ridleyScott);
        ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
        
        alien.get('director').speak(); //output: Ridley Scott says: 'Cast is...'

        });