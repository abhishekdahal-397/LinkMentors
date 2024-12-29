const User = require("../models/User");
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");

// Query Resolvers
const getUser = async (parent, args) => {
	return await User.findById(args.id);
};

const getUsers = async () => {
	return await User.find();
};

const getTeacher = async (parent, args) => {
	return await Teacher.findById(args.id);
};

const getTeachers = async () => {
	return await Teacher.find();
};

const getStudent = async (parent, args) => {
	return await Student.findById(args.id);
};

const getStudents = async () => {
	return await Student.find();
};

// Mutation Resolvers
const addUser = async (parent, args) => {
	const user = new User({
		name: args.name,
		email: args.email,
		password: args.password,
		role: args.role,
	});
	return await user.save();
};

const addTeacher = async (parent, args) => {
	const teacher = new Teacher({
		name: args.name,
		qualification: args.qualification,
		age: args.age,
		subjects: args.subjects,
		classes: args.classes,
		experience: args.experience,
		description: args.description,
		contact: args.contact,
	});
	return await teacher.save();
};

const addStudent = async (parent, args) => {
	const student = new Student({
		name: args.name,
		class: args.class,
		age: args.age,
		teacherReq: args.teacherReq,
		school: args.school,
		email: args.email,
		phone: args.phone,
		favTeacher: args.favTeacher,
	});
	return await student.save();
};

module.exports = {
	getUser,
	getUsers,
	getTeacher,
	getTeachers,
	getStudent,
	getStudents,
	addUser,
	addTeacher,
	addStudent,
};
