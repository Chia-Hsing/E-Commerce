const mainRouter = require('./mainRouter')

module.exports = app => {
    app.use('/api', mainRouter)
}
