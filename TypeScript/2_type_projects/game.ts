/**
 * Let's make a game 🕹
 */

const position = {
	x: 0,
	y: 0,
};

type Direction = 'up' | 'down' | 'left' | 'right';

function move(direction: Direction) {
	switch (direction) {
		case 'up':
			// return (position.y += 1);
			position.y += 1;
			break;
		case 'down':
			// return (position.y -= 1);
			position.y -= 1;
			break;
		case 'left':
			// return (position.x -= 1);
			position.x -= 1;
			break;
		case 'right':
			// return (position.x += 1);
			position.x += 1;
			break;
		default:
			throw new Error(`Wrong direction: ${direction}`);
	}
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
move('r');
console.log(position); // { x: 0, y: 0}
