const {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
} = require("graphql");
const UserType = require("./types/user");
const TeacherType = require("./types/teacher");
const StudentType = require("./types/student");
const {
	getUser,
	getUsers,
	getTeacher,
	getTeachers,
	getStudent,
	getStudents,
	addUser,
	addTeacher,
	addStudent,
} = require("./resolvers");

// RootQuery - Handles Queries
const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		user: {
			type: UserType,
			args: { id: { type: GraphQLString } },
			resolve: getUser, // Resolver for fetching a single user
		},
		users: {
			type: new GraphQLList(UserType),
			resolve: getUsers, // Resolver for fetching all users
		},
		teacher: {
			type: TeacherType,
			args: { id: { type: GraphQLString } },
			resolve: getTeacher, // Resolver for fetching a single teacher
		},
		teachers: {
			type: new GraphQLList(TeacherType),
			resolve: getTeachers, // Resolver for fetching all teachers
		},
		student: {
			type: StudentType,
			args: { id: { type: GraphQLString } },
			resolve: getStudent, // Resolver for fetching a single student
		},
		students: {
			type: new GraphQLList(StudentType),
			resolve: getStudents, // Resolver for fetching all students
		},
	},
});

// Mutation - Handles Mutations (Adding Data)
const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		addUser: {
			type: UserType,
			args: {
				name: { type: GraphQLString },
				email: { type: GraphQLString },
				password: { type: GraphQLString },
				role: { type: GraphQLString },
			},
			resolve: addUser, // Resolver for adding a new user
		},
		addTeacher: {
			type: TeacherType,
			args: {
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
			},
			resolve: addTeacher, // Resolver for adding a new teacher
		},
		addStudent: {
			type: StudentType,
			args: {
				name: { type: GraphQLString },
				class: { type: GraphQLInt },
				age: { type: GraphQLInt },
				teacherReq: { type: GraphQLString },
				school: { type: GraphQLString },
				email: { type: GraphQLString },
				phone: { type: GraphQLString },
				favTeacher: { type: GraphQLString },
			},
			resolve: addStudent, // Resolver for adding a new student
		},
	},
});

// Export Schema
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});
