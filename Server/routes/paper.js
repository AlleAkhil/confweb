const express = require('express');
const router = express.Router();
const multer = require('multer');
const { Paper } = require('../models/db');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10 
  },
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)) {
      return cb(new Error('Only JPG, JPEG, PNG, or PDF files are allowed.'));
    }
    cb(null, true);
  }
});

router.post('/submit-paper', upload.single('file'), async (req, res) => {
  try {
    const { title, author, description } = req.body;

    if (!title || !author || !description || !req.file) {
      throw new Error('Missing required fields or file.');
    }

    const filePath = req.file.path;

    const newPaper = new Paper({
      title,
      author,
      description,
      filePath
    });

    await newPaper.save();
    res.status(201).json({ message: 'Paper submitted successfully' });
  } catch (error) {
    console.error('Error submitting paper:', error);
    let errorMessage = 'Failed to submit paper';
    
    if (error instanceof multer.MulterError) {
      errorMessage = 'File upload error: ' + error.message;
    } else if (error.message) {
      errorMessage = error.message;
    }

    res.status(500).json({ error: errorMessage });
  }
});

module.exports = router;
