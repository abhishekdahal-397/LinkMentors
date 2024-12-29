const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
} = require("graphql");

const TeacherType = new GraphQLObjectType({
	name: "Teacher",
	fields: () => ({
		id: { type: GraphQLString },
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

module.exports = TeacherType;
