const db_short_term_wind = require('../models/short_term_wind')
const axios = require('axios');


module.exports = () => {
	const url='http://localhost:5000/shorttermwind';


	setInterval(() => {

		axios.get(url).then(data => {

			const data_Array = Object.values(data.data)
			console.log(data_Array.length)

			db_short_term_wind.insertMany(data_Array)
				.then(function (docs){
					console.log('short term wind Successfully pushed to DB');
				})
				.catch(function (err){
					console.log('short term wind Successfully pushed to DB', err);
				})
		})
	},60000
	)
}
