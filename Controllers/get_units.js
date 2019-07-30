const db_units = require('../models/units')
const axios = require('axios');


module.exports = () => {
	const url='http://localhost:5000/test';

	setInterval(() => {

		axios.get(url).then(data => {

			const data_Array = Object.values(data.data)
			console.log(data_Array.length)

			db_units.insertMany(data_Array)
				.then(function (docs){
					console.log('Units Successfully pushed to DB');
				})
				.catch(function (err){
					console.log('error Units not pushed to DB', error);
				})
		})
	},60000
	)
}
