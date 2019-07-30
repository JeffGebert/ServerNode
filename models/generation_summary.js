const db = require('../db')
const mongoose = require('mongoose')

const db_generation_summary = db.model('generation_summary',{

	GROUP: {
		type:String,
	},
	MC: {
		type:Number,
	},
	TNG: {
		type:Number,
	},
	DCR: {
		type:Number,
	},
	timestamp:{
		type:Date,
		default:Date.now
	}

})


module.exports = db_generation_summary
