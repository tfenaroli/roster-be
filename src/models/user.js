import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
	firstName: {
		type: String,
		require: true,
		unique: true
	},
	lastName: {
		type: String,
		require: true,
		unique: true
	}
});

const User = mongoose.model("user", userSchema);

export default User;