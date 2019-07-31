const db_generation_summary= require('../models/generation_summary')

module.exports = (req, res) => {
	let q = {value : {$gt:600}}

	db_generation_summary.find(q).sort('-date').then((data) => {
		res.send(data)

	}).catch((err) => {
		res.send(err)
	})
}
