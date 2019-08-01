const db_summary = require('../models/Summary')

module.exports = (req, res) => {
	let q = {}

	db_summary.find(q).sort({'timestamp': -1}).limit(10).then((data) => {
		res.send(data)

	}).catch((err) => {
		res.send(err)
	})
}
