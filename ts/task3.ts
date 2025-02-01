enum TrafficLight {
	Red = "Red",
	Yellow = "Yellow",
	Green = "Green"
}

function getAction(light: TrafficLight) : string {
	switch(light) {
		case TrafficLight.Red:
			return "Stop";

		case TrafficLight.Yellow:
			return "Ready";

		case TrafficLigh.Green:
			return "Go";
		default:
			const check: never = light;
			return check;
	}
}

console.log(getAction(TrafficLight));
