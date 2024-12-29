import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLDate,
	GraphQLList,
} from "graphql";

const UserType = new GraphQLObjectType({
	name: "User",
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		password: { type: GraphQLString },
		role: { type: GraphQLString },
		profilePicture: { type: GraphQLString },
		phoneNumber: { type: GraphQLString },
		dateOfBirth: { type: GraphQLDate },
		createdAt: { type: GraphQLDate },
		updatedAt: { type: GraphQLDate },
	}),
});

module.exports = UserType;
