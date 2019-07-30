const db = require('../db')
const mongoose = require('mongoose')

const db_long_term_wind = db.model('long_term_wind',{

	date: {
		type:String,
	},

	value:{
		type:Number,
	},


	timestamp:{
		type:Date,
		default:Date.now
	}


})


module.exports = db_long_term_wind
