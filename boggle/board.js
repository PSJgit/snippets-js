
export const easy = 'AAEEGN ABBJOO AOOTTW AFFKPS AOOTTW CIMOTU DEILRX DELRVY DELRVY DISTTY EEGHNW EEINSU EHRTVW EIOSST ELRTTY HIMNUQ';
export const medium = 'AACIOT ABILTY ABJMOQ ACDEMP ACELRS ADENVZ AHMORS BIFORX DENOSW DKNOTU EEFHIY EGKLUY EGINTV DKNOTU EHINPS ELPSTU';

// array for the resulting board dice chars for solve/check
export const charArr = [];

export const create = (str) => {
	// wipe charArr if we've made one
	charArr.length > 0 ? charArr.length = 0 : console.log('first arr')
	const arr = str.split(' ');
	const board 	 = document.getElementById('boggle-board');
	// clear out board
	board.innerHTML = '';
	// create a copy of the array and shuffle the dice
	const dice = arr.slice(0);
	shuffleArray(dice);
	// generate board
	for (let i = 0; i < dice.length; i++) {
		let randomDie = randomizer(dice[i]);
		if (randomDie.indexOf('Q') > -1) {
			randomDie += 'u';
		}
		board.insertAdjacentHTML('beforeend', `<div class="dice"><p>${randomDie}</p></div>`);
		charArr.push(randomDie)
	}
	return charArr;
};
// on page load all will be run by 'start' button, which will become 'reload' button, avoid problem with inital arr not being populated in solve.js as its not loaded yet that way

// random arr item helper
const randomizer = (arr) => {
    const selected = Math.floor(Math.random() * arr.length);
    return arr[selected];
};
// proper arr shuffle (Durstenfeld shuffle)
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
