const express = require('express');
const router = express.Router();
const { createResume, getResumes } = require('../controllers/resumeController');

// Define routes
router.route('/')
  .post(createResume)
  .get(getResumes);

module.exports = router;
