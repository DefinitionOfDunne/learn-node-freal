/* Error Handling Middleware */

module.exports = function() {
    return function(err, req, res, next) {
        console.log(err.message);
        res.status(500).json('Sorry bro, that aint how this works');
    }
}



/* 

NOTES:

	1. Error-handling middleware always takes four arguments. 
	2. You must provide four arguments to identify it as an error-handling middleware function. 

--------*/
