module.exports = function() {
    return function(err, req, res, next) {
        console.log(err.message);
        res.send('Sorry bro, that aint happening');
    }
}
