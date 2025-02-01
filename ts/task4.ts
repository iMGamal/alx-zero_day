enum Role {
	Admin = "Admin",
	User = "User",
	Guest = "Guest"
}

type userInfo = [id: number, name: string, role: Role];

const user: userInfo = [12, "Mohamed", Role.Admin]

function describeUser(tuple: userInfo): void {
	const [id, name, role] = user;
	console.log(id, name, role);
}

describeUser(user);
