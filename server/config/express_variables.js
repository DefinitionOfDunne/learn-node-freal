module.exports = {

    EXPRESS: {
        PORT: 8008,
        MESSAGE: 'Welcome to Express Server!'
    },

    MONGODB: {
        URL: 'mongodb://localhost/node-freal',
        PORT: '',
        CONNECTED_MESSAGE: 'Successfully connected to mongoDB',
        FAILED_MESSAGE: 'Could not connect to mongoDB'
    },

    JWT: {
        expireTime: 24 * 60,
        secrets: {
            jwt: process.env.JWT || 'gumball'
        }
    }
}
