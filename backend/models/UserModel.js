import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ["teacher", "student"],
		required: true,
	},
	profilePicture: {
		type: String,
		default:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqf0Wx4wmsKfLYsiLdBx6H4D8bwQBurWhx5g&s",
	},
	phoneNumber: {
		type: String,
	},
	dateOfBirth: {
		type: Date,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
