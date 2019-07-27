const db_atc = require('../models/atc')
const axios = require('axios');


module.exports = (req, res) => {
	const url='http://localhost:5000/forecastvsactual';


	setInterval(() => {

		axios.get(url).then(data => {

			const data_Array = Object.values(data.data)
			console.log(data_Array.length)

			db_atc.insertMany(data_Array)
				.then(function (docs){
					res.json(docs);
				})
				.catch(function (err){
					res.status(500).send(err);
				})
		})
	},60000
	)
}
