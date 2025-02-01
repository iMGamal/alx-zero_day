const mixedArray: (string | number)[] = [];

mixedArray.push("Hello");
mixedArray.push(11);

function PrintArrayElements(array: (string | number)[]): void {
	for (const element of array) {
		console.log(`Value: ${element}, Type: ${typeof element}`);
	}
}

PrintArrayElement(mixedArray);
