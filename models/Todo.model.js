const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
  {
    title: String,
    description: String,
    doBefore: Date,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

const Todo = model('Todo', todoSchema);

module.exports = Todo;
