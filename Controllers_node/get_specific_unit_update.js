const db_units = require('../models/units')
const _ = require('lodash')

module.exports = (req, res) => {
	let q = {}
	if (req.query && req.query.asset) {
		q.ASSET = req.query.asset
	}

	console.log("test!!!!!!!!!!!!",q)
	db_units.find(q).sort({'_id': -1}).limit(1).then((data) => {



		res.send(data)

	}).catch((err) => {
		res.send(err)
	})
}
