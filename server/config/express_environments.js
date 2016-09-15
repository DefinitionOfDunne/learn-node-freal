module.exports = function(env) {

    switch (env) {
        case 'production':
            return 'mongodb://localhost/production'
            break;

        case 'test':
            return 'mongodb://localhost/test'
            break;

        case 'development':
            return 'mongodb://localhost/development'
            break;
    }

}