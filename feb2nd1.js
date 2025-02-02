const testArray = [1, 5, 3, 4, 2, 4, 6, 8, 5];

const oddArray = testArray.filter(element => element % 2 !== 0);

let evenArray = [];
testArray.forEach(element => {
	if (element %2 === 0) {
		evenArray.push(element);
	}
});

const firstElement = testArray.find(element => element > 5);

const mapArray = testArray.map(element => element * 2);

console.log(oddArray);
console.log(evenArray);
console.log(firstElement);
console.log(mapArray);
