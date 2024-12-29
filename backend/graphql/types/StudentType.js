const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
} = require("graphql");
const { TeacherType } = require("./TeacherType"); // Adjust path as needed

module.exports.StudentType = new GraphQLObjectType({
	name: "Student",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		class: { type: GraphQLInt },
		age: { type: GraphQLInt },
		teacherReq: { type: GraphQLString },
		school: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLInt },
		favTeacher: { type: TeacherType }, // Reference to TeacherType
	}),
});
