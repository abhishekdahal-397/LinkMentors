const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const authenticationResolvers = require("./resolvers/authentication");
const UserType = require("./types/UserType"); // Adjust path if needed
const User = require("../models/UserModel"); // Adjust path if needed
const { GraphQLString } = require("graphql");

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		getUser: {
			type: UserType, // Your UserType definition
			args: { id: { type: GraphQLString } },
			async resolve(parent, args) {
				return await User.findById(args.id); // Fetch user by ID
			},
		},
	},
});
const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		register: authenticationResolvers.register, // Register mutation is linked
		login: authenticationResolvers.login, // Login mutation (if you have it)
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});
