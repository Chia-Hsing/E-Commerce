const mainRouter = require('./mainRouter')
const productRouter = require('./productRouter')
const adminRouter = require('./adminRouter')

module.exports = app => {
    app.use('/api', mainRouter)
    app.use('/api/admin', adminRouter)
    app.use('/api/product', productRouter)
}