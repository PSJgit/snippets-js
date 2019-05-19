/* Imports
–––––––––––––––––––––––––––––––––––––––––––––––––– */
import * as board from './modules/board.js';
import * as solve from './modules/solve.js';

/* Build on dom ready
–––––––––––––––––––––––––––––––––––––––––––––––––– */

document.addEventListener("DOMContentLoaded", (event) => {
	// easy and medium at the moment
	board.create(board.easy);
	document.getElementById('reload-board').addEventListener('click', () => {
		board.create(board.easy);
		console.log(board.charArr)
	});

});
