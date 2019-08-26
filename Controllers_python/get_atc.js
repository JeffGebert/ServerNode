const db_atc = require('../models/atc')
const axios = require('axios');


module.exports = () => {
	const url=`https://d3ab59cf.ngrok.io/atc`;
	console.log("test",url)

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
