const db_units = require('../models/units')
const axios = require('axios');


module.exports = (req, res) => {
	const url='http://localhost:5000/test';


	setInterval(() => {

		axios.get(url).then(data => {

			const data_Array = Object.values(data.data)
			console.log('data_Array', data_Array)
			data_Array.forEach((x) => {

				console.log('test', x)
				db_atc.create(x).then((units) =>{
					console.log(x)
					res.send(units)
				}).catch((err) => {
					res.send(err)
				})
			})
			console.log('cycle complete')
		})
	},30000)
}
