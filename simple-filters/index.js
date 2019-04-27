
document.addEventListener("DOMContentLoaded", (e) => {
	
	/* Events
	–––––––––––––––––––––––––––––––––––––––––––––––––– */

	// user inputs
	let userObj = {
		region: 'worldwide',
		duration: 30
	}

	// temp store of results data
	let resultsArr = []

	const numRegex = /\b\d{1,2}\b/g
	const allResults = [].slice.call(document.querySelectorAll('.inner-elem'))

	for (let i = 0; i < allResults.length; i++) {
		var textContent = allResults[i].textContent.toLowerCase()
		var duration = textContent.match(numRegex)
		resultsArr.push({
			dom: allResults[i],
			region: textContent.indexOf(userObj.region) !== -1,
			duration: parseInt(duration) >= userObj.duration
		})	
	}

	var filteredResults= resultsArr.filter( function (elem) {
		if (elem.region && elem.duration) {
			return elem
		}
	})

	console.log(filteredResults)

});



/**
 * Filters an array of objects with multiple criteria.
 *
 * @param  {Array}  array: the array to filter
 * @param  {Object} filters: an object with the filter criteria as the property names
 * @return {Array}
 */
function multiFilter(array, filters) {
	const filterKeys = Object.keys(filters);
	// filters all elements passing the criteria
	return array.filter((item) => {
	  // dynamically validate all filter criteria
	  return filterKeys.every(key => {
		// ignores an empty filter
		if (!filters[key].length) return true;
		return filters[key].includes(item[key]);
	  });
	});
  }

  let products = [
	{ name: "A", color: "Blue", size: 50 },
	{ name: "B", color: "Blue", size: 60 },
	{ name: "C", color: "Black", size: 70 },
	{ name: "D", color: "Green", size: 50 },
  ];
  
  // the value of each key is an array with the values to filter
  let filters = {
	color: ["Blue", "Black"],
	size: [70, 50]
  };
  
  // filter the products array by color: blue and black
  // and also by size: 70 and 50
  var filtered = multiFilter(products, filters);
  
  //console.info('Filtered:');
  //console.log(filtered);