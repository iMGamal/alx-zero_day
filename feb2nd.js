let newMap = new Map()
.set("name", "Mohamed")
.set("object", { Grades: [
	{Course: "Algebra", Grade: "Distinct"},
	{Course: "Geometry", Grade: "Very Good"},
]});

for (let [key, value] of newMap) {
	if (key === "name") {
		console.log(`Student Name: ${value}`);
	}
	else if (key === "object") {
		value.Grades.forEach(subject => console.log(`Course Name: ${subject.Course}, Grade: ${subject.Grade}`));
	}
}
