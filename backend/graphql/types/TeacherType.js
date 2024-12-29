// TeacherType.js
const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
} = require("graphql");

// Assuming Teacher is a Mongoose model that we are going to fetch from the database.
const TeacherType = new GraphQLObjectType({
	name: "Teacher",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		qualification: { type: GraphQLString },
		age: { type: GraphQLInt },
		subjects: { type: new GraphQLList(GraphQLString) },
		classes: { type: new GraphQLList(GraphQLInt) },
		experience: { type: GraphQLString },
		description: { type: GraphQLString },
		contact: {
			email: { type: GraphQLString },
			phoneNo: { type: GraphQLString },
		},
	}),
});

// Export TeacherType
module.exports = { TeacherType };
