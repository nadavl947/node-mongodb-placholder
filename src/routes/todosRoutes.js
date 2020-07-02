const express = require("express");
const router = express.Router();

const todosFunctions = require("../todosFunctions/todosFunctions");

router.get("/", async (req, res) => {
  const { db } = res.locals;
  res.send(await todosFunctions.getAllTodos(db));
});

router.post("/", async (req, res) => {
  const { body } = req;
  const { db } = res.locals;
  res.send(await todosFunctions.insertNewTodo(db, body));
});

router.delete("/:todoId", async (req, res) => {
  const { todoId } = req.params;
  const { db, mongodb } = res.locals;
  res.send(await todosFunctions.deleteTodo(db, todoId, mongodb));
});

router.put("/:todoId", async (req, res) => {
  const { todoId } = req.params;
  const { db, mongodb } = res.locals;
  res.send(await todosFunctions.updateTodo(db, todoId, mongodb));
});

module.exports = router;