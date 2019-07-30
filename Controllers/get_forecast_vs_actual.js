const db_forecast_vs_actual = require('../models/forecast_vs_actual')
const axios = require('axios');


module.exports = () => {
	const url='http://localhost:5000/forecastvsactual';

	setInterval(() => {

		axios.get(url).then(data => {

			const data_Array = Object.values(data.data)

			db_forecast_vs_actual.insertMany(data_Array)
				.then(function (docs){
					console.log('forecast_vs_actual Successfully pushed to DB');
				})
				.catch(function (err){
					console.log('error forecast_vs_actual not pushed to DB', error);
				})
		})
	},60000
	)
}