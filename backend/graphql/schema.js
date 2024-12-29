// schema.js
const { GraphQLObjectType, GraphQLSchema, GraphQLList } = require("graphql");
const { TeacherType } = require("./types/TeacherType");
const Teacher = require("../models/teacherModel");

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		teachers: {
			type: new GraphQLList(TeacherType),
			resolve(parent, args) {
				return Teacher.find(); // Fetch teachers from the database
			},
		},
	},
});

const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		// Define your mutation fields here if needed
	},
});

const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});

module.exports = schema;
