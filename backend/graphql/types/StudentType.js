import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
} from "graphql";
import { TeacherType } from "./TeacherType"; // Assuming a TeacherType is defined and exported

export const StudentType = new GraphQLObjectType({
	name: "Student",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		class: { type: GraphQLInt }, // Class the student is in
		age: { type: GraphQLInt },
		teacherReq: { type: GraphQLString }, // Requirement or preferred teacher subjects
		school: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLInt },
		favTeacher: { type: TeacherType }, // Reference to TeacherType
	}),
});
