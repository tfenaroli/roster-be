import User from '../models/user.js'

export const getUsers = async (req, res) => {
	try {
		const list = await User.find()
		res.send(list);
	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
}

export const postUser = async (req, res) => {
	try {
		const newUser = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
		});

		await User.create(newUser)

		res.send("user added");
	} catch (err) {
		console.log("error: ", err);
	}
}

export const deleteUser = async (req, res) => {
	try {
		const id = req.params.id;
		await User.findByIdAndDelete(id);

		res.send("user deleted");
	} catch (err) {
		console.log("error: ", err);
	}
}