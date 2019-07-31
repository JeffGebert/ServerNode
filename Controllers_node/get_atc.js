const db_short_term_wind = require('../models/atc')

module.exports = (req, res) => {
	let q = {value : {$gt:600}}

	db_short_term_wind.find(q).sort('-date').then((data) => {
		res.send(data)

	}).catch((err) => {
		res.send(err)
	})
}
