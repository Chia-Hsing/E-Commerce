const app = require('./app')
const port = process.env.PORT

app.listen(port, err => {
    if (err) {
        console.log(`error on connecting server}`)
        process.exit(1)
    }
    console.log(`server is up on port ${port}`)
})
