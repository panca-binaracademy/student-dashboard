// impor modul express ej layouts
const expressLayouts = require('express-ejs-layouts')
// import express
const express = require('express')
const app = express()
const port = 1500

// setup view engine
app.set('view engine', 'ejs')
// setup public folder
app.use( express.static('public') )
app.use(expressLayouts)



// default route
app.get('/', (req, res) => {
    res.render('template')
})

// product
app.get('/product', (req, res) => {
    res.render('product')
})



app.listen(port, () => { console.log(`localhost:${port} is running...`) })