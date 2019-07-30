const db = require('../db')
const mongoose = require('mongoose')

const db_forecast_vs_actual = db.model('forecast_vs_actual',{

	date:{
		type:String,
	},
	real_time_forecast:{
		type:String,
	},
	actual_price:{
		type:String,
	},
	day_ahead_load_forecast:{
		type:String,
	},
	actual_ail:{
		type:String,
	},
	forecast_actual_ail_diff:{
		type:String,
	},
	timestamp:{
		type:Date,
		default:Date.now
	}


})



module.exports = db_forecast_vs_actual
