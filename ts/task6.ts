let variable: unknown = 12;

function processInput(input: unknown): string | number {
	if (typeof input === "string") {
		return input.toUpperCase();
	}
	else if (typeof input === "number") {
		return input ** 2;
	}
	else {
		throw new Error("Invalid type");
	}
}

console.log(processInput(variable));
