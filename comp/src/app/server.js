// server.js
const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Define a storage engine for multer
const storage = multer.diskStorage({
  destination: 'public/uploads/',
  filename: (req, file, cb) => {
    const uniqueFileName = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueFileName);
  },
});

const upload = multer({ storage });

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route to handle image uploads
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }
  return res.status(200).json({ imageUrl: `/uploads/${req.file.filename}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
