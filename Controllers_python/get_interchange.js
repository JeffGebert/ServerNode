const db_interchange = require('../models/interchange')
const axios = require('axios');


module.exports = () => {
	const url=`${process.env.PYTHON_URL}interchange`;

	setInterval(() => {

		axios.get(url).then(data => {

			const data_Array = Object.values(data.data)
			console.log(data_Array.length)

			db_interchange.insertMany(data_Array)
				.then(function (docs){
					console.log('Interchange Successfully pushed to DB');
				})
				.catch(function (err){
					console.log('Interchange not pushed to DB', error);
				})
		})
	},60000
	)
}
