const db_forecast_vs_actual = require('../models/forecast_vs_actual')

module.exports = (req, res) => {
	q={}

	db_forecast_vs_actual.find(q).sort({_id:-1}).limit(30).then((data) => {
		console.log(data)
		data=data.reverse()
		data=data.slice(0,24)
		console.log(data)
		res.send(data)

	}).catch((err) => {
		res.send(err)
	})
}
