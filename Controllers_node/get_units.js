const db_units = require('../models/units')
const _ = require('lodash')

module.exports = (req, res) => {
	let q = {}

	db_units.find(q).sort({'_id': -1 }).limit(125).then((data) => {


		let grouped = _.groupBy(data, 'Generation_Type')

		let array = []

		for (let [i,b] of Object.entries(grouped)) {
  	// console.log(i,JSON.stringify(b,false,2))
  	b = b.map(x => {
    	x.data = _.uniqBy(x.data, 'ASSET')
    	return {
					ASSET: x.ASSET,
      		MC: x.MC,
      		TNG: x.TNG,
					DCR:x.DCR,

    	}
  	})

  	// console.log('b', JSON.stringify(b, false, 2))
  	array.push({
    	generation_type: i,
    	data: b
  	})
		}
		array.reverse()

		res.send(array)

	}).catch((err) => {
		res.send(err)
	})
}
