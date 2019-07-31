const db_short_term_wind = require('../models/forecast_vs_actual')

module.exports = (req, res) => {
	let q = {value : {$gt:200}}

	db_short_term_wind.find(q).sort('-date').then((data) => {
		res.send(data)

	}).catch((err) => {
		res.send(err)
	})
}
