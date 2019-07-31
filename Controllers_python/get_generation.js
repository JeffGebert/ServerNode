const db_generation_summary = require('../models/generation_summary')
const axios = require('axios');


module.exports = () => {
	const url='http://localhost:5000/generation_summary';

	setInterval(() => {

		axios.get(url).then(data => {

			const data_Array = Object.values(data.data)
			console.log(data_Array.length)

			db_generation_summary.insertMany(data_Array)
				.then(function (docs){
					console.log('Generation Summary Successfully pushed to DB');
				})
				.catch(function (err){
					console.log('error Generation Summary not pushed to DB', error);
				})
		})
	},60000
	)
}
