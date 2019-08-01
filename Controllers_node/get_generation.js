const db_generation_summary= require('../models/generation_summary')

module.exports = (req, res) => {
	let q = {}

	db_generation_summary.find(q).sort({'timestamp': -1}).limit(6).then((data) => {
		res.send(data)

	}).catch((err) => {
		res.send(err)
	})
}
