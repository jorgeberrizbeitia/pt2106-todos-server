const router = require('express').Router();
const imageUploader = require('../config/cloudinary.config');

router.get('/', (req, res, next) => {
  res.json('All good in here');
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

// test

router.post('/upload', imageUploader.single('imageUrl'), (req, res, next) => {
  if (!req.file) {
    next(new Error('No file upload!'));
    return;
  }
  res.json({ imagePath: req.file.path });
});

const todosRoutes = require('./todos.routes.js');
router.use('/todos', todosRoutes);

module.exports = router;
