import mongoose from "mongoose";
const teacherSchema = new mongoose.Schema({
	name: { type: String, required: true },
	qualification: { type: String, required: true },
	age: { type: Number, required: true },
	subjects: { type: [String], required: true }, // Subjects they can teach
	classes: { type: [Number], required: true }, // Classes they can teach
	experience: { type: String, required: true },
	description: { type: String }, // Optional description or bio
	contact: {
		email: { type: String, required: true },
		phoneNo: { type: String, required: true },
	},
});

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
