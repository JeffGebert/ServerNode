const db_summary = require('../models/summary')

module.exports = (req, res) => {
	let q = {}

	db_summary.find(q).sort('-date').then((data) => {
		res.send(data)

	}).catch((err) => {
		res.send(err)
	})
}
