const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/UserModel"); // Correct path to UserModel.js
const { GraphQLString } = require("graphql");
const UserType = require("../types/UserType"); // Your UserType

const authenticationResolvers = {
	// Register Resolver
	register: {
		type: UserType,
		args: {
			name: { type: GraphQLString },
			email: { type: GraphQLString },
			password: { type: GraphQLString },
			role: { type: GraphQLString },
		},
		async resolve(parent, args) {
			const { name, email, password, role } = args;

			// Check if user already exists
			const existingUser = await User.findOne({ email });
			if (existingUser) {
				throw new Error("User already exists.");
			}

			// Hash password
			const hashedPassword = await bcrypt.hash(password, 12);

			// Create new user
			const user = new User({
				name,
				email,
				password: hashedPassword,
				role,
			});

			await user.save();

			// Generate a JWT token
			const token = jwt.sign(
				{ userId: user.id, email: user.email },
				process.env.JWT_SECRET,
				{ expiresIn: "1h" }
			);

			// Return user data along with the token
			return { ...user._doc, id: user.id, token };
		},
	},

	// Login Resolver
	login: {
		type: UserType,
		args: {
			email: { type: GraphQLString },
			password: { type: GraphQLString },
		},
		async resolve(parent, args) {
			const { email, password } = args;

			// Find the user by email
			const user = await User.findOne({ email });
			if (!user) {
				throw new Error("User not found.");
			}

			// Compare passwords
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				throw new Error("Invalid credentials.");
			}

			// Generate a JWT token
			const token = jwt.sign(
				{ userId: user.id, email: user.email },
				process.env.JWT_SECRET,
				{ expiresIn: "1h" }
			);

			// Return user data along with the token
			return { ...user._doc, id: user.id, token };
		},
	},
};

module.exports = authenticationResolvers;
