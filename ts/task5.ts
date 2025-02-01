
function format(arg: string | number) {
	if (typeof arg === "string") {
		return arg.toUpperCase();
	}
	else if (typeof arg === "number") {
		return `$${arg}`;
	}
}

console.log(format("hello"));
console.log(format(11));
