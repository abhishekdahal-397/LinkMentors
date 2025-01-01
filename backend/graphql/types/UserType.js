const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLEnumType,
} = require("graphql");
const { GraphQLDateTime } = require("graphql-scalars");

// Define the enum for the 'role' field
const UserRoleEnum = new GraphQLEnumType({
	name: "UserRole",
	values: {
		ADMIN: { value: "admin" },
		USER: { value: "user" },
		MODERATOR: { value: "moderator" }, // Add other roles as needed
	},
});

const UserType = new GraphQLObjectType({
	name: "User",
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		role: { type: UserRoleEnum }, // Use the defined enum for role
		profilePicture: { type: GraphQLString },
		phoneNumber: { type: GraphQLString },
		dateOfBirth: { type: GraphQLDateTime },
		createdAt: { type: GraphQLDateTime },
		updatedAt: { type: GraphQLDateTime },
	}),
});

module.exports = UserType;
