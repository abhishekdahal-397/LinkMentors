const { StudentType } = require("./types/StudentType");
const { TeacherType, rootQuery } = require("./types/TeacherType");
const Student = require("../models/studentModel"); // Adjust the path to your Student model

// Example resolver for students
const resolvers = {
	Query: {
		students: async () => {
			return await Student.find(); // Fetch all students
		},
		teachers: rootQuery.teachers.resolve, // Use the teachers resolver
	},
};

module.exports = resolvers;
