// import express
const express = require('express')
const app = express()
const port = 1500

// setup view engine
app.set('view engine', 'ejs')
// setup public folder
app.use( express.static('public') )



// default route
app.get('/', (req, res) => {
    res.render('template')
})



app.listen(port, () => { console.log(`localhost:${port} is running...`) })