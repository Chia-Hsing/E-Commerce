const mainRouter = require('./mainRouter')
const productRouter = require('./productRouter')
const adminRouter = require('./adminRouter')
const bagRouter = require('./bagRouter')
const authRouter = require('./authRouter')

module.exports = app => {
    app.use('/api', mainRouter)
    app.use('/api/admin', adminRouter)
    app.use('/api/products', productRouter)
    app.use('/api/bag', bagRouter)
    app.use('/api/auth', authRouter)
}
