const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://drashti_patel:123@node.naeo5om.mongodb.net/dataa", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const studentSchema = new mongoose.Schema({
  name: String,
  department: String,
  startYear: Number,
  endYear: Number,
  enrollment: Number,
  address: String,
});

const Student = mongoose.model("Student", studentSchema);

console.log("MongoDB connected successfully");

Student.insertMany([
  {
    name: "Drashti Patel",
    department: "Computer Science",
    startYear: 2020,
    endYear: 2024,
    enrollment: 123456,
    address: "atmiya clg",
  },
  {
    name: "abc def",
    department: "Information Technology",
    startYear: 2021,
    endYear: 2025,
    enrollment: 654321,
    address: "aaa",
  },
  {
    name: "lmn xyz",
    department: "Electronics",
    startYear: 2019,
    endYear: 2023,
    enrollment: 789012,
    address: "zzz",
  }
])
.then(() => console.log("Students inserted successfully"))
.catch(err => console.log("Error inserting students:", err));
