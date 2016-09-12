/* Error Handling Middleware */

module.exports = function() {
    return function (err, req, res, next) {
        console.log(err.status);
        console.log(err.name);
        res.send(err.message);
        next(err);
    }
}




/* 

NOTES:

	1. Error-handling middleware always takes four arguments. 
	2. You must provide four arguments to identify it as an error-handling middleware function. 

--------*/
