const fs = require('fs');
var dataFile = JSON.parse(fs.readFileSync('ucm.json'));

/**
 * Sort JSON file by particular key
 * NOTE: Key should be a value that can be converted to interger with parseInt()
 * @param {String} key JSON key to use
 * @param {Object} data JSON object
 */
function sortBy(key, data) {
	return data.sort((a, b) => {
		var x = parseInt(a[key]); 
		var y = parseInt(b[key]);
		return ((x > y) ? -1 : ((x < y) ? 1 : 0));
	});
}
var sortedData = sortBy('timeline', dataFile);

// write the sorted JSON to a new file or: console.dir(sortedData);
fs.appendFileSync('sorted.json', JSON.stringify(sortedData));

/**
 * Example Data
 *
 * [
 *  {
 *      "username": "John Doe", 
 *      "date_joined": "2011-08-10T15:37:07Z", 
 *      "phone": "(301)456-7890", 
 *      "contributions": 277
 *  }
 *  {
 *      "username": "Jane Doe", 
 *      "date_joined": "2012-01-11T10:31:07Z", 
 *      "phone": "(902)412-3450", 
 *      "contributions": 128
 *  }
 * ...
 * ]
 */