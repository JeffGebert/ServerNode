const db = require('../db')
const mongoose = require('mongoose')

const db_atc = db.model('atc',{

	date: {
		type:String,
	},
	he: {
		type:String,
	},
	Offers_BC_IMPORT: {
		type:Number,
	},
	Offers_BC_EXPORT: {
		type:Number,
	},
	Offers_MATL_IMPORT: {
		type:Number,
	},
	Offers_MATL_EXPORT:{
		type:Number,

	},
	Offers_SK_IMPORT:{
		type:Number,

	},
	Offers_SK_EXPORT:{
		type:Number,

	},
	Offers_BC_MATL_Import:{
		type:Number,

	},
	Offers_BC_MATL_Export:{
		type:Number,

	},
	Offers_System_Import:{
		type:Number,

	},
	Offers_System_Export:{
		type:Number,

	},
	ATC_BC_IMPORT:{
		type:Number,

	},
	ATC_BC_EXPORT:{
		type:Number,

	},
	ATC_MATL_IMPORT:{
		type:Number,

	},
	ATC_MATL_EXPORT:{
		type:Number,

	},
	ATC_SK_IMPORT:{
		type:Number,

	},
	ATC_SK_EXPORT:{
		type:Number,

	},
	ATC_BC_MATL_IMPORT:{
		type:Number,

	},
	ATC_BC_MATL_EXPORT:{
		type:Number,

	},
	ATC_SYSTEM_IMPORT:{
		type:Number,

	},
	ATC_SYSTEM_EXPORT:{
		type:Number,

	},
	timestamp:{
		type:Date,
		default:Date.now
	}




})


module.exports = db_atc
