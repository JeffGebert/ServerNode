const db_forecast_vs_actual = require('../models/forecast_vs_actual')

module.exports = (req, res) => {


	db_forecast_vs_actual.aggregate(
		[
			{$sort: {date:1,actual_price:1,day_ahead_load_forecast:1,real_time_forecast:1,actual_ail:1,timestamp:1}},
			{
				$group:
				{
					_id: "$date",
					actual_price : { $last: '$actual_price' },
					actual_ail:{$last:'$actual_ail'},
					timestamp: { $last: '$date' },
					real_time_forecast:{$last: '$real_time_forecast'},
					day_ahead_load_forecast: {$last: '$day_ahead_load_forecast'}

				}
			}
		]
	).sort({'timestamp': -1}).then((data) => {
		res.send(data.reverse())

	}).catch((err) => {
		res.send(err)
	})
}
