const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  personalDetails: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    linkedin: { type: String },
    github: { type: String }
  },
  qualifications: [{
    degree: String,
    college: String,
    department: String,
    cgpa: String,
    year: String
  }],
  skills: {
    technical: [String],
    languages: [String],
    frameworks: [String],
    soft: [String]
  },
  experiences: [{
    company: String,
    role: String,
    duration: String,
    responsibilities: String
  }],
  projects: [{
    title: String,
    technologies: String,
    description: String,
    outcome: String
  }],
  strengths: [String],
  weaknesses: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Resume', ResumeSchema);
