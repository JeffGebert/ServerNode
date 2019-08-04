const db_atc = require('../models/atc')
var dateFormat = require('dateformat');


module.exports = (req, res) => {
	var now = new Date()
	x=dateFormat(now, "yyyy-mm-dd")
	console.log(x)
	x=x.toString()
	data2=[]

	db_atc.find({'date':x}).sort({'id':-1,'timestamp': -1, 'he':-1}).limit(24).then((data) => {
		data=data.reverse()
		for (i = 0; i < 12; i++) {
  		data2.push(data[i])
			data2.push(data[i+12])
		}

		res.send(data2)

	}).catch((err) => {
		res.send(err)
	})
}
