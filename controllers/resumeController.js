const Resume = require('../models/Resume');

// @desc    Create new resume
// @route   POST /api/resumes
// @access  Public
const createResume = async (req, res) => {
  try {
    const resumeData = req.body;
    
    // Create new resume entry in MongoDB
    const resume = new Resume(resumeData);
    await resume.save();

    res.status(201).json({
      success: true,
      message: 'Resume saved successfully',
      data: resume
    });
  } catch (error) {
    console.error(`Error saving resume: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Server error while saving resume',
      error: error.message
    });
  }
};

// @desc    Get all resumes
// @route   GET /api/resumes
// @access  Public
const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: resumes.length,
      data: resumes
    });
  } catch (error) {
    console.error(`Error fetching resumes: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching resumes',
      error: error.message
    });
  }
};

module.exports = {
  createResume,
  getResumes
};
