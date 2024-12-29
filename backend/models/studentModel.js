import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
	name: { type: String, required: true },
	class: { type: Number, required: true }, // Class the student is in
	age: { type: Number, required: true },
	teacherReq: { type: String }, // Requirement or preferred teacher subjects
	school: { type: String },
	email: { type: String },
	phone: { type: Number },

	favTeacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }, // Reference to Teacher model
});

const student = mongoose.model("student", studentSchema);
module.exports = student;
