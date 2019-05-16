// random thing out of arr

const wordlist = ['Twinkle', 'Pizza-pie', 'Midnight', 'Tide','Dawn', 'Indigo', 'Blossom', 'Twiglight', 'Moonlight', 'Dusk', 'Dream', 'Onyx', 'Rose', 'Autumn', 'Summer', 'Musk', 'Lavender', 'Sandlewood', 'Passion', 'Fruit', 'Orchard', 'Amber', 'Beach', 'Angel', 'Blackberry', 'Saffron', 'French', 'Bohemian', 'Jazz', 'Green', 'Garden', 'Vannila', 'Exotic', 'Waterlily', 'English', 'Australian', 'Encounter', 'Fireplace', 'Pine', 'Adventure']

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function getPhraseFrom (arr) {
	let arrLength = arr.length
	let w1 = getRandomInt(0, arrLength)
	let w2 = getRandomInt(0, arrLength)

	if (w1 === w2) {
	 return getPhraseFrom(arr)

	} else {
		return `${w1} ${w2} : ${arr[w1]} ${arr[w2]}`
	}

}

let phrase = getPhraseFrom(wordlist)