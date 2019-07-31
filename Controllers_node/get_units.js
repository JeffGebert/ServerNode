const db_units = require('../models/units')

module.exports = (req, res) => {
	let q = {}

	db_units.find(q).sort('-date').then((data) => {
		res.send(data)

	}).catch((err) => {
		res.send(err)
	})
}
