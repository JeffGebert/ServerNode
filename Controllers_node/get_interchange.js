const db_interchange = require('../models/interchange')

module.exports = (req, res) => {
	let q = {value : {$gt:600}}

	db_interchange.find(q).sort('-date').then((data) => {
		res.send(data)

	}).catch((err) => {
		res.send(err)
	})
}
