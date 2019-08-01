const db_interchange = require('../models/interchange')

module.exports = (req, res) => {
	let q = {}

	db_interchange.find(q).sort({'timestamp': -1}).limit(4).then((data) => {
		res.send(data)

	}).catch((err) => {
		res.send(err)
	})
}
