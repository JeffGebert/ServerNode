const db = require('../db')
const mongoose = require('mongoose')

const db_interchange = db.model('interchange',{

	PATH: {
		type:String,
	},
	ACTUAL_FLOW: {
		type:Number,
	},
	timestamp:{
		type:Date,
		default:Date.now
	}

})


module.exports = db_interchange
