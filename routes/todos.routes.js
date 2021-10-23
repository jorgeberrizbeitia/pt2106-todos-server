const router = require("express").Router();
const Todo = require("../models/Todo.model");

// Create a new ToDo element.
router.post("/create", (req, res, next) => {
  const { title, description, doBefore } = req.body;
  Todo.create({ title, description, doBefore })
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

// Display the list of All ToDo (only titles).
router.get("/all", (req, res, next) => {
  // Todo.find()
  Todo.find({}, { title: 1 })
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

// Display a specific ToDo element with all info.
router.get("/:id", (req, res, next) => {
  Todo.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

// Delete a specific ToDo element.
router.delete("/:id", (req, res, next) => {
  Todo.findByIdAndDelete(req.params.id)
    .then((data) => res.json("All good!" + data._id))
    .catch((err) => next(err));
});

// Edit a specific ToDo element.
// we can also do a PUT route instead of PATCH
router.patch("/:id", (req, res, next) => {
  const { title, description, doBefore } = req.body;
  Todo.findByIdAndUpdate(
    req.params.id,
    { title, description, doBefore },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

module.exports = router;
