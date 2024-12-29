const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const authenticationResolvers = require("./resolvers/authentication");

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		// Add your query fields here
	},
});

const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		...authenticationResolvers, // Include authentication resolvers
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});
