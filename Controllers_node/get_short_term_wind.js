const db_short_term_wind = require('../models/short_term_wind')

module.exports = (req, res) => {
	let q = {}

	db_short_term_wind.find(q).limit(8000).sort('-date').then((data) => {
		res.send(data)

	}).catch((err) => {
		res.send(err)
	})
}
