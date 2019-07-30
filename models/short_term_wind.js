const db = require('../db')
const mongoose = require('mongoose')

const db_long_term_wind = db.model('short_term_wind',{

	date: {
		type:String,
	},

	most_likely:{
		type:Number,
	},


	timestamp:{
		type:Date,
		default:Date.now
	}


})


module.exports = db_short_term_wind
