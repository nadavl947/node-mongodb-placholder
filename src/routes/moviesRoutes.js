const express = require("express");
const router = express.Router();

const moviesFunctions = require("../moviesFunctions/moviesFunctions");

router.get("/:pageNumber", async (req, res) => {
  const { pageNumber } = req.params;
  const { db } = res.locals;
  res.send(await moviesFunctions.getAllMovies(db, pageNumber));
});

module.exports = router;
