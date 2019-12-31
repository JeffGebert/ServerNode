// Config
const express = require('express')
const path = require('path')
require('dotenv').config()
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const { Pool } = require('pg');
const dbParams = require('./db');
const db = new Pool(dbParams);
db.connect();

db.connect((err) => {
	if (err) {
		console.log('Error connecting to PostgreSQL database')
	} else {
		console.log('Connected to PostgreSQL database')
	}
})


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
app.get('/api/LTWF', require('./Controllers_node/get_long_term_wind'))
app.get('/api/summary', require('./Controllers_node/get_summary'))
app.get('/api/generation', require('./Controllers_node/get_generation'))
app.get('/api/interchange', require('./Controllers_node/get_interchange'))
app.get('/api/forecast_vs_actual', require('./Controllers_node/get_forecast_vs_actual'))
app.get('/api/get_atc', require('./Controllers_node/get_atc'))
app.get('/api/get_specific_unit',require('./Controllers_node/get_specific_unit'))
app.get('/api/get_specific_unit_update',require('./Controllers_node/get_specific_unit_update'))

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
  });