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

require('./controllers/get_units')()
require('./controllers/get_generation')()
require('./controllers/get_interchange')()
require('./controllers/get_summary')()

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
