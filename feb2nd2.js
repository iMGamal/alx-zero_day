function* generator() {
	[
		yield "tip1",
		yield "tip2",
		yield "tip3",
		yield "tip4",
		yield "tip5",
		yield "tip6",
		yield "tip7",
		yield "tip8",
		yield "tip9",
		yield "tip10"
	]
}

const iterator = generator();
let result = iterator.next();

while(!result.done) {
	console.log(result);
	result = iterator.next();
}

if (result.done) {
	console.log(result);
}

function buttonAll() {
	for (const tip of generator()) {
		console.log(tip);
	}
}

const intervalId = setInterval(() => {
	const { value, done } = iterator.next();
	if (!done) {
		console.log(`{ value: ${value}, done: ${done}`);
	}
	else if (done) {
		console.log(`{ value: ${value}, done: ${done}`);
		clearInterval(intervalId);
	}
});

const buttonInterval = id => clearInterval(id);
