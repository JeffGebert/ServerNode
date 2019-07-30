const db_atc = require('../models/atc')
const axios = require('axios');


module.exports = () => {
	const url='http://localhost:5000/forecastvsactual';


	setInterval(() => {

		axios.get(url).then(data => {

			const data_Array = Object.values(data.data)
			console.log(data_Array.length)

			db_atc.insertMany(data_Array)
				.then(function (docs){
					console.log('Units Successfully pushed to DB');
				})
				.catch(function (err){
					console.log('Units not Successfully pushed to DB', err);
				})
		})
	},60000
	)
}
