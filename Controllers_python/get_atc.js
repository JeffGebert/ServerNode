const db_atc = require('../models/atc')
const axios = require('axios');


module.exports = () => {
	const url='http://localhost:5000/atc';


	setInterval(() => {

		axios.get(url).then(data => {

			const data_Array = Object.values(data.data)

			db_atc.insertMany(data_Array)
				.then(function (docs){
					console.log('atc Successfully pushed to DB');
				})
				.catch(function (err){
					console.log('atc not Successfully pushed to DB', err);
				})
		})
	},60000
	)
}
