const db_summary = require('../models/Summary')
const axios = require('axios');


module.exports = () => {
	const url=`${process.env.PYTHON_URL}Summary`;

	setInterval(() => {

		axios.get(url).then(data => {

			const data_Array = Object.values(data.data)


			db_summary.insertMany(data_Array)
				.then(function (docs){
					console.log('Summary Successfully pushed to DB');
				})
				.catch(function (err){
					console.log('error Summary not pushed to DB', error);
				})
		})
	},60000
	)
}