const db_forecast_vs_actual = require('../models/forecast_vs_actual')
const axios = require('axios');


module.exports = () => {
	const url=`https://d3ab59cf.ngrok.io/forecastvsactual`;

	setInterval(() => {

		axios.get(url).then(data => {

			const data_Array = Object.values(data.data)
			console.log(data_Array)
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
