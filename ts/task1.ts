interface objectType {
	name: string,
	age: number,
	active: boolean,
	tasks: Array<string>,
}

const object: objectType {
	name: "Mohamed",
	age: 21,
	active: = true,
	tasks: = ["Day1", "Day2", "Day3"],
};

for ([key, value] of Object.entries(object)) {
	console.log(`${key}: ${value}`);
}
