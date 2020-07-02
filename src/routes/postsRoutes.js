const express = require("express");
const router = express.Router();

const postFunctions = require("../postFunctions/postFunctions");

router.get("/", async (req, res) => {
  const { db } = res.locals;
  res.send(await postFunctions.getAllPosts(db));
});

router.post("/", async (req, res) => {
  const { body } = req;
  const { db, mongodb } = res.locals;
  res.send(await postFunctions.insertNewPost(db, body, mongodb));
});

router.put("/:postId/:updateType", async (req, res) => {
  const { body } = req;
  const { postId, updateType } = req.params;
  const { db, mongodb } = res.locals;
  res.send(
    await postFunctions.updatePost(db, body, mongodb, postId, updateType)
  );
});

router.delete("/:postId", async (req, res) => {
  const { postId } = req.params;
  const { db, mongodb } = res.locals;
  res.send(await postFunctions.deletePost(db, mongodb, postId));
});

module.exports = router;
