const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: [/\S+@\S+\.\S+/, "Please use a valid email address"], // Email validation
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ["teacher", "student"],
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

// Hash the password before saving
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next(); // Only hash if password is modified
	try {
		const salt = await bcrypt.genSalt(10); // Generate a salt
		this.password = await bcrypt.hash(this.password, salt); // Hash password with salt
		next();
	} catch (err) {
		next(err);
	}
});

// Update the updatedAt field when the document is modified
userSchema.pre("save", function (next) {
	if (this.isModified()) {
		this.updatedAt = Date.now();
	}
	next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
