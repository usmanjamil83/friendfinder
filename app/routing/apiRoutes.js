// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var data = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
  	res.json(data);
  });

  app.post("/api/friends", function(req, res) {

    var match = 1000;
    var name = "";
    for (i=0; i < data.length; i++){
    	var total = 0;
    	for (j=0; j < data[i].scores.length; j++) {
    		total += data[i].scores[j];
    	}
    	if (match > total) {
       match = total;
       name = data[i];

     }
   }
   data.push(req.body);
   res.json(name);
 });
};