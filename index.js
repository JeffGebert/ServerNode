// Config
const express = require('express')
const path = require('path')
require('dotenv').config()
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


require('./db')



//app.post('/api/unit', require('./controllers/post_units'))

require('./Controllers_python/get_atc')()
require('./Controllers_python/get_units')()
require('./Controllers_python/get_generation')()
require('./Controllers_python/get_interchange')()
require('./Controllers_python/get_summary')()
require('./Controllers_python/get_long_term_wind')()
require('./Controllers_python/get_short_term_wind')()
require('./Controllers_python/get_forecast_vs_actual')()


app.get('/api/units',require('./Controllers_node/get_units'))
app.get('/api/STWF', require('./Controllers_node/get_short_term_wind'))
app.get('/api/summary', require('./Controllers_node/get_summary'))
app.get('/api/generation', require('./Controllers_node/get_generation'))
app.get('/api/interchange', require('./Controllers_node/get_interchange'))


app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
