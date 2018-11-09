var dogs = require('../data/dogs');

module.exports = function(app) {

	app.get("/api/dogs", function(req, res) {
    res.json(dogs);
	});
	
	app.post('/api/dogs', function(req, res) {
		// console.log(req.body.userAnswers); 
		// console.log(dogs); 
		
		var bestMatch = {};  
		var bestMatchDifference = 100000;
		

		for (var i = 0; i < dogs.length; i++) {
			var difference = 0;  
			for (var j = 0; j < dogs[i].scores.length; j++) {
				difference += Math.abs(req.body.userAnswers[j] - dogs[i].scores[j]); 
				if (difference < bestMatchDifference) {
					bestMatchDifference = difference;
					bestMatch = dogs[i]; 
					console.log(bestMatch); 
				}
			}
		}
		res.json(bestMatch); 
  });
}; 