module.exports = function() {
    return function (err, req, res, next) {
        console.log(err.status);
        console.log(err.name);
        res.send(err.message);
        next(err);
    }
}
