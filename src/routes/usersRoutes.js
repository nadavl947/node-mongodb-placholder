const express = require("express");
const router = express.Router();

const usersFunctions = require("../usersFunctions/usersFunctions");

router.get("/", async (req, res) => {
  const { db } = res.locals;
  res.send(await usersFunctions.getAllUsers(db));
});

router.post("/", async (req, res) => {
  const { body } = req;
  const { db } = res.locals;
  res.send(await usersFunctions.insertNewUser(db, body));
});

router.put("/:updateType/:userId", async (req, res) => {
  const { body } = req;
  const { updateType, userId } = req.params;
  const { db, mongodb } = res.locals;
  res.send(
    await usersFunctions.updateUser(db, body, mongodb, updateType, userId)
  );
});

router.delete("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { db, mongodb } = res.locals;
  res.send(await usersFunctions.deleteUser(db, mongodb, userId));
});

module.exports = router;
