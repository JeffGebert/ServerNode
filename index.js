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

require('./controllers/get_atc')()
require('./controllers/get_units')()
require('./controllers/get_generation')()
require('./controllers/get_interchange')()
require('./controllers/get_summary')()
require('./controllers/get_long_term_wind')()
require('./controllers/get_short_term_wind')()
require('./controllers/get_forecast_vs_actual')()



app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
