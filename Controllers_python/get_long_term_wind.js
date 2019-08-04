const db_long_term_wind = require('../models/long_term_wind')
const axios = require('axios');


module.exports = () => {
	const url=`${process.env.PYTHON_URL}longtermwind`;


	setInterval(() => {

		axios.get(url).then(data => {

			const data_Array = Object.values(data.data)
			console.log(data_Array.length)

			db_long_term_wind.insertMany(data_Array)
				.then(function (docs){
					console.log('long term wind Successfully pushed to DB');
				})
				.catch(function (err){
					console.log('long term wind Successfully pushed to DB', err);
				})
		})
	},60000
	)
}
