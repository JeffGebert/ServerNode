const db_units = require('../models/units')
const axios = require('axios');


module.exports = () => {
	const url=`https://d3ab59cf.ngrok.io/test`;

	setInterval(() => {

		axios.get(url).then(data => {

			const data_Array = Object.values(data.data)

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
