const db = require('../db')
const mongoose = require('mongoose')

const db_summary = db.model('summary',{

	Summary: {
		type:String,
	},
	Values:{
		type:Number,
	},
	timestamp:{
		type:Date,
		default:Date.now
	}

})


module.exports = db_summary
