const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require("graphql");
const UserType = require("../types/UserType"); // Import your UserType definition
const User = require("../../models/UserModel"); // Import your Mongoose User model

const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		// Mutation for creating a user
		createUser: {
			type: UserType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				email: { type: new GraphQLNonNull(GraphQLString) },
				password: { type: new GraphQLNonNull(GraphQLString) },
				role: { type: new GraphQLNonNull(GraphQLString) },
			},
			async resolve(parent, args) {
				try {
					// Check if the user already exists
					const existingUser = await User.findOne({ email: args.email });
					if (existingUser) {
						throw new Error("User with this email already exists.");
					}

					// Create a new user instance
					const user = new User({
						name: args.name,
						email: args.email,
						password: args.password,
						role: args.role,
					});

					// Save the user to the database
					const savedUser = await user.save();
					return savedUser;
				} catch (err) {
					throw new Error(err.message);
				}
			},
		},

		// Mutation for updating a user
		updateUser: {
			type: UserType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLString) },
				name: { type: GraphQLString },
				email: { type: GraphQLString },
				password: { type: GraphQLString },
				role: { type: GraphQLString },
				profilePicture: { type: GraphQLString },
			},
			async resolve(parent, args) {
				try {
					// Find the user by ID
					const user = await User.findById(args.id);
					if (!user) {
						throw new Error("User not found.");
					}

					// Update fields if provided
					if (args.name) user.name = args.name;
					if (args.email) user.email = args.email;
					if (args.password) {
						const salt = await bcrypt.genSalt(10);
						user.password = await bcrypt.hash(args.password, salt);
					}
					if (args.role) user.role = args.role;
					if (args.profilePicture) user.profilePicture = args.profilePicture;

					// Save the updated user
					const updatedUser = await user.save();
					return updatedUser;
				} catch (err) {
					throw new Error(err.message);
				}
			},
		},

		// Mutation for deleting a user
		deleteUser: {
			type: UserType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLString) },
			},
			async resolve(parent, args) {
				try {
					const deletedUser = await User.findByIdAndDelete(args.id);
					if (!deletedUser) {
						throw new Error("User not found.");
					}
					return deletedUser;
				} catch (err) {
					throw new Error(err.message);
				}
			},
		},
	},
});

module.exports = Mutation;
