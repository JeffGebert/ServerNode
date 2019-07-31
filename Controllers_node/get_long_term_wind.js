const db_long_term_wind = require('../models/long_term_wind')

module.exports = (req, res) => {
	let q = {value : {$gt:600}}

	db_long_term_wind.find(q).sort('-date').then((data) => {
		res.send(data)

	}).catch((err) => {
		res.send(err)
	})
}
