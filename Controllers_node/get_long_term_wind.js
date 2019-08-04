const db_long_term_wind = require('../models/long_term_wind')
var dateFormat = require('dateformat');

module.exports = (req, res) => {
	let q = {value : {$gt:600}}
	var now = new Date()
	var tom = new Date()
	tom.setDate(tom.getDate() +1)
	x=dateFormat(now, "yyyy-mm-dd")
	y=dateFormat(tom, "yyyy-mm-dd")
	console.log(y)
	x=x.toString()
	y=y.toString()


	db_long_term_wind.find({}).limit(2000).sort({'timestamp':-1}).then((data) => {
		res.send(data)

	}).catch((err) => {
		res.send(err)
	})

}
